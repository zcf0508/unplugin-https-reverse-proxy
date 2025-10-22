Title: Module http.handlers.quantity_limiter - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.quantity_limiter

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.quantity_limiter**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.quantity_limiter#docs "Direct link")
-------------------------------------------------------------------------------------------------------

`{▾	"parameterNamePrefix": "",	"quantity": 0}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/cubic3d/caddy-quantity-limiter](https://github.com/cubic3d/caddy-quantity-limiter)**

**Custom builds:**`xcaddy build --with github.com/cubic3d/caddy-quantity-limiter`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.quantity_limiter#docs "Direct link")
-------------------------------------------------------------------------------------------------------

http.handlers.quantity_limiter limits the number of successful requests for a token and allows the counter to be reset.

[🔗](https://caddyserver.com/docs/modules/http.handlers.quantity_limiter#parameterNamePrefix)parameterNamePrefix
Prefix to be used for GET parameters for set and get tokens.

[🔗](https://caddyserver.com/docs/modules/http.handlers.quantity_limiter#quantity)quantity
Number of successful requests that can be made using a token.
