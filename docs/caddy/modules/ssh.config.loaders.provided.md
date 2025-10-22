Title: Module ssh.config.loaders.provided - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/ssh.config.loaders.provided

Markdown Content:
Lifted and merged from golang.org/x/crypto/ssh ProvidedConfig holds server specific configuration data.

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#signer)signer
The session signers to be loaded. The field takes the form: "signer": { "module": "" ... signer module config } If empty, the default module is "fallback", which will load existing keys, or generates and stores them if non-existent.

Fulfilled by modules in namespace: **ssh.signers**

*   [fallback](https://caddyserver.com/docs/modules/ssh.signers.fallback)Non-standard
*   [fallback](https://caddyserver.com/docs/modules/ssh.signers.fallback)Non-standard
*   [file](https://caddyserver.com/docs/modules/ssh.signers.file)Non-standard
*   [file](https://caddyserver.com/docs/modules/ssh.signers.file)Non-standard

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#key_exchanges)key_exchanges
The allowed key exchanges algorithms. If unspecified then a default set of algorithms is used. WARNING: don't set it to anyting (not even empty array) unless you know the risks!

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#ciphers)ciphers
The allowed cipher algorithms. If unspecified then a sensible default is used. WARNING: don't set it to anyting (not even empty array) unless you know the risks!

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#ma_cs)ma_cs
The allowed MAC algorithms. If unspecified then a sensible default is used. WARNING: don't set it to anyting (not even empty array) unless you know the risks!

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#no_client_auth)no_client_auth
NoClientAuth is true if clients are allowed to connect without authenticating.

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#max_auth_tries)max_auth_tries
MaxAuthTries specifies the maximum number of authentication attempts permitted per connection. If set to a negative number, the number of attempts are unlimited. If set to zero, the number of attempts are limited to 6.

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#authentication)authentication
This holds the authentication suite for the various flows

Config holds the configuration of the various authentication flows, including allow/deny users/groups.

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#authentication/allow_users)authentication/allow_users
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#authentication/deny_users)authentication/deny_users
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#authentication/allow_groups)authentication/allow_groups
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#authentication/deny_groups)authentication/deny_groups
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#authentication/username_password)authentication/username_password
UsernamePassword holds the configuration of the password-based authentication flow. nil value disables the authentication flow.

// PasswordAuthFlow holds the password-based authentication providers

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#authentication/username_password/providers)authentication/username_password/providers
A set of authentication providers implementing the UserPasswordAuthenticator interface. If none are specified, all requests will always be unauthenticated.

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

Fulfilled by modules in namespace: **ssh.authentication.providers.password**

*   [static](https://caddyserver.com/docs/modules/ssh.authentication.providers.password.static)Non-standard
*   [static](https://caddyserver.com/docs/modules/ssh.authentication.providers.password.static)Non-standard

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#authentication/username_password/permit_empty_passwords)authentication/username_password/permit_empty_passwords
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#authentication/public_key)authentication/public_key
PublicKey holds the configuration of the public-key-based authentication flow. nil value disables the authentication flow.

PublicKeyFlow holds the public key authentication providers

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#authentication/public_key/providers)authentication/public_key/providers
A set of authentication providers implementing the UserPublicKeyAuthenticator interface. If none are specified, all requests will always be unauthenticated.

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

Fulfilled by modules in namespace: **ssh.authentication.providers.public_key**

*   [os](https://caddyserver.com/docs/modules/ssh.authentication.providers.public_key.os)Non-standard
*   [os](https://caddyserver.com/docs/modules/ssh.authentication.providers.public_key.os)Non-standard
*   [static](https://caddyserver.com/docs/modules/ssh.authentication.providers.public_key.static)Non-standard
*   [static](https://caddyserver.com/docs/modules/ssh.authentication.providers.public_key.static)Non-standard

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#authentication/interactive)authentication/interactive
Interactive holds the configuration of the interactive-based authentication flow. nil value disables the authentication flow.

InteractiveFlow holds the interactive authentication providers

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#authentication/interactive/providers)authentication/interactive/providers
A set of authentication providers implementing the UserInteractiveAuthenticator interface. If none are specified, all requests will always be unauthenticated.

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

Fulfilled by modules in namespace: **ssh.providers.interactive**

[🔗](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#server_version)server_version
ServerVersion is the version identification string to announce in the public handshake. If empty, a reasonable default is used. Note that RFC 4253 section 4.2 requires that this string start with "SSH-2.0-".
