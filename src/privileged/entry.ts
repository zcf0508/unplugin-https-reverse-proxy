import { existsSync } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'

export interface HelperEntry {
  /**
   * Executable started through sudo. This is the node runtime, so the caller
   * only has to append `args` and the helper's own flags.
   */
  entry: string
  /** Script (and loader) arguments that follow the runtime. */
  args: string[]
}

export interface ResolveHelperEntryOptions {
  /** Directory of the running bundle: `dist` in published builds, `src` from source. */
  moduleDir: string
  /** Node executable used to run a compiled helper. */
  nodeBin?: string
  exists?: (path: string) => boolean
}

/**
 * Locates the helper entry next to the running module.
 *
 * Published builds ship a compiled `privileged-helper.js` and start it with
 * node; running from the repository uses `tsx` so the TypeScript source works
 * without a build step.
 */
export function resolveHelperEntry(options: ResolveHelperEntryOptions): HelperEntry {
  const { moduleDir, nodeBin = process.execPath, exists = existsSync } = options

  for (const name of ['privileged-helper.js', 'privileged-helper.cjs', 'privileged-helper.mjs']) {
    const candidate = join(moduleDir, name)
    if (exists(candidate))
      return { entry: nodeBin, args: [candidate] }
  }

  const source = join(moduleDir, 'privileged-helper.ts')
  const tsxCli = join(moduleDir, '../node_modules/tsx/dist/cli.mjs')
  if (exists(source) && exists(tsxCli))
    return { entry: nodeBin, args: [tsxCli, source] }

  throw new Error(`privileged helper entry not found in ${moduleDir}. Build the package first.`)
}
