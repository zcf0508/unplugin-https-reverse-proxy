/**
 * Whether the user dismissed the password prompt in this process.
 *
 * Kept in its own module so the flag outlives a hot restart. Vite rebuilds the
 * dev server in place (`Object.assign(server, newServer)`) rather than starting
 * a new process, so module scope is the only place that distinguishes "saved
 * the config again" from "started the dev server again".
 */
let denied = false

/** Records that the user declined; every entry point checks this first. */
export function markPrivilegeDenied(): void {
  denied = true
}

export function isPrivilegeDenied(): boolean {
  return denied
}

/** Test hook: restores the initial state between cases. */
export function resetPrivilegeDenied(): void {
  denied = false
}
