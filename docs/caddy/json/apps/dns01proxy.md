Title: apps/dns01proxy - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/dns01proxy/

Markdown Content:
`{▾	"dns": {▾		"provider": {•••},		"ttl": 0,		"resolvers": [""]	},	"accounts": [{▾		"user_id": "",		"allow_domains": [""],		"deny_domains": [""],		"password": ""	}],	"hostnames": [""],	"listen": [""],	"trusted_proxies": {•••}}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/liujed/caddy-dns01proxy](https://github.com/liujed/caddy-dns01proxy)**

**Custom builds:**`xcaddy build --with github.com/liujed/caddy-dns01proxy`

Description[🔗](https://caddyserver.com/docs/json/apps/dns01proxy/#docs "Direct link")
--------------------------------------------------------------------------------------

A proxy server for ACME DNS-01 challenges. Designed to work with acme.sh's `acmeproxy`, lego's `httpreq`, and Caddy's `acmeproxy` DNS providers.

This is a Caddy application module.

[🔗](https://caddyserver.com/docs/json/apps/dns01proxy/#dns)[dns](https://caddyserver.com/docs/json/apps/dns01proxy/dns/)
There are no docs for this property.

[🔗](https://caddyserver.com/docs/json/apps/dns01proxy/#dns/provider)[dns/provider](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/)
The DNS provider for publishing DNS-01 responses.

Fulfilled by modules in namespace: **dns.providers**

*   [acmedns](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/acmedns/)Non-standard
*   [acmeproxy](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/acmeproxy/)Non-standard
*   [alidns](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/alidns/)Non-standard
*   [azure](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/azure/)Non-standard
*   [bunny](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/bunny/)Non-standard
*   [civo](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/civo/)Non-standard
*   [cloudflare](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/cloudflare/)Non-standard
*   [cloudns](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/cloudns/)Non-standard
*   [cloudns](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/cloudns/)Non-standard
*   [ddnss](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/ddnss/)Non-standard
*   [desec](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/desec/)Non-standard
*   [digitalocean](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/digitalocean/)Non-standard
*   [dinahosting](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/dinahosting/)Non-standard
*   [directadmin](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/directadmin/)Non-standard
*   [dnsexit](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/dnsexit/)Non-standard
*   [dnsimple](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/dnsimple/)Non-standard
*   [dnsmadeeasy](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/dnsmadeeasy/)Non-standard
*   [dnspod](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/dnspod/)Non-standard
*   [domainnameshop](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/domainnameshop/)Non-standard
*   [dreamhost](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/dreamhost/)Non-standard
*   [duckdns](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/duckdns/)Non-standard
*   [dynu](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/dynu/)Non-standard
*   [easydns](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/easydns/)Non-standard
*   [edgeone](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/edgeone/)Non-standard
*   [gandi](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/gandi/)Non-standard
*   [glesys](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/glesys/)Non-standard
*   [godaddy](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/godaddy/)Non-standard
*   [godaddy](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/godaddy/)Non-standard
*   [google_domains](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/google_domains/)Non-standard
*   [googleclouddns](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/googleclouddns/)Non-standard
*   [he](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/he/)Non-standard
*   [hetzner](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/hetzner/)Non-standard
*   [hexonet](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/hexonet/)Non-standard
*   [hosttech](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/hosttech/)Non-standard
*   [huaweicloud](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/huaweicloud/)Non-standard
*   [immosquare](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/immosquare/)Non-standard
*   [infomaniak](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/infomaniak/)Non-standard
*   [inwx](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/inwx/)Non-standard
*   [ionos](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/ionos/)Non-standard
*   [katapult](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/katapult/)Non-standard
*   [leaseweb](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/leaseweb/)Non-standard
*   [lego_deprecated](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/lego_deprecated/)Non-standard
*   [linode](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/linode/)Non-standard
*   [linode](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/linode/)Non-standard
*   [loopia](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/loopia/)Non-standard
*   [mailinabox](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/mailinabox/)Non-standard
*   [metaname](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/metaname/)Non-standard
*   [namecheap](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/namecheap/)Non-standard
*   [namedotcom](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/namedotcom/)Non-standard
*   [namesilo](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/namesilo/)Non-standard
*   [nanelo](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/nanelo/)Non-standard
*   [neoserv](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/neoserv/)Non-standard
*   [netcup](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/netcup/)Non-standard
*   [netlify](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/netlify/)Non-standard
*   [njalla](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/njalla/)Non-standard
*   [openstack-designate](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/openstack-designate/)Non-standard
*   [ovh](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/ovh/)Non-standard
*   [porkbun](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/porkbun/)Non-standard
*   [powerdns](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/powerdns/)Non-standard
*   [rfc2136](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/rfc2136/)Non-standard
*   [route53](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/route53/)Non-standard
*   [route53](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/route53/)Non-standard
*   [scaleway](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/scaleway/)Non-standard
*   [selectel](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/selectel/)Non-standard
*   [spaceship](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/spaceship/)Non-standard
*   [tencentcloud](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/tencentcloud/)Non-standard
*   [transip](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/transip/)Non-standard
*   [vercel](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/vercel/)Non-standard
*   [vultr](https://caddyserver.com/docs/json/apps/dns01proxy/dns/provider/vultr/)Non-standard

[🔗](https://caddyserver.com/docs/json/apps/dns01proxy/#dns/ttl)[dns/ttl](https://caddyserver.com/docs/json/apps/dns01proxy/dns/ttl/)
The TTL to use in DNS TXT records when answering challenges. Optional. Not usually needed.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/json/apps/dns01proxy/#dns/resolvers)[dns/resolvers](https://caddyserver.com/docs/json/apps/dns01proxy/dns/resolvers/)
Custom DNS resolvers to prefer over system or built-in defaults. Set this to a public resolver if you are using split-horizon DNS.

[🔗](https://caddyserver.com/docs/json/apps/dns01proxy/#accounts)[accounts](https://caddyserver.com/docs/json/apps/dns01proxy/accounts/)
Configures HTTP basic authentication and the domains for which each user can get TLS certificates.

(During provisioning, this is used to fill in [Authentication] and [ClientRegistry].)

[🔗](https://caddyserver.com/docs/json/apps/dns01proxy/#accounts/user_id)[accounts/user_id](https://caddyserver.com/docs/json/apps/dns01proxy/accounts/user_id/)
Identifies the client to which this policy applies.

[🔗](https://caddyserver.com/docs/json/apps/dns01proxy/#accounts/allow_domains)[accounts/allow_domains](https://caddyserver.com/docs/json/apps/dns01proxy/accounts/allow_domains/)
Determines the domains for which the user can get TLS certificates. This largely follows Smallstep's domain name rules: [https://smallstep.com/docs/step-ca/policies/#domain-names](https://smallstep.com/docs/step-ca/policies/#domain-names)

Due to a limitation in ACME and DNS-01, allowing a domain alsow allows wildcard certificates for that domain.

[🔗](https://caddyserver.com/docs/json/apps/dns01proxy/#accounts/deny_domains)[accounts/deny_domains](https://caddyserver.com/docs/json/apps/dns01proxy/accounts/deny_domains/)
There are no docs for this property.

[🔗](https://caddyserver.com/docs/json/apps/dns01proxy/#accounts/password)[accounts/password](https://caddyserver.com/docs/json/apps/dns01proxy/accounts/password/)
The user's password, hashed using `caddy hash-password`. Optional. If omitted, then clients must be authenticated by an `http.handlers.authentication` instance earlier in the handler chain.

[🔗](https://caddyserver.com/docs/json/apps/dns01proxy/#hostnames)[hostnames](https://caddyserver.com/docs/json/apps/dns01proxy/hostnames/)
The server's hostnames. Used for obtaining TLS certificates.

[🔗](https://caddyserver.com/docs/json/apps/dns01proxy/#listen)[listen](https://caddyserver.com/docs/json/apps/dns01proxy/listen/)
The sockets on which to listen. For example, "127.0.0.1:9095" or ":443".

[🔗](https://caddyserver.com/docs/json/apps/dns01proxy/#trusted_proxies)[trusted_proxies](https://caddyserver.com/docs/json/apps/dns01proxy/trusted_proxies/)
Configures the set of trusted proxies, for accurate logging of client IP addresses.
