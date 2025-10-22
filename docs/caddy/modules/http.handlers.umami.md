Title: Module http.handlers.umami - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.umami

Markdown Content:
Module http.handlers.umami - Caddy Documentation

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

Module http.handlers.umami
==========================

 There is more than one module named **Module http.handlers.umami**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.umami#docs "Direct link")
--------------------------------------------------------------------------------------------

Field List
----------

▸github.com/jonaharagon/caddy-umami

`{▾	"event_endpoint": "",	"website_uuid": "",	"allowed_extensions": [""],	"client_ip_header": "",	"report_all_resources": false,	"trusted_ip_header": "",	"cookie_consent": [{▾		"name": "",		"behavior": ""	}],	"cookie_resolution": "",	"device_detection": false,	"static_metadata": [{▾		"key": "",		"value": ""	}]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/jonaharagon/caddy-umami](https://github.com/jonaharagon/caddy-umami)**

**Custom builds:**`xcaddy build --with github.com/jonaharagon/caddy-umami`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.umami#docs "Direct link")
--------------------------------------------------------------------------------------------

A Caddy module which sends visitor information to Umami's Events REST API endpoint.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.umami#event_endpoint)event_endpoint
The address of your Umami installation's send API endpoint.

[🔗](https://caddyserver.com/docs/modules/http.handlers.umami#website_uuid)website_uuid
The UUID of the website you want to track.

[🔗](https://caddyserver.com/docs/modules/http.handlers.umami#allowed_extensions)allowed_extensions
A map of page path extensions that should be reported to Umami. You must include the leading dot.

[🔗](https://caddyserver.com/docs/modules/http.handlers.umami#client_ip_header)client_ip_header
The header to send the client IP address to Umami with.

[🔗](https://caddyserver.com/docs/modules/http.handlers.umami#report_all_resources)report_all_resources
Enables reporting of all resources (ignoring extension checks).

[🔗](https://caddyserver.com/docs/modules/http.handlers.umami#trusted_ip_header)trusted_ip_header
The header to use to get the client IP address from, behind a trusted reverse proxy.

[🔗](https://caddyserver.com/docs/modules/http.handlers.umami#cookie_consent)cookie_consent
A map of cookie-based consent settings. Only the first value in the map is utilized currently.

Cookie-based consent settings.

[🔗](https://caddyserver.com/docs/modules/http.handlers.umami#cookie_consent/name)cookie_consent/name
The name of the cookie that stores the consent setting.

[🔗](https://caddyserver.com/docs/modules/http.handlers.umami#cookie_consent/behavior)cookie_consent/behavior
Can be "disable_all" to disable sending analytics if the cookie value is "false", or "path_only" to send analytic data without client information (IP, user agent, etc.) if the cookie value is "false". Defaults to "disable_all" if not specified.

[🔗](https://caddyserver.com/docs/modules/http.handlers.umami#cookie_resolution)cookie_resolution
The name of the cookie that stores the visitor's screen resolution.

[🔗](https://caddyserver.com/docs/modules/http.handlers.umami#device_detection)device_detection
Enable rudimentary device detection based on Sec-CH-UA-Mobile and Sec-CH-UA-Platform headers.

[🔗](https://caddyserver.com/docs/modules/http.handlers.umami#static_metadata)static_metadata
Optional static metadata to include with each event via query string.

Optional static metadata to include with each event via query string.

[🔗](https://caddyserver.com/docs/modules/http.handlers.umami#static_metadata/key)static_metadata/key
The key of the metadata.

[🔗](https://caddyserver.com/docs/modules/http.handlers.umami#static_metadata/value)static_metadata/value
The value of the metadata.

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH.
