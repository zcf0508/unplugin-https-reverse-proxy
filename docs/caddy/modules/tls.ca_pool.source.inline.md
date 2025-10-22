Title: Module tls.ca_pool.source.inline - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/tls.ca_pool.source.inline

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module tls.ca_pool.source.inline**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.inline#docs "Direct link")
--------------------------------------------------------------------------------------------------

`{▾	"trusted_ca_certs": [""]}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.inline#docs "Direct link")
--------------------------------------------------------------------------------------------------

tls.ca_pool.source.inline is a certificate authority pool provider coming from a DER-encoded certificates in the config

[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.inline#trusted_ca_certs)trusted_ca_certs
A list of base64 DER-encoded CA certificates against which to validate client certificates. Client certs which are not signed by any of these CAs will be rejected.
