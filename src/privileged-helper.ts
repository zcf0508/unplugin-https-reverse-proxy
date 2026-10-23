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
  caddyAdmin?: string
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
  let caddyAdmin: string | undefined

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
    else if (current === '--caddy-admin')
      caddyAdmin = argv[++index] ?? undefined
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
    caddyAdmin,
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
    caddyAdminSocket: args.caddyAdmin,
    caddyEnv: {
      HOME: process.env.HOME ?? '',
      // Keep Caddy's storage next to the invoking user's home even though the
      // process runs as root.
      XDG_DATA_HOME: process.env.XDG_DATA_HOME ?? '',
    },
  })

  // Terminal signals reach the whole foreground process group, so they also hit
  // this helper when one of several dev servers stops. Acting on them would tear
  // down the shared Caddy and hosts entries the remaining projects still use.
  // The socket closing is the only signal this helper acts on.
  //
  // Ctrl+C, Ctrl+\, Ctrl+Z and a terminal closing all arrive this way: SIGINT,
  // SIGQUIT, SIGTSTP and SIGHUP. Ignoring SIGTSTP also keeps the helper from
  // being suspended, which would stall every attached project's RPC.
  for (const signal of ['SIGINT', 'SIGQUIT', 'SIGTSTP', 'SIGHUP'] as const)
    process.on(signal, () => {})

  // SIGTERM is different: IDE and process-tree runners send it to shut the tool
  // down for real. It still must not drop a live session, so it only tears down
  // when no dev server is attached.
  process.on('SIGTERM', () => {
    if (helper.runtime.clientCount() > 0)
      return
    void helper.runtime.dispose().finally(() => process.exit(0))
  })

  // A closed stdout (the parent died) must not interrupt the cleanup path.
  process.stdout.on('error', () => {})
  process.stderr.on('error', () => {})
}

main().catch((error: Error) => {
  process.stderr.write(`[uhrp-helper] fatal: ${error.message}\n`)
  process.exit(1)
})
