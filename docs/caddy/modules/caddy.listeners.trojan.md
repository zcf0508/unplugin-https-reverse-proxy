Title: Module caddy.listeners.trojan - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.listeners.trojan

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module caddy.listeners.trojan**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.listeners.trojan#docs "Direct link")
-----------------------------------------------------------------------------------------------

`{▾	"verbose": false}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/imgk/caddy-trojan](https://github.com/imgk/caddy-trojan)**

**Custom builds:**`xcaddy build --with github.com/imgk/caddy-trojan/listener`

Description[🔗](https://caddyserver.com/docs/modules/caddy.listeners.trojan#docs "Direct link")
-----------------------------------------------------------------------------------------------

caddy.listeners.trojan implements an TLS wrapper that it accept connections from clients and check the connection with pre-defined password and aead cipher defined by go-shadowsocks2, and return a normal page if failed.

[🔗](https://caddyserver.com/docs/modules/caddy.listeners.trojan#verbose)verbose
Verbose is ...
