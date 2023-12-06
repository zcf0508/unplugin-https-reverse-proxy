import process from 'node:process'
import { execSync } from 'node:child_process'
import { createConsola } from 'consola'

export const consola = createConsola({
  level: 3,
}).withTag('reverse-proxy')

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
