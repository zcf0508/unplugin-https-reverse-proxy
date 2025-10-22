Title: Module admin.api.load - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/admin.api.load

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module admin.api.load**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/admin.api.load#docs "Direct link")
---------------------------------------------------------------------------------------

`{▾}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/admin.api.load#docs "Direct link")
---------------------------------------------------------------------------------------

admin.api.load is a module that provides the /load endpoint for the Caddy admin API. The only reason it's not baked into the caddy package directly is because of the import of the caddyconfig package for its GetAdapter function. If the caddy package depends on the caddyconfig package, then the caddyconfig package will not be able to import the caddy package, and it can more easily cause backward edges in the dependency tree (i.e. import cycle). Fortunately, the admin API has first-class support for adding endpoints from modules.
