Title: Module http.ip_sources.dns - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.ip_sources.dns

Markdown Content:
There is more than one module named **Module http.ip_sources.dns**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.ip_sources.dns#docs "Direct link")
--------------------------------------------------------------------------------------------

Field List
----------

`{▾	"hosts": [""],	"interval": 0}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/fvbommel/caddy-dns-ip-range](https://github.com/fvbommel/caddy-dns-ip-range)**

**Custom builds:**`xcaddy build --with github.com/fvbommel/caddy-dns-ip-range`

Description[🔗](https://caddyserver.com/docs/modules/http.ip_sources.dns#docs "Direct link")
--------------------------------------------------------------------------------------------

http.ip_sources.dns provides a range of IP addresses associated with a DNS name. Each range will only contain a single IP.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.ip_sources.dns#hosts)hosts
A list of DNS names to look up.

[🔗](https://caddyserver.com/docs/modules/http.ip_sources.dns#interval)interval
The refresh interval. Defaults to DefaultInterval.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.
