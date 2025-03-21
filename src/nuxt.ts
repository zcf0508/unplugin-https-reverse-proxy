import type { Options } from './types'
import process from 'node:process'
import { defineNuxtModule } from '@nuxt/kit'
import { vitePrintUrls } from '.'
import { consola, isAdmin } from './utils'
import '@nuxt/schema'

export interface ModuleOptions extends Options {

}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-unplugin-https-reverse-proxy',
    configKey: 'unpluginHttpsReverseProxy',
  },
  setup(options, _nuxt) {
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

    // https://github.com/nuxt/cli/issues/220#issuecomment-1735394141
    _nuxt.hook('listen', (_, listener) => {
      const url = listener.url
      const source = new URL(url).host

      const base = _nuxt.options.app.baseURL || '/'

      vitePrintUrls(options, source, options.target, base)
    })
  },
})
