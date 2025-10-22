Title: Module ssh.session.authorizers.chained - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/ssh.session.authorizers.chained

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module ssh.session.authorizers.chained**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/ssh.session.authorizers.chained#docs "Direct link")
--------------------------------------------------------------------------------------------------------

`{▾	"authorize": [{•••}]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/kadeessh/kadeessh](https://github.com/kadeessh/kadeessh)**

**Custom builds:**`xcaddy build --with github.com/kadeessh/kadeessh/internal/authorization`

Description[🔗](https://caddyserver.com/docs/modules/ssh.session.authorizers.chained#docs "Direct link")
--------------------------------------------------------------------------------------------------------

ssh.session.authorizers.chained is a multi-authorizer module that authorizes a session against multiple authorizers

[🔗](https://caddyserver.com/docs/modules/ssh.session.authorizers.chained#authorize)authorize
The list of sub-authorizers to loop through to authorize a session. If an authorizer in the chain fails, all the preiovusly successful authorization will be de-authorized.
