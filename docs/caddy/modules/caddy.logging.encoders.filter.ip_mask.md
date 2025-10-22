Title: Module caddy.logging.encoders.filter.ip_mask - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.ip_mask

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module caddy.logging.encoders.filter.ip_mask**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.ip_mask#docs "Direct link")
--------------------------------------------------------------------------------------------------------------

`{▾	"ipv4_cidr": 0,	"ipv6_cidr": 0}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.ip_mask#docs "Direct link")
--------------------------------------------------------------------------------------------------------------

caddy.logging.encoders.filter.ip_mask is a Caddy log field filter that masks IP addresses in a string, or in an array of strings. The string may be a comma separated list of IP addresses, where all of the values will be masked.

[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.ip_mask#ipv4_cidr)ipv4_cidr
The IPv4 mask, as an subnet size CIDR.

[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.ip_mask#ipv6_cidr)ipv6_cidr
The IPv6 mask, as an subnet size CIDR.
