Title: Module http.handlers.request_body - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.request_body

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.request_body**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.request_body#docs "Direct link")
---------------------------------------------------------------------------------------------------

`{▾	"max_size": 0,	"read_timeout": 0,	"write_timeout": 0}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.request_body#docs "Direct link")
---------------------------------------------------------------------------------------------------

http.handlers.request_body is a middleware for manipulating the request body.

[🔗](https://caddyserver.com/docs/modules/http.handlers.request_body#max_size)max_size
The maximum number of bytes to allow reading from the body by a later handler. If more bytes are read, an error with HTTP status 413 is returned.

[🔗](https://caddyserver.com/docs/modules/http.handlers.request_body#read_timeout)read_timeout
EXPERIMENTAL. Subject to change/removal.

A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.

[🔗](https://caddyserver.com/docs/modules/http.handlers.request_body#write_timeout)write_timeout
EXPERIMENTAL. Subject to change/removal.

A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.
