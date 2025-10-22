Title: apps/exec - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/exec/

Markdown Content:
`{▾	"commands": [{▾		"command": "",		"args": [""],		"directory": "",		"foreground": false,		"timeout": "",		"at": [""],		"log": {•••},		"err_log": {•••}	}]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/abiosoft/caddy-exec](https://github.com/abiosoft/caddy-exec)**

**Custom builds:**`xcaddy build --with github.com/abiosoft/caddy-exec`

Description[🔗](https://caddyserver.com/docs/json/apps/exec/#docs "Direct link")
--------------------------------------------------------------------------------

App is top level module that runs shell commands.

[🔗](https://caddyserver.com/docs/json/apps/exec/#commands)[commands](https://caddyserver.com/docs/json/apps/exec/commands/)
Cmd is the module configuration

[🔗](https://caddyserver.com/docs/json/apps/exec/#commands/command)[commands/command](https://caddyserver.com/docs/json/apps/exec/commands/command/)
The command to run.

[🔗](https://caddyserver.com/docs/json/apps/exec/#commands/args)[commands/args](https://caddyserver.com/docs/json/apps/exec/commands/args/)
The command args.

[🔗](https://caddyserver.com/docs/json/apps/exec/#commands/directory)[commands/directory](https://caddyserver.com/docs/json/apps/exec/commands/directory/)
The directory to run the command from. Defaults to current directory.

[🔗](https://caddyserver.com/docs/json/apps/exec/#commands/foreground)[commands/foreground](https://caddyserver.com/docs/json/apps/exec/commands/foreground/)
If the command should run in the foreground. By default, commands run in the background and doesn't affect Caddy. Setting this makes the command run in the foreground. Note that failure of a startup command running in the foreground may prevent Caddy from starting.

[🔗](https://caddyserver.com/docs/json/apps/exec/#commands/timeout)[commands/timeout](https://caddyserver.com/docs/json/apps/exec/commands/timeout/)
Timeout for the command. The command will be killed after timeout has elapsed if it is still running. Defaults to 10s.

[🔗](https://caddyserver.com/docs/json/apps/exec/#commands/at)[commands/at](https://caddyserver.com/docs/json/apps/exec/commands/at/)
When the command should run. This can contain either of "startup" or "shutdown".

[🔗](https://caddyserver.com/docs/json/apps/exec/#commands/log)[commands/log](https://caddyserver.com/docs/json/apps/exec/commands/log/)
Standard output log.

[🔗](https://caddyserver.com/docs/json/apps/exec/#commands/err_log)[commands/err_log](https://caddyserver.com/docs/json/apps/exec/commands/err_log/)
Standard error log.
