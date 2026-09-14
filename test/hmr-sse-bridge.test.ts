import { runInNewContext } from 'node:vm'
import { describe, expect, it } from 'vitest'
import { hmrSseBridgeClientScript, shouldUseHmrSseBridge } from '../src/hmr-sse-bridge'

const userAgents = {
  macosSafari: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Safari/605.1.15',
  iphoneSafari: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Mobile/15E148 Safari/604.1',
  ipadSafari: 'Mozilla/5.0 (iPad; CPU OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Mobile/15E148 Safari/604.1',
  macosChrome: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
  iphoneChrome: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/140.0.0.0 Mobile/15E148 Safari/604.1',
  macosFirefox: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:142.0) Gecko/20100101 Firefox/142.0',
  windowsSafari: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2',
}

describe('shouldUseHmrSseBridge', () => {
  it('only enables the bridge for Safari on macOS and iOS over HTTPS', () => {
    const result = Object.fromEntries(
      Object.entries(userAgents).map(([browser, userAgent]) => [
        browser,
        shouldUseHmrSseBridge('https:', userAgent),
      ]),
    )

    expect(result).toMatchInlineSnapshot(`
      {
        "ipadSafari": true,
        "iphoneChrome": false,
        "iphoneSafari": true,
        "macosChrome": false,
        "macosFirefox": false,
        "macosSafari": true,
        "windowsSafari": false,
      }
    `)
  })

  it('keeps native WebSocket on HTTP', () => {
    expect(shouldUseHmrSseBridge('http:', userAgents.macosSafari)).toBe(false)
  })

  it('uses the same guard in the injected client script', () => {
    function isWebSocketPatched(userAgent: string): boolean {
      const OriginalWebSocket = function WebSocket() {}
      const context = {
        location: { protocol: 'https:' },
        navigator: { userAgent },
        window: { WebSocket: OriginalWebSocket },
      }

      runInNewContext(hmrSseBridgeClientScript, context)

      return context.window.WebSocket !== OriginalWebSocket
    }

    expect({
      macosChrome: isWebSocketPatched(userAgents.macosChrome),
      macosSafari: isWebSocketPatched(userAgents.macosSafari),
    }).toMatchInlineSnapshot(`
      {
        "macosChrome": false,
        "macosSafari": true,
      }
    `)
  })
})
