Title: Module http.handlers.openapi_validator - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.openapi_validator

Markdown Content:
Module http.handlers.openapi_validator - Caddy Documentation

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

Module http.handlers.openapi_validator
======================================

 There is more than one module named **Module http.handlers.openapi_validator**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.openapi_validator#docs "Direct link")
--------------------------------------------------------------------------------------------------------

Field List
----------

▸github.com/hslatman/caddy-openapi-validator

`{▾	"filepath": "",	"validate_routes": false,	"validate_requests": false,	"validate_responses": false,	"validate_servers": false,	"validate_security": false,	"path_prefix_to_be_trimmed": "",	"additional_servers": [""],	"enforce": false,	"log": false}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/hslatman/caddy-openapi-validator](https://github.com/hslatman/caddy-openapi-validator)**

**Custom builds:**`xcaddy build --with github.com/hslatman/caddy-openapi-validator`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.openapi_validator#docs "Direct link")
--------------------------------------------------------------------------------------------------------

http.handlers.openapi_validator is used to validate OpenAPI requests and responses against an OpenAPI specification

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.openapi_validator#filepath)filepath
The filepath to the OpenAPI (v3) specification to use

[🔗](https://caddyserver.com/docs/modules/http.handlers.openapi_validator#validate_routes)validate_routes
Indicates whether routes should be validated When ValidateRequests or ValidateResponses is true, ValidateRoutes should also be true Default is true

[🔗](https://caddyserver.com/docs/modules/http.handlers.openapi_validator#validate_requests)validate_requests
Indicates whether request validation should be enabled Default is true

[🔗](https://caddyserver.com/docs/modules/http.handlers.openapi_validator#validate_responses)validate_responses
Indicates whether request validation should be enabled Default is true

[🔗](https://caddyserver.com/docs/modules/http.handlers.openapi_validator#validate_servers)validate_servers
Indicates whether request validation should be enabled Default is true

[🔗](https://caddyserver.com/docs/modules/http.handlers.openapi_validator#validate_security)validate_security
Indicates whether request validation should be enabled Default is true

[🔗](https://caddyserver.com/docs/modules/http.handlers.openapi_validator#path_prefix_to_be_trimmed)path_prefix_to_be_trimmed
URL path prefix that is trimmed from the URL path. It can be of use when server validation is turned off and the paths in an OpenAPI spec do not match the implementation directly, i.e. are missing an /api prefix, for example. Default is empty string, resulting in no prefix trimming.

[🔗](https://caddyserver.com/docs/modules/http.handlers.openapi_validator#additional_servers)additional_servers
A list of additional servers to be considered valid when when performing the request validation. The additional servers are added to the servers in the OpenAPI specification. Default is empty list

[🔗](https://caddyserver.com/docs/modules/http.handlers.openapi_validator#enforce)enforce
Indicates whether the OpenAPI specification should be enforced, meaning that invalid requests and responses will be filtered and an (appropriate) status is returned Default is true

[🔗](https://caddyserver.com/docs/modules/http.handlers.openapi_validator#log)log
To log or not to log Default is true

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH.
