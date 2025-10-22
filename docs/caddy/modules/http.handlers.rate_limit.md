Title: Module http.handlers.rate_limit - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.rate_limit

Markdown Content:
Module http.handlers.rate_limit - Caddy Documentation

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

Module http.handlers.rate_limit
===============================

 There is more than one module named **http.handlers.rate_limit**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#docs "Direct link")
-------------------------------------------------------------------------------------------------

Field List
----------

▸github.com/RussellLuo/caddy-ext

`{▾	"key": "",	"rate": "",	"zone_size": 0,	"reject_status": 0}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/RussellLuo/caddy-ext](https://github.com/RussellLuo/caddy-ext)**

**Custom builds:**`xcaddy build --with github.com/RussellLuo/caddy-ext/ratelimit`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#docs "Direct link")
-------------------------------------------------------------------------------------------------

http.handlers.rate_limit implements a handler for rate-limiting.

If a client exceeds the rate limit, an HTTP error with status `<reject_status>` will be returned. This error can be handled using the conventional error handlers. See [handle_errors](https://caddyserver.com/docs/caddyfile/directives/handle_errors) for how to set up error handlers.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#key)key
The variable used to differentiate one client from another.

Currently supported variables:

*   `{path.<var>}`
*   `{query.<var>}`
*   `{header.<VAR>}`
*   `{cookie.<var>}`
*   `{body.<var>}` (requires the [requestbodyvar](https://github.com/RussellLuo/caddy-ext/tree/master/requestbodyvar) extension)
*   `{remote.host}` (ignores the `X-Forwarded-For` header)
*   `{remote.port}`
*   `{remote.ip}` (prefers the first IP in the `X-Forwarded-For` header)
*   `{remote.host_prefix.<bits>}` (CIDR block version of `{remote.host}`)
*   `{remote.ip_prefix.<bits>}` (CIDR block version of `{remote.ip}`)

[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#rate)rate
The request rate limit (per key value) specified in requests per second (r/s) or requests per minute (r/m).

[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#zone_size)zone_size
The size (i.e. the number of key values) of the LRU zone that keeps states of these key values. Defaults to 10,000.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#reject_status)reject_status
The HTTP status code of the response when a client exceeds the rate. Defaults to 429 (Too Many Requests).

▸github.com/mholt/caddy-ratelimit

```
{▾	"rate_limits": {
		"": {▾			"match": [{•••}],			"key": "",			"max_events": 0,			"window": 0		}
	},	"jitter": 0,	"sweep_interval": 0,	"distributed": {▾		"write_interval": 0,		"read_interval": 0	},	"storage": {•••}}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/mholt/caddy-ratelimit](https://github.com/mholt/caddy-ratelimit)**

**Custom builds:**`xcaddy build --with github.com/mholt/caddy-ratelimit`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#docs "Direct link")
-------------------------------------------------------------------------------------------------

http.handlers.rate_limit implements rate limiting functionality.

If a rate limit is exceeded, an HTTP error with status 429 will be returned. This error can be handled using the conventional error handling routes in your config. An additional placeholder is made available, called `{http.rate_limit.exceeded.name}`, which you can use for logging or handling; it contains the name of the rate limit zone which limit was exceeded.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#rate_limits)rate_limits
RateLimits contains the definitions of the rate limit zones, keyed by name. The name **MUST** be globally unique across all other instances of this handler.

RateLimit describes an HTTP rate limit zone.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#rate_limits/match)rate_limits/match
Request matchers, which defines the class of requests that are in the RL zone.

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

Fulfilled by modules in namespace: **http.matchers**

*   [client_ip](https://caddyserver.com/docs/modules/http.matchers.client_ip)
*   [expression](https://caddyserver.com/docs/modules/http.matchers.expression)
*   [file](https://caddyserver.com/docs/modules/http.matchers.file)
*   [header](https://caddyserver.com/docs/modules/http.matchers.header)
*   [header_regexp](https://caddyserver.com/docs/modules/http.matchers.header_regexp)
*   [host](https://caddyserver.com/docs/modules/http.matchers.host)
*   [method](https://caddyserver.com/docs/modules/http.matchers.method)
*   [not](https://caddyserver.com/docs/modules/http.matchers.not)
*   [path](https://caddyserver.com/docs/modules/http.matchers.path)
*   [path_regexp](https://caddyserver.com/docs/modules/http.matchers.path_regexp)
*   [protocol](https://caddyserver.com/docs/modules/http.matchers.protocol)
*   [query](https://caddyserver.com/docs/modules/http.matchers.query)
*   [remote_ip](https://caddyserver.com/docs/modules/http.matchers.remote_ip)
*   [tls](https://caddyserver.com/docs/modules/http.matchers.tls)
*   [vars](https://caddyserver.com/docs/modules/http.matchers.vars)
*   [vars_regexp](https://caddyserver.com/docs/modules/http.matchers.vars_regexp)
*   [client_asn](https://caddyserver.com/docs/modules/http.matchers.client_asn)Non-standard
*   [client_country](https://caddyserver.com/docs/modules/http.matchers.client_country)Non-standard
*   [conneg](https://caddyserver.com/docs/modules/http.matchers.conneg)Non-standard
*   [crawler](https://caddyserver.com/docs/modules/http.matchers.crawler)Non-standard
*   [cron](https://caddyserver.com/docs/modules/http.matchers.cron)Non-standard
*   [dnsfetcher](https://caddyserver.com/docs/modules/http.matchers.dnsfetcher)Non-standard
*   [dynamic_client_ip](https://caddyserver.com/docs/modules/http.matchers.dynamic_client_ip)Non-standard
*   [dynamic_remote_ip](https://caddyserver.com/docs/modules/http.matchers.dynamic_remote_ip)Non-standard
*   [exec_noop](https://caddyserver.com/docs/modules/http.matchers.exec_noop)Non-standard
*   [execnopmatch](https://caddyserver.com/docs/modules/http.matchers.execnopmatch)Non-standard
*   [fail2ban](https://caddyserver.com/docs/modules/http.matchers.fail2ban)Non-standard
*   [fail2ban](https://caddyserver.com/docs/modules/http.matchers.fail2ban)Non-standard
*   [geocity](https://caddyserver.com/docs/modules/http.matchers.geocity)Non-standard
*   [geocn](https://caddyserver.com/docs/modules/http.matchers.geocn)Non-standard
*   [geoip_asn](https://caddyserver.com/docs/modules/http.matchers.geoip_asn)Non-standard
*   [geoip_country](https://caddyserver.com/docs/modules/http.matchers.geoip_country)Non-standard
*   [maxmind_geolocation](https://caddyserver.com/docs/modules/http.matchers.maxmind_geolocation)Non-standard
*   [remote_host](https://caddyserver.com/docs/modules/http.matchers.remote_host)Non-standard
*   [signed](https://caddyserver.com/docs/modules/http.matchers.signed)Non-standard

[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#rate_limits/key)rate_limits/key
The key which uniquely differentiates rate limits within this zone. It could be a static string (no placeholders), resulting in one and only one rate limiter for the whole zone. Or, placeholders could be used to dynamically allocate rate limiters. For example, a key of "foo" will create exactly one rate limiter for all clients. But a key of "{http.request.remote.host}" will create one rate limiter for each different client IP address.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#rate_limits/max_events)rate_limits/max_events
Number of events allowed within the window.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#rate_limits/window)rate_limits/window
Duration of the sliding window.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#jitter)jitter
Percentage jitter on expiration times (example: 0.2 means 20% jitter)

[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#sweep_interval)sweep_interval
How often to scan for expired rate limit states. Default: 1m.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#distributed)distributed
Enables distributed rate limiting. For this to work properly, rate limit zones must have the same configuration for all instances in the cluster because an instance's own configuration is used to calculate whether a rate limit is exceeded. As usual, a cluster is defined to be all instances sharing the same storage configuration.

DistributedRateLimiting enables and customizes distributed rate limiting. It works by writing out the state of all internal rate limiters to storage, and reading in the state of all other rate limiters in the cluster, every so often.

Distributed rate limiting is not exact like the standard internal rate limiting, but it is eventually consistent. Lower (more frequent) sync intervals will result in higher consistency and precision, but more I/O and CPU overhead.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#distributed/write_interval)distributed/write_interval
How often to sync internal state to storage. Default: 5s

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#distributed/read_interval)distributed/read_interval
How often to sync other instances' states from storage. Default: 5s

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rate_limit#storage)storage
Storage backend through which rate limit state is synced. If not set, the global or default storage configuration will be used.

Fulfilled by modules in namespace: **caddy.storage**

*   [file_system](https://caddyserver.com/docs/modules/caddy.storage.file_system)
*   [cloudflare_kv](https://caddyserver.com/docs/modules/caddy.storage.cloudflare_kv)Non-standard
*   [consul](https://caddyserver.com/docs/modules/caddy.storage.consul)Non-standard
*   [consul](https://caddyserver.com/docs/modules/caddy.storage.consul)Non-standard
*   [consul](https://caddyserver.com/docs/modules/caddy.storage.consul)Non-standard
*   [dynamodb](https://caddyserver.com/docs/modules/caddy.storage.dynamodb)Non-standard
*   [dynamodb](https://caddyserver.com/docs/modules/caddy.storage.dynamodb)Non-standard
*   [encrypted](https://caddyserver.com/docs/modules/caddy.storage.encrypted)Non-standard
*   [env_redis](https://caddyserver.com/docs/modules/caddy.storage.env_redis)Non-standard
*   [gcs](https://caddyserver.com/docs/modules/caddy.storage.gcs)Non-standard
*   [mysql](https://caddyserver.com/docs/modules/caddy.storage.mysql)Non-standard
*   [nats](https://caddyserver.com/docs/modules/caddy.storage.nats)Non-standard
*   [postgres](https://caddyserver.com/docs/modules/caddy.storage.postgres)Non-standard
*   [redis](https://caddyserver.com/docs/modules/caddy.storage.redis)Non-standard
*   [redis](https://caddyserver.com/docs/modules/caddy.storage.redis)Non-standard
*   [redis](https://caddyserver.com/docs/modules/caddy.storage.redis)Non-standard
*   [s3](https://caddyserver.com/docs/modules/caddy.storage.s3)Non-standard
*   [s3](https://caddyserver.com/docs/modules/caddy.storage.s3)Non-standard
*   [vault](https://caddyserver.com/docs/modules/caddy.storage.vault)Non-standard

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH.
