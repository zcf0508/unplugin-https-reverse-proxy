import { describe, expect, it } from 'vitest'
import { authenticateSudo } from '../../src/privileged/launch'

/**
 * Vite turns on raw mode for its `h + enter` shortcuts. In raw mode the tty
 * does no line editing, so the Enter that should submit the password reaches
 * sudo as a bare carriage return and the read never completes — the user sees
 * the password "not submit" until they press Enter again.
 *
 * The prompt therefore switches the terminal back to cooked mode and restores
 * whatever it found, so Vite's shortcuts keep working afterwards.
 *
 * The raw-mode switch itself is not covered here: the test runner's stdin is a
 * pipe, so the tty branch is skipped. What these pin down is that the guard
 * works and the prompt leaves the stream alone when there is no terminal —
 * a regression there would break non-interactive runs (CI, editors) entirely.
 */
describe('terminal mode during the password prompt', () => {
  it('works when stdin is not a terminal', async () => {
    // The test runner's stdin is a pipe, not a tty.
    expect(process.stdin.isTTY).toBeFalsy()

    const result = await authenticateSudo('false', { target: 'tty.abc.com', https: true, quiet: true })

    expect(result.ok).toBe(false)
    expect(result.denied).toBe(true)
  })

  it('leaves the stream usable after the prompt', async () => {
    const before = process.stdin.isPaused()

    await authenticateSudo('false', { target: 'tty.abc.com', https: true, quiet: true })

    // Switching modes must not resume or pause the stream as a side effect.
    expect(process.stdin.isPaused()).toBe(before)
  })
})
