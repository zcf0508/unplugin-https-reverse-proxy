import { describe, expect, it } from 'vitest'
import { genCaddyfile, validateTemplateContext } from '../src/caddy/caddyfile'

describe('caddyfile host grouping and route ordering', async () => {
  it('should group same host and order routes by base length desc', async () => {
    const ctx = validateTemplateContext({
      caddy_root: '/tmp',
      admin_socket: '/tmp/caddy-admin.sock',
      proxies: [
        {
          target: 'example.com',
          portSuffix: ':80',
          tls: '',
          source: 'localhost:5173',
          base: '/api',
          healthCheck: true,
        },
        {
          target: 'example.com',
          portSuffix: ':80',
          tls: '',
          source: 'localhost:5174',
          base: '/api/v2',
          healthCheck: true,
        },
        {
          target: 'another.com',
          portSuffix: ':80',
          tls: '',
          source: 'localhost:5175',
          base: '/web',
          healthCheck: false,
        },
      ],
    })

    const caddyfile = await genCaddyfile(ctx)
    expect(caddyfile).toContain('auto_https disable_redirects ignore_loaded_certs')
    expect(caddyfile).toContain('example.com:80 {')
    expect(caddyfile).toContain('another.com:80 {')

    const posApiV2 = caddyfile.indexOf('handle /api/v2/*')
    const posApi = caddyfile.indexOf('handle /api/*')
    expect(posApiV2).toBeGreaterThan(-1)
    expect(posApi).toBeGreaterThan(-1)
    expect(posApiV2).toBeLessThan(posApi)
  })

  it('binds the admin API to a unix socket', async () => {
    const ctx = validateTemplateContext({
      caddy_root: '/tmp',
      admin_socket: '/tmp/uhrp/caddy-admin.sock',
      proxies: [],
    })

    const caddyfile = await genCaddyfile(ctx)

    // Caddy runs as root; a TCP admin API would let any local user reconfigure
    // it with no further check.
    expect(caddyfile).toContain('admin unix//tmp/uhrp/caddy-admin.sock')
    expect(caddyfile).not.toContain('localhost:2019')
  })
})
