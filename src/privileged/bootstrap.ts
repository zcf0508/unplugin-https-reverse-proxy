import type { Socket } from 'node:net'
import type { ClientHandshake } from './protocol'
import type { HelperDeps, HelperRuntime } from './server'
import { Buffer } from 'node:buffer'
import { chmodSync, chownSync, existsSync, readFileSync, rmSync } from 'node:fs'
import { createServer } from 'node:net'
import { dirname, join } from 'node:path'
import process from 'node:process'
import { checkPrivilegedPath, describeRejection } from './path-guard'
import { attachSocket, createHelperRuntime, createNodeHelperDeps } from './server'

export interface HelperBootstrapOptions {
  socketPath: string
  token: string
  hostsPath?: string
  /** Caddy binary; fixed here so the client never names an executable. */
  caddyBin: string
  /** Caddyfile to load; fixed for the same reason. */
  caddyConfigPath: string
  /** Admin API socket; used by `ca.trust` instead of the TCP default. */
  caddyAdminSocket?: string
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
  /**
   * How long the helper lingers with no clients before exiting.
   *
   * Kept short so a helper nobody is using does not stay on the machine as an
   * idle root process. Within the same terminal a restart usually happens
   * sooner than this and still reuses the running helper.
   */
  idleTimeoutMs?: number
  /**
   * Whether the idle timer may end this process.
   *
   * True for the real helper, which owns its process. False when `startHelper`
   * is called in-process (tests): exiting there would take the caller down
   * with it.
   */
  exitOnIdle?: boolean
  deps?: HelperDeps
  log?: (message: string) => void
}

export interface RunningHelper {
  runtime: HelperRuntime
  close: () => Promise<void>
}

const HANDSHAKE_TIMEOUT_MS = 120_000

/** Default idle lifetime after the last client leaves. */
export const DEFAULT_IDLE_TIMEOUT_MS = 30_000

/**
 * Runs the privileged side of the plugin: listens on a local socket, accepts
 * only a client presenting the shared token, then serves until that client
 * disconnects. Losing the client is the cleanup trigger, so a crashed or
 * `SIGKILL`ed plugin still leaves hosts and Caddy restored.
 */
export async function startHelper(options: HelperBootstrapOptions): Promise<RunningHelper> {
  const { socketPath, token } = options
  const log = options.log ?? ((message: string) => process.stdout.write(`[uhrp-helper] ${message}\n`))

  // The binary and the config travel in as arguments from a process running as
  // the developer. Refuse them when they can be rewritten by someone else:
  // running as root, a swapped binary or Caddyfile is a local privilege gain.
  for (const check of [
    checkPrivilegedPath(options.caddyBin, { label: 'Caddy binary', ownerUid: options.ownerUid }),
    checkPrivilegedPath(options.caddyConfigPath, { label: 'Caddyfile', ownerUid: options.ownerUid }),
  ]) {
    if (check) {
      log(describeRejection(check))
      throw new Error(describeRejection(check))
    }
  }
  const deps = options.deps ?? createNodeHelperDeps({
    hostsPath: options.hostsPath,
    log,
    caddyBin: options.caddyBin,
    caddyConfigPath: options.caddyConfigPath,
    caddyAdminSocket: options.caddyAdminSocket,
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
  const idleTimeoutMs = options.idleTimeoutMs ?? DEFAULT_IDLE_TIMEOUT_MS
  // The real helper is a process of its own and may end itself. When this runs
  // inside a host process (tests), only the socket is released.
  const exitOnIdle = options.exitOnIdle ?? true
  let idleTimer: ReturnType<typeof setTimeout> | undefined

  const stopIdleTimer = (): void => {
    if (idleTimer) {
      clearTimeout(idleTimer)
      idleTimer = undefined
    }
  }

  const server = createServer((socket) => {
    let buffer = ''
    let authenticated = false
    stopIdleTimer()
    connections.add(socket)
    socket.on('close', () => {
      connections.delete(socket)
      if (connections.size === 0)
        scheduleIdleExit()
    })

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

  /**
   * Exits once nobody needs the helper.
   *
   * Without this, every dev server that ever ran leaves a root process behind.
   * The socket and token are removed too, but only while they still carry this
   * process's identity: a newer helper may already own them.
   */
  function scheduleIdleExit(): void {
    if (idleTimer || connections.size > 0)
      return

    idleTimer = setTimeout(() => {
      idleTimer = undefined
      if (connections.size > 0)
        return

      log('no clients left; shutting down')
      removeOwnSocket(socketPath, token)

      if (!exitOnIdle) {
        server.close()
        return
      }

      server.close(() => process.exit(0))
      // A listener with no clients closes synchronously, but keep a backstop so
      // the process cannot linger if a close callback never arrives.
      setTimeout(() => process.exit(0), 1000).unref?.()
    }, idleTimeoutMs)
    idleTimer.unref?.()
  }

  await new Promise<void>((resolve, reject) => {
    server.once('error', reject)
    server.listen(socketPath, () => resolve())
  })

  // A helper nobody ever connects to is as useless as one whose clients left:
  // start the timer now so a failed handshake does not strand it.
  scheduleIdleExit()

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

/**
 * Removes this helper's socket and token, but only if they are still its own.
 *
 * A newer helper may have taken both over; deleting them then would break a
 * session this process never served.
 */
function removeOwnSocket(socketPath: string, token: string): void {
  if (process.platform === 'win32')
    return

  try {
    const tokensDir = dirname(socketPath)
    const tokenFile = join(tokensDir, 'helper.token')
    const current = existsSync(tokenFile) ? readFileSync(tokenFile, 'utf8').trim() : undefined
    if (current === token)
      rmSync(tokenFile, { force: true })
  }
  catch {}

  try {
    rmSync(socketPath, { force: true })
  }
  catch {}
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
