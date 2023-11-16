import { existsSync, unlinkSync } from 'node:fs'
import { consola } from '../src/utils'
import { download } from '../src/caddy'
import { caddyPath } from '../src/caddy/constants'

async function run() {
  try {
    existsSync(caddyPath) && unlinkSync(caddyPath)
    await download()
  }
  catch (e: any) {
    consola.error(e.code)
  }
}

run()
