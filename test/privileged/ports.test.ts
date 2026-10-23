import { describe, expect, it } from 'vitest'
import { parseListeningPids, parseWindowsListeningPids } from '../../src/privileged/ports'

describe('parseListeningPids', () => {
  it('reads one pid per line', () => {
    expect(parseListeningPids('123\n456\n')).toEqual([123, 456])
  })

  it('ignores noise and duplicates', () => {
    expect(parseListeningPids('  789 \n\n789\nnot-a-pid\n')).toEqual([789])
  })

  it('returns nothing for empty output', () => {
    expect(parseListeningPids('')).toEqual([])
  })
})

describe('parseWindowsListeningPids', () => {
  const output = [
    'Active Connections',
    '',
    '  Proto  Local Address          Foreign Address        State           PID',
    '  TCP    0.0.0.0:443            0.0.0.0:0              LISTENING       4321',
    '  TCP    [::]:443               [::]:0                 LISTENING       4321',
    '  TCP    0.0.0.0:8080           0.0.0.0:0              LISTENING       9999',
    '  TCP    127.0.0.1:5000         127.0.0.1:6000         ESTABLISHED     1234',
    '  UDP    0.0.0.0:443            *:*                                    5555',
  ].join('\r\n')

  it('returns only the owners of the requested listening port', () => {
    expect(parseWindowsListeningPids(output, 443)).toEqual([4321])
  })

  it('ignores other ports and non-listening sockets', () => {
    expect(parseWindowsListeningPids(output, 5000)).toEqual([])
    expect(parseWindowsListeningPids(output, 8080)).toEqual([9999])
  })
})
