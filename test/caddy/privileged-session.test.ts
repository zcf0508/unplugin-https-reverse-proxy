import type { CaddyDependencies } from '../../src/caddy'
import type { HelperEvent } from '../../src/privileged/protocol'
import { existsSync, rmSync } from 'node:fs'
import { beforeEach, describe, expect, it } from 'vitest'
import { CaddyInstant } from '../../src/caddy'
import { caddyLockFilePath } from '../../src/caddy/constants'
import { HelperCaddyProcess } from '../../src/caddy/privileged'
import { createFakeConfig } from './fake-config'

// Each test starts from an unlocked state: a leftover lock would make the
// plugin believe another instance already owns Caddy.
beforeEach(() => {
  for (const path of [caddyLockFilePath, `${caddyLockFilePath}.lock`]) {
    if (existsSync(path))
      rmSync(path, { recursive: true, force: true })
  }
})

/**
 * Builds a fake privileged session: it records the primitive calls the plugin
 * makes and lets a test push Caddy output back, so the plugin's decisions are
 * observable without root, sudo or a real Caddy process.
 */
function createFakeSession() {
  const calls: Array<{ method: string, params?: unknown }> = []
  const listeners = new Set<(event: HelperEvent) => void>()
  let closed = false

  const client = {
    connected: true,
    async call(method: string, params?: unknown) {
      calls.push({ method, params })
      if (method === 'ping')
        return { pid: 1 }
      if (method === 'port.free')
        return { killed: [] }
      if (method === 'caddy.start')
        return { pid: 4242 }
      if (method === 'ca.trust')
        return { trusted: true, output: '' }
      return undefined
    },
    onEvent(listener: (event: HelperEvent) => void) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    async close() {
      closed = true
    },
  }

  return {
    calls,
    get closed() {
      return closed
    },
    emit(event: HelperEvent) {
      for (const listener of listeners)
        listener(event)
    },
    session: {
      client: client as never,
      reused: false,
      close: async () => {
        closed = true
      },
    } as Awaited<ReturnType<CaddyDependencies['openSession']>>,
  }
}

/** Waits until the plugin has issued a given helper call, without a fixed sleep. */
async function waitForCall(fake: ReturnType<typeof createFakeSession>, method: string): Promise<void> {
  for (let attempt = 0; attempt < 200; attempt++) {
    if (fake.calls.some(call => call.method === method))
      return
    await new Promise(resolve => setTimeout(resolve, 10))
  }
  throw new Error(`helper never received "${method}"; got ${fake.calls.map(call => call.method).join(', ')}`)
}

/** Runs Caddy until it reports it is serving, then returns. */
async function startServing(fake: ReturnType<typeof createFakeSession>, run: Promise<void>): Promise<void> {
  await waitForCall(fake, 'caddy.start')
  fake.emit({ type: 'event', kind: 'caddy.stderr', data: '{"msg":"serving initial configuration"}' })
  await run
}

describe('caddy through the privileged helper', () => {
  it('asks the helper to add the host mapping and free ports 80/443', async () => {
    const fake = createFakeSession()
    const caddy = new CaddyInstant({ openSession: async () => fake.session, config: () => createFakeConfig() })

    await startServing(fake, caddy.run('127.0.0.1:8080', 'test.abc.com'))

    expect(fake.calls).toContainEqual({ method: 'hosts.add', params: { ip: '127.0.0.1', host: 'test.abc.com' } })
    expect(fake.calls).toContainEqual({ method: 'port.free', params: { port: 443 } })
    expect(fake.calls).toContainEqual({ method: 'port.free', params: { port: 80 } })
  })

  it('starts Caddy through the helper without naming a binary', async () => {
    const fake = createFakeSession()
    const caddy = new CaddyInstant({ openSession: async () => fake.session, config: () => createFakeConfig() })

    await startServing(fake, caddy.run('127.0.0.1:8080', 'test.abc.com'))

    // The request carries no params: the helper owns the binary and arguments.
    expect(fake.calls).toContainEqual({ method: 'caddy.start' })
  })

  it('removes its own mapping during cleanup', async () => {
    const fake = createFakeSession()
    const caddy = new CaddyInstant({ openSession: async () => fake.session, config: () => createFakeConfig() })

    await startServing(fake, caddy.run('127.0.0.1:8080', 'test.abc.com'))
    await caddy.baseCleanup()

    expect(fake.calls).toContainEqual({
      method: 'hosts.remove',
      params: { ip: '127.0.0.1', host: 'test.abc.com' },
    })
  })

  it('leaves Caddy running for the projects that are still up', async () => {
    const fake = createFakeSession()
    const caddy = new CaddyInstant({ openSession: async () => fake.session, config: () => createFakeConfig() })

    await startServing(fake, caddy.run('127.0.0.1:8080', 'test.abc.com'))
    await caddy.baseCleanup()

    // The helper stops Caddy when its last client disconnects; a single client
    // exiting must not take the shared proxy down.
    expect(fake.calls.map(call => call.method)).not.toContain('caddy.stop')
  })

  it('surfaces a helper failure before Caddy starts', async () => {
    const fake = createFakeSession()
    const failing = {
      ...fake.session,
      client: {
        connected: true,
        onEvent: fake.session.client.onEvent,
        close: fake.session.client.close,
        call: async (method: string) => {
          if (method === 'hosts.add')
            throw new Error('EACCES: permission denied, open /etc/hosts')
          return (fake.session.client.call as (m: string) => Promise<unknown>)(method)
        },
      },
    } as typeof fake.session

    const caddy = new CaddyInstant({ openSession: async () => failing, config: () => createFakeConfig() })

    await expect(caddy.run('127.0.0.1:8080', 'test.abc.com')).rejects.toThrow('EACCES: permission denied')
  })

  it('reopens a session after the helper connection dropped', async () => {
    const first = createFakeSession()
    const second = createFakeSession()
    let opened = 0

    const caddy = new CaddyInstant({
      config: () => createFakeConfig(),
      openSession: async () => {
        opened++
        return opened === 1 ? first.session : second.session
      },
    })

    await startServing(first, caddy.run('127.0.0.1:8080', 'test.abc.com'))

    // Simulate the helper dying: the cached client reports itself disconnected.
    ;(first.session.client as unknown as { connected: boolean }).connected = false

    // The next run must not reuse the dead session; it opens a fresh one.
    const secondRun = caddy.run('127.0.0.1:8099', 'test2.abc.com')
    await waitForCall(second, 'hosts.add')
    await waitForCall(second, 'caddy.start')
    second.emit({ type: 'event', kind: 'caddy.stderr', data: '{"msg":"serving initial configuration"}' })
    await secondRun.catch(() => {})

    expect(opened).toBe(2)
  })
})

describe('helper caddy process', () => {
  it('re-emits stdout and stderr from helper events', () => {
    const listeners = new Set<(event: HelperEvent) => void>()
    const client = {
      onEvent(listener: (event: HelperEvent) => void) {
        listeners.add(listener)
        return () => listeners.delete(listener)
      },
      call: async () => undefined,
    }

    const child = new HelperCaddyProcess(client as never)
    const received: string[] = []
    child.stderr.on('data', (data: { toString: () => string }) => received.push(data.toString()))

    for (const listener of listeners)
      listener({ type: 'event', kind: 'caddy.stderr', data: '{"level":"error"}' })

    expect(received).toEqual(['{"level":"error"}'])
  })

  it('emits exit with the helper-reported code', () => {
    const listeners = new Set<(event: HelperEvent) => void>()
    const client = {
      onEvent(listener: (event: HelperEvent) => void) {
        listeners.add(listener)
        return () => listeners.delete(listener)
      },
      call: async () => undefined,
    }

    const child = new HelperCaddyProcess(client as never)
    const exit = new Promise<[number | null, string | null]>(
      resolve => child.on('exit', (code: number | null, signal: string | null) => resolve([code, signal])),
    )

    for (const listener of listeners)
      listener({ type: 'event', kind: 'caddy.exit', code: 1, signal: null })

    return expect(exit).resolves.toEqual([1, null])
  })

  it('does not ask the helper to stop twice', async () => {
    const stopped: string[] = []
    const client = {
      onEvent: () => () => {},
      call: async (method: string) => {
        stopped.push(method)
      },
    }

    const child = new HelperCaddyProcess(client as never)
    child.kill()
    child.kill()
    await new Promise(resolve => setTimeout(resolve, 10))

    expect(stopped.filter(method => method === 'caddy.stop')).toHaveLength(1)
  })
})
