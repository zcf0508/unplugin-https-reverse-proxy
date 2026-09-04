interface CaddyLogEntry {
  error?: unknown
  logger?: unknown
}

export function isCaddyReloadCancellation(line: string): boolean {
  try {
    const entry = JSON.parse(line) as CaddyLogEntry
    return entry.logger === 'tls'
      && typeof entry.error === 'string'
      && entry.error.endsWith('context canceled')
  }
  catch {
    return false
  }
}
