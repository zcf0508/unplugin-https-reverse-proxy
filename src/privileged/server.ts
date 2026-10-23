import type { Buffer } from 'node:buffer'
import type { Socket } from 'node:net'
import type { HelperEvent, HelperRequest, HelperResponse } from './protocol'
import { execFile, spawn } from 'node:child_process'
import { lchownSync, lstatSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { platform } from 'node:os'
import { join } from 'node:path'
import process from 'node:process'
import { promisify } from 'node:util'
import { addHost, removeHost, removeMarkedHosts } from './hosts-file'
import { parseListeningPids, parseWindowsListeningPids } from './ports'
import { serializeMessage } from './protocol'
import { isAllowedFreePort, isSafeHost, isSafeIp } from './validation'

const execFileAsync = promisify(execFile)

/** Runs a command whose non-zero exit is expected, keeping stdout. */
function execFileQuiet(file: string, args: string[]): Promise<{ stdout: string }> {
  return new Promise((resolve) => {
    execFile(file, args, (error, stdout) => resolve({ stdout: error && !stdout ? '' : stdout }))
  })
}

export const HOSTS_PATH = platform() === 'win32'
  ? 'C:\\Windows\\System32\\drivers\\etc\\hosts'
  : '/etc/hosts'

/**
 * Command that drops the resolver cache so a fresh hosts entry is visible
 * immediately. Each platform caches differently, so the command is per-OS.
 */
const FLUSH_COMMANDS: Record<string, Array<{ file: string, args: string[] }>> = {
  win32: [{ file: 'ipconfig', args: ['/flushdns'] }],
  darwin: [{ file: 'killall', args: ['-HUP', 'mDNSResponder'] }],
  // systemd-resolved is the common case; the legacy name covers older distros
  // and hosts without resolved simply have no cache to drop.
  linux: [
    { file: 'resolvectl', args: ['flush-caches'] },
    { file: 'systemd-resolve', args: ['--flush-caches'] },
  ],
}

const FLUSH_FALLBACK = [{ file: 'killall', args: ['-HUP', 'mDNSResponder'] }] as const

/** Handle on the Caddy process owned by the helper. */
export interface CaddyChild {
  pid?: number
  kill: (signal?: NodeJS.Signals) => boolean
  /** False once the process has exited; undefined when unknown. */
  running?: boolean
}

/**
 * Everything privileged the helper can do.
 *
 * Paths and arguments are fixed at helper start-up; the client only chooses
 * when* something happens, never *what* runs. That keeps the privileged
 * surface to a handful of primitives even if the socket is reached by an
 * unexpected local process.
 */
export interface HelperDeps {
  readHosts: () => string
  writeHosts: (content: string) => void
  flushDns: () => Promise<void>
  /** Releases a port; never kills the pid in `keepPid`. */
  freePort: (port: number, keepPid?: number) => Promise<number[]>
  /** Caddy binary and the Caddyfile it must load, both fixed at start-up. */
  caddyBin: string
  caddyConfigPath: string
  caddyCwd: string
  caddyEnv: Record<string, string>
  /** Installs the local root CA using a helper-owned command, not a client path. */
  trustLocalCa: () => Promise<{ trusted: boolean, output: string }>
  /** Caddy writes its PKI as root; this tree goes back to the user afterwards. */
  caddyStoragePath?: string
  storageOwner?: { uid: number, gid: number }
  /** Starts Caddy with the configuration fixed at helper start-up. */
  startCaddy: (emit: (event: HelperEvent) => void) => CaddyChild
  stopCaddy: () => Promise<void>
  log: (message: string) => void
}

/**
 * Resolver caching only affects how fast a new entry is picked up, so a failed
 * flush is logged instead of rolling back a hosts edit that already succeeded.
 */
async function flushDnsBestEffort(deps: HelperDeps): Promise<void> {
  try {
    await deps.flushDns()
  }
  catch (error) {
    deps.log(`dns flush failed: ${(error as Error).message}`)
  }
}

export interface HelperRuntime {
  /** `client` identifies the caller so shared host mappings are reference-counted. */
  handle: (request: HelperRequest, client?: object) => Promise<HelperResponse>
  /** Registers a connected client so Caddy output reaches it. */
  attach: (client: object) => void
  /** Last client gone: stop Caddy and drop the hosts entries this plugin wrote. */
  detach: (client: object) => Promise<void>
  /** Runs the teardown once, regardless of how many clients were attached. */
  dispose: () => Promise<void>
  /** Removes hosts entries a previous crashed session left behind. */
  sweepStaleEntries: () => Promise<boolean>
  /** Number of attached dev servers; a signal must not tear down a live one. */
  clientCount: () => number
}

/**
 * Request router shared by the helper process and its tests. Kept free of
 * sockets so tests can drive it against a temp hosts file and a fake Caddy.
 */
export function createHelperRuntime(deps: HelperDeps): HelperRuntime {
  const clients = new Set<object>()
  let teardown: Promise<void> | undefined
  // Bumped whenever a client attaches. A teardown that started before the bump
  // belongs to a previous generation and must not touch the new session.
  let generation = 0
  let caddy: CaddyChild | undefined

  // Which client asked for which host. Two projects may map the same domain, so
  // a mapping is only removed once its last holder is gone.
  const hostOwners = new Map<string, Set<object>>()

  const hostId = (ip: string, host: string): string => `${ip} ${host.toLowerCase()}`

  function addHostOwner(client: object | undefined, ip: string, host: string): void {
    const id = hostId(ip, host)
    let owners = hostOwners.get(id)
    if (!owners) {
      owners = new Set()
      hostOwners.set(id, owners)
    }
    owners.add(client ?? deps)
  }

  /** True when no other client still needs this mapping. */
  function releaseHostOwner(client: object | undefined, ip: string, host: string): boolean {
    const id = hostId(ip, host)
    const owners = hostOwners.get(id)
    if (!owners)
      return true

    owners.delete(client ?? deps)
    if (owners.size > 0)
      return false

    hostOwners.delete(id)
    return true
  }

  const broadcast = (event: HelperEvent): void => {
    const line = serializeMessage(event)
    for (const client of clients) {
      const socket = client as Socket
      if (typeof socket.write === 'function' && !socket.destroyed)
        socket.write(line)
    }
  }

  async function stopCaddy(): Promise<void> {
    const current = caddy
    caddy = undefined
    if (current) {
      try {
        current.kill('SIGTERM')
      }
      catch {}
    }
    await deps.stopCaddy().catch(() => {})

    // Give Caddy's files back to the developer: the next start runs as root
    // again, but the developer must be able to read the PKI in between.
    if (deps.caddyStoragePath && deps.storageOwner)
      await reclaimTree(deps.caddyStoragePath, deps.storageOwner.uid, deps.storageOwner.gid).catch(() => {})
  }

  function dispose(): Promise<void> {
    if (!teardown) {
      const startedAt = generation
      teardown = (async () => {
        try {
          // A client may have attached while this teardown was queued; its
          // entries belong to the new session and must survive.
          if (generation === startedAt) {
            const edited = removeMarkedHosts(deps.readHosts())
            if (edited.changed) {
              deps.writeHosts(edited.content)
              await deps.flushDns().catch(() => {})
            }
          }
        }
        catch (error) {
          deps.log(`hosts cleanup failed: ${(error as Error).message}`)
        }

        // The new session owns Caddy now; stopping it here would kill a server
        // this generation never started.
        if (generation === startedAt)
          await stopCaddy()
      })()
    }
    return teardown
  }

  async function sweepStaleEntries(): Promise<boolean> {
    try {
      const edited = removeMarkedHosts(deps.readHosts())
      if (!edited.changed)
        return false
      deps.writeHosts(edited.content)
      await flushDnsBestEffort(deps)
      return true
    }
    catch (error) {
      deps.log(`stale hosts cleanup failed: ${(error as Error).message}`)
      return false
    }
  }

  async function handle(request: HelperRequest, client?: object): Promise<HelperResponse> {
    try {
      switch (request.method) {
        case 'ping':
          return { id: request.id, ok: true, result: { pid: process.pid } }

        case 'hosts.add': {
          const { ip, host } = request.params
          if (!isSafeIp(ip) || !isSafeHost(host))
            return { id: request.id, ok: false, error: { message: 'invalid hosts entry' } }

          const edited = addHost(deps.readHosts(), ip, host)
          if (edited.changed)
            deps.writeHosts(edited.content)
          addHostOwner(client, ip, host)
          await flushDnsBestEffort(deps)
          return { id: request.id, ok: true }
        }

        case 'hosts.remove': {
          const { ip, host } = request.params
          if (!isSafeIp(ip) || !isSafeHost(host))
            return { id: request.id, ok: false, error: { message: 'invalid hosts entry' } }

          // Another project may still need this domain; only the last holder
          // removes the mapping.
          const last = releaseHostOwner(client, ip, host)
          if (!last)
            return { id: request.id, ok: true, result: { kept: true } }

          const edited = removeHost(deps.readHosts(), ip, host)
          if (edited.changed)
            deps.writeHosts(edited.content)
          await flushDnsBestEffort(deps)
          return { id: request.id, ok: true }
        }

        case 'port.free': {
          const { port } = request.params
          if (!isAllowedFreePort(port))
            return { id: request.id, ok: false, error: { message: `port ${port} is not releasable` } }

          // Caddy belongs to this helper, so a port sweep must never kill it:
          // the pid is the one serving every other project's domains.
          const killed = await deps.freePort(port, caddy?.pid)
          return { id: request.id, ok: true, result: { killed } }
        }

        case 'caddy.start': {
          // Idempotent: several dev servers share one Caddy, so a second start
          // must attach to the running process instead of restarting it.
          if (caddy && caddy.running !== false)
            return { id: request.id, ok: true, result: { pid: caddy.pid, started: false } }

          caddy = deps.startCaddy(broadcast)
          return { id: request.id, ok: true, result: { pid: caddy.pid, started: true } }
        }

        case 'caddy.stop': {
          await stopCaddy()
          return { id: request.id, ok: true }
        }

        case 'ca.trust': {
          const result = await deps.trustLocalCa()
          return { id: request.id, ok: true, result }
        }

        default:
          return { id: (request as HelperRequest).id, ok: false, error: { message: 'unknown method' } }
      }
    }
    catch (error) {
      return { id: request.id, ok: false, error: { message: (error as Error).message } }
    }
  }

  return {
    handle,
    attach(client) {
      clients.add(client)
      // Only the newest generation may clean up; an in-flight teardown started
      // before this call is abandoned rather than cancelled mid-write.
      generation++
      teardown = undefined
    },
    async detach(client) {
      clients.delete(client)

      // Drop only the mappings this client was the last holder of, so a project
      // that exits leaves the domains another project still serves alone.
      for (const [id, owners] of [...hostOwners]) {
        if (!owners.delete(client) || owners.size > 0)
          continue

        hostOwners.delete(id)
        const [ip, host] = id.split(' ')
        try {
          const edited = removeHost(deps.readHosts(), ip, host)
          if (edited.changed) {
            deps.writeHosts(edited.content)
            await flushDnsBestEffort(deps)
          }
        }
        catch (error) {
          deps.log(`hosts cleanup failed: ${(error as Error).message}`)
        }
      }

      if (clients.size === 0)
        await dispose()
    },
    dispose,
    sweepStaleEntries,
    clientCount: () => clients.size,
  }
}

export interface NodeHelperDepsOptions {
  hostsPath?: string
  caddyBin: string
  caddyConfigPath: string
  /** Admin API socket; `ca.trust` talks to it instead of the TCP default. */
  caddyAdminSocket?: string
  caddyCwd?: string
  caddyEnv?: Record<string, string>
  /** Caddy storage directory; handed back to the user when Caddy stops. */
  caddyStoragePath?: string
  /** Owner that receives the storage directory after Caddy stops. */
  storageOwner?: { uid: number, gid: number }
  log?: (message: string) => void
}

/** Best-effort recursive chown, skipping anything it cannot read. */
async function reclaimTree(target: string, uid: number, gid: number): Promise<string[]> {
  const reclaimed: string[] = []

  const walk = (path: string): void => {
    let stats
    try {
      // `lstat`: a symlink must never redirect a root chown to its target.
      stats = lstatSync(path)
    }
    catch {
      return
    }

    try {
      lchownSync(path, uid, gid)
      reclaimed.push(path)
    }
    catch {}

    if (!stats.isDirectory())
      return

    let entries: string[]
    try {
      entries = readdirSync(path)
    }
    catch {
      return
    }

    for (const entry of entries)
      walk(join(path, entry))
  }

  walk(target)
  return reclaimed
}

/** Installs the Caddy root CA using helper-owned commands. */
async function trustLocalCaWithSystemTools(
  caddyBin: string,
  adminSocket: string | undefined,
): Promise<{ trusted: boolean, output: string }> {
  // `caddy trust` reads the CA through the admin API, which only exists while
  // Caddy is serving; the plugin calls this after Caddy is up. The admin API is
  // a unix socket when the template enabled one, so the address follows it
  // instead of the old TCP default.
  const address = adminSocket ? `unix/${adminSocket}` : '127.0.0.1:2019'
  try {
    const { stdout, stderr } = await execFileAsync(
      caddyBin,
      ['trust', '--ca', 'local', '--address', address],
      { timeout: 120_000 },
    )
    return { trusted: true, output: `${stdout}${stderr}`.trim() }
  }
  catch (error) {
    const output = String((error as { stdout?: string }).stdout ?? '') + String((error as { stderr?: string }).stderr ?? '')
    if (/already|not modified|no changes/i.test(output))
      return { trusted: true, output: output.trim() }
    throw new Error(output.trim() || (error as Error).message)
  }
}

/** Production wiring for the helper process. */
export function createNodeHelperDeps(options: NodeHelperDepsOptions): HelperDeps {
  const hostsPath = options.hostsPath ?? HOSTS_PATH
  const log = options.log ?? ((message: string) => process.stdout.write(`${message}\n`))
  let caddy: CaddyChild | undefined

  // Caddy runs in its own session, so it no longer dies with this process. The
  // `exit` hook is the last chance to take it down; it must stay synchronous,
  // which `kill` is. Nothing runs after SIGKILL, and that case is covered by
  // the next start freeing the port.
  process.on('exit', () => {
    if (caddy?.pid === undefined)
      return
    try {
      process.kill(caddy.pid, 'SIGTERM')
    }
    catch {}
  })

  return {
    readHosts: () => readFileSync(hostsPath, 'utf8'),
    writeHosts: (content) => {
      writeFileSync(hostsPath, content)
    },
    flushDns: async () => {
      const candidates = FLUSH_COMMANDS[platform()] ?? [...FLUSH_FALLBACK]
      let lastError: Error | undefined

      for (const candidate of candidates) {
        try {
          await execFileAsync(candidate.file, candidate.args)
          return
        }
        catch (error) {
          lastError = error as Error
        }
      }

      throw lastError ?? new Error('no DNS cache flush command for this platform')
    },
    freePort: async (port, keepPid) => {
      // `lsof` exits with 1 when nothing matches, which is the normal case for
      // a free port; only its stdout carries the answer.
      const pids = platform() === 'win32'
        ? parseWindowsListeningPids((await execFileAsync('netstat', ['-ano'])).stdout, port)
        : parseListeningPids((await execFileQuiet('lsof', [`-ti:${port}`, '-sTCP:LISTEN'])).stdout)

      const killed: number[] = []
      for (const pid of pids) {
        // Never kill the helper itself or the Caddy it owns: that Caddy serves
        // every project sharing this helper, not just the caller's.
        if (pid === process.pid || (keepPid !== undefined && pid === keepPid))
          continue
        try {
          process.kill(pid, 'SIGTERM')
          killed.push(pid)
        }
        catch {}
      }
      return killed
    },
    caddyBin: options.caddyBin,
    caddyConfigPath: options.caddyConfigPath,
    caddyCwd: options.caddyCwd ?? process.cwd(),
    caddyEnv: options.caddyEnv ?? {},
    trustLocalCa: () => trustLocalCaWithSystemTools(options.caddyBin, options.caddyAdminSocket),
    caddyStoragePath: options.caddyStoragePath,
    storageOwner: options.storageOwner,
    startCaddy: (emit) => {
      // `--watch` makes Caddy reload when another project rewrites the shared
      // Caddyfile. Without it the second project's route never takes effect.
      //
      // `detached` puts Caddy in its own session. It shares one Caddy between
      // projects, so the Ctrl+C that stops one dev server must not reach it:
      // the whole foreground process group gets SIGINT, and Caddy exits on
      // SIGINT. `kill()` still targets the pid, and the exit event still fires.
      // Windows has no process groups to escape and `detached` would open a
      // console window there, so it stays off.
      const child = spawn(options.caddyBin, ['run', '--adapter', 'caddyfile', '--config', options.caddyConfigPath, '--watch'], {
        cwd: options.caddyCwd ?? process.cwd(),
        env: { ...process.env, ...options.caddyEnv },
        stdio: ['ignore', 'pipe', 'pipe'],
        detached: platform() !== 'win32',
      })
      const handle: CaddyChild & { running?: boolean } = {
        pid: child.pid,
        kill: signal => child.kill(signal),
        running: true,
      }
      child.stdout?.on('data', (data: Buffer) => emit({ type: 'event', kind: 'caddy.stdout', data: data.toString() }))
      child.stderr?.on('data', (data: Buffer) => emit({ type: 'event', kind: 'caddy.stderr', data: data.toString() }))
      child.on('exit', (code, signal) => {
        // Recorded before broadcasting so a later `caddy.start` knows it has to
        // spawn again rather than reuse a dead process.
        handle.running = false
        emit({ type: 'event', kind: 'caddy.exit', code, signal })
      })
      caddy = handle
      return handle
    },
    stopCaddy: async () => {
      const current = caddy
      caddy = undefined
      if (!current)
        return
      try {
        current.kill('SIGTERM')
      }
      catch {}
    },
    log,
  }
}

/**
 * Serves requests on an authenticated connection. When the client disappears —
 * including a `SIGKILL` of the plugin process — the socket closes and `dispose`
 * restores the machine state.
 */
export function attachSocket(socket: Socket, runtime: HelperRuntime, log: (message: string) => void): void {
  let buffer = ''
  runtime.attach(socket)

  socket.on('data', (chunk: Buffer) => {
    buffer += chunk.toString('utf8')
    let index = buffer.indexOf('\n')
    while (index >= 0) {
      const line = buffer.slice(0, index)
      buffer = buffer.slice(index + 1)
      index = buffer.indexOf('\n')

      if (!line.trim())
        continue

      let request: HelperRequest
      try {
        request = JSON.parse(line) as HelperRequest
      }
      catch (error) {
        log(`invalid request: ${(error as Error).message}`)
        continue
      }

      void runtime.handle(request, socket).then((response) => {
        if (!socket.destroyed)
          socket.write(serializeMessage(response))
      })
    }
  })

  socket.on('error', (error) => {
    log(`connection error: ${error.message}`)
  })

  socket.on('close', () => {
    void runtime.detach(socket)
  })
}
