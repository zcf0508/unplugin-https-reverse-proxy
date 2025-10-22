Title: Module http.handlers.mercure - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.mercure

Markdown Content:
http.handlers.mercure implements a Mercure hub as a Caddy module. Mercure is a protocol allowing to push data updates to web browsers and other HTTP clients in a convenient, fast, reliable and battery-efficient way.

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#anonymous)anonymous
Allow subscribers with no valid JWT.

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#subscriptions)subscriptions
Dispatch updates when subscriptions are created or terminated

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#demo)demo
Enable the demo.

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#ui)ui
Enable the UI.

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#write_timeout)write_timeout
Maximum duration before closing the connection, defaults to 600s, set to 0 to disable.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#dispatch_timeout)dispatch_timeout
Maximum dispatch duration of an update, defaults to 5s.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#heartbeat)heartbeat
Frequency of the heartbeat, defaults to 40s.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#publisher_jwt)publisher_jwt
JWT key and signing algorithm to use for publishers.

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#publisher_jwt/key)publisher_jwt/key
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#publisher_jwt/alg)publisher_jwt/alg
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#subscriber_jwt)subscriber_jwt
JWT key and signing algorithm to use for subscribers.

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#subscriber_jwt/key)subscriber_jwt/key
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#subscriber_jwt/alg)subscriber_jwt/alg
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#publish_origins)publish_origins
Origins allowed to publish updates

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#cors_origins)cors_origins
Allowed CORS origins.

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#transport_url)transport_url
Transport to use.

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#lru_shard_size)lru_shard_size
Triggers use of LRU topic selector cache and avoidance of select priority queue (recommend 10,000 - 1,000,000)

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#cookie_name)cookie_name
The name of the authorization cookie. Defaults to "mercureAuthorization".

[🔗](https://caddyserver.com/docs/modules/http.handlers.mercure#protocol_version_compatibility)protocol_version_compatibility
The version of the Mercure protocol to be backward compatible with (only version 7 is supported)
