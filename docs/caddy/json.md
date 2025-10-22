Title: JSON Config Structure - Caddy Documentation

URL Source: https://caddyserver.com/docs/json/

Markdown Content:
```
{▾	"admin": {▾		"disabled": false,		"listen": "",		"enforce_origin": false,		"origins": [""],		"config": {▾			"persist": false,			"load": {•••}		},		"identity": {▾			"identifiers": [""],			"issuers": [{•••}]		},		"remote": {▾			"listen": "",			"access_control": [{▾			}]		}	},	"logging": {▾		"sink": {▾			"writer": {•••}		},		"logs": {
			"": {▾				"writer": {•••},				"encoder": {•••},				"level": "",				"sampling": {▾				},				"include": [""],				"exclude": [""]			}
		}	},	"storage": {•••},	"apps": {•••}}
```

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/json/#docs "Direct link")
----------------------------------------------------------------------

Config is the top (or beginning) of the Caddy configuration structure. Caddy config is expressed natively as a JSON document. If you prefer not to work with JSON directly, there are [many config adapters](https://caddyserver.com/docs/config-adapters) available that can convert various inputs into Caddy JSON.

Many parts of this config are extensible through the use of Caddy modules. Fields which have a json.RawMessage type and which appear as dots (•••) in the online docs can be fulfilled by modules in a certain module namespace. The docs show which modules can be used in a given place.

Whenever a module is used, its name must be given either inline as part of the module, or as the key to the module's value. The docs will make it clear which to use.

Generally, all config settings are optional, as it is Caddy convention to have good, documented default values. If a parameter is required, the docs should say so.

Go programs which are directly building a Config struct value should take care to populate the JSON-encodable fields of the struct (i.e. the fields with `json` struct tags) if employing the module lifecycle (e.g. Provision method calls).

[🔗](https://caddyserver.com/docs/json/#admin)[admin](https://caddyserver.com/docs/json/admin/)
AdminConfig configures Caddy's API endpoint, which is used to manage Caddy while it is running.

[🔗](https://caddyserver.com/docs/json/#admin/disabled)[admin/disabled](https://caddyserver.com/docs/json/admin/disabled/)
If true, the admin endpoint will be completely disabled. Note that this makes any runtime changes to the config impossible, since the interface to do so is through the admin endpoint.

[🔗](https://caddyserver.com/docs/json/#admin/listen)[admin/listen](https://caddyserver.com/docs/json/admin/listen/)
The address to which the admin endpoint's listener should bind itself. Can be any single network address that can be parsed by Caddy. Default: localhost:2019

[🔗](https://caddyserver.com/docs/json/#admin/enforce_origin)[admin/enforce_origin](https://caddyserver.com/docs/json/admin/enforce_origin/)
If true, CORS headers will be emitted, and requests to the API will be rejected if their `Host` and `Origin` headers do not match the expected value(s). Use `origins` to customize which origins/hosts are allowed. If `origins` is not set, the listen address is the only value allowed by default. Enforced only on local (plaintext) endpoint.

[🔗](https://caddyserver.com/docs/json/#admin/origins)[admin/origins](https://caddyserver.com/docs/json/admin/origins/)
The list of allowed origins/hosts for API requests. Only needed if accessing the admin endpoint from a host different from the socket's network interface or if `enforce_origin` is true. If not set, the listener address will be the default value. If set but empty, no origins will be allowed. Enforced only on local (plaintext) endpoint.

[🔗](https://caddyserver.com/docs/json/#admin/config)[admin/config](https://caddyserver.com/docs/json/admin/config/)
Options pertaining to configuration management.

ConfigSettings configures the management of configuration.

[🔗](https://caddyserver.com/docs/json/#admin/config/persist)[admin/config/persist](https://caddyserver.com/docs/json/admin/config/persist/)
Whether to keep a copy of the active config on disk. Default is true. Note that "pulled" dynamic configs (using the neighboring "load" module) are not persisted; only configs that are pushed to Caddy get persisted.

[🔗](https://caddyserver.com/docs/json/#admin/config/load)[admin/config/load](https://caddyserver.com/docs/json/admin/config/load/)
Loads a configuration to use. This is helpful if your configs are managed elsewhere, and you want Caddy to pull its config dynamically when it starts. The pulled config completely replaces the current one, just like any other config load. It is an error if a pulled config is configured to pull another config.

EXPERIMENTAL: Subject to change.

Fulfilled by modules in namespace: **caddy.config_loaders**

*   [http](https://caddyserver.com/docs/json/admin/config/load/http/)
*   [storage](https://caddyserver.com/docs/json/admin/config/load/storage/)Non-standard

[🔗](https://caddyserver.com/docs/json/#admin/identity)[admin/identity](https://caddyserver.com/docs/json/admin/identity/)
Options that establish this server's identity. Identity refers to credentials which can be used to uniquely identify and authenticate this server instance. This is required if remote administration is enabled (but does not require remote administration to be enabled). Default: no identity management.

IdentityConfig configures management of this server's identity. An identity consists of credentials that uniquely verify this instance; for example, TLS certificates (public + private key pairs).

[🔗](https://caddyserver.com/docs/json/#admin/identity/identifiers)[admin/identity/identifiers](https://caddyserver.com/docs/json/admin/identity/identifiers/)
List of names or IP addresses which refer to this server. Certificates will be obtained for these identifiers so secure TLS connections can be made using them.

[🔗](https://caddyserver.com/docs/json/#admin/identity/issuers)[admin/identity/issuers](https://caddyserver.com/docs/json/admin/identity/issuers/)
Issuers that can provide this admin endpoint its identity certificate(s). Default: ACME issuers configured for ZeroSSL and Let's Encrypt. Be sure to change this if you require credentials for private identifiers.

[🔗](https://caddyserver.com/docs/json/#admin/remote)[admin/remote](https://caddyserver.com/docs/json/admin/remote/)
Options pertaining to remote administration. By default, remote administration is disabled. If enabled, identity management must also be configured, as that is how the endpoint is secured. See the neighboring "identity" object.

EXPERIMENTAL: This feature is subject to change.

RemoteAdmin enables and configures remote administration. If enabled, a secure listener enforcing mutual TLS authentication will be started on a different port from the standard plaintext admin server.

This endpoint is secured using identity management, which must be configured separately (because identity management does not depend on remote administration). See the admin/identity config struct.

EXPERIMENTAL: Subject to change.

[🔗](https://caddyserver.com/docs/json/#admin/remote/listen)[admin/remote/listen](https://caddyserver.com/docs/json/admin/remote/listen/)
The address on which to start the secure listener. Default: :2021

[🔗](https://caddyserver.com/docs/json/#admin/remote/access_control)[admin/remote/access_control](https://caddyserver.com/docs/json/admin/remote/access_control/)
List of access controls for this secure admin endpoint. This configures TLS mutual authentication (i.e. authorized client certificates), but also application-layer permissions like which paths and methods each identity is authorized for.

AdminAccess specifies what permissions an identity or group of identities are granted.

[🔗](https://caddyserver.com/docs/json/#admin/remote/access_control/public_keys)[admin/remote/access_control/public_keys](https://caddyserver.com/docs/json/admin/remote/access_control/public_keys/)
Base64-encoded DER certificates containing public keys to accept. (The contents of PEM certificate blocks are base64-encoded DER.) Any of these public keys can appear in any part of a verified chain.

[🔗](https://caddyserver.com/docs/json/#admin/remote/access_control/permissions)[admin/remote/access_control/permissions](https://caddyserver.com/docs/json/admin/remote/access_control/permissions/)
Limits what the associated identities are allowed to do. If unspecified, all permissions are granted.

AdminPermissions specifies what kinds of requests are allowed to be made to the admin endpoint.

[🔗](https://caddyserver.com/docs/json/#admin/remote/access_control/permissions/paths)[admin/remote/access_control/permissions/paths](https://caddyserver.com/docs/json/admin/remote/access_control/permissions/paths/)
The API paths allowed. Paths are simple prefix matches. Any subpath of the specified paths will be allowed.

[🔗](https://caddyserver.com/docs/json/#admin/remote/access_control/permissions/methods)[admin/remote/access_control/permissions/methods](https://caddyserver.com/docs/json/admin/remote/access_control/permissions/methods/)
The HTTP methods allowed for the given paths.

[🔗](https://caddyserver.com/docs/json/#logging)[logging](https://caddyserver.com/docs/json/logging/)
Logging facilitates logging within Caddy. The default log is called "default" and you can customize it. You can also define additional logs.

By default, all logs at INFO level and higher are written to standard error ("stderr" writer) in a human-readable format ("console" encoder if stdout is an interactive terminal, "json" encoder otherwise).

All defined logs accept all log entries by default, but you can filter by level and module/logger names. A logger's name is the same as the module's name, but a module may append to logger names for more specificity. For example, you can filter logs emitted only by HTTP handlers using the name "http.handlers", because all HTTP handler module names have that prefix.

Caddy logs (except the sink) are zero-allocation, so they are very high-performing in terms of memory and CPU time. Enabling sampling can further increase throughput on extremely high-load servers.

[🔗](https://caddyserver.com/docs/json/#logging/sink)[logging/sink](https://caddyserver.com/docs/json/logging/sink/)
Sink is the destination for all unstructured logs emitted from Go's standard library logger. These logs are common in dependencies that are not designed specifically for use in Caddy. Because it is global and unstructured, the sink lacks most advanced features and customizations.

StandardLibLog configures the default Go standard library global logger in the log package. This is necessary because module dependencies which are not built specifically for Caddy will use the standard logger. This is also known as the "sink" logger.

[🔗](https://caddyserver.com/docs/json/#logging/sink/writer)[logging/sink/writer](https://caddyserver.com/docs/json/logging/sink/writer/)
The module that writes out log entries for the sink.

[🔗](https://caddyserver.com/docs/json/#logging/logs)[logging/logs](https://caddyserver.com/docs/json/logging/logs/)
Logs are your logs, keyed by an arbitrary name of your choosing. The default log can be customized by defining a log called "default". You can further define other logs and filter what kinds of entries they accept.

CustomLog represents a custom logger configuration.

By default, a log will emit all log entries. Some entries will be skipped if sampling is enabled. Further, the Include and Exclude parameters define which loggers (by name) are allowed or rejected from emitting in this log. If both Include and Exclude are populated, their values must be mutually exclusive, and longer namespaces have priority. If neither are populated, all logs are emitted.

[🔗](https://caddyserver.com/docs/json/#logging/logs/writer)[logging/logs/writer](https://caddyserver.com/docs/json/logging/logs/writer/)
The writer defines where log entries are emitted.

[🔗](https://caddyserver.com/docs/json/#logging/logs/encoder)[logging/logs/encoder](https://caddyserver.com/docs/json/logging/logs/encoder/)
The encoder is how the log entries are formatted or encoded.

[🔗](https://caddyserver.com/docs/json/#logging/logs/level)[logging/logs/level](https://caddyserver.com/docs/json/logging/logs/level/)
Level is the minimum level to emit, and is inclusive. Possible levels: DEBUG, INFO, WARN, ERROR, PANIC, and FATAL

[🔗](https://caddyserver.com/docs/json/#logging/logs/sampling)[logging/logs/sampling](https://caddyserver.com/docs/json/logging/logs/sampling/)
Sampling configures log entry sampling. If enabled, only some log entries will be emitted. This is useful for improving performance on extremely high-pressure servers.

LogSampling configures log entry sampling.

[🔗](https://caddyserver.com/docs/json/#logging/logs/sampling/interval)[logging/logs/sampling/interval](https://caddyserver.com/docs/json/logging/logs/sampling/interval/)
The window over which to conduct sampling.

A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.

[🔗](https://caddyserver.com/docs/json/#logging/logs/sampling/first)[logging/logs/sampling/first](https://caddyserver.com/docs/json/logging/logs/sampling/first/)
Log this many entries within a given level and message for each interval.

[🔗](https://caddyserver.com/docs/json/#logging/logs/sampling/thereafter)[logging/logs/sampling/thereafter](https://caddyserver.com/docs/json/logging/logs/sampling/thereafter/)
If more entries with the same level and message are seen during the same interval, keep one in this many entries until the end of the interval.

[🔗](https://caddyserver.com/docs/json/#logging/logs/include)[logging/logs/include](https://caddyserver.com/docs/json/logging/logs/include/)
Include defines the names of loggers to emit in this log. For example, to include only logs emitted by the admin API, you would include "admin.api".

[🔗](https://caddyserver.com/docs/json/#logging/logs/exclude)[logging/logs/exclude](https://caddyserver.com/docs/json/logging/logs/exclude/)
Exclude defines the names of loggers that should be skipped by this log. For example, to exclude only HTTP access logs, you would exclude "http.log.access".

[🔗](https://caddyserver.com/docs/json/#storage)[storage](https://caddyserver.com/docs/json/storage/)
StorageRaw is a storage module that defines how/where Caddy stores assets (such as TLS certificates). The default storage module is `caddy.storage.file_system` (the local file system), and the default path [depends on the OS and environment](https://caddyserver.com/docs/conventions#data-directory).

[🔗](https://caddyserver.com/docs/json/#apps)[apps](https://caddyserver.com/docs/json/apps/)
AppsRaw are the apps that Caddy will load and run. The app module name is the key, and the app's config is the associated value.

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

Fulfilled by modules in namespace:

*   [events](https://caddyserver.com/docs/json/apps/events/)
*   [http](https://caddyserver.com/docs/json/apps/http/)
*   [pki](https://caddyserver.com/docs/json/apps/pki/)
*   [tls](https://caddyserver.com/docs/json/apps/tls/)
*   [crowdsec](https://caddyserver.com/docs/json/apps/crowdsec/)Non-standard
*   [dns01proxy](https://caddyserver.com/docs/json/apps/dns01proxy/)Non-standard
*   [dynamic_dns](https://caddyserver.com/docs/json/apps/dynamic_dns/)Non-standard
*   [exec](https://caddyserver.com/docs/json/apps/exec/)Non-standard
*   [frankenphp](https://caddyserver.com/docs/json/apps/frankenphp/)Non-standard
*   [geoip2](https://caddyserver.com/docs/json/apps/geoip2/)Non-standard
*   [layer4](https://caddyserver.com/docs/json/apps/layer4/)Non-standard
*   [pocketbase](https://caddyserver.com/docs/json/apps/pocketbase/)Non-standard
*   [profefe](https://caddyserver.com/docs/json/apps/profefe/)Non-standard
*   [profiling](https://caddyserver.com/docs/json/apps/profiling/)Non-standard
*   [pyroscope](https://caddyserver.com/docs/json/apps/pyroscope/)Non-standard
*   [reconnect](https://caddyserver.com/docs/json/apps/reconnect/)Non-standard
*   [scion](https://caddyserver.com/docs/json/apps/scion/)Non-standard
*   [security](https://caddyserver.com/docs/json/apps/security/)Non-standard
*   [ssh](https://caddyserver.com/docs/json/apps/ssh/)Non-standard
*   [ssh](https://caddyserver.com/docs/json/apps/ssh/)Non-standard
*   [supervisor](https://caddyserver.com/docs/json/apps/supervisor/)Non-standard
