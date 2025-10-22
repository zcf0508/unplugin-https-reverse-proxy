Title: Module http.handlers.filter - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.filter

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.filter**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.filter#docs "Direct link")
---------------------------------------------------------------------------------------------

`{▾	"content_type": "",	"search_pattern": "",	"replacement": "",	"max_size": 0,	"path": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/sjtug/caddy2-filter](https://github.com/sjtug/caddy2-filter)**

**Custom builds:**`xcaddy build --with github.com/sjtug/caddy2-filter`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.filter#docs "Direct link")
---------------------------------------------------------------------------------------------

http.handlers.filter implements an HTTP handler that writes the visitor's IP address to a file or stream.

[🔗](https://caddyserver.com/docs/modules/http.handlers.filter#content_type)content_type
Regex to specify which kind of response should we filter

[🔗](https://caddyserver.com/docs/modules/http.handlers.filter#search_pattern)search_pattern
Regex to specify which pattern to look up

[🔗](https://caddyserver.com/docs/modules/http.handlers.filter#replacement)replacement
A string specifying the string used to replace matches

[🔗](https://caddyserver.com/docs/modules/http.handlers.filter#max_size)max_size
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.filter#path)path
There are no docs for this property.
