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

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

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
    })

    it.sequential(':80', async () => {
      const caddy = new CaddyInstant()
      await caddy.run('127.0.0.1:8080', 'test-1.abc.com')

      const caddyfile = await caddy.getCaddyfile()
      expect(caddyfile).toMatchInlineSnapshot(`
        "{
          debug
          auto_https disable_redirects ignore_loaded_certs
        }

        :7601 {
          root * "/Users/zyb/Library/Application Support/Caddy/pki/authorities/local"
          file_server browse
        }

        # 正向代理配置
        :7600 {
          bind 0.0.0.0
          
          forward_proxy {
            hide_ip
            hide_via
            acl {
              allow all
            }
          }
        }


        test-1.abc.com:80 {
          

          
          handle /* {
            reverse_proxy http://127.0.0.1:8080  {
              health_uri /
              health_interval 2s
              health_timeout 5s
              health_headers {
                User-Agent {http.request.header.User-Agent}
                Accept text/html,application/json,*/*
              }
              fail_duration 2s
              unhealthy_status 502 503 504 404
              lb_try_duration 3s
              lb_try_interval 300ms

              @error status 502 503 504 404
              handle_response @error {
                respond * 503 {
                  body "Service Unavailable"
                  close
                }
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
      await caddy.run('127.0.0.1:8080', 'test-2.abc.com', {
        https: true,
      })

      const caddyfile = await caddy.getCaddyfile()
      expect(caddyfile).toMatchInlineSnapshot(`
        "{
          debug
          auto_https disable_redirects ignore_loaded_certs
        }

        :7601 {
          root * "/Users/zyb/Library/Application Support/Caddy/pki/authorities/local"
          file_server browse
        }

        # 正向代理配置
        :7600 {
          bind 0.0.0.0
          
          forward_proxy {
            hide_ip
            hide_via
            acl {
              allow all
            }
          }
        }


        test-2.abc.com {
          tls internal

          
          handle /* {
            reverse_proxy http://127.0.0.1:8080  {
              health_uri /
              health_interval 2s
              health_timeout 5s
              health_headers {
                User-Agent {http.request.header.User-Agent}
                Accept text/html,application/json,*/*
              }
              fail_duration 2s
              unhealthy_status 502 503 504 404
              lb_try_duration 3s
              lb_try_interval 300ms

              @error status 502 503 504 404
              handle_response @error {
                respond * 503 {
                  body "Service Unavailable"
                  close
                }
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
      await caddy_80.run('127.0.0.1:8080', 'test-3.abc.com')

      let caddyfile = await caddy_80.getCaddyfile()
      expect(caddyfile).toMatchInlineSnapshot(`
        "{
          debug
          auto_https disable_redirects ignore_loaded_certs
        }

        :7601 {
          root * "/Users/zyb/Library/Application Support/Caddy/pki/authorities/local"
          file_server browse
        }

        # 正向代理配置
        :7600 {
          bind 0.0.0.0
          
          forward_proxy {
            hide_ip
            hide_via
            acl {
              allow all
            }
          }
        }


        test-3.abc.com:80 {
          

          
          handle /* {
            reverse_proxy http://127.0.0.1:8080  {
              health_uri /
              health_interval 2s
              health_timeout 5s
              health_headers {
                User-Agent {http.request.header.User-Agent}
                Accept text/html,application/json,*/*
              }
              fail_duration 2s
              unhealthy_status 502 503 504 404
              lb_try_duration 3s
              lb_try_interval 300ms

              @error status 502 503 504 404
              handle_response @error {
                respond * 503 {
                  body "Service Unavailable"
                  close
                }
              }
            }
            
          }
          
        }

        "
      `)

      const caddy_443 = new CaddyInstant()
      await caddy_443.run('127.0.0.1:8080', 'test-4.abc.com', {
        https: true,
        healthCheck: false,
      })

      await sleep(50)
      caddyfile = await caddy_443.getCaddyfile()
      expect(caddyfile).toMatchInlineSnapshot(`
        "{
          debug
          auto_https disable_redirects ignore_loaded_certs
        }

        :7601 {
          root * "/Users/zyb/Library/Application Support/Caddy/pki/authorities/local"
          file_server browse
        }

        # 正向代理配置
        :7600 {
          bind 0.0.0.0
          
          forward_proxy {
            hide_ip
            hide_via
            acl {
              allow all
            }
          }
        }


        test-3.abc.com:80 {
          

          
          handle /* {
            reverse_proxy http://127.0.0.1:8080  {
              health_uri /
              health_interval 2s
              health_timeout 5s
              health_headers {
                User-Agent {http.request.header.User-Agent}
                Accept text/html,application/json,*/*
              }
              fail_duration 2s
              unhealthy_status 502 503 504 404
              lb_try_duration 3s
              lb_try_interval 300ms

              @error status 502 503 504 404
              handle_response @error {
                respond * 503 {
                  body "Service Unavailable"
                  close
                }
              }
            }
            
          }
          
        }

        test-4.abc.com {
          tls internal

          
          handle /* {
            reverse_proxy http://127.0.0.1:8080 
          }
          
        }

        "
      `)

      await caddy_443.baseCleanup()
      await caddy_80.baseCleanup()
    })

    it.sequential(':443 with base', async () => {
      const caddy = new CaddyInstant()
      await caddy.run('127.0.0.1:8080', 'test-2.abc.com', {
        https: true,
        base: '/test/',
      })

      const caddyfile = await caddy.getCaddyfile()
      expect(caddyfile).toMatchInlineSnapshot(`
        "{
          debug
          auto_https disable_redirects ignore_loaded_certs
        }

        :7601 {
          root * "/Users/zyb/Library/Application Support/Caddy/pki/authorities/local"
          file_server browse
        }

        # 正向代理配置
        :7600 {
          bind 0.0.0.0
          
          forward_proxy {
            hide_ip
            hide_via
            acl {
              allow all
            }
          }
        }


        test-2.abc.com {
          tls internal

          
          handle /test/* {
            reverse_proxy http://127.0.0.1:8080  {
              health_uri /test/
              health_interval 2s
              health_timeout 5s
              health_headers {
                User-Agent {http.request.header.User-Agent}
                Accept text/html,application/json,*/*
              }
              fail_duration 2s
              unhealthy_status 502 503 504 404
              lb_try_duration 3s
              lb_try_interval 300ms

              @error status 502 503 504 404
              handle_response @error {
                respond * 503 {
                  body "Service Unavailable"
                  close
                }
              }
            }
            
          }
          
        }

        "
      `)

      await caddy.baseCleanup()
    })

    it.sequential('same host different base no override', async () => {
      const caddyA = new CaddyInstant()
      await caddyA.run('127.0.0.1:8081', 'test-5.abc.com', {
        base: '/app',
      })

      const caddyB = new CaddyInstant()
      await caddyB.run('127.0.0.1:8082', 'test-5.abc.com', {
        base: '/api',
      })

      await sleep(50)
      const caddyfile = await caddyB.getCaddyfile()

      expect(caddyfile).toContain('test-5.abc.com:80 {')
      expect(caddyfile).toContain('handle /app/*')
      expect(caddyfile).toContain('reverse_proxy http://127.0.0.1:8081')
      expect(caddyfile).toContain('handle /api/*')
      expect(caddyfile).toContain('reverse_proxy http://127.0.0.1:8082')

      await caddyB.baseCleanup()
      await caddyA.baseCleanup()
    })
  })
}, {
  timeout: 10000000,
})
