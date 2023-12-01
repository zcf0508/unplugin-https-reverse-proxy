const { defineConfig } = require('@vue/cli-service')
const Unplugin = require('unplugin-https-reverse-proxy/webpack')

module.exports = defineConfig({
  devServer: {
    allowedHosts: 'all',
    setupExitSignals: true,
    client: {
      // ↓ for HMR
      webSocketURL: {
        // protocol: 'wss',   // <- if you set options.https to `true`
        // port: 443,         // <- if you set options.https to `true`
        hostname: 'test.abc.com', // <- target hostname
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
