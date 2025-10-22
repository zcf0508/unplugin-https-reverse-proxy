Title: Module dynamic_dns.ip_sources.simple_http - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/dynamic_dns.ip_sources.simple_http

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module dynamic_dns.ip_sources.simple_http**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/dynamic_dns.ip_sources.simple_http#docs "Direct link")
-----------------------------------------------------------------------------------------------------------

`{▾	"endpoints": [""]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/mholt/caddy-dynamicdns](https://github.com/mholt/caddy-dynamicdns)**

**Custom builds:**`xcaddy build --with github.com/mholt/caddy-dynamicdns`

Description[🔗](https://caddyserver.com/docs/modules/dynamic_dns.ip_sources.simple_http#docs "Direct link")
-----------------------------------------------------------------------------------------------------------

dynamic_dns.ip_sources.simple_http is an IP source that looks up the public IP addresses by making HTTP(S) requests to the specified endpoints; it will try each endpoint with IPv4 and IPv6 until at least one returns a valid value. It is OK if an endpoint doesn't support both IP versions; returning a single valid IP address is sufficient.

The endpoints must return HTTP status 200 and the response body must contain only the IP address in plain text.

[🔗](https://caddyserver.com/docs/modules/dynamic_dns.ip_sources.simple_http#endpoints)endpoints
The list of endpoints to query. If empty, a default list will be used:

*   [https://api64.ipify.org](https://api64.ipify.org/)
*   [https://myip.addr.space](https://myip.addr.space/)
*   [https://ifconfig.me](https://ifconfig.me/)
*   [https://icanhazip.com](https://icanhazip.com/)
*   [https://ident.me](https://ident.me/)
*   [https://ipecho.net/plain](https://ipecho.net/plain)
