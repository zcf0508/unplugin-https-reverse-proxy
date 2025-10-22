Title: Module http.handlers.metrics - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.metrics

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.metrics**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.metrics#docs "Direct link")
----------------------------------------------------------------------------------------------

`{▾	"disable_openmetrics": false}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.metrics#docs "Direct link")
----------------------------------------------------------------------------------------------

http.handlers.metrics is a module that serves a /metrics endpoint so that any gathered metrics can be exposed for scraping. This module is configurable by end-users unlike AdminMetrics.

[🔗](https://caddyserver.com/docs/modules/http.handlers.metrics#disable_openmetrics)disable_openmetrics
Disable OpenMetrics negotiation, enabled by default. May be necessary if the produced metrics cannot be parsed by the service scraping metrics.
