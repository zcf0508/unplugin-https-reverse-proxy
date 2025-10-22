Title: Module http.handlers.copy_response_headers - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.copy_response_headers

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.copy_response_headers**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.copy_response_headers#docs "Direct link")
------------------------------------------------------------------------------------------------------------

`{▾	"include": [""],	"exclude": [""]}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.copy_response_headers#docs "Direct link")
------------------------------------------------------------------------------------------------------------

http.handlers.copy_response_headers is a special HTTP handler which may only be used within reverse_proxy's handle_response routes, to copy headers from the proxy response. EXPERIMENTAL; subject to change.

[🔗](https://caddyserver.com/docs/modules/http.handlers.copy_response_headers#include)include
A list of header fields to copy from the response. Cannot be defined at the same time as Exclude.

[🔗](https://caddyserver.com/docs/modules/http.handlers.copy_response_headers#exclude)exclude
A list of header fields to skip copying from the response. Cannot be defined at the same time as Include.
