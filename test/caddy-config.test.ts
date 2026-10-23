import { afterEach, describe, expect, it } from 'vitest'
import { useCaddyConfig } from '../src/caddy/config'

const OWNER = 'test-owner'

describe('caddy config write with base path', () => {
  afterEach(async () => {
    const { cleanUp } = useCaddyConfig()
    await cleanUp()
  })

  it('keeps both bases when one host serves two projects', async () => {
    const { writeCaddyConfig, configJsonRef } = useCaddyConfig()

    await writeCaddyConfig([
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
    ], OWNER)

    const cfg = configJsonRef()
    expect(cfg).toBeTruthy()

    const entries = Object.values(cfg!)
    const app = entries.find(entry => entry.base === '/app/')
    const api = entries.find(entry => entry.base === '/api/')

    expect(app?.source).toEqual('localhost:5173')
    expect(api?.source).toEqual('localhost:5174')
  })

  it('keeps another project\'s routes when this one writes', async () => {
    const { writeCaddyConfig, readProxies } = useCaddyConfig()

    await writeCaddyConfig([
      {
        target: 'a.example.com',
        portSuffix: ':80',
        tls: '',
        source: 'localhost:5173',
        base: '/',
        healthCheck: true,
      },
    ], 'project-a')

    await writeCaddyConfig([
      {
        target: 'b.example.com',
        portSuffix: ':80',
        tls: '',
        source: 'localhost:5174',
        base: '/',
        healthCheck: true,
      },
    ], 'project-b')

    const targets = Object.values(readProxies()).map(entry => entry.target)
    expect(targets).toEqual(expect.arrayContaining(['a.example.com', 'b.example.com']))
  })

  it('removes only the routes of the project that exits', async () => {
    const { writeCaddyConfig, removeProxy, readProxies } = useCaddyConfig()

    await writeCaddyConfig([
      {
        target: 'a.example.com',
        portSuffix: ':80',
        tls: '',
        source: 'localhost:5173',
        base: '/',
        healthCheck: true,
      },
    ], 'project-a')

    await writeCaddyConfig([
      {
        target: 'b.example.com',
        portSuffix: ':80',
        tls: '',
        source: 'localhost:5174',
        base: '/',
        healthCheck: true,
      },
    ], 'project-b')

    await removeProxy('project-a')

    const targets = Object.values(readProxies()).map(entry => entry.target)
    expect(targets).toEqual(['b.example.com'])
  })
})
