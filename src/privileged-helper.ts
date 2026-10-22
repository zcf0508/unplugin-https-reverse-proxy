import process from 'node:process'
import { startHelper } from './privileged/bootstrap'

interface ParsedArgs {
  socket: string
  token: string
  hosts?: string
  caddyBin: string
  caddyConfig: string
  ownerUid?: number
  ownerGid?: number
  caddyStorage?: string
}

function parseArgs(argv: string[]): ParsedArgs {
  let socket = ''
  let token = ''
  let hosts: string | undefined
  let caddyBin = ''
  let caddyConfig = ''
  let ownerUid: number | undefined
  let ownerGid: number | undefined
  let caddyStorage: string | undefined

  for (let index = 0; index < argv.length; index++) {
    const current = argv[index]
    if (current === '--socket')
      socket = argv[++index] ?? ''
    else if (current === '--token')
      token = argv[++index] ?? ''
    else if (current === '--hosts')
      hosts = argv[++index] ?? undefined
    else if (current === '--caddy')
      caddyBin = argv[++index] ?? ''
    else if (current === '--caddy-config')
      caddyConfig = argv[++index] ?? ''
    else if (current === '--owner-uid')
      ownerUid = Number(argv[++index])
    else if (current === '--owner-gid')
      ownerGid = Number(argv[++index])
    else if (current === '--caddy-storage')
      caddyStorage = argv[++index] ?? undefined
  }

  if (!socket || !token)
    throw new Error('usage: privileged-helper --socket <path> --token <token> --caddy <bin> --caddy-config <path>')
  if (!caddyBin || !caddyConfig)
    throw new Error('privileged-helper requires --caddy and --caddy-config')

  return {
    socket,
    token,
    hosts,
    caddyBin,
    caddyConfig,
    ownerUid: Number.isInteger(ownerUid) ? ownerUid : undefined,
    ownerGid: Number.isInteger(ownerGid) ? ownerGid : undefined,
    caddyStorage,
  }
}

/**
 * Entry point of the process that runs with elevated privileges.
 *
 * It owns no product logic. The Caddy binary and Caddyfile are fixed on the
 * command line, so requests on the socket can only say *when* to act, never
 * what* to execute.
 */
async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2))

  const helper = await startHelper({
    socketPath: args.socket,
    token: args.token,
    hostsPath: args.hosts,
    caddyBin: args.caddyBin,
    caddyConfigPath: args.caddyConfig,
    ownerUid: args.ownerUid,
    ownerGid: args.ownerGid,
    caddyStoragePath: args.caddyStorage,
    caddyEnv: {
      HOME: process.env.HOME ?? '',
      // Keep Caddy's storage next to the invoking user's home even though the
      // process runs as root.
      XDG_DATA_HOME: process.env.XDG_DATA_HOME ?? '',
    },
  })

  // Ctrl+C is delivered to the whole foreground process group. The plugin also
  // receives it and will drop the socket, which is the signal this helper acts
  // on; exiting here would race that cleanup.
  process.on('SIGINT', () => {})

  const shutdown = (): void => {
    void helper.runtime.dispose().finally(() => process.exit(0))
  }

  process.on('SIGTERM', shutdown)
  process.on('SIGHUP', shutdown)

  // A closed stdout (the parent died) must not interrupt the cleanup path.
  process.stdout.on('error', () => {})
  process.stderr.on('error', () => {})
}

main().catch((error: Error) => {
  process.stderr.write(`[uhrp-helper] fatal: ${error.message}\n`)
  process.exit(1)
})
