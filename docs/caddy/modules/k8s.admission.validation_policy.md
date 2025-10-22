Title: Module k8s.admission.validation_policy - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/k8s.admission.validation_policy

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module k8s.admission.validation_policy**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/k8s.admission.validation_policy#docs "Direct link")
--------------------------------------------------------------------------------------------------------

`{▾	"expression": "",	"action": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/sagikazarmark/caddy-k8s-admission](https://github.com/sagikazarmark/caddy-k8s-admission)**

**Custom builds:**`xcaddy build --with github.com/sagikazarmark/caddy-k8s-admission`

Description[🔗](https://caddyserver.com/docs/modules/k8s.admission.validation_policy#docs "Direct link")
--------------------------------------------------------------------------------------------------------

k8s.admission.validation_policy is an admission webhook controller that validates resources using CEL expressions.

It evaluates the provided expression against the resource and takes the specified action.

[🔗](https://caddyserver.com/docs/modules/k8s.admission.validation_policy#expression)expression
Expression is the validation expression to evaluate against the resource.

[🔗](https://caddyserver.com/docs/modules/k8s.admission.validation_policy#action)action
Action is the action to take when the expression matches (allow or deny).

PolicyAction represents the action to take when a validation policy is matched.
