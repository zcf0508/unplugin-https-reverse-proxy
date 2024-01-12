import process from 'node:process'
import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { ResolvedConfig } from 'vite'
import c from 'picocolors'
import { consola, isAdmin, once } from './utils'
import type { Options } from './types'
import { CaddyInstant } from './caddy'

let config: ResolvedConfig

let caddy: CaddyInstant

const pwd = process.cwd()

export const vitePrintUrls = once((
  options: Options,
  source: string,
  target: string,
  base: string = '/',
  _printUrls?: () => void,
) => {
  _printUrls?.()

  if (caddy)
    return
  caddy = new CaddyInstant()
  caddy.run(source, target, {
    base,
    ...options,
  }).then(() => {
    const colorUrl = (url: string) => c.green(url.replace(/:(\d+)\//, (_, port) => `:${c.bold(port)}/`))
    consola.success(`  ${c.green('➜')}  ${c.bold('run caddy reverse proxy success')}: ${colorUrl(`${options.https ? 'https' : 'http'}://${target}${base}`)}`)
  }).catch((e) => {
    throw e
  })
})

export const unpluginFactory: UnpluginFactory<Options> = options => ({
  name: 'unplugin-https-reverse-proxy',
  enforce: 'pre',
  vite: {
    configResolved(_config) {
      config = _config
    },
    configureServer(server) {
      if (config.command !== 'serve')
        return

      if (!isAdmin()) {
        consola.warn('please run as administrator')
        return
      }

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

      const _printUrls = server.printUrls.bind(server)

      let source = `localhost:${config.server.port || 5173}`
      const url = server.resolvedUrls?.local[0]
      if (url) {
        const u = new URL(url)
        source = u.host
      }

      const base = server.config.base || '/'

      server.printUrls = () => vitePrintUrls(options, source, target, base, _printUrls)
    },
  },
  webpack(compiler) {
    if (process.env.NODE_ENV !== 'development')
      return

    if (!isAdmin()) {
      consola.warn('please run as administrator')
      return
    }

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
    const _close = compiler.close?.bind(compiler)
    if (_close) {
      compiler.close = async (callback: Parameters<typeof _close>[0]) => {
        process.on('exit', () => {
          _close && _close(callback)
        })
      }
    }
    else {
      // webpack 4 not support yet
      options.https = false
    }

    caddy = new CaddyInstant()

    caddy.run(source, target, {
      ...options,
    }).then(() => {
      const colorUrl = (url: string) => c.green(url.replace(/:(\d+)\//, (_, port) => `:${c.bold(port)}/`))

      compiler.hooks.done.tap('unplugin-https-reverse-proxy', () => {
        consola.success(`  ${c.green('➜')}  ${c.bold('run caddy reverse proxy success')}: ${colorUrl(`${options.https ? 'https' : 'http'}://${target}`)}`)
      })
    }).catch((e) => {
      throw e
    })
  },
})

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
