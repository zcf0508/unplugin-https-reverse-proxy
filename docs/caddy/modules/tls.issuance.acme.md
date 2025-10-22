Title: Module tls.issuance.acme - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/tls.issuance.acme

Markdown Content:
tls.issuance.acme manages certificates using the ACME protocol (RFC 8555).

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#ca)ca
The URL to the CA's ACME directory endpoint. Default: [https://acme-v02.api.letsencrypt.org/directory](https://acme-v02.api.letsencrypt.org/directory)

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#test_ca)test_ca
The URL to the test CA's ACME directory endpoint. This endpoint is only used during retries if there is a failure using the primary CA. Default: [https://acme-staging-v02.api.letsencrypt.org/directory](https://acme-staging-v02.api.letsencrypt.org/directory)

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#email)email
Your email address, so the CA can contact you if necessary. Not required, but strongly recommended to provide one so you can be reached if there is a problem. Your email is not sent to any Caddy mothership or used for any purpose other than ACME transactions.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#account_key)account_key
If you have an existing account with the ACME server, put the private key here in PEM format. The ACME client will look up your account information with this key first before trying to create a new one. You can use placeholders here, for example if you have it in an environment variable.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#external_account)external_account
If using an ACME CA that requires an external account binding, specify the CA-provided credentials here.

EAB (External Account Binding) contains information necessary to bind or map an ACME account to some other account known by the CA.

External account bindings are "used to associate an ACME account with an existing account in a non-ACME system, such as a CA customer database."

"To enable ACME account binding, the CA operating the ACME server needs to provide the ACME client with a MAC key and a key identifier, using some mechanism outside of ACME." §7.3.4

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#external_account/key_id)external_account/key_id
"The key identifier MUST be an ASCII string." §7.3.4

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#external_account/mac_key)external_account/mac_key
"The MAC key SHOULD be provided in base64url-encoded form, to maximize compatibility between non-ACME provisioning systems and ACME clients." §7.3.4

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#acme_timeout)acme_timeout
Time to wait before timing out an ACME operation. Default: 0 (no timeout)

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#challenges)challenges
Configures the various ACME challenge types.

ChallengesConfig configures the ACME challenges.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#challenges/http)challenges/http
HTTP configures the ACME HTTP challenge. This challenge is enabled and used automatically and by default.

HTTPChallengeConfig configures the ACME HTTP challenge.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#challenges/http/disabled)challenges/http/disabled
If true, the HTTP challenge will be disabled.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#challenges/http/alternate_port)challenges/http/alternate_port
An alternate port on which to service this challenge. Note that the HTTP challenge port is hard-coded into the spec and cannot be changed, so you would have to forward packets from the standard HTTP challenge port to this one.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#challenges/tls-alpn)challenges/tls-alpn
TLSALPN configures the ACME TLS-ALPN challenge. This challenge is enabled and used automatically and by default.

TLSALPNChallengeConfig configures the ACME TLS-ALPN challenge.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#challenges/tls-alpn/disabled)challenges/tls-alpn/disabled
If true, the TLS-ALPN challenge will be disabled.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#challenges/tls-alpn/alternate_port)challenges/tls-alpn/alternate_port
An alternate port on which to service this challenge. Note that the TLS-ALPN challenge port is hard-coded into the spec and cannot be changed, so you would have to forward packets from the standard TLS-ALPN challenge port to this one.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#challenges/dns)challenges/dns
Configures the ACME DNS challenge. Because this challenge typically requires credentials for interfacing with a DNS provider, this challenge is not enabled by default. This is the only challenge type which does not require a direct connection to Caddy from an external server.

NOTE: DNS providers are currently being upgraded, and this API is subject to change, but should be stabilized soon.

DNSChallengeConfig configures the ACME DNS challenge.

NOTE: This API is still experimental and is subject to change.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#challenges/dns/provider)challenges/dns/provider
The DNS provider module to use which will manage the DNS records relevant to the ACME challenge. Required.

Fulfilled by modules in namespace: **dns.providers**

*   [acmedns](https://caddyserver.com/docs/modules/dns.providers.acmedns)Non-standard
*   [acmeproxy](https://caddyserver.com/docs/modules/dns.providers.acmeproxy)Non-standard
*   [alidns](https://caddyserver.com/docs/modules/dns.providers.alidns)Non-standard
*   [azure](https://caddyserver.com/docs/modules/dns.providers.azure)Non-standard
*   [bunny](https://caddyserver.com/docs/modules/dns.providers.bunny)Non-standard
*   [civo](https://caddyserver.com/docs/modules/dns.providers.civo)Non-standard
*   [cloudflare](https://caddyserver.com/docs/modules/dns.providers.cloudflare)Non-standard
*   [cloudns](https://caddyserver.com/docs/modules/dns.providers.cloudns)Non-standard
*   [cloudns](https://caddyserver.com/docs/modules/dns.providers.cloudns)Non-standard
*   [ddnss](https://caddyserver.com/docs/modules/dns.providers.ddnss)Non-standard
*   [desec](https://caddyserver.com/docs/modules/dns.providers.desec)Non-standard
*   [digitalocean](https://caddyserver.com/docs/modules/dns.providers.digitalocean)Non-standard
*   [dinahosting](https://caddyserver.com/docs/modules/dns.providers.dinahosting)Non-standard
*   [directadmin](https://caddyserver.com/docs/modules/dns.providers.directadmin)Non-standard
*   [dnsexit](https://caddyserver.com/docs/modules/dns.providers.dnsexit)Non-standard
*   [dnsimple](https://caddyserver.com/docs/modules/dns.providers.dnsimple)Non-standard
*   [dnsmadeeasy](https://caddyserver.com/docs/modules/dns.providers.dnsmadeeasy)Non-standard
*   [dnspod](https://caddyserver.com/docs/modules/dns.providers.dnspod)Non-standard
*   [domainnameshop](https://caddyserver.com/docs/modules/dns.providers.domainnameshop)Non-standard
*   [dreamhost](https://caddyserver.com/docs/modules/dns.providers.dreamhost)Non-standard
*   [duckdns](https://caddyserver.com/docs/modules/dns.providers.duckdns)Non-standard
*   [dynu](https://caddyserver.com/docs/modules/dns.providers.dynu)Non-standard
*   [easydns](https://caddyserver.com/docs/modules/dns.providers.easydns)Non-standard
*   [edgeone](https://caddyserver.com/docs/modules/dns.providers.edgeone)Non-standard
*   [gandi](https://caddyserver.com/docs/modules/dns.providers.gandi)Non-standard
*   [glesys](https://caddyserver.com/docs/modules/dns.providers.glesys)Non-standard
*   [godaddy](https://caddyserver.com/docs/modules/dns.providers.godaddy)Non-standard
*   [godaddy](https://caddyserver.com/docs/modules/dns.providers.godaddy)Non-standard
*   [google_domains](https://caddyserver.com/docs/modules/dns.providers.google_domains)Non-standard
*   [googleclouddns](https://caddyserver.com/docs/modules/dns.providers.googleclouddns)Non-standard
*   [he](https://caddyserver.com/docs/modules/dns.providers.he)Non-standard
*   [hetzner](https://caddyserver.com/docs/modules/dns.providers.hetzner)Non-standard
*   [hexonet](https://caddyserver.com/docs/modules/dns.providers.hexonet)Non-standard
*   [hosttech](https://caddyserver.com/docs/modules/dns.providers.hosttech)Non-standard
*   [huaweicloud](https://caddyserver.com/docs/modules/dns.providers.huaweicloud)Non-standard
*   [immosquare](https://caddyserver.com/docs/modules/dns.providers.immosquare)Non-standard
*   [infomaniak](https://caddyserver.com/docs/modules/dns.providers.infomaniak)Non-standard
*   [inwx](https://caddyserver.com/docs/modules/dns.providers.inwx)Non-standard
*   [ionos](https://caddyserver.com/docs/modules/dns.providers.ionos)Non-standard
*   [katapult](https://caddyserver.com/docs/modules/dns.providers.katapult)Non-standard
*   [leaseweb](https://caddyserver.com/docs/modules/dns.providers.leaseweb)Non-standard
*   [lego_deprecated](https://caddyserver.com/docs/modules/dns.providers.lego_deprecated)Non-standard
*   [linode](https://caddyserver.com/docs/modules/dns.providers.linode)Non-standard
*   [linode](https://caddyserver.com/docs/modules/dns.providers.linode)Non-standard
*   [loopia](https://caddyserver.com/docs/modules/dns.providers.loopia)Non-standard
*   [mailinabox](https://caddyserver.com/docs/modules/dns.providers.mailinabox)Non-standard
*   [metaname](https://caddyserver.com/docs/modules/dns.providers.metaname)Non-standard
*   [namecheap](https://caddyserver.com/docs/modules/dns.providers.namecheap)Non-standard
*   [namedotcom](https://caddyserver.com/docs/modules/dns.providers.namedotcom)Non-standard
*   [namesilo](https://caddyserver.com/docs/modules/dns.providers.namesilo)Non-standard
*   [nanelo](https://caddyserver.com/docs/modules/dns.providers.nanelo)Non-standard
*   [neoserv](https://caddyserver.com/docs/modules/dns.providers.neoserv)Non-standard
*   [netcup](https://caddyserver.com/docs/modules/dns.providers.netcup)Non-standard
*   [netlify](https://caddyserver.com/docs/modules/dns.providers.netlify)Non-standard
*   [njalla](https://caddyserver.com/docs/modules/dns.providers.njalla)Non-standard
*   [openstack-designate](https://caddyserver.com/docs/modules/dns.providers.openstack-designate)Non-standard
*   [ovh](https://caddyserver.com/docs/modules/dns.providers.ovh)Non-standard
*   [porkbun](https://caddyserver.com/docs/modules/dns.providers.porkbun)Non-standard
*   [powerdns](https://caddyserver.com/docs/modules/dns.providers.powerdns)Non-standard
*   [rfc2136](https://caddyserver.com/docs/modules/dns.providers.rfc2136)Non-standard
*   [route53](https://caddyserver.com/docs/modules/dns.providers.route53)Non-standard
*   [route53](https://caddyserver.com/docs/modules/dns.providers.route53)Non-standard
*   [scaleway](https://caddyserver.com/docs/modules/dns.providers.scaleway)Non-standard
*   [selectel](https://caddyserver.com/docs/modules/dns.providers.selectel)Non-standard
*   [spaceship](https://caddyserver.com/docs/modules/dns.providers.spaceship)Non-standard
*   [tencentcloud](https://caddyserver.com/docs/modules/dns.providers.tencentcloud)Non-standard
*   [transip](https://caddyserver.com/docs/modules/dns.providers.transip)Non-standard
*   [vercel](https://caddyserver.com/docs/modules/dns.providers.vercel)Non-standard
*   [vultr](https://caddyserver.com/docs/modules/dns.providers.vultr)Non-standard

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#challenges/dns/ttl)challenges/dns/ttl
The TTL of the TXT record used for the DNS challenge.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#challenges/dns/propagation_delay)challenges/dns/propagation_delay
How long to wait before starting propagation checks. Default: 0 (no wait).

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#challenges/dns/propagation_timeout)challenges/dns/propagation_timeout
Maximum time to wait for temporary DNS record to appear. Set to -1 to disable propagation checks. Default: 2 minutes.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#challenges/dns/resolvers)challenges/dns/resolvers
Custom DNS resolvers to prefer over system/built-in defaults. Often necessary to configure when using split-horizon DNS.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#challenges/dns/override_domain)challenges/dns/override_domain
Override the domain to use for the DNS challenge. This is to delegate the challenge to a different domain, e.g. one that updates faster or one with a provider API.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#challenges/bind_host)challenges/bind_host
Optionally customize the host to which a listener is bound if required for solving a challenge.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#trusted_roots_pem_files)trusted_roots_pem_files
An array of files of CA certificates to accept when connecting to the ACME CA. Generally, you should only use this if the ACME CA endpoint is internal or for development/testing purposes.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#preferred_chains)preferred_chains
Preferences for selecting alternate certificate chains, if offered by the CA. By default, the first offered chain will be selected. If configured, the chains may be sorted and the first matching chain will be selected.

ChainPreference describes the client's preferred certificate chain, useful if the CA offers alternate chains. The first matching chain will be selected.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#preferred_chains/smallest)preferred_chains/smallest
Prefer chains with the fewest number of bytes.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#preferred_chains/root_common_name)preferred_chains/root_common_name
Select first chain having a root with one of these common names.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#preferred_chains/any_common_name)preferred_chains/any_common_name
Select first chain that has any issuer with one of these common names.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.acme#certificate_lifetime)certificate_lifetime
The validity period to ask the CA to issue a certificate for. Default: 0 (CA chooses lifetime). This value is used to compute the "notAfter" field of the ACME order; therefore the system must have a reasonably synchronized clock. NOTE: Not all CAs support this. Check with your CA's ACME documentation to see if this is allowed and what values may be used. EXPERIMENTAL: Subject to change.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.
