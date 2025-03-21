import { existsSync, unlinkSync } from 'node:fs'
import process from 'node:process'
import { caddyPath, consola, download } from 'unplugin-https-reverse-proxy'

async function run() {
  try {
    if (process.env.UHRP_AUTO_INSTALL_CADDY) {
      existsSync(caddyPath) && unlinkSync(caddyPath)
      await download()
    }
  }
  catch (e: any) {
    consola.error(e.code)
  }
}

run()
