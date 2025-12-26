import type { UnpluginFactory } from 'unplugin'
import type { ResolvedConfig } from 'vite'
import type { Options } from './types'
import process from 'node:process'
import { Table } from 'console-table-printer'
import c from 'picocolors'
import { createUnplugin } from 'unplugin'
import { CaddyInstant } from './caddy'
import { consola, generateQrcode, getIpv4List, isAdmin, once } from './utils'

let config: ResolvedConfig

let caddy: CaddyInstant

const cwd = process.cwd()

function colorUrl(url: string): string {
  return c.green(url.replace(/:(\d+)\//, (_, port) => `:${c.bold(port)}/`))
}

async function printForwardProxy(): Promise<void> {
  const ipv4List = getIpv4List()
  if (ipv4List.length) {
    const ips = ipv4List.map(ip => c.cyan(ip)).join(', ')
    consola.info(`${c.bold('Mobile device proxy access')}:\n`)
    consola.info('1. Install certificate: scan the QR code and download the \`root.crt\` file,')
    consola.info('   then install it on your mobile device')

    const ipTable = await Promise.all(
      ipv4List.map(async ip => ({
        target: `http://${ip}:7601`,
        certificate: await generateQrcode(`http://${ip}:7601`),
      })),
    )

    const table = new Table({
      columns: [
        { name: 'target', alignment: 'left' },
        { name: 'certificate', alignment: 'center', minLen: 28 },
      ],
    })

    ipTable.forEach((ip) => {
      table.addRow(ip)
    })

    table.printTable()

    consola.info(`2. Set proxy on mobile device (Available IPs: ${ips}):${c.bold(7600)}\n\n`)
  }
}

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
  }).then(async () => {
    await printForwardProxy()

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

      const {
        enable = true,
        target = '',
      } = options

      if (!enable)
        return

      if (!isAdmin()) {
        consola.warn('please run as administrator')
        return
      }
      if (!target) {
        consola.fail('please provide target')
        return
      }

      if (target.match(/^(?:https?)?:\/\//)) {
        consola.fail('target must be a domain')
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

    const {
      enable = true,
      target = '',
    } = options

    if (!enable)
      return

    if (!isAdmin()) {
      consola.warn('please run as administrator')
      return
    }

    if (!target) {
      consola.fail('please provide target')
      return
    }

    if (target.match(/^(?:https?)?:\/\//)) {
      consola.fail('target must be a domain')
      return
    }

    const devServer = {
      host: 'localhost',
      port: 8080,
      ...compiler.options.devServer,
      // @ts-expect-error vuecli
      ...(process.VUE_CLI_SERVICE?.projectOptions.devServer),
    }
    const source = `${devServer.host}:${devServer.port}`

    if (caddy)
      return

    let base = '/'
    const publicPath = compiler.options.output?.publicPath as unknown
    if (typeof publicPath === 'string' && publicPath) {
      base = publicPath
    }
    if (!base.startsWith('/'))
      base = `/${base}`
    if (base !== '/' && !base.endsWith('/'))
      base = `${base}/`

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
      base,
      ...options,
    }).then(() => {
      compiler.hooks.done.tap('unplugin-https-reverse-proxy', async () => {
        await printForwardProxy()

        consola.success(`  ${c.green('➜')}  ${c.bold('run caddy reverse proxy success')}: ${colorUrl(`${options.https ? 'https' : 'http'}://${target}${base}`)}`)
      })
    }).catch((e) => {
      throw e
    })
  },
  async rspack(compiler) {
    if (process.env.NODE_ENV !== 'development')
      return

    const {
      enable = true,
      target = '',
    } = options

    if (!enable)
      return

    if (!isAdmin()) {
      consola.warn('please run as administrator')
      return
    }

    if (!target) {
      consola.fail('please provide target')
      return
    }

    if (target.match(/^(?:https?)?:\/\//)) {
      consola.fail('target must be a domain')
      return
    }

    const devServer = {
      host: 'localhost',
      port: 8080,
      ...compiler.options.devServer,
      ...(await (await import('@rsbuild/core'))?.loadConfig({
        cwd,
      }))?.content?.server,
    }

    const source = `${devServer.host}:${devServer.port}`

    if (caddy)
      return

    caddy = new CaddyInstant()

    let base = '/'
    const publicPath = compiler.options.output?.publicPath as unknown
    if (typeof publicPath === 'string' && publicPath) {
      base = publicPath
    }
    if (!base.startsWith('/'))
      base = `/${base}`
    if (base !== '/' && !base.endsWith('/'))
      base = `${base}/`

    caddy.run(source, target, {
      base,
      ...options,
    }).then(async () => {
      await printForwardProxy()

      consola.success(`  ${c.green('➜')}  ${c.bold('run caddy reverse proxy success')}: ${colorUrl(`${options.https ? 'https' : 'http'}://${target}${base}`)}`)
    }).catch((e) => {
      throw e
    })
  },
})

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
