Title: Module layer4.handlers.tls - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/layer4.handlers.tls

Markdown Content:
layer4.handlers.tls is a connection handler that terminates TLS.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies)connection_policies
ConnectionPolicy specifies the logic for handling a TLS handshake. An empty policy is valid; safe and sensible defaults will be used.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/match)connection_policies/match
How to match this policy with a TLS ClientHello. If this policy is the first to match, it will be used.

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/certificate_selection)connection_policies/certificate_selection
How to choose a certificate if more than one matched the given ServerName (SNI) value.

CustomCertSelectionPolicy represents a policy for selecting the certificate used to complete a handshake when there may be multiple options. All fields specified must match the candidate certificate for it to be chosen. This was needed to solve [https://github.com/caddyserver/caddy/issues/2588](https://github.com/caddyserver/caddy/issues/2588).

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/certificate_selection/serial_number)connection_policies/certificate_selection/serial_number
The certificate must have one of these serial numbers.

bigInt is a big.Int type that interops with JSON encodings as a string.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/certificate_selection/subject_organization)connection_policies/certificate_selection/subject_organization
The certificate must have one of these organization names.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/certificate_selection/public_key_algorithm)connection_policies/certificate_selection/public_key_algorithm
The certificate must use this public key algorithm.

PublicKeyAlgorithm is a JSON-unmarshalable wrapper type.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/certificate_selection/any_tag)connection_policies/certificate_selection/any_tag
The certificate must have at least one of the tags in the list.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/certificate_selection/all_tags)connection_policies/certificate_selection/all_tags
The certificate must have all of the tags in the list.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/cipher_suites)connection_policies/cipher_suites
The list of cipher suites to support. Caddy's defaults are modern and secure.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/curves)connection_policies/curves
The list of elliptic curves to support. Caddy's defaults are modern and secure.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/alpn)connection_policies/alpn
Protocols to use for Application-Layer Protocol Negotiation (ALPN) during the handshake.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/protocol_min)connection_policies/protocol_min
Minimum TLS protocol version to allow. Default: `tls1.2`

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/protocol_max)connection_policies/protocol_max
Maximum TLS protocol version to allow. Default: `tls1.3`

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/drop)connection_policies/drop
Reject TLS connections. EXPERIMENTAL: May change.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/client_authentication)connection_policies/client_authentication
Enables and configures TLS client authentication.

ClientAuthentication configures TLS client auth.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/client_authentication/ca)connection_policies/client_authentication/ca
Certificate authority module which provides the certificate pool of trusted certificates

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/client_authentication/trusted_ca_certs)connection_policies/client_authentication/trusted_ca_certs
Deprecated: Use the `ca` field with the `tls.ca_pool.source.inline` module instead. A list of base64 DER-encoded CA certificates against which to validate client certificates. Client certs which are not signed by any of these CAs will be rejected.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/client_authentication/trusted_ca_certs_pem_files)connection_policies/client_authentication/trusted_ca_certs_pem_files
Deprecated: Use the `ca` field with the `tls.ca_pool.source.file` module instead. TrustedCACertPEMFiles is a list of PEM file names from which to load certificates of trusted CAs. Client certificates which are not signed by any of these CA certificates will be rejected.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/client_authentication/trusted_leaf_certs)connection_policies/client_authentication/trusted_leaf_certs
Deprecated: This field is deprecated and will be removed in a future version. Please use the `validators` field instead with the tls.client_auth.verifier.leaf module instead.

A list of base64 DER-encoded client leaf certs to accept. If this list is not empty, client certs which are not in this list will be rejected.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/client_authentication/verifiers)connection_policies/client_authentication/verifiers
Client certificate verification modules. These can perform custom client authentication checks, such as ensuring the certificate is not revoked.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/client_authentication/mode)connection_policies/client_authentication/mode
The mode for authenticating the client. Allowed values are:

| Mode | Description |
| --- | --- |
| `request` | Ask clients for a certificate, but allow even if there isn't one; do not verify it |
| `require` | Require clients to present a certificate, but do not verify it |
| `verify_if_given` | Ask clients for a certificate; allow even if there isn't one, but verify it if there is |
| `require_and_verify` | Require clients to present a valid certificate that is verified |

The default mode is `require_and_verify` if any TrustedCACerts or TrustedCACertPEMFiles or TrustedLeafCerts are provided; otherwise, the default mode is `require`.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/default_sni)connection_policies/default_sni
DefaultSNI becomes the ServerName in a ClientHello if there is no policy configured for the empty SNI value.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/fallback_sni)connection_policies/fallback_sni
FallbackSNI becomes the ServerName in a ClientHello if the original ServerName doesn't match any certificates in the cache. The use cases for this are very niche; typically if a client is a CDN and passes through the ServerName of the downstream handshake but can accept a certificate with the origin's hostname instead, then you would set this to your origin's hostname. Note that Caddy must be managing a certificate for this name.

This feature is EXPERIMENTAL and subject to change or removal.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/insecure_secrets_log)connection_policies/insecure_secrets_log
Also known as "SSLKEYLOGFILE", TLS secrets will be written to this file in NSS key log format which can then be parsed by Wireshark and other tools. This is INSECURE as it allows other programs or tools to decrypt TLS connections. However, this capability can be useful for debugging and troubleshooting. **ENABLING THIS LOG COMPROMISES SECURITY!**

This feature is EXPERIMENTAL and subject to change or removal.

[🔗](https://caddyserver.com/docs/modules/layer4.handlers.tls#connection_policies/handshake_context)connection_policies/handshake_context
A module that can manipulate the context passed into CertMagic's certificate management functions during TLS handshakes. EXPERIMENTAL - subject to change or removal.

Fulfilled by modules in namespace: **tls.context**
