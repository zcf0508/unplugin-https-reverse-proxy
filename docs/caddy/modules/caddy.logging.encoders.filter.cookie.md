Title: Module caddy.logging.encoders.filter.cookie - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.cookie

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module caddy.logging.encoders.filter.cookie**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.cookie#docs "Direct link")
-------------------------------------------------------------------------------------------------------------

`{▾	"actions": [{▾		"type": "",		"name": "",		"value": ""	}]}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.cookie#docs "Direct link")
-------------------------------------------------------------------------------------------------------------

caddy.logging.encoders.filter.cookie is a Caddy log field filter that filters cookies.

This filter updates the logged HTTP header string to remove, replace or hash cookies containing sensitive data. For instance, it can be used to redact any kind of secrets, such as session IDs.

If several actions are configured for the same cookie name, only the first will be applied.

[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.cookie#actions)actions
A list of actions to apply to the cookies.

[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.cookie#actions/type)actions/type
`replace` to replace the value of the cookie, `hash` to replace it with the 4 initial bytes of the SHA-256 of its content or `delete` to remove it entirely.

[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.cookie#actions/name)actions/name
The name of the cookie.

[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.cookie#actions/value)actions/value
The value to use as replacement if the action is `replace`.
