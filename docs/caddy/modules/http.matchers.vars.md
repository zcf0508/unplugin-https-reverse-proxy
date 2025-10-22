Title: Module http.matchers.vars - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.matchers.vars

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.matchers.vars**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.vars#docs "Direct link")
-------------------------------------------------------------------------------------------

```
{
	"": [""]
}
```

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.vars#docs "Direct link")
-------------------------------------------------------------------------------------------

http.matchers.vars is an HTTP request matcher which can match requests based on variables in the context or placeholder values. The key is the placeholder or name of the variable, and the values are possible values the variable can be in order to match (logical OR'ed).

If the key is surrounded by `{ }` it is assumed to be a placeholder. Otherwise, it will be considered a variable name.

Placeholders in the keys are not expanded, but placeholders in the values are.
