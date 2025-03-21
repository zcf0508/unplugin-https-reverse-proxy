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

export const TEMP_DIR = resolvePath(process.env.UHRP_CADDY_PATH || process.env.TEMP || process.env.TMPDIR || '/tmp')
export const caddyPath = join(TEMP_DIR, `caddy${process.platform === 'win32' ? '.exe' : ''}`)
export const caddyFilePath = join(TEMP_DIR, 'CADDYFILE')
export const caddyLockFilePath = join(TEMP_DIR, 'caddylock')

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
