Title: apps/dynamic_dns - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/dynamic_dns/

Markdown Content:
```
{▾	"ip_sources": [{•••}],	"dns_provider": {•••},	"domains": {
		"": [""]
	},	"dynamic_domains": false,	"versions": {▾		"ipv4": false,		"ipv6": false	},	"check_interval": 0,	"ttl": 0}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/mholt/caddy-dynamicdns](https://github.com/mholt/caddy-dynamicdns)**

**Custom builds:**`xcaddy build --with github.com/mholt/caddy-dynamicdns`

Description[🔗](https://caddyserver.com/docs/json/apps/dynamic_dns/#docs "Direct link")
---------------------------------------------------------------------------------------

App is a Caddy app that keeps your DNS records updated with the public IP address of your instance. It updates A and AAAA records.

[🔗](https://caddyserver.com/docs/json/apps/dynamic_dns/#ip_sources)[ip_sources](https://caddyserver.com/docs/json/apps/dynamic_dns/ip_sources/)
The sources from which to get the server's public IP address. Multiple sources can be specified for redundancy. Default: simple_http

Fulfilled by modules in namespace: **dynamic_dns.ip_sources**

*   [command](https://caddyserver.com/docs/json/apps/dynamic_dns/ip_sources/command/)Non-standard
*   [simple_http](https://caddyserver.com/docs/json/apps/dynamic_dns/ip_sources/simple_http/)Non-standard
*   [upnp](https://caddyserver.com/docs/json/apps/dynamic_dns/ip_sources/upnp/)Non-standard

[🔗](https://caddyserver.com/docs/json/apps/dynamic_dns/#dns_provider)[dns_provider](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/)
The configuration for the DNS provider with which the DNS records will be updated.

Fulfilled by modules in namespace: **dns.providers**

*   [acmedns](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/acmedns/)Non-standard
*   [acmeproxy](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/acmeproxy/)Non-standard
*   [alidns](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/alidns/)Non-standard
*   [azure](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/azure/)Non-standard
*   [bunny](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/bunny/)Non-standard
*   [civo](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/civo/)Non-standard
*   [cloudflare](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/cloudflare/)Non-standard
*   [cloudns](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/cloudns/)Non-standard
*   [cloudns](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/cloudns/)Non-standard
*   [ddnss](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/ddnss/)Non-standard
*   [desec](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/desec/)Non-standard
*   [digitalocean](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/digitalocean/)Non-standard
*   [dinahosting](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/dinahosting/)Non-standard
*   [directadmin](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/directadmin/)Non-standard
*   [dnsexit](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/dnsexit/)Non-standard
*   [dnsimple](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/dnsimple/)Non-standard
*   [dnsmadeeasy](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/dnsmadeeasy/)Non-standard
*   [dnspod](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/dnspod/)Non-standard
*   [domainnameshop](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/domainnameshop/)Non-standard
*   [dreamhost](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/dreamhost/)Non-standard
*   [duckdns](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/duckdns/)Non-standard
*   [dynu](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/dynu/)Non-standard
*   [easydns](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/easydns/)Non-standard
*   [edgeone](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/edgeone/)Non-standard
*   [gandi](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/gandi/)Non-standard
*   [glesys](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/glesys/)Non-standard
*   [godaddy](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/godaddy/)Non-standard
*   [godaddy](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/godaddy/)Non-standard
*   [google_domains](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/google_domains/)Non-standard
*   [googleclouddns](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/googleclouddns/)Non-standard
*   [he](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/he/)Non-standard
*   [hetzner](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/hetzner/)Non-standard
*   [hexonet](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/hexonet/)Non-standard
*   [hosttech](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/hosttech/)Non-standard
*   [huaweicloud](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/huaweicloud/)Non-standard
*   [immosquare](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/immosquare/)Non-standard
*   [infomaniak](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/infomaniak/)Non-standard
*   [inwx](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/inwx/)Non-standard
*   [ionos](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/ionos/)Non-standard
*   [katapult](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/katapult/)Non-standard
*   [leaseweb](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/leaseweb/)Non-standard
*   [lego_deprecated](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/lego_deprecated/)Non-standard
*   [linode](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/linode/)Non-standard
*   [linode](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/linode/)Non-standard
*   [loopia](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/loopia/)Non-standard
*   [mailinabox](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/mailinabox/)Non-standard
*   [metaname](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/metaname/)Non-standard
*   [namecheap](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/namecheap/)Non-standard
*   [namedotcom](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/namedotcom/)Non-standard
*   [namesilo](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/namesilo/)Non-standard
*   [nanelo](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/nanelo/)Non-standard
*   [neoserv](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/neoserv/)Non-standard
*   [netcup](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/netcup/)Non-standard
*   [netlify](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/netlify/)Non-standard
*   [njalla](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/njalla/)Non-standard
*   [openstack-designate](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/openstack-designate/)Non-standard
*   [ovh](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/ovh/)Non-standard
*   [porkbun](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/porkbun/)Non-standard
*   [powerdns](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/powerdns/)Non-standard
*   [rfc2136](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/rfc2136/)Non-standard
*   [route53](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/route53/)Non-standard
*   [route53](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/route53/)Non-standard
*   [scaleway](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/scaleway/)Non-standard
*   [selectel](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/selectel/)Non-standard
*   [spaceship](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/spaceship/)Non-standard
*   [tencentcloud](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/tencentcloud/)Non-standard
*   [transip](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/transip/)Non-standard
*   [vercel](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/vercel/)Non-standard
*   [vultr](https://caddyserver.com/docs/json/apps/dynamic_dns/dns_provider/vultr/)Non-standard

[🔗](https://caddyserver.com/docs/json/apps/dynamic_dns/#domains)[domains](https://caddyserver.com/docs/json/apps/dynamic_dns/domains/)
The record names, keyed by DNS zone, for which to update the A/AAAA records. Record names are relative to the zone. The zone is usually your registered domain name. To refer to the zone itself, use the record name of "@".

For example, assuming your zone is example.com, and you want to update A/AAAA records for "example.com" and "[www.example.com"](http://www.example.com"/) so that they resolve to this Caddy instance, configure like so: `"example.com": ["@", "www"]`

[🔗](https://caddyserver.com/docs/json/apps/dynamic_dns/#dynamic_domains)[dynamic_domains](https://caddyserver.com/docs/json/apps/dynamic_dns/dynamic_domains/)
If enabled, the "http" app's config will be scanned to assemble the list of domains for which to enable dynamic DNS updates.

[🔗](https://caddyserver.com/docs/json/apps/dynamic_dns/#versions)[versions](https://caddyserver.com/docs/json/apps/dynamic_dns/versions/)
The IP versions to enable. By default, both "ipv4" and "ipv6" will be enabled. To disable IPv6, specify {"ipv6": false}.

IPVersions is the IP versions to enable for dynamic DNS. Versions are enabled if true or nil, set to false to disable.

[🔗](https://caddyserver.com/docs/json/apps/dynamic_dns/#versions/ipv4)[versions/ipv4](https://caddyserver.com/docs/json/apps/dynamic_dns/versions/ipv4/)
There are no docs for this property.

[🔗](https://caddyserver.com/docs/json/apps/dynamic_dns/#versions/ipv6)[versions/ipv6](https://caddyserver.com/docs/json/apps/dynamic_dns/versions/ipv6/)
There are no docs for this property.

[🔗](https://caddyserver.com/docs/json/apps/dynamic_dns/#check_interval)[check_interval](https://caddyserver.com/docs/json/apps/dynamic_dns/check_interval/)
How frequently to check the public IP address. Default: 30m

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/json/apps/dynamic_dns/#ttl)[ttl](https://caddyserver.com/docs/json/apps/dynamic_dns/ttl/)
The TTL to set on DNS records.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.
