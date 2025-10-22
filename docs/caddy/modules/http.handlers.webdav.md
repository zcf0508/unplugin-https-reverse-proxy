Title: Module http.handlers.webdav - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.webdav

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.webdav**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.webdav#docs "Direct link")
---------------------------------------------------------------------------------------------

`{▾	"root": "",	"prefix": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/mholt/caddy-webdav](https://github.com/mholt/caddy-webdav)**

**Custom builds:**`xcaddy build --with github.com/mholt/caddy-webdav`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.webdav#docs "Direct link")
---------------------------------------------------------------------------------------------

http.handlers.webdav implements an HTTP handler for responding to WebDAV clients.

[🔗](https://caddyserver.com/docs/modules/http.handlers.webdav#root)root
The root directory out of which to serve files. If not specified, `{http.vars.root}` will be used if set; otherwise, the current directory is assumed. Accepts placeholders.

[🔗](https://caddyserver.com/docs/modules/http.handlers.webdav#prefix)prefix
The base path prefix used to access the WebDAV share. Should be used if one more more matchers are used with the webdav directive and it's needed to let the webdav share know what the request base path will be. For example: webdav /some/path/match/* { root /path prefix /some/path/match } Accepts placeholders.
