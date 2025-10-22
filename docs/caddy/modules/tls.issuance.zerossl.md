Title: Module tls.issuance.zerossl - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/tls.issuance.zerossl

Markdown Content:
tls.issuance.zerossl uses the ZeroSSL API to get certificates. Note that this is distinct from ZeroSSL's ACME endpoint. To use ZeroSSL's ACME endpoint, use the ACMEIssuer configured with ZeroSSL's ACME directory endpoint.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.zerossl#api_key)api_key
The API key (or "access key") for using the ZeroSSL API. REQUIRED.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.zerossl#validity_days)validity_days
How many days the certificate should be valid for. Only certain values are accepted; see ZeroSSL docs.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.zerossl#listen_host)listen_host
The host to bind to when opening a listener for verifying domain names (or IPs).

[🔗](https://caddyserver.com/docs/modules/tls.issuance.zerossl#alternate_http_port)alternate_http_port
If HTTP is forwarded from port 80, specify the forwarded port here.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.zerossl#cname_validation)cname_validation
Use CNAME validation instead of HTTP. ZeroSSL's API uses CNAME records for DNS validation, similar to how Let's Encrypt uses TXT records for the DNS challenge.

DNSChallengeConfig configures the ACME DNS challenge.

NOTE: This API is still experimental and is subject to change.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.zerossl#cname_validation/provider)cname_validation/provider
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

[🔗](https://caddyserver.com/docs/modules/tls.issuance.zerossl#cname_validation/ttl)cname_validation/ttl
The TTL of the TXT record used for the DNS challenge.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.zerossl#cname_validation/propagation_delay)cname_validation/propagation_delay
How long to wait before starting propagation checks. Default: 0 (no wait).

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.zerossl#cname_validation/propagation_timeout)cname_validation/propagation_timeout
Maximum time to wait for temporary DNS record to appear. Set to -1 to disable propagation checks. Default: 2 minutes.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.zerossl#cname_validation/resolvers)cname_validation/resolvers
Custom DNS resolvers to prefer over system/built-in defaults. Often necessary to configure when using split-horizon DNS.

[🔗](https://caddyserver.com/docs/modules/tls.issuance.zerossl#cname_validation/override_domain)cname_validation/override_domain
Override the domain to use for the DNS challenge. This is to delegate the challenge to a different domain, e.g. one that updates faster or one with a provider API.
