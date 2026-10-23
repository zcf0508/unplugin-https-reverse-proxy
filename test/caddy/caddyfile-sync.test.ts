import { afterEach, describe, expect, it } from 'vitest'
import { useCaddyConfig } from '../../src/caddy/config'

/**
 * The Caddyfile has to follow every route change.
 *
 * Leaving a stopped project's site in it would keep proxying to an upstream
 * that no longer runs, and the routes another project still needs would be
 * rendered from a stale view.
 */
const rendered: Array<Record<string, { target: string }>> = []

function createConfig() {
  return useCaddyConfig({
    // A no-op lock: the ordering guarantee under test is the render call, not
    // the file locking, which the config tests cover separately.
    lock: { acquire: async () => () => {} },
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

afterEach(async () => {
  rendered.length = 0
  await createConfig().cleanUp()
})

describe('caddyfile follows route changes', () => {
  it('re-renders when a route is added', async () => {
    const config = createConfig()

    await config.writeCaddyConfig([route('a.example.com', 'localhost:5173')], 'project-a')

    expect(rendered).toHaveLength(1)
    expect(Object.values(rendered[0]).map(r => r.target)).toEqual(['a.example.com'])
  })

  it('drops the route of a project that exits', async () => {
    const config = createConfig()

    await config.writeCaddyConfig([route('a.example.com', 'localhost:5173')], 'project-a')
    await config.writeCaddyConfig([route('b.example.com', 'localhost:5174')], 'project-b')

    await config.removeProxy('project-a')

    // The last render must not contain the project that left, or its domain
    // would keep pointing at a dead upstream.
    const last = rendered[rendered.length - 1]
    expect(Object.values(last).map(r => r.target)).toEqual(['b.example.com'])
  })

  it('renders nothing extra when the last project exits', async () => {
    const config = createConfig()

    await config.writeCaddyConfig([route('a.example.com', 'localhost:5173')], 'project-a')
    const rendersBefore = rendered.length

    await config.removeProxy('project-a')

    // Removing the only route leaves an empty config; the file is deleted and
    // there is nothing left to serve.
    expect(rendered.length).toBe(rendersBefore + 1)
    expect(Object.keys(rendered[rendered.length - 1])).toEqual([])
  })
})
