import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import Unplugin from '../../src/rspack'

export default defineConfig({
  server: {
    port: 8081,
  },
  tools: {
    rspack: {
      plugins: [
        Unplugin({
          enable: true,
          target: 'test-repack.abc.com',
        }),
      ],
    },
  },
  dev: {
    // ↓ for HMR
    client: {
      // protocol: 'wss',   // <- if you set options.https to `true`
      // port: '443',         // <- if you set options.https to `true`
      host: 'test.abc.com', // <- target hostname
    },
  },
  plugins: [
    pluginVue(),
  ],
})
