# unplugin-https-reverse-proxy

[![NPM version](https://img.shields.io/npm/v/unplugin-https-reverse-proxy?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-https-reverse-proxy)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/zcf0508/unplugin-https-reverse-proxy)

A plugin for https reverse proxy, support `vite`、`webpack` and `rspack`.

## Install

Support set caddy file path by environment variable `UHRP_CADDY_PATH`, default is system cache folder.

```env
#.env.local
UHRP_CADDY_PATH=~/tmp/.uhrp
```

```bash
npm i unplugin-https-reverse-proxy --save-dev
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
<summary>Rspack</summary><br>

```js
// rspack.config.js

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
  },
  plugins: [
    require('unplugin-https-reverse-proxy/rspack')(reverseProxyOptions)
  ]
}
```

<br></details>

<details>
<summary>Rsbuild</summary><br>

```js
// rsbuild.config.js

/** @type {Parameters<import('unplugin-https-reverse-proxy/webpack')['default']>[0]} */
const reverseProxyOptions = {
  enable: false,
  target: 'xxx',
  https: false,
  healthCheck: true,
}

module.exports = {
  /* ... */
  dev: {
    client: {
      // ↓ for HMR
      ...(reverseProxyOptions.enable
        ? {
            host: reverseProxyOptions.target,
          }
        : {}),
      ...(reverseProxyOptions.enable && reverseProxyOptions.https
        ? {
            protocol: 'wss',
            port: '443',
          }
        : {})
    },
  },
  tools: {
    rspack: {
      plugins: [
        require('unplugin-https-reverse-proxy/rspack')(reverseProxyOptions)
      ]
    },
  },
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```js
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    ['unplugin-https-reverse-proxy/nuxt', {
      /* options */
      healthCheck: false, // important for nuxt
    }],
  ],
})
```

**!important:** You need to update the `nuxt dev` script by adding `--fork=false` to enable host restoration.

```json
// package.json

{
  "scripts": {
    "dev": "nuxt dev --fork=false"
  }
}
```

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

## NOTICE!
You need delete `caddy` executable file after you updated to `^2.0.0`.
The default path is `$TMPDIR/caddy`, and if you set `UHRP_CADDY_PATH`, it will be in the path you set.

Please check [caddy path](https://github.com/zcf0508/unplugin-https-reverse-proxy/blob/v1.0.0/src/caddy/constants.ts#L17).

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
