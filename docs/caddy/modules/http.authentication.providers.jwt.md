Title: Module http.authentication.providers.jwt - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.authentication.providers.jwt

Markdown Content:
http.authentication.providers.jwt facilitates JWT (JSON Web Token) authentication.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.jwt#sign_key)sign_key
SignKey is the key used by the signing algorithm to verify the signature.

For symmetric algorithems, use the key directly. e.g.

`"<secret_key_bytes_in_base64_format>".`
For asymmetric algorithems, use the public key in x509 PEM format. e.g.

```
-----BEGIN PUBLIC KEY-----
...
-----END PUBLIC KEY-----
```

This is an optional field. You can instead provide JWKURL to use JWKs.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.jwt#jwk_url)jwk_url
JWKURL is the URL where a provider publishes their JWKs. The URL must publish the JWKs in the standard format as described in [https://tools.ietf.org/html/rfc7517](https://tools.ietf.org/html/rfc7517). If you'd like to use JWK, set this field and leave SignKey unset.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.jwt#sign_alg)sign_alg
SignAlgorithm is the the signing algorithm used. Available values are defined in [https://www.rfc-editor.org/rfc/rfc7518#section-3.1](https://www.rfc-editor.org/rfc/rfc7518#section-3.1) This is an optional field, which is used for determining the signing algorithm. We will try to determine the algorithm automatically from the following sources:

1.   The "alg" field in the JWT header.
2.   The "alg" field in the matched JWK (if JWKURL is provided).
3.   The value set here.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.jwt#from_query)from_query
FromQuery defines a list of names to get tokens from the query parameters of an HTTP request.

If multiple keys were given, all the corresponding query values will be treated as candidate tokens. And we will verify each of them until we got a valid one.

Priority: from_query > from_header > from_cookies.

FromHeader works like FromQuery. But defines a list of names to get tokens from the HTTP header.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.jwt#from_cookies)from_cookies
FromCookie works like FromQuery. But defines a list of names to get tokens from the HTTP cookies.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.jwt#issuer_whitelist)issuer_whitelist
IssuerWhitelist defines a list of issuers. A non-empty list turns on "iss verification": the "iss" claim must exist in the given JWT payload. And the value of the "iss" claim must be on the whitelist in order to pass the verification.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.jwt#audience_whitelist)audience_whitelist
AudienceWhitelist defines a list of audiences. A non-empty list turns on "aud verification": the "aud" claim must exist in the given JWT payload. The verification will pass as long as one of the "aud" values is on the whitelist.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.jwt#user_claims)user_claims
UserClaims defines a list of names to find the ID of the authenticated user.

By default, this config will be set to []string{"sub"}.

If multiple names were given, we will use the first non-empty value of the key in the JWT payload as the ID of the authenticated user. i.e. The placeholder {http.auth.user.id} will be set to the ID.

For example, []string{"uid", "username"} will set "eva" as the final user ID from JWT payload: { "username": "eva" }.

If no non-empty values found, leaves it unauthenticated.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.jwt#meta_claims)meta_claims
MetaClaims defines a map to populate {http.auth.user.*} metadata placeholders. The key is the claim in the JWT payload, the value is the placeholder name. e.g. {"IsAdmin": "is_admin"} can populate {http.auth.user.is_admin} with the value of `IsAdmin` in the JWT payload if found, otherwise "".

NOTE: The name in the placeholder should be adhere to Caddy conventions (snake_casing).

Caddyfile: Use syntax `<claim>[-> <placeholder>]` to define a map item. The placeholder is optional, if not specified, use the same name as the claim. e.g.

`meta_claims "IsAdmin -> is_admin" "group"`
is equal to {"IsAdmin": "is_admin", "group": "group"}.

Since v0.6.0, nested claim path is also supported, e.g. For the following JWT payload:

`{ ..., "user_info": { "role": "admin" }}`
If you want to populate {http.auth.user.role} with "admin", you can use

`meta_claims "user_info.role -> role"`
Use dot notation to access nested claims.
