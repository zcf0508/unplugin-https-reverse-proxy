Title: Module http.matchers.remote_host - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.matchers.remote_host

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.matchers.remote_host**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.remote_host#docs "Direct link")
--------------------------------------------------------------------------------------------------

`{▾	"hosts": [""],	"forwarded": false}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/muety/caddy-remote-host](https://github.com/muety/caddy-remote-host)**

**Custom builds:**`xcaddy build --with github.com/muety/caddy-remote-host`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.remote_host#docs "Direct link")
--------------------------------------------------------------------------------------------------

http.matchers.remote_host matches based on the remote IP of the connection. A host name can be specified, whose A and AAAA DNS records will be resolved to a corresponding IP for matching.

Note that IPs can sometimes be spoofed, so do not rely on this as a replacement for actual authentication.

[🔗](https://caddyserver.com/docs/modules/http.matchers.remote_host#hosts)hosts
Host names, whose corresponding IPs to match against

[🔗](https://caddyserver.com/docs/modules/http.matchers.remote_host#forwarded)forwarded
If true, prefer the first IP in the request's X-Forwarded-For header, if present, rather than the immediate peer's IP, as the reference IP against which to match. Note that it is easy to spoof request headers. Default: false
