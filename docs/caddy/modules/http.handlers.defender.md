Title: Module http.handlers.defender - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.defender

Markdown Content:
Module http.handlers.defender - Caddy Documentation

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

Module http.handlers.defender
=============================

 There is more than one module named **http.handlers.defender**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#docs "Direct link")
-----------------------------------------------------------------------------------------------

Field List
----------

▸github.com/jasonlovesdoggo/caddy-defender

```
{▾	"message": "",	"url": "",	"raw_responder": "",	"ranges": [""],	"whitelist": [""],	"tarpit_config": {▾		"headers": {
			"": ""
		},		"timeout": 0,		"bytes_per_second": 0,		"code": 0	},	"serve_ignore": false}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/jasonlovesdoggo/caddy-defender](https://github.com/jasonlovesdoggo/caddy-defender)**

**Custom builds:**`xcaddy build --with github.com/jasonlovesdoggo/caddy-defender`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#docs "Direct link")
-----------------------------------------------------------------------------------------------

http.handlers.defender implements an HTTP middleware that enforces IP-based rules to protect your site from AIs/Scrapers. It allows blocking or manipulating requests based on client IP addresses using CIDR ranges or predefined ranges for services such as AWS, GCP, OpenAI, and GitHub Copilot.

**JSON Configuration:**

```json
{
      "handler": "defender",
      "raw_responder": "block",
      "ranges": ["openai", "10.0.0.0/8"],
      "message": "Custom block message" // Only for 'custom' responder
    }
```

**Caddyfile Syntax:**

```
defender <responder_type> {
        ranges <cidr_or_predefined...>
        message <custom_message>
    }
```

Supported responder types:

*   `block`: Immediately block requests with 403 Forbidden
*   `custom`: Return a custom message (requires `message` field)
*   `drop`: Drops the connection
*   `garbage`: Respond with random garbage data
*   `redirect`: Redirect requests to a URL with 308 permanent redirect
*   `tarpit`: Stream data at a slow, but configurable rate to stall bots and pollute AI training.

For a list of predefined ranges, see the the [readme] [readme]: [https://github.com/JasonLovesDoggo/caddy-defender#embedded-ip-ranges](https://github.com/JasonLovesDoggo/caddy-defender#embedded-ip-ranges)

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#message)message
Message specifies the custom response message for 'custom' responder type. Required only when using 'custom' responder.

[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#url)url
URL specifies the custom URL to redirect clients to for 'redirect' responder type. Required only when using 'redirect' responder.

[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#raw_responder)raw_responder
RawResponder defines the response strategy for blocked requests. Required. Must be one of: "block", "custom", "drop", "garbage", "redirect", "tarpit"

[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#ranges)ranges
Ranges specifies IP ranges to block, which can be either:

*   CIDR notations (e.g., "192.168.1.0/24")
*   Predefined service keys (e.g., "openai", "aws") Default:

[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#whitelist)whitelist
An optional whitelist of IP addresses to exclude from blocking. If empty, no IPs are whitelisted. NOTE: this only supports IP addresses, not ranges. Default: []

[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#tarpit_config)tarpit_config
An optional configuration for the 'tarpit' responder Default: {Headers: {}, timeout: 30s, ResponseCode: 200}

Config holds the tarpit responder's configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#tarpit_config/headers)tarpit_config/headers
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#tarpit_config/timeout)tarpit_config/timeout
A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.

[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#tarpit_config/bytes_per_second)tarpit_config/bytes_per_second
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#tarpit_config/code)tarpit_config/code
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#serve_ignore)serve_ignore
ServeIgnore specifies whether to serve a robots.txt file with a "Disallow: /" directive Default: false

▸github.com/jasonlovesdoggo/caddy-defender

`{▾	"additional_ranges": [""],	"responder": {•••},	"responder_config": {•••}}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/jasonlovesdoggo/caddy-defender](https://github.com/jasonlovesdoggo/caddy-defender)**

**Custom builds:**`xcaddy build --with github.com/jasonlovesdoggo/caddy-defender`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#docs "Direct link")
-----------------------------------------------------------------------------------------------

http.handlers.defender implements an HTTP middleware that enforces IP-based rules.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#additional_ranges)additional_ranges
Additional IP ranges specified by the user

[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#responder)responder
Responder backend to use Use concrete responder type for JSON

Fulfilled by modules in namespace: **undefined**

[🔗](https://caddyserver.com/docs/modules/http.handlers.defender#responder_config)responder_config
There are no docs for this property.

Fulfilled by modules in namespace: **undefined**

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH.
