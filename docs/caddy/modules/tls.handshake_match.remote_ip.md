Title: Module tls.handshake_match.remote_ip - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/tls.handshake_match.remote_ip

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module tls.handshake_match.remote_ip**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.handshake_match.remote_ip#docs "Direct link")
------------------------------------------------------------------------------------------------------

`{▾	"ranges": [""],	"not_ranges": [""]}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.handshake_match.remote_ip#docs "Direct link")
------------------------------------------------------------------------------------------------------

tls.handshake_match.remote_ip matches based on the remote IP of the connection. Specific IPs or CIDR ranges can be specified.

Note that IPs can sometimes be spoofed, so do not rely on this as a replacement for actual authentication.

[🔗](https://caddyserver.com/docs/modules/tls.handshake_match.remote_ip#ranges)ranges
The IPs or CIDR ranges to match.

[🔗](https://caddyserver.com/docs/modules/tls.handshake_match.remote_ip#not_ranges)not_ranges
The IPs or CIDR ranges to _NOT_ match.
