Title: Caddyfile Quick-start - Caddy Documentation

URL Source: https://caddyserver.com/docs/quick-starts/caddyfile

Markdown Content:
Caddyfile Quick-start — Caddy Documentation

===============

[![Image 1: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg)](https://caddyserver.com/)

Documentation

 a [![Image 2](https://caddyserver.com/old/resources/images/zerossl-logo.svg)](https://zerossl.com/) project 

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

Caddyfile Quick-start
=====================

Create a new text file named `Caddyfile` (no extension).

The first thing to type in a Caddyfile is your site's address:

```
localhost
```

If the HTTP and HTTPS ports (80 and 443, respectively) are privileged ports on your OS, you will either need to run with elevated privileges or use higher ports. To gain permission, run as root with `sudo -E` or use `sudo setcap cap_net_bind_service=+ep $(which caddy)`. Alternatively, to use higher ports, just change the address to something like `localhost:2080` and change the HTTP port using the [`http_port`](https://caddyserver.com/docs/caddyfile/options) Caddyfile option.

Then hit enter and type what you want it to do, so it looks like this:

```
localhost

respond "Hello, world!"
```

Save this and run Caddy from the same folder that contains your Caddyfile:

`caddy start`
You will probably be asked for your password, because Caddy serves all sites -- even local ones -- over HTTPS by default. (The password prompt should only happen the first time!)

For local HTTPS, Caddy automatically generates certificates and unique private keys for you. The root certificate is added to your system's trust store, which is why the password prompt is necessary. It allows you to develop locally over HTTPS without certificate errors.

(If you get permission errors, you may need to run with elevated privileges or choose a port higher than 1023.)

Either open your browser to [localhost](http://localhost/) or `curl` it:

```
curl https://localhost
Hello, world!
```

You can define multiple sites in a Caddyfile by wrapping them in curly braces `{ }`. Change your Caddyfile to be:

```
localhost {
	respond "Hello, world!"
}

localhost:2016 {
	respond "Goodbye, world!"
}
```

You can give Caddy the updated configuration two ways, either with the API directly:

```
curl localhost:2019/load \
	-H "Content-Type: text/caddyfile" \
	--data-binary @Caddyfile
```

or with the reload command, which does the same API request for you:

`caddy reload`
Try out your new "goodbye" endpoint [in your browser](https://localhost:2016/) or with `curl` to make sure it works:

```
curl https://localhost:2016
Goodbye, world!
```

When you are done with Caddy, make sure to stop it:

`caddy stop`
Further reading
---------------

*   [Caddyfile concepts](https://caddyserver.com/docs/caddyfile/concepts)
*   [Directives](https://caddyserver.com/docs/caddyfile/directives)
*   [Common patterns](https://caddyserver.com/docs/caddyfile/patterns)

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH.
