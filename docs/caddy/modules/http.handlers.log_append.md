Title: Module http.handlers.log_append - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.log_append

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.log_append**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.log_append#docs "Direct link")
-------------------------------------------------------------------------------------------------

`{▾	"key": "",	"value": ""}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.log_append#docs "Direct link")
-------------------------------------------------------------------------------------------------

http.handlers.log_append implements a middleware that takes a key and value, where the key is the name of a log field and the value is a placeholder, or variable key, or constant value to use for that field.

[🔗](https://caddyserver.com/docs/modules/http.handlers.log_append#key)key
Key is the name of the log field.

[🔗](https://caddyserver.com/docs/modules/http.handlers.log_append#value)value
Value is the value to use for the log field. If it is a placeholder (with surrounding `{}`), it will be evaluated when the log is written. If the value is a key that exists in the `vars` map, the value of that key will be used. Otherwise the value will be used as-is as a constant string.
