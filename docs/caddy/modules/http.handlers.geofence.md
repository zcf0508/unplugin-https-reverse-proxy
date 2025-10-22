Title: Module http.handlers.geofence - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.geofence

Markdown Content:
Module http.handlers.geofence - Caddy Documentation

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

Module http.handlers.geofence
=============================

 There is more than one module named **Module http.handlers.geofence**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.geofence#docs "Direct link")
-----------------------------------------------------------------------------------------------

Field List
----------

▸github.com/circa10a/caddy-geofence

`{▾	"ipbase_api_token": "",	"remote_ip": "",	"allowlist": [""],	"status_code": 0,	"cache_ttl": 0,	"radius": 0,	"allow_private_ip_addresses": false,	"redis_enabled": false,	"redis_username": "",	"redis_password": "",	"redis_addr": "",	"redis_db": 0}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/circa10a/caddy-geofence](https://github.com/circa10a/caddy-geofence)**

**Custom builds:**`xcaddy build --with github.com/circa10a/caddy-geofence`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.geofence#docs "Direct link")
-----------------------------------------------------------------------------------------------

http.handlers.geofence implements IP geofencing functionality. [https://github.com/circa10a/caddy-geofence](https://github.com/circa10a/caddy-geofence)

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.geofence#ipbase_api_token)ipbase_api_token
ipbase_api_token is REQUIRED and is an API token ipbase.com. Free tier includes 150 requests per month.

[🔗](https://caddyserver.com/docs/modules/http.handlers.geofence#remote_ip)remote_ip
remote_ip is the IP address to geofence against. Not specifying this field results in geofencing the public address of the machine caddy is running on.

[🔗](https://caddyserver.com/docs/modules/http.handlers.geofence#allowlist)allowlist
allowlist is a list of IP addresses that will not be checked for proximity and will be allowed to access the server.

[🔗](https://caddyserver.com/docs/modules/http.handlers.geofence#status_code)status_code
status_code is the HTTP response code that is returned if IP address is not within proximity. Default is 403.

[🔗](https://caddyserver.com/docs/modules/http.handlers.geofence#cache_ttl)cache_ttl
cache_ttl is string parameter for caching ip addresses with their allowed/not allowed state. Not specifying a TTL sets no expiration on cached items and will live until restart. Valid time units are "ms", "s", "m", "h". In-memory cache is used if redis is not enabled.

A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.

[🔗](https://caddyserver.com/docs/modules/http.handlers.geofence#radius)radius
radius is the distance of the geofence in kilometers. If not supplied, will default to 0.0 kilometers. 1.0 => 1.0 kilometers.

[🔗](https://caddyserver.com/docs/modules/http.handlers.geofence#allow_private_ip_addresses)allow_private_ip_addresses
allow_private_ip_addresses is a boolean for whether or not to allow private ip ranges such as 192.X, 172.X, 10.X, [::1] (localhost). Default is false. Some cellular networks doing NATing with 172.X addresses, in which case, you may not want to allow.

[🔗](https://caddyserver.com/docs/modules/http.handlers.geofence#redis_enabled)redis_enabled
redis_enabled uses redis for caching. Default is false.

[🔗](https://caddyserver.com/docs/modules/http.handlers.geofence#redis_username)redis_username
redis_username is the username to connect to a redis instance. Default is "".

[🔗](https://caddyserver.com/docs/modules/http.handlers.geofence#redis_password)redis_password
redis_password is the password to connect to a redis instance. Default is "".

[🔗](https://caddyserver.com/docs/modules/http.handlers.geofence#redis_addr)redis_addr
redis_addr is the address to connect to a redis instance. Default is localhost:6379.

[🔗](https://caddyserver.com/docs/modules/http.handlers.geofence#redis_db)redis_db
redis_db is the db id. Default is 0.

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH. 

![Image 6](https://cdn.usefathom.com/?h=https%3A%2F%2Fcaddyserver.com&p=%2Fdocs%2Fmodules%2Fhttp.handlers.geofence&r=&sid=GVMGKAKP&qs=%7B%7D&cid=71197474)
