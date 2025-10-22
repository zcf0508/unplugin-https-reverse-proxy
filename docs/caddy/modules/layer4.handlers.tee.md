Title: Module layer4.handlers.tee - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/layer4.handlers.tee

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module layer4.handlers.tee**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tee#docs "Direct link")
--------------------------------------------------------------------------------------------

`{▾	"branch": [{•••}]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/mholt/caddy-l4](https://github.com/mholt/caddy-l4)**

**Custom builds:**`xcaddy build --with github.com/mholt/caddy-l4/modules/l4tee`

Description[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tee#docs "Direct link")
--------------------------------------------------------------------------------------------

layer4.handlers.tee is a layer4 handler that replicates a connection so that a branch of handlers can concurrently handle it. Reads happen in lock-step with all concurrent branches so as to avoid buffering: if one of the branches (including the main handler chain) stops reading from the connection, it will block all branches.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tee#branch)branch
Handlers is the list of handlers that constitute this concurrent branch. Any handlers that do connection matching (which involves recording and rewinding the stream) are unsafe to tee, so do all connection matching before teeing.
