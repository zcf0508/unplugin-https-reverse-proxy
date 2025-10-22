Title: Module http.reverse_proxy.selection_policies.weighted_round_robin - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.weighted_round_robin

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.reverse_proxy.selection_policies.weighted_round_robin**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.weighted_round_robin#docs "Direct link")
-----------------------------------------------------------------------------------------------------------------------------------

`{▾	"weights": [0]}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.weighted_round_robin#docs "Direct link")
-----------------------------------------------------------------------------------------------------------------------------------

http.reverse_proxy.selection_policies.weighted_round_robin is a policy that selects a host based on weighted round-robin ordering.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.weighted_round_robin#weights)weights
The weight of each upstream in order, corresponding with the list of upstreams configured.
