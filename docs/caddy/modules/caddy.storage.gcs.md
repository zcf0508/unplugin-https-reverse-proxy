Title: Module caddy.storage.gcs - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.storage.gcs

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module caddy.storage.gcs**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.storage.gcs#docs "Direct link")
------------------------------------------------------------------------------------------

`{▾	"bucket-name": "",	"encryption-key-set": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/grafana/certmagic-gcs](https://github.com/grafana/certmagic-gcs)**

**Custom builds:**`xcaddy build --with github.com/grafana/certmagic-gcs`

Description[🔗](https://caddyserver.com/docs/modules/caddy.storage.gcs#docs "Direct link")
------------------------------------------------------------------------------------------

caddy.storage.gcs implements a caddy storage backend for Google Cloud Storage.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.gcs#bucket-name)bucket-name
BucketName is the name of the storage bucket.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.gcs#encryption-key-set)encryption-key-set
EncryptionKeySet is the path of a json tink encryption keyset
