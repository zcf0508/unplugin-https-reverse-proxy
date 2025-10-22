Title: Module caddy.logging.encoders.append - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.logging.encoders.append

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module caddy.logging.encoders.append**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.append#docs "Direct link")
------------------------------------------------------------------------------------------------------

```
{▾	"wrap": {•••},	"fields": {
		"": 
	}}
```

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.append#docs "Direct link")
------------------------------------------------------------------------------------------------------

caddy.logging.encoders.append can be used to add fields to all log entries that pass through it. It is a wrapper around another encoder, which it uses to actually encode the log entries. It is most useful for adding information about the Caddy instance that is producing the log entries, possibly via an environment variable.

[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.append#wrap)wrap
The underlying encoder that actually encodes the log entries. If not specified, defaults to "json", unless the output is a terminal, in which case it defaults to "console".

[🔗](https://caddyserver.com/docs/modules/caddy.logging.encoders.append#fields)fields
A map of field names to their values. The values can be global placeholders (e.g. env vars), or constants. Note that the encoder does not run as part of an HTTP request context, so request placeholders are not available.
