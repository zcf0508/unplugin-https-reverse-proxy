Title: Module http.handlers.templates.functions.hitCounter - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.templates.functions.hitCounter

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.templates.functions.hitCounter**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.templates.functions.hitCounter#docs "Direct link")
---------------------------------------------------------------------------------------------------------------------

`{▾	"style": "",	"pad_digits": 0}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/mholt/caddy-hitcounter](https://github.com/mholt/caddy-hitcounter)**

**Custom builds:**`xcaddy build --with github.com/mholt/caddy-hitcounter`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.templates.functions.hitCounter#docs "Direct link")
---------------------------------------------------------------------------------------------------------------------

http.handlers.templates.functions.hitCounter implements a simple early-Web hit counter.

[🔗](https://caddyserver.com/docs/modules/http.handlers.templates.functions.hitCounter#style)style
The style of digit/counter to use. Supported values are bright_green, green, odometer, or yellow. Default: green. (Styles and default are subject to change.)

[🔗](https://caddyserver.com/docs/modules/http.handlers.templates.functions.hitCounter#pad_digits)pad_digits
How many digits wide to make the counter. If zero/unset, padding is disabled.
