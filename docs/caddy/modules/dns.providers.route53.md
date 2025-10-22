Title: Module dns.providers.route53 - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/dns.providers.route53

Markdown Content:
Module dns.providers.route53 - Caddy Documentation

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

Module dns.providers.route53
============================

 There is more than one module named **dns.providers.route53**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.route53#docs "Direct link")
----------------------------------------------------------------------------------------------

Field List
----------

▸github.com/caddy-dns/route53

`{▾	"max_retries": 0}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/caddy-dns/route53](https://github.com/caddy-dns/route53)**

**Custom builds:**`xcaddy build --with github.com/caddy-dns/route53`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.route53#docs "Direct link")
----------------------------------------------------------------------------------------------

dns.providers.route53 wraps the provider implementation as a Caddy module.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/dns.providers.route53#max_retries)max_retries
There are no docs for this property.

▸github.com/ryantiger658/route53

`{▾	"region": "",	"aws_profile": "",	"profile": "",	"access_key_id": "",	"secret_access_key": "",	"token": "",	"session_token": "",	"max_retries": 0,	"max_wait_dur": 0,	"wait_for_propagation": false,	"hosted_zone_id": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/ryantiger658/route53](https://github.com/ryantiger658/route53)**

**Custom builds:**`xcaddy build --with github.com/ryantiger658/route53`

Description[🔗](https://caddyserver.com/docs/modules/dns.providers.route53#docs "Direct link")
----------------------------------------------------------------------------------------------

dns.providers.route53 wraps the provider implementation as a Caddy module.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/dns.providers.route53#region)region
Region is the AWS Region to use. If not set, it will use AWS_REGION environment variable.

[🔗](https://caddyserver.com/docs/modules/dns.providers.route53#aws_profile)aws_profile
AWSProfile is the AWS Profile to use. If not set, it will use AWS_PROFILE environment variable.

Deprecated: Use Profile instead

[🔗](https://caddyserver.com/docs/modules/dns.providers.route53#profile)profile
AWSProfile is the AWS Profile to use. If not set, it will use AWS_PROFILE environment variable.

[🔗](https://caddyserver.com/docs/modules/dns.providers.route53#access_key_id)access_key_id
AccessKeyId is the AWS Access Key ID to use. If not set, it will use AWS_ACCESS_KEY_ID

[🔗](https://caddyserver.com/docs/modules/dns.providers.route53#secret_access_key)secret_access_key
SecretAccessKey is the AWS Secret Access Key to use. If not set, it will use AWS_SECRET_ACCESS_KEY environment variable.

[🔗](https://caddyserver.com/docs/modules/dns.providers.route53#token)token
Token is the AWS Session Token to use. If not set, it will use AWS_SESSION_TOKEN environment variable.

Deprecated: Use SessionToken instead.

[🔗](https://caddyserver.com/docs/modules/dns.providers.route53#session_token)session_token
SessionToken is the AWS Session Token to use. If not set, it will use AWS_SESSION_TOKEN environment variable.

[🔗](https://caddyserver.com/docs/modules/dns.providers.route53#max_retries)max_retries
MaxRetries is the maximum number of retries to make when a request fails. If not set, it will use 5 retries.

[🔗](https://caddyserver.com/docs/modules/dns.providers.route53#max_wait_dur)max_wait_dur
MaxWaitDur is the maximum amount of time to wait for a record to be propagated. If not set, it will use 1 minutes.

A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.

[🔗](https://caddyserver.com/docs/modules/dns.providers.route53#wait_for_propagation)wait_for_propagation
WaitForPropagation if set to true, it will wait for the record to be propagated before returning.

[🔗](https://caddyserver.com/docs/modules/dns.providers.route53#hosted_zone_id)hosted_zone_id
HostedZoneID is the ID of the hosted zone to use. If not set, it will be discovered from the zone name.

This option should contain only the ID; the "/hostedzone/" prefix will be added automatically.

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH. 

![Image 6](https://cdn.usefathom.com/?h=https%3A%2F%2Fcaddyserver.com&p=%2Fdocs%2Fmodules%2Fdns.providers.route53&r=&sid=GVMGKAKP&qs=%7B%7D&cid=52057550)
