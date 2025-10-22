Title: Module http.handlers.ct - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.ct

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.ct**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.ct#docs "Direct link")
-----------------------------------------------------------------------------------------

`{▾	"strict": false,	"mime_types": [""],	"platform": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/cubic3d/caddy-ct](https://github.com/cubic3d/caddy-ct)**

**Custom builds:**`xcaddy build --with github.com/cubic3d/caddy-ct`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.ct#docs "Direct link")
-----------------------------------------------------------------------------------------

http.handlers.ct allows to transpile YAML based configuration into a JSON ignition to be used with Flatcar or Fedora CoreOS.

[🔗](https://caddyserver.com/docs/modules/http.handlers.ct#strict)strict
Fail on non critical errors (default: false)

[🔗](https://caddyserver.com/docs/modules/http.handlers.ct#mime_types)mime_types
Only transpile specific MIME types (default: all)

[🔗](https://caddyserver.com/docs/modules/http.handlers.ct#platform)platform
Only for dynamic data must be one of supported types by ct (default: none)
