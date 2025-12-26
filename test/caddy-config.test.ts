import { afterEach, describe, expect, it } from 'vitest'
import { useCaddyConfig } from '../src/caddy/config'

describe('caddy config write with base path', () => {
  afterEach(async () => {
    const { cleanUp } = useCaddyConfig()
    await cleanUp()
  })

  it('should not override when same host with different base', () => {
    const { writeCaddyConfig, configJsonRef } = useCaddyConfig()

    writeCaddyConfig([
      {
        target: 'example.com',
        portSuffix: ':80',
        tls: '',
        source: 'localhost:5173',
        base: '/app',
        healthCheck: true,
      },
      {
        target: 'example.com',
        portSuffix: ':80',
        tls: '',
        source: 'localhost:5174',
        base: '/api',
        healthCheck: true,
      },
    ])

    const cfg = configJsonRef()
    expect(cfg).toBeTruthy()
    const keys = Object.keys(cfg!)
    expect(keys).toContain('example.com:80/app/')
    expect(keys).toContain('example.com:80/api/')
    expect(cfg!['example.com:80/app/'].source).toEqual('localhost:5173')
    expect(cfg!['example.com:80/api/'].source).toEqual('localhost:5174')
  })
})
