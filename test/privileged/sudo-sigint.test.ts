import { describe, expect, it } from 'vitest'
import { authenticateSudo } from '../../src/privileged/launch'

/**
 * `sudo -v` inherits the terminal, so Ctrl+C reaches the dev server too. The
 * prompt has to absorb that signal: without a handler the default action
 * terminates the process, which reads as "the proxy killed my dev server" when
 * the user only meant to skip the prompt.
 *
 * The cancellation branch itself is not covered here. Sending a real SIGINT to
 * the runner would take the suite down, and aiming one at a child process does
 * not reproduce the group-wide delivery a terminal Ctrl+C performs. What is
 * pinned down is the handler's lifetime, which is the part that regresses
 * silently: a leaked handler would swallow the user's later Ctrl+C.
 */
describe('sudo prompt and SIGINT', () => {
  it('installs a SIGINT handler only for the duration of the prompt', async () => {
    const before = process.listenerCount('SIGINT')

    // A command that fails immediately stands in for a cancelled prompt.
    const result = await authenticateSudo('false', { target: 'sigint.abc.com', https: true, quiet: true })

    expect(result.ok).toBe(false)
    expect(result.denied).toBe(true)

    // The handler must not outlive the prompt, or it would swallow the user's
    // later Ctrl+C when they actually want to stop the dev server.
    expect(process.listenerCount('SIGINT')).toBe(before)
  })

  it('reports a plain failure differently from a cancellation', async () => {
    const result = await authenticateSudo('false', { target: 'sigint.abc.com', https: true, quiet: true })

    // No signal was sent, so this is a failed password, not a cancellation.
    expect(result.message).toContain('administrator permission is required')
  })

  it('returns ok without prompting when sudo needs no password', async () => {
    // `true` exits 0, which is what a cached credential looks like.
    const result = await authenticateSudo('true', { target: 'sigint.abc.com', https: true, quiet: true })

    expect(result.ok).toBe(true)
    expect(result.denied).toBeUndefined()
  })

  it('does not leave the handler behind when the prompt throws', async () => {
    const before = process.listenerCount('SIGINT')

    // A missing binary makes spawn emit `error` rather than `exit`.
    await authenticateSudo('/nonexistent-sudo-binary', { target: 'sigint.abc.com', https: true, quiet: true })

    expect(process.listenerCount('SIGINT')).toBe(before)
  })
})
