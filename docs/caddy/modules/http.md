Title: Module http - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http

Markdown Content:
[🔗](https://caddyserver.com/docs/modules/http#http_port)http_port
HTTPPort specifies the port to use for HTTP (as opposed to HTTPS), which is used when setting up HTTP->HTTPS redirects or ACME HTTP challenge solvers. Default: 80.

[🔗](https://caddyserver.com/docs/modules/http#https_port)https_port
HTTPSPort specifies the port to use for HTTPS, which is used when solving the ACME TLS-ALPN challenges, or whenever HTTPS is needed but no specific port number is given. Default: 443.

[🔗](https://caddyserver.com/docs/modules/http#grace_period)grace_period
GracePeriod is how long to wait for active connections when shutting down the servers. During the grace period, no new connections are accepted, idle connections are closed, and active connections will be given the full length of time to become idle and close. Once the grace period is over, connections will be forcefully closed. If zero, the grace period is eternal. Default: 0.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http#shutdown_delay)shutdown_delay
ShutdownDelay is how long to wait before initiating the grace period. When this app is stopping (e.g. during a config reload or process exit), all servers will be shut down. Normally this immediately initiates the grace period. However, if this delay is configured, servers will not be shut down until the delay is over. During this time, servers continue to function normally and allow new connections. At the end, the grace period will begin. This can be useful to allow downstream load balancers time to move this instance out of the rotation without hiccups.

When shutdown has been scheduled, placeholders {http.shutting_down} (bool) and {http.time_until_shutdown} (duration) may be useful for health checks.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http#servers)servers
Servers is the list of servers, keyed by arbitrary names chosen at your discretion for your own convenience; the keys do not affect functionality.

Server describes an HTTP server.

[🔗](https://caddyserver.com/docs/modules/http#servers/listen)servers/listen
Socket addresses to which to bind listeners. Accepts [network addresses](https://caddyserver.com/docs/conventions#network-addresses) that may include port ranges. Listener addresses must be unique; they cannot be repeated across all defined servers.

[🔗](https://caddyserver.com/docs/modules/http#servers/listener_wrappers)servers/listener_wrappers
A list of listener wrapper modules, which can modify the behavior of the base listener. They are applied in the given order.

[🔗](https://caddyserver.com/docs/modules/http#servers/read_timeout)servers/read_timeout
How long to allow a read from a client's upload. Setting this to a short, non-zero value can mitigate slowloris attacks, but may also affect legitimately slow clients.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

ReadHeaderTimeout is like ReadTimeout but for request headers. Default is 1 minute.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http#servers/write_timeout)servers/write_timeout
WriteTimeout is how long to allow a write to a client. Note that setting this to a small value when serving large files may negatively affect legitimately slow clients.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http#servers/idle_timeout)servers/idle_timeout
IdleTimeout is the maximum time to wait for the next request when keep-alives are enabled. If zero, a default timeout of 5m is applied to help avoid resource exhaustion.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http#servers/keepalive_interval)servers/keepalive_interval
KeepAliveInterval is the interval at which TCP keepalive packets are sent to keep the connection alive at the TCP layer when no other data is being transmitted. The default is 15s.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

MaxHeaderBytes is the maximum size to parse from a client's HTTP request headers.

[🔗](https://caddyserver.com/docs/modules/http#servers/enable_full_duplex)servers/enable_full_duplex
Enable full-duplex communication for HTTP/1 requests. Only has an effect if Caddy was built with Go 1.21 or later.

For HTTP/1 requests, the Go HTTP server by default consumes any unread portion of the request body before beginning to write the response, preventing handlers from concurrently reading from the request and writing the response. Enabling this option disables this behavior and permits handlers to continue to read from the request while concurrently writing the response.

For HTTP/2 requests, the Go HTTP server always permits concurrent reads and responses, so this option has no effect.

Test thoroughly with your HTTP clients, as some older clients may not support full-duplex HTTP/1 which can cause them to deadlock. See [https://github.com/golang/go/issues/57786](https://github.com/golang/go/issues/57786) for more info.

TODO: This is an EXPERIMENTAL feature. Subject to change or removal.

[🔗](https://caddyserver.com/docs/modules/http#servers/routes)servers/routes
Routes describes how this server will handle requests. Routes are executed sequentially. First a route's matchers are evaluated, then its grouping. If it matches and has not been mutually-excluded by its grouping, then its handlers are executed sequentially. The sequence of invoked handlers comprises a compiled middleware chain that flows from each matching route and its handlers to the next.

By default, all unrouted requests receive a 200 OK response to indicate the server is working.

Route consists of a set of rules for matching HTTP requests, a list of handlers to execute, and optional flow control parameters which customize the handling of HTTP requests in a highly flexible and performant manner.

[🔗](https://caddyserver.com/docs/modules/http#servers/routes/group)servers/routes/group
Group is an optional name for a group to which this route belongs. Grouping a route makes it mutually exclusive with others in its group; if a route belongs to a group, only the first matching route in that group will be executed.

[🔗](https://caddyserver.com/docs/modules/http#servers/routes/match)servers/routes/match
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

[🔗](https://caddyserver.com/docs/modules/http#servers/routes/handle)servers/routes/handle
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

[🔗](https://caddyserver.com/docs/modules/http#servers/routes/terminal)servers/routes/terminal
If true, no more routes will be executed after this one.

[🔗](https://caddyserver.com/docs/modules/http#servers/errors)servers/errors
Errors is how this server will handle errors returned from any of the handlers in the primary routes. If the primary handler chain returns an error, the error along with its recommended status code are bubbled back up to the HTTP server which executes a separate error route, specified using this property. The error routes work exactly like the normal routes.

HTTPErrorConfig determines how to handle errors from the HTTP handlers.

[🔗](https://caddyserver.com/docs/modules/http#servers/errors/routes)servers/errors/routes
The routes to evaluate after the primary handler chain returns an error. In an error route, extra placeholders are available:

| Placeholder | Description |
| --- | --- |
| `{http.error.status_code}` | The recommended HTTP status code |
| `{http.error.status_text}` | The status text associated with the recommended status code |
| `{http.error.message}` | The error message |
| `{http.error.trace}` | The origin of the error |
| `{http.error.id}` | An identifier for this occurrence of the error |

Route consists of a set of rules for matching HTTP requests, a list of handlers to execute, and optional flow control parameters which customize the handling of HTTP requests in a highly flexible and performant manner.

[🔗](https://caddyserver.com/docs/modules/http#servers/errors/routes/group)servers/errors/routes/group
Group is an optional name for a group to which this route belongs. Grouping a route makes it mutually exclusive with others in its group; if a route belongs to a group, only the first matching route in that group will be executed.

[🔗](https://caddyserver.com/docs/modules/http#servers/errors/routes/match)servers/errors/routes/match
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

[🔗](https://caddyserver.com/docs/modules/http#servers/errors/routes/handle)servers/errors/routes/handle
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

[🔗](https://caddyserver.com/docs/modules/http#servers/errors/routes/terminal)servers/errors/routes/terminal
If true, no more routes will be executed after this one.

[🔗](https://caddyserver.com/docs/modules/http#servers/named_routes)servers/named_routes
NamedRoutes describes a mapping of reusable routes that can be invoked by their name. This can be used to optimize memory usage when the same route is needed for many subroutes, by having the handlers and matchers be only provisioned once, but used from many places. These routes are not executed unless they are invoked from another route.

EXPERIMENTAL: Subject to change or removal.

Route consists of a set of rules for matching HTTP requests, a list of handlers to execute, and optional flow control parameters which customize the handling of HTTP requests in a highly flexible and performant manner.

[🔗](https://caddyserver.com/docs/modules/http#servers/named_routes/group)servers/named_routes/group
Group is an optional name for a group to which this route belongs. Grouping a route makes it mutually exclusive with others in its group; if a route belongs to a group, only the first matching route in that group will be executed.

[🔗](https://caddyserver.com/docs/modules/http#servers/named_routes/match)servers/named_routes/match
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

[🔗](https://caddyserver.com/docs/modules/http#servers/named_routes/handle)servers/named_routes/handle
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

[🔗](https://caddyserver.com/docs/modules/http#servers/named_routes/terminal)servers/named_routes/terminal
If true, no more routes will be executed after this one.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies)servers/tls_connection_policies
How to handle TLS connections. At least one policy is required to enable HTTPS on this server if automatic HTTPS is disabled or does not apply.

ConnectionPolicy specifies the logic for handling a TLS handshake. An empty policy is valid; safe and sensible defaults will be used.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/match)servers/tls_connection_policies/match
How to match this policy with a TLS ClientHello. If this policy is the first to match, it will be used.

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/certificate_selection)servers/tls_connection_policies/certificate_selection
How to choose a certificate if more than one matched the given ServerName (SNI) value.

CustomCertSelectionPolicy represents a policy for selecting the certificate used to complete a handshake when there may be multiple options. All fields specified must match the candidate certificate for it to be chosen. This was needed to solve [https://github.com/caddyserver/caddy/issues/2588](https://github.com/caddyserver/caddy/issues/2588).

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/certificate_selection/serial_number)servers/tls_connection_policies/certificate_selection/serial_number
The certificate must have one of these serial numbers.

bigInt is a big.Int type that interops with JSON encodings as a string.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/certificate_selection/subject_organization)servers/tls_connection_policies/certificate_selection/subject_organization
The certificate must have one of these organization names.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/certificate_selection/public_key_algorithm)servers/tls_connection_policies/certificate_selection/public_key_algorithm
The certificate must use this public key algorithm.

PublicKeyAlgorithm is a JSON-unmarshalable wrapper type.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/certificate_selection/any_tag)servers/tls_connection_policies/certificate_selection/any_tag
The certificate must have at least one of the tags in the list.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/certificate_selection/all_tags)servers/tls_connection_policies/certificate_selection/all_tags
The certificate must have all of the tags in the list.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/cipher_suites)servers/tls_connection_policies/cipher_suites
The list of cipher suites to support. Caddy's defaults are modern and secure.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/curves)servers/tls_connection_policies/curves
The list of elliptic curves to support. Caddy's defaults are modern and secure.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/alpn)servers/tls_connection_policies/alpn
Protocols to use for Application-Layer Protocol Negotiation (ALPN) during the handshake.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/protocol_min)servers/tls_connection_policies/protocol_min
Minimum TLS protocol version to allow. Default: `tls1.2`

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/protocol_max)servers/tls_connection_policies/protocol_max
Maximum TLS protocol version to allow. Default: `tls1.3`

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/drop)servers/tls_connection_policies/drop
Reject TLS connections. EXPERIMENTAL: May change.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/client_authentication)servers/tls_connection_policies/client_authentication
Enables and configures TLS client authentication.

ClientAuthentication configures TLS client auth.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/client_authentication/ca)servers/tls_connection_policies/client_authentication/ca
Certificate authority module which provides the certificate pool of trusted certificates

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/client_authentication/trusted_ca_certs)servers/tls_connection_policies/client_authentication/trusted_ca_certs
Deprecated: Use the `ca` field with the `tls.ca_pool.source.inline` module instead. A list of base64 DER-encoded CA certificates against which to validate client certificates. Client certs which are not signed by any of these CAs will be rejected.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/client_authentication/trusted_ca_certs_pem_files)servers/tls_connection_policies/client_authentication/trusted_ca_certs_pem_files
Deprecated: Use the `ca` field with the `tls.ca_pool.source.file` module instead. TrustedCACertPEMFiles is a list of PEM file names from which to load certificates of trusted CAs. Client certificates which are not signed by any of these CA certificates will be rejected.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/client_authentication/trusted_leaf_certs)servers/tls_connection_policies/client_authentication/trusted_leaf_certs
Deprecated: This field is deprecated and will be removed in a future version. Please use the `validators` field instead with the tls.client_auth.verifier.leaf module instead.

A list of base64 DER-encoded client leaf certs to accept. If this list is not empty, client certs which are not in this list will be rejected.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/client_authentication/verifiers)servers/tls_connection_policies/client_authentication/verifiers
Client certificate verification modules. These can perform custom client authentication checks, such as ensuring the certificate is not revoked.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/client_authentication/mode)servers/tls_connection_policies/client_authentication/mode
The mode for authenticating the client. Allowed values are:

| Mode | Description |
| --- | --- |
| `request` | Ask clients for a certificate, but allow even if there isn't one; do not verify it |
| `require` | Require clients to present a certificate, but do not verify it |
| `verify_if_given` | Ask clients for a certificate; allow even if there isn't one, but verify it if there is |
| `require_and_verify` | Require clients to present a valid certificate that is verified |

The default mode is `require_and_verify` if any TrustedCACerts or TrustedCACertPEMFiles or TrustedLeafCerts are provided; otherwise, the default mode is `require`.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/default_sni)servers/tls_connection_policies/default_sni
DefaultSNI becomes the ServerName in a ClientHello if there is no policy configured for the empty SNI value.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/fallback_sni)servers/tls_connection_policies/fallback_sni
FallbackSNI becomes the ServerName in a ClientHello if the original ServerName doesn't match any certificates in the cache. The use cases for this are very niche; typically if a client is a CDN and passes through the ServerName of the downstream handshake but can accept a certificate with the origin's hostname instead, then you would set this to your origin's hostname. Note that Caddy must be managing a certificate for this name.

This feature is EXPERIMENTAL and subject to change or removal.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/insecure_secrets_log)servers/tls_connection_policies/insecure_secrets_log
Also known as "SSLKEYLOGFILE", TLS secrets will be written to this file in NSS key log format which can then be parsed by Wireshark and other tools. This is INSECURE as it allows other programs or tools to decrypt TLS connections. However, this capability can be useful for debugging and troubleshooting. **ENABLING THIS LOG COMPROMISES SECURITY!**

This feature is EXPERIMENTAL and subject to change or removal.

[🔗](https://caddyserver.com/docs/modules/http#servers/tls_connection_policies/handshake_context)servers/tls_connection_policies/handshake_context
A module that can manipulate the context passed into CertMagic's certificate management functions during TLS handshakes. EXPERIMENTAL - subject to change or removal.

Fulfilled by modules in namespace: **tls.context**

[🔗](https://caddyserver.com/docs/modules/http#servers/automatic_https)servers/automatic_https
AutoHTTPS configures or disables automatic HTTPS within this server. HTTPS is enabled automatically and by default when qualifying names are present in a Host matcher and/or when the server is listening only on the HTTPS port.

AutoHTTPSConfig is used to disable automatic HTTPS or certain aspects of it for a specific server. HTTPS is enabled automatically and by default when qualifying hostnames are available from the config.

[🔗](https://caddyserver.com/docs/modules/http#servers/automatic_https/disable)servers/automatic_https/disable
If true, automatic HTTPS will be entirely disabled, including certificate management and redirects.

[🔗](https://caddyserver.com/docs/modules/http#servers/automatic_https/disable_redirects)servers/automatic_https/disable_redirects
If true, only automatic HTTP->HTTPS redirects will be disabled, but other auto-HTTPS features will remain enabled.

[🔗](https://caddyserver.com/docs/modules/http#servers/automatic_https/disable_certificates)servers/automatic_https/disable_certificates
If true, automatic certificate management will be disabled, but other auto-HTTPS features will remain enabled.

[🔗](https://caddyserver.com/docs/modules/http#servers/automatic_https/skip)servers/automatic_https/skip
Hosts/domain names listed here will not be included in automatic HTTPS (they will not have certificates loaded nor redirects applied).

[🔗](https://caddyserver.com/docs/modules/http#servers/automatic_https/skip_certificates)servers/automatic_https/skip_certificates
Hosts/domain names listed here will still be enabled for automatic HTTPS (unless in the Skip list), except that certificates will not be provisioned and managed for these names.

[🔗](https://caddyserver.com/docs/modules/http#servers/automatic_https/ignore_loaded_certificates)servers/automatic_https/ignore_loaded_certificates
By default, automatic HTTPS will obtain and renew certificates for qualifying hostnames. However, if a certificate with a matching SAN is already loaded into the cache, certificate management will not be enabled. To force automated certificate management regardless of loaded certificates, set this to true.

[🔗](https://caddyserver.com/docs/modules/http#servers/automatic_https/prefer_wildcard)servers/automatic_https/prefer_wildcard
If true, automatic HTTPS will prefer wildcard names and ignore non-wildcard names if both are available. This allows for writing a config with top-level host matchers without having those names produce certificates.

[🔗](https://caddyserver.com/docs/modules/http#servers/strict_sni_host)servers/strict_sni_host
If true, will require that a request's Host header match the value of the ServerName sent by the client's TLS ClientHello; often a necessary safeguard when using TLS client authentication.

[🔗](https://caddyserver.com/docs/modules/http#servers/trusted_proxies)servers/trusted_proxies
A module which provides a source of IP ranges, from which requests should be trusted. By default, no proxies are trusted.

On its own, this configuration will not do anything, but it can be used as a default set of ranges for handlers or matchers in routes to pick up, instead of needing to configure each of them. See the `reverse_proxy` handler for example, which uses this to trust sensitive incoming `X-Forwarded-*` headers.

The headers from which the client IP address could be read from. These will be considered in order, with the first good value being used as the client IP. By default, only `X-Forwarded-For` is considered.

This depends on `trusted_proxies` being configured and the request being validated as coming from a trusted proxy, otherwise the client IP will be set to the direct remote IP address.

[🔗](https://caddyserver.com/docs/modules/http#servers/trusted_proxies_strict)servers/trusted_proxies_strict
If greater than zero, enables strict ClientIPHeaders (default X-Forwarded-For) parsing. If enabled, the ClientIPHeaders will be parsed from right to left, and the first value that is both valid and doesn't match the trusted proxy list will be used as client IP. If zero, the ClientIPHeaders will be parsed from left to right, and the first value that is a valid IP address will be used as client IP.

This depends on `trusted_proxies` being configured. This option is disabled by default.

[🔗](https://caddyserver.com/docs/modules/http#servers/logs)servers/logs
Enables access logging and configures how access logs are handled in this server. To minimally enable access logs, simply set this to a non-null, empty struct.

ServerLogConfig describes a server's logging configuration. If enabled without customization, all requests to this server are logged to the default logger; logger destinations may be customized per-request-host.

[🔗](https://caddyserver.com/docs/modules/http#servers/logs/default_logger_name)servers/logs/default_logger_name
The default logger name for all logs emitted by this server for hostnames that are not in the logger_names map.

[🔗](https://caddyserver.com/docs/modules/http#servers/logs/logger_names)servers/logs/logger_names
LoggerNames maps request hostnames to one or more custom logger names. For example, a mapping of `"example.com": ["example"]` would cause access logs from requests with a Host of example.com to be emitted by a logger named "http.log.access.example". If there are multiple logger names, then the log will be emitted to all of them. If the logger name is an empty, the default logger is used, i.e. the logger "http.log.access".

Keys must be hostnames (without ports), and may contain wildcards to match subdomains. The value is an array of logger names.

For backwards compatibility, if the value is a string, it is treated as a single-element array.

StringArray is a slices of strings, but also accepts a single string as a value when JSON unmarshaling, converting it to a slice of one string.

[🔗](https://caddyserver.com/docs/modules/http#servers/logs/skip_hosts)servers/logs/skip_hosts
By default, all requests to this server will be logged if access logging is enabled. This field lists the request hosts for which access logging should be disabled.

[🔗](https://caddyserver.com/docs/modules/http#servers/logs/skip_unmapped_hosts)servers/logs/skip_unmapped_hosts
If true, requests to any host not appearing in the logger_names map will not be logged.

[🔗](https://caddyserver.com/docs/modules/http#servers/logs/should_log_credentials)servers/logs/should_log_credentials
If true, credentials that are otherwise omitted, will be logged. The definition of credentials is defined by [https://fetch.spec.whatwg.org/#credentials](https://fetch.spec.whatwg.org/#credentials), and this includes some request and response headers, i.e `Cookie`, `Set-Cookie`, `Authorization`, and `Proxy-Authorization`.

[🔗](https://caddyserver.com/docs/modules/http#servers/logs/trace)servers/logs/trace
Log each individual handler that is invoked. Requires that the log emit at DEBUG level.

NOTE: This may log the configuration of your HTTP handler modules; do not enable this in insecure contexts when there is sensitive data in the configuration.

EXPERIMENTAL: Subject to change or removal.

[🔗](https://caddyserver.com/docs/modules/http#servers/protocols)servers/protocols
Protocols specifies which HTTP protocols to enable. Supported values are:

*   `h1` (HTTP/1.1)
*   `h2` (HTTP/2)
*   `h2c` (cleartext HTTP/2)
*   `h3` (HTTP/3)

If enabling `h2` or `h2c`, `h1` must also be enabled; this is due to current limitations in the Go standard library.

HTTP/2 operates only over TLS (HTTPS). HTTP/3 opens a UDP socket to serve QUIC connections.

H2C operates over plain TCP if the client supports it; however, because this is not implemented by the Go standard library, other server options are not compatible and will not be applied to H2C requests. Do not enable this only to achieve maximum client compatibility. In practice, very few clients implement H2C, and even fewer require it. Enabling H2C can be useful for serving/proxying gRPC if encryption is not possible or desired.

We recommend for most users to simply let Caddy use the default settings.

Default: `[h1 h2 h3]`

[🔗](https://caddyserver.com/docs/modules/http#servers/listen_protocols)servers/listen_protocols
ListenProtocols overrides Protocols for each parallel address in Listen. A nil value or element indicates that Protocols will be used instead.

[🔗](https://caddyserver.com/docs/modules/http#servers/metrics)servers/metrics
If set, metrics observations will be enabled. This setting is EXPERIMENTAL and subject to change. DEPRECATED: Use the app-level `metrics` field.

Metrics configures metrics observations. EXPERIMENTAL and subject to change or removal.

[🔗](https://caddyserver.com/docs/modules/http#servers/metrics/per_host)servers/metrics/per_host
Enable per-host metrics. Enabling this option may incur high-memory consumption, depending on the number of hosts managed by Caddy.

[🔗](https://caddyserver.com/docs/modules/http#metrics)metrics
If set, metrics observations will be enabled. This setting is EXPERIMENTAL and subject to change.

Metrics configures metrics observations. EXPERIMENTAL and subject to change or removal.

[🔗](https://caddyserver.com/docs/modules/http#metrics/per_host)metrics/per_host
Enable per-host metrics. Enabling this option may incur high-memory consumption, depending on the number of hosts managed by Caddy.
