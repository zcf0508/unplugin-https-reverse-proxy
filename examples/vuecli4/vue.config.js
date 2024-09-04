const Unplugin = require('unplugin-https-reverse-proxy/webpack')

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  configureWebpack: {
    plugins: [
      Unplugin.default({
        enable: true,
        target: 'test-vuecli-4.abc.com',
      }),
    ],
  },
}
