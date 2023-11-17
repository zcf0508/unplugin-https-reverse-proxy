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

export const unpluginFactory: UnpluginFactory<Options> = options => ({
  name: 'unplugin-https-reverse-proxy',
  enforce: 'post',
  vite: {
    configResolved(_config) {
      config = _config
    },
    configureServer(server) {
      const {
        target = '',
      } = options
      if (!target) {
        consola.fail('please provide target')
        return
      }
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
          const caddy = new CaddyInstant()
          caddy.run(source, target, {
            base,
            showCaddyLog: options.showCaddyLog,
          }).then((stop) => {
            const colorUrl = (url: string) => c.green(url.replace(/:(\d+)\//, (_, port) => `:${c.bold(port)}/`))
            consola.success(`  ${c.green('➜')}  ${c.bold('run caddy reverse proxy success')}: ${colorUrl(`https://${target}${base}`)}`)

            process.on('SIGINT', async () => {
              await stop()
              server.close()
              process.exit()
            })
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
      target = '',
    } = options
    if (!target) {
      consola.fail('please provide target')
      return
    }
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
        const colorUrl = (url: string) => c.green(url.replace(/:(\d+)\//, (_, port) => `:${c.bold(port)}/`))

        compiler.hooks.done.tap('unplugin-https-reverse-proxy', (stats) => {
          if (stats.hasErrors())
            return

          consola.success(`  ${c.green('➜')}  ${c.bold('run caddy reverse proxy success')}: ${colorUrl(`https://${target}`)}`)
        })

        process.on('SIGINT', async () => {
          await stop()
          process.exit()
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
