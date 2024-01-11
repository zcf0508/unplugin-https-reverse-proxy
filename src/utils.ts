import process from 'node:process'
import path from 'node:path'
import { chmod, readdir, stat } from 'node:fs/promises'
import { execSync } from 'node:child_process'
import { createConsola } from 'consola'

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
