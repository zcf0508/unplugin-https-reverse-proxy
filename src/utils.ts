/* eslint-disable @typescript-eslint/ban-ts-comment */
import process from 'node:process'
import path from 'node:path'
import { chmod, readdir, stat } from 'node:fs/promises'
import { execSync } from 'node:child_process'
import { createConsola } from 'consola'

// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const sudo = require('sudo-prompt')

export const consola = createConsola({
  level: 3,
}).withTag('reverse-proxy')

export async function chmodRecursive(_path: string, mode: number) {
  await chmod(_path, mode)
  if ((await stat(_path)).isDirectory()) {
    const children = await readdir(_path)
    for (const child of children)
      await chmodRecursive(path.join(_path, child), mode)
  }
}

export function once<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> {
  let called = false
  return (...args: any[]) => {
    if (called)
      return
    called = true
    return fn(...args)
  }
}

export function isAdmin() {
  if (process.platform === 'win32') {
    try {
      execSync('net session', { stdio: 'ignore' })
      return true
    }
    catch {
      return false
    }
  }
  else {
    return process.getuid && process.getuid() === 0
  }
}

export function runAsAdmin(command: string, name?: string, fn?: (error: any, stdout: any, stderr: any) => void) {
  return new Promise<boolean>((resolve, reject) => {
    consola.log('exec command: ', command)
    sudo.exec(command, {
      name: `unpluginHttpsReverseProxy ${name}`,
    }, (error: any, stdout: any, stderr: any) => {
      try {
        fn?.(error, stdout, stderr)
      }
      finally {
        if (error) {
          consola.error(error)
          // eslint-disable-next-line prefer-promise-reject-errors
          reject(false)
          // eslint-disable-next-line no-unsafe-finally
          return
        }
        consola.success(stdout)
        resolve(true)
      }
    })
  })
}
