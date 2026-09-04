import type { PeerCertificate } from 'node:tls'
import type { TlsHealthResult } from '../../src/caddy/tls-health'
import { describe, expect, it } from 'vitest'
import { assessTlsCertificate, waitForLocalTls } from '../../src/caddy/tls-health'

function certificate(validTo: string): PeerCertificate {
  return {
    valid_to: validTo,
  } as PeerCertificate
}

describe('assessTlsCertificate', () => {
  const now = Date.UTC(2026, 8, 4, 14, 0, 0)

  it('accepts a certificate that is valid for the requested hostname', () => {
    const result = assessTlsCertificate(certificate('Sep 5 14:00:00 2026 GMT'), 'local.doc.suanshubang.com', now, () => undefined)

    expect(result).toMatchInlineSnapshot(`
      {
        "expiresAt": 2026-09-05T14:00:00.000Z,
        "healthy": true,
      }
    `)
  })

  it('reports an expired certificate instead of treating the proxy as ready', () => {
    const result = assessTlsCertificate(certificate('Aug 14 10:49:33 2026 GMT'), 'local.doc.suanshubang.com', now, () => undefined)

    expect(result).toMatchInlineSnapshot(`
      {
        "expiresAt": 2026-08-14T10:49:33.000Z,
        "healthy": false,
        "reason": "certificate_expired",
      }
    `)
  })

  it('reports a hostname mismatch', () => {
    const result = assessTlsCertificate(certificate('Sep 5 14:00:00 2026 GMT'), 'local.doc.suanshubang.com', now, () => new Error('hostname mismatch'))

    expect(result).toMatchInlineSnapshot(`
      {
        "healthy": false,
        "reason": "hostname_mismatch",
      }
    `)
  })

  it('reports certificates with an invalid validity date', () => {
    const result = assessTlsCertificate(certificate('not-a-date'), 'local.doc.suanshubang.com', now, () => undefined)

    expect(result).toMatchInlineSnapshot(`
      {
        "healthy": false,
        "reason": "certificate_invalid",
      }
    `)
  })
})

describe('waitForLocalTls', () => {
  it('waits for Caddy to replace an expired certificate', async () => {
    const results: TlsHealthResult[] = [
      { healthy: false, reason: 'certificate_expired', expiresAt: new Date('2026-08-14T10:49:33.000Z') },
      { healthy: true, expiresAt: new Date('2026-09-05T14:00:00.000Z') },
    ]
    let attempts = 0

    const result = await waitForLocalTls('local.doc.suanshubang.com', {
      retryIntervalMs: 1,
      retryWindowMs: 30_000,
      probe: async () => results[attempts++]!,
      sleep: async () => {},
    })

    expect({ attempts, result }).toMatchInlineSnapshot(`
      {
        "attempts": 2,
        "result": {
          "expiresAt": 2026-09-05T14:00:00.000Z,
          "healthy": true,
        },
      }
    `)
  })
})
