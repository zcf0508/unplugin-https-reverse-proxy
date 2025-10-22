Title: Module http.authentication.providers.paseto - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.authentication.providers.paseto

Markdown Content:
http.authentication.providers.paseto implements PASETO authentication.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.paseto#key)key
Key is the key used to verify or decrypt PASETO tokens. It must be the public key if `purpose` is 'public', or the symmetric key if `purpose` is 'local'. It can be specified as either a hex or PEM encoded string.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.paseto#purpose)purpose
Purpose is the PASETO protocol purpose. It can either be 'local' for shared-key (symmetric) encryption, or 'public' for public-key (asymmetric) signing. The default is 'public'.

Purpose represents either local or public paseto mode

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.paseto#version)version
Version is the PASETO protocol version. The default is 4.

Version represents a valid paseto version

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.paseto#time_skew_tolerance)time_skew_tolerance
TimeSkewTolerance is the amount of time to allow token claim times (iat, nbf, exp) to be from the current system time to account for clock skew between systems. The default is 30s.

A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.paseto#from_query)from_query
FromQuery defines a list of HTTP request query string parameter names tokens should be retrieved from.

If multiple names are specified, all the corresponding query values will be treated as candidate tokens, and each one will be verified until a valid one is reached.

Priority: from_query > from_header > from_cookies.

FromHeader works like FromQuery, but defines a list of HTTP header names tokens should be retrieved from.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.paseto#from_cookies)from_cookies
FromCookie works like FromQuery, but defines a list of HTTP cookie names tokens should be retrieved from.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.paseto#user_claims)user_claims
UserClaims defines a list of token claim names from which to extract the ID of the authenticated user.

By default, this value will be set to []string{"sub"}.

If multiple names are specified, the first non-empty value of the claim in the token payload will be used as the ID of the authenticated user, and the placeholder `{http.auth.user.id}` will be set to the ID. For example, the value `uid username` will set "eva" as the final user ID from the token payload: `{ "username": "eva" }`.

If no non-empty values are found, the request fails authentication.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.paseto#meta_claims)meta_claims
MetaClaims defines a map to populate {http.auth.user.*} metadata placeholders. The key is the claim in the token payload, the value is the placeholder name. e.g. {"IsAdmin": "is_admin"} can populate {http.auth.user.is_admin} with the value of `IsAdmin` in the token payload if found, otherwise "".

NOTE: The name in the placeholder should adhere to Caddy conventions (snake casing).

Caddyfile: Use syntax `<claim>[-> <placeholder>]` to define a map item. The placeholder is optional, if not specified, use the same name as the claim. E.g.:

`meta_claims "IsAdmin -> is_admin" "group"`
is equal to {"IsAdmin": "is_admin", "group": "group"}.

Nested claim paths are supported with dot notation. So for the following token payload:

`{ ..., "user_info": { "role": "admin" }}`
If you want to populate {http.auth.user.role} with "admin", you can use

`meta_claims "user_info.role -> role"`[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.paseto#allow_audiences)allow_audiences
AllowAudiences defines a list of allowed audiences. If non-empty, the "aud" claim must exist in the token payload and its value must be specified here for verification to succeed. Otherwise, the "aud" claim is not required, and any value will be allowed.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.paseto#allow_issuers)allow_issuers
AllowIssuers defines a list of allowed issuers. If non-empty, the "iss" claim must exist in the token payload and its value must be specified here for verification to succeed. Otherwise, the "iss" claim is not required, and any value will be allowed.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.paseto#allow_users)allow_users
AllowUsers defines a list of allowed users. If non-empty, and the user claim is defined in the token payload, only specified users will pass the verification. Otherwise, all users will be allowed.
