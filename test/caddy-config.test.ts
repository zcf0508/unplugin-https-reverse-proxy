import { randomUUID } from 'node:crypto'
import { afterEach, describe, expect, it } from 'vitest'
import { useCaddyConfig } from '../src/caddy/config'

/**
 * The config path is a module constant, so every test file in this run shares
 * one file. Clearing it wholesale would race the other config tests; each case
 * scopes its routes to a unique owner and removes only those.
 */
const owners: string[] = []

function ownOwner(): string {
  const owner = `owner-${randomUUID()}`
  owners.push(owner)
  return owner
}

describe('caddy config write with base path', () => {
  afterEach(async () => {
    const { removeProxy } = useCaddyConfig()
    for (const owner of owners.splice(0))
      await removeProxy(owner)
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
    ], ownOwner())

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
    ], ownOwner())

    await writeCaddyConfig([
      {
        target: 'b.example.com',
        portSuffix: ':80',
        tls: '',
        source: 'localhost:5174',
        base: '/',
        healthCheck: true,
      },
    ], ownOwner())

    const targets = Object.values(readProxies()).map(entry => entry.target)
    expect(targets).toEqual(expect.arrayContaining(['a.example.com', 'b.example.com']))
  })

  it('removes only the routes of the project that exits', async () => {
    const { writeCaddyConfig, removeProxy, readProxies } = useCaddyConfig()
    const exiting = ownOwner()

    await writeCaddyConfig([
      {
        target: 'a.example.com',
        portSuffix: ':80',
        tls: '',
        source: 'localhost:5173',
        base: '/',
        healthCheck: true,
      },
    ], exiting)

    await writeCaddyConfig([
      {
        target: 'b.example.com',
        portSuffix: ':80',
        tls: '',
        source: 'localhost:5174',
        base: '/',
        healthCheck: true,
      },
    ], ownOwner())

    await removeProxy(exiting)

    const targets = Object.values(readProxies()).map(entry => entry.target)
    expect(targets).toContain('b.example.com')
    expect(targets.filter(t => t === 'a.example.com')).toHaveLength(0)
  })
})
