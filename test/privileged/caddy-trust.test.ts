import type { CaddyChild, HelperDeps } from '../../src/privileged/server'
import { describe, expect, it, vi } from 'vitest'
import { createHelperRuntime } from '../../src/privileged/server'

function createDeps(overrides: Partial<HelperDeps> = {}): HelperDeps {
  return {
    readHosts: () => '127.0.0.1\tlocalhost\n',
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

describe('ca trust through the helper', () => {
  it('reports the trust result to the plugin', async () => {
    const trustLocalCa = vi.fn().mockResolvedValue({ trusted: true, output: 'installed' })
    const runtime = createHelperRuntime(createDeps({ trustLocalCa }))

    const response = await runtime.handle({ id: 1, method: 'ca.trust' })

    expect(response).toEqual({ id: 1, ok: true, result: { trusted: true, output: 'installed' } })
    expect(trustLocalCa).toHaveBeenCalledOnce()
  })

  it('surfaces a failure so the plugin can warn the developer', async () => {
    const runtime = createHelperRuntime(createDeps({
      trustLocalCa: async () => {
        throw new Error('keytool exited with 1')
      },
    }))

    const response = await runtime.handle({ id: 2, method: 'ca.trust' })

    expect(response).toEqual({ id: 2, ok: false, error: { message: 'keytool exited with 1' } })
  })
})
