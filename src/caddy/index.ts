import { platform } from 'node:os'
import process from 'node:process'
import { chmodSync, createWriteStream, existsSync, mkdirSync, unlinkSync, writeFileSync } from 'node:fs'
import { spawn } from 'node:child_process'
import { readFile, unlink, writeFile } from 'node:fs/promises'
import { got } from 'got-cjs'
import { HttpProxyAgent } from 'http-proxy-agent'
import { HttpsProxyAgent } from 'https-proxy-agent'
import * as lockfile from 'proper-lockfile'
import { chmodRecursive, consola, once } from '../utils'
import { addHost, removeHost } from '../host'
import { TEMP_DIR, caddyFilePath, caddyLockFilePath, caddyPath, supportList } from './constants'
import { kill, logProgress, logProgressOver, tryPort } from './utils'

export async function download() {
  if (await testCaddy())
    return caddyPath

  return new Promise<string>((resolve, reject) => {
    // https://caddyserver.com/api/download?os=darwin&arch=amd64

    if (!existsSync(TEMP_DIR)) {
      mkdirSync(TEMP_DIR, { recursive: true })
      chmodSync(TEMP_DIR, 0o777)
    }

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

    const chmodCaddyOnce = once(() => {
      // chmod +x
      chmodSync(caddyPath, 0o777)
    })

    got.stream(dowmloadLink, {
      agent: {
        http: httpAgent,
        https: httpsAgent,
      },
    }).on('downloadProgress', (progress) => {
      logProgress(progress.percent)
      chmodCaddyOnce()
    }).pipe(file).on('finish', () => {
      logProgressOver()
      if (process.platform === 'win32')
        return resolve(caddyPath)
      // chmod +x
      chmodSync(caddyPath, 0o777)
      resolve(caddyPath)
    }).on('error', (err) => {
      // consola.error(err)
      reject(err)
    })
  })
}

function testCaddy() {
  return new Promise((resolve, reject) => {
    if (!existsSync(caddyPath))
      return resolve(false)
    chmodSync(caddyPath, 0o777)
    const child = process.platform === 'win32' ? spawn(caddyPath, []) : spawn('sudo', ['-E', caddyPath])
    child.on('close', () => {
      return resolve(false)
    })
    child.on('error', (err) => {
      return reject(err)
    })
    child.stdout.on('data', (_data) => {
      return resolve(true)
    })
  })
}

interface RunOptions {
  restore: boolean
  base: string
  showCaddyLog: boolean
  https: boolean
}

export class CaddyInstant {
  private inited = false
  private stoped = false

  /** has locked */
  private locked = false
  private caddyfile: string | undefined

  private _caddyChild: ReturnType<typeof spawn> | undefined

  private _source: string | undefined
  private _target: string | undefined

  constructor() {
    testCaddy().then(async () => {
      await this.getCaddyfile()

      this.inited = true
    })

    this.locked = this.checkLock()
  }

  checkLock() {
    if (!existsSync(caddyLockFilePath))
      writeFileSync(caddyLockFilePath, '')
    return lockfile.checkSync(caddyLockFilePath)
  }

  async getCaddyfile() {
    if (!existsSync(caddyFilePath))
      await this.initCaddyfile()

    this.caddyfile = await readFile(caddyFilePath, 'utf-8')
    return this.caddyfile
  }

  async initCaddyfile() {
    const contet = `
{
  debug
  auto_https disable_redirects
}
    
`
    await writeFile(caddyFilePath, contet)
    this.caddyfile = contet
  }

  async writeCaddyfile() {
    return await writeFile(caddyFilePath, this.caddyfile || '')
  }

  async deleteCaddyfile() {
    return await unlink(caddyFilePath)
  }

  async init() {
    await download()
    this.inited = true
  }

  /**
   * @param source like `127.0.0.1:8080`
   * @param target like `test.abc.com`. And if you provide a port ,it will be ignore.
   * @returns
   */
  async run(source: string, target: string, options?: Partial<RunOptions>) {
    source = source.replace('0.0.0.0', '127.0.0.1')
    const {
      restore = true,
      base = '/',
      showCaddyLog = false,
      https = false,
    } = options || {}

    this._source = source
    this._target = target

    if (!this.inited)
      await this.init()

    if (!await addHost(source.split(':')[0], target.split(':')[0]))
      throw new Error('update host failed')
    consola.success('update host success\n')

    await this.getCaddyfile()

    if (!(this.caddyfile || '').includes(`${target.split(':')[0]}${https ? '' : ':80'}`)) {
      this.caddyfile = `${this.caddyfile}
${target.split(':')[0]}${https ? '' : ':80'} {
  ${https ? 'tls internal' : ''}
  reverse_proxy http://${source}
}

`

      await this.writeCaddyfile()
    }
    if (!existsSync(caddyLockFilePath))
      writeFileSync(caddyLockFilePath, '')

    if (!this.locked) {
      if (await tryPort(443))
        await kill(443)
      if ((process.platform === 'win32' || !https) && await tryPort(80))
        await kill(80)
    }

    return new Promise<void>((resolve, reject) => {
      const setupCleanup = () => {
        process.on('SIGINT', async () => {
          if (this.stoped)
            return

          process.stdin.resume()

          try {
            await this.baseCleanup(restore)
          }
          finally {
            this.stoped = true
            process.nextTick(() => {
              process.exit()
            })
          }
        })

        const originalExit = process.exit.bind(process)

        // @ts-expect-error override
        process.exit = async (code?: number) => {
          const port = Number(source.split(':')[1])
          if (!Number.isNaN(port) && await tryPort(port))
            await kill(port)

          // fix `Error: EPERM: operation not permitted`
          const pwd = process.cwd()
          const viteCacheDir = `${pwd}/node_modules/.vite`
          if (existsSync(viteCacheDir))
            await chmodRecursive(viteCacheDir, 0o777).catch(() => { })
          const nuxtCacheDir = `${pwd}/.nuxt`
          if (existsSync(nuxtCacheDir))
            await chmodRecursive(nuxtCacheDir, 0o777).catch(() => { })
          const webpackCacheDir = `${pwd}/node_modules/.cache`
          if (existsSync(webpackCacheDir))
            await chmodRecursive(webpackCacheDir, 0o777).catch(() => { })

          if (this.stoped)
            return originalExit(code)

          process.stdin.resume()

          try {
            await this.baseCleanup()
          }

          finally {
            this.stoped = true
            process.nextTick(() => {
              originalExit(code)
            })
          }
        }
      }

      if (!this.locked) {
        this._caddyChild = process.platform !== 'win32'
          ? spawn('sudo', ['-E', caddyPath, 'run', '--config', caddyFilePath, '--watch'])
          : spawn(caddyPath, ['run', '--config', caddyFilePath, '--watch'])

        lockfile.lockSync(caddyLockFilePath)

        this._caddyChild!.on('error', (err) => {
          return reject(err)
        })

        this._caddyChild!.stderr?.on('data', (data) => {
          const lines = (data.toString() as string).split('\n').map(line => line.trim())
          for (const line of lines) {
            // caddy log
            // eslint-disable-next-line no-console
            showCaddyLog && line && console.info(line)
            if (line.includes('Error:') || (line && JSON.parse(line).level === 'error')) {
              consola.error(`${line}\n`)
              // child.kill()
              return reject(line)
            }
            if (line.includes('config file changed'))
              consola.success('Detect added a new reverse proxy config, restarted.\n')

            if (line.includes('caddy proxying') || line.includes('serving initial'))
              return resolve()
          }
        })

        this._caddyChild!.stdout?.on('data', (_data) => {
          consola.info(_data.toString())
          resolve()
        })

        setupCleanup()
      }
      else {
        consola.info('Caddy is running in another process.')

        setupCleanup()

        return resolve()
      }
    })
  }

  async baseCleanup(restore: boolean = true) {
    try {
      if (restore && this._source && this._target) {
        if (await removeHost(this._source.split(':')[0], this._target.split(':')[0]))
          consola.success('Restore host success.\n')

        else
          consola.fail('Restore host failed.\n')
      }
    }
    catch (e) {
      consola.error(e)
      consola.fail('Restore host failed.\n')
    }
    if (!this.locked && !this.stoped) {
      this._caddyChild?.kill()
      try {
        await lockfile.unlock(caddyLockFilePath).catch(() => { })
        await unlink(caddyFilePath).catch(() => { })
        await unlink(caddyLockFilePath).catch(() => { })
      }
      catch (e) {
        consola.error(e)
      }
    }
  }
}
