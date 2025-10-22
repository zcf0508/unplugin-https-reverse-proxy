Title: Module http.handlers.vars - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.vars

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.vars**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.vars#docs "Direct link")
-------------------------------------------------------------------------------------------

```
{
	"": 
}
```

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.vars#docs "Direct link")
-------------------------------------------------------------------------------------------

http.handlers.vars is an HTTP middleware which sets variables to have values that can be used in the HTTP request handler chain. The primary way to access variables is with placeholders, which have the form: `{http.vars.variable_name}`, or with the `vars` and `vars_regexp` request matchers.

The key is the variable name, and the value is the value of the variable. Both the name and value may use or contain placeholders.
