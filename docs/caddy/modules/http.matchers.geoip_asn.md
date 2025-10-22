Title: Module http.matchers.geoip_asn - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.matchers.geoip_asn

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.matchers.geoip_asn**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.geoip_asn#docs "Direct link")
------------------------------------------------------------------------------------------------

`{▾	"numbers": [0]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://git.gorbe.io/caddy/geoip.git](https://git.gorbe.io/caddy/geoip.git)**

**Custom builds:**`xcaddy build --with git.gorbe.io/caddy/geoip`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.geoip_asn#docs "Direct link")
------------------------------------------------------------------------------------------------

http.matchers.geoip_asn matches requests by the client_ip GeoIP ASN.

Caddyfile syntax:

```
@asn-matcher geoip_asn "24940"
respond @asn-matcher "Hetzner Online GmbH"
```

[🔗](https://caddyserver.com/docs/modules/http.matchers.geoip_asn#numbers)numbers
Autonomous System Numbers to match with.
