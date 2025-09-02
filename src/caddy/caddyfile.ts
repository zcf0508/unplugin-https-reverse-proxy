import { type } from 'arktype'

const ProxyType = type({
  target: 'string',
  port_suffix: 'string',
  tls: 'string',
  source: 'string',
  base: 'string',
})

const CaddyContext = type({
  include_base: 'boolean',
  caddy_root: 'string?',

  proxies: ProxyType.array(),
}).narrow((data, ctx) => {
  if (data.include_base && (!data.caddy_root || data.caddy_root.length === 0)) {
    return ctx.reject({ expected: 'non-empty caddy_root when include_base is true', actual: String(data.caddy_root) })
  }
  return true
})

export function validateTemplateContext(ctx: unknown): void {
  const out = CaddyContext(ctx as any)
  if (out instanceof type.errors)
    throw new Error(out.summary)
}

export const caddyTemplate = `{% if include_base %}{
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
{% endif %}

{% for p in proxies %}
{{ p.target }}{{ p.port_suffix }} {
  {{ p.tls }}
  reverse_proxy http://{{ p.source }} {
    health_uri {{ p.base }}
    health_interval 2s
    health_timeout 5s
    fail_duration 2s
    unhealthy_status 502 503 504 404
    lb_try_duration 3s
    lb_try_interval 300ms
    health_headers {
      Accept text/html
      Accept-Encoding gzip, deflate, br
      User-Agent Caddy-Health-Check
    }

    @error status 502 503 504 404
    handle_response @error {
      respond * 503 {
        body "Service Unavailable"
        close
      }
    }
  }
}
{% endfor %}
`
