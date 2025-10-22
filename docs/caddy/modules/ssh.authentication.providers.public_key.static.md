Title: Module ssh.authentication.providers.public_key.static - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/ssh.authentication.providers.public_key.static

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module ssh.authentication.providers.public_key.static**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/ssh.authentication.providers.public_key.static#docs "Direct link")
-----------------------------------------------------------------------------------------------------------------------

`{▾	"users": [{▾		"username": "",		"keys": [""]	}]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/kadeessh/kadeessh](https://github.com/kadeessh/kadeessh)**

**Custom builds:**`xcaddy build --with github.com/kadeessh/kadeessh/internal/authentication/static`

Description[🔗](https://caddyserver.com/docs/modules/ssh.authentication.providers.public_key.static#docs "Direct link")
-----------------------------------------------------------------------------------------------------------------------

[🔗](https://caddyserver.com/docs/modules/ssh.authentication.providers.public_key.static#users)users
the user list along ith their keys sources

[🔗](https://caddyserver.com/docs/modules/ssh.authentication.providers.public_key.static#users/username)users/username
the login username identifying the user

[🔗](https://caddyserver.com/docs/modules/ssh.authentication.providers.public_key.static#users/keys)users/keys
url to the location, e.g. file:///path/to/file or [https://github.com/username.keys](https://github.com/username.keys)
