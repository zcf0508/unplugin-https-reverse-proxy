Title: Module http.authentication.providers.authorize - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.authentication.providers.authorize

Markdown Content:
http.authentication.providers.authorize authorizes access to endpoints based on the presense and content of JWT token.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer)authorizer
Authorizer authorizes access to endpoints based on the presense and content of JWT token.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/context)authorizer/context
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/primary)authorizer/primary
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/auth_url_path)authorizer/auth_url_path
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/disable_auth_redirect)authorizer/disable_auth_redirect
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/disable_auth_redirect_query)authorizer/disable_auth_redirect_query
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/auth_redirect_query_param)authorizer/auth_redirect_query_param
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/auth_redirect_status_code)authorizer/auth_redirect_status_code
The status code for the HTTP redirect for non-authorized users.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/redirect_with_javascript)authorizer/redirect_with_javascript
Enable the redirect with Javascript, as opposed to HTTP redirect.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/bypass_configs)authorizer/bypass_configs
The list of URI prefixes which bypass authorization.

BypassConfig contains the entry for the authorization bypass.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/bypass_configs/match_type)authorizer/bypass_configs/match_type
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/bypass_configs/uri)authorizer/bypass_configs/uri
There are no docs for this property.

The list of mappings between header names and field names.

HeaderInjectionConfig contains the entry for the authorization bypass.

There are no docs for this property.

There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/access_list_rules)authorizer/access_list_rules
RuleConfiguration consists of a list of conditions and and actions

There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/access_list_rules/conditions)authorizer/access_list_rules/conditions
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/access_list_rules/action)authorizer/access_list_rules/action
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_configs)authorizer/crypto_key_configs
CryptoKeyConfig is common token-related configuration settings.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_configs/seq)authorizer/crypto_key_configs/seq
Seq is the order in which a key would be processed.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_configs/id)authorizer/crypto_key_configs/id
ID is the key ID, aka kid.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_configs/usage)authorizer/crypto_key_configs/usage
Usage is the intended key usage. The values are: sign, verify, both, or auto.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_configs/token_name)authorizer/crypto_key_configs/token_name
TokenName is the token name associated with the key.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_configs/source)authorizer/crypto_key_configs/source
Source is either config or env.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_configs/algorithm)authorizer/crypto_key_configs/algorithm
Algorithm is either hmac, rsa, or ecdsa.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_configs/env_var_name)authorizer/crypto_key_configs/env_var_name
EnvVarName is the name of environment variables holding either the value of a key or the path a directory or file containing a key.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_configs/env_var_type)authorizer/crypto_key_configs/env_var_type
EnvVarType indicates how to interpret the value found in the EnvVarName. If it is blank, then the assumption is the environment variable value contains either public or private key.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_configs/env_var_value)authorizer/crypto_key_configs/env_var_value
EnvVarValue is the value associated with the environment variable set by EnvVarName.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_configs/file_path)authorizer/crypto_key_configs/file_path
FilePath is the path of a file containing either private or public key.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_configs/dir_path)authorizer/crypto_key_configs/dir_path
DirPath is the path to a directory containing crypto keys.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_configs/token_lifetime)authorizer/crypto_key_configs/token_lifetime
TokenLifetime is the expected token grant lifetime in seconds.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_configs/token_secret)authorizer/crypto_key_configs/token_secret
Secret is the shared key used with HMAC algorithm.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_configs/token_sign_method)authorizer/crypto_key_configs/token_sign_method
PreferredSignMethod is the preferred method to sign tokens, e.g. all HMAC keys could use HS256, HS384, and HS512 methods. By default, the preferred method is HS512. However, one may prefer using HS256.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_configs/token_eval_expr)authorizer/crypto_key_configs/token_eval_expr
EvalExpr is a list of expressions evaluated whether a specific key should be used for signing and verification.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/crypto_key_store_config)authorizer/crypto_key_store_config
CryptoKeyStoreConfig hold the default configuration for the keys, e.g. token name and lifetime.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/allowed_token_sources)authorizer/allowed_token_sources
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/strip_token_enabled)authorizer/strip_token_enabled
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/forbidden_url)authorizer/forbidden_url
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/user_identity_field)authorizer/user_identity_field
There are no docs for this property.

There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/validate_method_path)authorizer/validate_method_path
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/validate_access_list_path_claim)authorizer/validate_access_list_path_claim
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.authentication.providers.authorize#authorizer/validate_source_address)authorizer/validate_source_address
There are no docs for this property.

There are no docs for this property.
