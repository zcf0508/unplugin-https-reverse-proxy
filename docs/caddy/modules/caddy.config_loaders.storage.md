Title: Module caddy.config_loaders.storage - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.config_loaders.storage

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module caddy.config_loaders.storage**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.config_loaders.storage#docs "Direct link")
-----------------------------------------------------------------------------------------------------

`{▾	"storage": {•••},	"key": "",	"adapter": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/mohammed90/caddy-storage-loader](https://github.com/mohammed90/caddy-storage-loader)**

**Custom builds:**`xcaddy build --with github.com/mohammed90/caddy-storage-loader`

Description[🔗](https://caddyserver.com/docs/modules/caddy.config_loaders.storage#docs "Direct link")
-----------------------------------------------------------------------------------------------------

caddy.config_loaders.storage is a dynamic configuration loader that reads the configuration from a Caddy storage. If the storage is not configured, the default storage is used, which may be the file-system if none is configured If the `key` is not configured, the default key is `config/caddy.json`.

[🔗](https://caddyserver.com/docs/modules/caddy.config_loaders.storage#storage)storage
StorageRaw is a storage module that defines how/where Caddy stores assets (such as TLS certificates). The default storage module is `caddy.storage.file_system` (the local file system), and the default path [depends on the OS and environment](https://caddyserver.com/docs/conventions#data-directory).

[🔗](https://caddyserver.com/docs/modules/caddy.config_loaders.storage#key)key
The storage key at which the configuration is to be found

[🔗](https://caddyserver.com/docs/modules/caddy.config_loaders.storage#adapter)adapter
The adapter to use to convert the storage's contents to Caddy JSON.
