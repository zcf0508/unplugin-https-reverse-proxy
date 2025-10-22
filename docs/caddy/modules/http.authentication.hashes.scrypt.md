Title: Module http.authentication.hashes.scrypt - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.authentication.hashes.scrypt

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.authentication.hashes.scrypt**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.authentication.hashes.scrypt#docs "Direct link")
----------------------------------------------------------------------------------------------------------

`{▾	"N": 0,	"r": 0,	"p": 0,	"key_length": 0}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.authentication.hashes.scrypt#docs "Direct link")
----------------------------------------------------------------------------------------------------------

http.authentication.hashes.scrypt implements the scrypt KDF as a hash.

DEPRECATED, please use 'bcrypt' instead.

[🔗](https://caddyserver.com/docs/modules/http.authentication.hashes.scrypt#N)N
scrypt's N parameter. If unset or 0, a safe default is used.

[🔗](https://caddyserver.com/docs/modules/http.authentication.hashes.scrypt#r)r
scrypt's r parameter. If unset or 0, a safe default is used.

[🔗](https://caddyserver.com/docs/modules/http.authentication.hashes.scrypt#p)p
scrypt's p parameter. If unset or 0, a safe default is used.

[🔗](https://caddyserver.com/docs/modules/http.authentication.hashes.scrypt#key_length)key_length
scrypt's key length parameter (in bytes). If unset or 0, a safe default is used.
