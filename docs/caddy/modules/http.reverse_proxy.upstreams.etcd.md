Title: Module http.reverse_proxy.upstreams.etcd - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.etcd

Markdown Content:
There is more than one module named **Module http.reverse_proxy.upstreams.etcd**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.etcd#docs "Direct link")
----------------------------------------------------------------------------------------------------------

Field List
----------

`{▾	"endpoints": [""],	"key": "",	"version_key": "",	"timeout": 0}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/deanchou/caddy_etcd](https://github.com/deanchou/caddy_etcd)**

**Custom builds:**`xcaddy build --with github.com/deanchou/caddy_etcd`

Description[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.etcd#docs "Direct link")
----------------------------------------------------------------------------------------------------------

http.reverse_proxy.upstreams.etcd is a Caddy module that integrates etcd with reverse_proxy.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.etcd#endpoints)endpoints
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.etcd#key)key
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.etcd#version_key)version_key
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.etcd#timeout)timeout
Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.
