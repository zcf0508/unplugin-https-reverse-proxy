import type { ChildProcess } from 'node:child_process'
import { spawn } from 'node:child_process'
import process from 'node:process'

/**
 * Windows has no `sudo`: elevation goes through UAC, and the elevated process
 * is a new process that cannot inherit the parent's stdio. The helper talks
 * over a named pipe, so it only needs to be started detached.
 *
 * `Start-Process -Verb RunAs` is the documented way to trigger the UAC prompt
 * without a helper binary or a dependency on `sudo-prompt`.
 */
export interface WindowsElevationOptions {
  /** Executable to run elevated; normally the node runtime. */
  file: string
  /** Arguments for that executable. */
  args: string[]
  /** Directory to start in; defaults to the parent's. */
  cwd?: string
}

/** Quotes an argument for PowerShell's single-quoted string syntax. */
export function quotePowerShell(value: string): string {
  return `'${value.replace(/'/g, '\'\'')}'`
}

/**
 * Builds the PowerShell command that starts `file` elevated. Exported so the
 * escaping can be unit-tested without touching a real UAC prompt.
 */
export function buildElevationCommand(options: WindowsElevationOptions): string {
  const argumentList = options.args.map(quotePowerShell).join(',')
  const parts = [
    'Start-Process',
    '-FilePath',
    quotePowerShell(options.file),
  ]

  if (argumentList)
    parts.push('-ArgumentList', argumentList)

  if (options.cwd)
    parts.push('-WorkingDirectory', quotePowerShell(options.cwd))

  parts.push('-Verb', 'RunAs')
  parts.push('-WindowStyle', 'Hidden')

  return parts.join(' ')
}

/**
 * Starts the helper elevated on Windows. Resolves once PowerShell has accepted
 * the request; the helper's own readiness is observed through the named pipe.
 */
export function spawnElevatedOnWindows(options: WindowsElevationOptions): Promise<ChildProcess> {
  return new Promise((resolve, reject) => {
    const script = buildElevationCommand(options)
    const child = spawn(
      'powershell.exe',
      ['-NoProfile', '-NonInteractive', '-Command', script],
      { stdio: 'ignore', windowsHide: true },
    )

    // PowerShell exits once UAC is answered; a non-zero code means the user
    // dismissed the prompt or elevation was denied.
    child.once('error', reject)
    child.once('exit', (code) => {
      if (code === 0)
        return resolve(child)
      reject(new Error(
        `administrator permission was not granted (PowerShell exited with ${code}). `
        + 'Accept the UAC prompt to let the plugin edit the hosts file and bind ports 80/443.',
      ))
    })
  })
}

export function isWindowsElevationAvailable(): boolean {
  return process.platform === 'win32'
}
