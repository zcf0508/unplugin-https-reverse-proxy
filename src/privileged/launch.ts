import type { Buffer } from 'node:buffer'
import type { PrivilegedClient } from './client'
import { spawn, spawnSync } from 'node:child_process'
import { randomBytes } from 'node:crypto'
import { platform } from 'node:os'
import process from 'node:process'
import { collectForwardedEnv, connectClient } from './client'
import { spawnElevatedOnWindows } from './windows-elevation'

export function createHelperToken(): string {
  return randomBytes(24).toString('hex')
}

export interface LaunchOptions {
  socketPath: string
  token: string
  /** Executable started as root (node, or tsx when running from source). */
  helperEntry: string
  /** Arguments placed before the helper's own `--socket/--token` flags. */
  helperArgs?: string[]
  sudoCommand?: string
  /** Skips the interactive credential check; used by tests and Windows. */
  skipAuth?: boolean
  /**
   * Starts the helper as the current user instead of going through sudo.
   * Used by tests that need the helper protocol but not real privileges.
   */
  direct?: boolean
  env?: NodeJS.ProcessEnv
  log?: (message: string) => void
  /** How long to wait for the helper socket to accept the connection. */
  connectTimeoutMs?: number
  /**
   * Caddy's storage directory. Caddy runs as root in the helper, so the helper
   * hands this tree back to the developer when it stops Caddy.
   */
  caddyStoragePath?: string
  /** Caddy binary the helper is allowed to run, fixed for the whole session. */
  caddyBin: string
  /** Caddyfile the helper is allowed to load. */
  caddyConfigPath: string
}

/**
 * Asks for the administrator password once, up front, on the dev terminal.
 *
 * The credential cache is keyed by terminal, so a later `sudo -n` only finds
 * this entry when the child stays in the same session. That is why the helper
 * is spawned without `detached`.
 */
export function authenticateSudo(sudoCommand = 'sudo'): { ok: boolean, message?: string } {
  if (platform() === 'win32')
    return { ok: true }

  if (spawnSync(sudoCommand, ['-n', 'true'], { stdio: 'ignore' }).status === 0)
    return { ok: true }

  if (spawnSync(sudoCommand, ['-v'], { stdio: 'inherit' }).status === 0)
    return { ok: true }

  return {
    ok: false,
    message: 'administrator permission is required to edit the hosts file and bind ports 80/443',
  }
}

export interface PrivilegedHelperHandle {
  client: PrivilegedClient
  close: () => Promise<void>
}

/**
 * Starts the privileged helper and connects to it.
 *
 * Only this child runs as root: the Node process that owns the dev server,
 * its caches and `node_modules` keeps the developer's identity. The user's
 * proxy/HOME settings reach Caddy through the helper's environment instead of
 * `sudo -E`.
 */
export async function startPrivilegedHelper(options: LaunchOptions): Promise<PrivilegedHelperHandle> {
  const {
    socketPath,
    token,
    helperEntry,
    helperArgs = [],
    sudoCommand = 'sudo',
    skipAuth = false,
    direct = false,
    env = process.env,
    log,
    connectTimeoutMs = 120_000,
  } = options

  if (!skipAuth && !direct) {
    const auth = authenticateSudo(sudoCommand)
    if (!auth.ok)
      throw new Error(auth.message)
  }

  const forwarded = collectForwardedEnv(env)
  const forwardedArgs = Object.entries(forwarded).map(([key, value]) => `${key}=${value}`)
  // `helperEntry` is the runtime and `helperArgs` the script it must run, so
  // the helper's own flags always come last. The owner ids travel with them
  // because the helper only learns who its client is at handshake time.
  const childArgv = [
    ...helperArgs,
    '--socket',
    socketPath,
    '--token',
    token,
    ...(typeof process.getuid === 'function' ? ['--owner-uid', String(process.getuid())] : []),
    ...(typeof process.getgid === 'function' ? ['--owner-gid', String(process.getgid())] : []),
    ...(options.caddyStoragePath ? ['--caddy-storage', options.caddyStoragePath] : []),
    '--caddy',
    options.caddyBin,
    '--caddy-config',
    options.caddyConfigPath,
  ]

  let child: ReturnType<typeof spawn> | undefined

  if (!direct && platform() === 'win32') {
    // UAC: the elevated helper is a separate process and cannot inherit stdio,
    // so it reports through the named pipe instead. The user's environment is
    // recovered by the helper from its own process env, which Windows keeps.
    await spawnElevatedOnWindows({ file: helperEntry, args: childArgv, cwd: process.cwd() })
  }
  else {
    const command = direct ? helperEntry : sudoCommand
    const spawnArgs = direct
      ? childArgv
      : ['-n', 'env', ...forwardedArgs, helperEntry, ...childArgv]

    // No `detached`: sudo stores its credential per session, and `setsid()`
    // would make the helper look like a different login, so `sudo -n` could not
    // reuse the password entered a moment earlier. The stdio pipes keep the
    // helper reachable from this process.
    child = spawn(command, spawnArgs, {
      stdio: ['ignore', 'pipe', 'pipe'],
    })

    child.stdout?.on('data', (data: Buffer) => log?.(data.toString().trimEnd()))
    child.stderr?.on('data', (data: Buffer) => log?.(data.toString().trimEnd()))

    const exited = new Promise<number | null>(resolve => child!.once('exit', code => resolve(code)))

    // Refused credentials make the helper exit immediately; report that instead
    // of waiting for the full connection timeout.
    const earlyExit = await Promise.race([
      exited,
      new Promise<undefined>(resolve => setTimeout(() => resolve(undefined), 500)),
    ])

    if (earlyExit !== undefined && earlyExit !== 0) {
      throw new Error(
        `privileged helper exited with code ${earlyExit}. `
        + 'Administrator permission was refused, or sudo is not available.',
      )
    }
  }

  try {
    const client = await connectClient({ socketPath, token, timeoutMs: connectTimeoutMs })
    return {
      client,
      async close() {
        await client.close().catch(() => {})
        child?.unref()
      },
    }
  }
  catch (error) {
    try {
      child?.kill()
    }
    catch {}
    throw error
  }
}

/** Reuses a helper that is already running for this runtime directory. */
export async function connectExistingHelper(
  socketPath: string,
  token: string,
  timeoutMs = 1500,
): Promise<PrivilegedClient | undefined> {
  try {
    return await connectClient({ socketPath, token, timeoutMs })
  }
  catch {
    return undefined
  }
}
