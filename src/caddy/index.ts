import type { Buffer } from 'node:buffer'
import type { OpenedPrivilegedSession } from './privileged'
import { execFile } from 'node:child_process'
import { chmodSync, createWriteStream, existsSync, mkdirSync, unlinkSync } from 'node:fs'
import { readFile, unlink, writeFile } from 'node:fs/promises'
import { platform } from 'node:os'
import { join } from 'node:path'
import process from 'node:process'
import { got } from 'got-cjs'
import { HttpProxyAgent } from 'http-proxy-agent'
import { HttpsProxyAgent } from 'https-proxy-agent'
import { consola, once } from '../utils'
import { genCaddyfile, validateTemplateContext } from './caddyfile'
import { useCaddyConfig } from './config'
import { caddyFilePath, caddyPath, supportList, TEMP_DIR } from './constants'
import { isCaddyReloadCancellation } from './log'
import { HelperCaddyProcess, openPrivilegedSession } from './privileged'
import { formatTlsHealthFailure, waitForLocalTls } from './tls-health'
import { logProgress, logProgressOver } from './utils'

export async function download(): Promise<string> {
  if (await testCaddy())
    return caddyPath

  return new Promise<string>((resolve, reject) => {
    if (!existsSync(TEMP_DIR)) {
      mkdirSync(TEMP_DIR, { recursive: true })
      chmodSync(TEMP_DIR, 0o700)
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

    const dowmloadLink = `https://caddyserver.com/api/download?os=${support.platform}&arch=${support.arch}&p=github.com%2Fcaddyserver%2Fforwardproxy`

    existsSync(caddyPath) && unlinkSync(caddyPath)

    const httpProxy = process.env.HTTP_PROXY || process.env.http_proxy
    const httpsProxy = process.env.HTTPS_PROXY || process.env.https_proxy

    const httpAgent = httpProxy ? new HttpProxyAgent(httpProxy) : undefined
    const httpsAgent = httpsProxy ? new HttpsProxyAgent(httpsProxy) : undefined

    const chmodCaddyOnce = once(() => {
      chmodSync(caddyPath, 0o755)
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
      chmodSync(caddyPath, 0o755)
      resolve(caddyPath)
    }).on('error', (err) => {
      reject(err)
    })
  })
}

/**
 * Checks for a usable binary by running it with no arguments: Caddy prints its
 * usage and exits, so this neither binds a port nor needs privileges.
 */
export function testCaddy(): Promise<boolean> {
  return new Promise((resolve) => {
    if (!existsSync(caddyPath))
      return resolve(false)

    try {
      chmodSync(caddyPath, 0o755)
    }
    catch {}

    execFile(caddyPath, [], { timeout: 10_000 }, (error, stdout) => {
      if (error && !stdout)
        return resolve(false)
      resolve(stdout.length > 0)
    })
  })
}

interface RunOptions {
  restore: boolean
  base: string
  showCaddyLog: boolean
  https: boolean
  healthCheck?: boolean
}

/** Where Caddy keeps the local CA; the template serves it for device installs. */
function caddyRootPath(): string {
  return join(
    process.platform === 'win32'
      ? `${process.env.AppData!}/Caddy`
      : `${process.env.HOME!}/Library/Application Support/Caddy`,
    './pki/authorities/local',
  )
}

/**
 * Renders the Caddyfile from the routes currently on disk and writes it.
 *
 * Called from inside the config lock, so two projects writing at once cannot
 * render from their own stale view of the routes.
 */
async function renderCaddyfile(proxies: Record<string, unknown>): Promise<void> {
  const ctx = validateTemplateContext({
    caddy_root: caddyRootPath(),
    proxies: Object.values(proxies) as never,
  })
  await writeFile(caddyFilePath, await genCaddyfile(ctx))
}

let caddyConfig: ReturnType<typeof useCaddyConfig> | undefined

function getCaddyConfig(): ReturnType<typeof useCaddyConfig> {
  if (!caddyConfig) {
    caddyConfig = useCaddyConfig({ renderCaddyfile: renderCaddyfile as never })
  }
  return caddyConfig
}

/** Split `host:port` (IPv4 or hostname); supports `[::1]:port`. */
function splitHostPort(addr: string): { host: string, port: string } {
  const lastColon = addr.lastIndexOf(':')
  if (lastColon === -1)
    return { host: addr, port: '' }
  if (addr.startsWith('[')) {
    const end = addr.indexOf(']')
    if (end !== -1 && addr[end + 1] === ':')
      return { host: addr.slice(1, end), port: addr.slice(end + 2) }
  }
  return { host: addr.slice(0, lastColon), port: addr.slice(lastColon + 1) }
}

/** Injection point for tests: opens the privileged helper without sudo. */
export interface CaddyDependencies {
  openSession: (runtimeDir: string, reason?: { target: string, https: boolean }) => Promise<OpenedPrivilegedSession>
  /** Shared route config; tests inject an in-memory one. */
  config: () => ReturnType<typeof useCaddyConfig>
}

const defaultDependencies: CaddyDependencies = {
  openSession: (runtimeDir, reason) => openPrivilegedSession(runtimeDir, {
    log: message => consola.debug(message),
    // Both paths are fixed here, before any socket traffic: the privileged
    // helper must never execute something named in a request.
    caddyBin: caddyPath,
    caddyConfigPath: caddyFilePath,
    reason,
  }),
  config: () => getCaddyConfig(),
}

export class CaddyInstant {
  private inited = false
  private stoped = false
  private readonly deps: CaddyDependencies

  private caddyfile: string | undefined

  private _caddyChild: HelperCaddyProcess | undefined
  private _session: OpenedPrivilegedSession | undefined

  private _source: string | undefined
  private _target: string | undefined
  private _stopEffects: Array<(() => void)> = []
  /** Identifies this instance's routes in the shared config. */
  private readonly proxyKey = `${process.pid}-${Math.random().toString(36).slice(2, 8)}`

  constructor(deps: Partial<CaddyDependencies> = {}) {
    this.deps = { ...defaultDependencies, ...deps }
  }

  /**
   * Connects to the privileged helper, starting it once if needed. It is
   * reused across instances so a second dev server does not ask for a
   * password again.
   */
  private async session(reason?: { target: string, https: boolean }): Promise<OpenedPrivilegedSession> {
    // A crashed helper leaves the cached client permanently disconnected; drop
    // it so the next call starts a fresh helper instead of failing forever.
    if (this._session && !this._session.client.connected)
      this._session = undefined

    if (!this._session)
      this._session = await this.deps.openSession(TEMP_DIR, reason)
    return this._session
  }

  async getCaddyfile(): Promise<string> {
    if (!existsSync(caddyFilePath)) {
      this.caddyfile = ''
      return ''
    }

    this.caddyfile = await readFile(caddyFilePath, 'utf-8')
    return this.caddyfile
  }

  get caddyRoot(): string {
    return caddyRootPath()
  }

  async writeCaddyfile(): Promise<void> {
    return await writeFile(caddyFilePath, this.caddyfile || '')
  }

  async deleteCaddyfile(): Promise<void> {
    return await unlink(caddyFilePath)
  }

  async init(): Promise<void> {
    await download()
    this.inited = true
  }

  /**
   * Hands the Caddy storage directory back to the developer. Local CA data
   * created by an earlier root-owned run must stay readable for `tls internal`
   * to keep serving the same certificate the browser already trusts.
   */
  /**
   * Installs Caddy's local root CA so the browser stops warning about
   * `tls internal` certificates. Generating the CA and trusting it are separate
   * steps: a new CA appears whenever the previous one expires or the storage is
   * replaced, so this runs on every start instead of once.
   *
   * The helper owns both the binary path and the command, so nothing here can
   * be turned into an arbitrary root execution.
   */
  private async trustLocalCa(session: OpenedPrivilegedSession): Promise<void> {
    try {
      const result = await session.client.call('ca.trust')
      if (result.trusted)
        consola.debug(`Caddy local CA is trusted\n${result.output}`)
    }
    catch (error) {
      consola.warn(
        `could not install the Caddy root certificate automatically: ${(error as Error).message}\n`
        + `Run \`${caddyPath} trust\` manually if the browser warns about the certificate.`,
      )
    }
  }

  private async ensureTlsReady(targetHost: string): Promise<void> {
    const health = await waitForLocalTls(targetHost)
    if (!health.healthy)
      throw new Error(formatTlsHealthFailure(targetHost, health))
  }

  /**
   * Regenerates the Caddyfile from the config on disk.
   *
   * Reading the file rather than a cached view matters here: another project
   * may have added its route since this instance last looked.
   */
  private async updateCaddyfile(): Promise<void> {
    const { readProxies } = this.deps.config()
    const proxies = Object.values(readProxies())
    const ctx = validateTemplateContext({
      caddy_root: this.caddyRoot,
      proxies,
    })

    this.caddyfile = await genCaddyfile(ctx)
    await this.writeCaddyfile()
  }

  private async stopCaddy(): Promise<void> {
    try {
      await got.post('http://127.0.0.1:2019/stop', {
        headers: {
          Origin: 'http://localhost:2019',
        },
        retry: {
          limit: 0,
        },
        timeout: {
          request: 2000,
        },
      })
    }
    catch {}

    this._caddyChild?.kill()
  }

  /**
   * @param source like `127.0.0.1:8080`
   * @param target like `test.abc.com`. And if you provide a port ,it will be ignore.
   */
  async run(source: string, target: string, options?: Partial<RunOptions>): Promise<void> {
    source = source.replace('0.0.0.0', '127.0.0.1')
    // Caddy dials the upstream host via DNS; `localhost` can hit lookup timeouts (VPN/DNS).
    // Use loopback IP so the proxy never depends on resolving "localhost".
    source = source.replace(/^localhost(?=:)/i, '127.0.0.1')
    const {
      restore = true,
      base = '/',
      showCaddyLog = false,
      https = false,
      healthCheck = true,
    } = options || {}

    this._source = source
    this._target = target

    if (!this.inited)
      await this.init()

    const sourceHost = splitHostPort(source).host
    const targetHost = splitHostPort(target).host

    const session = await this.session({ target: targetHost, https })
    await session.client.call('hosts.add', { ip: sourceHost, host: targetHost })
    consola.success('update host success\n')

    const normalizeBase = (b: string): string => {
      let out = b || '/'
      if (!out.startsWith('/'))
        out = `/${out}`
      if (out !== '/' && !out.endsWith('/'))
        out = `${out}/`
      return out
    }
    const baseNormalized = normalizeBase(base)

    const proxies = [
      {
        target: targetHost,
        portSuffix: https ? '' : ':80',
        tls: https ? 'tls internal' : '',
        source,
        base: baseNormalized,
        healthCheck,
      },
    ]

    const { writeCaddyConfig } = this.deps.config()
    await writeCaddyConfig(proxies, this.proxyKey)

    await this.updateCaddyfile()

    // Ports 80/443 may still be held by a previous, uncleanly stopped run.
    // The helper skips its own Caddy, so this never kills a proxy another
    // project is already using.
    await session.client.call('port.free', { port: 443 })
    if (process.platform === 'win32' || !https)
      await session.client.call('port.free', { port: 80 })

    return new Promise<void>((resolve, reject) => {
      let startupCheckStarted = false

      const resolveWhenReady = async (): Promise<void> => {
        if (startupCheckStarted)
          return
        startupCheckStarted = true

        try {
          if (https) {
            // `caddy trust` reads the CA through the admin API, so it can only
            // run once Caddy is serving. The helper does it as root because the
            // system trust store is not writable by the developer account.
            await this.trustLocalCa(session)
            await this.ensureTlsReady(targetHost)
          }
          resolve()
        }
        catch (error) {
          await this.baseCleanup(restore)
          reject(error)
        }
      }

      const setupCleanup = (): void => {
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

      setupCleanup()

      void (async () => {
        try {
          const child = new HelperCaddyProcess(session.client)
          this._caddyChild = child

          const started = await session.client.call('caddy.start')

          child.on('exit', (code: number | null) => {
            if (code !== null && code !== 0)
              reject(new Error(`Caddy exited with code ${code}`))
          })

          // Caddy was already serving: its "serving initial" line was emitted
          // when the first project started it, so waiting for it again would
          // hang this instance forever.
          if (started?.started === false) {
            consola.info('Caddy is already running; added this route to it.')
            void resolveWhenReady()
            return
          }

          child.stderr.on('data', async (data: Buffer) => {
            const lines = data.toString().split('\n').map((line: string) => line.trim())
            for (const line of lines) {
              // caddy log
              // eslint-disable-next-line no-console
              showCaddyLog && line && console.info(line)
              if (isCaddyReloadCancellation(line)) {
                consola.info('Caddy restarted before TLS issuance completed; retrying.\n')
                continue
              }
              try {
                if (line.includes('Error:') || (line && JSON.parse(line).level === 'error')) {
                  if (line.includes('parsing caddyfile tokens')) {
                    consola.error('Caddyfile syntax error, please contact the author:\n', `${this.caddyfile}\n\n${line}\n`)
                    await this.baseCleanup()
                    process.exit()
                  }
                  else {
                    consola.error(`${line}\n`)
                    return reject(line)
                  }
                }
              }
              catch {}

              if (line.includes('config file changed'))
                consola.success('Detect added a new reverse proxy config, restarted.\n')

              if (line.includes('caddy proxying') || line.includes('serving initial'))
                void resolveWhenReady()
            }
          })

          child.stdout.on('data', (data: Buffer) => {
            consola.info(data.toString())
            void resolveWhenReady()
          })
        }
        catch (error) {
          // The hosts entry was written before Caddy started; a failed start
          // must not leave it behind while the dev server keeps running.
          await this.baseCleanup(restore)
          reject(error)
        }
      })()
    })
  }

  async baseCleanup(restore: boolean = true): Promise<void> {
    this._stopEffects.forEach(fn => fn())
    this._stopEffects.length = 0

    try {
      if (restore && this._source && this._target && this._session) {
        const sourceHost = splitHostPort(this._source).host
        const targetHost = splitHostPort(this._target).host
        await this._session.client.call('hosts.remove', { ip: sourceHost, host: targetHost })
        if (sourceHost === 'localhost')
          await this._session.client.call('hosts.remove', { ip: '127.0.0.1', host: targetHost })
        consola.success('Restore host success.\n')
      }
    }
    catch (e) {
      // The helper restores its own entries when the connection drops, so a
      // closed session here is not a failed cleanup.
      if (this._session?.client.connected === false) {
        consola.debug('hosts entries are restored by the privileged helper on disconnect')
      }
      else {
        consola.error(e)
        consola.fail('Restore host failed.\n')
      }
    }

    // Caddy and the shared Caddyfile belong to every project using this
    // helper. Only this project's route is removed here; the helper stops
    // Caddy when its last client disconnects.
    if (!this.stoped) {
      try {
        await this.deps.config().removeProxy(this.proxyKey)
      }
      catch (e) {
        consola.error(e)
      }
    }
  }
}
