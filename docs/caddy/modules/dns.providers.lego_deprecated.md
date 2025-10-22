Title: Module dns.providers.lego_deprecated - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/dns.providers.lego_deprecated

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module dns.providers.lego_deprecated**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.lego_deprecated#docs "Direct link")
------------------------------------------------------------------------------------------------------

`{▾	"provider_name": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/caddy-dns/lego-deprecated](https://github.com/caddy-dns/lego-deprecated)**

**Custom builds:**`xcaddy build --with github.com/caddy-dns/lego-deprecated`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.lego_deprecated#docs "Direct link")
------------------------------------------------------------------------------------------------------

dns.providers.lego_deprecated is a shim module that allows any and all of the DNS providers in go-acme/lego to be used with Caddy. They must be configured via environment variables, they do not support cancellation in the case of frequent config changes.

Even though this module is in the dns.providers namespace, it is only a special case for solving ACME challenges, intended to replace the modules that used to be in the now-defunct tls.dns namespace. Using it in other places of the Caddy config will result in errors.

This module will eventually go away in favor of the modules that make use of the libdns APIs: [https://github.com/libdns](https://github.com/libdns)

[🔗](https://caddyserver.com/docs/modules/dns.providers.lego_deprecated#provider_name)provider_name
There are no docs for this property.
