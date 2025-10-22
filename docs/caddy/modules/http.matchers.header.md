Title: Module http.matchers.header - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.matchers.header

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.matchers.header**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.header#docs "Direct link")
---------------------------------------------------------------------------------------------

```
{
	"": [""]
}
```

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.header#docs "Direct link")
---------------------------------------------------------------------------------------------

http.matchers.header matches requests by header fields. The key is the field name and the array is the list of field values. It performs fast, exact string comparisons of the field values. Fast prefix, suffix, and substring matches can also be done by suffixing, prefixing, or surrounding the value with the wildcard `*` character, respectively. If a list is null, the header must not exist. If the list is empty, the field must simply exist, regardless of its value.

**NOTE:** Notice that header values are arrays, not singular values. This is because repeated fields are valid in headers, and each one may have a different value. This matcher will match for a field if any one of its configured values matches in the header. Backend applications relying on headers MUST take into consideration that header field values are arrays and can have multiple values.
