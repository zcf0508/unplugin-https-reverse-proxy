import { describe, expect, it } from 'vitest'
import {
  addHost,
  HOSTS_MARKER,
  listMarkedHosts,
  removeHost,
  removeMarkedHosts,
} from '../../src/privileged/hosts-file'

const BASE = [
  '##',
  '# Host Database',
  '##',
  '127.0.0.1\tlocalhost',
  '255.255.255.255\tbroadcasthost',
  '::1\tlocalhost',
  '',
].join('\n')

describe('hosts file edits', () => {
  it('appends a marked entry and reports a change', () => {
    const result = addHost(BASE, '127.0.0.1', 'test.abc.com')

    expect(result.changed).toBe(true)
    expect(result.content).toContain(`127.0.0.1 test.abc.com ${HOSTS_MARKER}`)
    expect(result.content).toContain('# Host Database')
    expect(result.content).toContain('255.255.255.255\tbroadcasthost')
  })

  it('replaces a stale entry for the same host instead of duplicating it', () => {
    const once = addHost(BASE, '127.0.0.1', 'test.abc.com')
    const twice = addHost(once.content, '127.0.0.1', 'test.abc.com')

    const occurrences = twice.content.split('\n').filter(line => line.includes('test.abc.com'))
    expect(occurrences).toEqual([`127.0.0.1 test.abc.com ${HOSTS_MARKER}`])
    expect(twice.changed).toBe(false)
  })

  it('keeps the IPv6 localhost mapping when adding an IPv4 entry', () => {
    const result = addHost(BASE, '127.0.0.1', 'localhost')

    expect(result.content).toContain('::1\tlocalhost')
    expect(result.content).toContain(`127.0.0.1 localhost ${HOSTS_MARKER}`)
  })

  it('removes both the marked entry and legacy unmarked mappings', () => {
    const withLegacy = `${BASE}127.0.0.1 legacy.abc.com\n`
    const added = addHost(withLegacy, '127.0.0.1', 'legacy.abc.com')

    const result = removeHost(added.content, '127.0.0.1', 'legacy.abc.com')

    expect(result.content).not.toContain('legacy.abc.com')
    expect(result.content).toContain('127.0.0.1\tlocalhost')
  })

  it('sweeps only the entries this plugin wrote', () => {
    const content = [
      BASE,
      `127.0.0.1 stale-1.abc.com ${HOSTS_MARKER}`,
      `127.0.0.1 stale-2.abc.com ${HOSTS_MARKER}`,
      '127.0.0.1 user-own-entry.local',
    ].join('\n')

    const result = removeMarkedHosts(content)

    expect(result.content).not.toContain('stale-1.abc.com')
    expect(result.content).not.toContain('stale-2.abc.com')
    expect(result.content).toContain('127.0.0.1 user-own-entry.local')
    expect(result.changed).toBe(true)
  })

  it('preserves CRLF line endings', () => {
    const crlf = '127.0.0.1\tlocalhost\r\n'
    const result = addHost(crlf, '127.0.0.1', 'test.abc.com')

    expect(result.content).toBe(`127.0.0.1\tlocalhost\r\n127.0.0.1 test.abc.com ${HOSTS_MARKER}\r\n`)
  })

  it('reports entries it owns', () => {
    const content = `${BASE}127.0.0.1 a.abc.com ${HOSTS_MARKER}\n127.0.0.1 b.abc.com ${HOSTS_MARKER}\n`

    expect(listMarkedHosts(content)).toEqual([
      { ip: '127.0.0.1', host: 'a.abc.com' },
      { ip: '127.0.0.1', host: 'b.abc.com' },
    ])
  })
})
