Title: Module http.matchers.host - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.matchers.host

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.matchers.host**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.host#docs "Direct link")
-------------------------------------------------------------------------------------------

`[""]`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.host#docs "Direct link")
-------------------------------------------------------------------------------------------

http.matchers.host matches requests by the Host value (case-insensitive).

When used in a top-level HTTP route, [qualifying domain names](https://caddyserver.com/docs/automatic-https#hostname-requirements) may trigger [automatic HTTPS](https://caddyserver.com/docs/automatic-https), which automatically provisions and renews certificates for you. Before doing this, you should ensure that DNS records for these domains are properly configured, especially A/AAAA pointed at your server.

Automatic HTTPS can be [customized or disabled](https://caddyserver.com/docs/modules/http#servers/automatic_https).

Wildcards (`*`) may be used to represent exactly one label of the hostname, in accordance with RFC 1034 (because host matchers are also used for automatic HTTPS which influences TLS certificates). Thus, a host of `*` matches hosts like `localhost` or `internal` but not `example.com`. To catch all hosts, omit the host matcher entirely.

The wildcard can be useful for matching all subdomains, for example: `*.example.com` matches `foo.example.com` but not `foo.bar.example.com`.

Duplicate entries will return an error.
