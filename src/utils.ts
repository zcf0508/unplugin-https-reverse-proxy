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
