Title: Module http.reverse_proxy.upstreams.srv - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.srv

Markdown Content:
http.reverse_proxy.upstreams.srv provides upstreams from SRV lookups. The lookup DNS name can be configured either by its individual parts (that is, specifying the service, protocol, and name separately) to form the standard "_service._proto.name" domain, or the domain can be specified directly in name by leaving service and proto empty. See RFC 2782.

Lookups are cached and refreshed at the configured refresh interval.

Returned upstreams are sorted by priority and weight.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.srv#service)service
The service label.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.srv#proto)proto
The protocol label; either tcp or udp.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.srv#name)name
The name label; or, if service and proto are empty, the entire domain name to look up.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.srv#refresh)refresh
The interval at which to refresh the SRV lookup. Results are cached between lookups. Default: 1m

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.srv#grace_period)grace_period
If > 0 and there is an error with the lookup, continue to use the cached results for up to this long before trying again, (even though they are stale) instead of returning an error to the client. Default: 0s.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.srv#resolver)resolver
Configures the DNS resolver used to resolve the SRV address to SRV records.

UpstreamResolver holds the set of addresses of DNS resolvers of upstream addresses

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.srv#resolver/addresses)resolver/addresses
The addresses of DNS resolvers to use when looking up the addresses of proxy upstreams. It accepts [network addresses](https://caddyserver.com/docs/conventions#network-addresses) with port range of only 1. If the host is an IP address, it will be dialed directly to resolve the upstream server. If the host is not an IP address, the addresses are resolved using the [name resolution convention](https://golang.org/pkg/net/#hdr-Name_Resolution) of the Go standard library. If the array contains more than 1 resolver address, one is chosen at random.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.srv#dial_timeout)dial_timeout
If Resolver is configured, how long to wait before timing out trying to connect to the DNS server.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.srv#dial_fallback_delay)dial_fallback_delay
If Resolver is configured, how long to wait before spawning an RFC 6555 Fast Fallback connection. A negative value disables this.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.
