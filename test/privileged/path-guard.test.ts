import { chmodSync, mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { checkPrivilegedPath } from '../../src/privileged/path-guard'

/**
 * The helper executes the Caddy binary and loads the Caddyfile as root, while
 * both paths come from a process running as the developer. A path another user
 * can rewrite would turn that into a local privilege gain.
 */
describe('checkPrivilegedPath', () => {
  let dir: string

  beforeEach(() => {
    dir = mkdtempSync(join(tmpdir(), 'uhrp-guard-'))
  })

  afterEach(() => {
    rmSync(dir, { recursive: true, force: true })
  })

  it('accepts a file only the invoking user can write', () => {
    const file = join(dir, 'caddy')
    writeFileSync(file, '#!/bin/sh\n')
    chmodSync(file, 0o700)

    expect(checkPrivilegedPath(file, { label: 'Caddy binary', ownerUid: process.getuid?.() })).toBeUndefined()
  })

  it('rejects a group-writable file', () => {
    const file = join(dir, 'caddy')
    writeFileSync(file, '#!/bin/sh\n')
    chmodSync(file, 0o770)

    const rejection = checkPrivilegedPath(file, { label: 'Caddy binary', ownerUid: process.getuid?.() })

    expect(rejection?.reason).toContain('group- or world-writable')
  })

  it('rejects a world-writable file', () => {
    const file = join(dir, 'caddy')
    writeFileSync(file, '#!/bin/sh\n')
    chmodSync(file, 0o757)

    expect(checkPrivilegedPath(file, { label: 'Caddy binary', ownerUid: process.getuid?.() })).toBeDefined()
  })

  it('rejects a symbolic link', () => {
    const real = join(dir, 'real-caddy')
    const link = join(dir, 'caddy')
    writeFileSync(real, '#!/bin/sh\n')
    chmodSync(real, 0o700)
    symlinkSync(real, link)

    const rejection = checkPrivilegedPath(link, { label: 'Caddy binary', ownerUid: process.getuid?.() })

    // A link can be repointed after the check, so the checked file might not be
    // the one that ends up running.
    expect(rejection?.reason).toContain('symbolic link')
  })

  it('rejects a missing path', () => {
    const rejection = checkPrivilegedPath(join(dir, 'absent'), { label: 'Caddyfile', ownerUid: process.getuid?.() })

    expect(rejection?.reason).toContain('not readable')
  })

  it('rejects a file owned by someone else', () => {
    const file = join(dir, 'caddy')
    writeFileSync(file, '#!/bin/sh\n')
    chmodSync(file, 0o700)

    // A uid that is neither root nor the caller's.
    const otherUid = (process.getuid?.() ?? 0) + 1
    const rejection = checkPrivilegedPath(file, { label: 'Caddy binary', ownerUid: otherUid })

    expect(rejection?.reason).toContain('owned by another user')
  })

  it('accepts a directory, which is how the Caddyfile path starts out', () => {
    const nested = join(dir, 'runtime')
    mkdirSync(nested, { mode: 0o700 })

    expect(checkPrivilegedPath(nested, { label: 'Caddyfile', ownerUid: process.getuid?.() })).toBeUndefined()
  })
})
