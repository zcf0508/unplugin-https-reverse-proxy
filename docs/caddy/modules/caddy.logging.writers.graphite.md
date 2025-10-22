Title: Module caddy.logging.writers.graphite - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.logging.writers.graphite

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module caddy.logging.writers.graphite**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.logging.writers.graphite#docs "Direct link")
-------------------------------------------------------------------------------------------------------

`{▾	"server": "",	"port": 0,	"path": "",	"value": "",	"methods": [""]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/ybizeul/caddy-logger-graphite](https://github.com/ybizeul/caddy-logger-graphite)**

**Custom builds:**`xcaddy build --with github.com/ybizeul/caddy-logger-graphite`

Description[🔗](https://caddyserver.com/docs/modules/caddy.logging.writers.graphite#docs "Direct link")
-------------------------------------------------------------------------------------------------------

caddy.logging.writers.graphite is a Caddy logger used to send server activity to a Graphite database.

Templating is available as follow :

```
.Level
.Date
.Logger
.Msg
.Request
    .RemoteIP
    .RemotePort
    .ClientIP
    .Proto
    .Method
    .Host
    .URI
    .Headers
.BytesRead
.UserID
.Duration
.Size
.Status
.RespHeaders map[string][]string

.DirName
.FileName
```

[🔗](https://caddyserver.com/docs/modules/caddy.logging.writers.graphite#server)server
IP address or host name of the graphite server

[🔗](https://caddyserver.com/docs/modules/caddy.logging.writers.graphite#port)port
Port number to be used (usually 2003)

[🔗](https://caddyserver.com/docs/modules/caddy.logging.writers.graphite#path)path
Metrics Path, can be templated

[🔗](https://caddyserver.com/docs/modules/caddy.logging.writers.graphite#value)value
Value to be sent, can be templated

[🔗](https://caddyserver.com/docs/modules/caddy.logging.writers.graphite#methods)methods
Methods to be logged
