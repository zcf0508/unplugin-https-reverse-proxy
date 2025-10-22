Title: Module http.handlers.copy_response - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.copy_response

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.copy_response**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.copy_response#docs "Direct link")
----------------------------------------------------------------------------------------------------

`{▾	"status_code": ""}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.copy_response#docs "Direct link")
----------------------------------------------------------------------------------------------------

http.handlers.copy_response is a special HTTP handler which may only be used within reverse_proxy's handle_response routes, to copy the proxy response. EXPERIMENTAL, subject to change.

[🔗](https://caddyserver.com/docs/modules/http.handlers.copy_response#status_code)status_code
To write the upstream response's body but with a different status code, set this field to the desired status code.

WeakString is a type that unmarshals any JSON value as a string literal, with the following exceptions:

1.   actual string values are decoded as strings; and
2.   null is decoded as empty string;

and provides methods for getting the value as various primitive types. However, using this type removes any type safety as far as deserializing JSON is concerned.
