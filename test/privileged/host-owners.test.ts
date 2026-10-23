import type { CaddyChild, HelperDeps } from '../../src/privileged/server'
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { beforeEach, describe, expect, it } from 'vitest'
import { createHelperRuntime } from '../../src/privileged/server'

/**
 * Two projects can map the same domain. Removing the mapping when the first of
 * them exits would break the other, so ownership is reference-counted.
 */
function createDeps() {
  const dir = mkdtempSync(join(tmpdir(), 'uhrp-owner-'))
  const hostsPath = join(dir, 'hosts')
  writeFileSync(hostsPath, '127.0.0.1\tlocalhost\n')

  const deps: HelperDeps = {
    readHosts: () => readFileSync(hostsPath, 'utf8'),
    writeHosts: (content: string) => writeFileSync(hostsPath, content),
    flushDns: async () => {},
    freePort: async () => [],
    caddyBin: '/usr/bin/false',
    caddyConfigPath: join(dir, 'Caddyfile'),
    caddyCwd: dir,
    caddyEnv: {},
    trustLocalCa: async () => ({ trusted: true, output: '' }),
    startCaddy: (): CaddyChild => ({ pid: 1, kill: () => true, running: true }),
    stopCaddy: async () => {},
    log: () => {},
  }

  return { deps, hostsPath }
}

let ctx: ReturnType<typeof createDeps>

beforeEach(() => {
  ctx = createDeps()
})

describe('shared host mappings', () => {
  it('keeps the mapping while another client still needs it', async () => {
    const runtime = createHelperRuntime(ctx.deps)

    const a = {}
    const b = {}
    runtime.attach(a)
    runtime.attach(b)

    await runtime.handle({ id: 1, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'shared.abc.com' } }, a)
    await runtime.handle({ id: 2, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'shared.abc.com' } }, b)

    // First project exits.
    await runtime.detach(a)

    expect(readFileSync(ctx.hostsPath, 'utf8')).toContain('shared.abc.com')
  })

  it('removes the mapping when the last client leaves', async () => {
    const runtime = createHelperRuntime(ctx.deps)

    const a = {}
    const b = {}
    runtime.attach(a)
    runtime.attach(b)

    await runtime.handle({ id: 1, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'shared.abc.com' } }, a)
    await runtime.handle({ id: 2, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'shared.abc.com' } }, b)

    await runtime.detach(a)
    await runtime.detach(b)

    expect(readFileSync(ctx.hostsPath, 'utf8')).not.toContain('shared.abc.com')
  })

  it('ignores an explicit remove from a client that still shares the host', async () => {
    const runtime = createHelperRuntime(ctx.deps)

    const a = {}
    const b = {}
    runtime.attach(a)
    runtime.attach(b)

    await runtime.handle({ id: 1, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'shared.abc.com' } }, a)
    await runtime.handle({ id: 2, method: 'hosts.add', params: { ip: '127.0.0.1', host: 'shared.abc.com' } }, b)

    const response = await runtime.handle(
      { id: 3, method: 'hosts.remove', params: { ip: '127.0.0.1', host: 'shared.abc.com' } },
      a,
    )

    expect(response).toMatchObject({ ok: true, result: { kept: true } })
    expect(readFileSync(ctx.hostsPath, 'utf8')).toContain('shared.abc.com')
  })
})
