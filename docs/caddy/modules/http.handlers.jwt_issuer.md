Title: Module http.handlers.jwt_issuer - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.jwt_issuer

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.jwt_issuer**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.jwt_issuer#docs "Direct link")
-------------------------------------------------------------------------------------------------

`{▾	"sign_key": "",	"user_db_path": "",	"token_issuer": "",	"default_token_lifetime": 0}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/steffenbusch/caddy-jwt-issuer](https://github.com/steffenbusch/caddy-jwt-issuer)**

**Custom builds:**`xcaddy build --with github.com/steffenbusch/caddy-jwt-issuer`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.jwt_issuer#docs "Direct link")
-------------------------------------------------------------------------------------------------

http.handlers.jwt_issuer is a Caddy module that issues JSON Web Tokens (JWT) after username and password authentication. It is intended to generate JWTs that are checked with [https://github.com/ggicci/caddy-jwt](https://github.com/ggicci/caddy-jwt), which provides the JWT Authentication.

[🔗](https://caddyserver.com/docs/modules/http.handlers.jwt_issuer#sign_key)sign_key
SignKey is the base64 encoded secret key used to sign the JWTs.

[🔗](https://caddyserver.com/docs/modules/http.handlers.jwt_issuer#user_db_path)user_db_path
Path to the user database file with username, password, and audience information

[🔗](https://caddyserver.com/docs/modules/http.handlers.jwt_issuer#token_issuer)token_issuer
JWT Issuer ("iss")

[🔗](https://caddyserver.com/docs/modules/http.handlers.jwt_issuer#default_token_lifetime)default_token_lifetime
Default JWT lifetime unless the user has a specific token lifetime

A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.
