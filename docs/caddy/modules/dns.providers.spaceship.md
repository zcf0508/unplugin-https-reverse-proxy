Title: Module dns.providers.spaceship - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/dns.providers.spaceship

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module dns.providers.spaceship**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.spaceship#docs "Direct link")
------------------------------------------------------------------------------------------------

`{▾	"api_key": "",	"api_secret": "",	"base_url": "",	"page_size": 0}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/caddy-dns/spaceship](https://github.com/caddy-dns/spaceship)**

**Custom builds:**`xcaddy build --with github.com/caddy-dns/spaceship`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.spaceship#docs "Direct link")
------------------------------------------------------------------------------------------------

dns.providers.spaceship lets Caddy read and manipulate DNS records hosted by the Spaceship DNS provider. It adapts the libdns spaceship provider for use in Caddy.

[🔗](https://caddyserver.com/docs/modules/dns.providers.spaceship#api_key)api_key
APIKey is the Spaceship API key for authentication

[🔗](https://caddyserver.com/docs/modules/dns.providers.spaceship#api_secret)api_secret
APISecret is the Spaceship API secret for authentication

[🔗](https://caddyserver.com/docs/modules/dns.providers.spaceship#base_url)base_url
BaseURL is the base URL for the Spaceship API (defaults to [https://spaceship.dev/api](https://spaceship.dev/api))

[🔗](https://caddyserver.com/docs/modules/dns.providers.spaceship#page_size)page_size
PageSize controls pagination size used by GetRecords (defaults to 100)
