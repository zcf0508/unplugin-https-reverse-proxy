# unplugin-https-reverse-proxy

[![NPM version](https://img.shields.io/npm/v/unplugin-https-reverse-proxy?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-https-reverse-proxy)

A plugin for https reverse proxy, support `vite` and `webpack`.

## Install

```bash
# not auto install caddy when postinstall
npm i unplugin-https-reverse-proxy --save-dev

# auto install
UHRP_AUTO_INSTALL_CADDY=true npm i unplugin-https-reverse-proxy --save-dev
```

```ts
interface Options {
  /** default: true */
  enable?: boolean
  /** target hostname */
  target: string
  /** default: false */
  showCaddyLog?: boolean
  /** default: false */
  https?: boolean
}
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import HttpsReverseProxy from 'unplugin-https-reverse-proxy/vite'

export default defineConfig({
  plugins: [
    HttpsReverseProxy({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Webpack 5</summary><br>

```js
// webpack.config.js

/** @type {Parameters<import('unplugin-https-reverse-proxy/webpack')['default']>[0]} */
const reverseProxyOptions = {
  enable: false,
  target: 'xxx',
  https: false,
}

module.exports = {
  /* ... */
  devServer: {
    client: {
      // ↓ for HMR
      webSocketURL: {
        ...(reverseProxyOptions.enable
          ? {
              hostname: reverseProxyOptions.target,
            }
          : {}),
        ...(reverseProxyOptions.enable && reverseProxyOptions.https
          ? {
              protocol: 'wss',
              port: 443,
            }
          : {})
      }
    },
    setupExitSignals: true,
    allowedHosts: 'all',
  },
  plugins: [
    require('unplugin-https-reverse-proxy/webpack')(reverseProxyOptions)
  ]
}
```

<br></details>

<details>
<summary>Webpack 4</summary><br>

```js
// webpack.config.js

/** @type {Parameters<import('unplugin-https-reverse-proxy/webpack')['default']>[0]} */
const reverseProxyOptions = {
  enable: false,
  target: 'xxx',
  // https: false, // not support yet
}

module.exports = {
  /* ... */
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  plugins: [
    require('unplugin-https-reverse-proxy/webpack')(reverseProxyOptions)
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```js
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    ['unplugin-https-reverse-proxy/nuxt', { /* options */ }],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI 5</summary><br>

```js
// vue.config.js

/** @type {Parameters<import('unplugin-https-reverse-proxy/webpack')['default']>[0]} */
const reverseProxyOptions = {
  enable: false,
  target: 'xxx',
  https: false,
}

module.exports = {
  devServer: {
    client: {
      // ↓ for HMR
      webSocketURL: {
        ...(reverseProxyOptions.enable
          ? {
              hostname: reverseProxyOptions.target,
            }
          : {}),
        ...(reverseProxyOptions.enable && reverseProxyOptions.https
          ? {
              protocol: 'wss',
              port: 443,
            }
          : {})
      }
    },
    setupExitSignals: true,
    allowedHosts: 'all',
  },
  configureWebpack: {
    plugins: [
      require('unplugin-https-reverse-proxy/webpack')(reverseProxyOptions),
    ],
  },
}
```

<br></details>

<details>
<summary>Vue CLI 4</summary><br>

```js
// vue.config.js

/** @type {Parameters<import('unplugin-https-reverse-proxy/webpack')['default']>[0]} */
const reverseProxyOptions = {
  enable: false,
  target: 'xxx',
  // https: false, // not support yet
}

module.exports = {
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  configureWebpack: {
    plugins: [
      require('unplugin-https-reverse-proxy/webpack')(reverseProxyOptions),
    ],
  },
}
```

<br></details>

## Usage

```bash
# macOS
sudo -E npm run dev # your dev script
#    ^ `-E` is important

# windows
# use powershell as administrator
npm run dev # your dev script
```

If your broswer shows a not trusted certificate warning, please check the keychain.

![keychain](https://github.com/zcf0508/unplugin-https-reverse-proxy/blob/main/images/Snipaste_2023-11-16_16-59-55.png)

More info, you can check [caddy about CA Root](https://caddyserver.com/docs/automatic-https#ca-root).
