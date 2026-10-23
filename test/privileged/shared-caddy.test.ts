import type { CaddyChild, HelperDeps } from '../../src/privileged/server'
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { beforeEach, describe, expect, it } from 'vitest'
import { createHelperRuntime } from '../../src/privileged/server'

/**
 * Several dev servers share one helper, so the Caddy it owns belongs to all of
 * them. These cover the guarantees that sharing depends on.
 */
function createDeps(overrides: Partial<HelperDeps> = {}) {
  const dir = mkdtempSync(join(tmpdir(), 'uhrp-shared-'))
  const hostsPath = join(dir, 'hosts')
  writeFileSync(hostsPath, '127.0.0.1\tlocalhost\n')

  const started: Array<CaddyChild & { running?: boolean }> = []
  const freedPorts: Array<{ port: number, keepPid?: number }> = []

  const deps: HelperDeps = {
    readHosts: () => readFileSync(hostsPath, 'utf8'),
    writeHosts: (content: string) => writeFileSync(hostsPath, content),
    flushDns: async () => {},
    freePort: async (port, keepPid) => {
      freedPorts.push({ port, keepPid })
      return []
    },
    caddyBin: '/usr/bin/false',
    caddyConfigPath: join(dir, 'Caddyfile'),
    caddyCwd: dir,
    caddyEnv: {},
    trustLocalCa: async () => ({ trusted: true, output: '' }),
    startCaddy: (): CaddyChild => {
      const child: CaddyChild & { running?: boolean } = { pid: 9000 + started.length, kill: () => true, running: true }
      started.push(child)
      return child
    },
    stopCaddy: async () => {},
    log: () => {},
    ...overrides,
  }

  return { deps, started, freedPorts, dir }
}

let ctx: ReturnType<typeof createDeps>

beforeEach(() => {
  ctx = createDeps()
})

describe('caddy.start is idempotent', () => {
  it('spawns once and reports the running pid to later callers', async () => {
    const runtime = createHelperRuntime(ctx.deps)

    const first = await runtime.handle({ id: 1, method: 'caddy.start' })
    const second = await runtime.handle({ id: 2, method: 'caddy.start' })

    expect(ctx.started).toHaveLength(1)
    expect(first).toMatchObject({ ok: true, result: { started: true } })
    expect(second).toMatchObject({ ok: true, result: { started: false } })
    expect((second as { result: { pid: number } }).result.pid)
      .toBe((first as { result: { pid: number } }).result.pid)
  })

  it('spawns again after Caddy exited', async () => {
    const runtime = createHelperRuntime(ctx.deps)
    await runtime.handle({ id: 1, method: 'caddy.start' })

    // A crashed Caddy must not be reported as running.
    ctx.started[0].running = false
    await runtime.handle({ id: 2, method: 'caddy.start' })

    expect(ctx.started).toHaveLength(2)
  })
})

describe('port.free protects the shared Caddy', () => {
  it('passes the running Caddy pid so the helper can skip it', async () => {
    const runtime = createHelperRuntime(ctx.deps)
    const started = await runtime.handle({ id: 1, method: 'caddy.start' })
    const pid = (started as { result: { pid: number } }).result.pid

    await runtime.handle({ id: 2, method: 'port.free', params: { port: 443 } })

    expect(ctx.freedPorts).toEqual([{ port: 443, keepPid: pid }])
  })

  it('passes no pid when Caddy is not running', async () => {
    const runtime = createHelperRuntime(ctx.deps)

    await runtime.handle({ id: 1, method: 'port.free', params: { port: 443 } })

    expect(ctx.freedPorts).toEqual([{ port: 443, keepPid: undefined }])
  })
})
