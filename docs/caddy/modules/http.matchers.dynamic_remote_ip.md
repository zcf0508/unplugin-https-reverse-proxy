Title: Module http.matchers.dynamic_remote_ip - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.matchers.dynamic_remote_ip

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.matchers.dynamic_remote_ip**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.dynamic_remote_ip#docs "Direct link")
--------------------------------------------------------------------------------------------------------

`{▾	"providers": {•••}}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/lanrat/caddy-dynamic-remoteip](https://github.com/lanrat/caddy-dynamic-remoteip)**

**Custom builds:**`xcaddy build --with github.com/lanrat/caddy-dynamic-remoteip`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.dynamic_remote_ip#docs "Direct link")
--------------------------------------------------------------------------------------------------------

http.matchers.dynamic_remote_ip matchers the requests by the remote IP address. The IP ranges are provided by modules to allow for dynamic ranges.

[🔗](https://caddyserver.com/docs/modules/http.matchers.dynamic_remote_ip#providers)providers
A module which provides a source of IP ranges, from which requests are matched.
