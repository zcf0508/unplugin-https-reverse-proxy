import type { CaddyChild, HelperDeps } from '../../src/privileged/server'
import { mkdirSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import process from 'node:process'
import { describe, expect, it } from 'vitest'
import { createHelperRuntime } from '../../src/privileged/server'

function baseDeps(overrides: Partial<HelperDeps> = {}): HelperDeps {
  return {
    readHosts: () => '',
    writeHosts: () => {},
    flushDns: async () => {},
    freePort: async () => [],
    caddyBin: '/fake/caddy',
    caddyConfigPath: '/fake/Caddyfile',
    caddyCwd: '/',
    caddyEnv: {},
    trustLocalCa: async () => ({ trusted: true, output: '' }),
    startCaddy: (): CaddyChild => ({ pid: 1, kill: () => true }),
    stopCaddy: async () => {},
    log: () => {},
    ...overrides,
  }
}

/**
 * Caddy runs as root inside the helper, so everything it writes under its
 * storage directory is root-owned. The helper must hand the tree back once
 * Caddy stops, otherwise the developer cannot read its PKI between runs.
 */
describe('caddy storage handback on stop', () => {
  it('returns the storage tree to the configured owner when caddy stops', async () => {
    const storage = join(tmpdir(), `uhrp-handback-${process.pid}`)
    const nested = join(storage, 'pki', 'authorities', 'local')
    mkdirSync(nested, { recursive: true })
    writeFileSync(join(nested, 'root.crt'), 'certificate')

    const uid = process.getuid?.() ?? 0
    const gid = process.getgid?.() ?? 0

    const runtime = createHelperRuntime(baseDeps({
      caddyStoragePath: storage,
      storageOwner: { uid, gid },
    }))

    await runtime.handle({ id: 1, method: 'caddy.start' })
    await runtime.handle({ id: 2, method: 'caddy.stop' })
    await new Promise(resolve => setTimeout(resolve, 200))

    expect(statSync(storage).uid).toBe(uid)
    expect(statSync(join(nested, 'root.crt')).uid).toBe(uid)
  })

  it('stops caddy even when the storage directory is gone', async () => {
    const runtime = createHelperRuntime(baseDeps({
      caddyStoragePath: join(tmpdir(), `uhrp-missing-${process.pid}`),
      storageOwner: { uid: 0, gid: 0 },
    }))

    const response = await runtime.handle({ id: 3, method: 'caddy.stop' })

    expect(response).toEqual({ id: 3, ok: true })
  })
})
