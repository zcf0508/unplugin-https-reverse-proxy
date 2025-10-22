Title: Module http.handlers.wake_on_lan - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.wake_on_lan

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.wake_on_lan**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.wake_on_lan#docs "Direct link")
--------------------------------------------------------------------------------------------------

`{▾	"mac": "",	"broadcast_address": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/dulli/caddy-wol](https://github.com/dulli/caddy-wol)**

**Custom builds:**`xcaddy build --with github.com/dulli/caddy-wol`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.wake_on_lan#docs "Direct link")
--------------------------------------------------------------------------------------------------

http.handlers.wake_on_lan wakes up a target host on HTTP requests using wake-on-lan.

[🔗](https://caddyserver.com/docs/modules/http.handlers.wake_on_lan#mac)mac
MAC address of the target host in a net.ParseMAC compatible format.

[🔗](https://caddyserver.com/docs/modules/http.handlers.wake_on_lan#broadcast_address)broadcast_address
Broadcast address (:) the magic packet should be sent to. Defaults to "255.255.255.255:9".
