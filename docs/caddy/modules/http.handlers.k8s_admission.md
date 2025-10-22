Title: Module http.handlers.k8s_admission - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.k8s_admission

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.k8s_admission**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.k8s_admission#docs "Direct link")
----------------------------------------------------------------------------------------------------

`{▾	"controller": {•••}}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/sagikazarmark/caddy-k8s-admission](https://github.com/sagikazarmark/caddy-k8s-admission)**

**Custom builds:**`xcaddy build --with github.com/sagikazarmark/caddy-k8s-admission`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.k8s_admission#docs "Direct link")
----------------------------------------------------------------------------------------------------

http.handlers.k8s_admission is a Caddy HTTP handler that processes Kubernetes admission webhook requests.

It acts as a host module that loads guest admission controller modules.

[🔗](https://caddyserver.com/docs/modules/http.handlers.k8s_admission#controller)controller
ControllerRaw holds the raw JSON configuration for the admission controller.
