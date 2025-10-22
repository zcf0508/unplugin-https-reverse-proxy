Title: Module http.handlers.subroute - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.subroute

Markdown Content:
http.handlers.subroute implements a handler that compiles and executes routes. This is useful for a batch of routes that all inherit the same matchers, or for multiple routes that should be treated as a single route.

You can also use subroutes to handle errors from its handlers. First the primary routes will be executed, and if they return an error, the errors routes will be executed; in that case, an error is only returned to the entry point at the server if there is an additional error returned from the errors routes.

[🔗](https://caddyserver.com/docs/modules/http.handlers.subroute#routes)routes
The primary list of routes to compile and execute.

Route consists of a set of rules for matching HTTP requests, a list of handlers to execute, and optional flow control parameters which customize the handling of HTTP requests in a highly flexible and performant manner.

[🔗](https://caddyserver.com/docs/modules/http.handlers.subroute#routes/group)routes/group
Group is an optional name for a group to which this route belongs. Grouping a route makes it mutually exclusive with others in its group; if a route belongs to a group, only the first matching route in that group will be executed.

[🔗](https://caddyserver.com/docs/modules/http.handlers.subroute#routes/match)routes/match
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

[🔗](https://caddyserver.com/docs/modules/http.handlers.subroute#routes/handle)routes/handle
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

[🔗](https://caddyserver.com/docs/modules/http.handlers.subroute#routes/terminal)routes/terminal
If true, no more routes will be executed after this one.

[🔗](https://caddyserver.com/docs/modules/http.handlers.subroute#errors)errors
If the primary routes return an error, error handling can be promoted to this configuration instead.

HTTPErrorConfig determines how to handle errors from the HTTP handlers.

[🔗](https://caddyserver.com/docs/modules/http.handlers.subroute#errors/routes)errors/routes
The routes to evaluate after the primary handler chain returns an error. In an error route, extra placeholders are available:

| Placeholder | Description |
| --- | --- |
| `{http.error.status_code}` | The recommended HTTP status code |
| `{http.error.status_text}` | The status text associated with the recommended status code |
| `{http.error.message}` | The error message |
| `{http.error.trace}` | The origin of the error |
| `{http.error.id}` | An identifier for this occurrence of the error |

Route consists of a set of rules for matching HTTP requests, a list of handlers to execute, and optional flow control parameters which customize the handling of HTTP requests in a highly flexible and performant manner.

[🔗](https://caddyserver.com/docs/modules/http.handlers.subroute#errors/routes/group)errors/routes/group
Group is an optional name for a group to which this route belongs. Grouping a route makes it mutually exclusive with others in its group; if a route belongs to a group, only the first matching route in that group will be executed.

[🔗](https://caddyserver.com/docs/modules/http.handlers.subroute#errors/routes/match)errors/routes/match
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

[🔗](https://caddyserver.com/docs/modules/http.handlers.subroute#errors/routes/handle)errors/routes/handle
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

[🔗](https://caddyserver.com/docs/modules/http.handlers.subroute#errors/routes/terminal)errors/routes/terminal
If true, no more routes will be executed after this one.
