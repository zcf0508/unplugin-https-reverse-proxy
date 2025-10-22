Title: remote/access_control - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/admin/remote/access_control/

Markdown Content:
`[{▾	"public_keys": [""],	"permissions": [{▾		"paths": [""],		"methods": [""]	}]}]`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/json/admin/remote/access_control/#docs "Direct link")
--------------------------------------------------------------------------------------------------

List of access controls for this secure admin endpoint. This configures TLS mutual authentication (i.e. authorized client certificates), but also application-layer permissions like which paths and methods each identity is authorized for.

[🔗](https://caddyserver.com/docs/json/admin/remote/access_control/#public_keys)[public_keys](https://caddyserver.com/docs/json/admin/remote/access_control/public_keys/)
Base64-encoded DER certificates containing public keys to accept. (The contents of PEM certificate blocks are base64-encoded DER.) Any of these public keys can appear in any part of a verified chain.

[🔗](https://caddyserver.com/docs/json/admin/remote/access_control/#permissions)[permissions](https://caddyserver.com/docs/json/admin/remote/access_control/permissions/)
Limits what the associated identities are allowed to do. If unspecified, all permissions are granted.

AdminPermissions specifies what kinds of requests are allowed to be made to the admin endpoint.

[🔗](https://caddyserver.com/docs/json/admin/remote/access_control/#permissions/paths)[permissions/paths](https://caddyserver.com/docs/json/admin/remote/access_control/permissions/paths/)
The API paths allowed. Paths are simple prefix matches. Any subpath of the specified paths will be allowed.

[🔗](https://caddyserver.com/docs/json/admin/remote/access_control/#permissions/methods)[permissions/methods](https://caddyserver.com/docs/json/admin/remote/access_control/permissions/methods/)
The HTTP methods allowed for the given paths.
