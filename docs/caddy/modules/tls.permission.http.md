Title: Module tls.permission.http - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/tls.permission.http

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module tls.permission.http**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.permission.http#docs "Direct link")
--------------------------------------------------------------------------------------------

`{▾	"endpoint": ""}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.permission.http#docs "Direct link")
--------------------------------------------------------------------------------------------

tls.permission.http determines permission for a TLS certificate by making a request to an HTTP endpoint.

[🔗](https://caddyserver.com/docs/modules/tls.permission.http#endpoint)endpoint
The endpoint to access. It should be a full URL. A query string parameter "domain" will be added to it, containing the domain (or IP) for the desired certificate, like so: `?domain=example.com`. Generally, this endpoint is not exposed publicly to avoid a minor information leak (which domains are serviced by your application).

The endpoint must return a 200 OK status if a certificate is allowed; anything else will cause it to be denied. Redirects are not followed.
