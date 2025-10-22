Title: Module caddy.listeners.ngrok - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.listeners.ngrok

Markdown Content:
caddy.listeners.ngrok is a `listener_wrapper` whose address is an ngrok-ingress address

[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok#auth_token)auth_token
The user's ngrok authentication token

[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok#tunnel)tunnel
The ngrok tunnel type and configuration; defaults to 'tcp'

Fulfilled by modules in namespace: **caddy.listeners.ngrok.tunnels**

*   [http](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.http)Non-standard
*   [labeled](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.labeled)Non-standard
*   [tcp](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tcp)Non-standard
*   [tls](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tls)Non-standard

[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok#metadata)metadata
Opaque, machine-readable metadata string for this session. Metadata is made available to you in the ngrok dashboard and the Agents API resource. It is a useful way to allow you to uniquely identify sessions. We suggest encoding the value in a structured format like JSON.

[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok#region)region
Region configures the session to connect to a specific ngrok region. If unspecified, ngrok will connect to the fastest region, which is usually what you want. The [full list of ngrok regions] can be found in the ngrok documentation.

[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok#server)server
Server configures the network address to dial to connect to the ngrok service. Use this option only if you are connecting to a custom agent ingress.

See the [server_addr parameter in the ngrok docs] for additional details.

[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok#heartbeat_tolerance)heartbeat_tolerance
HeartbeatTolerance configures the duration to wait for a response to a heartbeat before assuming the session connection is dead and attempting to reconnect.

See the [heartbeat_tolerance parameter in the ngrok docs] for additional details.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/caddy.listeners.ngrok#heartbeat_interval)heartbeat_interval
HeartbeatInterval configures how often the session will send heartbeat messages to the ngrok service to check session liveness.

See the [heartbeat_interval parameter in the ngrok docs] for additional details.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.
