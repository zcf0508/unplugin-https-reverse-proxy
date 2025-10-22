Title: Module dns.providers.powerdns - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/dns.providers.powerdns

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module dns.providers.powerdns**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.powerdns#docs "Direct link")
-----------------------------------------------------------------------------------------------

`{▾	"server_url": "",	"server_id": "",	"api_token": "",	"debug": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/caddy-dns/powerdns](https://github.com/caddy-dns/powerdns)**

**Custom builds:**`xcaddy build --with github.com/caddy-dns/powerdns`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.powerdns#docs "Direct link")
-----------------------------------------------------------------------------------------------

dns.providers.powerdns wraps the provider implementation as a Caddy module.

[🔗](https://caddyserver.com/docs/modules/dns.providers.powerdns#server_url)server_url
ServerURL is the location of the pdns server.

[🔗](https://caddyserver.com/docs/modules/dns.providers.powerdns#server_id)server_id
ServerID is the id of the server. localhost will be used if this is omitted.

[🔗](https://caddyserver.com/docs/modules/dns.providers.powerdns#api_token)api_token
APIToken is the auth token.

[🔗](https://caddyserver.com/docs/modules/dns.providers.powerdns#debug)debug
Debug - can set this to stdout or stderr to dump debugging information about the API interaction with powerdns. This will dump your auth token in plain text so be careful.
