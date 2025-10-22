Title: Module tls.client_auth.revocation - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/tls.client_auth.revocation

Markdown Content:
tls.client_auth.revocation Allows checking of client certificate revocation status based on CRL or OCSP

[🔗](https://caddyserver.com/docs/modules/tls.client_auth.revocation#mode)mode
Mode defines the "Revocation Check Mode" Supported Values 'prefer_ocsp', 'prefer_crl', 'ocsp_only', 'crl_only', 'disabled' See [https://github.com/Gr33nbl00d/caddy-revocation-validator#mode](https://github.com/Gr33nbl00d/caddy-revocation-validator#mode)

[🔗](https://caddyserver.com/docs/modules/tls.client_auth.revocation#crl_config)crl_config
CRLConfig Contains the certificate revocation list configuration (Optional)

[🔗](https://caddyserver.com/docs/modules/tls.client_auth.revocation#crl_config/work_dir)crl_config/work_dir
WorkDir Configures the working directory for temporary CRL downloads and for disk based persistent CRLs

[🔗](https://caddyserver.com/docs/modules/tls.client_auth.revocation#crl_config/cdp_config)crl_config/cdp_config
CDPConfig Configures how CDP (Certificate Distribution Point Extension) entries in the client certificate are used

[🔗](https://caddyserver.com/docs/modules/tls.client_auth.revocation#crl_config/cdp_config/crl_fetch_mode)crl_config/cdp_config/crl_fetch_mode
CRLFetchMode Configures how and when CRLs are downloaded for the first time Supported Values: 'fetch_actively', 'fetch_background' See: [https://github.com/Gr33nbl00d/caddy-revocation-validator#crl_fetch_mode](https://github.com/Gr33nbl00d/caddy-revocation-validator#crl_fetch_mode)

[🔗](https://caddyserver.com/docs/modules/tls.client_auth.revocation#crl_config/cdp_config/crl_cdp_strict)crl_config/cdp_config/crl_cdp_strict
CRLCDPStrict Configures if CRL checking is mandatory to allow a connection if CDP is defined (Optional) (Default: false) See: [https://github.com/Gr33nbl00d/caddy-revocation-validator#crl_cdp_strict](https://github.com/Gr33nbl00d/caddy-revocation-validator#crl_cdp_strict)

[🔗](https://caddyserver.com/docs/modules/tls.client_auth.revocation#crl_config/storage_type)crl_config/storage_type
StorageType Configures how to store CRLs locally (Optional) Supported Values: 'memory', 'disk' Default: 'disk' See: [https://github.com/Gr33nbl00d/caddy-revocation-validator#storage_type](https://github.com/Gr33nbl00d/caddy-revocation-validator#storage_type)

[🔗](https://caddyserver.com/docs/modules/tls.client_auth.revocation#crl_config/update_interval)crl_config/update_interval
UpdateInterval The interval in which the already known CRLs will be updated. (Optional) (Default: 30 minutes) Valid time units are “ns”, “us” (or “µs”), “ms”, “s”, “m”, “h” See: [https://pkg.go.dev/time#ParseDuration](https://pkg.go.dev/time#ParseDuration)

[🔗](https://caddyserver.com/docs/modules/tls.client_auth.revocation#crl_config/signature_validation_mode)crl_config/signature_validation_mode
Configures the signature validation or the CRL (Optional) (Default: 'verify') Supported Values: 'none', 'verify', 'verify_log' See: [https://github.com/Gr33nbl00d/caddy-revocation-validator#signature_validation_mode](https://github.com/Gr33nbl00d/caddy-revocation-validator#signature_validation_mode)

[🔗](https://caddyserver.com/docs/modules/tls.client_auth.revocation#crl_config/crl_urls)crl_config/crl_urls
CRLUrls (Optional) A predefined list of http(s) urls pointing to CRLs. These lists will be checked for all client certificates. The predefined CRLs will be loaded on startup and updated cyclic. PEM and DER encoding are both supported

[🔗](https://caddyserver.com/docs/modules/tls.client_auth.revocation#crl_config/crl_files)crl_config/crl_files
CRLFiles (Optional) A predefined list of files pointing to CRLs. These lists will be checked for all client certificates. The predefined CRLs will be loaded on startup PEM and DER encoding are both supported

[🔗](https://caddyserver.com/docs/modules/tls.client_auth.revocation#crl_config/trusted_signature_certs_files)crl_config/trusted_signature_certs_files
TrustedSignatureCertsFiles (Optional) A predefined list of files of CA certificates which are trusted for CRL signing. These certificates will be used to verify CRL signature if the CRL signature cert is not part of the client cert chain. If the signature cert is part of the client cert chain there is no need to configure a certificate here. PEM and DER encoding are both supported

[🔗](https://caddyserver.com/docs/modules/tls.client_auth.revocation#ocsp_config)ocsp_config
OCSPConfig Contains the Online Certificate Status Protocol configuration (Optional)

[🔗](https://caddyserver.com/docs/modules/tls.client_auth.revocation#ocsp_config/default_cache_duration)ocsp_config/default_cache_duration
DefaultCacheDuration The default time to cache OCSP responses (Optional) (Default: 0) Valid time units are “ns”, “us” (or “µs”), “ms”, “s”, “m”, “h” If the default time is zero no caching will be performed.

[🔗](https://caddyserver.com/docs/modules/tls.client_auth.revocation#ocsp_config/trusted_responder_certs_files)ocsp_config/trusted_responder_certs_files
TrustedResponderCertsFiles (Optional) A predefined list of files of CA certificates which are trusted to verify the OCSP response signature. These certificates will be used to verify OCSP response signature if the ocsp response signature cert is not part of the client cert chain. If the signature cert is part of the client cert chain there is no need to configure a certificate here. PEM and DER encoding are both supported

[🔗](https://caddyserver.com/docs/modules/tls.client_auth.revocation#ocsp_config/ocsp_aia_strict)ocsp_config/ocsp_aia_strict
OCSPAIAStrict Configures if OCSP checking is mandatory to allow a connection if AIA is defined (Optional) (Default: false) In strict mode it is required that if an OCSP server is defined inside AIA extension at least one OCSP server defined can be contacted to check for revocation. Or a valid response of one of the OCSP server is inside the cache If no OCSP server can be contacted and no cached response is present or the validation of the OCSP response signature failed connection is denied.
