Title: Module http.handlers.trace - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.trace

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.trace**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.trace#docs "Direct link")
--------------------------------------------------------------------------------------------

`{▾	"disabled": false,	"tag": "",	"response_debug_enabled": false}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/greenpau/caddy-trace](https://github.com/greenpau/caddy-trace)**

**Custom builds:**`xcaddy build --with github.com/greenpau/caddy-trace`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.trace#docs "Direct link")
--------------------------------------------------------------------------------------------

http.handlers.trace is a middleware which displays the content of the request it handles. It helps troubleshooting web requests by exposing headers (e.g. cookies), URL parameters, etc.

[🔗](https://caddyserver.com/docs/modules/http.handlers.trace#disabled)disabled
Enables or disables the plugin.

[🔗](https://caddyserver.com/docs/modules/http.handlers.trace#tag)tag
Adds a tag to a log message

[🔗](https://caddyserver.com/docs/modules/http.handlers.trace#response_debug_enabled)response_debug_enabled
Adds response buffering and debugging
