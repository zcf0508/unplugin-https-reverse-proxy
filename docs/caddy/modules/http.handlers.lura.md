Title: Module http.handlers.lura - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.lura

Markdown Content:
[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#endpoints)endpoints
Set of endpoint definitions representing the gateway public API.

Endpoint represents a public-facing gateway URL with specific configurations.

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#endpoints/url_pattern)endpoints/url_pattern
URLPattern defines the endpoint URL, supporting path parameters. It specifies the public API endpoint exposed by the gateway.

Example: "/users/{id}/permissions"

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#endpoints/method)endpoints/method
Method specifies the HTTP method for the endpoint. If not specified, "GET" is assumed.

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#endpoints/concurrent_calls)endpoints/concurrent_calls
ConcurrentCalls specifies the number of concurrent calls this endpoint makes to each backend. Controls the concurrency of backend requests to optimize performance.

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#endpoints/timeout)endpoints/timeout
Timeout specifies the timeout duration for requests to this endpoint. Overrides the default timeout if set.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#endpoints/cache_ttl)endpoints/cache_ttl
CacheTTL specifies the cache duration for responses from this endpoint. Controls caching headers for client caching.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#endpoints/backends)endpoints/backends
Backends specifies the set of backend services that serve requests for this endpoint. Responses from multiple backends are aggregated based on rules defined in the gateway configuration.

Backend represents a backend service that handles requests for an endpoint.

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#endpoints/backends/host)endpoints/backends/host
Host specifies the list of backend hosts. Requests are load balanced between these hosts.

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#endpoints/backends/url_pattern)endpoints/backends/url_pattern
URLPattern specifies the URL pattern to locate the resource on the backend service. Path variables defined in the endpoint configuration can be used here, along with any Caddy placeholders.

Example: "/api/{header.X-Tenant-Id}/resources/{id}"

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#endpoints/backends/allow_list)endpoints/backends/allow_list
AllowList specifies the list of response fields allowed from the backend. If empty, all fields are returned. Helps in filtering unnecessary data from responses.

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#endpoints/backends/mapping)endpoints/backends/mapping
Mapping specifies renaming rules for response fields. Useful for standardizing response formats.

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#endpoints/backends/group)endpoints/backends/group
Group specifies the property name to which the response should be moved. Useful for combining responses from multiple backends.

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#endpoints/backends/method)endpoints/backends/method
Method specifies the HTTP method used for requests to the backend service.

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#timeout)timeout
Default timeout applied to all backends. This timeout is applied if not overridden at the endpoint level.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#cache_ttl)cache_ttl
Default cache duration applied to all backends. This affects caching headers for responses.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#debug_endpoint)debug_endpoint
DebugEndpoint exposes an URL that can be used as a fake backend when the API gateway itself is used as a backend host. It logs all activity to aid in debugging interactions between the gateway and backends when Caddy is run with debug logging.

HelperEndpoint represents a helper endpoint for developers within the Caddy web server.

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#debug_endpoint/url_pattern)debug_endpoint/url_pattern
URLPattern specifies the URL where the helper endpoint is served. Default value is "/__debug/".

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#debug_endpoint/enabled)debug_endpoint/enabled
Enabled specifies whether the helper endpoint is enabled or not. Default value is "/__echo/"

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#echo_endpoint)echo_endpoint
EchoEndpoint is a developer tool similar to DebugEndpoint but instead of logging, responses are printed directly. Useful for debugging configurations without verbose logging.

HelperEndpoint represents a helper endpoint for developers within the Caddy web server.

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#echo_endpoint/url_pattern)echo_endpoint/url_pattern
URLPattern specifies the URL where the helper endpoint is served. Default value is "/__debug/".

[🔗](https://caddyserver.com/docs/modules/http.handlers.lura#echo_endpoint/enabled)echo_endpoint/enabled
Enabled specifies whether the helper endpoint is enabled or not. Default value is "/__echo/"
