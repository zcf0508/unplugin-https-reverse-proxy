Title: Module http.handlers.geoip2 - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.geoip2

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.geoip2**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.geoip2#docs "Direct link")
---------------------------------------------------------------------------------------------

`{▾	"enable": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/zhangjiayin/caddy-geoip2](https://github.com/zhangjiayin/caddy-geoip2)**

**Custom builds:**`xcaddy build --with github.com/zhangjiayin/caddy-geoip2`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.geoip2#docs "Direct link")
---------------------------------------------------------------------------------------------

http.handlers.geoip2 is an GeoIP2 server handler. it uses GeoIP2 Data to identify the location of the IP

[🔗](https://caddyserver.com/docs/modules/http.handlers.geoip2#enable)enable
strict: only use remote IP address wild: use X-Forwarded-For if it exists trusted_proxies: use X-Forwarded-For if exists when trusted_proxies if valid default:trusted_proxies
