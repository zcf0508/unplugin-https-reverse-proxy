import type { PrivilegedClient } from './client'
import { Buffer } from 'node:buffer'
import { existsSync } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import { platform } from 'node:os'
import { join } from 'node:path'
import * as lockfile from 'proper-lockfile'
import { connectExistingHelper, createHelperToken, startPrivilegedHelper } from './launch'

export interface SessionScope {
  /** Runtime directory shared by the plugin, e.g. `TEMP_DIR`. */
  runtimeDir: string
  /** Directory of the running bundle; used to locate the helper entry. */
  helperEntry: string
  helperArgs?: string[]
  env?: NodeJS.ProcessEnv
  sudoCommand?: string
  /** Skips the interactive credential check; used by tests. */
  skipAuth?: boolean
  /** Runs the helper as the current user; used by tests without privileges. */
  direct?: boolean
  /** Caddy storage directory; the helper hands it back to the user on stop. */
  caddyStoragePath?: string
  /** Caddy binary the helper may run; the client cannot change it later. */
  caddyBin: string
  /** Caddyfile the helper may load. */
  caddyConfigPath: string
  /** Admin API socket; used by `ca.trust` instead of the TCP default. */
  caddyAdminSocket?: string
  /** Shown before the password prompt so the request is not a surprise. */
  reason?: { target: string, https: boolean }
  log?: (message: string) => void
}

export interface OpenedSession {
  client: PrivilegedClient
  /** True when an already-running helper was reused. */
  reused: boolean
  close: () => Promise<void>
}

function tokenPath(runtimeDir: string): string {
  return join(runtimeDir, 'helper.token')
}

export function sessionSocketPath(runtimeDir: string): string {
  if (platform() === 'win32')
    return `\\\\.\\pipe\\uhrp-${Buffer.from(runtimeDir).toString('hex').slice(0, 40)}`
  return join(runtimeDir, 'helper.sock')
}

/**
 * Connects to the helper already serving this runtime directory, or starts a
 * new one. Reuse matters for multi-instance dev servers: the second instance
 * attaches to the running Caddy instead of asking for a password again.
 *
 * The check-then-start sequence runs under a lock. Two projects starting at the
 * same moment would otherwise both fail to find a socket, both spawn a helper,
 * and the second would delete the first one's socket while it was still
 * serving.
 */
export async function openHelperSession(scope: SessionScope): Promise<OpenedSession> {
  const socketPath = sessionSocketPath(scope.runtimeDir)
  const release = await acquireStartLock(scope.runtimeDir)

  try {
    const reused = await tryReuse(socketPath, scope)
    if (reused)
      return reused

    return await startNew(socketPath, scope)
  }
  finally {
    release()
  }
}

async function tryReuse(socketPath: string, scope: SessionScope): Promise<OpenedSession | undefined> {
  if (!existsSync(socketPath) && platform() !== 'win32')
    return undefined

  const token = await readToken(scope.runtimeDir)
  if (!token)
    return undefined

  const reused = await connectExistingHelper(socketPath, token)
  if (!reused)
    return undefined

  return {
    client: reused,
    reused: true,
    close: async () => {
      await reused.close()
    },
  }
}

async function startNew(socketPath: string, scope: SessionScope): Promise<OpenedSession> {
  const token = createHelperToken()
  const started = await startPrivilegedHelper({
    socketPath,
    token,
    helperEntry: scope.helperEntry,
    helperArgs: scope.helperArgs,
    sudoCommand: scope.sudoCommand,
    skipAuth: scope.skipAuth,
    direct: scope.direct,
    env: scope.env,
    caddyStoragePath: scope.caddyStoragePath,
    caddyBin: scope.caddyBin,
    caddyConfigPath: scope.caddyConfigPath,
    caddyAdminSocket: scope.caddyAdminSocket,
    reason: scope.reason,
    log: scope.log,
  })

  await writeToken(scope.runtimeDir, token)

  return {
    client: started.client,
    reused: false,
    close: async () => {
      await started.close()
    },
  }
}

/**
 * Serialises "is a helper running? if not, start one" across processes.
 *
 * The lock file is separate from the socket: the socket only exists once a
 * helper is listening, while this lock guards the window before that.
 */
async function acquireStartLock(runtimeDir: string): Promise<() => void> {
  const lockPath = join(runtimeDir, 'helper.start.lock')
  try {
    await writeFile(lockPath, '', { flag: 'a' })
  }
  catch {}

  const release = await lockfile.lock(lockPath, {
    realpath: false,
    stale: 30_000,
    retries: { retries: 100, minTimeout: 50, maxTimeout: 200 },
  })

  return () => {
    void release().catch(() => {})
  }
}

async function readToken(runtimeDir: string): Promise<string | undefined> {
  try {
    const content = await readFile(tokenPath(runtimeDir), 'utf8')
    const token = content.trim()
    return token === '' ? undefined : token
  }
  catch {
    return undefined
  }
}

async function writeToken(runtimeDir: string, token: string): Promise<void> {
  try {
    await writeFile(tokenPath(runtimeDir), token, { mode: 0o600 })
  }
  catch {}
}
