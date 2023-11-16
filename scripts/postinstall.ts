import { existsSync, unlinkSync } from 'node:fs'
import { download } from '../src/caddy'
import { caddyPath } from '../src/caddy/constants'

async function run() {
  existsSync(caddyPath) && unlinkSync(caddyPath)
  try {
    await download()
  }
  catch (e: any) {
    console.log(e.code)
  }
}

run()
