Title: Module http.ip_sources.edgeone - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.ip_sources.edgeone

Markdown Content:
http.ip_sources.edgeone provides a range of IP address prefixes (CIDRs) retrieved from EdgeOne.

[🔗](https://caddyserver.com/docs/modules/http.ip_sources.edgeone#interval)interval
Interval controls how often the IP lists are refreshed.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.ip_sources.edgeone#timeout)timeout
Timeout controls the maximum duration for each HTTP fetch.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.ip_sources.edgeone#urls)urls
URLs is a list of endpoints to fetch CIDR lists from. Each endpoint should return one CIDR per line, or a text body containing CIDRs parseable by caddyhttp.CIDRExpressionToPrefix. Empty or commented lines (#) are ignored.

[🔗](https://caddyserver.com/docs/modules/http.ip_sources.edgeone#version)version
Version filters the IP address type: "v4" or "v6" (optional).

[🔗](https://caddyserver.com/docs/modules/http.ip_sources.edgeone#area)area
Area filters the region: "global", "mainland-china", or "overseas" (optional).

[🔗](https://caddyserver.com/docs/modules/http.ip_sources.edgeone#max_retries)max_retries
Retry and backoff settings (optional; sensible defaults applied).

[🔗](https://caddyserver.com/docs/modules/http.ip_sources.edgeone#backoff_initial)backoff_initial
Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.ip_sources.edgeone#backoff_max)backoff_max
Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.ip_sources.edgeone#jitter)jitter
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.ip_sources.edgeone#respect_retry_after)respect_retry_after
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.ip_sources.edgeone#persist_path)persist_path
Persistence options: by default, the plugin persists cache to disk so that ETag/Last-Modified and the last good snapshot survive restarts. If empty, defaults to a file in Caddy's app data directory.

[🔗](https://caddyserver.com/docs/modules/http.ip_sources.edgeone#persist_ttl)persist_ttl
Optional TTL for using persisted snapshot. If set, and the snapshot is older than this duration at startup, ranges will not be loaded from disk (validators may still be used). Default: disabled.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.
