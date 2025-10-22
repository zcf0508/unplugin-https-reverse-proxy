Title: Module http.handlers.push - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.push

Markdown Content:
Module http.handlers.push - Caddy Documentation

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

Module http.handlers.push
=========================

 There is more than one module named **Module http.handlers.push**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.push#docs "Direct link")
-------------------------------------------------------------------------------------------

Field List
----------

▸github.com/caddyserver/caddy

```
{▾	"resources": [{▾		"method": "",		"target": ""	}],	"headers": {▾		"add": {
			"": [""]
		},		"set": {
			"": [""]
		},		"delete": [""],		"replace": {
			"": [{▾				"search": "",				"search_regexp": "",				"replace": ""			}]
		}	}}
```

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.push#docs "Direct link")
-------------------------------------------------------------------------------------------

http.handlers.push is a middleware for HTTP/2 server push. Note that HTTP/2 server push has been deprecated by some clients and its use is discouraged unless you can accurately predict which resources actually need to be pushed to the client; it can be difficult to know what the client already has cached. Pushing unnecessary resources results in worse performance. Consider using HTTP 103 Early Hints instead.

This handler supports pushing from Link headers; in other words, if the eventual response has Link headers, this handler will push the resources indicated by those headers, even without specifying any resources in its config.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.push#resources)resources
The resources to push.

Resource represents a request for a resource to push.

[🔗](https://caddyserver.com/docs/modules/http.handlers.push#resources/method)resources/method
Method is the request method, which must be GET or HEAD. Default is GET.

[🔗](https://caddyserver.com/docs/modules/http.handlers.push#resources/target)resources/target
Target is the path to the resource being pushed.

[🔗](https://caddyserver.com/docs/modules/http.handlers.push#headers)headers
Headers to modify for the push requests.

HeaderConfig configures headers for synthetic push requests.

[🔗](https://caddyserver.com/docs/modules/http.handlers.push#headers/add)headers/add
Adds HTTP headers; does not replace any existing header fields.

[🔗](https://caddyserver.com/docs/modules/http.handlers.push#headers/set)headers/set
Sets HTTP headers; replaces existing header fields.

[🔗](https://caddyserver.com/docs/modules/http.handlers.push#headers/delete)headers/delete
Names of HTTP header fields to delete. Basic wildcards are supported:

*   Start with `*` for all field names with the given suffix;
*   End with `*` for all field names with the given prefix;
*   Start and end with `*` for all field names containing a substring.

[🔗](https://caddyserver.com/docs/modules/http.handlers.push#headers/replace)headers/replace
Performs in-situ substring replacements of HTTP headers. Keys are the field names on which to perform the associated replacements. If the field name is `*`, the replacements are performed on all header fields.

[🔗](https://caddyserver.com/docs/modules/http.handlers.push#headers/replace/search)headers/replace/search
The substring to search for.

[🔗](https://caddyserver.com/docs/modules/http.handlers.push#headers/replace/search_regexp)headers/replace/search_regexp
The regular expression to search with.

[🔗](https://caddyserver.com/docs/modules/http.handlers.push#headers/replace/replace)headers/replace/replace
The string with which to replace matches.

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH.
