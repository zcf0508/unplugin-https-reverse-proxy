import type { ProxyType } from '../../src/caddy/caddyfile'
import type { CaddyConfigApi } from '../../src/caddy/config'

type Proxy = typeof ProxyType.infer

/**
 * In-memory stand-in for the shared route config.
 *
 * The real one takes a file lock, which a unit test has no reason to exercise;
 * what the plugin decides (which routes it writes and which it removes) is what
 * these tests are about.
 */
export function createFakeConfig(): CaddyConfigApi & { proxies: Record<string, Proxy & { ownerPid?: number }> } {
  const proxies: Record<string, Proxy & { ownerPid?: number }> = {}

  return {
    proxies,
    configJsonRef: () => proxies,
    async writeCaddyConfig(entries, key) {
      for (const entry of entries) {
        const base = entry.base?.endsWith('/') ? entry.base : `${entry.base ?? '/'}/`
        proxies[`${entry.target}${entry.portSuffix}${base}#${key}`] = { ...entry, base }
      }
    },
    async removeProxy(key) {
      for (const route of Object.keys(proxies)) {
        if (route.endsWith(`#${key}`))
          delete proxies[route]
      }
    },
    readProxies: () => proxies,
    async cleanUp() {
      for (const route of Object.keys(proxies))
        delete proxies[route]
    },
  }
}
