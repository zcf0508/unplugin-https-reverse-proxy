import { existsSync, unlinkSync } from 'node:fs'
import process from 'node:process'
import { consola } from '../src/utils'
import { download } from '../src/caddy'
import { caddyPath } from '../src/caddy/constants'

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
