Title: apps/layer4 - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/layer4/

Markdown Content:
apps/layer4 - JSON Config Structure - Caddy Documentation

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

[JSON Config Structure](https://caddyserver.com/docs/json/) › [apps](https://caddyserver.com/docs/json/apps/) › [layer4](https://caddyserver.com/docs/json/apps/layer4/)

```
{▾	"servers": {
		"": {▾			"listen": [""],			"routes": [{▾				"match": [{•••}],				"handle": [{•••}]			}]		}
	}}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/mholt/caddy-l4](https://github.com/mholt/caddy-l4)**

**Custom builds:**`xcaddy build --with github.com/mholt/caddy-l4/layer4`

Description[🔗](https://caddyserver.com/docs/json/apps/layer4/#docs "Direct link")
----------------------------------------------------------------------------------

App is a Caddy app that operates closest to layer 4 of the OSI model.

Field List
----------

[🔗](https://caddyserver.com/docs/json/apps/layer4/#servers)[servers](https://caddyserver.com/docs/json/apps/layer4/servers/)
Server represents a Caddy layer4 server.

[🔗](https://caddyserver.com/docs/json/apps/layer4/#servers/listen)[servers/listen](https://caddyserver.com/docs/json/apps/layer4/servers/listen/)
There are no docs for this property.

[🔗](https://caddyserver.com/docs/json/apps/layer4/#servers/routes)[servers/routes](https://caddyserver.com/docs/json/apps/layer4/servers/routes/)
Route represents a collection of handlers that are gated by matching and other kinds of logic.

[🔗](https://caddyserver.com/docs/json/apps/layer4/#servers/routes/match)[servers/routes/match](https://caddyserver.com/docs/json/apps/layer4/servers/routes/match/)
ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

Fulfilled by modules in namespace: **layer4.matchers**

*   [crowdsec](https://caddyserver.com/docs/json/apps/layer4/servers/routes/match/crowdsec/)Non-standard
*   [http](https://caddyserver.com/docs/json/apps/layer4/servers/routes/match/http/)Non-standard
*   [ip](https://caddyserver.com/docs/json/apps/layer4/servers/routes/match/ip/)Non-standard
*   [proxy_protocol](https://caddyserver.com/docs/json/apps/layer4/servers/routes/match/proxy_protocol/)Non-standard
*   [ssh](https://caddyserver.com/docs/json/apps/layer4/servers/routes/match/ssh/)Non-standard
*   [tls](https://caddyserver.com/docs/json/apps/layer4/servers/routes/match/tls/)Non-standard
*   [xmpp](https://caddyserver.com/docs/json/apps/layer4/servers/routes/match/xmpp/)Non-standard

[🔗](https://caddyserver.com/docs/json/apps/layer4/#servers/routes/handle)[servers/routes/handle](https://caddyserver.com/docs/json/apps/layer4/servers/routes/handle/)
There are no docs for this property.

Fulfilled by modules in namespace: **layer4.handlers**

*   [echo](https://caddyserver.com/docs/json/apps/layer4/servers/routes/handle/echo/)Non-standard
*   [proxy](https://caddyserver.com/docs/json/apps/layer4/servers/routes/handle/proxy/)Non-standard
*   [proxy_protocol](https://caddyserver.com/docs/json/apps/layer4/servers/routes/handle/proxy_protocol/)Non-standard
*   [tee](https://caddyserver.com/docs/json/apps/layer4/servers/routes/handle/tee/)Non-standard
*   [throttle](https://caddyserver.com/docs/json/apps/layer4/servers/routes/handle/throttle/)Non-standard
*   [tls](https://caddyserver.com/docs/json/apps/layer4/servers/routes/handle/tls/)Non-standard

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH. 

![Image 6](https://cdn.usefathom.com/?h=https%3A%2F%2Fcaddyserver.com&p=%2Fdocs%2Fjson%2Fapps%2Flayer4%2F&r=&sid=GVMGKAKP&qs=%7B%7D&cid=85690731)
