Title: Module http.authentication.providers.discord - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.authentication.providers.discord

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.authentication.providers.discord**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.discord#docs "Direct link")
--------------------------------------------------------------------------------------------------------------

`{▾}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/enum-gg/caddy-discord](https://github.com/enum-gg/caddy-discord)**

**Custom builds:**`xcaddy build --with github.com/enum-gg/caddy-discord`

Description[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.discord#docs "Direct link")
--------------------------------------------------------------------------------------------------------------

http.authentication.providers.discord allows you to authenticate caddy routes from a Discord User Identity.

e.g. Accessing /really-cool-people requires user to have {Role} within {Guild}

Discord's OAuth flow is used for identity using your own Discord developer application.

See an example Caddyfile [https://github.com/enum-gg/caddy-discord#caddyfile-example](https://github.com/enum-gg/caddy-discord#caddyfile-example)
