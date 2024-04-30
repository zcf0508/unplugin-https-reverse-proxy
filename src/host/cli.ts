import { runAsAdmin } from '../utils'

export async function addHost(ip: string, host: string) {
  return runAsAdmin(`npx easy-host-cli add --ip ${ip} --host ${host}`, 'addHost')
}

export async function removeHost(ip: string, host: string) {
  return runAsAdmin(`npx easy-host-cli rm --ip ${ip} --host ${host}`, 'removeHost')
}
