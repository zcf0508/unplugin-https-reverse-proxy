import { type } from 'arktype'
import { Liquid } from 'liquidjs'

export const ProxyType = type({
  target: 'string',
  portSuffix: 'string',
  tls: 'string',
  source: 'string',
  base: 'string',
  healthCheck: 'boolean',
})

const CaddyContext = type({
  caddy_root: 'string',
  proxies: ProxyType.array(),
})

export function validateTemplateContext(ctx: unknown): typeof CaddyContext.infer {
  const out = CaddyContext(ctx as any)
  if (out instanceof type.errors)
    throw new Error(out.summary)

  return ctx as typeof CaddyContext.infer
}

export const caddyTemplate = `{
  debug
  auto_https disable_redirects
}

:7601 {
  root * "{{ caddy_root }}"
  file_server browse
}

# 正向代理配置
:7600 {
  bind 0.0.0.0
  
  forward_proxy {
    hide_ip
    hide_via
    acl {
      allow all
    }
  }
}

{% for host in hosts %}
{{ host.host }}{{ host.portSuffix }} {
  {{ host.tls }}

  {% for route in host.routes %}
  handle {{ route.base }}* {
    reverse_proxy http://{{ route.source }} {% if route.healthCheck %} {
      health_uri {{ route.base }}
      health_interval 2s
      health_timeout 5s
      health_headers {
        User-Agent {http.request.header.User-Agent}
        Accept text/html,application/json,*/*
      }
      fail_duration 2s
      unhealthy_status 502 503 504 404
      lb_try_duration 3s
      lb_try_interval 300ms

      @error status 502 503 504 404
      handle_response @error {
        respond * 503 {
          body "Service Unavailable"
          close
        }
      }
    }
    {% endif %}
  }
  {% endfor %}
}
{% endfor %}
`

const liquid = new Liquid()

export async function genCaddyfile(ctx: typeof CaddyContext.infer): Promise<string> {
  const hostsMap = new Map<string, {
    host: string
    portSuffix: string
    tls: string
    routes: typeof ProxyType.infer[]
  }>()

  for (const proxy of ctx.proxies) {
    const key = `${proxy.target}${proxy.portSuffix}`
    if (!hostsMap.has(key)) {
      hostsMap.set(key, {
        host: proxy.target,
        portSuffix: proxy.portSuffix,
        tls: proxy.tls,
        routes: [],
      })
    }
    let base = proxy.base || '/'
    if (!base.startsWith('/'))
      base = `/${base}`
    if (base !== '/' && !base.endsWith('/'))
      base = `${base}/`
    hostsMap.get(key)!.routes.push({ ...proxy, base })
  }

  for (const host of hostsMap.values())
    host.routes.sort((a, b) => b.base.length - a.base.length)

  const hosts = Array.from(hostsMap.values())

  return await liquid.parseAndRender(caddyTemplate, { ...ctx, hosts })
}
