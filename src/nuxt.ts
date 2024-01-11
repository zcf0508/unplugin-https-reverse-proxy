import { addVitePlugin, addWebpackPlugin, defineNuxtModule } from '@nuxt/kit'
import type { ViteDevServer } from 'vite'
import vite from './vite'
import webpack from './webpack'
import type { Options } from './types'
import '@nuxt/schema'
import { consola, once } from './utils'
import { vitePrintUrls } from '.'

export interface ModuleOptions extends Options {

}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-unplugin-https-reverse-proxy',
    configKey: 'unpluginHttpsReverseProxy',
  },
  setup(options, _nuxt) {
    addVitePlugin(() => vite(options))
    addWebpackPlugin(() => webpack(options))

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
