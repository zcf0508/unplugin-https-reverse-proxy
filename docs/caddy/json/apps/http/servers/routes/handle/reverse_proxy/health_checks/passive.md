Title: apps/http/.../health_checks/passive - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/health_checks/passive/

Markdown Content:
`{▾	"fail_duration": 0,	"max_fails": 0,	"unhealthy_request_count": 0,	"unhealthy_status": [0],	"unhealthy_latency": 0}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/health_checks/passive/#docs "Direct link")
------------------------------------------------------------------------------------------------------------------------------------------

Passive health checks monitor proxied requests for errors or timeouts. To minimally enable passive health checks, specify at least an empty config object with fail_duration > 0. Passive health check state is shared (stored globally), so a failure from one handler will be counted by all handlers; but the tolerances or standards for what defines healthy/unhealthy backends is configured per-proxy-handler.

Passive health checks technically do operate on dynamic upstreams, but are only effective for very busy proxies where the list of upstreams is mostly stable. This is because the shared/global state of upstreams is cleaned up when the upstreams are no longer used. Since dynamic upstreams are allocated dynamically at each request (specifically, each iteration of the proxy loop per request), they are also cleaned up after every request. Thus, if there is a moment when no requests are actively referring to a particular upstream host, the passive health check state will be reset because it will be garbage-collected. It is usually better for the dynamic upstream module to only return healthy, available backends instead.

PassiveHealthChecks holds configuration related to passive health checks (that is, health checks which occur during the normal flow of request proxying).

[🔗](https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/health_checks/passive/#fail_duration)[fail_duration](https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/health_checks/passive/fail_duration/)
How long to remember a failed request to a backend. A duration > 0 enables passive health checking. Default is 0.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/health_checks/passive/#max_fails)[max_fails](https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/health_checks/passive/max_fails/)
The number of failed requests within the FailDuration window to consider a backend as "down". Must be >= 1; default is 1. Requires that FailDuration be > 0.

[🔗](https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/health_checks/passive/#unhealthy_request_count)[unhealthy_request_count](https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/health_checks/passive/unhealthy_request_count/)
Limits the number of simultaneous requests to a backend by marking the backend as "down" if it has this many concurrent requests or more.

[🔗](https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/health_checks/passive/#unhealthy_status)[unhealthy_status](https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/health_checks/passive/unhealthy_status/)
Count the request as failed if the response comes back with one of these status codes.

[🔗](https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/health_checks/passive/#unhealthy_latency)[unhealthy_latency](https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/health_checks/passive/unhealthy_latency/)
Count the request as failed if the response takes at least this long to receive.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.
