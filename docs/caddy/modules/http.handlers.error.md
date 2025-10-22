Title: Module http.handlers.error - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.error

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.error**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.error#docs "Direct link")
--------------------------------------------------------------------------------------------

`{▾	"error": "",	"status_code": ""}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.error#docs "Direct link")
--------------------------------------------------------------------------------------------

http.handlers.error implements a simple handler that returns an error. This handler returns an error value, but does not write a response. This is useful when you want the server to act as if an error occurred; for example, to invoke your custom error handling logic.

Since this handler does not write a response, the error information is for use by the server to know how to handle the error.

[🔗](https://caddyserver.com/docs/modules/http.handlers.error#error)error
The error message. Optional. Default is no error message.

[🔗](https://caddyserver.com/docs/modules/http.handlers.error#status_code)status_code
The recommended HTTP status code. Can be either an integer or a string if placeholders are needed. Optional. Default is 500.

WeakString is a type that unmarshals any JSON value as a string literal, with the following exceptions:

1.   actual string values are decoded as strings; and
2.   null is decoded as empty string;

and provides methods for getting the value as various primitive types. However, using this type removes any type safety as far as deserializing JSON is concerned.
