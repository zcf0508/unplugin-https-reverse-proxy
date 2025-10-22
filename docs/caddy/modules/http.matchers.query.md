Title: Module http.matchers.query - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.matchers.query

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.matchers.query**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.query#docs "Direct link")
--------------------------------------------------------------------------------------------

```
{
	"": [""]
}
```

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.query#docs "Direct link")
--------------------------------------------------------------------------------------------

http.matchers.query matches requests by the URI's query string. It takes a JSON object keyed by the query keys, with an array of string values to match for that key. Query key matches are exact, but wildcards may be used for value matches. Both keys and values may be placeholders.

An example of the structure to match `?key=value&topic=api&query=something` is:

```
{
    "key": ["value"],
    "topic": ["api"],
    "query": ["*"]
}
```

Invalid query strings, including those with bad escapings or illegal characters like semicolons, will fail to parse and thus fail to match.

**NOTE:** Notice that query string values are arrays, not singular values. This is because repeated keys are valid in query strings, and each one may have a different value. This matcher will match for a key if any one of its configured values is assigned in the query string. Backend applications relying on query strings MUST take into consideration that query string values are arrays and can have multiple values.
