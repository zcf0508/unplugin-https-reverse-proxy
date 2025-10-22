Title: Module k8s.admission.annotation_injector - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/k8s.admission.annotation_injector

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module k8s.admission.annotation_injector**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/k8s.admission.annotation_injector#docs "Direct link")
----------------------------------------------------------------------------------------------------------

```
{▾	"annotations": {
		"": ""
	}}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/sagikazarmark/caddy-k8s-admission](https://github.com/sagikazarmark/caddy-k8s-admission)**

**Custom builds:**`xcaddy build --with github.com/sagikazarmark/caddy-k8s-admission`

Description[🔗](https://caddyserver.com/docs/modules/k8s.admission.annotation_injector#docs "Direct link")
----------------------------------------------------------------------------------------------------------

k8s.admission.annotation_injector is an admission webhook [Handler] that injects annotations into Kubernetes resources.

It uses JSON Patch operations to add the specified annotations to the resource's metadata.

[🔗](https://caddyserver.com/docs/modules/k8s.admission.annotation_injector#annotations)annotations
Annotations is a map of annotation keys to values that will be injected into resources.
