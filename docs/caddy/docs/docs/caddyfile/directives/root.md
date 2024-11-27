Title: root (Caddyfile directive) - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/directives/root

Markdown Content:
root (Caddyfile directive) — Caddy Documentation
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

root
====

Sets the root path of the site, used by various matchers and directives that access the file system. If unset, the default site root is the current working directory.

Specifically, this directive sets the `{http.vars.root}` placeholder. It is mutually exclusive to other `root` directives in the same block, so it is safe to define multiple roots with matchers that intersect: they will not cascade and overwrite each other.

This directive does not automatically enable serving static files, so it is often used in conjunction with the [`file_server` directive](https://caddyserver.com/docs/caddyfile/directives/file_server) or the [`php_fastcgi` directive](https://caddyserver.com/docs/caddyfile/directives/php_fastcgi).

Syntax
------

```
root [<matcher>] <path>
```

*   **<path\>** is the path to use for the site root.

Prior to v2.8.0, the `<path>` argument could be confused by the parser for a [matcher token](https://caddyserver.com/docs/caddyfile/matchers#syntax) if it began with `/`, so it was necessary to specify a wildcard matcher token (`*`).

Examples
--------

Set the site root to `/home/bob/public_html` (assumes Caddy is running as the user `bob`):

If you're running Caddy as a systemd service, reading files from `/home` will not work, because the `caddy` user does not have "executable" permission on the `/home` directory (necessary for traversal). It's recommended that you place your files in `/srv` or `/var/www/html` instead.

```
root * /home/bob/public_html
```

Note that prior to v2.8.0, a [wildcard matcher](https://caddyserver.com/docs/caddyfile/matchers#wildcard-matchers) was required here because the first argument is ambiguous with a [path matcher](https://caddyserver.com/docs/caddyfile/matchers#path-matchers), i.e. `root * /srv`, but it can now be simplified to `root /srv`.

Set the site root to `public_html` (relative to current working directory) for all requests:

```
root public_html
```

Change the site root only for requests in `/foo/*`:

```
root /foo/* /home/user/public_html/foo
```

The `root` directive is commonly paired with [`file_server`](https://caddyserver.com/docs/caddyfile/directives/file_server) to serve static files and/or with [`php_fastcgi`](https://caddyserver.com/docs/caddyfile/directives/php_fastcgi) to serve a PHP site:

```
example.com {
	root * /srv
	file_server
}
```

![Image 10: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project  
in partnership with [Ardan Labs](https://www.ardanlabs.com/)  
[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

© 2024 ZeroSSL. All rights reserved.  
Caddy® is a registered trademark of ZeroSSL GmbH.
