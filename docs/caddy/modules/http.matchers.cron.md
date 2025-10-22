Title: Module http.matchers.cron - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.matchers.cron

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.matchers.cron**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.cron#docs "Direct link")
-------------------------------------------------------------------------------------------

`{▾	"enable_at": [""],	"disable_at": [""]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/steffenbusch/caddy-cron-matcher](https://github.com/steffenbusch/caddy-cron-matcher)**

**Custom builds:**`xcaddy build --with github.com/steffenbusch/caddy-cron-matcher`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.cron#docs "Direct link")
-------------------------------------------------------------------------------------------

http.matchers.cron matches requests based on multiple sets of cron expressions. It allows you to define multiple time windows during which requests should be matched. The matcher becomes active after any of the time windows specified by EnableAt and inactive after any corresponding DisableAt.

[🔗](https://caddyserver.com/docs/modules/http.matchers.cron#enable_at)enable_at
EnableAt is a slice of cron expressions specifying when the matcher should start matching. Each entry in the slice corresponds to a matching time window.

[🔗](https://caddyserver.com/docs/modules/http.matchers.cron#disable_at)disable_at
DisableAt is a slice of cron expressions specifying when the matcher should stop matching. Each entry in the slice must correspond to an entry in EnableAt.
