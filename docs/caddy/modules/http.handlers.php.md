Title: Module http.handlers.php - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.php

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.php**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.php#docs "Direct link")
------------------------------------------------------------------------------------------

```
{▾	"root": "",	"split_path": [""],	"resolve_root_symlink": false,	"env": {
		"": ""
	}}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/dunglas/frankenphp](https://github.com/dunglas/frankenphp)**

**Custom builds:**`xcaddy build --with github.com/dunglas/frankenphp/caddy`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.php#docs "Direct link")
------------------------------------------------------------------------------------------

[🔗](https://caddyserver.com/docs/modules/http.handlers.php#root)root
Root sets the root folder to the site. Default: `root` directive.

[🔗](https://caddyserver.com/docs/modules/http.handlers.php#split_path)split_path
SplitPath sets the substrings for splitting the URI into two parts. The first matching substring will be used to split the "path info" from the path. The first piece is suffixed with the matching substring and will be assumed as the actual resource (CGI script) name. The second piece will be set to PATH_INFO for the CGI script to use. Default: `.php`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.php#resolve_root_symlink)resolve_root_symlink
ResolveRootSymlink enables resolving the `root` directory to its actual value by evaluating a symbolic link, if one exists.

[🔗](https://caddyserver.com/docs/modules/http.handlers.php#env)env
Env sets an extra environment variable to the given value. Can be specified more than once for multiple environment variables.
