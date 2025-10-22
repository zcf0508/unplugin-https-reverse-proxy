Title: Module caddy.logging.encoders.filter.query - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.query

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module caddy.logging.encoders.filter.query**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.query#docs "Direct link")
------------------------------------------------------------------------------------------------------------

`{▾	"actions": [{▾		"type": "",		"parameter": "",		"value": ""	}]}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.query#docs "Direct link")
------------------------------------------------------------------------------------------------------------

caddy.logging.encoders.filter.query is a Caddy log field filter that filters query parameters from a URL.

This filter updates the logged URL string to remove, replace or hash query parameters containing sensitive data. For instance, it can be used to redact any kind of secrets which were passed as query parameters, such as OAuth access tokens, session IDs, magic link tokens, etc.

[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.query#actions)actions
A list of actions to apply to the query parameters of the URL.

[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.query#actions/type)actions/type
`replace` to replace the value(s) associated with the parameter(s), `hash` to replace them with the 4 initial bytes of the SHA-256 of their content or `delete` to remove them entirely.

[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.query#actions/parameter)actions/parameter
The name of the query parameter.

[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.query#actions/value)actions/value
The value to use as replacement if the action is `replace`.
