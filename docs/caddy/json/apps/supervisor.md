Title: apps/supervisor - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/supervisor/

Markdown Content:
```
{▾	"supervise": [{▾		"command": [""],		"replicas": 0,		"dir": "",		"env": {
			"": ""
		},		"redirect_stdout": {▾			"type": "",			"file": ""		},		"redirect_stderr": {▾			"type": "",			"file": ""		},		"restart_policy": "",		"termination_grace_period": ""	}]}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/baldinof/caddy-supervisor](https://github.com/baldinof/caddy-supervisor)**

**Custom builds:**`xcaddy build --with github.com/baldinof/caddy-supervisor`

Description[🔗](https://caddyserver.com/docs/json/apps/supervisor/#docs "Direct link")
--------------------------------------------------------------------------------------

[🔗](https://caddyserver.com/docs/json/apps/supervisor/#supervise)[supervise](https://caddyserver.com/docs/json/apps/supervisor/supervise/)
Definition is the configuration for process to supervise

[🔗](https://caddyserver.com/docs/json/apps/supervisor/#supervise/command)[supervise/command](https://caddyserver.com/docs/json/apps/supervisor/supervise/command/)
Command to start and supervise. First item is the program to start, others are arguments. Supports template.

[🔗](https://caddyserver.com/docs/json/apps/supervisor/#supervise/replicas)[supervise/replicas](https://caddyserver.com/docs/json/apps/supervisor/supervise/replicas/)
Replicas control how many instances of Command should run.

[🔗](https://caddyserver.com/docs/json/apps/supervisor/#supervise/dir)[supervise/dir](https://caddyserver.com/docs/json/apps/supervisor/supervise/dir/)
Dir defines the working directory the command should be executed in. Supports template. Default: current working dir

[🔗](https://caddyserver.com/docs/json/apps/supervisor/#supervise/env)[supervise/env](https://caddyserver.com/docs/json/apps/supervisor/supervise/env/)
Env declares environment variables that should be passed to command. Supports template.

[🔗](https://caddyserver.com/docs/json/apps/supervisor/#supervise/redirect_stdout)[supervise/redirect_stdout](https://caddyserver.com/docs/json/apps/supervisor/supervise/redirect_stdout/)
RedirectStdout is the file where Command stdout is written. Use "stdout" to redirect to caddy stdout.

[🔗](https://caddyserver.com/docs/json/apps/supervisor/#supervise/redirect_stdout/type)[supervise/redirect_stdout/type](https://caddyserver.com/docs/json/apps/supervisor/supervise/redirect_stdout/type/)
Type is how the output should be redirected Valid values:

*   **null**: discard outputs
*   **stdout**: redirect output to caddy process stdout
*   **stderr**: redirect output to caddy process stderr
*   **file**: redirect output to a file, if selected File field is required

[🔗](https://caddyserver.com/docs/json/apps/supervisor/#supervise/redirect_stdout/file)[supervise/redirect_stdout/file](https://caddyserver.com/docs/json/apps/supervisor/supervise/redirect_stdout/file/)
File is the file where outputs should be written. This is used only when Type is "file".

[🔗](https://caddyserver.com/docs/json/apps/supervisor/#supervise/redirect_stderr)[supervise/redirect_stderr](https://caddyserver.com/docs/json/apps/supervisor/supervise/redirect_stderr/)
RedirectStderr is the file where Command stderr is written. Use "stderr" to redirect to caddy stderr.

[🔗](https://caddyserver.com/docs/json/apps/supervisor/#supervise/redirect_stderr/type)[supervise/redirect_stderr/type](https://caddyserver.com/docs/json/apps/supervisor/supervise/redirect_stderr/type/)
Type is how the output should be redirected Valid values:

*   **null**: discard outputs
*   **stdout**: redirect output to caddy process stdout
*   **stderr**: redirect output to caddy process stderr
*   **file**: redirect output to a file, if selected File field is required

[🔗](https://caddyserver.com/docs/json/apps/supervisor/#supervise/redirect_stderr/file)[supervise/redirect_stderr/file](https://caddyserver.com/docs/json/apps/supervisor/supervise/redirect_stderr/file/)
File is the file where outputs should be written. This is used only when Type is "file".

[🔗](https://caddyserver.com/docs/json/apps/supervisor/#supervise/restart_policy)[supervise/restart_policy](https://caddyserver.com/docs/json/apps/supervisor/supervise/restart_policy/)
RestartPolicy define under which conditions the command should be restarted after exit. Valid values:

*   **never**: do not restart the command
*   **on_failure**: restart if exit code is not 0
*   **always**: always restart

RestartPolicy determines when a supervised process should be restarted

[🔗](https://caddyserver.com/docs/json/apps/supervisor/#supervise/termination_grace_period)[supervise/termination_grace_period](https://caddyserver.com/docs/json/apps/supervisor/supervise/termination_grace_period/)
TerminationGracePeriod defines the amount of time to wait for Command graceful termination before killing it. Ex: 10s
