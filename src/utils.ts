import { networkInterfaces } from 'node:os'
import { createConsola } from 'consola'
import c from 'picocolors'
import qrcode from 'qrcode-terminal'

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
