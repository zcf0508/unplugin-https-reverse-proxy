import type { HelperEvent } from '../../src/privileged/protocol'
import type { CaddyChild, HelperDeps } from '../../src/privileged/server'
import { describe, expect, it } from 'vitest'
import { createHelperRuntime } from '../../src/privileged/server'

interface Harness {
  deps: HelperDeps
  hostsWrites: string[]
  flushCount: () => number
  stoppedCaddy: () => number
  startedArgs: () => string[]
  emit: (event: HelperEvent) => void
}

function createHarness(initialHosts: string): Harness {
  let hosts = initialHosts
  const hostsWrites: string[] = []
  let flushes = 0
  let stops = 0
  let started: string[] = []
  let emit: (event: HelperEvent) => void = () => {}

  const deps: HelperDeps = {
    readHosts: () => hosts,
    writeHosts: (content) => {
      hosts = content
      hostsWrites.push(content)
    },
    flushDns: async () => {
      flushes++
    },
    freePort: async () => [4242],
    caddyBin: '/fake/caddy',
    caddyConfigPath: '/fake/Caddyfile',
    caddyCwd: '/',
    caddyEnv: {},
    trustLocalCa: async () => ({ trusted: true, output: '' }),
    startCaddy: (next): CaddyChild => {
      started = [deps.caddyBin, 'run', '--adapter', 'caddyfile', '--config', deps.caddyConfigPath]
      emit = next
      return { pid: 9876, kill: () => true }
    },
    stopCaddy: async () => {
      stops++
    },
    log: () => {},
  }

  return {
    deps,
    hostsWrites,
    flushCount: () => flushes,
    stoppedCaddy: () => stops,
    startedArgs: () => started,
    emit: event => emit(event),
  }
}

const HOSTS = '127.0.0.1\tlocalhost\n'

describe('helper runtime', () => {
  it('adds the requested host mapping and flushes DNS', async () => {
    const harness = createHarness(HOSTS)
    const runtime = createHelperRuntime(harness.deps)

    const response = await runtime.handle({
      id: 1,
      method: 'hosts.add',
      params: { ip: '127.0.0.1', host: 'test.abc.com' },
    })

    expect(response).toEqual({ id: 1, ok: true })
    expect(harness.hostsWrites.at(-1)).toContain('127.0.0.1 test.abc.com')
    expect(harness.flushCount()).toBe(1)
  })

  it('rejects a hostname that could inject a second hosts line', async () => {
    const harness = createHarness(HOSTS)
    const runtime = createHelperRuntime(harness.deps)

    const response = await runtime.handle({
      id: 1,
      method: 'hosts.add',
      params: { ip: '127.0.0.1', host: 'evil.test\n0.0.0.0 bank.example' },
    })

    expect(response.ok).toBe(false)
    expect(harness.hostsWrites).toHaveLength(0)
  })

  it('rejects an IP that is not an address', async () => {
    const harness = createHarness(HOSTS)
    const runtime = createHelperRuntime(harness.deps)

    const response = await runtime.handle({
      id: 1,
      method: 'hosts.add',
      params: { ip: 'not-an-ip', host: 'test.abc.com' },
    })

    expect(response.ok).toBe(false)
  })

  it('removes the mapping again on request', async () => {
    const harness = createHarness(HOSTS)
    const runtime = createHelperRuntime(harness.deps)

    await runtime.handle({ id: 1, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'test.abc.com' } })
    await runtime.handle({ id: 2, method: 'hosts.remove', params: { ip: '127.0.0.1', host: 'test.abc.com' } })

    expect(harness.hostsWrites.at(-1)).not.toContain('test.abc.com')
  })

  it('stops Caddy and drops its own mappings when the client disconnects', async () => {
    const harness = createHarness(HOSTS)
    const runtime = createHelperRuntime(harness.deps)
    const client = {}

    runtime.attach(client)
    await runtime.handle({ id: 1, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'test.abc.com' } })
    await runtime.handle({ id: 2, method: 'caddy.start' })

    await runtime.detach(client)

    expect(harness.stoppedCaddy()).toBe(1)
    expect(harness.hostsWrites.at(-1)).not.toContain('test.abc.com')
  })

  it('keeps the machine untouched while another client is still attached', async () => {
    const harness = createHarness(HOSTS)
    const runtime = createHelperRuntime(harness.deps)
    const first = {}
    const second = {}

    runtime.attach(first)
    runtime.attach(second)
    await runtime.handle({ id: 1, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'test.abc.com' } })

    await runtime.detach(first)

    expect(harness.stoppedCaddy()).toBe(0)
    expect(harness.hostsWrites.at(-1)).toContain('test.abc.com')

    await runtime.detach(second)
    expect(harness.stoppedCaddy()).toBe(1)
  })

  it('forwards Caddy output to attached clients', async () => {
    const harness = createHarness(HOSTS)
    const runtime = createHelperRuntime(harness.deps)
    const writes: string[] = []
    const client = {
      destroyed: false,
      write: (line: string) => {
        writes.push(line)
        return true
      },
    }

    runtime.attach(client)
    await runtime.handle({ id: 1, method: 'caddy.start' })
    harness.emit({ type: 'event', kind: 'caddy.stderr', data: 'caddy proxying' })

    expect(writes.join('')).toContain('caddy proxying')
  })

  it('starts Caddy with the binary and Caddyfile fixed at start-up', async () => {
    const harness = createHarness(HOSTS)
    const runtime = createHelperRuntime(harness.deps)

    await runtime.handle({ id: 1, method: 'caddy.start' })

    expect(harness.startedArgs()).toEqual([
      '/fake/caddy',
      'run',
      '--adapter',
      'caddyfile',
      '--config',
      '/fake/Caddyfile',
    ])
  })

  it('returns a structured error when writing the hosts file fails', async () => {
    const harness = createHarness(HOSTS)
    harness.deps.writeHosts = () => {
      throw new Error('EACCES: permission denied')
    }
    const runtime = createHelperRuntime(harness.deps)

    const response = await runtime.handle({
      id: 7,
      method: 'hosts.add',
      params: { ip: '127.0.0.1', host: 'test.abc.com' },
    })

    expect(response).toEqual({ id: 7, ok: false, error: { message: 'EACCES: permission denied' } })
  })

  it('keeps the hosts edit when only the DNS flush fails', async () => {
    const harness = createHarness(HOSTS)
    harness.deps.flushDns = async () => {
      throw new Error('No matching processes belonging to you were found')
    }
    const runtime = createHelperRuntime(harness.deps)

    const response = await runtime.handle({
      id: 8,
      method: 'hosts.add',
      params: { ip: '127.0.0.1', host: 'test.abc.com' },
    })

    expect(response).toEqual({ id: 8, ok: true })
    expect(harness.hostsWrites.at(-1)).toContain('test.abc.com')
  })

  it('reports pids released for a port', async () => {
    const harness = createHarness(HOSTS)
    const runtime = createHelperRuntime(harness.deps)

    const response = await runtime.handle({ id: 3, method: 'port.free', params: { port: 443 } })

    expect(response).toEqual({ id: 3, ok: true, result: { killed: [4242] } })
  })

  it('refuses to release a port the plugin never binds', async () => {
    const harness = createHarness(HOSTS)
    const runtime = createHelperRuntime(harness.deps)

    const response = await runtime.handle({ id: 4, method: 'port.free', params: { port: 22 } })

    expect(response.ok).toBe(false)
  })

  it('resets teardown when a new client attaches after cleanup', async () => {
    const harness = createHarness(HOSTS)
    const runtime = createHelperRuntime(harness.deps)
    const first = {}
    const second = {}

    runtime.attach(first)
    await runtime.handle({ id: 1, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'a.abc.com' } })
    await runtime.detach(first)

    runtime.attach(second)
    await runtime.handle({ id: 2, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'b.abc.com' } })

    expect(harness.stoppedCaddy()).toBe(1)

    await runtime.detach(second)
    expect(harness.stoppedCaddy()).toBe(2)
  })
})
