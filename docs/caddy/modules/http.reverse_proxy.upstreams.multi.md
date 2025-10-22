Title: Module http.reverse_proxy.upstreams.multi - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.multi

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.reverse_proxy.upstreams.multi**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.multi#docs "Direct link")
-----------------------------------------------------------------------------------------------------------

`{▾	"sources": [{•••}]}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.multi#docs "Direct link")
-----------------------------------------------------------------------------------------------------------

http.reverse_proxy.upstreams.multi is a single dynamic upstream source that aggregates the results of multiple dynamic upstream sources. All configured sources will be queried in order, with their results appended to the end of the list. Errors returned from individual sources will be logged and the next source will continue to be invoked.

This module makes it easy to implement redundant cluster failovers, especially in conjunction with the `first` load balancing policy: if the first source returns an error or no upstreams, the second source's upstreams will be used naturally.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.multi#sources)sources
The list of upstream source modules to get upstreams from. They will be queried in order, with their results appended in the order they are returned.

Fulfilled by modules in namespace: **http.reverse_proxy.upstreams**

*   [a](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.a)
*   [multi](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.multi)
*   [srv](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.srv)
*   [docker](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.docker)Non-standard
*   [etcd](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.etcd)Non-standard
