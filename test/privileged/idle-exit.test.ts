import type { HelperDeps } from '../../src/privileged/server'
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'
import { startHelper } from '../../src/privileged/bootstrap'

/**
 * A helper nobody is using must not stay behind as an idle root process. It
 * also must not remove a socket a newer helper already owns.
 */
function createDeps(dir: string): HelperDeps {
  const hostsPath = join(dir, 'hosts')
  writeFileSync(hostsPath, '127.0.0.1\tlocalhost\n')

  return {
    readHosts: () => readFileSync(hostsPath, 'utf8'),
    writeHosts: (content: string) => writeFileSync(hostsPath, content),
    flushDns: async () => {},
    freePort: async () => [],
    caddyBin: '/usr/bin/false',
    caddyConfigPath: join(dir, 'Caddyfile'),
    caddyCwd: dir,
    caddyEnv: {},
    trustLocalCa: async () => ({ trusted: true, output: '' }),
    startCaddy: () => ({ pid: 1, kill: () => true, running: true }),
    stopCaddy: async () => {},
    log: () => {},
  }
}

const opened: Array<{ close: () => Promise<void> }> = []

afterEach(async () => {
  for (const helper of opened.splice(0))
    await helper.close().catch(() => {})
})

describe('idle exit', () => {
  it('removes its own socket and token when nobody is connected', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'uhrp-idle-'))
    const socketPath = join(dir, 'helper.sock')
    const token = 'token-abc'

    const helper = await startHelper({
      socketPath,
      token,
      ownerUid: process.getuid?.(),
      ownerGid: process.getgid?.(),
      caddyBin: '/usr/bin/false',
      caddyConfigPath: join(dir, 'Caddyfile'),
      idleTimeoutMs: 100,
      deps: createDeps(dir),
      log: () => {},
    })
    opened.push(helper)

    await new Promise(resolve => setTimeout(resolve, 400))

    expect(existsSync(socketPath)).toBe(false)
    expect(existsSync(join(dir, 'helper.token'))).toBe(false)
  })

  it('leaves a socket alone when a newer helper owns it', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'uhrp-idle-'))
    const socketPath = join(dir, 'helper.sock')
    const token = 'token-old'

    const helper = await startHelper({
      socketPath,
      token,
      ownerUid: process.getuid?.(),
      ownerGid: process.getgid?.(),
      caddyBin: '/usr/bin/false',
      caddyConfigPath: join(dir, 'Caddyfile'),
      idleTimeoutMs: 100,
      deps: createDeps(dir),
      log: () => {},
    })
    opened.push(helper)

    // Another helper took over the token while this one was idle.
    writeFileSync(join(dir, 'helper.token'), 'token-new')

    await new Promise(resolve => setTimeout(resolve, 400))

    expect(readFileSync(join(dir, 'helper.token'), 'utf8')).toBe('token-new')
  })
})
