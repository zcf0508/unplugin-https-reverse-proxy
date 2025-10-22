Title: Module caddy.logging.encoders.filter.regexp - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.regexp

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module caddy.logging.encoders.filter.regexp**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.regexp#docs "Direct link")
-------------------------------------------------------------------------------------------------------------

`{▾	"regexp": "",	"value": ""}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.regexp#docs "Direct link")
-------------------------------------------------------------------------------------------------------------

caddy.logging.encoders.filter.regexp is a Caddy log field filter that replaces the field matching the provided regexp with the indicated string. If the field is an array of strings, each of them will have the regexp replacement applied.

[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.regexp#regexp)regexp
The regular expression pattern defining what to replace.

[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.regexp#value)value
The value to use as replacement
