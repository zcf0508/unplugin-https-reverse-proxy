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

{% for p in proxies %}
{{ p.target }}{{ p.portSuffix }} {
  {{ p.tls }}
  reverse_proxy http://{{ p.source }} {% if p.healthCheck %} {
    health_uri {{ p.base }}
    health_interval 2s
    health_timeout 5s
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
`

const liquid = new Liquid()

export async function genCaddyfile(ctx: typeof CaddyContext.infer): Promise<string> {
  return await liquid.parseAndRender(caddyTemplate, ctx)
}
