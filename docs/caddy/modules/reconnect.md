Title: Module reconnect - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/reconnect

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module reconnect**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/reconnect#docs "Direct link")
----------------------------------------------------------------------------------

`{▾}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/anapaya/caddy-reconnect](https://github.com/anapaya/caddy-reconnect)**

**Custom builds:**`xcaddy build --with github.com/anapaya/caddy-reconnect`

Description[🔗](https://caddyserver.com/docs/modules/reconnect#docs "Direct link")
----------------------------------------------------------------------------------

reconnect is a module that provides an additional "reconnect" network type that can be used to reconnect to a [network address](https://caddyserver.com/docs/conventions#network-addresses) if the initial connection fails. Caddy will bind to the address as soon as it is available. Until that point, the listener will block in the Accept() loop. This is useful if you want to configure Caddy to bind on an address that is potentially not available at startup time.

You can configure the following networks:

*   reconnect+tcp
*   reconnect+tcp4
*   reconnect+tcp6
*   reconnect+udp
*   reconnect+udp4
*   reconnect+udp6

These are equivalent to the standard networks, except that they will block until the address is available.

For example, to start Caddy as an http server on 192.168.1.2:443, even if that address is not available at startup time, you can add the following listener to the [apps.http.servers.{srv}.listen](https://caddyserver.com/docs/json/apps/http/servers/listen/) list:

`"listen": ["reconnect+tcp/192.168.1.2:443"]`
Note: This module has only been tested with Linux. Other operating systems might not work as intended.
