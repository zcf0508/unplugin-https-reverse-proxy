Title: Module http.matchers.tls - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.matchers.tls

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.matchers.tls**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.tls#docs "Direct link")
------------------------------------------------------------------------------------------

`{▾	"handshake_complete": false}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.tls#docs "Direct link")
------------------------------------------------------------------------------------------

http.matchers.tls matches HTTP requests based on the underlying TLS connection state. If this matcher is specified but the request did not come over TLS, it will never match. If this matcher is specified but is empty and the request did come in over TLS, it will always match.

[🔗](https://caddyserver.com/docs/modules/http.matchers.tls#handshake_complete)handshake_complete
Matches if the TLS handshake has completed. QUIC 0-RTT early data may arrive before the handshake completes. Generally, it is unsafe to replay these requests if they are not idempotent; additionally, the remote IP of early data packets can more easily be spoofed. It is conventional to respond with HTTP 425 Too Early if the request cannot risk being processed in this state.
