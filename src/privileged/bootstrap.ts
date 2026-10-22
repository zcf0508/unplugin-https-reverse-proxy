import type { Socket } from 'node:net'
import type { ClientHandshake } from './protocol'
import type { HelperDeps, HelperRuntime } from './server'
import { Buffer } from 'node:buffer'
import { chmodSync, chownSync, rmSync } from 'node:fs'
import { createServer } from 'node:net'
import process from 'node:process'
import { attachSocket, createHelperRuntime, createNodeHelperDeps } from './server'

export interface HelperBootstrapOptions {
  socketPath: string
  token: string
  hostsPath?: string
  /** Caddy binary; fixed here so the client never names an executable. */
  caddyBin: string
  /** Caddyfile to load; fixed for the same reason. */
  caddyConfigPath: string
  caddyCwd?: string
  caddyEnv?: Record<string, string>
  /**
   * Owner of the socket file. The helper runs as root while its client runs as
   * the developer, so the socket must be handed back or the client cannot
   * connect to it.
   */
  ownerUid?: number
  ownerGid?: number
  /** Caddy storage directory, handed back to the owner when Caddy stops. */
  caddyStoragePath?: string
  deps?: HelperDeps
  log?: (message: string) => void
}

export interface RunningHelper {
  runtime: HelperRuntime
  close: () => Promise<void>
}

const HANDSHAKE_TIMEOUT_MS = 120_000

/**
 * Runs the privileged side of the plugin: listens on a local socket, accepts
 * only a client presenting the shared token, then serves until that client
 * disconnects. Losing the client is the cleanup trigger, so a crashed or
 * `SIGKILL`ed plugin still leaves hosts and Caddy restored.
 */
export async function startHelper(options: HelperBootstrapOptions): Promise<RunningHelper> {
  const { socketPath, token } = options
  const log = options.log ?? ((message: string) => process.stdout.write(`[uhrp-helper] ${message}\n`))
  const deps = options.deps ?? createNodeHelperDeps({
    hostsPath: options.hostsPath,
    log,
    caddyBin: options.caddyBin,
    caddyConfigPath: options.caddyConfigPath,
    caddyCwd: options.caddyCwd,
    caddyEnv: options.caddyEnv,
    caddyStoragePath: options.caddyStoragePath,
    storageOwner: typeof options.ownerUid === 'number'
      ? { uid: options.ownerUid, gid: options.ownerGid ?? options.ownerUid }
      : undefined,
  })
  const runtime = createHelperRuntime(deps)

  // A previous session that was killed cannot have cleaned up its entries; do
  // it now, before any client attaches.
  await runtime.sweepStaleEntries().catch(() => {})

  try {
    rmSync(socketPath, { force: true })
  }
  catch {}

  const connections = new Set<Socket>()

  const server = createServer((socket) => {
    let buffer = ''
    let authenticated = false
    connections.add(socket)
    socket.on('close', () => connections.delete(socket))

    const timer = setTimeout(() => {
      if (!authenticated)
        socket.destroy()
    }, HANDSHAKE_TIMEOUT_MS)
    timer.unref?.()

    const onData = (chunk: Buffer): void => {
      buffer += chunk.toString('utf8')
      const index = buffer.indexOf('\n')
      if (index < 0)
        return

      const line = buffer.slice(0, index)
      const rest = buffer.slice(index + 1)

      let parsed: Partial<ClientHandshake>
      try {
        parsed = JSON.parse(line)
      }
      catch {
        socket.destroy()
        return
      }

      if (parsed.type !== 'handshake' || typeof parsed.token !== 'string') {
        socket.destroy()
        return
      }

      clearTimeout(timer)
      socket.removeListener('data', onData)

      if (parsed.token !== token) {
        socket.end(`${JSON.stringify({ type: 'handshake', ok: false, reason: 'invalid token' })}\n`)
        return
      }

      authenticated = true
      socket.write(`${JSON.stringify({ type: 'handshake', ok: true, pid: process.pid })}\n`)
      attachSocket(socket, runtime, log)

      // Requests pipelined behind the handshake belong to the attached client.
      if (rest.trim() !== '')
        socket.emit('data', Buffer.from(rest))
    }

    socket.on('data', onData)
    socket.on('error', () => {})
  })

  await new Promise<void>((resolve, reject) => {
    server.once('error', reject)
    server.listen(socketPath, () => resolve())
  })

  try {
    // The client is not root: hand the socket back to the developer and keep it
    // private to them. Without the chown, `connect()` fails with EACCES and the
    // client only sees a silent retry loop.
    if (typeof options.ownerUid === 'number') {
      chownSync(socketPath, options.ownerUid, options.ownerGid ?? options.ownerUid)
      chmodSync(socketPath, 0o600)
    }
    else {
      chmodSync(socketPath, 0o600)
    }
  }
  catch (error) {
    log(`could not set socket ownership: ${(error as Error).message}`)
  }

  return {
    runtime,
    async close() {
      // Closing the listener alone would wait for clients to hang up first;
      // shutdown has to drop the open connections as well.
      for (const socket of connections)
        socket.destroy()
      connections.clear()
      await new Promise<void>((resolve) => {
        server.close(() => resolve())
      })
    },
  }
}

/** Sockets left behind by a killed helper cannot be reused; remove them first. */
export function removeStaleSocket(socketPath: string): void {
  if (process.platform === 'win32')
    return
  try {
    rmSync(socketPath, { force: true })
  }
  catch {}
}
