import { exec } from 'node:child_process'
import { chmodSync } from 'node:fs'
import process from 'node:process'
import { promisify } from 'node:util'

import hostile from 'hostile'
import { consola } from '../utils'

const _setHost = promisify(hostile.set)
const _removeHost = promisify(hostile.remove)

function getPathOfSystemHostsPath(): string {
  return process.platform === 'win32'
    ? `${process.env.windir || 'C:\\WINDOWS'}\\system32\\drivers\\etc\\hosts`
    : '/etc/hosts'
}

async function syncHost(): Promise<boolean> {
  return new Promise<boolean>((resolve, _reject) => {
    exec(
      process.platform === 'win32'
        ? 'ipconfig /flushdns'
        : 'sudo -E killall -HUP mDNSResponder',
      (error, _stdout, _stderr) => {
        if (error) {
          consola.error(`exec error: ${error}`)
          return resolve(false)
        }
        return resolve(true)
      },
    )
  })
}

export async function addHost(ip: string, host: string): Promise<boolean> {
  if (process.platform !== 'win32')
    chmodSync(getPathOfSystemHostsPath(), 0o777)
  await _setHost('127.0.0.1', 'localhost')
  await _setHost(ip, host)
  if (ip === 'localhost')
    await _setHost('127.0.0.1', host)
  return await syncHost()
}

export async function removeHost(ip: string, host: string): Promise<boolean> {
  if (process.platform !== 'win32')
    chmodSync(getPathOfSystemHostsPath(), 0o777)
  await _removeHost(ip, host)
  if (ip === 'localhost')
    await _removeHost('127.0.0.1', host)
  return await syncHost()
}
