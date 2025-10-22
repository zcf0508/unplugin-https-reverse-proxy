Title: Module ssh.session.authorizers.max_session - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/ssh.session.authorizers.max_session

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module ssh.session.authorizers.max_session**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/ssh.session.authorizers.max_session#docs "Direct link")
------------------------------------------------------------------------------------------------------------

`{▾	"max_sessions": 0}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/kadeessh/kadeessh](https://github.com/kadeessh/kadeessh)**

**Custom builds:**`xcaddy build --with github.com/kadeessh/kadeessh/internal/authorization`

Description[🔗](https://caddyserver.com/docs/modules/ssh.session.authorizers.max_session#docs "Direct link")
------------------------------------------------------------------------------------------------------------

ssh.session.authorizers.max_session is an authorizer that permits sessions so long as the number of active sessions is below the specified maximum.

[🔗](https://caddyserver.com/docs/modules/ssh.session.authorizers.max_session#max_sessions)max_sessions
The maximum number of active sessions
