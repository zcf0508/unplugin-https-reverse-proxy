import { platform } from 'node:os'
import process from 'node:process'
import { chmodSync, createWriteStream, existsSync, unlinkSync } from 'node:fs'
import { spawn } from 'node:child_process'
import { got } from 'got-cjs'
import { HttpProxyAgent } from 'http-proxy-agent'
import { HttpsProxyAgent } from 'https-proxy-agent'
import * as hostile from 'hostile'
import kill from 'kill-port'
import { caddyPath, supportList } from './constants'
import { tryPort } from './utils'

export async function download() {
  if (await testCaddy())
    return caddyPath

  return new Promise<string>((resolve, reject) => {
    // https://caddyserver.com/api/download?os=darwin&arch=amd64

    const file = createWriteStream(caddyPath)

    let _platform = platform().toString()
    // win32 -> windows
    _platform === 'win32' && (_platform = 'windows')
    let _arch = process.arch.toString()
    // x64 -> amd64
    _arch === 'x64' && (_arch = 'amd64')

    const support = supportList.find(item => item.platform === _platform && item.arch === _arch)

    if (!support)
      return reject(new Error('not support'))

    const dowmloadLink = `https://caddyserver.com/api/download?os=${support.platform}&arch=${support.arch}`

    existsSync(caddyPath) && unlinkSync(caddyPath)

    const httpProxy = process.env.HTTP_PROXY || process.env.http_proxy
    const httpsProxy = process.env.HTTPS_PROXY || process.env.https_proxy

    const httpAgent = httpProxy ? new HttpProxyAgent(httpProxy) : undefined
    const httpsAgent = httpsProxy ? new HttpsProxyAgent(httpsProxy) : undefined

    got.stream(dowmloadLink, {
      agent: {
        http: httpAgent,
        https: httpsAgent,
      },
    }).pipe(file).on('finish', () => {
      if (process.platform === 'win32')
        return resolve(caddyPath)
      // chmod +x
      chmodSync(caddyPath, 0o755)
      resolve(caddyPath)
    }).on('error', (err) => {
      // console.log(err)
      reject(err)
    })
  })
}

function testCaddy() {
  return new Promise((resolve, reject) => {
    if (!existsSync(caddyPath))
      return resolve(false)
    chmodSync(caddyPath, 0o755)
    const child = spawn('sudo', [caddyPath])
    child.on('error', (err) => {
      reject(err)
    })
    child.stdout.on('data', (_data) => {
      resolve(true)
    })
  })
}

interface RunOptions {
  restore: boolean
  base: string
}

export class CaddyInstant {
  private inited = false

  constructor() {
    testCaddy().then(() => {
      this.inited = true
    })
  }

  async init() {
    await download()
    this.inited = true
  }

  private async updateHost(ip: string, host: string) {
    ['localhost', '0.0.0.0'].includes(ip) && (ip = '127.0.0.1')
    return new Promise<boolean>((resolve, reject) => {
      hostile.set(ip, host, (err) => {
        if (err) {
          return reject(err)
        }
        else {
          if (process.platform === 'win32') {
            spawn('ipconfig', ['/flushdns']).on('error', (err) => {
              return reject(err)
            }).on('close', () => {
              resolve(true)
            })
          }
          else {
            spawn('sudo', ['killall', '-HUP', 'mDNSResponder']).on('error', (err) => {
              return reject(err)
            }).on('close', () => {
              resolve(true)
            })
          }
        }
      })
    })
  }

  private async restoreHost(ip: string, host: string) {
    ['localhost', '0.0.0.0'].includes(ip) && (ip = '127.0.0.1')
    return new Promise<boolean>((resolve, reject) => {
      hostile.remove(ip, host, (err) => {
        if (err) {
          return reject(err)
        }
        else {
          if (process.platform === 'win32') {
            spawn('ipconfig', ['/flushdns']).on('error', (err) => {
              return reject(err)
            }).on('close', () => {
              resolve(true)
            })
          }
          else {
            spawn('sudo', ['killall', '-HUP', 'mDNSResponder']).on('error', (err) => {
              return reject(err)
            }).on('close', () => {
              resolve(true)
            })
          }
        }
      })
    })
  }

  /**
   * @param source like `127.0.0.1:8080`
   * @param target like `test.abc.com`. And if you provide a port ,it will be ignore.
   * @returns
   */
  async run(source: string, target: string, options?: Partial<RunOptions>) {
    source = source.replace('0.0.0.0', '127.0.0.1').replace('localhost', '127.0.0.1')
    const {
      restore = false,
      base = '/',
    } = options || {}

    if (!this.inited)
      await this.init()

    if (!await this.updateHost(source.split(':')[0], target.split(':')[0]))
      throw new Error('update host failed')

    if (await tryPort(443))
      await kill(443, 'tcp')

    return new Promise<() => Promise<void>>((resolve, reject) => {
      // caddy reverse-proxy --from target --to source --internal-certs
      const child = spawn('sudo', [caddyPath, 'reverse-proxy', '--from', `${target.split(':')[0]}`, '--to', `${source}`, '--internal-certs'])

      child.on('error', (err) => {
        return reject(err)
      })

      child.stderr.on('data', (data) => {
        if ((data.toString() as string).includes('Error')) {
          child.kill()
          return reject(data.toString())
        }
      })

      child.stdout.on('data', (_data) => {
        // console.log(_data.toString())
        resolve(async () => {
          if (!restore)
            return

          if (await this.restoreHost(source.split(':')[0], target.split(':')[0])) {
            // eslint-disable-next-line no-console
            console.log('restore host success\n')
          }
          else {
            console.error('restore host failed\n')
          }
          child.kill()
        })
      })
    })
  }
}
