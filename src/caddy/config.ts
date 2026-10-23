import type { ProxyType } from './caddyfile'
import { existsSync, readFileSync, renameSync, unlinkSync, writeFileSync } from 'node:fs'
import process from 'node:process'
import * as lockfile from 'proper-lockfile'
import { caddyConfigPath } from './constants'

/** One project's route, plus the pid that owns it. */
type ProxyEntry = typeof ProxyType.infer & { ownerPid?: number }

type ProxyMap = Record<string, ProxyEntry>

/**
 * A file lock held around every read-modify-write of the shared config.
 *
 * Several dev servers run as independent processes, so a read-then-write from
 * two of them can interleave and drop an entry. Synchronous calls are only
 * atomic within one event loop, which is why the lock has to be a real file
 * lock rather than an in-process queue.
 */
interface ConfigLock {
  acquire: () => Promise<() => void>
}

export interface CaddyConfigApi {
  configJsonRef: () => ProxyMap | undefined
  /** Adds or replaces this project's routes, keeping everyone else's. */
  writeCaddyConfig: (proxies: Array<typeof ProxyType.infer>, key: string) => Promise<void>
  /** Drops one project's routes; the file goes away when nothing is left. */
  removeProxy: (key: string) => Promise<void>
  /** Reads the routes currently on disk, for regenerating the Caddyfile. */
  readProxies: () => ProxyMap
  cleanUp: () => Promise<void>
}

/** Owner pids that have exited can never clean up after themselves. */
function isAlive(pid: number | undefined): boolean {
  if (pid === undefined)
    return true
  try {
    process.kill(pid, 0)
    return true
  }
  catch {
    return false
  }
}

/**
 * Reads the shared config, dropping entries whose owner process is gone.
 *
 * A SIGKILLed dev server cannot remove its own route, so without this sweep its
 * domain would keep resolving to a proxy with no upstream behind it.
 */
function readConfig(): ProxyMap {
  if (!existsSync(caddyConfigPath))
    return {}

  let parsed: ProxyMap
  try {
    parsed = JSON.parse(readFileSync(caddyConfigPath, 'utf-8')) as ProxyMap
  }
  catch {
    // A half-written file is not worth preserving: it has no usable routes.
    return {}
  }

  const alive: ProxyMap = {}
  for (const [key, entry] of Object.entries(parsed)) {
    if (isAlive(entry?.ownerPid))
      alive[key] = entry
  }
  return alive
}

/**
 * Writes through a temporary file so a concurrent reader never sees a partial
 * document. `rename` is atomic within a filesystem, which keeps the shared
 * config readable at all times.
 */
function writeConfig(proxies: ProxyMap): void {
  const content = JSON.stringify(proxies, null, 2)
  const temp = `${caddyConfigPath}.${process.pid}.tmp`
  writeFileSync(temp, content)
  renameSync(temp, caddyConfigPath)
}

export interface CaddyConfigOptions {
  /** Injected in tests so they do not need the real lock. */
  lock?: ConfigLock
  /**
   * Renders the Caddyfile from the routes, called inside the config lock.
   *
   * Rendering here rather than in the caller is what keeps the file in step
   * with the JSON: two projects writing concurrently would otherwise render
   * from their own stale view and the later write would win.
   */
  renderCaddyfile?: (proxies: ProxyMap) => Promise<void>
}

export function useCaddyConfig(options: CaddyConfigOptions = {}): CaddyConfigApi {
  const lock = options.lock ?? createFileLock()

  /**
   * Applies the change, then re-renders while still holding the lock.
   *
   * The Caddyfile has to follow every change: leaving a stopped project's site
   * in it would keep proxying to an upstream that is gone. Doing it inside the
   * lock also picks up routes whose owner process died, since `readConfig`
   * drops those.
   */
  async function mutate(
    apply: (proxies: ProxyMap) => void,
  ): Promise<ProxyMap> {
    const release = await lock.acquire()
    try {
      const proxies = readConfig()
      apply(proxies)
      writeConfig(proxies)
      await options.renderCaddyfile?.(proxies)
      return proxies
    }
    finally {
      release()
    }
  }

  return {
    configJsonRef: () => (existsSync(caddyConfigPath) ? readConfig() : undefined),

    async writeCaddyConfig(_proxies, key) {
      await mutate((proxies) => {
        for (const p of _proxies)
          proxies[routeKey(p, key)] = { ...p, base: normalizeBase(p.base), ownerPid: process.pid }
      })
    },

    async removeProxy(key) {
      const proxies = await mutate((current) => {
        for (const route of Object.keys(current)) {
          if (route.endsWith(`#${key}`))
            delete current[route]
        }
      })

      if (Object.keys(proxies).length === 0)
        removeConfigFile()
    },

    readProxies: () => readConfig(),

    async cleanUp() {
      removeConfigFile()
    },
  }
}

function removeConfigFile(): void {
  try {
    if (existsSync(caddyConfigPath))
      unlinkSync(caddyConfigPath)
  }
  catch {}
}

function normalizeBase(base: string | undefined): string {
  let out = base || '/'
  if (!out.startsWith('/'))
    out = `/${out}`
  if (out !== '/' && !out.endsWith('/'))
    out = `${out}/`
  return out
}

/**
 * Route key: the domain it answers on, plus the owning project.
 *
 * Two projects can legitimately serve the same domain on different bases, so
 * the key has to carry the base as well as the owner.
 */
export function routeKey(proxy: typeof ProxyType.infer, ownerKey: string): string {
  return `${proxy.target}${proxy.portSuffix}${normalizeBase(proxy.base)}#${ownerKey}`
}

/**
 * Builds the on-disk lock.
 *
 * `proper-lockfile` retries because the winner may hold the lock for a moment;
 * `realpath: false` keeps it working when the temp directory is a symlink.
 */
function createFileLock(): ConfigLock {
  return {
    async acquire() {
      if (!existsSync(caddyConfigPath))
        writeFileSync(caddyConfigPath, '{}')

      const release = await lockfile.lock(caddyConfigPath, {
        realpath: false,
        stale: 10_000,
        retries: { retries: 20, minTimeout: 10, maxTimeout: 100 },
      })
      return () => {
        void release().catch(() => {})
      }
    },
  }
}
