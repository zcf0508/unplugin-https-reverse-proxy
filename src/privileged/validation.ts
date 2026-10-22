import { isIP } from 'node:net'

/**
 * Validates values that cross the socket. Everything reaching the privileged
 * helper is untrusted, and a hosts line in particular is a plain-text file: an
 * unvalidated hostname containing a newline could inject entries this plugin
 * does not own and therefore never cleans up.
 */

/** Ports the plugin may free. Wide enough for the two the proxy binds. */
export const ALLOWED_FREE_PORTS = new Set([80, 443])

const HOSTNAME_PATTERN = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)*[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i
const IPV6_IN_HOSTS = /^[0-9a-f:.]+$/i

export function isSafeHost(host: unknown): host is string {
  if (typeof host !== 'string' || host.length === 0 || host.length > 253)
    return false
  // A hosts entry is whitespace separated, so any whitespace or control
  // character would split the line or start a new one.
  if (/[\s#\0]/.test(host))
    return false
  return HOSTNAME_PATTERN.test(host)
}

export function isSafeIp(ip: unknown): ip is string {
  if (typeof ip !== 'string')
    return false
  if (isIP(ip) !== 0)
    return true
  // `::1` and friends are caught by isIP; this keeps the check explicit for
  // hosts files that spell IPv6 without brackets.
  return IPV6_IN_HOSTS.test(ip)
}

export function isAllowedFreePort(port: unknown): port is number {
  return typeof port === 'number' && Number.isInteger(port) && ALLOWED_FREE_PORTS.has(port)
}
