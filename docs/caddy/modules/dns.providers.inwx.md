Title: Module dns.providers.inwx - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/dns.providers.inwx

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module dns.providers.inwx**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.inwx#docs "Direct link")
-------------------------------------------------------------------------------------------

`{▾	"username": "",	"password": "",	"shared_secret": "",	"endpoint_url": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/caddy-dns/inwx](https://github.com/caddy-dns/inwx)**

**Custom builds:**`xcaddy build --with github.com/caddy-dns/inwx`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.inwx#docs "Direct link")
-------------------------------------------------------------------------------------------

dns.providers.inwx lets Caddy read and manipulate DNS records hosted by INWX.

[🔗](https://caddyserver.com/docs/modules/dns.providers.inwx#username)username
Username of your INWX account.

[🔗](https://caddyserver.com/docs/modules/dns.providers.inwx#password)password
Password of your INWX account.

[🔗](https://caddyserver.com/docs/modules/dns.providers.inwx#shared_secret)shared_secret
The shared secret is used to generate a TAN if you have activated "Mobile TAN" for your INWX account.

[🔗](https://caddyserver.com/docs/modules/dns.providers.inwx#endpoint_url)endpoint_url
URL of the JSON-RPC API endpoint. It defaults to the production endpoint.
