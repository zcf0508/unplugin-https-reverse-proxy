Title: Module tls.certificates.automate - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/tls.certificates.automate

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module tls.certificates.automate**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.certificates.automate#docs "Direct link")
--------------------------------------------------------------------------------------------------

`[""]`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.certificates.automate#docs "Direct link")
--------------------------------------------------------------------------------------------------

tls.certificates.automate will automatically manage certificates for the names in the list, including obtaining and renewing certificates. Automated certificates are managed according to their matching automation policy, configured elsewhere in this app.

Technically, this is a no-op certificate loader module that is treated as a special case: it uses this app's automation features to load certificates for the list of hostnames, rather than loading certificates manually. But the end result is the same: certificates for these subject names will be loaded into the in-memory cache and may then be used.
