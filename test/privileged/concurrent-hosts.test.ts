import type { CaddyChild, HelperDeps } from '../../src/privileged/server'
import { describe, expect, it } from 'vitest'
import { createHelperRuntime } from '../../src/privileged/server'

function createDeps(initial: string): { deps: HelperDeps, content: () => string } {
  let hosts = initial

  const deps: HelperDeps = {
    readHosts: () => hosts,
    writeHosts: (content) => {
      hosts = content
    },
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
  }

  return { deps, content: () => hosts }
}

/**
 * Several dev-server instances share one helper. Requests arrive on separate
 * sockets and are dispatched without waiting for each other, so a lost update
 * would drop one instance's domain mapping.
 */
describe('concurrent hosts edits', () => {
  it('keeps both entries when two clients add a host simultaneously', async () => {
    const { deps, content } = createDeps('127.0.0.1\tlocalhost\n')
    const runtime = createHelperRuntime(deps)

    await Promise.all([
      runtime.handle({ id: 1, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'a.abc.com' } }),
      runtime.handle({ id: 2, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'b.abc.com' } }),
    ])

    const hosts = content()
    expect(hosts).toContain('a.abc.com')
    expect(hosts).toContain('b.abc.com')
  })

  it('does not lose an entry when a remove races an add for a different host', async () => {
    const { deps, content } = createDeps('127.0.0.1\tlocalhost\n')
    const runtime = createHelperRuntime(deps)

    await runtime.handle({ id: 1, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'old.abc.com' } })

    await Promise.all([
      runtime.handle({ id: 2, method: 'hosts.remove', params: { ip: '127.0.0.1', host: 'old.abc.com' } }),
      runtime.handle({ id: 3, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'new.abc.com' } }),
    ])

    const hosts = content()
    expect(hosts).not.toContain('old.abc.com')
    expect(hosts).toContain('new.abc.com')
  })
})
