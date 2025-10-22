Title: Module tls.ca_pool.source.http - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/tls.ca_pool.source.http

Markdown Content:
Module tls.ca_pool.source.http - Caddy Documentation

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

Module tls.ca_pool.source.http
==============================

 There is more than one module named **Module tls.ca_pool.source.http**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.http#docs "Direct link")
------------------------------------------------------------------------------------------------

Field List
----------

▸github.com/caddyserver/caddy

`{▾	"endpoints": [""],	"tls": {▾		"ca": {•••},		"insecure_skip_verify": false,		"handshake_timeout": 0,		"server_name": "",		"renegotiation": ""	}}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.http#docs "Direct link")
------------------------------------------------------------------------------------------------

The HTTPCertPool fetches the trusted root certificates from HTTP(S) endpoints. The TLS connection properties can be customized, including custom trusted root certificate. One example usage of this module is to get the trusted certificates from another Caddy instance that is running the PKI app and ACME server.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.http#endpoints)endpoints
the list of URLs that respond with PEM-encoded certificates to trust.

[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.http#tls)tls
Customize the TLS connection knobs to used during the HTTP call

TLSConfig holds configuration related to the TLS configuration for the transport/client. copied from with minor modifications: modules/caddyhttp/reverseproxy/httptransport.go

[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.http#tls/ca)tls/ca
Provides the guest module that provides the trusted certificate authority (CA) certificates

Fulfilled by modules in namespace: **tls.ca_pool.source**

*   [file](https://caddyserver.com/docs/modules/tls.ca_pool.source.file)
*   [http](https://caddyserver.com/docs/modules/tls.ca_pool.source.http)
*   [inline](https://caddyserver.com/docs/modules/tls.ca_pool.source.inline)
*   [lazy](https://caddyserver.com/docs/modules/tls.ca_pool.source.lazy)
*   [pki_intermediate](https://caddyserver.com/docs/modules/tls.ca_pool.source.pki_intermediate)
*   [pki_root](https://caddyserver.com/docs/modules/tls.ca_pool.source.pki_root)
*   [storage](https://caddyserver.com/docs/modules/tls.ca_pool.source.storage)

[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.http#tls/insecure_skip_verify)tls/insecure_skip_verify
If true, TLS verification of server certificates will be disabled. This is insecure and may be removed in the future. Do not use this option except in testing or local development environments.

[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.http#tls/handshake_timeout)tls/handshake_timeout
The duration to allow a TLS handshake to a server. Default: No timeout.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.http#tls/server_name)tls/server_name
The server name used when verifying the certificate received in the TLS handshake. By default, this will use the upstream address' host part. You only need to override this if your upstream address does not match the certificate the upstream is likely to use. For example if the upstream address is an IP address, then you would need to configure this to the hostname being served by the upstream server. Currently, this does not support placeholders because the TLS config is not provisioned on each connection, so a static value must be used.

[🔗](https://caddyserver.com/docs/modules/tls.ca_pool.source.http#tls/renegotiation)tls/renegotiation
TLS renegotiation level. TLS renegotiation is the act of performing subsequent handshakes on a connection after the first. The level can be:

*   "never": (the default) disables renegotiation.
*   "once": allows a remote server to request renegotiation once per connection.
*   "freely": allows a remote server to repeatedly request renegotiation.

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH.
