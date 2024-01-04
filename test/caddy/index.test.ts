import { existsSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { CaddyInstant, download } from '../../src/caddy'
import { caddyPath } from '../../src/caddy/constants'

describe('caddy', () => {
  it('download', async () => {
    expect(await download()).toBe(caddyPath)
    expect(existsSync(caddyPath)).toBe(true)
  })

  it('reverse-proxy', async () => {
    const caddy = new CaddyInstant()
    await caddy.run('127.0.0.1:8080', 'test.abc.com')
  })
}, {
  timeout: 10000000,
})
