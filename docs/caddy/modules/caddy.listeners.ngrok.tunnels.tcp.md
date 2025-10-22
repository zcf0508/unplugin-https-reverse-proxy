Title: Module caddy.listeners.ngrok.tunnels.tcp - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tcp

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module caddy.listeners.ngrok.tunnels.tcp**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tcp#docs "Direct link")
----------------------------------------------------------------------------------------------------------

`{▾	"remote_addr": "",	"metadata": "",	"allow_cidr": [""],	"deny_cidr": [""]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/mohammed90/caddy-ngrok-listener](https://github.com/mohammed90/caddy-ngrok-listener)**

**Custom builds:**`xcaddy build --with github.com/mohammed90/caddy-ngrok-listener`

Description[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tcp#docs "Direct link")
----------------------------------------------------------------------------------------------------------

ngrok TCP tunnel

[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tcp#remote_addr)remote_addr
The remote TCP address to request for this edge

[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tcp#metadata)metadata
opaque metadata string for this tunnel.

[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tcp#allow_cidr)allow_cidr
Rejects connections that do not match the given CIDRs

[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tcp#deny_cidr)deny_cidr
Rejects connections that match the given CIDRs and allows all other CIDRs.
