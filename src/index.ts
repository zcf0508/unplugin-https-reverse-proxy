import process from 'node:process'
import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { ResolvedConfig } from 'vite'
import c from 'picocolors'
import { consola } from './utils'
import type { Options } from './types'
import { CaddyInstant } from './caddy'

let config: ResolvedConfig

let caddy: CaddyInstant

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

  process.on('SIGINT', async () => {
    await clear()
    process.nextTick(() => {
      process.exit()
    })
  })

  process.on('SIGTERM', async () => {
    await clear()
    process.nextTick(() => {
      process.exit()
    })
  })
}

export const unpluginFactory: UnpluginFactory<Options> = options => ({
  name: 'unplugin-https-reverse-proxy',
  enforce: 'pre',
  vite: {
    configResolved(_config) {
      config = _config
    },
    configureServer(server) {
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

      let _stop: () => Promise<any>
      const _servce = server

      registerExit(async () => {
        try {
          _stop && await _stop()
          _servce && _servce.close()
        }
        catch (e) {
          consola.error(e)
        }
      })

      const _printUrls = server.printUrls
      server.printUrls = () => {
        _printUrls()
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
            showCaddyLog: options.showCaddyLog,
          }).then((stop) => {
            _stop = stop
            const colorUrl = (url: string) => c.green(url.replace(/:(\d+)\//, (_, port) => `:${c.bold(port)}/`))
            consola.success(`  ${c.green('➜')}  ${c.bold('run caddy reverse proxy success')}: ${colorUrl(`https://${target}${base}`)}`)
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

    let _stop: () => Promise<any>

    registerExit(async () => {
      try {
        _stop && await _stop()
      }
      catch (e) {
        consola.error(e)
      }
    })

    try {
      // @ts-expect-error vuecli
      const devServer = compiler.options.devServer || process.VUE_CLI_SERVICE.projectOptions.devServer
      const source = `${devServer?.host || '127.0.0.1'}:${devServer?.port || '8080'}`

      if (caddy)
        return

      caddy = new CaddyInstant()

      caddy.run(source, target, {
        showCaddyLog: options.showCaddyLog,
      }).then((stop) => {
        _stop = stop
        const colorUrl = (url: string) => c.green(url.replace(/:(\d+)\//, (_, port) => `:${c.bold(port)}/`))

        compiler.hooks.done.tap('unplugin-https-reverse-proxy', (stats) => {
          if (stats.hasErrors())
            return

          consola.success(`  ${c.green('➜')}  ${c.bold('run caddy reverse proxy success')}: ${colorUrl(`https://${target}`)}`)
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
