import { createServer } from 'node:net'

/**
 * @returns whether the port is in use
 */
export function tryPort(port: number) {
  return new Promise<boolean>((resolve, reject) => {
    try {
      const server = createServer().listen(port)
      server.on('listening', () => {
        server.close()
        resolve(false)
      })
      server.on('error', (err) => {
        // @ts-expect-error err.code
        if (err.code === 'EADDRINUSE')
          resolve(true)
        server.close()
      })
    }
    catch (e) {
      // console.log(e)
      resolve(true)
    }
  })
}
