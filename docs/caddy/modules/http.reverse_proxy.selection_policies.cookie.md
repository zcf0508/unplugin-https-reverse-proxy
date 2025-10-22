Title: Module http.reverse_proxy.selection_policies.cookie - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.cookie

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.reverse_proxy.selection_policies.cookie**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.cookie#docs "Direct link")
---------------------------------------------------------------------------------------------------------------------

`{▾	"name": "",	"secret": "",	"max_age": 0,	"fallback": {•••}}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.cookie#docs "Direct link")
---------------------------------------------------------------------------------------------------------------------

http.reverse_proxy.selection_policies.cookie is a policy that selects a host based on a given cookie name.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.cookie#name)name
The HTTP cookie name whose value is to be hashed and used for upstream selection.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.cookie#secret)secret
Secret to hash (Hmac256) chosen upstream in cookie

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.cookie#max_age)max_age
The cookie's Max-Age before it expires. Default is no expiry.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.cookie#fallback)fallback
The fallback policy to use if the cookie is not present. Defaults to `random`.
