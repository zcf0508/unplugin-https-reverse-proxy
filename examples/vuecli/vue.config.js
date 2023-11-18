const { defineConfig } = require('@vue/cli-service')
const Unplugin = require('unplugin-https-reverse-proxy/webpack')

module.exports = defineConfig({
  devServer: {
    allowedHosts: 'all',
    setupExitSignals: true,
    client: {
      // ↓ for HMR
      webSocketURL: {
        protocol: 'wss',
        hostname: 'test.abc.com', // <- target hostname
        port: 443,
      },
    },
  },
  configureWebpack: {
    plugins: [
      Unplugin.default({
        target: 'test.abc.com',
        showCaddyLog: true,
      }),
    ],
  },
})
