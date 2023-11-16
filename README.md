# unplugin-https-reverse-proxy

[![NPM version](https://img.shields.io/npm/v/unplugin-https-reverse-proxy?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-https-reverse-proxy)

A plugin for https reverse proxy, support `vite` and `webpack`.

## Install

```bash
npm i unplugin-https-reverse-proxy
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Starter from 'unplugin-https-reverse-proxy/vite'

export default defineConfig({
  plugins: [
    Starter({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  devServer: {
    client: {
      // ↓ for HMR
      webSocketURL: {
        protocol: 'wss',
        port: 443,
      },
    },
  },
  plugins: [
    require('unplugin-https-reverse-proxy/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
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
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  devServer: {
    client: {
      // ↓ for HMR
      webSocketURL: {
        protocol: 'wss',
        port: 443,
      },
    },
  },
  configureWebpack: {
    plugins: [
      require('unplugin-https-reverse-proxy/webpack')({ /* options */ }),
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