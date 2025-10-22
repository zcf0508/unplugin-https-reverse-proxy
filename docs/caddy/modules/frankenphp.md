Title: Module frankenphp - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/frankenphp

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module frankenphp**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/frankenphp#docs "Direct link")
-----------------------------------------------------------------------------------

```
{▾	"num_threads": 0,	"workers": [{▾		"file_name": "",		"num": 0,		"env": {
			"": ""
		}	}]}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/dunglas/frankenphp](https://github.com/dunglas/frankenphp)**

**Custom builds:**`xcaddy build --with github.com/dunglas/frankenphp/caddy`

Description[🔗](https://caddyserver.com/docs/modules/frankenphp#docs "Direct link")
-----------------------------------------------------------------------------------

[🔗](https://caddyserver.com/docs/modules/frankenphp#num_threads)num_threads
NumThreads sets the number of PHP threads to start. Default: 2x the number of available CPUs.

[🔗](https://caddyserver.com/docs/modules/frankenphp#workers)workers
Workers configures the worker scripts to start.

[🔗](https://caddyserver.com/docs/modules/frankenphp#workers/file_name)workers/file_name
FileName sets the path to the worker script.

[🔗](https://caddyserver.com/docs/modules/frankenphp#workers/num)workers/num
Num sets the number of workers to start.

[🔗](https://caddyserver.com/docs/modules/frankenphp#workers/env)workers/env
Env sets an extra environment variable to the given value. Can be specified more than once for multiple environment variables.
