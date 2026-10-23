import os from 'node:os'
import { join } from 'node:path'
import process from 'node:process'
import dotenvFlow from 'dotenv-flow'

dotenvFlow.config({
  silent: true,
})

function resolvePath(path: string): string {
  if (path.startsWith('~'))
    return join(os.homedir() || '', path.slice(1))
  return path
}

/**
 * Directory for the Caddy binary, Caddyfile and the admin socket.
 *
 * The Caddy binary is executed as root, so this must not be a directory other
 * users can write to. macOS gives every user a private `TMPDIR`, and `TEMP` on
 * Windows is per-user too. On Linux `TMPDIR` is usually unset and `/tmp` is
 * world-writable (sticky bit only prevents deleting other users' files, not
 * creating `/tmp/caddy` first), so the fallback goes under the user's own cache
 * directory instead.
 */
function defaultTempDir(): string {
  const fromEnv = process.env.TEMP || process.env.TMPDIR
  if (fromEnv)
    return resolvePath(fromEnv)
  if (process.platform === 'linux')
    return join(process.env.XDG_CACHE_HOME || join(os.homedir(), '.cache'), 'uhrp')
  return '/tmp'
}

export const TEMP_DIR = resolvePath(process.env.UHRP_CADDY_PATH || defaultTempDir())
export const caddyPath = join(TEMP_DIR, `caddy${process.platform === 'win32' ? '.exe' : ''}`)
export const caddyFilePath = join(TEMP_DIR, 'CADDYFILE')

export const caddyConfigPath = join(TEMP_DIR, '.CADDYFILE.config.json')
export const caddyLockFilePath = join(TEMP_DIR, 'caddylock')

/**
 * Admin API socket, shared by every project using this helper.
 *
 * Caddy runs as root, so its admin API must not listen on a TCP port any local
 * user can reach: `POST /load` there reconfigures the proxy with no further
 * check. A unix socket inside the runtime directory is reachable only by whoever
 * can open that directory, and the directory is private on macOS.
 */
export const caddyAdminSocketPath = join(TEMP_DIR, 'caddy-admin.sock')

export const supportList = [
  {
    platform: 'dragonfly',
    arch: 'amd64',
  },
  {
    platform: 'freebsd',
    arch: 'amd64',
  },
  {
    platform: 'freebsd',
    arch: 'arm-6',
  },
  {
    platform: 'freebsd',
    arch: 'arm-7',
  },
  {
    platform: 'freebsd',
    arch: 'arm64',
  },
  {
    platform: 'linux',
    arch: 'amd64',
  },
  {
    platform: 'linux',
    arch: 'arm-5',
  },
  {
    platform: 'linux',
    arch: 'arm-6',
  },
  {
    platform: 'linux',
    arch: 'arm-7',
  },
  {
    platform: 'linux',
    arch: 'arm64',
  },
  {
    platform: 'linux',
    arch: 'mips',
  },
  {
    platform: 'linux',
    arch: 'mips64',
  },
  {
    platform: 'linux',
    arch: 'mips64le',
  },
  {
    platform: 'linux',
    arch: 'mipsle',
  },
  {
    platform: 'linux',
    arch: 'ppc64',
  },
  {
    platform: 'linux',
    arch: 'ppc64le',
  },
  {
    platform: 'linux',
    arch: 's390x',
  },
  {
    platform: 'darwin',
    arch: 'amd64',
  },
  {
    platform: 'darwin',
    arch: 'arm64',
  },
  {
    platform: 'openbsd',
    arch: 'amd64',
  },
  {
    platform: 'openbsd',
    arch: 'arm-6',
  },
  {
    platform: 'openbsd',
    arch: 'arm-7',
  },
  {
    platform: 'openbsd',
    arch: 'arm64',
  },
  {
    platform: 'windows',
    arch: 'amd64',
  },
  {
    platform: 'windows',
    arch: 'arm-6',
  },
  {
    platform: 'windows',
    arch: 'arm-7',
  },
  {
    platform: 'windows',
    arch: 'arm64',
  },
]
