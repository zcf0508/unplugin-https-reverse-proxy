Title: Module http.handlers.cookieflag - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.cookieflag

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.cookieflag**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.cookieflag#docs "Direct link")
-------------------------------------------------------------------------------------------------

`{▾	"flags": [""]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/teodorescuserban/caddy-cookieflag](https://github.com/teodorescuserban/caddy-cookieflag)**

**Custom builds:**`xcaddy build --with github.com/teodorescuserban/caddy-cookieflag`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.cookieflag#docs "Direct link")
-------------------------------------------------------------------------------------------------

http.handlers.cookieflag manipulate various flags (Secure, HttpOnly, ...) in the Set-Cookie reponse headers.

Syntax:

```
cookieflag [<matcher>] [(+|-)<field>] {
    +<field>
    -<field>
}
```

[🔗](https://caddyserver.com/docs/modules/http.handlers.cookieflag#flags)flags
The list of cookie flags to be modified.

Prepend the flag name with a `+` to add that flag ot with `-` to remove it

| Flag | Description |
| --- | --- |
| secure | The `Secure` flag |
| httponly | The `HttpOnly` flag |
