import type { Buffer } from 'node:buffer'
import type { IncomingMessage, ServerResponse } from 'node:http'
import type { ViteDevServer } from 'vite'

const SSE_PATH = '/__hmr_sse'
const SEND_PATH = '/__hmr_send'
const MAX_POST_BODY = 64 * 1024 // 64KB limit for client messages

export function setupHmrSseBridge(server: ViteDevServer): void {
  const sseClients = new Set<ServerResponse>()

  // Monkey-patch server.ws.send to also push to SSE clients
  const originalSend = server.ws.send.bind(server.ws)
  server.ws.send = (...args: any[]) => {
    // Call original WebSocket send
    ;(originalSend as any)(...args)

    // Build the payload string same as Vite does internally
    let payload: string
    if (typeof args[0] === 'string') {
      // server.ws.send(event, data) — custom event, wrap it
      payload = JSON.stringify({ type: 'custom', event: args[0], data: args[1] })
    }
    else {
      // server.ws.send(payloadObject)
      payload = JSON.stringify(args[0])
    }

    // Push to all SSE clients (skip errored ones)
    for (const res of sseClients) {
      try {
        res.write(`data: ${payload}\n\n`)
      }
      catch {
        sseClients.delete(res)
      }
    }
  }

  // Add middleware for SSE and POST endpoints
  server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
    const url = req.url?.split('?')[0]

    if (url === SSE_PATH && req.method === 'GET') {
      handleSseConnection(req, res, sseClients)
      return
    }

    if (url === SEND_PATH && req.method === 'POST') {
      handleClientMessage(req, res, server)
      return
    }

    next()
  })
}

function handleSseConnection(
  _req: IncomingMessage,
  res: ServerResponse,
  sseClients: Set<ServerResponse>,
): void {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  })

  // Send initial connected message (same as Vite's WebSocket)
  res.write(`data: ${JSON.stringify({ type: 'connected' })}\n\n`)

  sseClients.add(res)

  // Keep-alive ping every 30s
  const keepAlive = setInterval(() => {
    try {
      res.write(': ping\n\n')
    }
    catch { cleanup() }
  }, 30000)

  function cleanup(): void {
    clearInterval(keepAlive)
    sseClients.delete(res)
  }

  res.on('close', cleanup)
  res.on('error', cleanup)
}

function handleClientMessage(
  req: IncomingMessage,
  res: ServerResponse,
  server: ViteDevServer,
): void {
  let body = ''
  let overflow = false
  req.on('data', (chunk: Buffer) => {
    body += chunk.toString()
    if (body.length > MAX_POST_BODY) {
      overflow = true
      req.destroy()
    }
  })
  req.on('end', () => {
    if (overflow) {
      res.writeHead(413)
      res.end('{"ok":false}')
      return
    }
    try {
      const data = JSON.parse(body)
      // Forward custom events to Vite's HMR server
      // Vite client sends: { type: 'custom', event: string, data: any }
      if (data.type === 'custom' && data.event) {
        // Trigger listeners registered via server.ws.on(event, handler)
        // by simulating the internal dispatch with a dummy client
        const dummyClient = {
          send: (...args: any[]) => { server.ws.send(...(args as [any])) },
        }
        // Access internal customListeners via the 'on' registered handlers
        // We re-emit by calling the server's hot channel listener mechanism
        ;(server as any).environments?.client?.hot?.api?.emit?.(data.event, data.data, dummyClient)
      }
      res.writeHead(200, {
        'Content-Type': 'application/json',
      })
      res.end('{"ok":true}')
    }
    catch {
      res.writeHead(400)
      res.end('{"ok":false}')
    }
  })
}

/**
 * Client-side script that patches WebSocket to use SSE+fetch on iOS Safari.
 * This script is injected via Vite's transformIndexHtml hook.
 */
export const hmrSseBridgeClientScript = `
(function() {
  // Activate when served over HTTPS to bypass WSS self-signed cert issues
  if (location.protocol !== 'https:') return;

  var OriginalWebSocket = window.WebSocket;

  function SseWebSocket(originalUrl) {
    var self = this;
    // WebSocket readyState constants on instance
    self.CONNECTING = 0;
    self.OPEN = 1;
    self.CLOSING = 2;
    self.CLOSED = 3;
    self.readyState = 0;
    self.onopen = null;
    self.onmessage = null;
    self.onclose = null;
    self.onerror = null;
    self.bufferedAmount = 0;
    self.extensions = '';
    self.binaryType = 'blob';
    self.protocol = 'vite-hmr';
    self.url = originalUrl;
    self._listeners = {};
    self._opened = false;

    var sseUrl = location.origin + '${SSE_PATH}';
    var sendUrl = location.origin + '${SEND_PATH}';
    self._sendUrl = sendUrl;

    var es = new EventSource(sseUrl);
    self._es = es;

    es.onopen = function() {
      if (self._opened) return;
      self._opened = true;
      self.readyState = 1;
      var evt = new Event('open');
      if (self.onopen) self.onopen(evt);
      self._emit('open', evt);
    };

    es.onmessage = function(e) {
      var evt = new MessageEvent('message', { data: e.data });
      if (self.onmessage) self.onmessage(evt);
      self._emit('message', evt);
    };

    es.onerror = function() {
      // EventSource auto-reconnects on error; don't treat as fatal close
      // Only emit error event, never close event (SSE handles reconnect internally)
      if (self.readyState >= 2) return;
      // EventSource auto-reconnects; no action needed
    };
  }

  SseWebSocket.prototype.send = function(data) {
    if (this.readyState !== 1) return;
    fetch(this._sendUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data
    }).catch(function() {});
  };

  SseWebSocket.prototype.close = function() {
    if (this.readyState >= 2) return;
    this.readyState = 3;
    if (this._es) this._es.close();
    var evt = new CloseEvent('close', { code: 1000, reason: '', wasClean: true });
    if (this.onclose) this.onclose(evt);
    this._emit('close', evt);
  };

  SseWebSocket.prototype.addEventListener = function(type, fn, options) {
    if (!this._listeners[type]) this._listeners[type] = [];
    var entry = { fn: fn, once: !!(options && options.once) };
    this._listeners[type].push(entry);
  };

  SseWebSocket.prototype.removeEventListener = function(type, fn) {
    var list = this._listeners[type];
    if (!list) return;
    this._listeners[type] = list.filter(function(e) { return e.fn !== fn; });
  };

  SseWebSocket.prototype.dispatchEvent = function(evt) {
    this._emit(evt.type, evt);
    return true;
  };

  SseWebSocket.prototype._emit = function(type, evt) {
    var list = this._listeners[type];
    if (!list) return;
    var remaining = [];
    list.forEach(function(entry) {
      entry.fn(evt);
      if (!entry.once) remaining.push(entry);
    });
    this._listeners[type] = remaining;
  };

  function PatchedWebSocket(url, protocols) {
    // Only intercept Vite HMR connections (protocol 'vite-hmr')
    var isViteHmr = protocols === 'vite-hmr'
      || (Array.isArray(protocols) && protocols.indexOf('vite-hmr') !== -1);
    if (!isViteHmr) {
      if (protocols !== undefined) {
        return new OriginalWebSocket(url, protocols);
      }
      return new OriginalWebSocket(url);
    }
    return new SseWebSocket(url);
  }

  PatchedWebSocket.CONNECTING = 0;
  PatchedWebSocket.OPEN = 1;
  PatchedWebSocket.CLOSING = 2;
  PatchedWebSocket.CLOSED = 3;
  PatchedWebSocket.prototype = Object.create(OriginalWebSocket.prototype);
  PatchedWebSocket.prototype.constructor = PatchedWebSocket;

  window.WebSocket = PatchedWebSocket;
})();
`
