Title: Module http.matchers.path_regexp - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.matchers.path_regexp

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.matchers.path_regexp**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.path_regexp#docs "Direct link")
--------------------------------------------------------------------------------------------------

`{▾	"name": "",	"pattern": ""}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.path_regexp#docs "Direct link")
--------------------------------------------------------------------------------------------------

http.matchers.path_regexp matches requests by a regular expression on the URI's path. Path matching is performed in the unescaped (decoded) form of the path.

Upon a match, it adds placeholders to the request: `{http.regexp.name.capture_group}` where `name` is the regular expression's name, and `capture_group` is either the named or positional capture group from the expression itself. If no name is given, then the placeholder omits the name: `{http.regexp.capture_group}` (potentially leading to collisions).

[🔗](https://caddyserver.com/docs/modules/http.matchers.path_regexp#name)name
A unique name for this regular expression. Optional, but useful to prevent overwriting captures from other regexp matchers.

[🔗](https://caddyserver.com/docs/modules/http.matchers.path_regexp#pattern)pattern
The regular expression to evaluate, in RE2 syntax, which is the same general syntax used by Go, Perl, and Python. For details, see [Go's regexp package](https://golang.org/pkg/regexp/). Captures are accessible via placeholders. Unnamed capture groups are exposed as their numeric, 1-based index, while named capture groups are available by the capture group name.
