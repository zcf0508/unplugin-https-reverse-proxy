Title: Module tls.handshake_match.sni_regexp - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/tls.handshake_match.sni_regexp

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module tls.handshake_match.sni_regexp**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.handshake_match.sni_regexp#docs "Direct link")
-------------------------------------------------------------------------------------------------------

`{▾	"name": "",	"pattern": ""}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.handshake_match.sni_regexp#docs "Direct link")
-------------------------------------------------------------------------------------------------------

tls.handshake_match.sni_regexp matches based on SNI using a regular expression.

[🔗](https://caddyserver.com/docs/modules/tls.handshake_match.sni_regexp#name)name
A unique name for this regular expression. Optional, but useful to prevent overwriting captures from other regexp matchers.

[🔗](https://caddyserver.com/docs/modules/tls.handshake_match.sni_regexp#pattern)pattern
The regular expression to evaluate, in RE2 syntax, which is the same general syntax used by Go, Perl, and Python. For details, see [Go's regexp package](https://golang.org/pkg/regexp/). Captures are accessible via placeholders. Unnamed capture groups are exposed as their numeric, 1-based index, while named capture groups are available by the capture group name.
