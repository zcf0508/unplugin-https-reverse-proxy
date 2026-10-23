import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const source = readFileSync(new URL('../../src/privileged/server.ts', import.meta.url), 'utf8')

/**
 * The flush command is picked per platform because each OS caches different
 * things. Reading the table keeps the assertion independent of `process.platform`
 * so the check also runs on the maintainer's macOS machine.
 */
describe('dns flush commands per platform', () => {
  it('uses mDNSResponder on macOS', () => {
    expect(source).toMatch(/darwin:\s*\[\{ file: 'killall', args: \['-HUP', 'mDNSResponder'\] \}\]/)
  })

  it('uses ipconfig on Windows', () => {
    expect(source).toMatch(/win32:\s*\[\{ file: 'ipconfig', args: \['\/flushdns'\] \}\]/)
  })

  it('uses resolvectl on Linux, with the legacy name as fallback', () => {
    expect(source).toContain(`{ file: 'resolvectl', args: ['flush-caches'] }`)
    expect(source).toContain(`{ file: 'systemd-resolve', args: ['--flush-caches'] }`)
  })

  it('tries the next candidate when the first command is unavailable', () => {
    expect(source).toContain('for (const candidate of candidates)')
    expect(source).toContain('lastError = error as Error')
  })
})
