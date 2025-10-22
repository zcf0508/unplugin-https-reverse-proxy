Title: Module ssh.actors.shell - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/ssh.actors.shell

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module ssh.actors.shell**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/ssh.actors.shell#docs "Direct link")
-----------------------------------------------------------------------------------------

```
{▾	"force_command": "",	"env": {
		"": ""
	},	"force_pty": false}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/kadeessh/kadeessh](https://github.com/kadeessh/kadeessh)**

**Custom builds:**`xcaddy build --with github.com/kadeessh/kadeessh/internal/pty`

Description[🔗](https://caddyserver.com/docs/modules/ssh.actors.shell#docs "Direct link")
-----------------------------------------------------------------------------------------

ssh.actors.shell is an `ssh.actors` module providing "shell" to a session. The module spawns a process using the user's default shell, as defined in the OS. On *nix, except for macOS, the module parses `/etc/passwd`, for the details and caches the result for future logins. On macOS, the module calls `dscl . -read` for the necessary user details and caches them for future logins. On Windows, the module uses the [`os/user` package](https://pkg.go.dev/os/user?GOOS=windows) from the Go standard library.

[🔗](https://caddyserver.com/docs/modules/ssh.actors.shell#force_command)force_command
Executes the designated command using the user's default shell, regardless of the supplied command. It follows the OpenSSH semantics specified for the [`ForceCommand`](https://man.openbsd.org/OpenBSD-current/man5/sshd_config.5#ForceCommand) except for the part about `internal-sftp`.

[🔗](https://caddyserver.com/docs/modules/ssh.actors.shell#env)env
environment variables to be set for the session

[🔗](https://caddyserver.com/docs/modules/ssh.actors.shell#force_pty)force_pty
whether the server should check for explicit pty request
