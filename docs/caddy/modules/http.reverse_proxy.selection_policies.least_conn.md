Title: Module http.reverse_proxy.selection_policies.least_conn - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.least_conn

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.reverse_proxy.selection_policies.least_conn**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.least_conn#docs "Direct link")
-------------------------------------------------------------------------------------------------------------------------

`{▾}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.least_conn#docs "Direct link")
-------------------------------------------------------------------------------------------------------------------------

http.reverse_proxy.selection_policies.least_conn is a policy that selects the host with the least active requests. If multiple hosts have the same fewest number, one is chosen randomly. The term "conn" or "connection" is used in this policy name due to its similar meaning in other software, but our load balancer actually counts active requests rather than connections, since these days requests are multiplexed onto shared connections.
