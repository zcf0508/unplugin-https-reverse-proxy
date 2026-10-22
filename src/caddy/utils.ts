import ora from 'ora'
import { consola } from '../utils'

let spinner: ora.Ora

function getNumber(number: number): string {
  if (number <= 0)
    return '0%'
  else if (number < 100)
    return `${number.toFixed(2)}%`
  else
    return '100%'
}

export function logProgress(percent: number | string): void {
  if (!spinner) {
    // empty a line before start
    consola.log('')
    spinner = ora({
      text: 'Start Download Caddy: 0%',
      indent: 2,
    })
    spinner.start()
  }
  else { spinner.text = `Download Caddy: ${getNumber(Number(percent) * 100)}` }
}

export function logProgressOver(): void {
  if (!spinner) {
    spinner = ora({
      text: 'Start Download Caddy: 100%',
      indent: 2,
    })
    spinner.start()
  }
  else {
    spinner.succeed()
    // empty a line after succeed
    consola.log('')
  }
}
