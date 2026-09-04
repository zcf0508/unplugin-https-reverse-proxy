import type { ConnectionOptions, PeerCertificate, TLSSocket } from 'node:tls'
import { checkServerIdentity, connect } from 'node:tls'

export type TlsHealthReason =
  | 'certificate_expired'
  | 'certificate_invalid'
  | 'certificate_missing'
  | 'connection_failed'
  | 'hostname_mismatch'

export type TlsHealthResult =
  | {
    healthy: true
    expiresAt: Date
  }
  | {
    healthy: false
    reason: TlsHealthReason
    expiresAt?: Date
  }

export type HostnameVerifier = (hostname: string, certificate: PeerCertificate) => Error | undefined

type TlsConnector = (options: ConnectionOptions) => TLSSocket
type TlsProbe = (hostname: string, options: ProbeLocalTlsOptions) => Promise<TlsHealthResult>
type Sleep = (ms: number) => Promise<void>

export function assessTlsCertificate(
  certificate: PeerCertificate,
  hostname: string,
  now = Date.now(),
  verifyHostname: HostnameVerifier = checkServerIdentity,
): TlsHealthResult {
  if (!certificate.valid_to)
    return { healthy: false, reason: 'certificate_missing' }

  const expiresAt = new Date(certificate.valid_to)
  if (Number.isNaN(expiresAt.getTime()))
    return { healthy: false, reason: 'certificate_invalid' }

  if (expiresAt.getTime() <= now)
    return { healthy: false, reason: 'certificate_expired', expiresAt }

  try {
    if (verifyHostname(hostname, certificate))
      return { healthy: false, reason: 'hostname_mismatch' }
  }
  catch {
    return { healthy: false, reason: 'certificate_invalid' }
  }

  return { healthy: true, expiresAt }
}

interface ProbeLocalTlsOptions {
  connect?: TlsConnector
  port?: number
  timeoutMs?: number
}

export function probeLocalTls(hostname: string, options: ProbeLocalTlsOptions = {}): Promise<TlsHealthResult> {
  const {
    connect: openTlsConnection = connect,
    port = 443,
    timeoutMs = 1000,
  } = options

  return new Promise((resolve) => {
    let settled = false
    let timeout: ReturnType<typeof setTimeout> | undefined
    const socket = openTlsConnection({
      host: '127.0.0.1',
      port,
      servername: hostname,
      rejectUnauthorized: false,
    })

    const finish = (result: TlsHealthResult): void => {
      if (settled)
        return
      settled = true
      if (timeout)
        clearTimeout(timeout)
      socket.destroy()
      resolve(result)
    }

    timeout = setTimeout(() => {
      finish({ healthy: false, reason: 'connection_failed' })
    }, timeoutMs)

    socket.once('secureConnect', () => {
      finish(assessTlsCertificate(socket.getPeerCertificate(), hostname))
    })
    socket.once('error', () => {
      finish({ healthy: false, reason: 'connection_failed' })
    })
  })
}

interface WaitForLocalTlsOptions extends ProbeLocalTlsOptions {
  probe?: TlsProbe
  retryIntervalMs?: number
  retryWindowMs?: number
  sleep?: Sleep
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function waitForLocalTls(hostname: string, options: WaitForLocalTlsOptions = {}): Promise<TlsHealthResult> {
  const {
    probe: checkTls = probeLocalTls,
    retryIntervalMs = 250,
    retryWindowMs = 30_000,
    sleep: wait = sleep,
    ...probeOptions
  } = options
  const deadline = Date.now() + retryWindowMs
  let result: TlsHealthResult = { healthy: false, reason: 'connection_failed' }

  do {
    result = await checkTls(hostname, probeOptions)
    if (result.healthy)
      return result

    const remaining = deadline - Date.now()
    if (remaining > 0)
      await wait(Math.min(retryIntervalMs, remaining))
  } while (Date.now() < deadline)

  return result
}

export function formatTlsHealthFailure(hostname: string, result: Exclude<TlsHealthResult, { healthy: true }>): string {
  const reason = result.reason === 'certificate_expired' && result.expiresAt
    ? `the certificate expired at ${result.expiresAt.toISOString()}`
    : result.reason.replaceAll('_', ' ')

  return `[unplugin-https-reverse-proxy] Caddy cannot serve valid HTTPS for ${hostname}: ${reason}. Restart Caddy to retry its automatic certificate renewal. Do not remove Caddy PKI data automatically because that replaces the trusted local root certificate.`
}
