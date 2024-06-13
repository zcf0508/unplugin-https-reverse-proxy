import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Unplugin from '../../src/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    Unplugin({
      target: 'test23.abc.com',
      showCaddyLog: true,
      enable: true,
      https: false,
    }),
  ],
})
