Title: Module tls.ca_pool.source.file - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/tls.ca_pool.source.file

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module tls.ca_pool.source.file**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.file#docs "Direct link")
------------------------------------------------------------------------------------------------

`{▾	"pem_files": [""]}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.file#docs "Direct link")
------------------------------------------------------------------------------------------------

tls.ca_pool.source.file generates trusted root certificates pool from the designated DER and PEM file

[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.file#pem_files)pem_files
TrustedCACertPEMFiles is a list of PEM file names from which to load certificates of trusted CAs. Client certificates which are not signed by any of these CA certificates will be rejected.
