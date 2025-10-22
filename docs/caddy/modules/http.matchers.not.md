Title: Module http.matchers.not - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.matchers.not

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.matchers.not**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.not#docs "Direct link")
------------------------------------------------------------------------------------------

`{▾}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.not#docs "Direct link")
------------------------------------------------------------------------------------------

http.matchers.not matches requests by negating the results of its matcher sets. A single "not" matcher takes one or more matcher sets. Each matcher set is OR'ed; in other words, if any matcher set returns true, the final result of the "not" matcher is false. Individual matchers within a set work the same (i.e. different matchers in the same set are AND'ed).

NOTE: The generated docs which describe the structure of this module are wrong because of how this type unmarshals JSON in a custom way. The correct structure is:

```
[
    {},
    {}
]
```

where each of the array elements is a matcher set, i.e. an object keyed by matcher name.
