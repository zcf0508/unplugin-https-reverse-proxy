Title: Module http.handlers.extra_placeholders - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.extra_placeholders

Markdown Content:
Module http.handlers.extra_placeholders - Caddy Documentation

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

Module http.handlers.extra_placeholders
=======================================

 There is more than one module named **Module http.handlers.extra_placeholders**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.extra_placeholders#docs "Direct link")
---------------------------------------------------------------------------------------------------------

Field List
----------

▸github.com/steffenbusch/caddy-extra-placeholders

`{▾	"rand_int_min": 0,	"rand_int_max": 0,	"time_format_custom": "",	"disable_loadavg_placeholders": false}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/steffenbusch/caddy-extra-placeholders](https://github.com/steffenbusch/caddy-extra-placeholders)**

**Custom builds:**`xcaddy build --with github.com/steffenbusch/caddy-extra-placeholders`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.extra_placeholders#docs "Direct link")
---------------------------------------------------------------------------------------------------------

http.handlers.extra_placeholders provides additional placeholders that can be used within Caddy configurations:

| Placeholder | Description |
| --- | --- |
| `{extra.caddy.version.simple}` | Simple version information of the Caddy server (e.g., v2.8.4). |
| `{extra.caddy.version.full}` | Full version information of the Caddy server (e.g., v2.8.4 h1:q3pe...k=). |
| `{extra.rand.float}` | Random float value between 0.0 and 1.0. |
| `{extra.rand.int}` | Random integer value between the configured min and max (default is 0 to 100). |
| `{extra.loadavg.1}` | System load average over the last 1 minute. |
| `{extra.loadavg.5}` | System load average over the last 5 minutes. |
| `{extra.loadavg.15}` | System load average over the last 15 minutes. |
| `{extra.hostinfo.uptime}` | System uptime in a human-readable format. |
| `{extra.newline}` | Newline character (\n). |

Current local time placeholders:

| Placeholder | Description |
| --- | --- |
| `{extra.time.now.month}` | Current month as an integer (e.g., 5 for May). |
| `{extra.time.now.month_padded}` | Current month as a zero-padded string (e.g., "05" for May). |
| `{extra.time.now.day}` | Current day of the month as an integer. |
| `{extra.time.now.day_padded}` | Current day of the month as a zero-padded string. |
| `{extra.time.now.hour}` | Current hour in 24-hour format as an integer. |
| `{extra.time.now.hour_padded}` | Current hour in 24-hour format as a zero-padded string. |
| `{extra.time.now.minute}` | Current minute as an integer. |
| `{extra.time.now.minute_padded}` | Current minute as a zero-padded string. |
| `{extra.time.now.second}` | Current second as an integer. |
| `{extra.time.now.second_padded}` | Current second as a zero-padded string. |
| `{extra.time.now.timezone_offset}` | Current timezone offset from UTC (e.g., +0200). |
| `{extra.time.now.timezone_name}` | Current timezone abbreviation (e.g., CEST). |
| `{extra.time.now.iso_week}` | Current ISO week number of the year. |
| `{extra.time.now.iso_year}` | ISO year corresponding to the current ISO week. |
| `{extra.time.now.weekday_int}` | Current day of the week as an integer (Sunday = 0, Monday = 1, ..., Saturday = 6). |
| `{extra.time.now.custom}` | Current time in a custom format, configurable via the `time_format_custom` directive. |

UTC equivalents of the current time placeholders (with `.utc` added):

| Placeholder | Description |
| --- | --- |
| `{extra.time.now.utc.month}` | Current month in UTC as an integer (e.g., 5 for May). |
| `{extra.time.now.utc.month_padded}` | Current month in UTC as a zero-padded string (e.g., "05" for May). |
| `{extra.time.now.utc.day}` | Current day of the month in UTC as an integer. |
| `{extra.time.now.utc.day_padded}` | Current day of the month in UTC as a zero-padded string. |
| `{extra.time.now.utc.hour}` | Current hour in UTC in 24-hour format as an integer. |
| `{extra.time.now.utc.hour_padded}` | Current hour in UTC in 24-hour format as a zero-padded string. |
| `{extra.time.now.utc.minute}` | Current minute in UTC as an integer. |
| `{extra.time.now.utc.minute_padded}` | Current minute in UTC as a zero-padded string. |
| `{extra.time.now.utc.second}` | Current second in UTC as an integer. |
| `{extra.time.now.utc.second_padded}` | Current second in UTC as a zero-padded string. |
| `{extra.time.now.utc.timezone_offset}` | UTC timezone offset (always +0000). |
| `{extra.time.now.utc.timezone_name}` | UTC timezone abbreviation (always UTC). |
| `{extra.time.now.utc.iso_week}` | Current ISO week number of the year in UTC. |
| `{extra.time.now.utc.iso_year}` | ISO year corresponding to the current ISO week in UTC. |
| `{extra.time.now.utc.weekday_int}` | Current day of the week in UTC as an integer (Sunday = 0, Monday = 1, ..., Saturday = 6). |
| `{extra.time.now.utc.custom}` | Current UTC time in a custom format, configurable via the `time_format_custom` directive. |

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.extra_placeholders#rand_int_min)rand_int_min
RandIntMin defines the minimum value (inclusive) for the `{extra.rand.int}` placeholder.

[🔗](https://caddyserver.com/docs/modules/http.handlers.extra_placeholders#rand_int_max)rand_int_max
RandIntMax defines the maximum value (inclusive) for the `{extra.rand.int}` placeholder.

[🔗](https://caddyserver.com/docs/modules/http.handlers.extra_placeholders#time_format_custom)time_format_custom
TimeFormatCustom specifies a custom time format for the `{extra.time.now.custom}` and `{extra.time.now.utc.custom}` placeholder. If left empty, a default format of "2006-01-02 15:04:05" is used.

[🔗](https://caddyserver.com/docs/modules/http.handlers.extra_placeholders#disable_loadavg_placeholders)disable_loadavg_placeholders
DisableLoadavgPlaceholders determines whether to disable setting load average placeholders.

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH.
