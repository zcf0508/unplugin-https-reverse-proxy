import type { Stats } from 'node:fs'
import { lstatSync } from 'node:fs'

/**
 * Why a path is refused before the helper runs it.
 *
 * The helper runs as root while the paths come from a process running as the
 * developer. Anything that process, or any other local user, can rewrite after
 * the check would become root-executed code or root-loaded config, so the
 * checks below run once at startup and the result is trusted for the session.
 */
export interface PathRejection {
  path: string
  reason: string
}

export interface PathCheckOptions {
  /**
   * uid allowed to own the path besides root.
   *
   * The helper entry itself lives in the developer's `node_modules`, so the
   * invoking user has to be accepted for the paths that came from there.
   */
  ownerUid?: number
  /** Human-readable role, used in the rejection message. */
  label: string
}

function describe(stats: Stats): string {
  return `uid=${stats.uid} mode=${(stats.mode & 0o777).toString(8)}`
}

/**
 * Rejects a path the helper must not execute or load.
 *
 * Symbolic links are refused outright: the check has to describe the file that
 * will actually be used, and a link can be repointed after the check. Group- or
 * world-writable files are refused because any local user could replace them
 * between the check and the exec.
 */
export function checkPrivilegedPath(
  path: string,
  options: PathCheckOptions,
): PathRejection | undefined {
  let stats: Stats
  try {
    stats = lstatSync(path)
  }
  catch (error) {
    return { path, reason: `${options.label} is not readable: ${(error as Error).message}` }
  }

  if (stats.isSymbolicLink())
    return { path, reason: `${options.label} is a symbolic link (${describe(stats)})` }

  if (!stats.isFile() && !stats.isDirectory())
    return { path, reason: `${options.label} is neither a file nor a directory` }

  const allowedOwner = stats.uid === 0 || (options.ownerUid !== undefined && stats.uid === options.ownerUid)
  if (!allowedOwner)
    return { path, reason: `${options.label} is owned by another user (${describe(stats)})` }

  // Root's own files are fine at 644/755; the point is that no one else can
  // write them.
  if (stats.mode & 0o022)
    return { path, reason: `${options.label} is group- or world-writable (${describe(stats)})` }

  return undefined
}

/** Formats a rejection for the helper log; one place keeps the wording stable. */
export function describeRejection(rejection: PathRejection): string {
  return `refusing to start: ${rejection.reason} (${rejection.path})`
}
