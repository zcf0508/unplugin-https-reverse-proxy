Title: Module dynamic_dns - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/dynamic_dns

Markdown Content:
dynamic_dns is a Caddy app that keeps your DNS records updated with the public IP address of your instance. It updates A and AAAA records.

[🔗](https://caddyserver.com/docs/modules/dynamic_dns#ip_sources)ip_sources
The sources from which to get the server's public IP address. Multiple sources can be specified for redundancy. Default: simple_http

Fulfilled by modules in namespace: **dynamic_dns.ip_sources**

*   [command](https://caddyserver.com/docs/modules/dynamic_dns.ip_sources.command)Non-standard
*   [simple_http](https://caddyserver.com/docs/modules/dynamic_dns.ip_sources.simple_http)Non-standard
*   [upnp](https://caddyserver.com/docs/modules/dynamic_dns.ip_sources.upnp)Non-standard

[🔗](https://caddyserver.com/docs/modules/dynamic_dns#dns_provider)dns_provider
The configuration for the DNS provider with which the DNS records will be updated.

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

[🔗](https://caddyserver.com/docs/modules/dynamic_dns#domains)domains
The record names, keyed by DNS zone, for which to update the A/AAAA records. Record names are relative to the zone. The zone is usually your registered domain name. To refer to the zone itself, use the record name of "@".

For example, assuming your zone is example.com, and you want to update A/AAAA records for "example.com" and "[www.example.com"](http://www.example.com"/) so that they resolve to this Caddy instance, configure like so: `"example.com": ["@", "www"]`

[🔗](https://caddyserver.com/docs/modules/dynamic_dns#dynamic_domains)dynamic_domains
If enabled, the "http" app's config will be scanned to assemble the list of domains for which to enable dynamic DNS updates.

[🔗](https://caddyserver.com/docs/modules/dynamic_dns#versions)versions
The IP versions to enable. By default, both "ipv4" and "ipv6" will be enabled. To disable IPv6, specify {"ipv6": false}.

IPVersions is the IP versions to enable for dynamic DNS. Versions are enabled if true or nil, set to false to disable.

[🔗](https://caddyserver.com/docs/modules/dynamic_dns#versions/ipv4)versions/ipv4
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/dynamic_dns#versions/ipv6)versions/ipv6
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/dynamic_dns#check_interval)check_interval
How frequently to check the public IP address. Default: 30m

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/dynamic_dns#ttl)ttl
The TTL to set on DNS records.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.
