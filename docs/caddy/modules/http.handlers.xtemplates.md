Title: Module http.handlers.xtemplates - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.xtemplates

Markdown Content:
Module http.handlers.xtemplates - Caddy Documentation

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

Module http.handlers.xtemplates
===============================

 There is more than one module named **http.handlers.xtemplates**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplates#docs "Direct link")
-------------------------------------------------------------------------------------------------

Field List
----------

▸github.com/infogulch/caddy-xtemplate

`{▾	"fs_module": "",	"root": "",	"delimiters": [""],	"func_modules": [""],	"database": {▾		"driver": "",		"connstr": ""	}}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/infogulch/caddy-xtemplate](https://github.com/infogulch/caddy-xtemplate)**

**Custom builds:**`xcaddy build --with github.com/infogulch/caddy-xtemplate`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplates#docs "Direct link")
-------------------------------------------------------------------------------------------------

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplates#fs_module)fs_module
The filesystem from which to load template files. May be "native" (default), or the caddy module ID of a module that implements the CustomFSProvider interface

ModuleID is a string that uniquely identifies a Caddy module. A module ID is lightly structured. It consists of dot-separated labels which form a simple hierarchy from left to right. The last label is the module name, and the labels before that constitute the namespace (or scope).

Thus, a module ID has the form: .

An ID with no dot has the empty namespace, which is appropriate for app modules (these are "top-level" modules that Caddy core loads and runs).

Module IDs should be lowercase and use underscores (_) instead of spaces.

Examples of valid IDs:

*   http
*   http.handlers.file_server
*   caddy.logging.encoders.json

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplates#root)root
The root path from which to load template files within the selected filesystem (the native filesystem by default). Default is the current working directory.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplates#delimiters)delimiters
The template action delimiters. If set, must be precisely two elements: the opening and closing delimiters. Default: `["{{", "}}"]`

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplates#func_modules)func_modules
A list of caddy module IDs from which to load template FuncMaps, by

ModuleID is a string that uniquely identifies a Caddy module. A module ID is lightly structured. It consists of dot-separated labels which form a simple hierarchy from left to right. The last label is the module name, and the labels before that constitute the namespace (or scope).

Thus, a module ID has the form: .

An ID with no dot has the empty namespace, which is appropriate for app modules (these are "top-level" modules that Caddy core loads and runs).

Module IDs should be lowercase and use underscores (_) instead of spaces.

Examples of valid IDs:

*   http
*   http.handlers.file_server
*   caddy.logging.encoders.json

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplates#database)database
The database driver and connection string. If set, must be precicely two elements: the driver name and the connection string.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplates#database/driver)database/driver
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplates#database/connstr)database/connstr
There are no docs for this property.

▸github.com/infogulch/caddy-xtemplates

`{▾	"file_root": "",	"delimiters": [""],	"database": [""]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/infogulch/caddy-xtemplates](https://github.com/infogulch/caddy-xtemplates)**

**Custom builds:**`xcaddy build --with github.com/infogulch/caddy-xtemplates`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplates#docs "Direct link")
-------------------------------------------------------------------------------------------------

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplates#file_root)file_root
The root path from which to load files. Required if template functions accessing the file system are used (such as include). Default is `{http.vars.root}` if set, or current working directory otherwise.

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplates#delimiters)delimiters
The template action delimiters. If set, must be precisely two elements: the opening and closing delimiters. Default: `["{{", "}}"]`

[🔗](https://caddyserver.com/docs/modules/http.handlers.xtemplates#database)database
The database driver and connection string. If set, must be precicely two elements: the driver name and the connection string.

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH. 

![Image 6](https://cdn.usefathom.com/?h=https%3A%2F%2Fcaddyserver.com&p=%2Fdocs%2Fmodules%2Fhttp.handlers.xtemplates&r=&sid=GVMGKAKP&qs=%7B%7D&cid=13738052)
