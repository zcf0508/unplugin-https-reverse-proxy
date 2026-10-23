import type { PrivilegedClient } from '../privileged/client'
import type { HelperEvent } from '../privileged/protocol'
import { Buffer } from 'node:buffer'
import { EventEmitter } from 'node:events'
import { dirname, join } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { resolveHelperEntry } from '../privileged/entry'
import { openHelperSession } from '../privileged/session'

export interface PrivilegedEnv {
  /** Executable started as root, resolved from the running bundle. */
  helperEntry: string
  helperArgs: string[]
}

/**
 * Resolves what the helper needs to be started from the current bundle.
 * `__dirname` exists in both the CJS and ESM outputs (tsup injects a shim).
 */
export function resolvePrivilegedEnv(): PrivilegedEnv {
  const moduleDir = typeof __dirname === 'string'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url))
  const resolved = resolveHelperEntry({ moduleDir })
  return { helperEntry: resolved.entry, helperArgs: resolved.args }
}

/** Re-emits helper events as the `stdout`/`stderr` events the log parsing expects. */
export class HelperCaddyProcess extends EventEmitter {
  readonly stdout = new EventEmitter()
  readonly stderr = new EventEmitter()
  private finished = false
  private readonly unsubscribe: () => void

  constructor(private readonly client: PrivilegedClient) {
    super()
    this.unsubscribe = client.onEvent(event => this.handleEvent(event))
  }

  private handleEvent(event: HelperEvent): void {
    if (event.type !== 'event')
      return

    if (event.kind === 'caddy.stdout') {
      this.stdout.emit('data', Buffer.from(event.data))
      return
    }

    if (event.kind === 'caddy.stderr') {
      this.stderr.emit('data', Buffer.from(event.data))
      return
    }

    if (event.kind === 'caddy.exit') {
      this.finished = true
      this.emit('exit', event.code, event.signal)
    }
  }

  /** Asks the helper to stop Caddy; the helper also stops it on disconnect. */
  kill(): void {
    this.unsubscribe()
    if (this.finished)
      return
    this.finished = true
    void this.client.call('caddy.stop').catch(() => {})
  }
}

export interface OpenedPrivilegedSession {
  client: PrivilegedClient
  reused: boolean
  close: () => Promise<void>
}

export interface PrivilegedSessionOptions {
  log?: (message: string) => void
  /** Runs the helper as the current user; tests use this to avoid sudo. */
  direct?: boolean
  /** Caddy binary the helper may run; fixed before the session opens. */
  caddyBin: string
  /** Caddyfile the helper may load. */
  caddyConfigPath: string
  /** Admin API socket; `ca.trust` talks to it instead of the TCP default. */
  caddyAdminSocket?: string
  /** Shown before the password prompt so the request is not a surprise. */
  reason?: { target: string, https: boolean }
}

/** Where Caddy keeps its PKI, per platform. */
export function caddyStoragePath(): string {
  return process.platform === 'win32'
    ? join(process.env.AppData ?? '', 'Caddy')
    : join(process.env.HOME ?? '', 'Library/Application Support/Caddy')
}

/**
 * Opens (or reuses) the privileged helper for this runtime directory.
 * Only the helper runs as root: the plugin process, its caches and its
 * `node_modules` keep the developer's identity.
 */
export function openPrivilegedSession(
  runtimeDir: string,
  options: PrivilegedSessionOptions,
): Promise<OpenedPrivilegedSession> {
  const env = resolvePrivilegedEnv()
  return openHelperSession({
    runtimeDir,
    helperEntry: env.helperEntry,
    helperArgs: env.helperArgs,
    direct: options.direct,
    // Caddy keeps its PKI under the user's home; the helper runs it as root, so
    // it must know which tree to hand back afterwards.
    caddyStoragePath: caddyStoragePath(),
    // The binary and Caddyfile are fixed here: the privileged helper must never
    // execute a path supplied over the socket.
    caddyBin: options.caddyBin,
    caddyConfigPath: options.caddyConfigPath,
    caddyAdminSocket: options.caddyAdminSocket,
    reason: options.reason,
    log: options.log,
  })
}
