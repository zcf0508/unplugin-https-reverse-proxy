import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it, vi } from 'vitest'
import { CaddyInstant } from '../../src/caddy'
import { useCaddyConfig } from '../../src/caddy/config'

describe('caddyfile before privileged helper startup', () => {
  it('creates the Caddyfile from existing routes before opening a new session', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'uhrp-first-start-'))
    const caddyfile = join(dir, 'CADDYFILE')
    const config = useCaddyConfig({
      configPath: join(dir, 'config.json'),
      lock: { acquire: async () => () => {} },
      renderCaddyfile: async (proxies) => {
        writeFileSync(caddyfile, JSON.stringify(Object.values(proxies).map(route => route.target)))
      },
    })

    try {
      await config.writeCaddyConfig([{
        target: 'other.example.com',
        portSuffix: ':80',
        tls: '',
        source: '127.0.0.1:5173',
        base: '/',
        healthCheck: true,
      }], 'other-project')
      rmSync(caddyfile)

      let contentAtStartup: string | undefined
      const caddy = new CaddyInstant({
        config: () => config,
        openSession: async () => {
          contentAtStartup = existsSync(caddyfile) ? readFileSync(caddyfile, 'utf8') : undefined
          throw new Error('session failed')
        },
      })
      vi.spyOn(caddy, 'init').mockResolvedValue()

      await expect(caddy.run('127.0.0.1:8222', 'local.example.com')).rejects.toThrow('session failed')
      expect(contentAtStartup).toEqual(JSON.stringify(['other.example.com']))
      expect(Object.values(config.readProxies()).map(route => route.target)).toEqual(['other.example.com'])
    }
    finally {
      rmSync(dir, { recursive: true, force: true })
    }
  })
})
