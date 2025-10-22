Title: Module tls.ca_pool.source.lazy - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/tls.ca_pool.source.lazy

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module tls.ca_pool.source.lazy**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.lazy#docs "Direct link")
------------------------------------------------------------------------------------------------

`{▾	"ca": {•••},	"eager_validation": false}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.lazy#docs "Direct link")
------------------------------------------------------------------------------------------------

tls.ca_pool.source.lazy defers the generation of the certificate pool from the guest module to demand-time rather than at provisionig time. The gain of the lazy load adds a risk of failure to load the certificates at demand time because the validation that's typically done at provisioning is deferred. The validation can be enforced to run before runtime by setting `EagerValidation`/`eager_validation` to `true`. It is the operator's responsibility to ensure the resources are available if `EagerValidation`/`eager_validation` is set to `true`. The module also incurs performance cost at every demand.

[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.lazy#ca)ca
Provides the guest module that provides the trusted certificate authority (CA) certificates

[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.lazy#eager_validation)eager_validation
Whether the validation step should try to load and provision the guest module to validate the correctness of the configuration. Depeneding on the type of the guest module, the resources may not be available at validation time. It is the operator's responsibility to ensure the resources are available if `EagerValidation`/`eager_validation` is set to `true`.
