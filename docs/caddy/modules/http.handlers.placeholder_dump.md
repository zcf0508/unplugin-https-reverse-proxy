Title: Module http.handlers.placeholder_dump - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.placeholder_dump

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.placeholder_dump**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.placeholder_dump#docs "Direct link")
-------------------------------------------------------------------------------------------------------

`{▾	"file": "",	"logger_suffix": "",	"content": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/steffenbusch/caddy-placeholder-dump](https://github.com/steffenbusch/caddy-placeholder-dump)**

**Custom builds:**`xcaddy build --with github.com/steffenbusch/caddy-placeholder-dump`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.placeholder_dump#docs "Direct link")
-------------------------------------------------------------------------------------------------------

http.handlers.placeholder_dump is a Caddy module that dumps a placeholder to a file or logs it to a specified logger. It logs the resolved placeholder values to the specified file or logger.

[🔗](https://caddyserver.com/docs/modules/http.handlers.placeholder_dump#file)file
File is the path to the file where the content will be written. If the file does not exist, it will be created.

[🔗](https://caddyserver.com/docs/modules/http.handlers.placeholder_dump#logger_suffix)logger_suffix
LoggerSuffix is the suffix appended to the module's logger name. If set, the content will be logged to the logger with this suffix.

[🔗](https://caddyserver.com/docs/modules/http.handlers.placeholder_dump#content)content
Content is the content to be written to the file or logged. It can contain placeholders that will be resolved at runtime.
