import process from 'node:process'
import { chmodSync, existsSync } from 'node:fs'
import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { ResolvedConfig, ViteDevServer } from 'vite'
import c from 'picocolors'
import { consola, isAdmin, once } from './utils'
import type { Options } from './types'
import { CaddyInstant } from './caddy'

let config: ResolvedConfig

let caddy: CaddyInstant

let _stop: (callback?: () => any) => Promise<any>
let _servce: ViteDevServer

function registerExit(clear: (() => Promise<any>) | (() => any)) {
  process.on('beforeExit', async (_code) => {
    await clear()
  })

  process.on('uncaughtException', async (err) => {
    console.error('An uncaught error occurred!', err.stack)
    await clear()
    process.nextTick(() => {
      process.exit(1)
    })
  })

  process.on('unhandledRejection', async (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason)
    await clear()
    process.nextTick(() => {
      process.exit(1)
    })
  })

  process.once('SIGINT', async () => {
    await clear()
    process.exit(0)
  })

  process.once('SIGTERM', async () => {
    await clear()
    process.exit(0)
  })
}

export const unpluginFactory: UnpluginFactory<Options> = options => ({
  name: 'unplugin-https-reverse-proxy',
  enforce: 'pre',
  vite: {
    configResolved(_config) {
      config = _config
      registerExit(async () => {
        try {
          if (_servce) {
            _servce.httpServer?.close(async () => {
              _stop && await _stop()
            })
            _servce.close()
          }
          _stop && await _stop()
        }
        catch (e) {
          consola.error(e)
        }
      })
    },
    configureServer(server) {
      if (!isAdmin()) {
        consola.warn('please run as administrator')
        return
      }

      if (config.command === 'build')
        return

      const {
        enable = true,
        target = '',
      } = options
      if (!enable)
        return
      if (!target) {
        consola.fail('please provide target')
        return
      }

      _servce = server

      const _printUrls = server.printUrls
      server.printUrls = () => {
        _printUrls()

        // fix `Error: EPERM: operation not permitted`
        const pwd = process.cwd()
        const vireCacheDir = `${pwd}/node_modules/.vite`
        if (existsSync(vireCacheDir))
          chmodSync(vireCacheDir, 0o777)

        let source = `localhost:${config.server.port}`
        const url = server.resolvedUrls?.local[0]
        if (url) {
          const u = new URL(url)
          source = u.host
        }
        const base = server.config.base || '/'
        try {
          if (caddy)
            return
          caddy = new CaddyInstant()
          caddy.run(source, target, {
            base,
            ...options,
          }).then((stop) => {
            const colorUrl = (url: string) => c.green(url.replace(/:(\d+)\//, (_, port) => `:${c.bold(port)}/`))
            consola.success(`  ${c.green('➜')}  ${c.bold('run caddy reverse proxy success')}: ${colorUrl(`${options.https ? 'https' : 'http'}://${target}${base}`)}`)
            !_stop && (_stop = once(stop))
          }).catch((e) => {
            throw e
          })
        }
        catch (e) {
          consola.error(e)
        }
      }
    },
  },
  webpack(compiler) {
    if (!isAdmin()) {
      consola.warn('please run as administrator')
      return
    }

    if (process.env.NODE_ENV !== 'development')
      return

    const {
      enable = true,
      target = '',
    } = options
    if (!enable)
      return
    if (!target) {
      consola.fail('please provide target')
      return
    }

    try {
      // registerExit(async () => {
      //   try {
      //     _stop && await _stop()
      //   }
      //   catch (e) {
      //     consola.error(e)
      //   }
      // })

      const devServer = {
        host: 'localhost',
        port: 8080,
        ...compiler.options.devServer,
        // @ts-expect-error vuecli
        ...process.VUE_CLI_SERVICE.projectOptions.devServer,
      }
      const source = `${devServer.host}:${devServer.port}`

      if (caddy)
        return

      // https://github.com/webpack/webpack-dev-server/blob/master/lib/Server.js#L1913
      const _close = compiler.close.bind(compiler)
      compiler.close = async (callback: Parameters<typeof _close>[0]) => {
        try {
          _stop && await _stop(() => {
            _close && _close(callback)
          })
        }
        catch (e) {
          consola.error(e)
          process.exit(1)
        }
      }

      caddy = new CaddyInstant()

      caddy.run(source, target, {
        ...options,
      }).then((stop) => {
        const colorUrl = (url: string) => c.green(url.replace(/:(\d+)\//, (_, port) => `:${c.bold(port)}/`))

        compiler.hooks.done.tap('unplugin-https-reverse-proxy', () => {
          consola.success(`  ${c.green('➜')}  ${c.bold('run caddy reverse proxy success')}: ${colorUrl(`${options.https ? 'https' : 'http'}://${target}`)}`)

          !_stop && (_stop = once(stop))
        })
      }).catch((e) => {
        throw e
      })
    }
    catch (e) {
      consola.error(e)
    }
  },
})

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
