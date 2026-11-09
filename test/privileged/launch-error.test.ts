import { chmodSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { startPrivilegedHelper } from '../../src/privileged/launch'

describe('privileged helper startup failure', () => {
  it('reports the helper diagnostic when the process exits before connecting', async () => {
    await expect(startPrivilegedHelper({
      socketPath: '/tmp/uhrp-unused.sock',
      token: 'unused',
      helperEntry: process.execPath,
      helperArgs: ['-e', 'process.stderr.write("[uhrp-helper] fatal: refusing to start: Caddyfile is a symbolic link\\n"); process.exit(1)', '--'],
      direct: true,
      caddyBin: '/usr/bin/false',
      caddyConfigPath: '/dev/null',
    })).rejects.toThrow('refusing to start: Caddyfile is a symbolic link')
  })

  it('names the denied path and asks for a manual permission fix', async () => {
    await expect(startPrivilegedHelper({
      socketPath: '/tmp/uhrp-unused.sock',
      token: 'unused',
      helperEntry: process.execPath,
      helperArgs: ['-e', 'process.stderr.write("EACCES: permission denied, open \'/tmp/project/Caddyfile\'\\n"); process.exit(1)', '--'],
      direct: true,
      caddyBin: '/usr/bin/false',
      caddyConfigPath: '/dev/null',
    })).rejects.toThrow(/\/tmp\/project\/Caddyfile.*Fix ownership or access manually/)
  })

  it('gives a next step when sudo refuses to start the helper', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'uhrp-sudo-error-'))
    const fakeSudo = join(dir, 'sudo')
    try {
      writeFileSync(fakeSudo, '#!/bin/sh\nprintf "sudo: a password is required\\n" >&2\nexit 1\n')
      chmodSync(fakeSudo, 0o700)
      await expect(startPrivilegedHelper({
        socketPath: join(dir, 'helper.sock'),
        token: 'unused',
        helperEntry: process.execPath,
        sudoCommand: fakeSudo,
        skipAuth: true,
        caddyBin: '/usr/bin/false',
        caddyConfigPath: '/dev/null',
      })).rejects.toThrow(/sudo: a password is required.*Retry from a terminal/)
    }
    finally {
      rmSync(dir, { recursive: true, force: true })
    }
  })

  it('reports a missing executable without an unhandled process error', async () => {
    await expect(startPrivilegedHelper({
      socketPath: '/tmp/uhrp-unused.sock',
      token: 'unused',
      helperEntry: '/not-a-real-uhrp-executable',
      direct: true,
      caddyBin: '/usr/bin/false',
      caddyConfigPath: '/dev/null',
    })).rejects.toThrow('ENOENT')
  })
})
