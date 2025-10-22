Title: Module tls.ech.publishers.dns - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/tls.ech.publishers.dns

Markdown Content:
Module tls.ech.publishers.dns - Caddy Documentation

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

Module tls.ech.publishers.dns
=============================

 There is more than one module named **Module tls.ech.publishers.dns**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.ech.publishers.dns#docs "Direct link")
-----------------------------------------------------------------------------------------------

Field List
----------

▸github.com/caddyserver/caddy

`{▾	"provider": {•••}}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.ech.publishers.dns#docs "Direct link")
-----------------------------------------------------------------------------------------------

tls.ech.publishers.dns configures how to publish an ECH configuration to DNS records for the specified domains.

EXPERIMENTAL: Subject to change.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/tls.ech.publishers.dns#provider)provider
The DNS provider module which will establish the HTTPS record(s).

Fulfilled by modules in namespace: **dns.providers**

*   [acmedns](https://caddyserver.com/docs/modules/dns.providers.acmedns)Non-standard
*   [acmeproxy](https://caddyserver.com/docs/modules/dns.providers.acmeproxy)Non-standard
*   [alidns](https://caddyserver.com/docs/modules/dns.providers.alidns)Non-standard
*   [azure](https://caddyserver.com/docs/modules/dns.providers.azure)Non-standard
*   [bunny](https://caddyserver.com/docs/modules/dns.providers.bunny)Non-standard
*   [civo](https://caddyserver.com/docs/modules/dns.providers.civo)Non-standard
*   [cloudflare](https://caddyserver.com/docs/modules/dns.providers.cloudflare)Non-standard
*   [cloudns](https://caddyserver.com/docs/modules/dns.providers.cloudns)Non-standard
*   [cloudns](https://caddyserver.com/docs/modules/dns.providers.cloudns)Non-standard
*   [ddnss](https://caddyserver.com/docs/modules/dns.providers.ddnss)Non-standard
*   [desec](https://caddyserver.com/docs/modules/dns.providers.desec)Non-standard
*   [digitalocean](https://caddyserver.com/docs/modules/dns.providers.digitalocean)Non-standard
*   [dinahosting](https://caddyserver.com/docs/modules/dns.providers.dinahosting)Non-standard
*   [directadmin](https://caddyserver.com/docs/modules/dns.providers.directadmin)Non-standard
*   [dnsexit](https://caddyserver.com/docs/modules/dns.providers.dnsexit)Non-standard
*   [dnsimple](https://caddyserver.com/docs/modules/dns.providers.dnsimple)Non-standard
*   [dnsmadeeasy](https://caddyserver.com/docs/modules/dns.providers.dnsmadeeasy)Non-standard
*   [dnspod](https://caddyserver.com/docs/modules/dns.providers.dnspod)Non-standard
*   [domainnameshop](https://caddyserver.com/docs/modules/dns.providers.domainnameshop)Non-standard
*   [dreamhost](https://caddyserver.com/docs/modules/dns.providers.dreamhost)Non-standard
*   [duckdns](https://caddyserver.com/docs/modules/dns.providers.duckdns)Non-standard
*   [dynu](https://caddyserver.com/docs/modules/dns.providers.dynu)Non-standard
*   [easydns](https://caddyserver.com/docs/modules/dns.providers.easydns)Non-standard
*   [edgeone](https://caddyserver.com/docs/modules/dns.providers.edgeone)Non-standard
*   [gandi](https://caddyserver.com/docs/modules/dns.providers.gandi)Non-standard
*   [glesys](https://caddyserver.com/docs/modules/dns.providers.glesys)Non-standard
*   [godaddy](https://caddyserver.com/docs/modules/dns.providers.godaddy)Non-standard
*   [godaddy](https://caddyserver.com/docs/modules/dns.providers.godaddy)Non-standard
*   [google_domains](https://caddyserver.com/docs/modules/dns.providers.google_domains)Non-standard
*   [googleclouddns](https://caddyserver.com/docs/modules/dns.providers.googleclouddns)Non-standard
*   [he](https://caddyserver.com/docs/modules/dns.providers.he)Non-standard
*   [hetzner](https://caddyserver.com/docs/modules/dns.providers.hetzner)Non-standard
*   [hexonet](https://caddyserver.com/docs/modules/dns.providers.hexonet)Non-standard
*   [hosttech](https://caddyserver.com/docs/modules/dns.providers.hosttech)Non-standard
*   [huaweicloud](https://caddyserver.com/docs/modules/dns.providers.huaweicloud)Non-standard
*   [immosquare](https://caddyserver.com/docs/modules/dns.providers.immosquare)Non-standard
*   [infomaniak](https://caddyserver.com/docs/modules/dns.providers.infomaniak)Non-standard
*   [inwx](https://caddyserver.com/docs/modules/dns.providers.inwx)Non-standard
*   [ionos](https://caddyserver.com/docs/modules/dns.providers.ionos)Non-standard
*   [katapult](https://caddyserver.com/docs/modules/dns.providers.katapult)Non-standard
*   [leaseweb](https://caddyserver.com/docs/modules/dns.providers.leaseweb)Non-standard
*   [lego_deprecated](https://caddyserver.com/docs/modules/dns.providers.lego_deprecated)Non-standard
*   [linode](https://caddyserver.com/docs/modules/dns.providers.linode)Non-standard
*   [linode](https://caddyserver.com/docs/modules/dns.providers.linode)Non-standard
*   [loopia](https://caddyserver.com/docs/modules/dns.providers.loopia)Non-standard
*   [mailinabox](https://caddyserver.com/docs/modules/dns.providers.mailinabox)Non-standard
*   [metaname](https://caddyserver.com/docs/modules/dns.providers.metaname)Non-standard
*   [namecheap](https://caddyserver.com/docs/modules/dns.providers.namecheap)Non-standard
*   [namedotcom](https://caddyserver.com/docs/modules/dns.providers.namedotcom)Non-standard
*   [namesilo](https://caddyserver.com/docs/modules/dns.providers.namesilo)Non-standard
*   [nanelo](https://caddyserver.com/docs/modules/dns.providers.nanelo)Non-standard
*   [neoserv](https://caddyserver.com/docs/modules/dns.providers.neoserv)Non-standard
*   [netcup](https://caddyserver.com/docs/modules/dns.providers.netcup)Non-standard
*   [netlify](https://caddyserver.com/docs/modules/dns.providers.netlify)Non-standard
*   [njalla](https://caddyserver.com/docs/modules/dns.providers.njalla)Non-standard
*   [openstack-designate](https://caddyserver.com/docs/modules/dns.providers.openstack-designate)Non-standard
*   [ovh](https://caddyserver.com/docs/modules/dns.providers.ovh)Non-standard
*   [porkbun](https://caddyserver.com/docs/modules/dns.providers.porkbun)Non-standard
*   [powerdns](https://caddyserver.com/docs/modules/dns.providers.powerdns)Non-standard
*   [rfc2136](https://caddyserver.com/docs/modules/dns.providers.rfc2136)Non-standard
*   [route53](https://caddyserver.com/docs/modules/dns.providers.route53)Non-standard
*   [route53](https://caddyserver.com/docs/modules/dns.providers.route53)Non-standard
*   [scaleway](https://caddyserver.com/docs/modules/dns.providers.scaleway)Non-standard
*   [selectel](https://caddyserver.com/docs/modules/dns.providers.selectel)Non-standard
*   [spaceship](https://caddyserver.com/docs/modules/dns.providers.spaceship)Non-standard
*   [tencentcloud](https://caddyserver.com/docs/modules/dns.providers.tencentcloud)Non-standard
*   [transip](https://caddyserver.com/docs/modules/dns.providers.transip)Non-standard
*   [vercel](https://caddyserver.com/docs/modules/dns.providers.vercel)Non-standard
*   [vultr](https://caddyserver.com/docs/modules/dns.providers.vultr)Non-standard

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH.
