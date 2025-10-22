Title: Module http.handlers.authentication - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.authentication

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.authentication**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.authentication#docs "Direct link")
-----------------------------------------------------------------------------------------------------

`{▾	"providers": {•••}}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.authentication#docs "Direct link")
-----------------------------------------------------------------------------------------------------

http.handlers.authentication is a middleware which provides user authentication. Rejects requests with HTTP 401 if the request is not authenticated.

After a successful authentication, the placeholder `{http.auth.user.id}` will be set to the username, and also `{http.auth.user.*}` placeholders may be set for any authentication modules that provide user metadata.

Its API is still experimental and may be subject to change.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authentication#providers)providers
A set of authentication providers. If none are specified, all requests will always be unauthenticated.

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.
