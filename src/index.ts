import process from 'node:process'
import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { ResolvedConfig } from 'vite'
import c from 'picocolors'
import type { Options } from './types'
import { CaddyInstant } from './caddy'

let config: ResolvedConfig

export const unpluginFactory: UnpluginFactory<Options> = options => ({
  name: 'unplugin-https-reverse-proxy',
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
    const source = `${compiler.options.devServer?.host || '127.0.0.1'}:${compiler.options.devServer?.port || '8080'}`

    try {
      const caddy = new CaddyInstant()
      caddy.run(source, target).then((stop) => {
        const colorUrl = (url: string) => c.green(url.replace(/:(\d+)\//, (_, port) => `:${c.bold(port)}/`))
        // eslint-disable-next-line no-console
        console.log(`  ${c.green('➜')}  ${c.bold('run caddy reverse proxy success')}: ${colorUrl(`https://${target}`)}`)

        process.on('SIGINT', async () => {
          await stop()
          process.exit()
        })
      })
    }
    catch (e) {
      console.error(e)
    }
  },
})

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
