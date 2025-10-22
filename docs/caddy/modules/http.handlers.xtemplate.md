Title: Module http.handlers.xtemplate - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.xtemplate

Markdown Content:
Module http.handlers.xtemplate - Caddy Documentation

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

Module http.handlers.xtemplate
==============================

 There is more than one module named **http.handlers.xtemplate**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#docs "Direct link")
------------------------------------------------------------------------------------------------

Field List
----------

▸github.com/infogulch/xtemplate-caddy

```
{▾	"template": {▾		"path": "",		"template_extension": "",		"delimiters": {▾			"left": "",			"right": ""		}	},	"context": {▾		"path": ""	},	"database": {▾		"driver": "",		"connstr": ""	},	"config": {
		"": ""
	},	"log_level": 0,	"watch_template_path": false,	"watch_context_path": false,	"funcs_modules": [""]}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/infogulch/xtemplate-caddy](https://github.com/infogulch/xtemplate-caddy)**

**Custom builds:**`xcaddy build --with github.com/infogulch/xtemplate-caddy`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#docs "Direct link")
------------------------------------------------------------------------------------------------

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#template)template
Control where and how templates are loaded.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#template/path)template/path
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#template/template_extension)template/template_extension
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#template/delimiters)template/delimiters
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#template/delimiters/left)template/delimiters/left
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#template/delimiters/right)template/delimiters/right
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#context)context
Control where the templates may have dynamic access the filesystem.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#context/path)context/path
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#database)database
The database driver and connection string. If set, must be precicely two elements: the driver name and the connection string.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#database/driver)database/driver
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#database/connstr)database/connstr
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#config)config
User configration, accessible in the template execution context as `.Config`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#log_level)log_level
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#watch_template_path)watch_template_path
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#watch_context_path)watch_context_path
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#funcs_modules)funcs_modules
There are no docs for this property.

▸github.com/infogulch/xtemplate

```
{▾	"template_root": "",	"context_root": "",	"delimiters": [""],	"database": {▾		"driver": "",		"connstr": ""	},	"config": {
		"": ""
	},	"funcs_modules": [""]}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/infogulch/xtemplate](https://github.com/infogulch/xtemplate)**

**Custom builds:**`xcaddy build --with github.com/infogulch/xtemplate/caddy`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#docs "Direct link")
------------------------------------------------------------------------------------------------

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#template_root)template_root
The root path from which to load template files within the selected filesystem (the native filesystem by default). Default is the current working directory.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#context_root)context_root
The root path to reference files from within template funcs. The default, empty string means the local filesystem funcs in templates are disabled.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#delimiters)delimiters
The template action delimiters. If set, must be precisely two elements: the opening and closing delimiters. Default: `["{{", "}}"]`

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#database)database
The database driver and connection string. If set, must be precicely two elements: the driver name and the connection string.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#database/driver)database/driver
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#database/connstr)database/connstr
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#config)config
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplate#funcs_modules)funcs_modules
There are no docs for this property.

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH.
