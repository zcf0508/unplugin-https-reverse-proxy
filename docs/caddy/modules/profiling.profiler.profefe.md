Title: Module profiling.profiler.profefe - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/profiling.profiler.profefe

Markdown Content:
Module profiling.profiler.profefe - Caddy Documentation

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

Module profiling.profiler.profefe
=================================

 There is more than one module named **Module profiling.profiler.profefe**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/profiling.profiler.profefe#docs "Direct link")
---------------------------------------------------------------------------------------------------

Field List
----------

▸github.com/mohammed90/caddy_profiling

`{▾	"address": "",	"service": "",	"timeout": 0,	"parameters": {▾		"cpu_profile_rate": 0,		"block_profile_rate": 0,		"mutex_profile_fraction": 0,		"profile_types": [""]	}}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/mohammed90/caddy_profiling](https://github.com/mohammed90/caddy_profiling)**

**Custom builds:**`xcaddy build --with github.com/mohammed90/caddy_profiling/profefe`

Description[🔗](https://caddyserver.com/docs/modules/profiling.profiler.profefe#docs "Direct link")
---------------------------------------------------------------------------------------------------

profiling.profiler.profefe is the container of the `profefe` profiler if configured as a guest module of the `profiling` app

Field List
----------

[🔗](https://caddyserver.com/docs/modules/profiling.profiler.profefe#address)address
The URL of the Profefe service. The config value may be a [placeholder](https://caddyserver.com/docs/conventions#placeholders).

[🔗](https://caddyserver.com/docs/modules/profiling.profiler.profefe#service)service
The service name reported to Profefe. The config value may be a [placeholder](https://caddyserver.com/docs/conventions#placeholders).

[🔗](https://caddyserver.com/docs/modules/profiling.profiler.profefe#timeout)timeout
The timeout for the upload call. Setting the value to `0` disables the timeout and the call waits indefinitely until the upload is finished.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/profiling.profiler.profefe#parameters)parameters
The profiling parameters to be reported to Profefe. The paramters cpu_profile_rate, block_profile_rate, and mutex_profile_fraction are inherited from the `profiling` app if `profefe` is configured as a child module. The `profile_types` field is inherited if not configured explicitly. If `profefe` is configured as an app, all the parameters are instated as-is.

Common profiling paramters

[🔗](https://caddyserver.com/docs/modules/profiling.profiler.profefe#parameters/cpu_profile_rate)parameters/cpu_profile_rate
The hertz rate for CPU profiling, as accepted by the [`SetCPUProfileRate`](https://pkg.go.dev/runtime#SetCPUProfileRate) function.

[🔗](https://caddyserver.com/docs/modules/profiling.profiler.profefe#parameters/block_profile_rate)parameters/block_profile_rate
The hertz rate for CPU profiling, as accepted by the [`SetBlockProfileRate`](https://pkg.go.dev/runtime#SetBlockProfileRate) function.

[🔗](https://caddyserver.com/docs/modules/profiling.profiler.profefe#parameters/mutex_profile_fraction)parameters/mutex_profile_fraction
The the fraction of mutex contention events, as accepted by the [`SetMutexProfileFraction`](https://pkg.go.dev/runtime#SetMutexProfileFraction) function.

[🔗](https://caddyserver.com/docs/modules/profiling.profiler.profefe#parameters/profile_types)parameters/profile_types
The enabled runtime profile types. The accepted values are: cpu, goroutine, heap, allocs, threadcreate, block, mutex.

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH. 

![Image 6](https://cdn.usefathom.com/?h=https%3A%2F%2Fcaddyserver.com&p=%2Fdocs%2Fmodules%2Fprofiling.profiler.profefe&r=&sid=GVMGKAKP&qs=%7B%7D&cid=30293282)
