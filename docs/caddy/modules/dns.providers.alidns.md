Title: Module dns.providers.alidns - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/dns.providers.alidns

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module dns.providers.alidns**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.alidns#docs "Direct link")
---------------------------------------------------------------------------------------------

`{▾	"access_key_id": "",	"access_key_secret": "",	"region_id": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/caddy-dns/alidns](https://github.com/caddy-dns/alidns)**

**Custom builds:**`xcaddy build --with github.com/caddy-dns/alidns`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.alidns#docs "Direct link")
---------------------------------------------------------------------------------------------

dns.providers.alidns wraps the provider implementation as a Caddy module.

[🔗](https://caddyserver.com/docs/modules/dns.providers.alidns#access_key_id)access_key_id
The API Key ID Required by Aliyun's for accessing the Aliyun's API

[🔗](https://caddyserver.com/docs/modules/dns.providers.alidns#access_key_secret)access_key_secret
The API Key Secret Required by Aliyun's for accessing the Aliyun's API

[🔗](https://caddyserver.com/docs/modules/dns.providers.alidns#region_id)region_id
Optional for identifing the region of the Aliyun's Service,The default is zh-hangzhou
