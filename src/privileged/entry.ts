import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
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
 *
 * The running module sits in a subdirectory (`src/caddy`, `src/privileged`),
 * while the helper lives one level up in `src`, so both lookups walk up instead
 * of assuming a fixed depth.
 */
export function resolveHelperEntry(options: ResolveHelperEntryOptions): HelperEntry {
  const { moduleDir, nodeBin = process.execPath, exists = existsSync } = options

  for (const name of ['privileged-helper.js', 'privileged-helper.cjs', 'privileged-helper.mjs']) {
    const candidate = findUp(moduleDir, name, exists)
    if (candidate)
      return { entry: nodeBin, args: [candidate] }
  }

  const source = findUp(moduleDir, 'privileged-helper.ts', exists)
  const tsxCli = findUp(moduleDir, 'node_modules/tsx/dist/cli.mjs', exists)
  if (source && tsxCli)
    return { entry: nodeBin, args: [tsxCli, source] }

  throw new Error(`privileged helper entry not found in ${moduleDir}. Build the package first.`)
}

/**
 * Walks up from `from` looking for a relative path.
 *
 * Stops at the filesystem root so a helper outside the project is never picked
 * up by accident.
 */
function findUp(
  from: string,
  relative: string,
  exists: (path: string) => boolean,
): string | undefined {
  let current = from
  while (true) {
    const candidate = join(current, relative)
    if (exists(candidate))
      return candidate

    const parent = dirname(current)
    if (parent === current)
      return undefined
    current = parent
  }
}
