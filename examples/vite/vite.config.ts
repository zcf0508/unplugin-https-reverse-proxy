import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Unplugin from '../../src/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    Unplugin({
      enable: true,
      target: 'test-vite.abc.com',
      https: true,
    }),
  ],
})
