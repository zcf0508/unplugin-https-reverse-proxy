import process from 'node:process'
import { defineNuxtModule } from '@nuxt/kit'
import type { ViteDevServer } from 'vite'
import type { Options } from './types'
import '@nuxt/schema'
import { consola, isAdmin, once } from './utils'
import { vitePrintUrls } from '.'

export interface ModuleOptions extends Options {

}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-unplugin-https-reverse-proxy',
    configKey: 'unpluginHttpsReverseProxy',
  },
  setup(options, _nuxt) {
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

    // https://github.com/nuxt/cli/issues/220#issuecomment-1735394141
    let url = ''
    _nuxt.hook('listen', (_, listener) => {
      url = listener.url
    })

    _nuxt.hook('vite:serverCreated', once((server: ViteDevServer) => {
      const source = new URL(url).host

      if (!options.target) {
        consola.fail('please provide target')
        return
      }

      const base = _nuxt.options.app.baseURL || '/'

      vitePrintUrls(server, options, source, options.target, base)
    }))
  },
})
