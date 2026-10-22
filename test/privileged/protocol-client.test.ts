import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'
import { startHelper } from '../../src/privileged/bootstrap'
import { collectForwardedEnv, connectClient } from '../../src/privileged/client'
import { decodeMessage, serializeMessage, splitLines } from '../../src/privileged/protocol'
import { createNodeHelperDeps } from '../../src/privileged/server'

const cleanups: Array<() => Promise<void> | void> = []
let counter = 0

function tempSocket(): string {
  counter++
  return join(tmpdir(), `uhrp-test-${process.pid}-${counter}.sock`)
}

function createTempHosts(initial = '127.0.0.1\tlocalhost\n'): string {
  counter++
  const path = join(tmpdir(), `uhrp-hosts-${process.pid}-${counter}`)
  writeFileSync(path, initial)
  return path
}

function helperDeps(hostsPath: string) {
  return createNodeHelperDeps({
    hostsPath,
    log: () => {},
    caddyBin: process.execPath,
    caddyConfigPath: hostsPath,
  })
}

afterEach(async () => {
  for (const cleanup of cleanups.splice(0))
    await cleanup()
})

describe('protocol', () => {
  it('round-trips a request through serialize/decode', () => {
    const decoded = decodeMessage(serializeMessage({ id: 1, ok: true, result: { pid: 2 } }).trim())

    expect(decoded).toEqual({ ok: true, message: { id: 1, ok: true, result: { pid: 2 } } })
  })

  it('rejects malformed lines without throwing', () => {
    expect(decodeMessage('not json').ok).toBe(false)
    expect(decodeMessage('{"id":"1","ok":true}').ok).toBe(false)
  })

  it('keeps the trailing partial line when splitting a stream', () => {
    const first = splitLines('', '{"id":1}\n{"id":')
    expect(first.lines).toEqual(['{"id":1}'])

    const second = splitLines(first.rest, '2}\n')
    expect(second.lines).toEqual(['{"id":2}'])
    expect(second.rest).toBe('')
  })
})

describe('forwarded environment', () => {
  it('forwards only the variables the helper needs', () => {
    const env = collectForwardedEnv({
      HOME: '/Users/dev',
      HTTPS_PROXY: 'http://127.0.0.1:7890',
      HTTPS_PROXY_VALUE_EXTRA: 'ignored',
      PATH: '/usr/bin',
      SECRET_TOKEN: 'nope',
    })

    expect(env).toEqual({
      HOME: '/Users/dev',
      HTTPS_PROXY: 'http://127.0.0.1:7890',
    })
  })

  it('skips unset and empty values', () => {
    expect(collectForwardedEnv({ HOME: '', USER: 'dev' })).toEqual({ USER: 'dev' })
  })
})

describe('helper over a socket', () => {
  it('edits the hosts file through the helper and restores it when the client leaves', async () => {
    const socketPath = tempSocket()
    const hostsPath = createTempHosts()

    const helper = await startHelper({
      socketPath,
      token: 'secret-token',
      caddyBin: process.execPath,
      caddyConfigPath: hostsPath,
      deps: helperDeps(hostsPath),
      log: () => {},
    })
    cleanups.push(() => helper.close())

    const client = await connectClient({ socketPath, token: 'secret-token', timeoutMs: 5000 })
    cleanups.push(() => client.close())

    await client.call('hosts.add', { ip: '127.0.0.1', host: 'test.abc.com' })
    expect(readFileSync(hostsPath, 'utf8')).toContain('test.abc.com')

    await client.close()
    await new Promise(resolve => setTimeout(resolve, 150))

    expect(readFileSync(hostsPath, 'utf8')).not.toContain('test.abc.com')
  })

  it('sweeps entries a killed session left behind, before accepting clients', async () => {
    const socketPath = tempSocket()
    const hostsPath = createTempHosts('127.0.0.1\tlocalhost\n127.0.0.1 stale.abc.com # uhrp\n')

    const helper = await startHelper({
      socketPath,
      token: 'sweep',
      caddyBin: process.execPath,
      caddyConfigPath: hostsPath,
      deps: helperDeps(hostsPath),
      log: () => {},
    })
    cleanups.push(() => helper.close())

    // The helper cleans up during start-up, so the stale entry is already gone.
    expect(readFileSync(hostsPath, 'utf8')).not.toContain('stale.abc.com')
  })

  it('refuses a client that presents the wrong token', async () => {
    const socketPath = tempSocket()
    const hostsPath = createTempHosts()
    const helper = await startHelper({
      socketPath,
      token: 'right',
      caddyBin: process.execPath,
      caddyConfigPath: hostsPath,
      deps: helperDeps(hostsPath),
      log: () => {},
    })
    cleanups.push(() => helper.close())

    await expect(
      connectClient({ socketPath, token: 'wrong', timeoutMs: 800, retryIntervalMs: 50 }),
    ).rejects.toThrow(/rejected the handshake|invalid token|not reachable/)
  })

  it('reports a failing primitive as a rejected call', async () => {
    const socketPath = tempSocket()
    const hostsPath = createTempHosts()

    const helper = await startHelper({
      socketPath,
      token: 'failing',
      caddyBin: process.execPath,
      caddyConfigPath: hostsPath,
      deps: {
        ...helperDeps(hostsPath),
        writeHosts: () => {
          throw new Error('EACCES: permission denied, open /etc/hosts')
        },
      },
      log: () => {},
    })
    cleanups.push(() => helper.close())

    const client = await connectClient({ socketPath, token: 'failing', timeoutMs: 5000 })
    cleanups.push(() => client.close())

    await expect(
      client.call('hosts.add', { ip: '127.0.0.1', host: 'fail.abc.com' }),
    ).rejects.toThrow('EACCES: permission denied')
  })

  it('does not leave a socket file behind after the helper closes', async () => {
    const socketPath = tempSocket()
    const hostsPath = createTempHosts()
    const helper = await startHelper({
      socketPath,
      token: 'socket',
      caddyBin: process.execPath,
      caddyConfigPath: hostsPath,
      deps: helperDeps(hostsPath),
      log: () => {},
    })

    expect(existsSync(socketPath)).toBe(true)
    await helper.close()
  })
})
