Title: certificates/automate - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/tls/certificates/automate/

Markdown Content:
certificates/automate - JSON Config Structure - Caddy Documentation
=============== 

[![Image 6: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg)](https://caddyserver.com/)

Documentation

a [![Image 7](https://caddyserver.com/old/resources/images/zerossl-logo.svg)](https://zerossl.com/) project

[Download](https://caddyserver.com/download) [Documentation](https://caddyserver.com/docs/) [Forum](https://caddy.community/) [GitHub](https://github.com/caddyserver/caddy) [Account](https://caddyserver.com/account/) [**Support**](https://caddyserver.com/support) [Sponsor](https://caddyserver.com/sponsor)

*   [Welcome](https://caddyserver.com/docs/)
*   [Wiki ![Image 8](https://caddyserver.com/old/resources/images/external-link.svg)](https://caddy.community/c/wiki/13) 
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
  
*   [v1 Docs ![Image 9](https://caddyserver.com/old/resources/images/external-link.svg)](https://caddyserver.com/caddy-v1-docs-archive.tar.gz) 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.  
  
**Code repository:[](javascript:)**  
  
**Custom builds:** `xcaddy build --with `

Description
-----------

Field List
----------

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 10: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project  
in partnership with [Ardan Labs](https://www.ardanlabs.com/)  
[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

© 2024 ZeroSSL. All rights reserved.  
Caddy® is a registered trademark of ZeroSSL GmbH.
