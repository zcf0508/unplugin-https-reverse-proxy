Title: request_header (Caddyfile directive) - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/directives/request_header

Markdown Content:
request\_header (Caddyfile directive) — Caddy Documentation
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

request\_header
===============

Manipulates HTTP header fields on the request. It can set, add, and delete header values, or perform replacements using regular expressions.

If you intend to manipulate headers for proxying, use the [`header_up` subdirective](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy#header_up) of `reverse_proxy` instead, as those manipulations are proxy-aware.

To manipulate HTTP response headers, you may use the [`header`](https://caddyserver.com/docs/caddyfile/directives/header) directive.

Syntax
------

```
request_header [<matcher>] [[+|-]<field> [<value>|<find>] [<replace>]]
```

*   **<field\>** is the name of the header field.
    
    With no prefix, the field is set (overwritten).
    
    Prefix with `+` to add the field instead of overwriting (setting) the field if it already exists; header fields can appear more than once in a request.
    
    Prefix with `-` to delete the field. The field may use prefix or suffix `*` wildcards to delete all matching fields.
    
*   **<value\>** is the header field value, if adding or setting a field.
    
*   **<find\>** is the substring or regular expression to search for.
    
*   **<replace\>** is the replacement value; required if performing a search-and-replace.
    

Examples
--------

Remove the Referer header from the request:

```
request_header -Referer
```

Delete all headers containing an underscore from the request:

```
request_header -*_*
```

![Image 10: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project  
in partnership with [Ardan Labs](https://www.ardanlabs.com/)  
[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

© 2024 ZeroSSL. All rights reserved.  
Caddy® is a registered trademark of ZeroSSL GmbH.
