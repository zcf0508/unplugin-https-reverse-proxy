import { randomUUID } from 'node:crypto'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { useCaddyConfig } from '../../src/caddy/config'

/**
 * The Caddyfile has to follow every route change.
 *
 * Leaving a stopped project's site in it would keep proxying to an upstream
 * that no longer runs, and the routes another project still needs would be
 * rendered from a stale view.
 */
const rendered: Array<Record<string, { target: string }>> = []

let dir: string

beforeEach(() => {
  dir = mkdtempSync(join(tmpdir(), 'uhrp-sync-'))
})

function createConfig() {
  return useCaddyConfig({
    // A no-op lock: the ordering guarantee under test is the render call, not
    // the file locking, which the config tests cover separately.
    lock: { acquire: async () => () => {} },
    // Own file per test: the shared one is written by the other config tests
    // in parallel, and their routes would show up in these renders.
    configPath: join(dir, 'config.json'),
    renderCaddyfile: async (proxies) => {
      rendered.push({ ...proxies } as Record<string, { target: string }>)
    },
  })
}

function route(target: string, source: string) {
  return {
    target,
    portSuffix: ':80',
    tls: '',
    source,
    base: '/',
    healthCheck: true,
  }
}

function ownKey(): string {
  return `sync-${randomUUID()}`
}

afterEach(() => {
  rendered.length = 0
  rmSync(dir, { recursive: true, force: true })
})

describe('caddyfile follows route changes', () => {
  it('re-renders when a route is added', async () => {
    const config = createConfig()
    const key = ownKey()

    await config.writeCaddyConfig([route('a.example.com', 'localhost:5173')], key)

    expect(rendered).toHaveLength(1)
    expect(Object.values(rendered[0]).some(r => r.target === 'a.example.com')).toBe(true)
  })

  it('drops the route of a project that exits', async () => {
    const config = createConfig()
    const keyA = ownKey()
    const keyB = ownKey()

    await config.writeCaddyConfig([route('a.example.com', 'localhost:5173')], keyA)
    await config.writeCaddyConfig([route('b.example.com', 'localhost:5174')], keyB)

    await config.removeProxy(keyA)

    // The last render must not contain the project that left, or its domain
    // would keep pointing at a dead upstream.
    const last = rendered[rendered.length - 1]
    const targets = Object.values(last).map(r => r.target)
    expect(targets).toContain('b.example.com')
    expect(targets.filter(t => t === 'a.example.com')).toHaveLength(0)
  })

  it('renders again after the last project exits', async () => {
    const config = createConfig()
    const key = ownKey()

    await config.writeCaddyConfig([route('only.example.com', 'localhost:5173')], key)
    const rendersBefore = rendered.length

    await config.removeProxy(key)

    expect(rendered.length).toBe(rendersBefore + 1)
    expect(Object.values(rendered[rendered.length - 1]).some(r => r.target === 'only.example.com')).toBe(false)
  })
})
