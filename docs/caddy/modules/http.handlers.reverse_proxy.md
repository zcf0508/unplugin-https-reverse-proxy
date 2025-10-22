Title: Module http.handlers.reverse_proxy - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.reverse_proxy

Markdown Content:
[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#transport)transport
Configures the method of transport for the proxy. A transport is what performs the actual "round trip" to the backend. The default transport is plaintext HTTP.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#circuit_breaker)circuit_breaker
A circuit breaker may be used to relieve pressure on a backend that is beginning to exhibit symptoms of stress or latency. By default, there is no circuit breaker.

Fulfilled by modules in namespace: **http.reverse_proxy.circuit_breakers**

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#load_balancing)load_balancing
Load balancing distributes load/requests between backends.

LoadBalancing has parameters related to load balancing.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#load_balancing/selection_policy)load_balancing/selection_policy
A selection policy is how to choose an available backend. The default policy is random selection.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#load_balancing/retries)load_balancing/retries
How many times to retry selecting available backends for each request if the next available host is down. If try_duration is also configured, then retries may stop early if the duration is reached. By default, retries are disabled (zero).

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#load_balancing/try_duration)load_balancing/try_duration
How long to try selecting available backends for each request if the next available host is down. Clients will wait for up to this long while the load balancer tries to find an available upstream host. If retries is also configured, tries may stop early if the maximum retries is reached. By default, retries are disabled (zero duration).

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#load_balancing/try_interval)load_balancing/try_interval
How long to wait between selecting the next host from the pool. Default is 250ms if try_duration is enabled, otherwise zero. Only relevant when a request to an upstream host fails. Be aware that setting this to 0 with a non-zero try_duration can cause the CPU to spin if all backends are down and latency is very low.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#load_balancing/retry_match)load_balancing/retry_match
A list of matcher sets that restricts with which requests retries are allowed. A request must match any of the given matcher sets in order to be retried if the connection to the upstream succeeded but the subsequent round-trip failed. If the connection to the upstream failed, a retry is always allowed. If unspecified, only GET requests will be allowed to be retried. Note that a retry is done with the next available host according to the load balancing policy.

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

Fulfilled by modules in namespace: **http.matchers**

*   [client_ip](https://caddyserver.com/docs/modules/http.matchers.client_ip)
*   [expression](https://caddyserver.com/docs/modules/http.matchers.expression)
*   [file](https://caddyserver.com/docs/modules/http.matchers.file)
*   [header](https://caddyserver.com/docs/modules/http.matchers.header)
*   [header_regexp](https://caddyserver.com/docs/modules/http.matchers.header_regexp)
*   [host](https://caddyserver.com/docs/modules/http.matchers.host)
*   [method](https://caddyserver.com/docs/modules/http.matchers.method)
*   [not](https://caddyserver.com/docs/modules/http.matchers.not)
*   [path](https://caddyserver.com/docs/modules/http.matchers.path)
*   [path_regexp](https://caddyserver.com/docs/modules/http.matchers.path_regexp)
*   [protocol](https://caddyserver.com/docs/modules/http.matchers.protocol)
*   [query](https://caddyserver.com/docs/modules/http.matchers.query)
*   [remote_ip](https://caddyserver.com/docs/modules/http.matchers.remote_ip)
*   [tls](https://caddyserver.com/docs/modules/http.matchers.tls)
*   [vars](https://caddyserver.com/docs/modules/http.matchers.vars)
*   [vars_regexp](https://caddyserver.com/docs/modules/http.matchers.vars_regexp)
*   [client_asn](https://caddyserver.com/docs/modules/http.matchers.client_asn)Non-standard
*   [client_country](https://caddyserver.com/docs/modules/http.matchers.client_country)Non-standard
*   [conneg](https://caddyserver.com/docs/modules/http.matchers.conneg)Non-standard
*   [crawler](https://caddyserver.com/docs/modules/http.matchers.crawler)Non-standard
*   [cron](https://caddyserver.com/docs/modules/http.matchers.cron)Non-standard
*   [dnsfetcher](https://caddyserver.com/docs/modules/http.matchers.dnsfetcher)Non-standard
*   [dynamic_client_ip](https://caddyserver.com/docs/modules/http.matchers.dynamic_client_ip)Non-standard
*   [dynamic_remote_ip](https://caddyserver.com/docs/modules/http.matchers.dynamic_remote_ip)Non-standard
*   [exec_noop](https://caddyserver.com/docs/modules/http.matchers.exec_noop)Non-standard
*   [execnopmatch](https://caddyserver.com/docs/modules/http.matchers.execnopmatch)Non-standard
*   [fail2ban](https://caddyserver.com/docs/modules/http.matchers.fail2ban)Non-standard
*   [fail2ban](https://caddyserver.com/docs/modules/http.matchers.fail2ban)Non-standard
*   [geocity](https://caddyserver.com/docs/modules/http.matchers.geocity)Non-standard
*   [geocn](https://caddyserver.com/docs/modules/http.matchers.geocn)Non-standard
*   [geoip_asn](https://caddyserver.com/docs/modules/http.matchers.geoip_asn)Non-standard
*   [geoip_country](https://caddyserver.com/docs/modules/http.matchers.geoip_country)Non-standard
*   [maxmind_geolocation](https://caddyserver.com/docs/modules/http.matchers.maxmind_geolocation)Non-standard
*   [remote_host](https://caddyserver.com/docs/modules/http.matchers.remote_host)Non-standard
*   [signed](https://caddyserver.com/docs/modules/http.matchers.signed)Non-standard

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks)health_checks
Health checks update the status of backends, whether they are up or down. Down backends will not be proxied to.

HealthChecks configures active and passive health checks.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/active)health_checks/active
Active health checks run in the background on a timer. To minimally enable active health checks, set either path or port (or both). Note that active health check status (healthy/unhealthy) is stored per-proxy-handler, not globally; this allows different handlers to use different criteria to decide what defines a healthy backend.

Active health checks do not run for dynamic upstreams.

ActiveHealthChecks holds configuration related to active health checks (that is, health checks which occur in a background goroutine independently).

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/active/path)health_checks/active/path
Deprecated: Use 'uri' instead. This field will be removed. TODO: remove this field

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/active/uri)health_checks/active/uri
The URI (path and query) to use for health checks

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/active/upstream)health_checks/active/upstream
The host:port to use (if different from the upstream's dial address) for health checks. This should be used in tandem with `health_header` and `{http.reverse_proxy.active.target_upstream}`. This can be helpful when creating an intermediate service to do a more thorough health check. If upstream is set, the active health check port is ignored.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/active/port)health_checks/active/port
The port to use (if different from the upstream's dial address) for health checks. If active upstream is set, this value is ignored.

HTTP headers to set on health check requests.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/active/method)health_checks/active/method
The HTTP method to use for health checks (default "GET").

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/active/body)health_checks/active/body
The body to send with the health check request.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/active/follow_redirects)health_checks/active/follow_redirects
Whether to follow HTTP redirects in response to active health checks (default off).

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/active/interval)health_checks/active/interval
How frequently to perform active health checks (default 30s).

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/active/timeout)health_checks/active/timeout
How long to wait for a response from a backend before considering it unhealthy (default 5s).

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/active/passes)health_checks/active/passes
Number of consecutive health check passes before marking a previously unhealthy backend as healthy again (default 1).

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/active/fails)health_checks/active/fails
Number of consecutive health check failures before marking a previously healthy backend as unhealthy (default 1).

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/active/max_size)health_checks/active/max_size
The maximum response body to download from the backend during a health check.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/active/expect_status)health_checks/active/expect_status
The HTTP status code to expect from a healthy backend.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/active/expect_body)health_checks/active/expect_body
A regular expression against which to match the response body of a healthy backend.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/passive)health_checks/passive
Passive health checks monitor proxied requests for errors or timeouts. To minimally enable passive health checks, specify at least an empty config object with fail_duration > 0. Passive health check state is shared (stored globally), so a failure from one handler will be counted by all handlers; but the tolerances or standards for what defines healthy/unhealthy backends is configured per-proxy-handler.

Passive health checks technically do operate on dynamic upstreams, but are only effective for very busy proxies where the list of upstreams is mostly stable. This is because the shared/global state of upstreams is cleaned up when the upstreams are no longer used. Since dynamic upstreams are allocated dynamically at each request (specifically, each iteration of the proxy loop per request), they are also cleaned up after every request. Thus, if there is a moment when no requests are actively referring to a particular upstream host, the passive health check state will be reset because it will be garbage-collected. It is usually better for the dynamic upstream module to only return healthy, available backends instead.

PassiveHealthChecks holds configuration related to passive health checks (that is, health checks which occur during the normal flow of request proxying).

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/passive/fail_duration)health_checks/passive/fail_duration
How long to remember a failed request to a backend. A duration > 0 enables passive health checking. Default is 0.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/passive/max_fails)health_checks/passive/max_fails
The number of failed requests within the FailDuration window to consider a backend as "down". Must be >= 1; default is 1. Requires that FailDuration be > 0.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/passive/unhealthy_request_count)health_checks/passive/unhealthy_request_count
Limits the number of simultaneous requests to a backend by marking the backend as "down" if it has this many concurrent requests or more.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/passive/unhealthy_status)health_checks/passive/unhealthy_status
Count the request as failed if the response comes back with one of these status codes.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#health_checks/passive/unhealthy_latency)health_checks/passive/unhealthy_latency
Count the request as failed if the response takes at least this long to receive.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#upstreams)upstreams
Upstreams is the static list of backends to proxy to.

Upstream bridges this proxy's configuration to the state of the backend host it is correlated with. Upstream values must not be copied.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#upstreams/dial)upstreams/dial
The [network address](https://caddyserver.com/docs/conventions#network-addresses) to dial to connect to the upstream. Must represent precisely one socket (i.e. no port ranges). A valid network address either has a host and port or is a unix socket address.

Placeholders may be used to make the upstream dynamic, but be aware of the health check implications of this: a single upstream that represents numerous (perhaps arbitrary) backends can be considered down if one or enough of the arbitrary backends is down. Also be aware of open proxy vulnerabilities.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#upstreams/max_requests)upstreams/max_requests
The maximum number of simultaneous requests to allow to this upstream. If set, overrides the global passive health check UnhealthyRequestCount value.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#dynamic_upstreams)dynamic_upstreams
A module for retrieving the list of upstreams dynamically. Dynamic upstreams are retrieved at every iteration of the proxy loop for each request (i.e. before every proxy attempt within every request). Active health checks do not work on dynamic upstreams, and passive health checks are only effective on dynamic upstreams if the proxy server is busy enough that concurrent requests to the same backends are continuous. Instead of health checks for dynamic upstreams, it is recommended that the dynamic upstream module only return available backends in the first place.

Fulfilled by modules in namespace: **http.reverse_proxy.upstreams**

*   [a](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.a)
*   [multi](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.multi)
*   [srv](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.srv)
*   [docker](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.docker)Non-standard
*   [etcd](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.etcd)Non-standard

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#flush_interval)flush_interval
Adjusts how often to flush the response buffer. By default, no periodic flushing is done. A negative value disables response buffering, and flushes immediately after each write to the client. This option is ignored when the upstream's response is recognized as a streaming response, or if its content length is -1; for such responses, writes are flushed to the client immediately.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#trusted_proxies)trusted_proxies
A list of IP ranges (supports CIDR notation) from which X-Forwarded-* header values should be trusted. By default, no proxies are trusted, so existing values will be ignored when setting these headers. If the proxy is trusted, then existing values will be used when constructing the final header values.

Headers manipulates headers between Caddy and the backend. By default, all headers are passed-thru without changes, with the exceptions of special hop-by-hop headers.

X-Forwarded-For, X-Forwarded-Proto and X-Forwarded-Host are also set implicitly.

Handler is a middleware which modifies request and response headers.

Changes to headers are applied immediately, except for the response headers when Deferred is true or when Required is set. In those cases, the changes are applied when the headers are written to the response. Note that deferred changes do not take effect if an error occurs later in the middleware chain.

Properties in this module accept placeholders.

Response header operations can be conditioned upon response status code and/or other header values.

HeaderOps defines manipulations for HTTP headers.

Adds HTTP headers; does not replace any existing header fields.

Sets HTTP headers; replaces existing header fields.

Names of HTTP header fields to delete. Basic wildcards are supported:

*   Start with `*` for all field names with the given suffix;
*   End with `*` for all field names with the given prefix;
*   Start and end with `*` for all field names containing a substring.

Performs in-situ substring replacements of HTTP headers. Keys are the field names on which to perform the associated replacements. If the field name is `*`, the replacements are performed on all header fields.

The substring to search for.

The regular expression to search with.

The string with which to replace matches.

RespHeaderOps defines manipulations for response headers.

Adds HTTP headers; does not replace any existing header fields.

Sets HTTP headers; replaces existing header fields.

Names of HTTP header fields to delete. Basic wildcards are supported:

*   Start with `*` for all field names with the given suffix;
*   End with `*` for all field names with the given prefix;
*   Start and end with `*` for all field names containing a substring.

Performs in-situ substring replacements of HTTP headers. Keys are the field names on which to perform the associated replacements. If the field name is `*`, the replacements are performed on all header fields.

The substring to search for.

The regular expression to search with.

The string with which to replace matches.

If set, header operations will be deferred until they are written out and only performed if the response matches these criteria.

ResponseMatcher is a type which can determine if an HTTP response matches some criteria.

If set, one of these status codes would be required. A one-digit status can be used to represent all codes in that class (e.g. 3 for all 3xx codes).

If set, each header specified must be one of the specified values, with the same logic used by the [request header matcher](https://caddyserver.com/docs/json/apps/http/servers/routes/match/header/).

If true, header operations will be deferred until they are written out. Superseded if Require is set. Usually you will need to set this to true if any fields are being deleted.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#request_buffers)request_buffers
If nonzero, the entire request body up to this size will be read and buffered in memory before being proxied to the backend. This should be avoided if at all possible for performance reasons, but could be useful if the backend is intolerant of read latency or chunked encodings.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#response_buffers)response_buffers
If nonzero, the entire response body up to this size will be read and buffered in memory before being proxied to the client. This should be avoided if at all possible for performance reasons, but could be useful if the backend has tighter memory constraints.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#stream_timeout)stream_timeout
If nonzero, streaming requests such as WebSockets will be forcibly closed at the end of the timeout. Default: no timeout.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#stream_close_delay)stream_close_delay
If nonzero, streaming requests such as WebSockets will not be closed when the proxy config is unloaded, and instead the stream will remain open until the delay is complete. In other words, enabling this prevents streams from closing when Caddy's config is reloaded. Enabling this may be a good idea to avoid a thundering herd of reconnecting clients which had their connections closed by the previous config closing. Default: no delay.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite)rewrite
If configured, rewrites the copy of the upstream request. Allows changing the request method and URI (path and query). Since the rewrite is applied to the copy, it does not persist past the reverse proxy handler. If the method is changed to `GET` or `HEAD`, the request body will not be copied to the backend. This allows a later request handler -- either in a `handle_response` route, or after -- to read the body. By default, no rewrite is performed, and the method and URI from the incoming request is used as-is for proxying.

Rewrite is a middleware which can rewrite/mutate HTTP requests.

The Method and URI properties are "setters" (the request URI will be overwritten with the given values). Other properties are "modifiers" (they modify existing values in a differentiable way). It is atypical to combine the use of setters and modifiers in a single rewrite.

To ensure consistent behavior, prefix and suffix stripping is performed in the URL-decoded (unescaped, normalized) space by default except for the specific bytes where an escape sequence is used in the prefix or suffix pattern.

For all modifiers, paths are cleaned before being modified so that multiple, consecutive slashes are collapsed into a single slash, and dot elements are resolved and removed. In the special case of a prefix, suffix, or substring containing "//" (repeated slashes), slashes will not be merged while cleaning the path so that the rewrite can be interpreted literally.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/method)rewrite/method
Changes the request's HTTP verb.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/uri)rewrite/uri
Changes the request's URI, which consists of path and query string. Only components of the URI that are specified will be changed. For example, a value of "/foo.html" or "foo.html" will only change the path and will preserve any existing query string. Similarly, a value of "?a=b" will only change the query string and will not affect the path. Both can also be changed: "/foo?a=b" - this sets both the path and query string at the same time.

You can also use placeholders. For example, to preserve the existing query string, you might use: "?{http.request.uri.query}&a=b". Any key-value pairs you add to the query string will not overwrite existing values (individual pairs are append-only).

To clear the query string, explicitly set an empty one: "?"

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/strip_path_prefix)rewrite/strip_path_prefix
Strips the given prefix from the beginning of the URI path. The prefix should be written in normalized (unescaped) form, but if an escaping (`%xx`) is used, the path will be required to have that same escape at that position in order to match.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/strip_path_suffix)rewrite/strip_path_suffix
Strips the given suffix from the end of the URI path. The suffix should be written in normalized (unescaped) form, but if an escaping (`%xx`) is used, the path will be required to have that same escape at that position in order to match.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/uri_substring)rewrite/uri_substring
Performs substring replacements on the URI.

substrReplacer describes either a simple and fast substring replacement.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/uri_substring/find)rewrite/uri_substring/find
A substring to find. Supports placeholders.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/uri_substring/replace)rewrite/uri_substring/replace
The substring to replace with. Supports placeholders.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/uri_substring/limit)rewrite/uri_substring/limit
Maximum number of replacements per string. Set to <= 0 for no limit (default).

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/path_regexp)rewrite/path_regexp
Performs regular expression replacements on the URI path.

regexReplacer describes a replacement using a regular expression.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/path_regexp/find)rewrite/path_regexp/find
The regular expression to find.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/path_regexp/replace)rewrite/path_regexp/replace
The substring to replace with. Supports placeholders and regular expression capture groups.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/query)rewrite/query
Mutates the query string of the URI.

queryOps describes the operations to perform on query keys: add, set, rename and delete.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/query/rename)rewrite/query/rename
Renames a query key from Key to Val, without affecting the value.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/query/rename/key)rewrite/query/rename/key
A key in the query string. Note that query string keys may appear multiple times.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/query/rename/val)rewrite/query/rename/val
The value for the given operation; for add and set, this is simply the value of the query, and for rename this is the query key to rename to.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/query/set)rewrite/query/set
Sets query parameters; overwrites a query key with the given value.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/query/set/key)rewrite/query/set/key
A key in the query string. Note that query string keys may appear multiple times.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/query/set/val)rewrite/query/set/val
The value for the given operation; for add and set, this is simply the value of the query, and for rename this is the query key to rename to.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/query/add)rewrite/query/add
Adds query parameters; does not overwrite an existing query field, and only appends an additional value for that key if any already exist.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/query/add/key)rewrite/query/add/key
A key in the query string. Note that query string keys may appear multiple times.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/query/add/val)rewrite/query/add/val
The value for the given operation; for add and set, this is simply the value of the query, and for rename this is the query key to rename to.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/query/replace)rewrite/query/replace
Replaces query parameters.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/query/replace/key)rewrite/query/replace/key
The key to replace in the query string.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/query/replace/search)rewrite/query/replace/search
The substring to search for.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/query/replace/search_regexp)rewrite/query/replace/search_regexp
The regular expression to search with.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/query/replace/replace)rewrite/query/replace/replace
The string with which to replace matches.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#rewrite/query/delete)rewrite/query/delete
Deletes a given query key by name.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#handle_response)handle_response
List of handlers and their associated matchers to evaluate after successful roundtrips. The first handler that matches the response from a backend will be invoked. The response body from the backend will not be written to the client; it is up to the handler to finish handling the response. If passive health checks are enabled, any errors from the handler chain will not affect the health status of the backend.

Three new placeholders are available in this handler chain:

*   `{http.reverse_proxy.status_code}` The status code from the response
*   `{http.reverse_proxy.status_text}` The status text from the response
*   `{http.reverse_proxy.header.*}` The headers from the response

ResponseHandler pairs a response matcher with custom handling logic. Either the status code can be changed to something else while using the original response body, or, if a status code is not set, it can execute a custom route list; this is useful for executing handler routes based on the properties of an HTTP response that has not been written out to the client yet.

To use this type, provision it at module load time, then when ready to use, match the response against its matcher; if it matches (or doesn't have a matcher), change the status code on the response if configured; otherwise invoke the routes by calling `rh.Routes.Compile(next).ServeHTTP(rw, req)` (or similar).

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#handle_response/match)handle_response/match
The response matcher for this handler. If empty/nil, it always matches.

ResponseMatcher is a type which can determine if an HTTP response matches some criteria.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#handle_response/match/status_code)handle_response/match/status_code
If set, one of these status codes would be required. A one-digit status can be used to represent all codes in that class (e.g. 3 for all 3xx codes).

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#handle_response/match/headers)handle_response/match/headers
If set, each header specified must be one of the specified values, with the same logic used by the [request header matcher](https://caddyserver.com/docs/json/apps/http/servers/routes/match/header/).

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#handle_response/status_code)handle_response/status_code
To write the original response body but with a different status code, set this field to the desired status code. If set, this takes priority over routes.

WeakString is a type that unmarshals any JSON value as a string literal, with the following exceptions:

1.   actual string values are decoded as strings; and
2.   null is decoded as empty string;

and provides methods for getting the value as various primitive types. However, using this type removes any type safety as far as deserializing JSON is concerned.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#handle_response/routes)handle_response/routes
The list of HTTP routes to execute if no status code is specified. If evaluated, the original response body will not be written.

Route consists of a set of rules for matching HTTP requests, a list of handlers to execute, and optional flow control parameters which customize the handling of HTTP requests in a highly flexible and performant manner.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#handle_response/routes/group)handle_response/routes/group
Group is an optional name for a group to which this route belongs. Grouping a route makes it mutually exclusive with others in its group; if a route belongs to a group, only the first matching route in that group will be executed.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#handle_response/routes/match)handle_response/routes/match
The matcher sets which will be used to qualify this route for a request (essentially the "if" statement of this route). Each matcher set is OR'ed, but matchers within a set are AND'ed together.

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

Fulfilled by modules in namespace: **http.matchers**

*   [client_ip](https://caddyserver.com/docs/modules/http.matchers.client_ip)
*   [expression](https://caddyserver.com/docs/modules/http.matchers.expression)
*   [file](https://caddyserver.com/docs/modules/http.matchers.file)
*   [header](https://caddyserver.com/docs/modules/http.matchers.header)
*   [header_regexp](https://caddyserver.com/docs/modules/http.matchers.header_regexp)
*   [host](https://caddyserver.com/docs/modules/http.matchers.host)
*   [method](https://caddyserver.com/docs/modules/http.matchers.method)
*   [not](https://caddyserver.com/docs/modules/http.matchers.not)
*   [path](https://caddyserver.com/docs/modules/http.matchers.path)
*   [path_regexp](https://caddyserver.com/docs/modules/http.matchers.path_regexp)
*   [protocol](https://caddyserver.com/docs/modules/http.matchers.protocol)
*   [query](https://caddyserver.com/docs/modules/http.matchers.query)
*   [remote_ip](https://caddyserver.com/docs/modules/http.matchers.remote_ip)
*   [tls](https://caddyserver.com/docs/modules/http.matchers.tls)
*   [vars](https://caddyserver.com/docs/modules/http.matchers.vars)
*   [vars_regexp](https://caddyserver.com/docs/modules/http.matchers.vars_regexp)
*   [client_asn](https://caddyserver.com/docs/modules/http.matchers.client_asn)Non-standard
*   [client_country](https://caddyserver.com/docs/modules/http.matchers.client_country)Non-standard
*   [conneg](https://caddyserver.com/docs/modules/http.matchers.conneg)Non-standard
*   [crawler](https://caddyserver.com/docs/modules/http.matchers.crawler)Non-standard
*   [cron](https://caddyserver.com/docs/modules/http.matchers.cron)Non-standard
*   [dnsfetcher](https://caddyserver.com/docs/modules/http.matchers.dnsfetcher)Non-standard
*   [dynamic_client_ip](https://caddyserver.com/docs/modules/http.matchers.dynamic_client_ip)Non-standard
*   [dynamic_remote_ip](https://caddyserver.com/docs/modules/http.matchers.dynamic_remote_ip)Non-standard
*   [exec_noop](https://caddyserver.com/docs/modules/http.matchers.exec_noop)Non-standard
*   [execnopmatch](https://caddyserver.com/docs/modules/http.matchers.execnopmatch)Non-standard
*   [fail2ban](https://caddyserver.com/docs/modules/http.matchers.fail2ban)Non-standard
*   [fail2ban](https://caddyserver.com/docs/modules/http.matchers.fail2ban)Non-standard
*   [geocity](https://caddyserver.com/docs/modules/http.matchers.geocity)Non-standard
*   [geocn](https://caddyserver.com/docs/modules/http.matchers.geocn)Non-standard
*   [geoip_asn](https://caddyserver.com/docs/modules/http.matchers.geoip_asn)Non-standard
*   [geoip_country](https://caddyserver.com/docs/modules/http.matchers.geoip_country)Non-standard
*   [maxmind_geolocation](https://caddyserver.com/docs/modules/http.matchers.maxmind_geolocation)Non-standard
*   [remote_host](https://caddyserver.com/docs/modules/http.matchers.remote_host)Non-standard
*   [signed](https://caddyserver.com/docs/modules/http.matchers.signed)Non-standard

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#handle_response/routes/handle)handle_response/routes/handle
The list of handlers for this route. Upon matching a request, they are chained together in a middleware fashion: requests flow from the first handler to the last (top of the list to the bottom), with the possibility that any handler could stop the chain and/or return an error. Responses flow back through the chain (bottom of the list to the top) as they are written out to the client.

Not all handlers call the next handler in the chain. For example, the reverse_proxy handler always sends a request upstream or returns an error. Thus, configuring handlers after reverse_proxy in the same route is illogical, since they would never be executed. You will want to put handlers which originate the response at the very end of your route(s). The documentation for a module should state whether it invokes the next handler, but sometimes it is common sense.

Some handlers manipulate the response. Remember that requests flow down the list, and responses flow up the list.

For example, if you wanted to use both `templates` and `encode` handlers, you would need to put `templates` after `encode` in your route, because responses flow up. Thus, `templates` will be able to parse and execute the plain-text response as a template, and then return it up to the `encode` handler which will then compress it into a binary format.

If `templates` came before `encode`, then `encode` would write a compressed, binary-encoded response to `templates` which would not be able to parse the response properly.

The correct order, then, is this:

```
[
    {"handler": "encode"},
    {"handler": "templates"},
    {"handler": "file_server"}
]
```

The request flows ⬇️ DOWN (`encode` ->`templates` ->`file_server`).

1.   First, `encode` will choose how to `encode` the response and wrap the response.
2.   Then, `templates` will wrap the response with a buffer.
3.   Finally, `file_server` will originate the content from a file.

The response flows ⬆️ UP (`file_server` ->`templates` ->`encode`):

1.   First, `file_server` will write the file to the response.
2.   That write will be buffered and then executed by `templates`.
3.   Lastly, the write from `templates` will flow into `encode` which will compress the stream.

If you think of routes in this way, it will be easy and even fun to solve the puzzle of writing correct routes.

Fulfilled by modules in namespace: **http.handlers**

*   [acme_server](https://caddyserver.com/docs/modules/http.handlers.acme_server)
*   [authentication](https://caddyserver.com/docs/modules/http.handlers.authentication)
*   [copy_response](https://caddyserver.com/docs/modules/http.handlers.copy_response)
*   [copy_response_headers](https://caddyserver.com/docs/modules/http.handlers.copy_response_headers)
*   [encode](https://caddyserver.com/docs/modules/http.handlers.encode)
*   [error](https://caddyserver.com/docs/modules/http.handlers.error)
*   [file_server](https://caddyserver.com/docs/modules/http.handlers.file_server)
*   [headers](https://caddyserver.com/docs/modules/http.handlers.headers)
*   [intercept](https://caddyserver.com/docs/modules/http.handlers.intercept)
*   [invoke](https://caddyserver.com/docs/modules/http.handlers.invoke)
*   [log_append](https://caddyserver.com/docs/modules/http.handlers.log_append)
*   [map](https://caddyserver.com/docs/modules/http.handlers.map)
*   [metrics](https://caddyserver.com/docs/modules/http.handlers.metrics)
*   [push](https://caddyserver.com/docs/modules/http.handlers.push)
*   [request_body](https://caddyserver.com/docs/modules/http.handlers.request_body)
*   [reverse_proxy](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy)
*   [rewrite](https://caddyserver.com/docs/modules/http.handlers.rewrite)
*   [static_response](https://caddyserver.com/docs/modules/http.handlers.static_response)
*   [subroute](https://caddyserver.com/docs/modules/http.handlers.subroute)
*   [templates](https://caddyserver.com/docs/modules/http.handlers.templates)
*   [tracing](https://caddyserver.com/docs/modules/http.handlers.tracing)
*   [vars](https://caddyserver.com/docs/modules/http.handlers.vars)
*   [adobe_usage_tracker](https://caddyserver.com/docs/modules/http.handlers.adobe_usage_tracker)Non-standard
*   [argsort](https://caddyserver.com/docs/modules/http.handlers.argsort)Non-standard
*   [argsort](https://caddyserver.com/docs/modules/http.handlers.argsort)Non-standard
*   [authelia](https://caddyserver.com/docs/modules/http.handlers.authelia)Non-standard
*   [authenticator](https://caddyserver.com/docs/modules/http.handlers.authenticator)Non-standard
*   [authp](https://caddyserver.com/docs/modules/http.handlers.authp)Non-standard
*   [authz](https://caddyserver.com/docs/modules/http.handlers.authz)Non-standard
*   [basicauthtotp](https://caddyserver.com/docs/modules/http.handlers.basicauthtotp)Non-standard
*   [blockaws](https://caddyserver.com/docs/modules/http.handlers.blockaws)Non-standard
*   [bot_barrier](https://caddyserver.com/docs/modules/http.handlers.bot_barrier)Non-standard
*   [cache](https://caddyserver.com/docs/modules/http.handlers.cache)Non-standard
*   [cache](https://caddyserver.com/docs/modules/http.handlers.cache)Non-standard
*   [cache](https://caddyserver.com/docs/modules/http.handlers.cache)Non-standard
*   [cache](https://caddyserver.com/docs/modules/http.handlers.cache)Non-standard
*   [cerberus](https://caddyserver.com/docs/modules/http.handlers.cerberus)Non-standard
*   [cgi](https://caddyserver.com/docs/modules/http.handlers.cgi)Non-standard
*   [cookiecrypt](https://caddyserver.com/docs/modules/http.handlers.cookiecrypt)Non-standard
*   [cookieflag](https://caddyserver.com/docs/modules/http.handlers.cookieflag)Non-standard
*   [crowdsec](https://caddyserver.com/docs/modules/http.handlers.crowdsec)Non-standard
*   [ct](https://caddyserver.com/docs/modules/http.handlers.ct)Non-standard
*   [defender](https://caddyserver.com/docs/modules/http.handlers.defender)Non-standard
*   [defender](https://caddyserver.com/docs/modules/http.handlers.defender)Non-standard
*   [discord](https://caddyserver.com/docs/modules/http.handlers.discord)Non-standard
*   [dns01proxy](https://caddyserver.com/docs/modules/http.handlers.dns01proxy)Non-standard
*   [dnsfetcher](https://caddyserver.com/docs/modules/http.handlers.dnsfetcher)Non-standard
*   [esi](https://caddyserver.com/docs/modules/http.handlers.esi)Non-standard
*   [exec](https://caddyserver.com/docs/modules/http.handlers.exec)Non-standard
*   [extra_placeholders](https://caddyserver.com/docs/modules/http.handlers.extra_placeholders)Non-standard
*   [filter](https://caddyserver.com/docs/modules/http.handlers.filter)Non-standard
*   [floaty](https://caddyserver.com/docs/modules/http.handlers.floaty)Non-standard
*   [forward_auth](https://caddyserver.com/docs/modules/http.handlers.forward_auth)Non-standard
*   [gbox](https://caddyserver.com/docs/modules/http.handlers.gbox)Non-standard
*   [geofence](https://caddyserver.com/docs/modules/http.handlers.geofence)Non-standard
*   [geoip](https://caddyserver.com/docs/modules/http.handlers.geoip)Non-standard
*   [geoip2](https://caddyserver.com/docs/modules/http.handlers.geoip2)Non-standard
*   [git](https://caddyserver.com/docs/modules/http.handlers.git)Non-standard
*   [gopkg](https://caddyserver.com/docs/modules/http.handlers.gopkg)Non-standard
*   [gopkg](https://caddyserver.com/docs/modules/http.handlers.gopkg)Non-standard
*   [grpc_web](https://caddyserver.com/docs/modules/http.handlers.grpc_web)Non-standard
*   [guard](https://caddyserver.com/docs/modules/http.handlers.guard)Non-standard
*   [hmac](https://caddyserver.com/docs/modules/http.handlers.hmac)Non-standard
*   [http_cache](https://caddyserver.com/docs/modules/http.handlers.http_cache)Non-standard
*   [i18n](https://caddyserver.com/docs/modules/http.handlers.i18n)Non-standard
*   [image_filter](https://caddyserver.com/docs/modules/http.handlers.image_filter)Non-standard
*   [image_filter](https://caddyserver.com/docs/modules/http.handlers.image_filter)Non-standard
*   [image_processor](https://caddyserver.com/docs/modules/http.handlers.image_processor)Non-standard
*   [imageproxy](https://caddyserver.com/docs/modules/http.handlers.imageproxy)Non-standard
*   [inspect](https://caddyserver.com/docs/modules/http.handlers.inspect)Non-standard
*   [ip_filter](https://caddyserver.com/docs/modules/http.handlers.ip_filter)Non-standard
*   [ipmap](https://caddyserver.com/docs/modules/http.handlers.ipmap)Non-standard
*   [jailbait](https://caddyserver.com/docs/modules/http.handlers.jailbait)Non-standard
*   [json_parse](https://caddyserver.com/docs/modules/http.handlers.json_parse)Non-standard
*   [jwt_issuer](https://caddyserver.com/docs/modules/http.handlers.jwt_issuer)Non-standard
*   [k8s_admission](https://caddyserver.com/docs/modules/http.handlers.k8s_admission)Non-standard
*   [lambda](https://caddyserver.com/docs/modules/http.handlers.lambda)Non-standard
*   [ldap_basic_auth](https://caddyserver.com/docs/modules/http.handlers.ldap_basic_auth)Non-standard
*   [listencaddy](https://caddyserver.com/docs/modules/http.handlers.listencaddy)Non-standard
*   [lura](https://caddyserver.com/docs/modules/http.handlers.lura)Non-standard
*   [mercure](https://caddyserver.com/docs/modules/http.handlers.mercure)Non-standard
*   [minifier](https://caddyserver.com/docs/modules/http.handlers.minifier)Non-standard
*   [mirror](https://caddyserver.com/docs/modules/http.handlers.mirror)Non-standard
*   [myplugin](https://caddyserver.com/docs/modules/http.handlers.myplugin)Non-standard
*   [nobots](https://caddyserver.com/docs/modules/http.handlers.nobots)Non-standard
*   [oauth2_token_introspection](https://caddyserver.com/docs/modules/http.handlers.oauth2_token_introspection)Non-standard
*   [olaf](https://caddyserver.com/docs/modules/http.handlers.olaf)Non-standard
*   [olo_signature](https://caddyserver.com/docs/modules/http.handlers.olo_signature)Non-standard
*   [openapi](https://caddyserver.com/docs/modules/http.handlers.openapi)Non-standard
*   [openapi_validator](https://caddyserver.com/docs/modules/http.handlers.openapi_validator)Non-standard
*   [php](https://caddyserver.com/docs/modules/http.handlers.php)Non-standard
*   [pirsch](https://caddyserver.com/docs/modules/http.handlers.pirsch)Non-standard
*   [pixbooster](https://caddyserver.com/docs/modules/http.handlers.pixbooster)Non-standard
*   [placeholder_dump](https://caddyserver.com/docs/modules/http.handlers.placeholder_dump)Non-standard
*   [plausible](https://caddyserver.com/docs/modules/http.handlers.plausible)Non-standard
*   [pmtiles_proxy](https://caddyserver.com/docs/modules/http.handlers.pmtiles_proxy)Non-standard
*   [pocketbase](https://caddyserver.com/docs/modules/http.handlers.pocketbase)Non-standard
*   [postauth2fa](https://caddyserver.com/docs/modules/http.handlers.postauth2fa)Non-standard
*   [prometheus](https://caddyserver.com/docs/modules/http.handlers.prometheus)Non-standard
*   [public_suffix](https://caddyserver.com/docs/modules/http.handlers.public_suffix)Non-standard
*   [quantity_limiter](https://caddyserver.com/docs/modules/http.handlers.quantity_limiter)Non-standard
*   [rate_limit](https://caddyserver.com/docs/modules/http.handlers.rate_limit)Non-standard
*   [rate_limit](https://caddyserver.com/docs/modules/http.handlers.rate_limit)Non-standard
*   [realip](https://caddyserver.com/docs/modules/http.handlers.realip)Non-standard
*   [redir_dns](https://caddyserver.com/docs/modules/http.handlers.redir_dns)Non-standard
*   [replace_response](https://caddyserver.com/docs/modules/http.handlers.replace_response)Non-standard
*   [request_body_var](https://caddyserver.com/docs/modules/http.handlers.request_body_var)Non-standard
*   [request_debug](https://caddyserver.com/docs/modules/http.handlers.request_debug)Non-standard
*   [request_id](https://caddyserver.com/docs/modules/http.handlers.request_id)Non-standard
*   [s3proxy](https://caddyserver.com/docs/modules/http.handlers.s3proxy)Non-standard
*   [sablier](https://caddyserver.com/docs/modules/http.handlers.sablier)Non-standard
*   [sablier](https://caddyserver.com/docs/modules/http.handlers.sablier)Non-standard
*   [save](https://caddyserver.com/docs/modules/http.handlers.save)Non-standard
*   [scion](https://caddyserver.com/docs/modules/http.handlers.scion)Non-standard
*   [teapot](https://caddyserver.com/docs/modules/http.handlers.teapot)Non-standard
*   [trace](https://caddyserver.com/docs/modules/http.handlers.trace)Non-standard
*   [trapdoor](https://caddyserver.com/docs/modules/http.handlers.trapdoor)Non-standard
*   [trojan](https://caddyserver.com/docs/modules/http.handlers.trojan)Non-standard
*   [umami](https://caddyserver.com/docs/modules/http.handlers.umami)Non-standard
*   [upload](https://caddyserver.com/docs/modules/http.handlers.upload)Non-standard
*   [user_agent_parse](https://caddyserver.com/docs/modules/http.handlers.user_agent_parse)Non-standard
*   [vulcain](https://caddyserver.com/docs/modules/http.handlers.vulcain)Non-standard
*   [waf](https://caddyserver.com/docs/modules/http.handlers.waf)Non-standard
*   [waf](https://caddyserver.com/docs/modules/http.handlers.waf)Non-standard
*   [waf](https://caddyserver.com/docs/modules/http.handlers.waf)Non-standard
*   [waf_chaitin](https://caddyserver.com/docs/modules/http.handlers.waf_chaitin)Non-standard
*   [wafris](https://caddyserver.com/docs/modules/http.handlers.wafris)Non-standard
*   [wake_on_lan](https://caddyserver.com/docs/modules/http.handlers.wake_on_lan)Non-standard
*   [webdav](https://caddyserver.com/docs/modules/http.handlers.webdav)Non-standard
*   [webhook](https://caddyserver.com/docs/modules/http.handlers.webhook)Non-standard
*   [x_clacks_overhead](https://caddyserver.com/docs/modules/http.handlers.x_clacks_overhead)Non-standard
*   [xtemplate](https://caddyserver.com/docs/modules/http.handlers.xtemplate)Non-standard
*   [xtemplate](https://caddyserver.com/docs/modules/http.handlers.xtemplate)Non-standard
*   [xtemplates](https://caddyserver.com/docs/modules/http.handlers.xtemplates)Non-standard
*   [xtemplates](https://caddyserver.com/docs/modules/http.handlers.xtemplates)Non-standard

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#handle_response/routes/terminal)handle_response/routes/terminal
If true, no more routes will be executed after this one.

[🔗](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy#verbose_logs)verbose_logs
If set, the proxy will write very detailed logs about its inner workings. Enable this only when debugging, as it will produce a lot of output.

EXPERIMENTAL: This feature is subject to change or removal.
