Title: Module dns.providers.mailinabox - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/dns.providers.mailinabox

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module dns.providers.mailinabox**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.mailinabox#docs "Direct link")
-------------------------------------------------------------------------------------------------

`{▾	"api_url": "",	"email_address": "",	"password": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/caddy-dns/mailinabox](https://github.com/caddy-dns/mailinabox)**

**Custom builds:**`xcaddy build --with github.com/caddy-dns/mailinabox`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.mailinabox#docs "Direct link")
-------------------------------------------------------------------------------------------------

dns.providers.mailinabox lets Caddy read and manipulate DNS records hosted by this DNS provider.

[🔗](https://caddyserver.com/docs/modules/dns.providers.mailinabox#api_url)api_url
APIURL is the URL provided by the mailinabox admin interface, found on your box here: [https://box.[your-domain.com]/admin#custom_dns](https://box.%5Byour-domain.com%5D/admin#custom_dns)[https://box.[your-domain.com]/admin/dns/custom](https://box.%5Byour-domain.com%5D/admin/dns/custom)

[🔗](https://caddyserver.com/docs/modules/dns.providers.mailinabox#email_address)email_address
EmailAddress of an admin account. It's recommended that a dedicated account be created especially for managing DNS.

[🔗](https://caddyserver.com/docs/modules/dns.providers.mailinabox#password)password
Password of the admin account that corresponds to the email.
