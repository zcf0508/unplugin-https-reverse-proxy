import type { OpenedPrivilegedSession } from '../../src/caddy/privileged'
import type { HelperEvent } from '../../src/privileged/protocol'
import { describe, expect, it } from 'vitest'
import { CaddyInstant } from '../../src/caddy'
import { createFakeConfig } from './fake-config'

/**
 * A second project attaches to the Caddy the first one started. That Caddy
 * already printed its "serving initial configuration" line, so a plugin that
 * waits for it again would never resolve and never print its success message.
 */
function createReusingSession() {
  const calls: string[] = []
  const listeners = new Set<(event: HelperEvent) => void>()

  const client = {
    connected: true,
    async call(method: string): Promise<unknown> {
      calls.push(method)
      if (method === 'caddy.start')
        return { pid: 4242, started: false }
      if (method === 'port.free')
        return { killed: [] }
      if (method === 'ca.trust')
        return { trusted: true, output: '' }
      return undefined
    },
    onEvent(listener: (event: HelperEvent) => void) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    async close() {},
  }

  return {
    calls,
    session: {
      // The plugin only uses the members above; the rest of the client surface
      // is exercised by the helper's own tests.
      client: client as unknown as OpenedPrivilegedSession['client'],
      reused: true,
      close: async () => {},
    },
  }
}

describe('attaching to a running Caddy', () => {
  it('resolves without waiting for a startup line it will never see', async () => {
    const fake = createReusingSession()
    const caddy = new CaddyInstant({
      openSession: async () => fake.session,
      config: () => createFakeConfig(),
    })

    // A timeout would mean the plugin is waiting for output the reused Caddy
    // already emitted for the first project.
    const run = caddy.run('127.0.0.1:8080', 'second.abc.com')

    await expect(Promise.race([
      run,
      new Promise((_, reject) => setTimeout(() => reject(new Error('run() never resolved')), 2000)),
    ])).resolves.toBeUndefined()

    expect(fake.calls).toContain('caddy.start')
  }, 10_000)
})
