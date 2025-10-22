Title: Module tls.certificates.load_pem - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/tls.certificates.load_pem

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module tls.certificates.load_pem**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.certificates.load_pem#docs "Direct link")
--------------------------------------------------------------------------------------------------

`[{▾	"certificate": "",	"key": "",	"tags": [""]}]`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.certificates.load_pem#docs "Direct link")
--------------------------------------------------------------------------------------------------

tls.certificates.load_pem loads certificates and their associated keys by decoding their PEM blocks directly. This has the advantage of not needing to store them on disk at all.

[🔗](https://caddyserver.com/docs/modules/tls.certificates.load_pem#certificate)certificate
The certificate (public key) in PEM format.

[🔗](https://caddyserver.com/docs/modules/tls.certificates.load_pem#key)key
The private key in PEM format.

[🔗](https://caddyserver.com/docs/modules/tls.certificates.load_pem#tags)tags
Arbitrary values to associate with this certificate. Can be useful when you want to select a particular certificate when there may be multiple valid candidates.
