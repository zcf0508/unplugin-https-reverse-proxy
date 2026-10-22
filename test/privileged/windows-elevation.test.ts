import { describe, expect, it } from 'vitest'
import { buildElevationCommand, quotePowerShell } from '../../src/privileged/windows-elevation'

describe('windows elevation command', () => {
  it('starts the executable with the runas verb', () => {
    const command = buildElevationCommand({
      file: 'C:\\Program Files\\nodejs\\node.exe',
      args: ['C:\\app\\privileged-helper.js', '--socket', '\\\\.\\pipe\\uhrp-1', '--token', 'abc'],
    })

    expect(command).toContain('Start-Process')
    expect(command).toContain('-Verb RunAs')
    expect(command).toContain(`'C:\\Program Files\\nodejs\\node.exe'`)
    expect(command).toContain(`'\\\\.\\pipe\\uhrp-1'`)
    expect(command).toContain(`'abc'`)
  })

  it('omits the argument list when there is nothing to pass', () => {
    const command = buildElevationCommand({ file: 'helper.exe', args: [] })

    expect(command).not.toContain('-ArgumentList')
    expect(command).toContain('-Verb RunAs')
  })

  it('passes the working directory when provided', () => {
    const command = buildElevationCommand({ file: 'helper.exe', args: [], cwd: 'C:\\work dir' })

    expect(command).toContain(`-WorkingDirectory 'C:\\work dir'`)
  })

  it('doubles single quotes so PowerShell treats them literally', () => {
    expect(quotePowerShell(`C:\\it's here`)).toBe(`'C:\\it''s here'`)
  })

  it('keeps a path with an apostrophe intact through escaping', () => {
    const command = buildElevationCommand({ file: `C:\\o'brien\\node.exe`, args: [] })

    expect(command).toContain(`'C:\\o''brien\\node.exe'`)
    // An unescaped quote would terminate the literal and break the command.
    expect(command).not.toContain(`'C:\\o'brien\\node.exe'`)
  })
})
