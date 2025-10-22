Title: Module http.matchers.file - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.matchers.file

Markdown Content:
Module http.matchers.file - Caddy Documentation

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

Module http.matchers.file
=========================

 There is more than one module named **Module http.matchers.file**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.file#docs "Direct link")
-------------------------------------------------------------------------------------------

Field List
----------

▸github.com/caddyserver/caddy

`{▾	"fs": "",	"root": "",	"try_files": [""],	"try_policy": "",	"split_path": [""]}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.file#docs "Direct link")
-------------------------------------------------------------------------------------------

http.matchers.file is an HTTP request matcher that can match requests based upon file existence.

Upon matching, three new placeholders will be made available:

*   `{http.matchers.file.relative}` The root-relative path of the file. This is often useful when rewriting requests.
*   `{http.matchers.file.absolute}` The absolute path of the matched file.
*   `{http.matchers.file.type}` Set to "directory" if the matched file is a directory, "file" otherwise.
*   `{http.matchers.file.remainder}` Set to the remainder of the path if the path was split by `split_path`.

Even though file matching may depend on the OS path separator, the placeholder values always use /.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.matchers.file#fs)fs
The file system implementation to use. By default, the local disk file system will be used.

[🔗](https://caddyserver.com/docs/modules/http.matchers.file#root)root
The root directory, used for creating absolute file paths, and required when working with relative paths; if not specified, `{http.vars.root}` will be used, if set; otherwise, the current directory is assumed. Accepts placeholders.

[🔗](https://caddyserver.com/docs/modules/http.matchers.file#try_files)try_files
The list of files to try. Each path here is considered related to Root. If nil, the request URL's path will be assumed. Files and directories are treated distinctly, so to match a directory, the filepath MUST end in a forward slash `/`. To match a regular file, there must be no trailing slash. Accepts placeholders. If the policy is "first_exist", then an error may be triggered as a fallback by configuring "=" followed by a status code number, for example "=404".

[🔗](https://caddyserver.com/docs/modules/http.matchers.file#try_policy)try_policy
How to choose a file in TryFiles. Can be:

*   first_exist
*   first_exist_fallback
*   smallest_size
*   largest_size
*   most_recently_modified

Default is first_exist.

[🔗](https://caddyserver.com/docs/modules/http.matchers.file#split_path)split_path
A list of delimiters to use to split the path in two when trying files. If empty, no splitting will occur, and the path will be tried as-is. For each split value, the left-hand side of the split, including the split value, will be the path tried. For example, the path `/remote.php/dav/` using the split value `.php` would try the file `/remote.php`. Each delimiter must appear at the end of a URI path component in order to be used as a split delimiter.

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH.
