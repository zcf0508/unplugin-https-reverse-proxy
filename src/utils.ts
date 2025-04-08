import { execSync } from 'node:child_process'
import { chmod, readdir, stat } from 'node:fs/promises'
import { networkInterfaces } from 'node:os'
import path from 'node:path'
import process from 'node:process'
import { createConsola } from 'consola'
import c from 'picocolors'
import qrcode from 'qrcode-terminal'

export const consola = createConsola({
  level: 3,
}).withTag('reverse-proxy')

export async function chmodRecursive(_path: string, mode: number): Promise<void> {
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

export function isAdmin(): boolean {
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
    return !!(process.getuid && process.getuid() === 0)
  }
}

export function getIpv4List(): string[] {
  const interfaces = networkInterfaces()

  return Object.values(interfaces)
    .flatMap(nInterface => nInterface ?? [])
    .filter(
      detail =>
        detail.address
        && (detail.family === 'IPv4'
        // @ts-expect-error Node 18.0 - 18.3 returns number
          || detail.family === 4),
    )
    .filter(detail => detail.family === 'IPv4' && !detail.internal)
    .map(detail => detail.address)
}

export async function generateQrcode(input: string): Promise<string> {
  return new Promise((resolve) => {
    qrcode.generate(input, { small: true }, (code) => {
      resolve(code.split('\n').map(line => c.bgBlack(c.white(line))).join('\n'))
    })
  })
}
