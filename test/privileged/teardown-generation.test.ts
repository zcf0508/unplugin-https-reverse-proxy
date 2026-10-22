import type { CaddyChild, HelperDeps } from '../../src/privileged/server'
import { describe, expect, it } from 'vitest'
import { createHelperRuntime } from '../../src/privileged/server'

function createDeps(initial: string): {
  deps: HelperDeps
  content: () => string
  stopCount: () => number
} {
  let hosts = initial
  let stops = 0

  const deps: HelperDeps = {
    readHosts: () => hosts,
    writeHosts: (content) => {
      hosts = content
    },
    flushDns: async () => {
      // Slow enough for a new client to attach while teardown is in flight.
      await new Promise(resolve => setTimeout(resolve, 30))
    },
    freePort: async () => [],
    caddyBin: '/fake/caddy',
    caddyConfigPath: '/fake/Caddyfile',
    caddyCwd: '/',
    caddyEnv: {},
    trustLocalCa: async () => ({ trusted: true, output: '' }),
    startCaddy: (): CaddyChild => ({ pid: 1, kill: () => true }),
    stopCaddy: async () => {
      stops++
    },
    log: () => {},
  }

  return { deps, content: () => hosts, stopCount: () => stops }
}

/**
 * A dev server restarting quickly disconnects and reconnects the helper. The
 * teardown of the old session must not delete the new session's entries or stop
 * the Caddy the new session just started.
 */
describe('teardown vs a reconnecting client', () => {
  it('leaves the new session untouched when a client attaches mid-teardown', async () => {
    const { deps, content, stopCount } = createDeps('127.0.0.1\tlocalhost\n')
    const runtime = createHelperRuntime(deps)

    const firstClient = {}
    runtime.attach(firstClient)
    await runtime.handle({ id: 1, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'a.abc.com' } })

    // Disconnect, then reconnect before the teardown finished.
    const detaching = runtime.detach(firstClient)
    const secondClient = {}
    runtime.attach(secondClient)
    await runtime.handle({ id: 2, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'b.abc.com' } })

    await detaching
    await new Promise(resolve => setTimeout(resolve, 80))

    const hosts = content()
    expect(hosts).toContain('b.abc.com')
    expect(stopCount()).toBe(0)
  })
})
