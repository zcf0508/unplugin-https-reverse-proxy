Title: Module layer4.handlers.proxy - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/layer4.handlers.proxy

Markdown Content:
layer4.handlers.proxy is a handler that can proxy connections.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#upstreams)upstreams
Upstreams is the list of backends to proxy to.

Upstream represents a proxy upstream.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#upstreams/dial)upstreams/dial
The network addresses to dial. Supports placeholders, but not port ranges currently (each address must be exactly 1 socket).

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#upstreams/tls)upstreams/tls
Set this field to enable TLS to the upstream.

TLSConfig holds configuration related to the TLS configuration for the transport/client.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#upstreams/tls/ca)upstreams/tls/ca
Certificate authority module which provides the certificate pool of trusted certificates

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#upstreams/tls/root_ca_pool)upstreams/tls/root_ca_pool
Deprecated: Use the `ca` field with the `tls.ca_pool.source.inline` module instead. Optional list of base64-encoded DER-encoded CA certificates to trust.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#upstreams/tls/root_ca_pem_files)upstreams/tls/root_ca_pem_files
Deprecated: Use the `ca` field with the `tls.ca_pool.source.file` module instead. List of PEM-encoded CA certificate files to add to the same trust store as RootCAPool (or root_ca_pool in the JSON).

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#upstreams/tls/client_certificate_file)upstreams/tls/client_certificate_file
PEM-encoded client certificate filename to present to servers.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#upstreams/tls/client_certificate_key_file)upstreams/tls/client_certificate_key_file
PEM-encoded key to use with the client certificate.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#upstreams/tls/client_certificate_automate)upstreams/tls/client_certificate_automate
If specified, Caddy will use and automate a client certificate with this subject name.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#upstreams/tls/insecure_skip_verify)upstreams/tls/insecure_skip_verify
If true, TLS verification of server certificates will be disabled. This is insecure and may be removed in the future. Do not use this option except in testing or local development environments.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#upstreams/tls/handshake_timeout)upstreams/tls/handshake_timeout
The duration to allow a TLS handshake to a server. Default: No timeout.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#upstreams/tls/server_name)upstreams/tls/server_name
The server name used when verifying the certificate received in the TLS handshake. By default, this will use the upstream address' host part. You only need to override this if your upstream address does not match the certificate the upstream is likely to use. For example if the upstream address is an IP address, then you would need to configure this to the hostname being served by the upstream server. Currently, this does not support placeholders because the TLS config is not provisioned on each connection, so a static value must be used.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#upstreams/tls/renegotiation)upstreams/tls/renegotiation
TLS renegotiation level. TLS renegotiation is the act of performing subsequent handshakes on a connection after the first. The level can be:

*   "never": (the default) disables renegotiation.
*   "once": allows a remote server to request renegotiation once per connection.
*   "freely": allows a remote server to repeatedly request renegotiation.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#upstreams/tls/except_ports)upstreams/tls/except_ports
Skip TLS ports specifies a list of upstream ports on which TLS should not be attempted even if it is configured. Handy when using dynamic upstreams that return HTTP and HTTPS endpoints too. When specified, TLS will automatically be configured on the transport. The value can be a list of any valid tcp port numbers, default empty.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#upstreams/tls/curves)upstreams/tls/curves
The list of elliptic curves to support. Caddy's defaults are modern and secure.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#upstreams/max_connections)upstreams/max_connections
How many connections this upstream is allowed to have before being marked as unhealthy (if > 0).

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#health_checks)health_checks
Health checks update the status of backends, whether they are up or down. Down backends will not be proxied to.

HealthChecks configures active and passive health checks.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#health_checks/active)health_checks/active
Active health checks run in the background on a timer. To minimally enable active health checks, set either path or port (or both).

ActiveHealthChecks holds configuration related to active health checks (that is, health checks which occur independently in a background goroutine).

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#health_checks/active/port)health_checks/active/port
The port to use (if different from the upstream's dial address) for health checks.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#health_checks/active/interval)health_checks/active/interval
How frequently to perform active health checks (default 30s).

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#health_checks/active/timeout)health_checks/active/timeout
How long to wait for a connection to be established with peer before considering it unhealthy (default 5s).

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#health_checks/passive)health_checks/passive
Passive health checks monitor proxied connections for errors or timeouts. To minimally enable passive health checks, specify at least an empty config object.

PassiveHealthChecks holds configuration related to passive health checks (that is, health checks which occur during the normal flow of connection proxying).

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#health_checks/passive/fail_duration)health_checks/passive/fail_duration
How long to remember a failed connection to a backend. A duration > 0 enables passive health checking. Default 0.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#health_checks/passive/max_fails)health_checks/passive/max_fails
The number of failed connections within the FailDuration window to consider a backend as "down". Must be >= 1; default is 1. Requires that FailDuration be > 0.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#health_checks/passive/unhealthy_connnection_count)health_checks/passive/unhealthy_connnection_count
Limits the number of simultaneous connections to a backend by marking the backend as "down" if it has this many or more concurrent connections.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#load_balancing)load_balancing
Load balancing distributes load/connections between backends.

LoadBalancing has parameters related to load balancing.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#load_balancing/selection)load_balancing/selection
A selection policy is how to choose an available backend. The default policy is random selection.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#load_balancing/try_duration)load_balancing/try_duration
How long to try selecting available backends for each connection if the next available host is down. By default, this retry is disabled. Clients will wait for up to this long while the load balancer tries to find an available upstream host.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#load_balancing/try_interval)load_balancing/try_interval
How long to wait between selecting the next host from the pool. Default is 250ms. Only relevant when a connection to an upstream host fails. Be aware that setting this to 0 with a non-zero try_duration can cause the CPU to spin if all backends are down and latency is very low.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.proxy#proxy_protocol)proxy_protocol
Specifies the version of the Proxy Protocol header to add, either "v1" or "v2". Ref: [https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt](https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt)
