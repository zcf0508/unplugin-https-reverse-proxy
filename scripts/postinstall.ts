import { existsSync, unlinkSync } from 'node:fs'
import { CaddyInstant } from '../src/caddy'
import { caddyPath } from '../src/caddy/constants'

async function run() {
  existsSync(caddyPath) && unlinkSync(caddyPath)
  try {
    const caddy = new CaddyInstant()
    await caddy.init()
  }
  catch (e) {
    console.error(e)
  }
}

run()
