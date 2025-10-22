Title: Module caddy.storage.redis - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.storage.redis

Markdown Content:
Module caddy.storage.redis - Caddy Documentation

===============

[![Image 1: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg)](https://caddyserver.com/)

Documentation

 a [![Image 2](https://caddyserver.com/old/resources/images/zerossl-logo.svg)](https://zerossl.com/) project 

Search K

[Download](https://caddyserver.com/download)[Documentation](https://caddyserver.com/docs/)[Forum](https://caddy.community/)[GitHub](https://github.com/caddyserver/caddy)[Account](https://caddyserver.com/account/)[**Support**](https://caddyserver.com/support)[Sponsor](https://caddyserver.com/sponsor)
*   [Welcome](https://caddyserver.com/docs/)
*   [Wiki ![Image 3](https://caddyserver.com/old/resources/images/external-link.svg)](https://caddy.community/c/wiki/13)
*   Get Caddy
*   [Install](https://caddyserver.com/docs/install)
*   [Build from source](https://caddyserver.com/docs/build)
*   Tutorials
*   [Getting Started](https://caddyserver.com/docs/getting-started)
*   [Quick-starts](https://caddyserver.com/docs/quick-starts)
    *   [Using the API](https://caddyserver.com/docs/quick-starts/api)
    *   [Using a Caddyfile](https://caddyserver.com/docs/quick-starts/caddyfile)
    *   [Static files](https://caddyserver.com/docs/quick-starts/static-files)
    *   [Reverse proxy](https://caddyserver.com/docs/quick-starts/reverse-proxy)
    *   [HTTPS](https://caddyserver.com/docs/quick-starts/https)

*   [Caddy API](https://caddyserver.com/docs/api-tutorial)
*   [Caddyfile](https://caddyserver.com/docs/caddyfile-tutorial)
*   Reference
*   [Command Line](https://caddyserver.com/docs/command-line)
*   [API](https://caddyserver.com/docs/api)
*   [Caddyfile](https://caddyserver.com/docs/caddyfile)
    *   [Concepts](https://caddyserver.com/docs/caddyfile/concepts)
    *   [Global options](https://caddyserver.com/docs/caddyfile/options)
    *   [Directives](https://caddyserver.com/docs/caddyfile/directives)
    *   [Request matchers](https://caddyserver.com/docs/caddyfile/matchers)
    *   [Response matchers](https://caddyserver.com/docs/caddyfile/response-matchers)
    *   [Common patterns](https://caddyserver.com/docs/caddyfile/patterns)

*   [Modules](https://caddyserver.com/docs/modules/)
*   [JSON Config Structure](https://caddyserver.com/docs/json/)
*   [Automatic HTTPS](https://caddyserver.com/docs/automatic-https)
*   Articles
*   [Caddy Architecture](https://caddyserver.com/docs/architecture)
*   [Conventions](https://caddyserver.com/docs/conventions)
*   [Config Adapters](https://caddyserver.com/docs/config-adapters)
*   [Keep Caddy Running](https://caddyserver.com/docs/running)
*   [How Logging Works](https://caddyserver.com/docs/logging)
*   [Monitoring Caddy](https://caddyserver.com/docs/metrics)
*   [Profiling Caddy](https://caddyserver.com/docs/profiling)
*   [Verifying Asset Signatures](https://caddyserver.com/docs/signature-verification)
*   [Upgrading to Caddy 2](https://caddyserver.com/docs/v2-upgrade)
*   Developers
*   [Extending Caddy](https://caddyserver.com/docs/extending-caddy)
    *   [Caddyfile Support](https://caddyserver.com/docs/extending-caddy/caddyfile)
    *   [Config Adapters](https://caddyserver.com/docs/extending-caddy/config-adapters)
    *   [Placeholders](https://caddyserver.com/docs/extending-caddy/placeholders)

*   [Module Namespaces](https://caddyserver.com/docs/extending-caddy/namespaces)

*   [v1 Docs ![Image 4](https://caddyserver.com/old/resources/images/external-link.svg)](https://caddyserver.com/caddy-v1-docs-archive.tar.gz)

All Modules
===========

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

Module caddy.storage.redis
==========================

 There is more than one module named **caddy.storage.redis**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#docs "Direct link")
--------------------------------------------------------------------------------------------

Field List
----------

▸github.com/gamalan/caddy-tlsredis

`{▾	"address": "",	"host": "",	"port": "",	"db": 0,	"password": "",	"timeout": 0,	"key_prefix": "",	"value_prefix": "",	"aes_key": "",	"tls_enabled": false,	"tls_insecure": false}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/gamalan/caddy-tlsredis](https://github.com/gamalan/caddy-tlsredis)**

**Custom builds:**`xcaddy build --with github.com/gamalan/caddy-tlsredis`

Description[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#docs "Direct link")
--------------------------------------------------------------------------------------------

caddy.storage.redis contain Redis client, and plugin option

Field List
----------

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#address)address
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#host)host
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#port)port
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#db)db
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#password)password
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#timeout)timeout
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#key_prefix)key_prefix
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#value_prefix)value_prefix
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#aes_key)aes_key
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#tls_enabled)tls_enabled
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#tls_insecure)tls_insecure
There are no docs for this property.

▸github.com/pberkel/caddy-storage-redis

`{▾	"client_type": "",	"address": [""],	"host": [""],	"port": [""],	"db": 0,	"timeout": "",	"username": "",	"password": "",	"master_name": "",	"key_prefix": "",	"encryption_key": "",	"compression": false,	"tls_enabled": false,	"tls_insecure": false,	"tls_server_certs_pem": "",	"tls_server_certs_path": "",	"route_by_latency": false,	"route_randomly": false}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/pberkel/caddy-storage-redis](https://github.com/pberkel/caddy-storage-redis)**

**Custom builds:**`xcaddy build --with github.com/pberkel/caddy-storage-redis`

Description[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#docs "Direct link")
--------------------------------------------------------------------------------------------

caddy.storage.redis implements a Caddy storage backend for Redis It supports Single (Standalone), Cluster, or Sentinal (Failover) Redis server configurations.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#client_type)client_type
ClientType specifies the Redis client type. Valid values are "cluster" or "failover"

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#address)address
Address The full address of the Redis server. Example: "127.0.0.1:6379" If not defined, will be generated from Host and Port parameters.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#host)host
Host The Redis server hostname or IP address. Default: "127.0.0.1"

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#port)port
Host The Redis server port number. Default: "6379"

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#db)db
DB The Redis server database number. Default: 0

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#timeout)timeout
Timeout The Redis server timeout in seconds. Default: 5

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#username)username
Username The username for authenticating with the Redis server. Default: "" (No authentication)

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#password)password
Password The password for authenticating with the Redis server. Default: "" (No authentication)

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#master_name)master_name
MasterName Only required when connecting to Redis via Sentinal (Failover mode). Default ""

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#key_prefix)key_prefix
KeyPrefix A string prefix that is appended to Redis keys. Default: "caddy" Useful when the Redis server is used by multiple applications.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#encryption_key)encryption_key
EncryptionKey A key string used to symmetrically encrypt and decrypt data stored in Redis. The key must be exactly 32 characters, longer values will be truncated. Default: "" (No encryption)

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#compression)compression
Compression Specifies whether values should be compressed before storing in Redis. Default: false

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#tls_enabled)tls_enabled
TlsEnabled controls whether TLS will be used to connect to the Redis server. False by default.

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#tls_insecure)tls_insecure
TlsInsecure controls whether the client will verify the server certificate. See `InsecureSkipVerify` in `tls.Config` for details. True by default. [https://pkg.go.dev/crypto/tls#Config](https://pkg.go.dev/crypto/tls#Config)

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#tls_server_certs_pem)tls_server_certs_pem
TlsServerCertsPEM is a series of PEM encoded certificates that will be used by the client to validate trust in the Redis server's certificate instead of the system trust store. May not be specified alongside `TlsServerCertsPath`. See `x509.CertPool.AppendCertsFromPem` for details. [https://pkg.go.dev/crypto/x509#CertPool.AppendCertsFromPEM](https://pkg.go.dev/crypto/x509#CertPool.AppendCertsFromPEM)

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#tls_server_certs_path)tls_server_certs_path
TlsServerCertsPath is the path to a file containing a series of PEM encoded certificates that will be used by the client to validate trust in the Redis server's certificate instead of the system trust store. May not be specified alongside `TlsServerCertsPem`. See `x509.CertPool.AppendCertsFromPem` for details. [https://pkg.go.dev/crypto/x509#CertPool.AppendCertsFromPEM](https://pkg.go.dev/crypto/x509#CertPool.AppendCertsFromPEM)

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#route_by_latency)route_by_latency
RouteByLatency Route commands by latency, only used in Cluster mode. Default: false

[🔗](https://caddyserver.com/docs/modules/caddy.storage.redis#route_randomly)route_randomly
RouteRandomly Route commands randomly, only used in Cluster mode. Default: false

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH.
