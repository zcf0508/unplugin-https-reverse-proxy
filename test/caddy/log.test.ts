import { describe, expect, it } from 'vitest'
import { isCaddyReloadCancellation } from '../../src/caddy/log'

describe('isCaddyReloadCancellation', () => {
  it('ignores TLS issuance canceled by a Caddy config reload', () => {
    expect(isCaddyReloadCancellation('{"level":"error","logger":"tls","msg":"job failed","error":"local.doc.suanshubang.com: obtaining certificate: unable to acquire lock \'issue_cert_local.doc.suanshubang.com\': context canceled"}')).toBe(true)
  })

  it('keeps other TLS errors actionable', () => {
    expect(isCaddyReloadCancellation('{"level":"error","logger":"tls","msg":"job failed","error":"dial tcp: connection refused"}')).toBe(false)
  })

  it('does not ignore non-JSON log lines', () => {
    expect(isCaddyReloadCancellation('Error: parsing caddyfile tokens')).toBe(false)
  })
})
