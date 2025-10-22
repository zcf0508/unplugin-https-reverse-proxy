Title: Module caddy.storage.encrypted - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.storage.encrypted

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module caddy.storage.encrypted**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.storage.encrypted#docs "Direct link")
------------------------------------------------------------------------------------------------

`{▾	"backend": {•••},	"encryption": [{•••}]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/mohammed90/caddy-encrypted-storage](https://github.com/mohammed90/caddy-encrypted-storage)**

**Custom builds:**`xcaddy build --with github.com/mohammed90/caddy-encrypted-storage`

Description[🔗](https://caddyserver.com/docs/modules/caddy.storage.encrypted#docs "Direct link")
------------------------------------------------------------------------------------------------

caddy.storage.encrypted is the impelementation of certmagic.Storage interface for Caddy with encryption/decryption layer using [SOPS](https://github.com/getsops/sops). The module accepts any Caddy storage module as the backend.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.encrypted#backend)backend
The backing storage where the encrypted data is stored.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.encrypted#encryption)encryption
The encryption provider: local, remote. Although this is an array, current support is for 1 provider. TODO: implemented the `remote` provider. TODO: multiple providers

Fulfilled by modules in namespace: **caddy.storage.encrypted.provider**

*   [local](https://caddyserver.com/docs/modules/caddy.storage.encrypted.provider.local)Non-standard
