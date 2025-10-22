Title: Module http.matchers.expression - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.matchers.expression

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.matchers.expression**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.expression#docs "Direct link")
-------------------------------------------------------------------------------------------------

`{▾	"expr": "",	"name": ""}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.expression#docs "Direct link")
-------------------------------------------------------------------------------------------------

http.matchers.expression matches requests by evaluating a [CEL](https://github.com/google/cel-spec) expression. This enables complex logic to be expressed using a comfortable, familiar syntax. Please refer to [the standard definitions of CEL functions and operators](https://github.com/google/cel-spec/blob/master/doc/langdef.md#standard-definitions).

This matcher's JSON interface is actually a string, not a struct. The generated docs are not correct because this type has custom marshaling logic.

COMPATIBILITY NOTE: This module is still experimental and is not subject to Caddy's compatibility guarantee.

[🔗](https://caddyserver.com/docs/modules/http.matchers.expression#expr)expr
The CEL expression to evaluate. Any Caddy placeholders will be expanded and situated into proper CEL function calls before evaluating.

[🔗](https://caddyserver.com/docs/modules/http.matchers.expression#name)name
Name is an optional name for this matcher. This is used to populate the name for regexp matchers that appear in the expression.
