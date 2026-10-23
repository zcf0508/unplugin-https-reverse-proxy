import type { HelperDeps } from '../../src/privileged/server'
import { chmodSync, existsSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { startHelper } from '../../src/privileged/bootstrap'

/**
 * The helper runs as root and takes the Caddy binary and Caddyfile paths from
 * a process running as the developer. If either can be rewritten by another
 * local user, starting is a privilege gain, so it must refuse instead.
 */
function stubDeps(): HelperDeps {
  return {
    readHosts: () => '127.0.0.1\tlocalhost\n',
    writeHosts: () => {},
    flushDns: async () => {},
    freePort: async () => [],
    caddyBin: '/usr/bin/false',
    caddyConfigPath: '/dev/null',
    caddyCwd: '/tmp',
    caddyEnv: {},
    trustLocalCa: async () => ({ trusted: true, output: '' }),
    startCaddy: () => ({ pid: 1, kill: () => true, running: true }),
    stopCaddy: async () => {},
    log: () => {},
  }
}

describe('startHelper refuses unsafe paths', () => {
  let dir: string

  beforeEach(() => {
    dir = mkdtempSync(join(tmpdir(), 'uhrp-start-guard-'))
  })

  afterEach(() => {
    rmSync(dir, { recursive: true, force: true })
  })

  it('starts when the Caddyfile is only writable by its owner', async () => {
    const caddyfile = join(dir, 'Caddyfile')
    writeFileSync(caddyfile, '')
    chmodSync(caddyfile, 0o600)

    const helper = await startHelper({
      socketPath: join(dir, 'helper.sock'),
      token: 'guard-token',
      caddyBin: '/usr/bin/false',
      caddyConfigPath: caddyfile,
      ownerUid: process.getuid?.(),
      exitOnIdle: false,
      deps: stubDeps(),
      log: () => {},
    })

    expect(existsSync(join(dir, 'helper.sock'))).toBe(true)
    await helper.close()
  })

  it('refuses a group-writable Caddyfile', async () => {
    const caddyfile = join(dir, 'Caddyfile')
    writeFileSync(caddyfile, '')
    chmodSync(caddyfile, 0o660)

    await expect(startHelper({
      socketPath: join(dir, 'helper.sock'),
      token: 'guard-token',
      caddyBin: '/usr/bin/false',
      caddyConfigPath: caddyfile,
      ownerUid: process.getuid?.(),
      exitOnIdle: false,
      deps: stubDeps(),
      log: () => {},
    })).rejects.toThrow(/group- or world-writable/)
  })

  it('refuses a Caddyfile that is a symbolic link', async () => {
    const real = join(dir, 'real-Caddyfile')
    const link = join(dir, 'Caddyfile')
    writeFileSync(real, '')
    chmodSync(real, 0o600)
    symlinkSync(real, link)

    await expect(startHelper({
      socketPath: join(dir, 'helper.sock'),
      token: 'guard-token',
      caddyBin: '/usr/bin/false',
      caddyConfigPath: link,
      ownerUid: process.getuid?.(),
      exitOnIdle: false,
      deps: stubDeps(),
      log: () => {},
    })).rejects.toThrow(/symbolic link/)
  })
})
