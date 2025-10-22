Title: Module http.handlers.http_cache - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.http_cache

Markdown Content:
Module http.handlers.http_cache - Caddy Documentation

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

Module http.handlers.http_cache
===============================

 There is more than one module named **Module http.handlers.http_cache**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.http_cache#docs "Direct link")
-------------------------------------------------------------------------------------------------

Field List
----------

▸github.com/sillygod/cdp-cache

`{▾	"config": {▾		"type": "",		"status_header": "",		"default_max_age": 0,		"lock_timeout": 0,		"rule_matcher_raws": [{▾		}],		"match_methods": [""],		"cache_buckets_num": 0,		"cache_max_memory_size": 0,		"path": "",		"cache_key_template": "",		"redis_connection_setting": "",		"stale_max_age": 0	},	"distributed": {•••}}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/sillygod/cdp-cache](https://github.com/sillygod/cdp-cache)**

**Custom builds:**`xcaddy build --with github.com/sillygod/cdp-cache`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.http_cache#docs "Direct link")
-------------------------------------------------------------------------------------------------

http.handlers.http_cache is a http handler as a middleware to cache the response

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.http_cache#config)config
Config is the configuration for cache process

[🔗](https://caddyserver.com/docs/modules/http.handlers.http_cache#config/type)config/type
CacheType is the type of cache which means the backend for storing cache content.

[🔗](https://caddyserver.com/docs/modules/http.handlers.http_cache#config/status_header)config/status_header
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.http_cache#config/default_max_age)config/default_max_age
A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.

[🔗](https://caddyserver.com/docs/modules/http.handlers.http_cache#config/lock_timeout)config/lock_timeout
A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.

[🔗](https://caddyserver.com/docs/modules/http.handlers.http_cache#config/rule_matcher_raws)config/rule_matcher_raws
RuleMatcherRawWithType stores the marshal content for unmarshalling in provision stage

[🔗](https://caddyserver.com/docs/modules/http.handlers.http_cache#config/match_methods)config/match_methods
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.http_cache#config/cache_buckets_num)config/cache_buckets_num
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.http_cache#config/cache_max_memory_size)config/cache_max_memory_size
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.http_cache#config/path)config/path
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.http_cache#config/cache_key_template)config/cache_key_template
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.http_cache#config/redis_connection_setting)config/redis_connection_setting
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.http_cache#config/stale_max_age)config/stale_max_age
A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.

[🔗](https://caddyserver.com/docs/modules/http.handlers.http_cache#distributed)distributed
There are no docs for this property.

Fulfilled by modules in namespace: **distributed**

*   [consul](https://caddyserver.com/docs/modules/distributed.consul)Non-standard

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH.
