Title: Module http.handlers.grpc_web - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.grpc_web

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.grpc_web**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.grpc_web#docs "Direct link")
-----------------------------------------------------------------------------------------------

Field List
----------

`{▾	"websocket_ping": 0}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/mholt/caddy-grpc-web](https://github.com/mholt/caddy-grpc-web)**

**Custom builds:**`xcaddy build --with github.com/mholt/caddy-grpc-web`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.grpc_web#docs "Direct link")
-----------------------------------------------------------------------------------------------

http.handlers.grpc_web is an HTTP handler that bridges gRPC-Web <--> gRPC requests. This module is EXPERIMENTAL and subject to change.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.grpc_web#websocket_ping)websocket_ping
Enable WebSocket keep-alive pinging. Default: 0 (no pinging). Minimum to enable: 1s.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.
