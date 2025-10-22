Title: Module ssh - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/ssh

Markdown Content:
[🔗](https://caddyserver.com/docs/modules/ssh#grace_period)grace_period
GracePeriod is the duration a server should wait for open connections to close during shutdown before closing them forcefully

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/ssh#servers)servers
The set of ssh servers keyed by custom names

[🔗](https://caddyserver.com/docs/modules/ssh#servers/address)servers/address
Socket addresses to which to bind listeners. Accepts [network addresses](https://caddyserver.com/docs/conventions#network-addresses) that may include port ranges. Listener addresses must be unique; they cannot be repeated across all defined servers. TCP is the only acceptable network (for now, perhaps).

[🔗](https://caddyserver.com/docs/modules/ssh#servers/localforward)servers/localforward
The configuration of local-forward permission module. The config structure is: "localforward": { "forward": "" ... config } defaults to: { "forward": "deny" }

Fulfilled by modules in namespace: **ssh.ask.localforward**

*   [allow](https://caddyserver.com/docs/modules/ssh.ask.localforward.allow)Non-standard
*   [allow](https://caddyserver.com/docs/modules/ssh.ask.localforward.allow)Non-standard
*   [deny](https://caddyserver.com/docs/modules/ssh.ask.localforward.deny)Non-standard
*   [deny](https://caddyserver.com/docs/modules/ssh.ask.localforward.deny)Non-standard

[🔗](https://caddyserver.com/docs/modules/ssh#servers/reverseforward)servers/reverseforward
The configuration of reverse-forward permission module. The config structure is: "reverseforward": { "forward": "" ... config } defaults to: { "reverseforward": "deny" }

Fulfilled by modules in namespace: **ssh.ask.reverseforward**

*   [allow](https://caddyserver.com/docs/modules/ssh.ask.reverseforward.allow)Non-standard
*   [allow](https://caddyserver.com/docs/modules/ssh.ask.reverseforward.allow)Non-standard
*   [deny](https://caddyserver.com/docs/modules/ssh.ask.reverseforward.deny)Non-standard
*   [deny](https://caddyserver.com/docs/modules/ssh.ask.reverseforward.deny)Non-standard

[🔗](https://caddyserver.com/docs/modules/ssh#servers/pty)servers/pty
The configuration of PTY permission module. The config structure is: "pty": { "pty": "" ... config } defaults to: { "forward": "deny" }

Fulfilled by modules in namespace: **ssh.ask.pty**

*   [allow](https://caddyserver.com/docs/modules/ssh.ask.pty.allow)Non-standard
*   [allow](https://caddyserver.com/docs/modules/ssh.ask.pty.allow)Non-standard
*   [deny](https://caddyserver.com/docs/modules/ssh.ask.pty.deny)Non-standard
*   [deny](https://caddyserver.com/docs/modules/ssh.ask.pty.deny)Non-standard

[🔗](https://caddyserver.com/docs/modules/ssh#servers/idle_timeout)servers/idle_timeout
connection timeout when no activity, none if empty

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/ssh#servers/max_timeout)servers/max_timeout
absolute connection timeout, none if empty

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/ssh#servers/authorize)servers/authorize
The configuration of the authorizer module. The config structure is: "authorize": { "authorizer": "" ... config } default to: { "authorizer": "public" }.

[🔗](https://caddyserver.com/docs/modules/ssh#servers/subsystems)servers/subsystems
The list of defined subsystems in a json structure keyed by the arbitrary name of the subsystem. TODO: The current implementation is naive and can be expanded to follow the Authorzation and Actors model

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

[🔗](https://caddyserver.com/docs/modules/ssh#servers/configs)servers/configs
List of configurators that could configure the server per matchers and config providers

Configurator holds the set of matchers and configurators that will apply custom server configurations if matched

[🔗](https://caddyserver.com/docs/modules/ssh#servers/configs/match)servers/configs/match
The set of matchers consulted to know whether the Actor should act on a session

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

[🔗](https://caddyserver.com/docs/modules/ssh#servers/configs/config)servers/configs/config
The config provider that shall configure the server for the matched session. "config": { "loader": "" ... config loader config }

Fulfilled by modules in namespace: **ssh.config.loaders**

*   [provided](https://caddyserver.com/docs/modules/ssh.config.loaders.provided)Non-standard
*   [provided](https://caddyserver.com/docs/modules/ssh.config.loaders.provided)Non-standard

[🔗](https://caddyserver.com/docs/modules/ssh#servers/actors)servers/actors
The actors that can act on a session per the matching criteria

Actor is a collection of actor matchers and actors of an ssh session

[🔗](https://caddyserver.com/docs/modules/ssh#servers/actors/match)servers/actors/match
The set of matchers consulted to know whether the Actor should act on a session

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

[🔗](https://caddyserver.com/docs/modules/ssh#servers/actors/act)servers/actors/act
The actor that shall act on the matched session. "act": { "action": "" ... actor config }

[🔗](https://caddyserver.com/docs/modules/ssh#servers/actors/final)servers/actors/final
Whether the session shoul be closed upon execution of the actor
