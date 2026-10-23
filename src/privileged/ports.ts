/**
 * Helpers for freeing a listening TCP port without shelling out to `npx`.
 * `parseListeningPids` keeps the decision testable: it only turns command
 * output into pids, never spawns anything.
 */

/** Parses `lsof -ti:<port> -sTCP:LISTEN` output (one pid per line). */
export function parseListeningPids(output: string): number[] {
  const pids = new Set<number>()
  for (const line of output.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed)
      continue
    if (!/^\d+$/.test(trimmed))
      continue
    const pid = Number(trimmed)
    if (Number.isSafeInteger(pid) && pid > 0)
      pids.add(pid)
  }
  return [...pids]
}

/** Parses `netstat -ano` output for the owning pids of a listening port on Windows. */
export function parseWindowsListeningPids(output: string, port: number): number[] {
  const pids = new Set<number>()
  const suffix = `:${port}`

  for (const line of output.split(/\r?\n/)) {
    const columns = line.trim().split(/\s+/)
    if (columns.length < 5)
      continue
    const protocol = columns[0].toUpperCase()
    if (protocol !== 'TCP')
      continue
    if (!columns[1].endsWith(suffix))
      continue
    if (columns[3].toUpperCase() !== 'LISTENING')
      continue
    const pid = Number(columns[4])
    if (Number.isSafeInteger(pid) && pid > 0)
      pids.add(pid)
  }

  return [...pids]
}
