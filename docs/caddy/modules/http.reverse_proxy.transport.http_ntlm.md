Title: Module http.reverse_proxy.transport.http_ntlm - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm

Markdown Content:
[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#tls)tls
Configures TLS to the upstream. Setting this to an empty struct is sufficient to enable TLS with reasonable defaults.

TLSConfig holds configuration related to the TLS configuration for the transport/client.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#tls/ca)tls/ca
Certificate authority module which provides the certificate pool of trusted certificates

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#tls/root_ca_pool)tls/root_ca_pool
Deprecated: Use the `ca` field with the `tls.ca_pool.source.inline` module instead. Optional list of base64-encoded DER-encoded CA certificates to trust.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#tls/root_ca_pem_files)tls/root_ca_pem_files
Deprecated: Use the `ca` field with the `tls.ca_pool.source.file` module instead. List of PEM-encoded CA certificate files to add to the same trust store as RootCAPool (or root_ca_pool in the JSON).

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#tls/client_certificate_file)tls/client_certificate_file
PEM-encoded client certificate filename to present to servers.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#tls/client_certificate_key_file)tls/client_certificate_key_file
PEM-encoded key to use with the client certificate.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#tls/client_certificate_automate)tls/client_certificate_automate
If specified, Caddy will use and automate a client certificate with this subject name.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#tls/insecure_skip_verify)tls/insecure_skip_verify
If true, TLS verification of server certificates will be disabled. This is insecure and may be removed in the future. Do not use this option except in testing or local development environments.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#tls/handshake_timeout)tls/handshake_timeout
The duration to allow a TLS handshake to a server. Default: No timeout.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#tls/server_name)tls/server_name
The server name used when verifying the certificate received in the TLS handshake. By default, this will use the upstream address' host part. You only need to override this if your upstream address does not match the certificate the upstream is likely to use. For example if the upstream address is an IP address, then you would need to configure this to the hostname being served by the upstream server. Currently, this does not support placeholders because the TLS config is not provisioned on each connection, so a static value must be used.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#tls/renegotiation)tls/renegotiation
TLS renegotiation level. TLS renegotiation is the act of performing subsequent handshakes on a connection after the first. The level can be:

*   "never": (the default) disables renegotiation.
*   "once": allows a remote server to request renegotiation once per connection.
*   "freely": allows a remote server to repeatedly request renegotiation.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#tls/except_ports)tls/except_ports
Skip TLS ports specifies a list of upstream ports on which TLS should not be attempted even if it is configured. Handy when using dynamic upstreams that return HTTP and HTTPS endpoints too. When specified, TLS will automatically be configured on the transport. The value can be a list of any valid tcp port numbers, default empty.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#tls/curves)tls/curves
The list of elliptic curves to support. Caddy's defaults are modern and secure.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#keep_alive)keep_alive
Configures HTTP Keep-Alive (enabled by default). Should only be necessary if rigorous testing has shown that tuning this helps improve performance.

KeepAlive holds configuration pertaining to HTTP Keep-Alive.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#keep_alive/enabled)keep_alive/enabled
Whether HTTP Keep-Alive is enabled. Default: `true`

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#keep_alive/probe_interval)keep_alive/probe_interval
How often to probe for liveness. Default: `30s`.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#keep_alive/max_idle_conns)keep_alive/max_idle_conns
Maximum number of idle connections. Default: `0`, which means no limit.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#keep_alive/max_idle_conns_per_host)keep_alive/max_idle_conns_per_host
Maximum number of idle connections per host. Default: `32`.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#keep_alive/idle_timeout)keep_alive/idle_timeout
How long connections should be kept alive when idle. Default: `2m`.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#compression)compression
Whether to enable compression to upstream. Default: true

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#max_conns_per_host)max_conns_per_host
Maximum number of connections per host. Default: 0 (no limit)

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#dial_timeout)dial_timeout
How long to wait before timing out trying to connect to an upstream.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#dial_fallback_delay)dial_fallback_delay
How long to wait before spawning an RFC 6555 Fast Fallback connection. A negative value disables this.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

How long to wait for reading response headers from server.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#expect_continue_timeout)expect_continue_timeout
The length of time to wait for a server's first response headers after fully writing the request headers if the request has a header "Expect: 100-continue".

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

The maximum bytes to read from response headers.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#write_buffer_size)write_buffer_size
The size of the write buffer in bytes.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#read_buffer_size)read_buffer_size
The size of the read buffer in bytes.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm#versions)versions
The versions of HTTP to support. As a special case, "h2c" can be specified to use H2C (HTTP/2 over Cleartext) to the upstream (this feature is experimental and subject to change or removal). Default: ["1.1", "2"]
