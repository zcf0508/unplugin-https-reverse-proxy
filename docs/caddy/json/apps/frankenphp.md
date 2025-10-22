Title: apps/frankenphp - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/frankenphp/

Markdown Content:
```
{▾	"num_threads": 0,	"workers": [{▾		"file_name": "",		"num": 0,		"env": {
			"": ""
		}	}]}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/dunglas/frankenphp](https://github.com/dunglas/frankenphp)**

**Custom builds:**`xcaddy build --with github.com/dunglas/frankenphp/caddy`

Description[🔗](https://caddyserver.com/docs/json/apps/frankenphp/#docs "Direct link")
--------------------------------------------------------------------------------------

[🔗](https://caddyserver.com/docs/json/apps/frankenphp/#num_threads)[num_threads](https://caddyserver.com/docs/json/apps/frankenphp/num_threads/)
NumThreads sets the number of PHP threads to start. Default: 2x the number of available CPUs.

[🔗](https://caddyserver.com/docs/json/apps/frankenphp/#workers)[workers](https://caddyserver.com/docs/json/apps/frankenphp/workers/)
Workers configures the worker scripts to start.

[🔗](https://caddyserver.com/docs/json/apps/frankenphp/#workers/file_name)[workers/file_name](https://caddyserver.com/docs/json/apps/frankenphp/workers/file_name/)
FileName sets the path to the worker script.

[🔗](https://caddyserver.com/docs/json/apps/frankenphp/#workers/num)[workers/num](https://caddyserver.com/docs/json/apps/frankenphp/workers/num/)
Num sets the number of workers to start.

[🔗](https://caddyserver.com/docs/json/apps/frankenphp/#workers/env)[workers/env](https://caddyserver.com/docs/json/apps/frankenphp/workers/env/)
Env sets an extra environment variable to the given value. Can be specified more than once for multiple environment variables.
