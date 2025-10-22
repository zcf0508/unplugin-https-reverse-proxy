Title: Module http.handlers.authp - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.authp

Markdown Content:
http.handlers.authp implements Form-Based, Basic, Local, LDAP, OpenID Connect, OAuth 2.0, SAML Authentication.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp)authp
Authenticator implements Form-Based, Basic, Local, LDAP, OpenID Connect, OAuth 2.0, SAML Authentication.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/primary)authp/primary
PrimaryInstance indicates, when it is set to true, the instance of the portal is primary.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/context)authp/context
Context is the context whether the portal operates.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui)authp/ui
UI holds the configuration for the user interface.

Parameters represent a common set of configuration settings for HTML UI.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/theme)authp/ui/theme
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/templates)authp/ui/templates
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/allow_role_selection)authp/ui/allow_role_selection
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/title)authp/ui/title
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/logo_url)authp/ui/logo_url
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/logo_description)authp/ui/logo_description
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/private_links)authp/ui/private_links
Link represents a single HTML link.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/private_links/link)authp/ui/private_links/link
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/private_links/title)authp/ui/private_links/title
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/private_links/style)authp/ui/private_links/style
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/private_links/open_new_window)authp/ui/private_links/open_new_window
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/private_links/target)authp/ui/private_links/target
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/private_links/target_enabled)authp/ui/private_links/target_enabled
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/private_links/icon_name)authp/ui/private_links/icon_name
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/private_links/icon_enabled)authp/ui/private_links/icon_enabled
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/auto_redirect_url)authp/ui/auto_redirect_url
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/realms)authp/ui/realms
UserRealm represents a single authentication realm/domain.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/realms/name)authp/ui/realms/name
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/realms/label)authp/ui/realms/label
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/password_recovery_enabled)authp/ui/password_recovery_enabled
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/custom_css_path)authp/ui/custom_css_path
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/ui/custom_js_path)authp/ui/custom_js_path
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/user_registration_config)authp/user_registration_config
UserRegistrationConfig holds the configuration for the user registration.

Config represents a common set of configuration settings for user registration

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/user_registration_config/disabled)authp/user_registration_config/disabled
The switch determining whether the registration is enabled/disabled.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/user_registration_config/title)authp/user_registration_config/title
The title of the registration page

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/user_registration_config/code)authp/user_registration_config/code
The mandatory registration code. It is possible adding multiple codes, comma separated.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/user_registration_config/dropbox)authp/user_registration_config/dropbox
The file path to registration database.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/user_registration_config/require_accept_terms)authp/user_registration_config/require_accept_terms
The switch determining whether a user must accept terms and conditions

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/user_registration_config/require_domain_mx)authp/user_registration_config/require_domain_mx
The switch determining whether the domain associated with an email has a valid MX DNS record.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/user_registration_config/privacy_policy_link)authp/user_registration_config/privacy_policy_link
The link to terms and conditions document.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/user_registration_config/terms_conditions_link)authp/user_registration_config/terms_conditions_link
The link to privacy policy document.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/user_transformer_config)authp/user_transformer_config
UserTransformerConfig holds the configuration for the user transformer.

Config represents a common set of configuration settings applicable to the cookies issued by authn.Authenticator.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/user_transformer_config/matchers)authp/user_transformer_config/matchers
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/user_transformer_config/actions)authp/user_transformer_config/actions
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/cookie_config)authp/cookie_config
CookieConfig holds the configuration for the cookies issues by Authenticator.

Config represents a common set of configuration settings applicable to the cookies issued by authn.Authenticator.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/cookie_config/domain)authp/cookie_config/domain
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/cookie_config/path)authp/cookie_config/path
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/cookie_config/lifetime)authp/cookie_config/lifetime
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/cookie_config/insecure)authp/cookie_config/insecure
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/cookie_config/same_site)authp/cookie_config/same_site
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs)authp/backend_configs
BackendConfigs hold the configurations for authentication backends.

Config holds configuration for one of the supported authentication backends.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/local)authp/backend_configs/local
Config holds the configuration for the backend.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/local/name)authp/backend_configs/local/name
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/local/method)authp/backend_configs/local/method
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/local/realm)authp/backend_configs/local/realm
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/local/path)authp/backend_configs/local/path
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap)authp/backend_configs/ldap
Config holds the configuration for the backend.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/name)authp/backend_configs/ldap/name
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/method)authp/backend_configs/ldap/method
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/realm)authp/backend_configs/ldap/realm
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/servers)authp/backend_configs/ldap/servers
AuthServer represents an instance of LDAP server.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/servers/addr)authp/backend_configs/ldap/servers/addr
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/servers/ignore_cert_errors)authp/backend_configs/ldap/servers/ignore_cert_errors
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/servers/timeout)authp/backend_configs/ldap/servers/timeout
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/username)authp/backend_configs/ldap/username
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/password)authp/backend_configs/ldap/password
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/attributes)authp/backend_configs/ldap/attributes
UserAttributes represent the mapping of LDAP attributes to JWT fields.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/attributes/name)authp/backend_configs/ldap/attributes/name
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/attributes/surname)authp/backend_configs/ldap/attributes/surname
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/attributes/username)authp/backend_configs/ldap/attributes/username
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/attributes/member_of)authp/backend_configs/ldap/attributes/member_of
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/attributes/email)authp/backend_configs/ldap/attributes/email
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/search_base_dn)authp/backend_configs/ldap/search_base_dn
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/search_filter)authp/backend_configs/ldap/search_filter
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/groups)authp/backend_configs/ldap/groups
UserGroup represent the binding between BaseDN and a serarch filter. Upon successful authentation for the combination, a user gets assigned the roles associated with the binding.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/groups/dn)authp/backend_configs/ldap/groups/dn
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/groups/roles)authp/backend_configs/ldap/groups/roles
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/ldap/trusted_authorities)authp/backend_configs/ldap/trusted_authorities
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/saml)authp/backend_configs/saml
Config holds the configuration for the Backend.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/saml/name)authp/backend_configs/saml/name
Name is the unique name associated with the Backend..

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/saml/method)authp/backend_configs/saml/method
Method the name of the authentication method associated with the Backend.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/saml/realm)authp/backend_configs/saml/realm
Realm the authentication realm associated with the Backend.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/saml/provider)authp/backend_configs/saml/provider
Provider is the name of the provider associated with the Backend, e.g. azure.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/saml/idp_metadata_location)authp/backend_configs/saml/idp_metadata_location
IdpMetadataLocation is the path to the Identity Provider metadata.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/saml/idp_sign_cert_location)authp/backend_configs/saml/idp_sign_cert_location
IdpSignCertLocation is the path to the Identity Provider signing certificate.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/saml/tenant_id)authp/backend_configs/saml/tenant_id
TenantID is the tenant ID associated with the Backend.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/saml/application_id)authp/backend_configs/saml/application_id
ApplicationID is the application ID associated with the Backend.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/saml/application_name)authp/backend_configs/saml/application_name
ApplicationName is the application name associated with the Backend.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/saml/entity_id)authp/backend_configs/saml/entity_id
EntityID is the "Identifier (Entity ID)" an administrator specifies in "Set up Single Sign-On with SAML" in Azure AD Enterprise Applications.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/saml/acs_urls)authp/backend_configs/saml/acs_urls
AssertionConsumerServiceURLs is the list of URLs server instance is listening on. These URLs are known as SP Assertion Consumer Service endpoints. For example, users may access a website via [http://app.domain.local](http://app.domain.local/). At the same time the users may access it by IP, e.g. [http://10.10.10.10](http://10.10.10.10/). or by name, i.e. app. Each of the URLs is a separate endpoint.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/oauth2)authp/backend_configs/oauth2
Config holds the configuration for the backend.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/oauth2/name)authp/backend_configs/oauth2/name
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/oauth2/method)authp/backend_configs/oauth2/method
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/oauth2/realm)authp/backend_configs/oauth2/realm
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/oauth2/provider)authp/backend_configs/oauth2/provider
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/oauth2/domain_name)authp/backend_configs/oauth2/domain_name
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/oauth2/client_id)authp/backend_configs/oauth2/client_id
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/oauth2/client_secret)authp/backend_configs/oauth2/client_secret
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/oauth2/server_id)authp/backend_configs/oauth2/server_id
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/oauth2/app_secret)authp/backend_configs/oauth2/app_secret
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/oauth2/tenant_id)authp/backend_configs/oauth2/tenant_id
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/oauth2/identity_token_name)authp/backend_configs/oauth2/identity_token_name
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/oauth2/scopes)authp/backend_configs/oauth2/scopes
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/oauth2/user_roles)authp/backend_configs/oauth2/user_roles
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/oauth2/base_auth_url)authp/backend_configs/oauth2/base_auth_url
The URL to OAuth 2.0 Custom Authorization Server.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/backend_configs/oauth2/metadata_url)authp/backend_configs/oauth2/metadata_url
The URL to OAuth 2.0 metadata related to your Custom Authorization Server.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/access_list_configs)authp/access_list_configs
AccessListConfigs hold the configurations for the ACL of the token validator.

RuleConfiguration consists of a list of conditions and and actions

There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/access_list_configs/conditions)authp/access_list_configs/conditions
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/access_list_configs/action)authp/access_list_configs/action
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/token_validator_options)authp/token_validator_options
TokenValidatorOptions holds the configuration for the token validator.

TokenValidatorOptions provides options for TokenValidator.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/token_validator_options/validate_source_address)authp/token_validator_options/validate_source_address
There are no docs for this property.

There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/token_validator_options/validate_method_path)authp/token_validator_options/validate_method_path
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/token_validator_options/validate_access_list_path_claim)authp/token_validator_options/validate_access_list_path_claim
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/crypto_key_configs)authp/crypto_key_configs
CryptoKeyConfigs hold the configurations for the keys used to issue and validate user tokens.

CryptoKeyConfig is common token-related configuration settings.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/crypto_key_configs/seq)authp/crypto_key_configs/seq
Seq is the order in which a key would be processed.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/crypto_key_configs/id)authp/crypto_key_configs/id
ID is the key ID, aka kid.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/crypto_key_configs/usage)authp/crypto_key_configs/usage
Usage is the intended key usage. The values are: sign, verify, both, or auto.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/crypto_key_configs/token_name)authp/crypto_key_configs/token_name
TokenName is the token name associated with the key.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/crypto_key_configs/source)authp/crypto_key_configs/source
Source is either config or env.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/crypto_key_configs/algorithm)authp/crypto_key_configs/algorithm
Algorithm is either hmac, rsa, or ecdsa.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/crypto_key_configs/env_var_name)authp/crypto_key_configs/env_var_name
EnvVarName is the name of environment variables holding either the value of a key or the path a directory or file containing a key.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/crypto_key_configs/env_var_type)authp/crypto_key_configs/env_var_type
EnvVarType indicates how to interpret the value found in the EnvVarName. If it is blank, then the assumption is the environment variable value contains either public or private key.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/crypto_key_configs/env_var_value)authp/crypto_key_configs/env_var_value
EnvVarValue is the value associated with the environment variable set by EnvVarName.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/crypto_key_configs/file_path)authp/crypto_key_configs/file_path
FilePath is the path of a file containing either private or public key.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/crypto_key_configs/dir_path)authp/crypto_key_configs/dir_path
DirPath is the path to a directory containing crypto keys.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/crypto_key_configs/token_lifetime)authp/crypto_key_configs/token_lifetime
TokenLifetime is the expected token grant lifetime in seconds.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/crypto_key_configs/token_secret)authp/crypto_key_configs/token_secret
Secret is the shared key used with HMAC algorithm.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/crypto_key_configs/token_sign_method)authp/crypto_key_configs/token_sign_method
PreferredSignMethod is the preferred method to sign tokens, e.g. all HMAC keys could use HS256, HS384, and HS512 methods. By default, the preferred method is HS512. However, one may prefer using HS256.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/crypto_key_configs/token_eval_expr)authp/crypto_key_configs/token_eval_expr
EvalExpr is a list of expressions evaluated whether a specific key should be used for signing and verification.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/token_grantor_options)authp/token_grantor_options
TokenGrantorOptions holds the configuration for the tokens issues by Authenticator.

TokenGrantorOptions provides options for TokenGrantor.

[🔗](https://caddyserver.com/docs/modules/http.handlers.authp#authp/token_grantor_options/enable_source_address)authp/token_grantor_options/enable_source_address
There are no docs for this property.
