Title: admin - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/admin/

Markdown Content:
`{▾	"disabled": false,	"listen": "",	"enforce_origin": false,	"origins": [""],	"config": {▾		"persist": false,		"load": {•••}	},	"identity": {▾		"identifiers": [""],		"issuers": [{•••}]	},	"remote": {▾		"listen": "",		"access_control": [{▾			"public_keys": [""],			"permissions": [{▾			}]		}]	}}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/json/admin/#docs "Direct link")
----------------------------------------------------------------------------

AdminConfig configures Caddy's API endpoint, which is used to manage Caddy while it is running.

[🔗](https://caddyserver.com/docs/json/admin/#disabled)[disabled](https://caddyserver.com/docs/json/admin/disabled/)
If true, the admin endpoint will be completely disabled. Note that this makes any runtime changes to the config impossible, since the interface to do so is through the admin endpoint.

[🔗](https://caddyserver.com/docs/json/admin/#listen)[listen](https://caddyserver.com/docs/json/admin/listen/)
The address to which the admin endpoint's listener should bind itself. Can be any single network address that can be parsed by Caddy. Default: localhost:2019

[🔗](https://caddyserver.com/docs/json/admin/#enforce_origin)[enforce_origin](https://caddyserver.com/docs/json/admin/enforce_origin/)
If true, CORS headers will be emitted, and requests to the API will be rejected if their `Host` and `Origin` headers do not match the expected value(s). Use `origins` to customize which origins/hosts are allowed. If `origins` is not set, the listen address is the only value allowed by default. Enforced only on local (plaintext) endpoint.

[🔗](https://caddyserver.com/docs/json/admin/#origins)[origins](https://caddyserver.com/docs/json/admin/origins/)
The list of allowed origins/hosts for API requests. Only needed if accessing the admin endpoint from a host different from the socket's network interface or if `enforce_origin` is true. If not set, the listener address will be the default value. If set but empty, no origins will be allowed. Enforced only on local (plaintext) endpoint.

[🔗](https://caddyserver.com/docs/json/admin/#config)[config](https://caddyserver.com/docs/json/admin/config/)
Options pertaining to configuration management.

ConfigSettings configures the management of configuration.

[🔗](https://caddyserver.com/docs/json/admin/#config/persist)[config/persist](https://caddyserver.com/docs/json/admin/config/persist/)
Whether to keep a copy of the active config on disk. Default is true. Note that "pulled" dynamic configs (using the neighboring "load" module) are not persisted; only configs that are pushed to Caddy get persisted.

[🔗](https://caddyserver.com/docs/json/admin/#config/load)[config/load](https://caddyserver.com/docs/json/admin/config/load/)
Loads a configuration to use. This is helpful if your configs are managed elsewhere, and you want Caddy to pull its config dynamically when it starts. The pulled config completely replaces the current one, just like any other config load. It is an error if a pulled config is configured to pull another config.

EXPERIMENTAL: Subject to change.

Fulfilled by modules in namespace: **caddy.config_loaders**

*   [http](https://caddyserver.com/docs/json/admin/config/load/http/)
*   [storage](https://caddyserver.com/docs/json/admin/config/load/storage/)Non-standard

[🔗](https://caddyserver.com/docs/json/admin/#identity)[identity](https://caddyserver.com/docs/json/admin/identity/)
Options that establish this server's identity. Identity refers to credentials which can be used to uniquely identify and authenticate this server instance. This is required if remote administration is enabled (but does not require remote administration to be enabled). Default: no identity management.

IdentityConfig configures management of this server's identity. An identity consists of credentials that uniquely verify this instance; for example, TLS certificates (public + private key pairs).

[🔗](https://caddyserver.com/docs/json/admin/#identity/identifiers)[identity/identifiers](https://caddyserver.com/docs/json/admin/identity/identifiers/)
List of names or IP addresses which refer to this server. Certificates will be obtained for these identifiers so secure TLS connections can be made using them.

[🔗](https://caddyserver.com/docs/json/admin/#identity/issuers)[identity/issuers](https://caddyserver.com/docs/json/admin/identity/issuers/)
Issuers that can provide this admin endpoint its identity certificate(s). Default: ACME issuers configured for ZeroSSL and Let's Encrypt. Be sure to change this if you require credentials for private identifiers.

[🔗](https://caddyserver.com/docs/json/admin/#remote)[remote](https://caddyserver.com/docs/json/admin/remote/)
Options pertaining to remote administration. By default, remote administration is disabled. If enabled, identity management must also be configured, as that is how the endpoint is secured. See the neighboring "identity" object.

EXPERIMENTAL: This feature is subject to change.

RemoteAdmin enables and configures remote administration. If enabled, a secure listener enforcing mutual TLS authentication will be started on a different port from the standard plaintext admin server.

This endpoint is secured using identity management, which must be configured separately (because identity management does not depend on remote administration). See the admin/identity config struct.

EXPERIMENTAL: Subject to change.

[🔗](https://caddyserver.com/docs/json/admin/#remote/listen)[remote/listen](https://caddyserver.com/docs/json/admin/remote/listen/)
The address on which to start the secure listener. Default: :2021

[🔗](https://caddyserver.com/docs/json/admin/#remote/access_control)[remote/access_control](https://caddyserver.com/docs/json/admin/remote/access_control/)
List of access controls for this secure admin endpoint. This configures TLS mutual authentication (i.e. authorized client certificates), but also application-layer permissions like which paths and methods each identity is authorized for.

AdminAccess specifies what permissions an identity or group of identities are granted.

[🔗](https://caddyserver.com/docs/json/admin/#remote/access_control/public_keys)[remote/access_control/public_keys](https://caddyserver.com/docs/json/admin/remote/access_control/public_keys/)
Base64-encoded DER certificates containing public keys to accept. (The contents of PEM certificate blocks are base64-encoded DER.) Any of these public keys can appear in any part of a verified chain.

[🔗](https://caddyserver.com/docs/json/admin/#remote/access_control/permissions)[remote/access_control/permissions](https://caddyserver.com/docs/json/admin/remote/access_control/permissions/)
Limits what the associated identities are allowed to do. If unspecified, all permissions are granted.

AdminPermissions specifies what kinds of requests are allowed to be made to the admin endpoint.

[🔗](https://caddyserver.com/docs/json/admin/#remote/access_control/permissions/paths)[remote/access_control/permissions/paths](https://caddyserver.com/docs/json/admin/remote/access_control/permissions/paths/)
The API paths allowed. Paths are simple prefix matches. Any subpath of the specified paths will be allowed.

[🔗](https://caddyserver.com/docs/json/admin/#remote/access_control/permissions/methods)[remote/access_control/permissions/methods](https://caddyserver.com/docs/json/admin/remote/access_control/permissions/methods/)
The HTTP methods allowed for the given paths.
