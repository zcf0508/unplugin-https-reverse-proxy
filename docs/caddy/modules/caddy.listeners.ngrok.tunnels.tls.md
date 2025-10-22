Title: Module caddy.listeners.ngrok.tunnels.tls - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tls

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module caddy.listeners.ngrok.tunnels.tls**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tls#docs "Direct link")
----------------------------------------------------------------------------------------------------------

`{▾	"domain": "",	"metadata": "",	"allow_cidr": [""],	"deny_cidr": [""]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/mohammed90/caddy-ngrok-listener](https://github.com/mohammed90/caddy-ngrok-listener)**

**Custom builds:**`xcaddy build --with github.com/mohammed90/caddy-ngrok-listener`

Description[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tls#docs "Direct link")
----------------------------------------------------------------------------------------------------------

ngrok TLS tunnel Note: only available for ngrok Enterprise user

[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tls#domain)domain
the domain for this edge.

[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tls#metadata)metadata
opaque metadata string for this tunnel.

[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tls#allow_cidr)allow_cidr
Rejects connections that do not match the given CIDRs

[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tls#deny_cidr)deny_cidr
Rejects connections that match the given CIDRs and allows all other CIDRs.
