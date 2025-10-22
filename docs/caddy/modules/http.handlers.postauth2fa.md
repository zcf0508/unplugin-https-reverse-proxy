Title: Module http.handlers.postauth2fa - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.postauth2fa

Markdown Content:
There is more than one module named **Module http.handlers.postauth2fa**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.postauth2fa#docs "Direct link")
--------------------------------------------------------------------------------------------------

`{▾	"session_inactivity_timeout": 0,	"secrets_file_path": "",	"cookie_name": "",	"cookie_path": "",	"cookie_domain": "",	"username_placeholder": "",	"ip_binding": "",	"form_template": "",	"totp_code_length": 0,	"sign_key": "",	"encryption_key": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/steffenbusch/caddy-postauth-2fa](https://github.com/steffenbusch/caddy-postauth-2fa)**

**Custom builds:**`xcaddy build --with github.com/steffenbusch/caddy-postauth-2fa`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.postauth2fa#docs "Direct link")
--------------------------------------------------------------------------------------------------

http.handlers.postauth2fa is a Caddy HTTP handler module that adds TOTP-based two-factor authentication (2FA) after a primary authentication handler (such as basic_auth). It enforces an additional TOTP code check for protected routes. The module supports per-user TOTP secrets (plaintext or AES-GCM-encrypted), session management via JWT cookies, and optional IP binding for session validation. Features:

*   TOTP 2FA enforcement after primary authentication (e.g., basic_auth, jwtauth, etc.)
*   Per-user TOTP secrets (plaintext or encrypted), loaded from a JSON file (map of usernames)
*   Configurable inactivity timeout for 2FA sessions (JWT-based, stateless, cookie storage)
*   Optional IP binding for session validation (enabled by default, can be disabled or templated)
*   Customizable session cookie name, path, and domain
*   Customizable HTML form template for TOTP code entry
*   Per-user or global TOTP code length (6 or 8 digits)
*   Secure handling of secrets and keys (Caddy placeholders and file includes supported)
*   No server-side session state: JWTs are stateless, reloads/restarts do not invalidate sessions

Note: This module does not provide user management, TOTP provisioning, or logout functionality. It is intended to be used together with a primary authentication handler.

[🔗](https://caddyserver.com/docs/modules/http.handlers.postauth2fa#session_inactivity_timeout)session_inactivity_timeout
SessionInactivityTimeout defines the maximum allowed period of inactivity before a 2FA session expires and requires re-authentication. Default is 60 minutes.

A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.

[🔗](https://caddyserver.com/docs/modules/http.handlers.postauth2fa#secrets_file_path)secrets_file_path
SecretsFilePath specifies the path to the JSON file containing TOTP secrets for each user. This file should contain usernames and their corresponding TOTP secrets.

[🔗](https://caddyserver.com/docs/modules/http.handlers.postauth2fa#cookie_name)cookie_name
CookieName defines the name of the cookie used to store the session token for 2FA. Default is `cpa_sess`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.postauth2fa#cookie_path)cookie_path
CookiePath specifies the path scope of the cookie. This restricts where the cookie is sent on the server. Default is `/`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.postauth2fa#cookie_domain)cookie_domain
CookieDomain specifies the domain scope of the cookie.

[🔗](https://caddyserver.com/docs/modules/http.handlers.postauth2fa#username_placeholder)username_placeholder
UsernamePlaceholder defines the Caddy placeholder used to extract the authenticated username from the request context. This should match the placeholder set by the authentication handler, such as "{http.auth.user.id}" for basic_auth. If not set, defaults to "{http.auth.user.id}".

[🔗](https://caddyserver.com/docs/modules/http.handlers.postauth2fa#ip_binding)ip_binding
IPBinding controls whether the session is bound to the client IP address. Accepts "true" (default) or "false". Can use Caddy placeholders.

[🔗](https://caddyserver.com/docs/modules/http.handlers.postauth2fa#form_template)form_template
Filename of the custom template to use instead of the embedded default template.

[🔗](https://caddyserver.com/docs/modules/http.handlers.postauth2fa#totp_code_length)totp_code_length
TOTPCodeLength defines the expected length of the TOTP code (default: 6).

[🔗](https://caddyserver.com/docs/modules/http.handlers.postauth2fa#sign_key)sign_key
SignKey is the base64 encoded secret key used to sign the JWTs.

[🔗](https://caddyserver.com/docs/modules/http.handlers.postauth2fa#encryption_key)encryption_key
EncryptionKey is the base64 encoded key used to decrypt encrypted TOTP secrets.
