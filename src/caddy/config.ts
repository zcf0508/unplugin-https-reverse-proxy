import type { ProxyType } from './caddyfile'
import { existsSync, readFileSync, watch, writeFileSync } from 'node:fs'
import { unlink } from 'node:fs/promises'
import { computed, signal } from 'alien-signals'
import { caddyConfigPath } from './constants'

export function useCaddyConfig(): {
  configJsonRef: () => (Record<string, typeof ProxyType.infer> | undefined)
  writeCaddyConfig: (proxies: Array<typeof ProxyType.infer>) => void
  cleanUp: () => Promise<void>
} {
  const configContentRef = signal('{}')

  const configJsonRef = computed(() => {
    try {
      return JSON.parse(configContentRef()) as Record<string, typeof ProxyType.infer>
    }
    catch {
      return undefined
    }
  })

  function setConfigContent(): void {
    if (!existsSync(caddyConfigPath)) {
      writeFileSync(caddyConfigPath, '{}')
    }
    try {
      configContentRef(readFileSync(caddyConfigPath, 'utf-8'))
    }
    catch {
      configContentRef('')
    }
  }

  if (!existsSync(caddyConfigPath)) {
    writeFileSync(caddyConfigPath, '{}')
  }

  const watchCaddyConfig = watch(caddyConfigPath, () => {
    setConfigContent()
  })

  function writeCaddyConfig(_proxies: Array<typeof ProxyType.infer>): void {
    const proxies = configJsonRef() || {}

    _proxies.forEach((p) => {
      const index = `${p.target}${p.port_suffix}`
      proxies[index] = p
    })

    const content = JSON.stringify(proxies, null, 2)
    configContentRef(content)
    return writeFileSync(caddyConfigPath, content)
  }

  async function cleanUp(): Promise<void> {
    await unlink(caddyConfigPath).catch(() => { })
    configContentRef('{}')
    watchCaddyConfig.close()
  }

  return {
    configJsonRef,
    writeCaddyConfig,
    cleanUp,
  }
}
