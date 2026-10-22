import { isIP } from 'node:net'

/**
 * `/etc/hosts` edits are modelled as pure string transformations so the helper
 * can be tested without touching the real file.
 *
 * `/etc/hosts` is user data: a line may map several names at once
 * (`127.0.0.1 a.test b.test`). Editing one name must never drop the others, and
 * entries this plugin did not write must survive every operation.
 */

export const HOSTS_MARKER = '# uhrp'
export const HOSTS_MARKER_PATTERN = /#\s*uhrp\b/

export interface HostsEdit {
  content: string
  changed: boolean
}

interface ParsedLine {
  ip: string
  hosts: string[]
}

function detectEol(content: string): string {
  return content.includes('\r\n') ? '\r\n' : '\n'
}

function toBodyLines(content: string): string[] {
  const lines = content.split(/\r?\n/)
  if (lines.length > 0 && lines[lines.length - 1] === '')
    lines.pop()
  return lines
}

function parseLine(line: string): ParsedLine | undefined {
  const withoutComment = line.replace(/#.*/, '').trim()
  if (!withoutComment)
    return undefined
  const [ip, ...hosts] = withoutComment.split(/\s+/)
  if (!ip || hosts.length === 0)
    return undefined
  return { ip, hosts }
}

function isOwned(line: string): boolean {
  return HOSTS_MARKER_PATTERN.test(line)
}

function mentionsHost(entry: ParsedLine, host: string): boolean {
  return entry.hosts.some(candidate => candidate.toLowerCase() === host.toLowerCase())
}

function sameIpFamily(left: string, right: string): boolean {
  const leftVersion = isIP(left)
  return leftVersion !== 0 && leftVersion === isIP(right)
}

function rebuild(lines: string[], original: string, eol: string): HostsEdit {
  const content = lines.length > 0 ? lines.join(eol) + eol : ''
  return { content, changed: content !== original }
}

/**
 * Drops `host` from its mapping and appends a marked entry for it.
 *
 * A user-written line that also maps other names is rewritten without `host`
 * instead of being deleted, so `127.0.0.1 a.test b.test` keeps `b.test`.
 */
export function addHost(content: string, ip: string, host: string): HostsEdit {
  const eol = detectEol(content)
  const lines: string[] = []

  for (const line of toBodyLines(content)) {
    const entry = parseLine(line)
    if (!entry || !mentionsHost(entry, host) || !sameIpFamily(entry.ip, ip)) {
      lines.push(line)
      continue
    }

    const remaining = entry.hosts.filter(candidate => candidate.toLowerCase() !== host.toLowerCase())
    if (remaining.length === 0)
      continue

    // Preserve the original comment when one exists so a user's annotation is
    // not silently dropped by our edit.
    const comment = line.match(/#.*/)?.[0] ?? ''
    const rebuilt = `${entry.ip} ${remaining.join(' ')}${comment ? ` ${comment}` : ''}`
    lines.push(rebuilt)
  }

  lines.push(`${ip} ${host} ${HOSTS_MARKER}`)
  return rebuild(lines, content, eol)
}

/**
 * Removes `host` from the mapping to `ip`. Only lines this plugin wrote are
 * removed outright; a user's line keeps its other names.
 */
export function removeHost(content: string, ip: string, host: string): HostsEdit {
  const eol = detectEol(content)
  const lines: string[] = []

  for (const line of toBodyLines(content)) {
    const entry = parseLine(line)
    if (!entry || entry.ip !== ip || !mentionsHost(entry, host)) {
      lines.push(line)
      continue
    }

    const remaining = entry.hosts.filter(candidate => candidate.toLowerCase() !== host.toLowerCase())
    if (remaining.length === 0)
      continue

    const comment = line.match(/#.*/)?.[0] ?? ''
    lines.push(`${entry.ip} ${remaining.join(' ')}${comment ? ` ${comment}` : ''}`)
  }

  return rebuild(lines, content, eol)
}

/** Drops every entry this plugin wrote, used to clean up after a crashed session. */
export function removeMarkedHosts(content: string): HostsEdit {
  const eol = detectEol(content)
  const lines = toBodyLines(content).filter(line => !isOwned(line))
  return rebuild(lines, content, eol)
}

/** Hosts entries this plugin owns, without the marker. */
export function listMarkedHosts(content: string): Array<{ ip: string, host: string }> {
  const result: Array<{ ip: string, host: string }> = []
  for (const line of toBodyLines(content)) {
    if (!isOwned(line))
      continue
    const entry = parseLine(line)
    if (!entry)
      continue
    for (const host of entry.hosts)
      result.push({ ip: entry.ip, host })
  }
  return result
}
