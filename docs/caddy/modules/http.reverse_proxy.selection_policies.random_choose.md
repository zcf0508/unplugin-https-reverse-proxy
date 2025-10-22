Title: Module http.reverse_proxy.selection_policies.random_choose - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.random_choose

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.reverse_proxy.selection_policies.random_choose**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.random_choose#docs "Direct link")
----------------------------------------------------------------------------------------------------------------------------

`{▾	"choose": 0}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.random_choose#docs "Direct link")
----------------------------------------------------------------------------------------------------------------------------

http.reverse_proxy.selection_policies.random_choose is a policy that selects two or more available hosts at random, then chooses the one with the least load.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.random_choose#choose)choose
The size of the sub-pool created from the larger upstream pool. The default value is 2 and the maximum at selection time is the size of the upstream pool.
