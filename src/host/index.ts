import process from 'node:process'
import { exec } from 'node:child_process'
import { chmodSync } from 'node:fs'

// @ts-expect-error no type
import _Hosts from 'hosts-so-easy'

const Hosts = _Hosts.default || _Hosts

const hostInstance = new Hosts({
  debounceTime: 50,
  hostsFile: getPathOfSystemHostsPath(),
})

function getPathOfSystemHostsPath() {
  return process.platform === 'win32'
    ? `${process.env.windir || 'C:\\WINDOWS'}\\system32\\drivers\\etc\\hosts`
    : '/etc/hosts'
}

async function syncHost() {
  return new Promise<boolean>((resolve, reject) => {
    exec(
      process.platform === 'win32'
        ? 'ipconfig /flushdns'
        : 'sudo -E killall -HUP mDNSResponder',
      (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`)
          return resolve(false)
        }
        return resolve(true)
      })
  })
}

export async function addHost(ip: string, host: string) {
  if (process.platform !== 'win32')
    chmodSync(getPathOfSystemHostsPath(), 0o777)
  hostInstance.add('127.0.0.1', 'localhost')
  hostInstance.add(ip, host)
  await hostInstance.updateFinish()
  return await syncHost()
}

export async function removeHost(ip: string, host: string) {
  if (process.platform !== 'win32')
    chmodSync(getPathOfSystemHostsPath(), 0o777)
  hostInstance.remove(ip, host)
  if (ip === 'localhost')
    hostInstance.remove('127.0.0.1', host)
  await hostInstance.updateFinish()
  return await syncHost()
}
