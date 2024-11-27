Title: redir (Caddyfile directive) - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/directives/redir

Markdown Content:
redir (Caddyfile directive) — Caddy Documentation
===============  

[![Image 8: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg)](https://caddyserver.com/)

Documentation

a [![Image 9](https://caddyserver.com/old/resources/images/zerossl-logo.svg)](https://zerossl.com/) project

[Download](https://caddyserver.com/download) [Documentation](https://caddyserver.com/docs/) [Forum](https://caddy.community/) [GitHub](https://github.com/caddyserver/caddy) [Account](https://caddyserver.com/account/) [**Support**](https://caddyserver.com/support) [Sponsor](https://caddyserver.com/sponsor)

*   [Welcome](https://caddyserver.com/docs/)
*   [Wiki ![Image 10](https://caddyserver.com/old/resources/images/external-link.svg)](https://caddy.community/c/wiki/13) 
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
  
*   [v1 Docs ![Image 11](https://caddyserver.com/old/resources/images/external-link.svg)](https://caddyserver.com/caddy-v1-docs-archive.tar.gz) 

redir
=====

Issues an HTTP redirect to the client.

This directive implies that a matched request is to be rejected as-is, and the client should try again at a different URL. For that reason, its [directive order](https://caddyserver.com/docs/caddyfile/directives#directive-order) is very early.

Syntax
------

```
redir [<matcher>] <to> [<code>]
```

*   **<to\>** is the target location. Becomes the response's [`Location` header ![Image 12](https://caddyserver.com/old/resources/images/external-link.svg)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location) .
    
*   **<code\>** is the HTTP status code to use for the redirect. Can be:
    
    *   A positive integer in the `3xx` range, or `401`
        
    *   `temporary` for a temporary redirect (`302`, this is the default)
        
    *   `permanent` for a permanent redirect (`301`)
        
    *   `html` to use an HTML document to perform the redirect (useful for redirecting browsers but not API clients)
        
    *   A placeholder with a status code value
        

Examples
--------

Redirect all requests to `https://example.com`:

```
www.example.com {
	redir https://example.com
}
```

Same, but preserve the existing URI by appending the [`{uri}` placeholder](https://caddyserver.com/docs/caddyfile/concepts#placeholders):

```
www.example.com {
	redir https://example.com{uri}
}
```

Same, but permanent:

```
www.example.com {
	redir https://example.com{uri} permanent
}
```

Redirect your old `/about-us` page to your new `/about` page:

```
example.com {
	redir /about-us /about
	reverse_proxy localhost:9000
}
```

![Image 13: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project  
in partnership with [Ardan Labs](https://www.ardanlabs.com/)  
[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

© 2024 ZeroSSL. All rights reserved.  
Caddy® is a registered trademark of ZeroSSL GmbH.
