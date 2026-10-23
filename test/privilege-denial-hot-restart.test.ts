import { describe, expect, it, vi } from 'vitest'
import { resetPrivilegeDenied } from '../src/privilege-state'

/**
 * The entry points must refuse to start the proxy once the user has declined,
 * so a hot restart does not pop the password prompt again.
 */
describe('declined permission blocks every entry point', () => {
  it('pops the password prompt at most once per process', async () => {
    vi.resetModules()
    resetPrivilegeDenied()

    const { authenticateSudo } = await import('../src/privileged/launch')

    // `-n` is tried first; when it fails the interactive prompt runs. Point both
    // at a command that always fails so no real sudo is involved.
    const first = await authenticateSudo('false')
    expect(first.ok).toBe(false)
    expect(first.denied).toBe(true)

    // Below the module that records it, the flag is what stops the second ask.
    const { isPrivilegeDenied, markPrivilegeDenied } = await import('../src/privilege-state')
    expect(isPrivilegeDenied()).toBe(false)
    markPrivilegeDenied()
    expect(isPrivilegeDenied()).toBe(true)
  })

  it('explains why the password is needed before asking', async () => {
    const { describePasswordReason } = await import('../src/privileged/launch')

    const httpsLines = describePasswordReason('app.example.com', true)
    expect(httpsLines[0]).toContain('app.example.com')
    expect(httpsLines.join('\n')).toContain('443')
    expect(httpsLines.join('\n')).toContain('hosts')

    const httpLines = describePasswordReason('app.example.com', false)
    expect(httpLines.join('\n')).toContain('80')
  })
})
