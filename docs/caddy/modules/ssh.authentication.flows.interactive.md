Title: Module ssh.authentication.flows.interactive - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/ssh.authentication.flows.interactive

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module ssh.authentication.flows.interactive**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/ssh.authentication.flows.interactive#docs "Direct link")
-------------------------------------------------------------------------------------------------------------

`{▾	"providers": {•••}}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/kadeessh/kadeessh](https://github.com/kadeessh/kadeessh)**

**Custom builds:**`xcaddy build --with github.com/kadeessh/kadeessh/internal/authentication`

Description[🔗](https://caddyserver.com/docs/modules/ssh.authentication.flows.interactive#docs "Direct link")
-------------------------------------------------------------------------------------------------------------

ssh.authentication.flows.interactive holds the interactive authentication providers

[🔗](https://caddyserver.com/docs/modules/ssh.authentication.flows.interactive#providers)providers
A set of authentication providers implementing the UserInteractiveAuthenticator interface. If none are specified, all requests will always be unauthenticated.

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

Fulfilled by modules in namespace: **ssh.providers.interactive**
