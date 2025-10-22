Title: apps/ssh - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/ssh/

Markdown Content:
```
{▾	"grace_period": 0,	"servers": {
		"": {▾			"address": "",			"localforward": {•••},			"reverseforward": {•••},			"pty": {•••},			"idle_timeout": 0,			"max_timeout": 0,			"authorize": {•••},			"subsystems": {•••},			"configs": [{▾				"match": [{•••}],				"config": {•••}			}],			"actors": [{▾				"match": [{•••}],				"act": {•••},				"final": false			}]		}
	}}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/kadeessh/kadeessh](https://github.com/kadeessh/kadeessh)**

**Custom builds:**`xcaddy build --with github.com/kadeessh/kadeessh/internal`

Description[🔗](https://caddyserver.com/docs/json/apps/ssh/#docs "Direct link")
-------------------------------------------------------------------------------

SSH is the app providing ssh services

[🔗](https://caddyserver.com/docs/json/apps/ssh/#grace_period)[grace_period](https://caddyserver.com/docs/json/apps/ssh/grace_period/)
GracePeriod is the duration a server should wait for open connections to close during shutdown before closing them forcefully

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/json/apps/ssh/#servers)[servers](https://caddyserver.com/docs/json/apps/ssh/servers/)
The set of ssh servers keyed by custom names

[🔗](https://caddyserver.com/docs/json/apps/ssh/#servers/address)[servers/address](https://caddyserver.com/docs/json/apps/ssh/servers/address/)
Socket addresses to which to bind listeners. Accepts [network addresses](https://caddyserver.com/docs/conventions#network-addresses) that may include port ranges. Listener addresses must be unique; they cannot be repeated across all defined servers. TCP is the only acceptable network (for now, perhaps).

[🔗](https://caddyserver.com/docs/json/apps/ssh/#servers/localforward)[servers/localforward](https://caddyserver.com/docs/json/apps/ssh/servers/localforward/)
The configuration of local-forward permission module. The config structure is: "localforward": { "forward": "" ... config } defaults to: { "forward": "deny" }

Fulfilled by modules in namespace: **ssh.ask.localforward**

*   [allow](https://caddyserver.com/docs/json/apps/ssh/servers/localforward/allow/)Non-standard
*   [allow](https://caddyserver.com/docs/json/apps/ssh/servers/localforward/allow/)Non-standard
*   [deny](https://caddyserver.com/docs/json/apps/ssh/servers/localforward/deny/)Non-standard
*   [deny](https://caddyserver.com/docs/json/apps/ssh/servers/localforward/deny/)Non-standard

[🔗](https://caddyserver.com/docs/json/apps/ssh/#servers/reverseforward)[servers/reverseforward](https://caddyserver.com/docs/json/apps/ssh/servers/reverseforward/)
The configuration of reverse-forward permission module. The config structure is: "reverseforward": { "forward": "" ... config } defaults to: { "reverseforward": "deny" }

Fulfilled by modules in namespace: **ssh.ask.reverseforward**

*   [allow](https://caddyserver.com/docs/json/apps/ssh/servers/reverseforward/allow/)Non-standard
*   [allow](https://caddyserver.com/docs/json/apps/ssh/servers/reverseforward/allow/)Non-standard
*   [deny](https://caddyserver.com/docs/json/apps/ssh/servers/reverseforward/deny/)Non-standard
*   [deny](https://caddyserver.com/docs/json/apps/ssh/servers/reverseforward/deny/)Non-standard

[🔗](https://caddyserver.com/docs/json/apps/ssh/#servers/pty)[servers/pty](https://caddyserver.com/docs/json/apps/ssh/servers/pty/)
The configuration of PTY permission module. The config structure is: "pty": { "pty": "" ... config } defaults to: { "forward": "deny" }

Fulfilled by modules in namespace: **ssh.ask.pty**

*   [allow](https://caddyserver.com/docs/json/apps/ssh/servers/pty/allow/)Non-standard
*   [allow](https://caddyserver.com/docs/json/apps/ssh/servers/pty/allow/)Non-standard
*   [deny](https://caddyserver.com/docs/json/apps/ssh/servers/pty/deny/)Non-standard
*   [deny](https://caddyserver.com/docs/json/apps/ssh/servers/pty/deny/)Non-standard

[🔗](https://caddyserver.com/docs/json/apps/ssh/#servers/idle_timeout)[servers/idle_timeout](https://caddyserver.com/docs/json/apps/ssh/servers/idle_timeout/)
connection timeout when no activity, none if empty

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/json/apps/ssh/#servers/max_timeout)[servers/max_timeout](https://caddyserver.com/docs/json/apps/ssh/servers/max_timeout/)
absolute connection timeout, none if empty

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/json/apps/ssh/#servers/authorize)[servers/authorize](https://caddyserver.com/docs/json/apps/ssh/servers/authorize/)
The configuration of the authorizer module. The config structure is: "authorize": { "authorizer": "" ... config } default to: { "authorizer": "public" }.

[🔗](https://caddyserver.com/docs/json/apps/ssh/#servers/subsystems)[servers/subsystems](https://caddyserver.com/docs/json/apps/ssh/servers/subsystems/)
The list of defined subsystems in a json structure keyed by the arbitrary name of the subsystem. TODO: The current implementation is naive and can be expanded to follow the Authorzation and Actors model

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

[🔗](https://caddyserver.com/docs/json/apps/ssh/#servers/configs)[servers/configs](https://caddyserver.com/docs/json/apps/ssh/servers/configs/)
List of configurators that could configure the server per matchers and config providers

Configurator holds the set of matchers and configurators that will apply custom server configurations if matched

[🔗](https://caddyserver.com/docs/json/apps/ssh/#servers/configs/match)[servers/configs/match](https://caddyserver.com/docs/json/apps/ssh/servers/configs/match/)
The set of matchers consulted to know whether the Actor should act on a session

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

[🔗](https://caddyserver.com/docs/json/apps/ssh/#servers/configs/config)[servers/configs/config](https://caddyserver.com/docs/json/apps/ssh/servers/configs/config/)
The config provider that shall configure the server for the matched session. "config": { "loader": "" ... config loader config }

Fulfilled by modules in namespace: **ssh.config.loaders**

*   [provided](https://caddyserver.com/docs/json/apps/ssh/servers/configs/config/provided/)Non-standard
*   [provided](https://caddyserver.com/docs/json/apps/ssh/servers/configs/config/provided/)Non-standard

[🔗](https://caddyserver.com/docs/json/apps/ssh/#servers/actors)[servers/actors](https://caddyserver.com/docs/json/apps/ssh/servers/actors/)
The actors that can act on a session per the matching criteria

Actor is a collection of actor matchers and actors of an ssh session

[🔗](https://caddyserver.com/docs/json/apps/ssh/#servers/actors/match)[servers/actors/match](https://caddyserver.com/docs/json/apps/ssh/servers/actors/match/)
The set of matchers consulted to know whether the Actor should act on a session

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

[🔗](https://caddyserver.com/docs/json/apps/ssh/#servers/actors/act)[servers/actors/act](https://caddyserver.com/docs/json/apps/ssh/servers/actors/act/)
The actor that shall act on the matched session. "act": { "action": "" ... actor config }

[🔗](https://caddyserver.com/docs/json/apps/ssh/#servers/actors/final)[servers/actors/final](https://caddyserver.com/docs/json/apps/ssh/servers/actors/final/)
Whether the session shoul be closed upon execution of the actor
