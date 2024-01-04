import process from 'node:process'
import { execSync } from 'node:child_process'
import { createConsola } from 'consola'

export const consola = createConsola({
  level: 3,
}).withTag('reverse-proxy')

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
