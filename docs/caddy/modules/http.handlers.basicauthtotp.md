Title: Module http.handlers.basicauthtotp - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.basicauthtotp

Markdown Content:
http.handlers.basicauthtotp is a Caddy module that enhances Caddy's `basic_auth` directive by adding Time-based One-Time Password (TOTP) two-factor authentication (2FA). This module supplements `basic_auth` and does not replace it; therefore, `basic_auth` must be configured and active for BasicAuthTOTP to function correctly. Together, these two directives provide an additional security layer for sensitive routes by requiring both standard credentials and a valid TOTP code from a compatible authenticator app.

This module is suitable for scenarios where extra security is necessary but may not be intended for production environments without additional testing, as it is in an experimental phase.

Key features include:

*   JWT(JSON Web Token)-session-based TOTP authentication with configurable inactivity timeouts.
*   IP binding for session validation, requiring re-authentication if the user's IP changes.
*   Customizable session cookie options, including name and path scope.

Instead of server-side session management, this module uses JWTs stored in cookies to manage sessions. This approach simplifies session handling and no sessions are lost when Caddy is reloaded or restarted. However, this approach is less secure than server-side session management, as JWTs are not invalidated or blacklisted and no logout is provided. To mitigate risks, the module uses IP binding to ensure that the JWT is only valid for the client IP address that created it. If the client IP changes, the JWT cookie is removed and the user must re-authenticate.

Configuration options in BasicAuthTOTP provide flexibility in securing routes, and managing session inactivity timeout. Secrets are loaded from a specified JSON file that maps usernames to TOTP secrets.

Example use case: BasicAuthTOTP is ideal for protecting sensitive or restricted resources by requiring an additional TOTP code, making it a good fit for applications where higher assurance of identity is required.

[🔗](https://caddyserver.com/docs/modules/http.handlers.basicauthtotp#session_inactivity_timeout)session_inactivity_timeout
SessionInactivityTimeout defines the maximum allowed period of inactivity before a 2FA session expires and requires re-authentication. Default is 60 minutes.

A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.

[🔗](https://caddyserver.com/docs/modules/http.handlers.basicauthtotp#secrets_file_path)secrets_file_path
SecretsFilePath specifies the path to the JSON file containing TOTP secrets for each user. This file should contain usernames and their corresponding TOTP secrets.

[🔗](https://caddyserver.com/docs/modules/http.handlers.basicauthtotp#cookie_name)cookie_name
CookieName defines the name of the cookie used to store the session token for 2FA. Default is `batotp_sess`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.basicauthtotp#cookie_path)cookie_path
CookiePath specifies the path scope of the session cookie. This restricts where the cookie is sent on the server. Default is `/`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.basicauthtotp#sign_key)sign_key
SignKey is the base64 encoded secret key used to sign the JWTs.
