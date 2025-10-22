Title: Module caddy.listeners.http_redirect - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.listeners.http_redirect

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module caddy.listeners.http_redirect**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.listeners.http_redirect#docs "Direct link")
------------------------------------------------------------------------------------------------------

`{▾	"max_header_bytes": 0}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.listeners.http_redirect#docs "Direct link")
------------------------------------------------------------------------------------------------------

caddy.listeners.http_redirect provides HTTP->HTTPS redirects for connections that come on the TLS port as an HTTP request, by detecting using the first few bytes that it's not a TLS handshake, but instead an HTTP request.

This is especially useful when using a non-standard HTTPS port. A user may simply type the address in their browser without the https:// scheme, which would cause the browser to attempt the connection over HTTP, but this would cause a "Client sent an HTTP request to an HTTPS server" error response.

This listener wrapper must be placed BEFORE the "tls" listener wrapper, for it to work properly.

MaxHeaderBytes is the maximum size to parse from a client's HTTP request headers. Default: 1 MB
