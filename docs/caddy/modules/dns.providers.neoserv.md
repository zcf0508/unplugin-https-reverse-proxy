Title: Module dns.providers.neoserv - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/dns.providers.neoserv

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module dns.providers.neoserv**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.neoserv#docs "Direct link")
----------------------------------------------------------------------------------------------

`{▾	"username": "",	"password": "",	"unsupported_ttl_is_error": false}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/caddy-dns/neoserv](https://github.com/caddy-dns/neoserv)**

**Custom builds:**`xcaddy build --with github.com/caddy-dns/neoserv`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.neoserv#docs "Direct link")
----------------------------------------------------------------------------------------------

dns.providers.neoserv lets Caddy read and manipulate DNS records hosted by this DNS provider.

[🔗](https://caddyserver.com/docs/modules/dns.providers.neoserv#username)username
Email used to authenticate with moj.neoserv.si

[🔗](https://caddyserver.com/docs/modules/dns.providers.neoserv#password)password
Password used to authenticate with moj.neoserv.si

[🔗](https://caddyserver.com/docs/modules/dns.providers.neoserv#unsupported_ttl_is_error)unsupported_ttl_is_error
UnsupportedTTLisError determines whether an unsupported TTL value should be treated as an error. If set to true, the provider will return an error if an unsupported TTL value is requested. If set to false, the provider will set the TTL to the nearest supported value that is at least the requested value.
