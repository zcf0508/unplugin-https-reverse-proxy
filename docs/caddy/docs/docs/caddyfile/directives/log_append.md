Title: log_append (Caddyfile directive) - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/directives/log_append

Markdown Content:
log\_append (Caddyfile directive) — Caddy Documentation
===============  

[![Image 6: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg)](https://caddyserver.com/)

Documentation

a [![Image 7](https://caddyserver.com/old/resources/images/zerossl-logo.svg)](https://zerossl.com/) project

[Download](https://caddyserver.com/download) [Documentation](https://caddyserver.com/docs/) [Forum](https://caddy.community/) [GitHub](https://github.com/caddyserver/caddy) [Account](https://caddyserver.com/account/) [**Support**](https://caddyserver.com/support) [Sponsor](https://caddyserver.com/sponsor)

*   [Welcome](https://caddyserver.com/docs/)
*   [Wiki ![Image 8](https://caddyserver.com/old/resources/images/external-link.svg)](https://caddy.community/c/wiki/13) 
*   Get Caddy
*   [Install](https://caddyserver.com/docs/install)
*   [Build from source](https://caddyserver.com/docs/build)
*   Tutorials
*   [Getting Started](https://caddyserver.com/docs/getting-started)
*   [Quick-starts](https://caddyserver.com/docs/quick-starts)
    *   [Using the API](https://caddyserver.com/docs/quick-starts/api)
    *   [Using a Caddyfile](https://caddyserver.com/docs/quick-starts/caddyfile)
    *   [Static files](https://caddyserver.com/docs/quick-starts/static-files)
    *   [Reverse proxy](https://caddyserver.com/docs/quick-starts/reverse-proxy)
    *   [HTTPS](https://caddyserver.com/docs/quick-starts/https)
*   [Caddy API](https://caddyserver.com/docs/api-tutorial)
*   [Caddyfile](https://caddyserver.com/docs/caddyfile-tutorial)
*   Reference
*   [Command Line](https://caddyserver.com/docs/command-line)
*   [API](https://caddyserver.com/docs/api)
*   [Caddyfile](https://caddyserver.com/docs/caddyfile)
    *   [Concepts](https://caddyserver.com/docs/caddyfile/concepts)
    *   [Global options](https://caddyserver.com/docs/caddyfile/options)
    *   [Directives](https://caddyserver.com/docs/caddyfile/directives)
    *   [Request matchers](https://caddyserver.com/docs/caddyfile/matchers)
    *   [Response matchers](https://caddyserver.com/docs/caddyfile/response-matchers)
    *   [Common patterns](https://caddyserver.com/docs/caddyfile/patterns)
*   [Modules](https://caddyserver.com/docs/modules/)
*   [JSON Config Structure](https://caddyserver.com/docs/json/)
*   [Automatic HTTPS](https://caddyserver.com/docs/automatic-https)
*   Articles
*   [Caddy Architecture](https://caddyserver.com/docs/architecture)
*   [Conventions](https://caddyserver.com/docs/conventions)
*   [Config Adapters](https://caddyserver.com/docs/config-adapters)
*   [Keep Caddy Running](https://caddyserver.com/docs/running)
*   [How Logging Works](https://caddyserver.com/docs/logging)
*   [Monitoring Caddy](https://caddyserver.com/docs/metrics)
*   [Profiling Caddy](https://caddyserver.com/docs/profiling)
*   [Verifying Asset Signatures](https://caddyserver.com/docs/signature-verification)
*   [Upgrading to Caddy 2](https://caddyserver.com/docs/v2-upgrade)
*   Developers
*   [Extending Caddy](https://caddyserver.com/docs/extending-caddy)
    *   [Caddyfile Support](https://caddyserver.com/docs/extending-caddy/caddyfile)
    *   [Config Adapters](https://caddyserver.com/docs/extending-caddy/config-adapters)
    *   [Placeholders](https://caddyserver.com/docs/extending-caddy/placeholders)
*   [Module Namespaces](https://caddyserver.com/docs/extending-caddy/namespaces)
  
*   [v1 Docs ![Image 9](https://caddyserver.com/old/resources/images/external-link.svg)](https://caddyserver.com/caddy-v1-docs-archive.tar.gz) 

log\_append
===========

Appends a field to the access log for the current request.

This should be used alongside the [`log` directive](https://caddyserver.com/docs/caddyfile/directives/log) which is required to enable access logging in the first place.

The value may be a static string, or a [placeholder](https://caddyserver.com/docs/caddyfile/concepts#placeholders) which will be replaced with the value of the placeholder at the time of the request.

Syntax
------

```
log_append [<matcher>] <key> <value>
```

Examples
--------

Display in the logs the area of the site that the request is being served from, either `static` or `dynamic`:

```
example.com {
	log

	handle /static* {
		log_append area "static"
		respond "Static response!"
	}

	handle {
		log_append area "dynamic"
		reverse_proxy localhost:9000
	}
}
```

Display in the logs, which reverse proxy upstream was effectively used (either `node1`, `node2` or `node3`) and the time spent proxying to the upstream in milliseconds as well as how long it took the proxy upstream to write the response header:

```
example.com {
	log

	handle {
		reverse_proxy node1:80 node2:80 node3:80 {
			lb_policy random_choose 2 
		}
		log_append upstream_host {rp.upstream.host}
		log_append upstream_duration_ms {rp.upstream.duration_ms}
		log_append upstream_latency_ms {rp.upstream.latency_ms}
	}
}
```

![Image 10: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project  
in partnership with [Ardan Labs](https://www.ardanlabs.com/)  
[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

© 2024 ZeroSSL. All rights reserved.  
Caddy® is a registered trademark of ZeroSSL GmbH.
