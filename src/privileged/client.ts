import type { Buffer } from 'node:buffer'
import type { Socket } from 'node:net'
import type {
  ClientHandshake,
  HelperEvent,
  HelperMessage,
  HelperRequest,
  RpcId,
  ServerHandshake,
} from './protocol'
import { connect } from 'node:net'
import process from 'node:process'
import { decodeMessage, serializeMessage, splitLines } from './protocol'

/**
 * Environment variables the privileged helper needs so Caddy behaves like the
 * user's own process (PKI location, proxy settings) without `sudo -E`.
 */
export const FORWARDED_ENV_KEYS = [
  'HOME',
  'USER',
  'LOGNAME',
  'TMPDIR',
  'HTTP_PROXY',
  'HTTPS_PROXY',
  'http_proxy',
  'https_proxy',
  'NO_PROXY',
  'no_proxy',
] as const

export function collectForwardedEnv(source: NodeJS.ProcessEnv = process.env): Record<string, string> {
  const result: Record<string, string> = {}
  for (const key of FORWARDED_ENV_KEYS) {
    const value = source[key]
    if (typeof value === 'string' && value !== '')
      result[key] = value
  }
  return result
}

export interface HelperResults {
  'ping': { pid: number }
  'hosts.add': void
  'hosts.remove': void
  'port.free': { killed: number[] }
  'caddy.start': { pid?: number }
  'caddy.stop': void
  'ca.trust': { trusted: boolean, output: string }
}

export class HelperConnectionError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'HelperConnectionError'
  }
}

export interface PrivilegedClient {
  readonly connected: boolean
  call: <M extends keyof HelperResults>(method: M, ...params: HelperParams<M>) => Promise<HelperResults[M]>
  onEvent: (listener: (event: HelperEvent) => void) => () => void
  close: () => Promise<void>
}

type HelperParams<M extends keyof HelperResults>
  = M extends 'hosts.add' | 'hosts.remove' ? [params: { ip: string, host: string }]
    : M extends 'port.free' ? [params: { port: number }]
      : []

interface PendingCall {
  resolve: (value: unknown) => void
  reject: (error: Error) => void
  timer: ReturnType<typeof setTimeout>
}

export interface ConnectOptions {
  socketPath: string
  token: string
  /** Total time to wait for the helper to accept the connection. */
  timeoutMs?: number
  retryIntervalMs?: number
  callTimeoutMs?: number
}

function openSocket(socketPath: string): Promise<Socket> {
  return new Promise<Socket>((resolve, reject) => {
    const socket = connect(socketPath)

    function onConnect(): void {
      socket.removeListener('error', onError)
      resolve(socket)
    }

    function onError(error: Error): void {
      socket.removeListener('connect', onConnect)
      reject(error)
    }

    socket.once('error', onError)
    socket.once('connect', onConnect)
  })
}

/**
 * Connects to an already-running helper and performs the token handshake.
 * Retries because the helper may still be starting while sudo asks for a password.
 */
export async function connectClient(options: ConnectOptions): Promise<PrivilegedClient> {
  const {
    socketPath,
    token,
    timeoutMs = 120_000,
    retryIntervalMs = 100,
    callTimeoutMs = 30_000,
  } = options

  const deadline = Date.now() + timeoutMs
  let lastError: Error | undefined

  while (Date.now() < deadline) {
    try {
      return await handshake(socketPath, token, callTimeoutMs)
    }
    catch (error) {
      lastError = error as Error

      // A permission or protocol error will not resolve by waiting, and
      // retrying hides the real cause behind a silent hang.
      const code = (lastError as NodeJS.ErrnoException).code
      if (code === 'EACCES' || lastError instanceof HelperConnectionError)
        throw lastError

      await new Promise(resolve => setTimeout(resolve, retryIntervalMs))
    }
  }

  throw new HelperConnectionError(
    `privileged helper is not reachable at ${socketPath}: ${lastError?.message ?? 'timed out'}`,
  )
}

function handshake(socketPath: string, token: string, callTimeoutMs: number): Promise<PrivilegedClient> {
  return new Promise<PrivilegedClient>((resolve, reject) => {
    void openSocket(socketPath).then((socket) => {
      let buffer = ''
      let settled = false

      const fail = (error: Error): void => {
        if (settled)
          return
        settled = true
        socket.destroy()
        reject(error)
      }

      const onData = (chunk: Buffer): void => {
        if (settled)
          return

        const split = splitLines(buffer, chunk.toString('utf8'))
        buffer = split.rest
        const line = split.lines[0]
        if (line === undefined)
          return

        let hello: ServerHandshake
        try {
          hello = JSON.parse(line) as ServerHandshake
        }
        catch (error) {
          return fail(new HelperConnectionError(`invalid handshake reply: ${(error as Error).message}`))
        }

        if (hello.type !== 'handshake')
          return fail(new HelperConnectionError('helper did not answer the handshake'))

        if (!hello.ok)
          return fail(new HelperConnectionError(hello.reason ?? 'helper rejected the handshake'))

        settled = true
        socket.removeListener('data', onData)
        socket.removeListener('error', onError)
        const remaining = split.lines.slice(1)
        resolve(createClient(socket, [split.rest, ...remaining].filter(Boolean).join('\n'), callTimeoutMs))
      }

      function onError(error: Error): void {
        fail(error)
      }

      socket.on('data', onData)
      socket.on('error', onError)

      const greeting: ClientHandshake = { type: 'handshake', token }
      socket.write(serializeMessage(greeting))
    }, reject)
  })
}

function createClient(socket: Socket, initialBuffer: string, callTimeoutMs: number): PrivilegedClient {
  let buffer = initialBuffer
  let connected = true
  let nextId: RpcId = 1

  const pending = new Map<RpcId, PendingCall>()
  const listeners = new Set<(event: HelperEvent) => void>()

  socket.on('data', (chunk: Buffer) => {
    const split = splitLines(buffer, chunk.toString('utf8'))
    buffer = split.rest

    for (const line of split.lines) {
      const decoded = decodeMessage(line)
      if (!decoded.ok)
        continue

      const message: HelperMessage = decoded.message
      if (!('id' in message)) {
        for (const listener of listeners)
          listener(message)
        continue
      }

      const entry = pending.get(message.id)
      if (!entry)
        continue

      pending.delete(message.id)
      clearTimeout(entry.timer)

      if (message.ok)
        entry.resolve(message.result)
      else
        entry.reject(new Error(message.error.message))
    }
  })

  const disconnect = (): void => {
    if (!connected)
      return
    connected = false
    for (const [id, entry] of pending) {
      clearTimeout(entry.timer)
      pending.delete(id)
      entry.reject(new HelperConnectionError('privileged helper connection closed'))
    }
  }

  socket.on('close', disconnect)
  socket.on('error', disconnect)

  function call(method: keyof HelperResults, params?: unknown): Promise<unknown> {
    if (!connected)
      return Promise.reject(new HelperConnectionError('privileged helper is not connected'))

    const id = nextId++
    const request = { id, method, params } as unknown as HelperRequest

    return new Promise<unknown>((resolve, reject) => {
      const timer = setTimeout(() => {
        pending.delete(id)
        reject(new HelperConnectionError(`privileged helper did not answer "${method}" in time`))
      }, callTimeoutMs)

      pending.set(id, { resolve, reject, timer })
      socket.write(serializeMessage(request))
    })
  }

  return {
    get connected() {
      return connected
    },
    call: call as PrivilegedClient['call'],
    onEvent(listener) {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    async close() {
      disconnect()
      socket.destroy()
    },
  }
}
