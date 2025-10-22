Title: Module http.handlers.listencaddy - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.listencaddy

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.listencaddy**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.listencaddy#docs "Direct link")
--------------------------------------------------------------------------------------------------

`{▾	"apikey": "",	"banned_uris": "",	"whitelisted_ips": "",	"abuseipdb_message": "",	"respond_message": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/Odyssey346/ListenCaddy](https://github.com/Odyssey346/ListenCaddy)**

**Custom builds:**`xcaddy build --with github.com/Odyssey346/ListenCaddy`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.listencaddy#docs "Direct link")
--------------------------------------------------------------------------------------------------

http.handlers.listencaddy is a Caddy http.handlers module that listens for requests to specific URIs/paths and reports IPs that hit these URIs to AbuseIPDB.

[🔗](https://caddyserver.com/docs/modules/http.handlers.listencaddy#apikey)apikey
APIKey is the API key from AbuseIPDB.

[🔗](https://caddyserver.com/docs/modules/http.handlers.listencaddy#banned_uris)banned_uris
BannedURIs is a regex of banned URIs/paths.

[🔗](https://caddyserver.com/docs/modules/http.handlers.listencaddy#whitelisted_ips)whitelisted_ips
WhitelistedIPs is a regex of whitelisted IPs. (optional)

[🔗](https://caddyserver.com/docs/modules/http.handlers.listencaddy#abuseipdb_message)abuseipdb_message
AbuseIPDBMessage is the message that will be sent to AbuseIPDB. Uses Go templates (do {{.Path}} to get path accessed) (optional)

[🔗](https://caddyserver.com/docs/modules/http.handlers.listencaddy#respond_message)respond_message
ResponseMessage is the message that will be sent to the client accessing a resource they're not supposed to. Uses Go templates (do {{.Path}} to get path accessed) (optional)
