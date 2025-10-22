Title: Module dns.providers.cloudflare - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/dns.providers.cloudflare

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module dns.providers.cloudflare**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.cloudflare#docs "Direct link")
-------------------------------------------------------------------------------------------------

`{▾	"api_token": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/caddy-dns/cloudflare](https://github.com/caddy-dns/cloudflare)**

**Custom builds:**`xcaddy build --with github.com/caddy-dns/cloudflare`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.cloudflare#docs "Direct link")
-------------------------------------------------------------------------------------------------

dns.providers.cloudflare wraps the provider implementation as a Caddy module.

[🔗](https://caddyserver.com/docs/modules/dns.providers.cloudflare#api_token)api_token
API token is used for authentication. Make sure to use a scoped API **token**, NOT a global API **key**. It will need two permissions: Zone-Zone-Read and Zone-DNS-Edit, unless you are only using `GetRecords()`, in which case the second can be changed to Read.
