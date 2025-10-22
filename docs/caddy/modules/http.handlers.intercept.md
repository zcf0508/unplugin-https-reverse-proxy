Title: Module http.handlers.intercept - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.intercept

Markdown Content:
[🔗](https://caddyserver.com/docs/modules/http.handlers.intercept#handle_response)handle_response
List of handlers and their associated matchers to evaluate after successful response generation. The first handler that matches the original response will be invoked. The original response body will not be written to the client; it is up to the handler to finish handling the response.

Three new placeholders are available in this handler chain:

*   `{http.intercept.status_code}` The status code from the response
*   `{http.intercept.header.*}` The headers from the response

ResponseHandler pairs a response matcher with custom handling logic. Either the status code can be changed to something else while using the original response body, or, if a status code is not set, it can execute a custom route list; this is useful for executing handler routes based on the properties of an HTTP response that has not been written out to the client yet.

To use this type, provision it at module load time, then when ready to use, match the response against its matcher; if it matches (or doesn't have a matcher), change the status code on the response if configured; otherwise invoke the routes by calling `rh.Routes.Compile(next).ServeHTTP(rw, req)` (or similar).

[🔗](https://caddyserver.com/docs/modules/http.handlers.intercept#handle_response/match)handle_response/match
The response matcher for this handler. If empty/nil, it always matches.

ResponseMatcher is a type which can determine if an HTTP response matches some criteria.

[🔗](https://caddyserver.com/docs/modules/http.handlers.intercept#handle_response/match/status_code)handle_response/match/status_code
If set, one of these status codes would be required. A one-digit status can be used to represent all codes in that class (e.g. 3 for all 3xx codes).

[🔗](https://caddyserver.com/docs/modules/http.handlers.intercept#handle_response/match/headers)handle_response/match/headers
If set, each header specified must be one of the specified values, with the same logic used by the [request header matcher](https://caddyserver.com/docs/json/apps/http/servers/routes/match/header/).

[🔗](https://caddyserver.com/docs/modules/http.handlers.intercept#handle_response/status_code)handle_response/status_code
To write the original response body but with a different status code, set this field to the desired status code. If set, this takes priority over routes.

WeakString is a type that unmarshals any JSON value as a string literal, with the following exceptions:

1.   actual string values are decoded as strings; and
2.   null is decoded as empty string;

and provides methods for getting the value as various primitive types. However, using this type removes any type safety as far as deserializing JSON is concerned.

[🔗](https://caddyserver.com/docs/modules/http.handlers.intercept#handle_response/routes)handle_response/routes
The list of HTTP routes to execute if no status code is specified. If evaluated, the original response body will not be written.

Route consists of a set of rules for matching HTTP requests, a list of handlers to execute, and optional flow control parameters which customize the handling of HTTP requests in a highly flexible and performant manner.

[🔗](https://caddyserver.com/docs/modules/http.handlers.intercept#handle_response/routes/group)handle_response/routes/group
Group is an optional name for a group to which this route belongs. Grouping a route makes it mutually exclusive with others in its group; if a route belongs to a group, only the first matching route in that group will be executed.

[🔗](https://caddyserver.com/docs/modules/http.handlers.intercept#handle_response/routes/match)handle_response/routes/match
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

[🔗](https://caddyserver.com/docs/modules/http.handlers.intercept#handle_response/routes/handle)handle_response/routes/handle
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

[🔗](https://caddyserver.com/docs/modules/http.handlers.intercept#handle_response/routes/terminal)handle_response/routes/terminal
If true, no more routes will be executed after this one.
