Title: Module http.handlers.request_body_var - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.request_body_var

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.request_body_var**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.request_body_var#docs "Direct link")
-------------------------------------------------------------------------------------------------------

`{▾}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/RussellLuo/caddy-ext](https://github.com/RussellLuo/caddy-ext)**

**Custom builds:**`xcaddy build --with github.com/RussellLuo/caddy-ext/requestbodyvar`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.request_body_var#docs "Direct link")
-------------------------------------------------------------------------------------------------------

http.handlers.request_body_var implements an HTTP handler that replaces {http.request.body.*} with the value of the given field from request body, if any.
