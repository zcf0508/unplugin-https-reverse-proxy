import { createServer } from 'node:net'
import { exec } from 'node:child_process'
import ora from 'ora'
import { consola } from '../utils'

let spinner: ora.Ora

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
      resolve(true)
    }
  })
}

/**
 * npx free-port :port
 */
export async function kill(port: number) {
  return new Promise<void>((resolve, reject) => {
    exec(`npx @maxbo/free-port ${port} -s`, (err, stdout, stderr) => {
      if (err) {
        reject(err)
      }
      else {
        consola.log(stdout)
        resolve()
      }
    })
  })
}

function getNumber(number: number) {
  if (number <= 0)
    return '0%'
  else if (number < 100)
    return `${number.toFixed(2)}%`
  else
    return '100%'
}

export function logProgress(percent: number | string) {
  if (!spinner) {
    // empty a line before start
    consola.log('')
    spinner = ora({
      text: 'Start Download Caddy: 0%',
      indent: 2,
    })
    spinner.start()
  }
  else { spinner.text = `Download Caddy: ${getNumber(Number(percent) * 100)}` }
}

export function logProgressOver() {
  if (!spinner) {
    spinner = ora({
      text: 'Start Download Caddy: 100%',
      indent: 2,
    })
    spinner.start()
  }
  else {
    spinner.succeed()
    // empty a line after succeed
    consola.log('')
  }
}
