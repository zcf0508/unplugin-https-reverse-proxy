import { existsSync } from 'node:fs'
import { unlink } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { CaddyInstant, download } from '../../src/caddy'
import { caddyPath, TEMP_DIR } from '../../src/caddy/constants'

const __dirname = dirname(fileURLToPath(import.meta.url))
const baseTestUrl = resolve(__dirname, '../')

beforeAll(async () => {
  if (existsSync(resolve(baseTestUrl, TEMP_DIR)))
    await unlink(resolve(baseTestUrl, TEMP_DIR))
})

describe('caddy', () => {
  it('download', async () => {
    expect(await download()).toBe(caddyPath)
    expect(existsSync(caddyPath)).toBe(true)
  })

  describe('reverse-proxy', () => {
    beforeEach(async () => {
      const baseUrl = resolve(baseTestUrl, '.uhrp')

      if (existsSync(resolve(baseUrl, 'CADDYFILE')))
        await unlink(resolve(baseUrl, 'CADDYFILE'))
      if (existsSync(resolve(baseUrl, 'caddylock')))
        await unlink(resolve(baseUrl, 'caddylock'))
    })

    it.sequential(':80', async () => {
      const caddy = new CaddyInstant()
      expect(caddy.checkLock()).toBe(false)
      await caddy.run('127.0.0.1:8080', 'test-1.abc.com')

      expect(caddy.checkLock()).toBe(true)

      const caddyfile = await caddy.getCaddyfile()
      expect(caddyfile).toMatchInlineSnapshot(`
        "
        {
          debug
          auto_https disable_redirects
        }
            

        test-1.abc.com:80 {
          
          reverse_proxy http://127.0.0.1:8080 {
            health_uri /
            health_interval 2s
            health_timeout 5s
            fail_duration 2s
            unhealthy_status 502 503 504 404
            lb_try_duration 3s
            lb_try_interval 300ms
            health_headers {
              Accept text/html
              Accept-Encoding gzip, deflate, br
              User-Agent Caddy-Health-Check
            }

            @error status 502 503 504 404
            handle_response @error {
              respond * 503 {
                body "Service Unavailable"
                close
              }
            }
          }
        }

        "
      `)

      await caddy.baseCleanup()
    })

    it.sequential(':443', async () => {
      const caddy = new CaddyInstant()
      expect(caddy.checkLock()).toBe(false)
      await caddy.run('127.0.0.1:8080', 'test-2.abc.com', {
        https: true,
      })

      expect(caddy.checkLock()).toBe(true)

      const caddyfile = await caddy.getCaddyfile()
      expect(caddyfile).toMatchInlineSnapshot(`
        "
        {
          debug
          auto_https disable_redirects
        }
            

        test-2.abc.com {
          tls internal
          reverse_proxy http://127.0.0.1:8080 {
            health_uri /
            health_interval 2s
            health_timeout 5s
            fail_duration 2s
            unhealthy_status 502 503 504 404
            lb_try_duration 3s
            lb_try_interval 300ms
            health_headers {
              Accept text/html
              Accept-Encoding gzip, deflate, br
              User-Agent Caddy-Health-Check
            }

            @error status 502 503 504 404
            handle_response @error {
              respond * 503 {
                body "Service Unavailable"
                close
              }
            }
          }
        }

        "
      `)
      await caddy.baseCleanup()
    })

    it.sequential('both', async () => {
      const caddy_80 = new CaddyInstant()
      expect(caddy_80.checkLock()).toBe(false)
      await caddy_80.run('127.0.0.1:8080', 'test-3.abc.com')

      expect(caddy_80.checkLock()).toBe(true)

      let caddyfile = await caddy_80.getCaddyfile()
      expect(caddyfile).toMatchInlineSnapshot(`
        "
        {
          debug
          auto_https disable_redirects
        }
            

        test-3.abc.com:80 {
          
          reverse_proxy http://127.0.0.1:8080 {
            health_uri /
            health_interval 2s
            health_timeout 5s
            fail_duration 2s
            unhealthy_status 502 503 504 404
            lb_try_duration 3s
            lb_try_interval 300ms
            health_headers {
              Accept text/html
              Accept-Encoding gzip, deflate, br
              User-Agent Caddy-Health-Check
            }

            @error status 502 503 504 404
            handle_response @error {
              respond * 503 {
                body "Service Unavailable"
                close
              }
            }
          }
        }

        "
      `)

      const caddy_443 = new CaddyInstant()
      expect(caddy_443.checkLock()).toBe(true)
      await caddy_443.run('127.0.0.1:8080', 'test-4.abc.com', {
        https: true,
      })

      expect(caddy_443.checkLock()).toBe(true)

      caddyfile = await caddy_443.getCaddyfile()
      expect(caddyfile).toMatchInlineSnapshot(`
        "
        {
          debug
          auto_https disable_redirects
        }
            

        test-3.abc.com:80 {
          
          reverse_proxy http://127.0.0.1:8080 {
            health_uri /
            health_interval 2s
            health_timeout 5s
            fail_duration 2s
            unhealthy_status 502 503 504 404
            lb_try_duration 3s
            lb_try_interval 300ms
            health_headers {
              Accept text/html
              Accept-Encoding gzip, deflate, br
              User-Agent Caddy-Health-Check
            }

            @error status 502 503 504 404
            handle_response @error {
              respond * 503 {
                body "Service Unavailable"
                close
              }
            }
          }
        }


        test-4.abc.com {
          tls internal
          reverse_proxy http://127.0.0.1:8080 {
            health_uri /
            health_interval 2s
            health_timeout 5s
            fail_duration 2s
            unhealthy_status 502 503 504 404
            lb_try_duration 3s
            lb_try_interval 300ms
            health_headers {
              Accept text/html
              Accept-Encoding gzip, deflate, br
              User-Agent Caddy-Health-Check
            }

            @error status 502 503 504 404
            handle_response @error {
              respond * 503 {
                body "Service Unavailable"
                close
              }
            }
          }
        }

        "
      `)

      await caddy_443.baseCleanup()
      await caddy_80.baseCleanup()
    })

    it.sequential(':443 with base', async () => {
      const caddy = new CaddyInstant()
      expect(caddy.checkLock()).toBe(false)
      await caddy.run('127.0.0.1:8080', 'test-2.abc.com', {
        https: true,
        base: '/test/',
      })

      expect(caddy.checkLock()).toBe(true)

      const caddyfile = await caddy.getCaddyfile()
      expect(caddyfile).toMatchInlineSnapshot(`
        "
        {
          debug
          auto_https disable_redirects
        }
            

        test-2.abc.com {
          tls internal
          reverse_proxy http://127.0.0.1:8080 {
            health_uri /test/
            health_interval 2s
            health_timeout 5s
            fail_duration 2s
            unhealthy_status 502 503 504 404
            lb_try_duration 3s
            lb_try_interval 300ms
            health_headers {
              Accept text/html
              Accept-Encoding gzip, deflate, br
              User-Agent Caddy-Health-Check
            }

            @error status 502 503 504 404
            handle_response @error {
              respond * 503 {
                body "Service Unavailable"
                close
              }
            }
          }
        }

        "
      `)

      await caddy.baseCleanup()
    })
  })
}, {
  timeout: 10000000,
})
