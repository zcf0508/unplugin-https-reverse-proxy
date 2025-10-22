Title: Module pocketbase - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/pocketbase

Markdown Content:
Module pocketbase - Caddy Documentation

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

Module pocketbase
=================

 There is more than one module named **Module pocketbase**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/pocketbase#docs "Direct link")
-----------------------------------------------------------------------------------

Field List
----------

▸github.com/mohammed90/caddy-pocketbase

`{▾	"listen": "",	"data_dir": "",	"origins": [""]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/mohammed90/caddy-pocketbase](https://github.com/mohammed90/caddy-pocketbase)**

**Custom builds:**`xcaddy build --with github.com/mohammed90/caddy-pocketbase`

Description[🔗](https://caddyserver.com/docs/modules/pocketbase#docs "Direct link")
-----------------------------------------------------------------------------------

pocketbase is a Caddy module that provides an embedded PocketBase server.

The module provides admin API endpoints under `/pocketbase/`:

*   `POST /pocketbase/superuser` - Create a new superuser
*   `PUT /pocketbase/superuser` - Upsert a superuser
*   `PATCH /pocketbase/superuser` - Update superuser password
*   `DELETE /pocketbase/superuser` - Delete a superuser
*   `POST /pocketbase/superuser/{email}/otp` - Generate OTP for superuser

All the above endpoints require a JSON payload, except for the OTP endpoint. The JSON payload for the superuser endpoints is as follows:

```
{
    "email_address": "...",
    "password": "..."
}
```

The `DELETE` endpoint does not expect the `password` field.

Although PocketBase prints a URL in the logs to create the first superuser, the host part of the URL is not correct. You can either replace the host part with the host defined in your Caddy configuration, or use the admin API endpoint to create the first superuser.

The app can be configured in the Caddyfile through the `pocketbase` block in the global options section. Syntax:

```
pocketbase {
    data_dir <path>
    listen   <addr>
    origins  <origin...>
}
```

If the block is omitted, the default values are used.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/pocketbase#listen)listen
The listen address of the PocketBase server. If empty, a free port on 127.0.0.1 will be used.

[🔗](https://caddyserver.com/docs/modules/pocketbase#data_dir)data_dir
The data directory of PocketBase. If empty, a directory named `pb_data` in the Caddy data directory will be used. Refer to [Caddy data directory](https://caddyserver.com/docs/conventions#data-directory) for more information.

[🔗](https://caddyserver.com/docs/modules/pocketbase#origins)origins
The allowed origins for the PocketBase server with respect to CORS. If empty, all origins are allowed.

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH.
