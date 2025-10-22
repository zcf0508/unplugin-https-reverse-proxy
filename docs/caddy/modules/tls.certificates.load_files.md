Title: Module tls.certificates.load_files - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/tls.certificates.load_files

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module tls.certificates.load_files**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.certificates.load_files#docs "Direct link")
----------------------------------------------------------------------------------------------------

`[{▾	"certificate": "",	"key": "",	"format": "",	"tags": [""]}]`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.certificates.load_files#docs "Direct link")
----------------------------------------------------------------------------------------------------

tls.certificates.load_files loads certificates and their associated keys from disk.

[🔗](https://caddyserver.com/docs/modules/tls.certificates.load_files#certificate)certificate
Path to the certificate (public key) file.

[🔗](https://caddyserver.com/docs/modules/tls.certificates.load_files#key)key
Path to the private key file.

[🔗](https://caddyserver.com/docs/modules/tls.certificates.load_files#format)format
The format of the cert and key. Can be "pem". Default: "pem"

[🔗](https://caddyserver.com/docs/modules/tls.certificates.load_files#tags)tags
Arbitrary values to associate with this certificate. Can be useful when you want to select a particular certificate when there may be multiple valid candidates.
