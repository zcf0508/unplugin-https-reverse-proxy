import process from 'node:process'
import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { ResolvedConfig } from 'vite'
import c from 'picocolors'
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
        // eslint-disable-next-line no-console
        console.log('please provide target')
        return
      }
      server.printUrls = () => {
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
          }).then((stop) => {
            const colorUrl = (url: string) => c.green(url.replace(/:(\d+)\//, (_, port) => `:${c.bold(port)}/`))
            // eslint-disable-next-line no-console
            console.log(`  ${c.green('➜')}  ${c.bold('run caddy reverse proxy success')}: ${colorUrl(`https://${target}${base}`)}`)

            process.on('SIGINT', async () => {
              await stop()
              server.close()
              process.exit()
            })
          })
        }
        catch (e) {
          console.error(e)
        }
      }
    },
  },
  webpack(compiler) {
    const {
      target = '',
    } = options
    if (!target) {
      // eslint-disable-next-line no-console
      console.log('please provide target')
      return
    }
    try {
      // @ts-expect-error vuecli
      const devServer = compiler.options.devServer || process.VUE_CLI_SERVICE.projectOptions.devServer
      const source = `${devServer?.host || '127.0.0.1'}:${devServer?.port || '8080'}`

      if (caddy)
        return

      caddy = new CaddyInstant()

      caddy.run(source, target).then((stop) => {
        const colorUrl = (url: string) => c.green(url.replace(/:(\d+)\//, (_, port) => `:${c.bold(port)}/`))

        compiler.hooks.done.tap('unplugin-https-reverse-proxy', (stats) => {
          if (stats.hasErrors())
            return

          // eslint-disable-next-line no-console
          console.log(`  ${c.green('➜')}  ${c.bold('run caddy reverse proxy success')}: ${colorUrl(`https://${target}`)}`)
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
      console.error(e)
    }
  },
})

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
