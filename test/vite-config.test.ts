import { beforeEach, describe, expect, it } from 'vitest'
import { isPrivilegeDenied, markPrivilegeDenied, resetPrivilegeDenied } from '../src/privilege-state'

beforeEach(() => {
  resetPrivilegeDenied()
})

/**
 * A hot restart rebuilds the dev server inside the same process (Vite calls
 * `Object.assign(server, newServer)`), so the decline has to live at module
 * scope. These cover the state that decision depends on.
 */
describe('privilege denial state', () => {
  it('starts as not denied', () => {
    expect(isPrivilegeDenied()).toBe(false)
  })

  it('stays denied across repeated reads', () => {
    markPrivilegeDenied()

    // A rebuild re-runs configureServer but must keep seeing the same answer.
    expect(isPrivilegeDenied()).toBe(true)
    expect(isPrivilegeDenied()).toBe(true)
  })

  it('is not cleared by anything the plugin does per instance', () => {
    markPrivilegeDenied()

    // Nothing in the normal flow resets it; only a new process (or the test
    // hook) can.
    expect(isPrivilegeDenied()).toBe(true)
  })
})
