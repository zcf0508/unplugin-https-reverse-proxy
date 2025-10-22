Title: Module http.handlers.exec - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.exec

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.exec**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.exec#docs "Direct link")
-------------------------------------------------------------------------------------------

`{▾	"command": "",	"args": [""],	"directory": "",	"foreground": false,	"timeout": "",	"at": [""],	"log": {•••},	"err_log": {•••}}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/abiosoft/caddy-exec](https://github.com/abiosoft/caddy-exec)**

**Custom builds:**`xcaddy build --with github.com/abiosoft/caddy-exec`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.exec#docs "Direct link")
-------------------------------------------------------------------------------------------

http.handlers.exec implements an HTTP handler that runs shell command.

[🔗](https://caddyserver.com/docs/modules/http.handlers.exec#command)command
The command to run.

[🔗](https://caddyserver.com/docs/modules/http.handlers.exec#args)args
The command args.

[🔗](https://caddyserver.com/docs/modules/http.handlers.exec#directory)directory
The directory to run the command from. Defaults to current directory.

[🔗](https://caddyserver.com/docs/modules/http.handlers.exec#foreground)foreground
If the command should run in the foreground. By default, commands run in the background and doesn't affect Caddy. Setting this makes the command run in the foreground. Note that failure of a startup command running in the foreground may prevent Caddy from starting.

[🔗](https://caddyserver.com/docs/modules/http.handlers.exec#timeout)timeout
Timeout for the command. The command will be killed after timeout has elapsed if it is still running. Defaults to 10s.

[🔗](https://caddyserver.com/docs/modules/http.handlers.exec#at)at
When the command should run. This can contain either of "startup" or "shutdown".

[🔗](https://caddyserver.com/docs/modules/http.handlers.exec#log)log
Standard output log.

[🔗](https://caddyserver.com/docs/modules/http.handlers.exec#err_log)err_log
Standard error log.
