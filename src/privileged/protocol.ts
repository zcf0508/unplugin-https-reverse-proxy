/**
 * Wire protocol between the unprivileged plugin process and the privileged
 * helper. Newline-delimited JSON keeps the helper dependency-free.
 *
 * The helper never executes a binary or uses a path supplied by the client:
 * both are fixed when the helper starts (`--caddy` and `--caddy-config`), so a
 * client that reaches the socket cannot turn the helper into a root shell.
 */

export type RpcId = number

export interface RpcErrorPayload {
  message: string
  code?: string
}

export type HelperRequest =
  | { id: RpcId, method: 'ping' }
  | { id: RpcId, method: 'hosts.add', params: { ip: string, host: string } }
  | { id: RpcId, method: 'hosts.remove', params: { ip: string, host: string } }
  | { id: RpcId, method: 'port.free', params: { port: number } }
  | { id: RpcId, method: 'caddy.start' }
  | { id: RpcId, method: 'caddy.stop' }
  | { id: RpcId, method: 'ca.trust' }

/** Request method names, used by the client's typed `call` overloads. */
export type HelperMethod = HelperRequest['method']

export type HelperResponse =
  | { id: RpcId, ok: true, result?: unknown }
  | { id: RpcId, ok: false, error: RpcErrorPayload }

export type HelperEvent =
  | { type: 'event', kind: 'caddy.stdout', data: string }
  | { type: 'event', kind: 'caddy.stderr', data: string }
  | { type: 'event', kind: 'caddy.exit', code: number | null, signal: string | null }

export type HelperMessage = HelperResponse | HelperEvent

export interface ClientHandshake {
  type: 'handshake'
  token: string
}

export interface ServerHandshake {
  type: 'handshake'
  ok: boolean
  pid?: number
  reason?: string
}

export type DecodedMessage =
  | { ok: true, message: HelperMessage }
  | { ok: false, error: string }

export function serializeMessage(message: unknown): string {
  return `${JSON.stringify(message)}\n`
}

/** Splits a stream into complete lines, keeping the trailing partial line. */
export function splitLines(buffer: string, chunk: string): { lines: string[], rest: string } {
  const parts = (buffer + chunk).split('\n')
  const rest = parts.pop() ?? ''
  return { lines: parts.filter(line => line.trim() !== ''), rest }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

export function decodeMessage(line: string): DecodedMessage {
  let parsed: unknown
  try {
    parsed = JSON.parse(line)
  }
  catch (error) {
    return { ok: false, error: `invalid JSON: ${(error as Error).message}` }
  }

  if (!isRecord(parsed))
    return { ok: false, error: 'message must be an object' }

  if (parsed.type === 'event') {
    if (typeof parsed.kind !== 'string')
      return { ok: false, error: 'event.kind must be a string' }
    return { ok: true, message: parsed as unknown as HelperEvent }
  }

  if (typeof parsed.id !== 'number')
    return { ok: false, error: 'response.id must be a number' }

  if (parsed.ok === true)
    return { ok: true, message: { id: parsed.id, ok: true, result: parsed.result } }

  if (parsed.ok === false) {
    const error = isRecord(parsed.error) ? parsed.error : {}
    return {
      ok: true,
      message: {
        id: parsed.id,
        ok: false,
        error: {
          message: typeof error.message === 'string' ? error.message : 'helper request failed',
          code: typeof error.code === 'string' ? error.code : undefined,
        },
      },
    }
  }

  return { ok: false, error: 'response.ok must be a boolean' }
}
