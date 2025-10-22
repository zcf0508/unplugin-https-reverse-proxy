Title: Module http.handlers.gbox - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.gbox

Markdown Content:
http.handlers.gbox implements an HTTP handler as a GraphQL reverse proxy server for caching, securing, and monitoring.

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#rewrite_raw)rewrite_raw
Rewrite

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

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#reverse_proxy)reverse_proxy
Reverse proxy

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

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#upstream)upstream
Upstream graphql server url

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#fetch_schema_interval)fetch_schema_interval
Fetch schema interval, disabled by default.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#fetch_schema_timeout)fetch_schema_timeout
Fetch schema request timeout, "30s" by default

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

Fetch schema headers

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#disabled_introspection)disabled_introspection
Whether to disable introspection request of downstream.

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#disabled_playgrounds)disabled_playgrounds
Whether to disable playground paths.

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#complexity)complexity
Request complexity settings, disabled by default.

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#complexity/max_depth)complexity/max_depth
Max query depth accept, disabled by default.

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#complexity/node_count_limit)complexity/node_count_limit
Query node count limit, disabled by default.

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#complexity/complexity)complexity/complexity
Max query complexity, disabled by default.

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#caching)caching
Caching queries result settings, disabled by default.

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#caching/store_dsn)caching/store_dsn
Storage DSN currently support redis and freecache only. Redis example: redis://username:password@localhost:6379?db=0&max_retries=3 more dsn options see at [https://github.com/go-redis/redis/blob/v8.11.5/options.go#L31](https://github.com/go-redis/redis/blob/v8.11.5/options.go#L31) Freecache example: freecache://?cache_size=104857600 If not set it will be freecache://?cache_size=104857600 (cache size 100MB)

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#caching/rules)caching/rules
Caching rules

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#caching/rules/types)caching/rules/types
GraphQL type to cache ex: `User` will cache all query results have type User ex: `User { is_admin }` will cache all query results have type User and have field `is_admin`. If not set this rule will match all types.

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#caching/rules/max_age)caching/rules/max_age
how long query results that match the rule types should be store.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#caching/rules/swr)caching/rules/swr
how long stale query results that match the rule types should be served while fresh data is already being fetched in the background.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#caching/rules/varies)caching/rules/varies
Varies name apply to query results that match the rule types. If not set query results will cache public.

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#caching/varies)caching/varies
Caching varies

CachingVary using to compute query result cache key by http request cookies and headers.

Headers names for identifier query result cache key.

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#caching/varies/cookies)caching/varies/cookies
Cookies names for identifier query result cache key.

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#caching/type_keys)caching/type_keys
GraphQL type fields will be used to detect change of cached query results when user execute mutation query. Example when execute mutation query bellow: mutation { updateUser { id } } if `updateUser` field have type User and id returning in example above is 1, all cache results of user id 1 will be purged. If not set default value of it will be `id` for all types.

[🔗](https://caddyserver.com/docs/modules/http.handlers.gbox#cors_origins)cors_origins
Cors origins

Cors allowed headers
