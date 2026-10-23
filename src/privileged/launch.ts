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
  /** Admin API socket the helper talks to when installing the CA. */
  caddyAdminSocket?: string
  /** Shown before the password prompt so the request is not a surprise. */
  reason?: { target: string, https: boolean }
}

/**
 * Explains why a password is about to be requested. Without this the prompt
 * appears out of nowhere in the middle of `npm run dev` and looks like something
 * went wrong.
 */
export function describePasswordReason(target: string, https: boolean): string[] {
  const port = https ? '443' : '80'
  return [
    `reverse proxy needs administrator permission for ${target}`,
    `  · bind port ${port}${https ? ` for https://${target}` : ''}`,
    `  · add ${target} to the hosts file`,
    '',
    'This is the only prompt; the rest of the dev server keeps running as you.',
    'Press Ctrl+C at the prompt to skip the proxy and keep the dev server.',
  ]
}

/**
 * Asks for the administrator password once, up front, on the dev terminal.
 *
 * The credential cache is keyed by terminal, so a later `sudo -n` only finds
 * this entry when the child stays in the same session. That is why the helper
 * is spawned without `detached`.
 *
 * Returns `denied` when the user dismissed the prompt, so the caller can keep
 * the dev server running instead of treating it as a crash.
 */
export async function authenticateSudo(
  sudoCommand = 'sudo',
  options: { target?: string, https?: boolean, quiet?: boolean } = {},
): Promise<{ ok: boolean, denied?: boolean, message?: string }> {
  if (platform() === 'win32')
    return { ok: true }

  if (spawnSync(sudoCommand, ['-n', 'true'], { stdio: 'ignore' }).status === 0)
    return { ok: true }

  // Tests drive this without a terminal; writing the notice there would print
  // password instructions into the middle of the test output.
  if (options.target && !options.quiet) {
    for (const line of describePasswordReason(options.target, options.https ?? false))
      process.stderr.write(`${line}\n`)
    process.stderr.write('\n')
  }

  // `sudo -v` inherits the terminal, so Ctrl+C reaches this process too. Without
  // a handler the default action kills the dev server, which reads as "the
  // proxy crashed my dev server" when the user only meant to skip it.
  let interrupted = false
  const onSigint = (): void => {
    interrupted = true
  }
  process.on('SIGINT', onSigint)

  try {
    const { status, signal } = await runPrompt(sudoCommand)
    if (status === 0)
      return { ok: true }

    // `sudo` exits 1 on a wrong password and dies by the signal on Ctrl+C.
    // Both are checked: a real Ctrl+C reaches this process and the child
    // together, while a signal aimed at the child alone only shows up here.
    const cancelled = interrupted || signal === 'SIGINT'
    return {
      ok: false,
      denied: true,
      message: cancelled
        ? 'administrator permission was cancelled'
        : 'administrator permission is required to edit the hosts file and bind ports 80/443',
    }
  }
  finally {
    process.off('SIGINT', onSigint)
  }
}

/**
 * Runs `sudo -v` with the terminal attached.
 *
 * Spawned asynchronously rather than with `spawnSync`: the synchronous form
 * blocks the event loop, so the SIGINT handler above never runs and the exit
 * looks like a plain failure instead of a cancellation.
 *
 * The terminal is put back into cooked mode first. Vite turns on raw mode for
 * its `h + enter` shortcuts, and in that mode Enter no longer terminates the
 * line sudo is reading, so the password appears to need a second Enter.
 */
function runPrompt(sudoCommand: string): Promise<{ status: number | null, signal: NodeJS.Signals | null }> {
  return new Promise((resolve) => {
    const restore = takeBackTerminal()
    const child = spawn(sudoCommand, ['-v'], { stdio: 'inherit' })

    const finish = (result: { status: number | null, signal: NodeJS.Signals | null }): void => {
      restore()
      resolve(result)
    }

    child.on('error', () => finish({ status: 1, signal: null }))
    child.on('exit', (status, signal) => finish({ status, signal }))
  })
}

/**
 * Gives the terminal to `sudo` for the duration of the prompt.
 *
 * Vite keeps stdin in raw mode with a `data` listener attached, so that every
 * keystroke reaches its shortcut handler. Two things break the password read:
 *
 * 1. Raw mode does no line editing, so Enter never terminates the line sudo is
 *    waiting for.
 * 2. The `data` listener is resumed, so it consumes the characters before sudo
 *    can see them. sudo then reads nothing and reports a wrong password.
 *
 * Both are undone here and restored afterwards, so Vite's shortcuts keep
 * working once the prompt is over.
 */
function takeBackTerminal(): () => void {
  const stdin = process.stdin
  if (!stdin.isTTY || typeof stdin.setRawMode !== 'function')
    return () => {}

  const wasRaw = stdin.isRaw === true

  // `pause` detaches the stream from the tty without removing Vite's listener,
  // so the same handler still works when the stream is resumed later.
  stdin.pause()

  try {
    stdin.setRawMode(false)
  }
  catch {
    stdin.resume()
    return () => {}
  }

  return () => {
    if (wasRaw) {
      try {
        stdin.setRawMode(true)
      }
      catch {}
    }
    // Resume last: Vite's listener is still attached and expects a live stream.
    stdin.resume()
  }
}

/** The user dismissed the password prompt; this is a choice, not a failure. */
export class PrivilegeDeniedError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'PrivilegeDeniedError'
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
    const auth = await authenticateSudo(sudoCommand, options.reason)
    if (!auth.ok) {
      const message = auth.message ?? 'administrator permission is required'
      throw auth.denied ? new PrivilegeDeniedError(message) : new Error(message)
    }
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
    ...(options.caddyAdminSocket ? ['--caddy-admin', options.caddyAdminSocket] : []),
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
