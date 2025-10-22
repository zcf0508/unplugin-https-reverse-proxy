Title: Module http.handlers.acme_server - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.acme_server

Markdown Content:
http.handlers.acme_server is an ACME server handler.

[🔗](https://caddyserver.com/docs/modules/http.handlers.acme_server#ca)ca
The ID of the CA to use for signing. This refers to the ID given to the CA in the `pki` app. If omitted, the default ID is "local".

[🔗](https://caddyserver.com/docs/modules/http.handlers.acme_server#lifetime)lifetime
The lifetime for issued certificates

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.handlers.acme_server#host)host
The hostname or IP address by which ACME clients will access the server. This is used to populate the ACME directory endpoint. If not set, the Host header of the request will be used. COMPATIBILITY NOTE / TODO: This property may go away in the future. Do not rely on this property long-term; check release notes.

[🔗](https://caddyserver.com/docs/modules/http.handlers.acme_server#path_prefix)path_prefix
The path prefix under which to serve all ACME endpoints. All other requests will not be served by this handler and will be passed through to the next one. Default: "/acme/". COMPATIBILITY NOTE / TODO: This property may go away in the future, as it is currently only required due to limitations in the underlying library. Do not rely on this property long-term; check release notes.

[🔗](https://caddyserver.com/docs/modules/http.handlers.acme_server#sign_with_root)sign_with_root
If true, the CA's root will be the issuer instead of the intermediate. This is NOT recommended and should only be used when devices/clients do not properly validate certificate chains. EXPERIMENTAL: Might be changed or removed in the future.

[🔗](https://caddyserver.com/docs/modules/http.handlers.acme_server#resolvers)resolvers
The addresses of DNS resolvers to use when looking up the TXT records for solving DNS challenges. It accepts [network addresses](https://caddyserver.com/docs/conventions#network-addresses) with port range of only 1. If the host is an IP address, it will be dialed directly to resolve the upstream server. If the host is not an IP address, the addresses are resolved using the [name resolution convention](https://golang.org/pkg/net/#hdr-Name_Resolution) of the Go standard library. If the array contains more than 1 resolver address, one is chosen at random.

[🔗](https://caddyserver.com/docs/modules/http.handlers.acme_server#challenges)challenges
Specify the set of enabled ACME challenges. An empty or absent value means all challenges are enabled. Accepted values are: "http-01", "dns-01", "tls-alpn-01"

ACMEChallenge is an opaque string that represents supported ACME challenges.

[🔗](https://caddyserver.com/docs/modules/http.handlers.acme_server#policy)policy
The policy to use for issuing certificates

Policy defines the criteria for the ACME server of when to issue a certificate. Refer to the [Certificate Issuance Policy](https://smallstep.com/docs/step-ca/policies/) on Smallstep website for the evaluation criteria.

[🔗](https://caddyserver.com/docs/modules/http.handlers.acme_server#policy/allow)policy/allow
If a rule set is configured to allow a certain type of name, all other types of names are automatically denied.

RuleSet is the specific set of SAN criteria for a certificate to be issued or denied.

[🔗](https://caddyserver.com/docs/modules/http.handlers.acme_server#policy/allow/domains)policy/allow/domains
Domains is a list of DNS domains that are allowed to be issued. It can be in the form of FQDN for specific domain name, or a wildcard domain name format, e.g. *.example.com, to allow sub-domains of a domain.

[🔗](https://caddyserver.com/docs/modules/http.handlers.acme_server#policy/allow/ip_ranges)policy/allow/ip_ranges
IP ranges in the form of CIDR notation or specific IP addresses to be approved or denied for certificates. Non-CIDR IP addresses are matched exactly.

[🔗](https://caddyserver.com/docs/modules/http.handlers.acme_server#policy/deny)policy/deny
If a rule set is configured to deny a certain type of name, all other types of names are still allowed.

RuleSet is the specific set of SAN criteria for a certificate to be issued or denied.

[🔗](https://caddyserver.com/docs/modules/http.handlers.acme_server#policy/deny/domains)policy/deny/domains
Domains is a list of DNS domains that are allowed to be issued. It can be in the form of FQDN for specific domain name, or a wildcard domain name format, e.g. *.example.com, to allow sub-domains of a domain.

[🔗](https://caddyserver.com/docs/modules/http.handlers.acme_server#policy/deny/ip_ranges)policy/deny/ip_ranges
IP ranges in the form of CIDR notation or specific IP addresses to be approved or denied for certificates. Non-CIDR IP addresses are matched exactly.

[🔗](https://caddyserver.com/docs/modules/http.handlers.acme_server#policy/allow_wildcard_names)policy/allow_wildcard_names
If set to true, the ACME server will allow issuing wildcard certificates.
