Title: Modules - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/

Markdown Content:
This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |
| Standard | [admin.api.load](https://caddyserver.com/docs/modules/admin.api.load) | is a module that provides the /load endpoint for the Caddy admin API. |
| Standard | [admin.api.metrics](https://caddyserver.com/docs/modules/admin.api.metrics) | is a module that serves a metrics endpoint so that any gathered metrics can be exposed for scraping. |
| Standard | [admin.api.pki](https://caddyserver.com/docs/modules/admin.api.pki) | is a module that serves PKI endpoints to retrieve information about the CAs being managed by Caddy. |
| Non-standard | [admin.api.purge](https://caddyserver.com/docs/modules/admin.api.purge) | is a module that provides the /purge endpoint as the admin api. |
| Standard | [admin.api.reverse\_proxy](https://caddyserver.com/docs/modules/admin.api.reverse_proxy) | is a module that provides the /reverse\_proxy/upstreams endpoint for the Caddy admin API. |
| Non-standard | [admin.api.trojan](https://caddyserver.com/docs/modules/admin.api.trojan) | is ... |
| Standard | [caddy.config\_loaders.http](https://caddyserver.com/docs/modules/caddy.config_loaders.http) | can load Caddy configs over HTTP(S). |
| Non-standard | [caddy.config\_loaders.storage](https://caddyserver.com/docs/modules/caddy.config_loaders.storage) | is a dynamic configuration loader that reads the configuration from a Caddy storage. |
| Standard | [caddy.filesystems](https://caddyserver.com/docs/modules/caddy.filesystems) | loads caddy.fs modules into the global filesystem map |
| Non-standard | [caddy.fs.git](https://caddyserver.com/docs/modules/caddy.fs.git) | The \`git\` filesystem module uses a git repository as the virtual filesystem. |
| Non-standard | [caddy.fs.s3](https://caddyserver.com/docs/modules/caddy.fs.s3) | is a Caddy virtual filesystem module for AWS S3 (and compatible) object store. |
| Standard | [caddy.listeners.http\_redirect](https://caddyserver.com/docs/modules/caddy.listeners.http_redirect) | provides HTTP-\>HTTPS redirects for connections that come on the TLS port as an HTTP request, by detecting using the first few bytes that it's not a TLS handshake, but instead an HTTP request.... |
| Non-standard | [caddy.listeners.ngrok](https://caddyserver.com/docs/modules/caddy.listeners.ngrok) | is a \`listener\_wrapper\` whose address is an ngrok-ingress address |
| Non-standard | [caddy.listeners.ngrok.tunnels.http](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.http) | ngrok HTTP tunnel |
| Non-standard | [caddy.listeners.ngrok.tunnels.labeled](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.labeled) | ngrok Labeled Tunnel |
| Non-standard | [caddy.listeners.ngrok.tunnels.tcp](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tcp) | ngrok TCP tunnel |
| Non-standard | [caddy.listeners.ngrok.tunnels.tls](https://caddyserver.com/docs/modules/caddy.listeners.ngrok.tunnels.tls) | ngrok TLS tunnel Note: only available for ngrok Enterprise user |
| Standard | [caddy.listeners.proxy\_protocol](https://caddyserver.com/docs/modules/caddy.listeners.proxy_protocol#github.com/caddyserver/caddy)(github.com/caddyserver/caddy)
 | provides PROXY protocol support to Caddy by implementing the caddy.ListenerWrapper interface. |
| Non-standard | [caddy.listeners.proxy\_protocol](https://caddyserver.com/docs/modules/caddy.listeners.proxy_protocol#github.com/mastercactapus/caddy2-proxyprotocol)(github.com/mastercactapus/caddy2-proxyprotocol)

 |  |
| Non-standard | [caddy.listeners.throttle](https://caddyserver.com/docs/modules/caddy.listeners.throttle) | The \`throttle\` listener limits the bandwidth of the connection to the given values. |
| Standard | [caddy.listeners.tls](https://caddyserver.com/docs/modules/caddy.listeners.tls) | is a no-op listener wrapper that marks where the TLS listener should be in a chain of listener wrappers. |
| Non-standard | [caddy.listeners.trojan](https://caddyserver.com/docs/modules/caddy.listeners.trojan) | implements an TLS wrapper that it accept connections from clients and check the connection with pre-defined password and aead cipher defined by go-shadowsocks2, and return a normal page if failed.... |
| Standard | [caddy.logging.encoders.append](https://caddyserver.com/docs/modules/caddy.logging.encoders.append) | can be used to add fields to all log entries that pass through it. |
| Standard | [caddy.logging.encoders.console](https://caddyserver.com/docs/modules/caddy.logging.encoders.console) | encodes log entries that are mostly human-readable. |
| Non-standard | [caddy.logging.encoders.elastic](https://caddyserver.com/docs/modules/caddy.logging.encoders.elastic) |  |
| Standard | [caddy.logging.encoders.filter](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter) | can filter (manipulate) fields on log entries before they are actually encoded by an underlying encoder. |
| Non-standard | [caddy.logging.encoders.filter.basic\_auth\_user](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.basic_auth_user) | is a Caddy log field filter that replaces the a base64 encoded authorization header with just the user name. |
| Standard | [caddy.logging.encoders.filter.cookie](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.cookie) | is a Caddy log field filter that filters cookies. |
| Standard | [caddy.logging.encoders.filter.delete](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.delete) | is a Caddy log field filter that deletes the field. |
| Standard | [caddy.logging.encoders.filter.hash](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.hash) | is a Caddy log field filter that replaces the field with the initial 4 bytes of the SHA-256 hash of the content. |
| Standard | [caddy.logging.encoders.filter.ip\_mask](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.ip_mask) | is a Caddy log field filter that masks IP addresses in a string, or in an array of strings. |
| Standard | [caddy.logging.encoders.filter.query](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.query) | is a Caddy log field filter that filters query parameters from a URL. |
| Standard | [caddy.logging.encoders.filter.regexp](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.regexp) | is a Caddy log field filter that replaces the field matching the provided regexp with the indicated string. |
| Standard | [caddy.logging.encoders.filter.rename](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.rename) | is a Caddy log field filter that renames the field's key with the indicated name. |
| Standard | [caddy.logging.encoders.filter.replace](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.replace) | is a Caddy log field filter that replaces the field with the indicated string. |
| Non-standard | [caddy.logging.encoders.filter.tls\_cipher](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.tls_cipher) | is Caddy log field filter that replaces the numeric TLS cipher\_suite value with the string representation. |
| Non-standard | [caddy.logging.encoders.filter.tls\_version](https://caddyserver.com/docs/modules/caddy.logging.encoders.filter.tls_version) | is a Caddy log field filter that replaces the numeric TLS version with the string version and optionally adds a prefix. |
| Non-standard | [caddy.logging.encoders.formatted](https://caddyserver.com/docs/modules/caddy.logging.encoders.formatted#github.com/caddyserver/format-encoder)(github.com/caddyserver/format-encoder)

 | allows the user to provide custom template for log prints. |
| Non-standard | [caddy.logging.encoders.formatted](https://caddyserver.com/docs/modules/caddy.logging.encoders.formatted#github.com/caddyserver/transform-encoder)(github.com/caddyserver/transform-encoder)

 |  |
| Standard | [caddy.logging.encoders.json](https://caddyserver.com/docs/modules/caddy.logging.encoders.json) | encodes entries as JSON. |
| Standard | [caddy.logging.encoders.logfmt](https://caddyserver.com/docs/modules/caddy.logging.encoders.logfmt) | encodes log entries as logfmt: https://www.brandur.org/logfmt Note that logfmt does not encode nested structures properly, so it is not a good fit for most logs. |
| Standard | [caddy.logging.encoders.single\_field](https://caddyserver.com/docs/modules/caddy.logging.encoders.single_field) | writes a log entry that consists entirely of a single string field in the log entry. |
| Non-standard | [caddy.logging.encoders.transform](https://caddyserver.com/docs/modules/caddy.logging.encoders.transform) | allows the user to provide custom template for log prints. |
| Standard | [caddy.logging.writers.discard](https://caddyserver.com/docs/modules/caddy.logging.writers.discard) | discards all writes. |
| Standard | [caddy.logging.writers.file](https://caddyserver.com/docs/modules/caddy.logging.writers.file) | can write logs to files. |
| Non-standard | [caddy.logging.writers.graphite](https://caddyserver.com/docs/modules/caddy.logging.writers.graphite) | is a Caddy logger used to send server activity to a Graphite database. |
| Non-standard | [caddy.logging.writers.influx\_log](https://caddyserver.com/docs/modules/caddy.logging.writers.influx_log) |  |
| Non-standard | [caddy.logging.writers.influxlog](https://caddyserver.com/docs/modules/caddy.logging.writers.influxlog) | is a influxdb client to write time series data |
| Standard | [caddy.logging.writers.net](https://caddyserver.com/docs/modules/caddy.logging.writers.net) | implements a log writer that outputs to a network socket. |
| Standard | [caddy.logging.writers.stderr](https://caddyserver.com/docs/modules/caddy.logging.writers.stderr) | writes logs to standard error. |
| Standard | [caddy.logging.writers.stdout](https://caddyserver.com/docs/modules/caddy.logging.writers.stdout) | writes logs to standard out. |
| Non-standard | [caddy.storage.consul](https://caddyserver.com/docs/modules/caddy.storage.consul#github.com/pteich/caddy-tlsconsul)(github.com/pteich/caddy-tlsconsul)

 | allows to store certificates and other TLS resources in a shared cluster environment using Consul's key/value-store. |
| Non-standard | [caddy.storage.consul](https://caddyserver.com/docs/modules/caddy.storage.consul#github.com/pteich/caddy-tlsconsul)(github.com/pteich/caddy-tlsconsul)

 | holds all parameters for the Consul connection |
| Non-standard | [caddy.storage.consul](https://caddyserver.com/docs/modules/caddy.storage.consul#github.com/sillygod/cdp-cache)(github.com/sillygod/cdp-cache)

 | implements the certmagic storage's interface This holds the consul client and kv store |
| Non-standard | [caddy.storage.dynamodb](https://caddyserver.com/docs/modules/caddy.storage.dynamodb#github.com/silinternational/certmagic-storage-dynamodb)(github.com/silinternational/certmagic-storage-dynamodb)

 | implements certmagic.Storage to facilitate storage of certificates in DynamoDB for a clustered environment. |
| Non-standard | [caddy.storage.dynamodb](https://caddyserver.com/docs/modules/caddy.storage.dynamodb#github.com/silinternational/certmagic-storage-dynamodb)(github.com/silinternational/certmagic-storage-dynamodb)

 | implements certmagic.Storage to facilitate storage of certificates in DynamoDB for a clustered environment. |
| Non-standard | [caddy.storage.encrypted](https://caddyserver.com/docs/modules/caddy.storage.encrypted) | is the impelementation of certmagic.Storage interface for Caddy with encryption/decryption layer using \[SOPS\](https://github.com/getsops/sops). |
| Non-standard | [caddy.storage.encrypted.key.age](https://caddyserver.com/docs/modules/caddy.storage.encrypted.key.age) | is a key type to be used with encryption provider. |
| Non-standard | [caddy.storage.encrypted.key.gcp\_kms](https://caddyserver.com/docs/modules/caddy.storage.encrypted.key.gcp_kms) | uses GCPKMS (Google Cloud Platform KMS) for the encryption/decryption. |
| Non-standard | [caddy.storage.encrypted.provider.local](https://caddyserver.com/docs/modules/caddy.storage.encrypted.provider.local) | encryption provider avails in-process encryption/decryption capabilities |
| Non-standard | [caddy.storage.env\_redis](https://caddyserver.com/docs/modules/caddy.storage.env_redis) |  |
| Standard | [caddy.storage.file\_system](https://caddyserver.com/docs/modules/caddy.storage.file_system) | is a certmagic.Storage wrapper for certmagic.FileStorage. |
| Non-standard | [caddy.storage.gcs](https://caddyserver.com/docs/modules/caddy.storage.gcs) | implements a caddy storage backend for Google Cloud Storage. |
| Non-standard | [caddy.storage.mysql](https://caddyserver.com/docs/modules/caddy.storage.mysql) |  |
| Non-standard | [caddy.storage.nats](https://caddyserver.com/docs/modules/caddy.storage.nats) |  |
| Non-standard | [caddy.storage.postgres](https://caddyserver.com/docs/modules/caddy.storage.postgres) |  |
| Non-standard | [caddy.storage.redis](https://caddyserver.com/docs/modules/caddy.storage.redis#github.com/gamalan/caddy-tlsredis)(github.com/gamalan/caddy-tlsredis)

 | contain Redis client, and plugin option |
| Non-standard | [caddy.storage.redis](https://caddyserver.com/docs/modules/caddy.storage.redis#github.com/pberkel/caddy-storage-redis)(github.com/pberkel/caddy-storage-redis)

 | implements a Caddy storage backend for Redis It supports Single (Standalone), Cluster, or Sentinal (Failover) Redis server configurations. |
| Non-standard | [caddy.storage.redis](https://caddyserver.com/docs/modules/caddy.storage.redis#github.com/techio-dev/caddy-redis)(github.com/techio-dev/caddy-redis)

 |  |
| Non-standard | [caddy.storage.s3](https://caddyserver.com/docs/modules/caddy.storage.s3#github.com/ss098/certmagic-s3)(github.com/ss098/certmagic-s3)

 |  |
| Non-standard | [caddy.storage.s3](https://caddyserver.com/docs/modules/caddy.storage.s3#github.com/techknowlogick/certmagic-s3)(github.com/techknowlogick/certmagic-s3)

 |  |
| Non-standard | [caddy.storage.vault](https://caddyserver.com/docs/modules/caddy.storage.vault) | A highly available storage module that integrates with HashiCorp Vault. |
| Non-standard | [crowdsec](https://caddyserver.com/docs/modules/crowdsec) | is a Caddy App that functions as a CrowdSec bouncer. |
| Non-standard | [distributed.consul](https://caddyserver.com/docs/modules/distributed.consul) | handles the client to interact with the consul agent |
| Non-standard | [dns.providers.acmedns](https://caddyserver.com/docs/modules/dns.providers.acmedns) | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.acmeproxy](https://caddyserver.com/docs/modules/dns.providers.acmeproxy) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.alidns](https://caddyserver.com/docs/modules/dns.providers.alidns) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.azure](https://caddyserver.com/docs/modules/dns.providers.azure) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.cloudflare](https://caddyserver.com/docs/modules/dns.providers.cloudflare) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.cloudns](https://caddyserver.com/docs/modules/dns.providers.cloudns) | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.ddnss](https://caddyserver.com/docs/modules/dns.providers.ddnss) | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.desec](https://caddyserver.com/docs/modules/dns.providers.desec) | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.digitalocean](https://caddyserver.com/docs/modules/dns.providers.digitalocean) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.dinahosting](https://caddyserver.com/docs/modules/dns.providers.dinahosting) | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.dnsmadeeasy](https://caddyserver.com/docs/modules/dns.providers.dnsmadeeasy) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.dnspod](https://caddyserver.com/docs/modules/dns.providers.dnspod) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.dreamhost](https://caddyserver.com/docs/modules/dns.providers.dreamhost) | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.duckdns](https://caddyserver.com/docs/modules/dns.providers.duckdns) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.dynu](https://caddyserver.com/docs/modules/dns.providers.dynu) | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.gandi](https://caddyserver.com/docs/modules/dns.providers.gandi) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.glesys](https://caddyserver.com/docs/modules/dns.providers.glesys) | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.godaddy](https://caddyserver.com/docs/modules/dns.providers.godaddy) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.google\_domains](https://caddyserver.com/docs/modules/dns.providers.google_domains) | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.googleclouddns](https://caddyserver.com/docs/modules/dns.providers.googleclouddns) | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.he](https://caddyserver.com/docs/modules/dns.providers.he) | lets Caddy read and manipulate DNS records hosted by Hurricane Electric. |
| Non-standard | [dns.providers.hetzner](https://caddyserver.com/docs/modules/dns.providers.hetzner) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.hexonet](https://caddyserver.com/docs/modules/dns.providers.hexonet) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.infomaniak](https://caddyserver.com/docs/modules/dns.providers.infomaniak) | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.inwx](https://caddyserver.com/docs/modules/dns.providers.inwx) | lets Caddy read and manipulate DNS records hosted by INWX. |
| Non-standard | [dns.providers.ionos](https://caddyserver.com/docs/modules/dns.providers.ionos) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.leaseweb](https://caddyserver.com/docs/modules/dns.providers.leaseweb) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.lego\_deprecated](https://caddyserver.com/docs/modules/dns.providers.lego_deprecated) | is a shim module that allows any and all of the DNS providers in go-acme/lego to be used with Caddy. |
| Non-standard | [dns.providers.linode](https://caddyserver.com/docs/modules/dns.providers.linode#github.com/caddy-dns/linode)(github.com/caddy-dns/linode)

 | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.linode](https://caddyserver.com/docs/modules/dns.providers.linode#github.com/tosie/caddy-dns-linode)(github.com/tosie/caddy-dns-linode)

 | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.loopia](https://caddyserver.com/docs/modules/dns.providers.loopia) |  |
| Non-standard | [dns.providers.mailinabox](https://caddyserver.com/docs/modules/dns.providers.mailinabox) | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.metaname](https://caddyserver.com/docs/modules/dns.providers.metaname) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.namecheap](https://caddyserver.com/docs/modules/dns.providers.namecheap) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.namedotcom](https://caddyserver.com/docs/modules/dns.providers.namedotcom) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.namesilo](https://caddyserver.com/docs/modules/dns.providers.namesilo) | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.netcup](https://caddyserver.com/docs/modules/dns.providers.netcup) | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.netlify](https://caddyserver.com/docs/modules/dns.providers.netlify) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.njalla](https://caddyserver.com/docs/modules/dns.providers.njalla) | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.openstack-designate](https://caddyserver.com/docs/modules/dns.providers.openstack-designate) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.ovh](https://caddyserver.com/docs/modules/dns.providers.ovh) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.porkbun](https://caddyserver.com/docs/modules/dns.providers.porkbun) | lets Caddy read and manipulate DNS records hosted by this DNS provider. |
| Non-standard | [dns.providers.powerdns](https://caddyserver.com/docs/modules/dns.providers.powerdns) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.rfc2136](https://caddyserver.com/docs/modules/dns.providers.rfc2136) |  |
| Non-standard | [dns.providers.route53](https://caddyserver.com/docs/modules/dns.providers.route53#github.com/caddy-dns/route53)(github.com/caddy-dns/route53)

 | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.route53](https://caddyserver.com/docs/modules/dns.providers.route53#github.com/ryantiger658/route53)(github.com/ryantiger658/route53)

 | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.tencentcloud](https://caddyserver.com/docs/modules/dns.providers.tencentcloud) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.vercel](https://caddyserver.com/docs/modules/dns.providers.vercel) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dns.providers.vultr](https://caddyserver.com/docs/modules/dns.providers.vultr) | wraps the provider implementation as a Caddy module. |
| Non-standard | [dynamic\_dns](https://caddyserver.com/docs/modules/dynamic_dns) | is a Caddy app that keeps your DNS records updated with the public IP address of your instance. |
| Non-standard | [dynamic\_dns.ip\_sources.command](https://caddyserver.com/docs/modules/dynamic_dns.ip_sources.command) | is an IP source that looks up the public IP addresses by executing a script or command from your filesystem. |
| Non-standard | [dynamic\_dns.ip\_sources.simple\_http](https://caddyserver.com/docs/modules/dynamic_dns.ip_sources.simple_http) | is an IP source that looks up the public IP addresses by making HTTP(S) requests to the specified endpoints; it will try each endpoint with IPv4 and IPv6 until at least one returns a valid value.... |
| Non-standard | [dynamic\_dns.ip\_sources.upnp](https://caddyserver.com/docs/modules/dynamic_dns.ip_sources.upnp) | gets the IP address from UPnP device. |
| Standard | [events](https://caddyserver.com/docs/modules/events) | implements a global eventing system within Caddy. |
| Non-standard | [events.handlers.exec](https://caddyserver.com/docs/modules/events.handlers.exec) | implements an event handler that runs a command/program. |
| Non-standard | [events.handlers.nats](https://caddyserver.com/docs/modules/events.handlers.nats) |  |
| Non-standard | [exec](https://caddyserver.com/docs/modules/exec) | is top level module that runs shell commands. |
| Non-standard | [frankenphp](https://caddyserver.com/docs/modules/frankenphp) |  |
| Non-standard | [geoip2](https://caddyserver.com/docs/modules/geoip2) | is global caddy app with http.handlers.geoip2 it update geoip2 data automatically by the params |
| Standard | [http](https://caddyserver.com/docs/modules/http) | is a robust, production-ready HTTP server. |
| Standard | [http.authentication.hashes.bcrypt](https://caddyserver.com/docs/modules/http.authentication.hashes.bcrypt) | implements the bcrypt hash. |
| Standard | [http.authentication.hashes.scrypt](https://caddyserver.com/docs/modules/http.authentication.hashes.scrypt) | implements the scrypt KDF as a hash. |
| Non-standard | [http.authentication.providers.authorize](https://caddyserver.com/docs/modules/http.authentication.providers.authorize) | authorizes access to endpoints based on the presense and content of JWT token. |
| Non-standard | [http.authentication.providers.authorizer](https://caddyserver.com/docs/modules/http.authentication.providers.authorizer) | authorizes access to endpoints based on the presense and content of JWT token. |
| Non-standard | [http.authentication.providers.discord](https://caddyserver.com/docs/modules/http.authentication.providers.discord) | allows you to authenticate caddy routes from a Discord User Identity. |
| Non-standard | [http.authentication.providers.forms](https://caddyserver.com/docs/modules/http.authentication.providers.forms) | authorizes access to endpoints based on the credentials provided in a request. |
| Standard | [http.authentication.providers.http\_basic](https://caddyserver.com/docs/modules/http.authentication.providers.http_basic) | facilitates HTTP basic authentication. |
| Non-standard | [http.authentication.providers.jwt](https://caddyserver.com/docs/modules/http.authentication.providers.jwt#github.com/ggicci/caddy-jwt)(github.com/ggicci/caddy-jwt)

 | facilitates JWT (JSON Web Token) authentication. |
| Non-standard | [http.authentication.providers.jwt](https://caddyserver.com/docs/modules/http.authentication.providers.jwt#github.com/greenpau/caddy-auth-jwt)(github.com/greenpau/caddy-auth-jwt)

 | authorizes access to endpoints based on the presense and content of JWT token. |
| Non-standard | [http.authentication.providers.saml](https://caddyserver.com/docs/modules/http.authentication.providers.saml) | authenticates requests the SAML Response to the SP Assertion Consumer Service using the HTTP-POST Binding. |
| Non-standard | [http.encoders.br](https://caddyserver.com/docs/modules/http.encoders.br#github.com/dunglas/caddy-cbrotli)(github.com/dunglas/caddy-cbrotli)

 | can create Brotli encoders. |
| Non-standard | [http.encoders.br](https://caddyserver.com/docs/modules/http.encoders.br#github.com/ueffel/caddy-brotli)(github.com/ueffel/caddy-brotli)

 | can create brotli encoders. |
| Standard | [http.encoders.gzip](https://caddyserver.com/docs/modules/http.encoders.gzip) | can create gzip encoders. |
| Standard | [http.encoders.zstd](https://caddyserver.com/docs/modules/http.encoders.zstd) | can create Zstandard encoders. |
| Standard | [http.handlers.acme\_server](https://caddyserver.com/docs/modules/http.handlers.acme_server) | is an ACME server handler. |
| Non-standard | [http.handlers.adobe\_usage\_tracker](https://caddyserver.com/docs/modules/http.handlers.adobe_usage_tracker) | implements HTTP middleware that parses uploaded log files from Adobe desktop applications in order to collect measurements about past launches. |
| Non-standard | [http.handlers.argsort](https://caddyserver.com/docs/modules/http.handlers.argsort#github.com/teodorescuserban/caddy-argsort)(github.com/teodorescuserban/caddy-argsort)

 | sort the query arguments after optionally lowercasing them. |
| Non-standard | [http.handlers.argsort](https://caddyserver.com/docs/modules/http.handlers.argsort#github.com/teodorescuserban/caddy-argsort)(github.com/teodorescuserban/caddy-argsort)

 | implements an HTTP handler that reorders the query arguments. |
| Non-standard | [http.handlers.authelia](https://caddyserver.com/docs/modules/http.handlers.authelia) | implements a plugin for securing routes with authentication |
| Standard | [http.handlers.authentication](https://caddyserver.com/docs/modules/http.handlers.authentication) | is a middleware which provides user authentication. |
| Non-standard | [http.handlers.authenticator](https://caddyserver.com/docs/modules/http.handlers.authenticator) | implements Form-Based, Basic, Local, LDAP, OpenID Connect, OAuth 2.0, SAML Authentication. |
| Non-standard | [http.handlers.authp](https://caddyserver.com/docs/modules/http.handlers.authp) | implements Form-Based, Basic, Local, LDAP, OpenID Connect, OAuth 2.0, SAML Authentication. |
| Non-standard | [http.handlers.authz](https://caddyserver.com/docs/modules/http.handlers.authz) |  |
| Non-standard | [http.handlers.basicauthtotp](https://caddyserver.com/docs/modules/http.handlers.basicauthtotp) | is a Caddy module that enhances Caddy's \`basic\_auth\` directive by adding Time-based One-Time Password (TOTP) two-factor authentication (2FA). |
| Non-standard | [http.handlers.cache](https://caddyserver.com/docs/modules/http.handlers.cache#github.com/caddyserver/cache-handler)(github.com/caddyserver/cache-handler)

 | allows the user to set up an HTTP cache system, RFC-7234 compliant and supports the tag based cache purge, distributed and not-distributed storage, key generation tweaking. |
| Non-standard | [http.handlers.cache](https://caddyserver.com/docs/modules/http.handlers.cache#github.com/caddyserver/cache-handler)(github.com/caddyserver/cache-handler)

 | allows the user to set up an HTTP cache system, RFC-7234 compliant and supports the tag based cache purge, distributed and not-distributed storage, key generation tweaking. |
| Non-standard | [http.handlers.cache](https://caddyserver.com/docs/modules/http.handlers.cache#github.com/darkweak/souin)(github.com/darkweak/souin)

 | development repository of the cache handler, allows the user to set up an HTTP cache system, RFC-7234 compliant and supports the tag based cache purge, distributed and not-distributed storage, key generation tweaking.... |
| Non-standard | [http.handlers.cache](https://caddyserver.com/docs/modules/http.handlers.cache#github.com/darkweak/souin)(github.com/darkweak/souin)

 | development repository of the cache handler, allows the user to set up an HTTP cache system, RFC-7234 compliant and supports the tag based cache purge, distributed and not-distributed storage, key generation tweaking.... |
| Non-standard | [http.handlers.cgi](https://caddyserver.com/docs/modules/http.handlers.cgi) |  |
| Non-standard | [http.handlers.cookieflag](https://caddyserver.com/docs/modules/http.handlers.cookieflag) | manipulate various flags (Secure, HttpOnly, ...) in the Set-Cookie reponse headers. |
| Standard | [http.handlers.copy\_response](https://caddyserver.com/docs/modules/http.handlers.copy_response) | is a special HTTP handler which may only be used within reverse\_proxy's handle\_response routes, to copy the proxy response. |
| Standard | [http.handlers.copy\_response\_headers](https://caddyserver.com/docs/modules/http.handlers.copy_response_headers) | is a special HTTP handler which may only be used within reverse\_proxy's handle\_response routes, to copy headers from the proxy response. |
| Non-standard | [http.handlers.crowdsec](https://caddyserver.com/docs/modules/http.handlers.crowdsec) | matches request IPs to CrowdSec decisions to (dis)allow access |
| Non-standard | [http.handlers.ct](https://caddyserver.com/docs/modules/http.handlers.ct) | allows to transpile YAML based configuration into a JSON ignition to be used with Flatcar or Fedora CoreOS. |
| Non-standard | [http.handlers.discord](https://caddyserver.com/docs/modules/http.handlers.discord) | is used in combination with http.authentication.providers.discord to provide an authentication layer based on a Discord identity. |
| Non-standard | [http.handlers.dnsfetcher](https://caddyserver.com/docs/modules/http.handlers.dnsfetcher) |  |
| Standard | [http.handlers.encode](https://caddyserver.com/docs/modules/http.handlers.encode) | is a middleware which can encode responses. |
| Standard | [http.handlers.error](https://caddyserver.com/docs/modules/http.handlers.error) | implements a simple handler that returns an error. |
| Non-standard | [http.handlers.esi](https://caddyserver.com/docs/modules/http.handlers.esi) | to handle, process and serve ESI tags. |
| Non-standard | [http.handlers.exec](https://caddyserver.com/docs/modules/http.handlers.exec) | implements an HTTP handler that runs shell command. |
| Non-standard | [http.handlers.extra\_placeholders](https://caddyserver.com/docs/modules/http.handlers.extra_placeholders) | provides additional placeholders that can be used within Caddy configurations: Placeholder | Description ------------|------------- \`{extra.caddy.version.simple}\` | Simple version information of the Caddy server.... |
| Standard | [http.handlers.file\_server](https://caddyserver.com/docs/modules/http.handlers.file_server) | implements a handler that serves static files. |
| Non-standard | [http.handlers.filter](https://caddyserver.com/docs/modules/http.handlers.filter) | implements an HTTP handler that writes the visitor's IP address to a file or stream. |
| Non-standard | [http.handlers.floaty](https://caddyserver.com/docs/modules/http.handlers.floaty) |  |
| Non-standard | [http.handlers.forward\_auth](https://caddyserver.com/docs/modules/http.handlers.forward_auth) |  |
| Non-standard | [http.handlers.gbox](https://caddyserver.com/docs/modules/http.handlers.gbox) | implements an HTTP handler as a GraphQL reverse proxy server for caching, securing, and monitoring. |
| Non-standard | [http.handlers.geofence](https://caddyserver.com/docs/modules/http.handlers.geofence) | implements IP geofencing functionality. |
| Non-standard | [http.handlers.geoip](https://caddyserver.com/docs/modules/http.handlers.geoip) | Allows looking up the Country Code of an IP address based on the Maxmind database |
| Non-standard | [http.handlers.geoip2](https://caddyserver.com/docs/modules/http.handlers.geoip2) | is an GeoIP2 server handler. |
| Non-standard | [http.handlers.git](https://caddyserver.com/docs/modules/http.handlers.git) | implements git repository manager. |
| Non-standard | [http.handlers.gopkg](https://caddyserver.com/docs/modules/http.handlers.gopkg#github.com/MagnaXSoftware/gopkg)(github.com/MagnaXSoftware/gopkg)

 | implements vanity go package import paths. |
| Non-standard | [http.handlers.gopkg](https://caddyserver.com/docs/modules/http.handlers.gopkg#github.com/MagnaXSoftware/gopkg)(github.com/MagnaXSoftware/gopkg)

 | represents the GoPkg Caddy module. |
| Non-standard | [http.handlers.grpc\_web](https://caddyserver.com/docs/modules/http.handlers.grpc_web) | is an HTTP handler that bridges gRPC-Web <\--\> gRPC requests. |
| Non-standard | [http.handlers.guard](https://caddyserver.com/docs/modules/http.handlers.guard) | is an elegant IPQS plugin for Caddy. |
| Standard | [http.handlers.headers](https://caddyserver.com/docs/modules/http.handlers.headers) | is a middleware which modifies request and response headers. |
| Non-standard | [http.handlers.hmac](https://caddyserver.com/docs/modules/http.handlers.hmac) | implements an HTTP handler that validates request body with hmac. |
| Non-standard | [http.handlers.http\_cache](https://caddyserver.com/docs/modules/http.handlers.http_cache) | is a http handler as a middleware to cache the response |
| Non-standard | [http.handlers.image\_filter](https://caddyserver.com/docs/modules/http.handlers.image_filter#github.com/ueffel/caddy-imagefilter)(github.com/ueffel/caddy-imagefilter)

 | is a caddy module that can apply image filters to images from the filesystem at runtime. |
| Non-standard | [http.handlers.image\_filter](https://caddyserver.com/docs/modules/http.handlers.image_filter#github.com/ueffel/caddy-imagefilter)(github.com/ueffel/caddy-imagefilter)

 | is a caddy module that can apply image filters to images from the filesystem at runtime. |
| Non-standard | [http.handlers.image\_filter.filter.crop](https://caddyserver.com/docs/modules/http.handlers.image_filter.filter.crop) | produces a cropped image as rectangular region of a specific size. |
| Non-standard | [http.handlers.image\_filter.filter.fit](https://caddyserver.com/docs/modules/http.handlers.image_filter.filter.fit) | scales a image to fit to the specified maximum width and height using a linear filter, the image aspect ratio is preserved. |
| Non-standard | [http.handlers.image\_filter.filter.flip](https://caddyserver.com/docs/modules/http.handlers.image_filter.filter.flip) | s flips (mirrors) a image vertically or horizontally. |
| Non-standard | [http.handlers.image\_filter.filter.resize](https://caddyserver.com/docs/modules/http.handlers.image_filter.filter.resize) | can downsize images. |
| Non-standard | [http.handlers.image\_filter.filter.rotate](https://caddyserver.com/docs/modules/http.handlers.image_filter.filter.rotate) | rotates a image 90, 180 or 270 degrees counter-clockwise. |
| Non-standard | [http.handlers.image\_filter.filter.sharpen](https://caddyserver.com/docs/modules/http.handlers.image_filter.filter.sharpen) | produces a sharpened version of the image. |
| Non-standard | [http.handlers.image\_processor](https://caddyserver.com/docs/modules/http.handlers.image_processor) | allow user to do image processing on the fly using libvips With simple queries parameters you can resize, convert, crop your served images |
| Non-standard | [http.handlers.imageproxy](https://caddyserver.com/docs/modules/http.handlers.imageproxy) |  |
| Standard | [http.handlers.intercept](https://caddyserver.com/docs/modules/http.handlers.intercept) | is a middleware that intercepts then replaces or modifies the original response. |
| Standard | [http.handlers.invoke](https://caddyserver.com/docs/modules/http.handlers.invoke) | implements a handler that compiles and executes a named route that was defined on the server. |
| Non-standard | [http.handlers.ipmap](https://caddyserver.com/docs/modules/http.handlers.ipmap) | implements a middleware that maps IP / Subnets as inputs to outputs. |
| Non-standard | [http.handlers.jailbait](https://caddyserver.com/docs/modules/http.handlers.jailbait) |  |
| Non-standard | [http.handlers.json\_parse](https://caddyserver.com/docs/modules/http.handlers.json_parse) | implements an HTTP handler that parses json body as placeholders. |
| Non-standard | [http.handlers.lambda](https://caddyserver.com/docs/modules/http.handlers.lambda) | is a middleware which triggers execution of a function when it is invoked. |
| Non-standard | [http.handlers.listencaddy](https://caddyserver.com/docs/modules/http.handlers.listencaddy) | is a Caddy http.handlers module that listens for requests to specific URIs/paths and reports IPs that hit these URIs to AbuseIPDB. |
| Standard | [http.handlers.log\_append](https://caddyserver.com/docs/modules/http.handlers.log_append) | implements a middleware that takes a key and value, where the key is the name of a log field and the value is a placeholder, or variable key, or constant value to use for that field.... |
| Non-standard | [http.handlers.lura](https://caddyserver.com/docs/modules/http.handlers.lura) | implements a high-performance API Gateway using the Lura framework (https://luraproject.org/). |
| Standard | [http.handlers.map](https://caddyserver.com/docs/modules/http.handlers.map) | implements a middleware that maps inputs to outputs. |
| Non-standard | [http.handlers.mercure](https://caddyserver.com/docs/modules/http.handlers.mercure) | implements a Mercure hub as a Caddy module. |
| Standard | [http.handlers.metrics](https://caddyserver.com/docs/modules/http.handlers.metrics) | is a module that serves a /metrics endpoint so that any gathered metrics can be exposed for scraping. |
| Non-standard | [http.handlers.minifier](https://caddyserver.com/docs/modules/http.handlers.minifier) |  |
| Non-standard | [http.handlers.oauth2\_token\_introspection](https://caddyserver.com/docs/modules/http.handlers.oauth2_token_introspection) | is a Caddy http.handlers Module for authorizing requests via OAuth2 Token Introspection |
| Non-standard | [http.handlers.olaf](https://caddyserver.com/docs/modules/http.handlers.olaf) | implements a handler that embeds Olaf's declarative configuration, which will be expanded later by a config adapter named \`olaf\`. |
| Non-standard | [http.handlers.olo\_signature](https://caddyserver.com/docs/modules/http.handlers.olo_signature) |  |
| Non-standard | [http.handlers.openapi](https://caddyserver.com/docs/modules/http.handlers.openapi) |  |
| Non-standard | [http.handlers.openapi\_validator](https://caddyserver.com/docs/modules/http.handlers.openapi_validator) | is used to validate OpenAPI requests and responses against an OpenAPI specification |
| Non-standard | [http.handlers.php](https://caddyserver.com/docs/modules/http.handlers.php) |  |
| Non-standard | [http.handlers.pirsch](https://caddyserver.com/docs/modules/http.handlers.pirsch) |  |
| Non-standard | [http.handlers.pixbooster](https://caddyserver.com/docs/modules/http.handlers.pixbooster) |  |
| Non-standard | [http.handlers.pmtiles\_proxy](https://caddyserver.com/docs/modules/http.handlers.pmtiles_proxy) | creates a Z/X/Y tileserver backed by a local or remote bucket of PMTiles archives. |
| Non-standard | [http.handlers.prometheus](https://caddyserver.com/docs/modules/http.handlers.prometheus) | \- |
| Non-standard | [http.handlers.public\_suffix](https://caddyserver.com/docs/modules/http.handlers.public_suffix) | adds placeholders that return values based on the Public Suffix List, or PSL (https://publicsuffix.org). |
| Standard | [http.handlers.push](https://caddyserver.com/docs/modules/http.handlers.push) | is a middleware for HTTP/2 server push. |
| Non-standard | [http.handlers.quantity\_limiter](https://caddyserver.com/docs/modules/http.handlers.quantity_limiter) | limits the number of successful requests for a token and allows the counter to be reset. |
| Non-standard | [http.handlers.rate\_limit](https://caddyserver.com/docs/modules/http.handlers.rate_limit#github.com/RussellLuo/caddy-ext)(github.com/RussellLuo/caddy-ext)

 | implements a handler for rate-limiting. |
| Non-standard | [http.handlers.rate\_limit](https://caddyserver.com/docs/modules/http.handlers.rate_limit#github.com/mholt/caddy-ratelimit)(github.com/mholt/caddy-ratelimit)

 | implements rate limiting functionality. |
| Non-standard | [http.handlers.realip](https://caddyserver.com/docs/modules/http.handlers.realip) |  |
| Non-standard | [http.handlers.redir\_dns](https://caddyserver.com/docs/modules/http.handlers.redir_dns) | is a RedirDns for manipulating redirecting based on DNS TXT record. |
| Non-standard | [http.handlers.replace\_response](https://caddyserver.com/docs/modules/http.handlers.replace_response) | manipulates response bodies by performing substring or regex replacements. |
| Standard | [http.handlers.request\_body](https://caddyserver.com/docs/modules/http.handlers.request_body) | is a middleware for manipulating the request body. |
| Non-standard | [http.handlers.request\_body\_var](https://caddyserver.com/docs/modules/http.handlers.request_body_var) | implements an HTTP handler that replaces {http.request.body.\*} with the value of the given field from request body, if any. |
| Non-standard | [http.handlers.request\_debug](https://caddyserver.com/docs/modules/http.handlers.request_debug) | is a middleware which displays the content of the request it handles. |
| Non-standard | [http.handlers.request\_id](https://caddyserver.com/docs/modules/http.handlers.request_id) | implements an HTTP handler that writes a unique request ID to response headers. |
| Standard | [http.handlers.reverse\_proxy](https://caddyserver.com/docs/modules/http.handlers.reverse_proxy) | implements a highly configurable and production-ready reverse proxy. |
| Standard | [http.handlers.rewrite](https://caddyserver.com/docs/modules/http.handlers.rewrite) | is a middleware which can rewrite/mutate HTTP requests. |
| Non-standard | [http.handlers.s3proxy](https://caddyserver.com/docs/modules/http.handlers.s3proxy) | implements a proxy to return, set, delete or browse objects from S3 |
| Non-standard | [http.handlers.sablier](https://caddyserver.com/docs/modules/http.handlers.sablier) |  |
| Non-standard | [http.handlers.save](https://caddyserver.com/docs/modules/http.handlers.save) |  |
| Non-standard | [http.handlers.scion](https://caddyserver.com/docs/modules/http.handlers.scion) |  |
| Standard | [http.handlers.static\_response](https://caddyserver.com/docs/modules/http.handlers.static_response) | implements a simple responder for static responses. |
| Standard | [http.handlers.subroute](https://caddyserver.com/docs/modules/http.handlers.subroute) | implements a handler that compiles and executes routes. |
| Non-standard | [http.handlers.teapot](https://caddyserver.com/docs/modules/http.handlers.teapot) | implements a static "418 I'm a teapot" response to all requests on the route |
| Standard | [http.handlers.templates](https://caddyserver.com/docs/modules/http.handlers.templates) | is a middleware which executes response bodies as Go templates. |
| Non-standard | [http.handlers.templates.functions.hitCounter](https://caddyserver.com/docs/modules/http.handlers.templates.functions.hitCounter) | implements a simple early-Web hit counter. |
| Non-standard | [http.handlers.trace](https://caddyserver.com/docs/modules/http.handlers.trace) | is a middleware which displays the content of the request it handles. |
| Standard | [http.handlers.tracing](https://caddyserver.com/docs/modules/http.handlers.tracing) | implements an HTTP handler that adds support for distributed tracing, using OpenTelemetry. |
| Non-standard | [http.handlers.trojan](https://caddyserver.com/docs/modules/http.handlers.trojan) | implements an HTTP handler that ... |
| Non-standard | [http.handlers.umami](https://caddyserver.com/docs/modules/http.handlers.umami) | A Caddy module which sends visitor information to Umami's Events REST API endpoint. |
| Non-standard | [http.handlers.upload](https://caddyserver.com/docs/modules/http.handlers.upload) | Middleware implements an HTTP handler that writes the uploaded file to a file on the disk. |
| Non-standard | [http.handlers.user\_agent\_parse](https://caddyserver.com/docs/modules/http.handlers.user_agent_parse) |  |
| Standard | [http.handlers.vars](https://caddyserver.com/docs/modules/http.handlers.vars) | is an HTTP middleware which sets variables to have values that can be used in the HTTP request handler chain. |
| Non-standard | [http.handlers.vulcain](https://caddyserver.com/docs/modules/http.handlers.vulcain) | add suport for the Vulcain protocol (fast and idiomatic client-driven REST APIs) as a Caddy module. |
| Non-standard | [http.handlers.waf](https://caddyserver.com/docs/modules/http.handlers.waf#github.com/BraveRoy/caddy-waf)(github.com/BraveRoy/caddy-waf)

 |  |
| Non-standard | [http.handlers.waf](https://caddyserver.com/docs/modules/http.handlers.waf#github.com/corazawaf/coraza-caddy)(github.com/corazawaf/coraza-caddy)

 |  |
| Non-standard | [http.handlers.wafris](https://caddyserver.com/docs/modules/http.handlers.wafris) | Wafris, a free, open source WAF (web application firewall) |
| Non-standard | [http.handlers.wake\_on\_lan](https://caddyserver.com/docs/modules/http.handlers.wake_on_lan) | wakes up a target host on HTTP requests using wake-on-lan. |
| Non-standard | [http.handlers.webdav](https://caddyserver.com/docs/modules/http.handlers.webdav) | implements an HTTP handler for responding to WebDAV clients. |
| Non-standard | [http.handlers.webhook](https://caddyserver.com/docs/modules/http.handlers.webhook) | is the module configuration. |
| Non-standard | [http.handlers.xtemplate](https://caddyserver.com/docs/modules/http.handlers.xtemplate#github.com/infogulch/xtemplate-caddy)(github.com/infogulch/xtemplate-caddy)

 |  |
| Non-standard | [http.handlers.xtemplate](https://caddyserver.com/docs/modules/http.handlers.xtemplate#github.com/infogulch/xtemplate)(github.com/infogulch/xtemplate)

 |  |
| Non-standard | [http.handlers.xtemplates](https://caddyserver.com/docs/modules/http.handlers.xtemplates#github.com/infogulch/caddy-xtemplate)(github.com/infogulch/caddy-xtemplate)

 |  |
| Non-standard | [http.handlers.xtemplates](https://caddyserver.com/docs/modules/http.handlers.xtemplates#github.com/infogulch/caddy-xtemplates)(github.com/infogulch/caddy-xtemplates)

 |  |
| Non-standard | [http.ip\_sources.bunny](https://caddyserver.com/docs/modules/http.ip_sources.bunny) | provides a range of IP address prefixes (CIDRs) retrieved from https://api.bunny.net/system/edgeserverlist and https://api.bunny.net/system/edgeserverlist/ipv6. |
| Non-standard | [http.ip\_sources.cloudflare](https://caddyserver.com/docs/modules/http.ip_sources.cloudflare) | provides a range of IP address prefixes (CIDRs) retrieved from cloudflare. |
| Non-standard | [http.ip\_sources.cloudfront](https://caddyserver.com/docs/modules/http.ip_sources.cloudfront) | The module that auto trusted\_proxies \`AWS CloudFront EDGE servers\` from CloudFront. |
| Non-standard | [http.ip\_sources.combine](https://caddyserver.com/docs/modules/http.ip_sources.combine) | This module combines the prefixes returned by several other IP source plugins. |
| Non-standard | [http.ip\_sources.dns](https://caddyserver.com/docs/modules/http.ip_sources.dns) | provides a range of IP addresses associated with a DNS name. |
| Non-standard | [http.ip\_sources.gcp\_cloudcdn](https://caddyserver.com/docs/modules/http.ip_sources.gcp_cloudcdn) | The module auto trusted\_proxies \`GCP CloudCDN EDGE servers\` from \`\_cloud-eoips.googleusercontent.com\` TXT record Doc: https://cloud.google.com/cdn/docs/set-up-external-backend-internet-neg Range from: \_cloud-eoips.googleusercontent.com... |
| Standard | [http.ip\_sources.static](https://caddyserver.com/docs/modules/http.ip_sources.static) | provides a static range of IP address prefixes (CIDRs). |
| Standard | [http.matchers.client\_ip](https://caddyserver.com/docs/modules/http.matchers.client_ip) | matches requests by the client IP address, i.e. |
| Non-standard | [http.matchers.conneg](https://caddyserver.com/docs/modules/http.matchers.conneg) | matches requests by comparing results of a content negotiation process to a (list of) value(s). |
| Non-standard | [http.matchers.cron](https://caddyserver.com/docs/modules/http.matchers.cron) | matches requests based on multiple sets of cron expressions. |
| Non-standard | [http.matchers.dynamic\_client\_ip](https://caddyserver.com/docs/modules/http.matchers.dynamic_client_ip) | matchers the requests by the client IP address. |
| Non-standard | [http.matchers.dynamic\_remote\_ip](https://caddyserver.com/docs/modules/http.matchers.dynamic_remote_ip) | matchers the requests by the remote IP address. |
| Non-standard | [http.matchers.exec\_noop](https://caddyserver.com/docs/modules/http.matchers.exec_noop) | is a matcher that blocks all requests. |
| Non-standard | [http.matchers.execnopmatch](https://caddyserver.com/docs/modules/http.matchers.execnopmatch) | is a matcher that blocks all request. |
| Standard | [http.matchers.expression](https://caddyserver.com/docs/modules/http.matchers.expression) | matches requests by evaluating a \[CEL\](https://github.com/google/cel-spec) expression. |
| Non-standard | [http.matchers.fail2ban](https://caddyserver.com/docs/modules/http.matchers.fail2ban) | implements an HTTP handler that checks a specified file for banned IPs and matches if they are found |
| Standard | [http.matchers.file](https://caddyserver.com/docs/modules/http.matchers.file) | is an HTTP request matcher that can match requests based upon file existence. |
| Standard | [http.matchers.header](https://caddyserver.com/docs/modules/http.matchers.header) | matches requests by header fields. |
| Standard | [http.matchers.header\_regexp](https://caddyserver.com/docs/modules/http.matchers.header_regexp) | matches requests by a regular expression on header fields. |
| Standard | [http.matchers.host](https://caddyserver.com/docs/modules/http.matchers.host) | matches requests by the Host value (case-insensitive). |
| Non-standard | [http.matchers.maxmind\_geolocation](https://caddyserver.com/docs/modules/http.matchers.maxmind_geolocation) | Allows to filter requests based on source IP country. |
| Standard | [http.matchers.method](https://caddyserver.com/docs/modules/http.matchers.method) | matches requests by the method. |
| Standard | [http.matchers.not](https://caddyserver.com/docs/modules/http.matchers.not) | matches requests by negating the results of its matcher sets. |
| Standard | [http.matchers.path](https://caddyserver.com/docs/modules/http.matchers.path) | case-insensitively matches requests by the URI's path. |
| Standard | [http.matchers.path\_regexp](https://caddyserver.com/docs/modules/http.matchers.path_regexp) | matches requests by a regular expression on the URI's path. |
| Standard | [http.matchers.protocol](https://caddyserver.com/docs/modules/http.matchers.protocol) | matches requests by protocol. |
| Standard | [http.matchers.query](https://caddyserver.com/docs/modules/http.matchers.query) | matches requests by the URI's query string. |
| Non-standard | [http.matchers.remote\_host](https://caddyserver.com/docs/modules/http.matchers.remote_host) | matches based on the remote IP of the connection. |
| Standard | [http.matchers.remote\_ip](https://caddyserver.com/docs/modules/http.matchers.remote_ip) | matches requests by the remote IP address, i.e. |
| Non-standard | [http.matchers.signed](https://caddyserver.com/docs/modules/http.matchers.signed) |  |
| Standard | [http.matchers.vars](https://caddyserver.com/docs/modules/http.matchers.vars) | is an HTTP request matcher which can match requests based on variables in the context or placeholder values. |
| Standard | [http.matchers.vars\_regexp](https://caddyserver.com/docs/modules/http.matchers.vars_regexp) | matches the value of the context variables by a given regular expression. |
| Standard | [http.precompressed.br](https://caddyserver.com/docs/modules/http.precompressed.br) | provides the file extension for files precompressed with brotli encoding. |
| Standard | [http.precompressed.gzip](https://caddyserver.com/docs/modules/http.precompressed.gzip) | provides the file extension for files precompressed with gzip encoding. |
| Standard | [http.precompressed.zstd](https://caddyserver.com/docs/modules/http.precompressed.zstd) | provides the file extension for files precompressed with zstandard encoding. |
| Standard | [http.reverse\_proxy.selection\_policies.client\_ip\_hash](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.client_ip_hash) | is a policy that selects a host based on hashing the client IP of the request, as determined by the HTTP app's trusted proxies settings. |
| Standard | [http.reverse\_proxy.selection\_policies.cookie](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.cookie) | is a policy that selects a host based on a given cookie name. |
| Standard | [http.reverse\_proxy.selection\_policies.first](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.first) | is a policy that selects the first available host. |
| Standard | [http.reverse\_proxy.selection\_policies.header](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.header) | is a policy that selects a host based on a given request header. |
| Standard | [http.reverse\_proxy.selection\_policies.ip\_hash](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.ip_hash) | is a policy that selects a host based on hashing the remote IP of the request. |
| Standard | [http.reverse\_proxy.selection\_policies.least\_conn](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.least_conn) | is a policy that selects the host with the least active requests. |
| Standard | [http.reverse\_proxy.selection\_policies.query](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.query) | is a policy that selects a host based on a given request query parameter. |
| Standard | [http.reverse\_proxy.selection\_policies.random](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.random) | is a policy that selects an available host at random. |
| Standard | [http.reverse\_proxy.selection\_policies.random\_choose](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.random_choose) | is a policy that selects two or more available hosts at random, then chooses the one with the least load. |
| Standard | [http.reverse\_proxy.selection\_policies.round\_robin](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.round_robin) | is a policy that selects a host based on round-robin ordering. |
| Standard | [http.reverse\_proxy.selection\_policies.uri\_hash](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.uri_hash) | is a policy that selects a host by hashing the request URI. |
| Standard | [http.reverse\_proxy.selection\_policies.weighted\_round\_robin](https://caddyserver.com/docs/modules/http.reverse_proxy.selection_policies.weighted_round_robin) | is a policy that selects a host based on weighted round-robin ordering. |
| Non-standard | [http.reverse\_proxy.transport.aws](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.aws) | The AWS transport module injects the AWS V4 Signature for requests proxied to AWS services. |
| Standard | [http.reverse\_proxy.transport.fastcgi](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.fastcgi) | facilitates FastCGI communication. |
| Standard | [http.reverse\_proxy.transport.http](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http) | is essentially a configuration wrapper for http.Transport. |
| Non-standard | [http.reverse\_proxy.transport.http\_ntlm](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.http_ntlm) | proxies HTTP with NTLM authentication. |
| Non-standard | [http.reverse\_proxy.transport.scgi](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.scgi) | facilitates SCGI communication. |
| Non-standard | [http.reverse\_proxy.transport.uwsgi](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.uwsgi#github.com/BadAimWeeb/caddy-uwsgi-transport)(github.com/BadAimWeeb/caddy-uwsgi-transport)

 | The uwsgi transport module allows you to proxy requests to an uWSGI server with uwsgi protocol. |
| Non-standard | [http.reverse\_proxy.transport.uwsgi](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.uwsgi#github.com/wxh06/caddy-uwsgi-transport)(github.com/wxh06/caddy-uwsgi-transport)

 |  |
| Non-standard | [http.reverse\_proxy.transport.ziti](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.ziti) |  |
| Standard | [http.reverse\_proxy.upstreams.a](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.a) | provides upstreams from A/AAAA lookups. |
| Non-standard | [http.reverse\_proxy.upstreams.docker](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.docker) | provides upstreams from the docker host. |
| Standard | [http.reverse\_proxy.upstreams.multi](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.multi) | is a single dynamic upstream source that aggregates the results of multiple dynamic upstream sources. |
| Standard | [http.reverse\_proxy.upstreams.srv](https://caddyserver.com/docs/modules/http.reverse_proxy.upstreams.srv) | provides upstreams from SRV lookups. |
| Non-standard | [layer4](https://caddyserver.com/docs/modules/layer4) | is a Caddy app that operates closest to layer 4 of the OSI model. |
| Non-standard | [layer4.handlers.echo](https://caddyserver.com/docs/modules/layer4.handlers.echo) | is a simple handler that writes what it reads. |
| Non-standard | [layer4.handlers.proxy](https://caddyserver.com/docs/modules/layer4.handlers.proxy) | is a handler that can proxy connections. |
| Non-standard | [layer4.handlers.proxy\_protocol](https://caddyserver.com/docs/modules/layer4.handlers.proxy_protocol) | is a connection handler that accepts the PROXY protocol. |
| Non-standard | [layer4.handlers.tee](https://caddyserver.com/docs/modules/layer4.handlers.tee) | is a layer4 handler that replicates a connection so that a branch of handlers can concurrently handle it. |
| Non-standard | [layer4.handlers.throttle](https://caddyserver.com/docs/modules/layer4.handlers.throttle) | throttles connections using leaky bucket rate limiting. |
| Non-standard | [layer4.handlers.tls](https://caddyserver.com/docs/modules/layer4.handlers.tls) | is a connection handler that terminates TLS. |
| Non-standard | [layer4.matchers.crowdsec](https://caddyserver.com/docs/modules/layer4.matchers.crowdsec) | matches IPs to CrowdSec decisions to (dis)allow access |
| Non-standard | [layer4.matchers.http](https://caddyserver.com/docs/modules/layer4.matchers.http) | is able to match HTTP connections. |
| Non-standard | [layer4.matchers.ip](https://caddyserver.com/docs/modules/layer4.matchers.ip) | matches requests by remote IP (or CIDR range). |
| Non-standard | [layer4.matchers.proxy\_protocol](https://caddyserver.com/docs/modules/layer4.matchers.proxy_protocol) |  |
| Non-standard | [layer4.matchers.ssh](https://caddyserver.com/docs/modules/layer4.matchers.ssh) | is able to match SSH connections. |
| Non-standard | [layer4.matchers.tls](https://caddyserver.com/docs/modules/layer4.matchers.tls) | is able to match TLS connections. |
| Non-standard | [layer4.matchers.xmpp](https://caddyserver.com/docs/modules/layer4.matchers.xmpp) | is able to match XMPP connections. |
| Non-standard | [layer4.proxy.selection\_policies.first](https://caddyserver.com/docs/modules/layer4.proxy.selection_policies.first) | is a policy that selects the first available host. |
| Non-standard | [layer4.proxy.selection\_policies.ip\_hash](https://caddyserver.com/docs/modules/layer4.proxy.selection_policies.ip_hash) | is a policy that selects a host based on hashing the remote IP of the connection. |
| Non-standard | [layer4.proxy.selection\_policies.least\_conn](https://caddyserver.com/docs/modules/layer4.proxy.selection_policies.least_conn) | is a policy that selects the upstream with the least active connections. |
| Non-standard | [layer4.proxy.selection\_policies.random](https://caddyserver.com/docs/modules/layer4.proxy.selection_policies.random) | is a policy that selects an available host at random. |
| Non-standard | [layer4.proxy.selection\_policies.random\_choose](https://caddyserver.com/docs/modules/layer4.proxy.selection_policies.random_choose) | is a policy that selects two or more available hosts at random, then chooses the one with the least load. |
| Non-standard | [layer4.proxy.selection\_policies.round\_robin](https://caddyserver.com/docs/modules/layer4.proxy.selection_policies.round_robin) | is a policy that selects a host based on round-robin ordering. |
| Standard | [pki](https://caddyserver.com/docs/modules/pki) | provides Public Key Infrastructure facilities for Caddy. |
| Non-standard | [profefe](https://caddyserver.com/docs/modules/profefe) | The \`profefe\` app collects profiling data during the life-time of the process and uploads them to the profefe server. |
| Non-standard | [profiling](https://caddyserver.com/docs/modules/profiling) | The \`profiling\` app hosts the collection of push-based profiling agents with common profiling parameters acorss the Caddy instance. |
| Non-standard | [profiling.profiler.profefe](https://caddyserver.com/docs/modules/profiling.profiler.profefe) | is the container of the \`profefe\` profiler if configured as a guest module of the \`profiling\` app |
| Non-standard | [profiling.profiler.pyroscope](https://caddyserver.com/docs/modules/profiling.profiler.pyroscope) | is the container of the \`pyroscope\` profiler if configured as a guest module of the \`profiling\` app |
| Non-standard | [pyroscope](https://caddyserver.com/docs/modules/pyroscope) | The \`pyroscope\` app collects profiling data during the life-time of the process and uploads them to the Pyroscope server. |
| Non-standard | [reconnect](https://caddyserver.com/docs/modules/reconnect) | is a module that provides an additional "reconnect" network type that can be used to reconnect to a \[network address\] if the initial connection fails. |
| Non-standard | [scion](https://caddyserver.com/docs/modules/scion) | implements a caddy module. |
| Non-standard | [security](https://caddyserver.com/docs/modules/security) | implements security manager. |
| Non-standard | [ssh](https://caddyserver.com/docs/modules/ssh#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | is the app providing ssh services |
| Non-standard | [ssh](https://caddyserver.com/docs/modules/ssh#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | is the app providing ssh services |
| Non-standard | [ssh.actor\_matchers.critical\_option](https://caddyserver.com/docs/modules/ssh.actor_matchers.critical_option#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | matches request by the value of critical-option of the certificate/user |
| Non-standard | [ssh.actor\_matchers.critical\_option](https://caddyserver.com/docs/modules/ssh.actor_matchers.critical_option#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | matches request by the value of critical-option of the certificate/user |
| Non-standard | [ssh.actor\_matchers.extension](https://caddyserver.com/docs/modules/ssh.actor_matchers.extension#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | matches request by SSH protocol extension |
| Non-standard | [ssh.actor\_matchers.extension](https://caddyserver.com/docs/modules/ssh.actor_matchers.extension#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | matches request by SSH protocol extension |
| Non-standard | [ssh.actor\_matchers.group](https://caddyserver.com/docs/modules/ssh.actor_matchers.group#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | matches requests by user's group |
| Non-standard | [ssh.actor\_matchers.group](https://caddyserver.com/docs/modules/ssh.actor_matchers.group#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | matches requests by user's group |
| Non-standard | [ssh.actor\_matchers.not](https://caddyserver.com/docs/modules/ssh.actor_matchers.not#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | matches requests by negating the results of its matcher sets. |
| Non-standard | [ssh.actor\_matchers.not](https://caddyserver.com/docs/modules/ssh.actor_matchers.not#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | matches requests by negating the results of its matcher sets. |
| Non-standard | [ssh.actor\_matchers.remote\_ip](https://caddyserver.com/docs/modules/ssh.actor_matchers.remote_ip#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | matches requests by client IP (or CIDR range). |
| Non-standard | [ssh.actor\_matchers.remote\_ip](https://caddyserver.com/docs/modules/ssh.actor_matchers.remote_ip#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | matches requests by client IP (or CIDR range). |
| Non-standard | [ssh.actor\_matchers.user](https://caddyserver.com/docs/modules/ssh.actor_matchers.user#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | matches requests by username |
| Non-standard | [ssh.actor\_matchers.user](https://caddyserver.com/docs/modules/ssh.actor_matchers.user#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | matches requests by username |
| Non-standard | [ssh.actors.shell](https://caddyserver.com/docs/modules/ssh.actors.shell#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | is an \`ssh.actors\` module providing "shell" to a session. |
| Non-standard | [ssh.actors.shell](https://caddyserver.com/docs/modules/ssh.actors.shell#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | is an \`ssh.actors\` module providing "shell" to a session. |
| Non-standard | [ssh.actors.static\_response](https://caddyserver.com/docs/modules/ssh.actors.static_response#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | is an actor that writes a static value to the client |
| Non-standard | [ssh.actors.static\_response](https://caddyserver.com/docs/modules/ssh.actors.static_response#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | is an actor that writes a static value to the client |
| Non-standard | [ssh.ask.localforward.allow](https://caddyserver.com/docs/modules/ssh.ask.localforward.allow#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | is PortForwardingAsker module which always allows the session |
| Non-standard | [ssh.ask.localforward.allow](https://caddyserver.com/docs/modules/ssh.ask.localforward.allow#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | is PortForwardingAsker module which always allows the session |
| Non-standard | [ssh.ask.localforward.deny](https://caddyserver.com/docs/modules/ssh.ask.localforward.deny#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | Allow is PortForwardingAsker module which always rejects the session |
| Non-standard | [ssh.ask.localforward.deny](https://caddyserver.com/docs/modules/ssh.ask.localforward.deny#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | Allow is PortForwardingAsker module which always rejects the session |
| Non-standard | [ssh.ask.pty.allow](https://caddyserver.com/docs/modules/ssh.ask.pty.allow#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | is PtyAsker module which always allows the PTY session |
| Non-standard | [ssh.ask.pty.allow](https://caddyserver.com/docs/modules/ssh.ask.pty.allow#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | is PtyAsker module which always allows the PTY session |
| Non-standard | [ssh.ask.pty.deny](https://caddyserver.com/docs/modules/ssh.ask.pty.deny#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | Allow is PtyAsker module which always rejects the PTY session |
| Non-standard | [ssh.ask.pty.deny](https://caddyserver.com/docs/modules/ssh.ask.pty.deny#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | Allow is PtyAsker module which always rejects the PTY session |
| Non-standard | [ssh.ask.reverseforward.allow](https://caddyserver.com/docs/modules/ssh.ask.reverseforward.allow#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 |  |
| Non-standard | [ssh.ask.reverseforward.allow](https://caddyserver.com/docs/modules/ssh.ask.reverseforward.allow#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 |  |
| Non-standard | [ssh.ask.reverseforward.deny](https://caddyserver.com/docs/modules/ssh.ask.reverseforward.deny#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 |  |
| Non-standard | [ssh.ask.reverseforward.deny](https://caddyserver.com/docs/modules/ssh.ask.reverseforward.deny#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 |  |
| Non-standard | [ssh.authentication.flows.interactive](https://caddyserver.com/docs/modules/ssh.authentication.flows.interactive#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | holds the interactive authentication providers |
| Non-standard | [ssh.authentication.flows.interactive](https://caddyserver.com/docs/modules/ssh.authentication.flows.interactive#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | holds the interactive authentication providers |
| Non-standard | [ssh.authentication.flows.password\_auth](https://caddyserver.com/docs/modules/ssh.authentication.flows.password_auth#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | // PasswordAuthFlow holds the password-based authentication providers |
| Non-standard | [ssh.authentication.flows.password\_auth](https://caddyserver.com/docs/modules/ssh.authentication.flows.password_auth#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | // PasswordAuthFlow holds the password-based authentication providers |
| Non-standard | [ssh.authentication.flows.public\_key](https://caddyserver.com/docs/modules/ssh.authentication.flows.public_key#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | holds the public key authentication providers |
| Non-standard | [ssh.authentication.flows.public\_key](https://caddyserver.com/docs/modules/ssh.authentication.flows.public_key#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | holds the public key authentication providers |
| Non-standard | [ssh.authentication.providers.password.static](https://caddyserver.com/docs/modules/ssh.authentication.providers.password.static#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 |  |
| Non-standard | [ssh.authentication.providers.password.static](https://caddyserver.com/docs/modules/ssh.authentication.providers.password.static#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 |  |
| Non-standard | [ssh.authentication.providers.public\_key.os](https://caddyserver.com/docs/modules/ssh.authentication.providers.public_key.os#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | is an authenticator that authenticates the user based on the \`.ssh/authorized\_keys\` in the user's $HOME |
| Non-standard | [ssh.authentication.providers.public\_key.os](https://caddyserver.com/docs/modules/ssh.authentication.providers.public_key.os#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | is an authenticator that authenticates the user based on the \`.ssh/authorized\_keys\` in the user's $HOME |
| Non-standard | [ssh.authentication.providers.public\_key.static](https://caddyserver.com/docs/modules/ssh.authentication.providers.public_key.static#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 |  |
| Non-standard | [ssh.authentication.providers.public\_key.static](https://caddyserver.com/docs/modules/ssh.authentication.providers.public_key.static#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 |  |
| Non-standard | [ssh.config.loaders.provided](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | Lifted and merged from golang.org/x/crypto/ssh ProvidedConfig holds server specific configuration data. |
| Non-standard | [ssh.config.loaders.provided](https://caddyserver.com/docs/modules/ssh.config.loaders.provided#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | Lifted and merged from golang.org/x/crypto/ssh ProvidedConfig holds server specific configuration data. |
| Non-standard | [ssh.config\_matchers.local\_ip](https://caddyserver.com/docs/modules/ssh.config_matchers.local_ip#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | matches requests by local IP (or CIDR range). |
| Non-standard | [ssh.config\_matchers.local\_ip](https://caddyserver.com/docs/modules/ssh.config_matchers.local_ip#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | matches requests by local IP (or CIDR range). |
| Non-standard | [ssh.config\_matchers.not](https://caddyserver.com/docs/modules/ssh.config_matchers.not#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | matches requests by negating the results of its matcher sets. |
| Non-standard | [ssh.config\_matchers.not](https://caddyserver.com/docs/modules/ssh.config_matchers.not#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | matches requests by negating the results of its matcher sets. |
| Non-standard | [ssh.config\_matchers.remote\_ip](https://caddyserver.com/docs/modules/ssh.config_matchers.remote_ip#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | matches requests by client IP (or CIDR range). |
| Non-standard | [ssh.config\_matchers.remote\_ip](https://caddyserver.com/docs/modules/ssh.config_matchers.remote_ip#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | matches requests by client IP (or CIDR range). |
| Non-standard | [ssh.session.authorizers.chained](https://caddyserver.com/docs/modules/ssh.session.authorizers.chained#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | is a multi-authorizer module that authorizes a session against multiple authorizers |
| Non-standard | [ssh.session.authorizers.chained](https://caddyserver.com/docs/modules/ssh.session.authorizers.chained#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | is a multi-authorizer module that authorizes a session against multiple authorizers |
| Non-standard | [ssh.session.authorizers.max\_session](https://caddyserver.com/docs/modules/ssh.session.authorizers.max_session#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | is an authorizer that permits sessions so long as the number of active sessions is below the specified maximum. |
| Non-standard | [ssh.session.authorizers.max\_session](https://caddyserver.com/docs/modules/ssh.session.authorizers.max_session#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | is an authorizer that permits sessions so long as the number of active sessions is below the specified maximum. |
| Non-standard | [ssh.session.authorizers.public](https://caddyserver.com/docs/modules/ssh.session.authorizers.public#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | authorizes all sessions |
| Non-standard | [ssh.session.authorizers.public](https://caddyserver.com/docs/modules/ssh.session.authorizers.public#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | authorizes all sessions |
| Non-standard | [ssh.session.authorizers.reject](https://caddyserver.com/docs/modules/ssh.session.authorizers.reject#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | rejects all sessions |
| Non-standard | [ssh.session.authorizers.reject](https://caddyserver.com/docs/modules/ssh.session.authorizers.reject#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | rejects all sessions |
| Non-standard | [ssh.signers.fallback](https://caddyserver.com/docs/modules/ssh.signers.fallback#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | signer checks if the RSA, Ed25519, and ECDSA private keys exist in the storage to load. |
| Non-standard | [ssh.signers.fallback](https://caddyserver.com/docs/modules/ssh.signers.fallback#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | will check if the signers exist in the storage, otherwise generate them. |
| Non-standard | [ssh.signers.file](https://caddyserver.com/docs/modules/ssh.signers.file#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | is a session signer that uses pre-existing keys, which may be backed as files |
| Non-standard | [ssh.signers.file](https://caddyserver.com/docs/modules/ssh.signers.file#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | is a session signer that uses pre-existing keys, which may be backed as files or retrievable via HTTP |
| Non-standard | [ssh.subsystem.inmem\_sftp](https://caddyserver.com/docs/modules/ssh.subsystem.inmem_sftp#github.com/kadeessh/kadeessh)(github.com/kadeessh/kadeessh)

 | is an in-memory SFTP server allowing shared space between all users. |
| Non-standard | [ssh.subsystem.inmem\_sftp](https://caddyserver.com/docs/modules/ssh.subsystem.inmem_sftp#github.com/mohammed90/caddy-ssh)(github.com/mohammed90/caddy-ssh)

 | is an in-memory SFTP server allowing shared space between all users. |
| Non-standard | [supervisor](https://caddyserver.com/docs/modules/supervisor) |  |
| Standard | [tls](https://caddyserver.com/docs/modules/tls) | provides TLS facilities including certificate loading and management, client auth, and more. |
| Standard | [tls.ca\_pool.source.file](https://caddyserver.com/docs/modules/tls.ca_pool.source.file) | generates trusted root certificates pool from the designated DER and PEM file |
| Standard | [tls.ca\_pool.source.http](https://caddyserver.com/docs/modules/tls.ca_pool.source.http) | The HTTPCertPool fetches the trusted root certificates from HTTP(S) endpoints. |
| Standard | [tls.ca\_pool.source.inline](https://caddyserver.com/docs/modules/tls.ca_pool.source.inline) | is a certificate authority pool provider coming from a DER-encoded certificates in the config |
| Standard | [tls.ca\_pool.source.lazy](https://caddyserver.com/docs/modules/tls.ca_pool.source.lazy) | defers the generation of the certificate pool from the guest module to demand-time rather than at provisionig time. |
| Standard | [tls.ca\_pool.source.pki\_intermediate](https://caddyserver.com/docs/modules/tls.ca_pool.source.pki_intermediate) | extracts the trusted intermediate certificates from Caddy's native 'pki' app |
| Standard | [tls.ca\_pool.source.pki\_root](https://caddyserver.com/docs/modules/tls.ca_pool.source.pki_root) | extracts the trusted root certificates from Caddy's native 'pki' app |
| Standard | [tls.ca\_pool.source.storage](https://caddyserver.com/docs/modules/tls.ca_pool.source.storage) | extracts the trusted certificates root from Caddy storage |
| Standard | [tls.certificates.automate](https://caddyserver.com/docs/modules/tls.certificates.automate) | will automatically manage certificates for the names in the list, including obtaining and renewing certificates. |
| Standard | [tls.certificates.load\_files](https://caddyserver.com/docs/modules/tls.certificates.load_files) | loads certificates and their associated keys from disk. |
| Standard | [tls.certificates.load\_folders](https://caddyserver.com/docs/modules/tls.certificates.load_folders) | loads certificates and their associated keys from disk by recursively walking the specified directories, looking for PEM files which contain both a certificate and a key. |
| Standard | [tls.certificates.load\_pem](https://caddyserver.com/docs/modules/tls.certificates.load_pem) | loads certificates and their associated keys by decoding their PEM blocks directly. |
| Standard | [tls.certificates.load\_storage](https://caddyserver.com/docs/modules/tls.certificates.load_storage) | loads certificates and their associated keys from the globally configured storage module. |
| Non-standard | [tls.client\_auth.revocation](https://caddyserver.com/docs/modules/tls.client_auth.revocation) | Allows checking of client certificate revocation status based on CRL or OCSP |
| Standard | [tls.client\_auth.verifier.leaf](https://caddyserver.com/docs/modules/tls.client_auth.verifier.leaf) | verifies the client's leaf certificate. |
| Non-standard | [tls.client\_auth.verifier.san\_dns](https://caddyserver.com/docs/modules/tls.client_auth.verifier.san_dns) |  |
| Non-standard | [tls.get\_certificate.file](https://caddyserver.com/docs/modules/tls.get_certificate.file) | can get a certificate via file. |
| Standard | [tls.get\_certificate.http](https://caddyserver.com/docs/modules/tls.get_certificate.http) | can get a certificate via HTTP(S) request. |
| Non-standard | [tls.get\_certificate.pfx](https://caddyserver.com/docs/modules/tls.get_certificate.pfx) | allow user to set path to .pfx file to load TLS certificate |
| Standard | [tls.get\_certificate.tailscale](https://caddyserver.com/docs/modules/tls.get_certificate.tailscale) | is a module that can get certificates from the local Tailscale process. |
| Non-standard | [tls.handshake\_match.alpn](https://caddyserver.com/docs/modules/tls.handshake_match.alpn) |  |
| Standard | [tls.handshake\_match.local\_ip](https://caddyserver.com/docs/modules/tls.handshake_match.local_ip) | matches based on the IP address of the interface receiving the connection. |
| Standard | [tls.handshake\_match.remote\_ip](https://caddyserver.com/docs/modules/tls.handshake_match.remote_ip) | matches based on the remote IP of the connection. |
| Standard | [tls.handshake\_match.sni](https://caddyserver.com/docs/modules/tls.handshake_match.sni) | matches based on SNI. |
| Standard | [tls.issuance.acme](https://caddyserver.com/docs/modules/tls.issuance.acme) | manages certificates using the ACME protocol (RFC 8555). |
| Non-standard | [tls.issuance.certsrv](https://caddyserver.com/docs/modules/tls.issuance.certsrv) | can request certificates from a Microsoft Active Directory Certificate Services instance |
| Standard | [tls.issuance.internal](https://caddyserver.com/docs/modules/tls.issuance.internal) | is a certificate issuer that generates certificates internally using a locally-configured CA which can be customized using the \`pki\` app. |
| Standard | [tls.issuance.zerossl](https://caddyserver.com/docs/modules/tls.issuance.zerossl) | uses the ZeroSSL API to get certificates. |
| Standard | [tls.leaf\_cert\_loader.file](https://caddyserver.com/docs/modules/tls.leaf_cert_loader.file) | loads leaf certificates from disk. |
| Standard | [tls.leaf\_cert\_loader.folder](https://caddyserver.com/docs/modules/tls.leaf_cert_loader.folder) | loads certificates and their associated keys from disk by recursively walking the specified directories, looking for PEM files which contain both a certificate and a key. |
| Standard | [tls.leaf\_cert\_loader.pem](https://caddyserver.com/docs/modules/tls.leaf_cert_loader.pem) | loads leaf certificates by decoding their PEM blocks directly. |
| Standard | [tls.leaf\_cert\_loader.storage](https://caddyserver.com/docs/modules/tls.leaf_cert_loader.storage) | loads leaf certificates from the globally configured storage module. |
| Standard | [tls.permission.http](https://caddyserver.com/docs/modules/tls.permission.http) | determines permission for a TLS certificate by making a request to an HTTP endpoint. |
| Standard | [tls.stek.distributed](https://caddyserver.com/docs/modules/tls.stek.distributed) | implements a distributed STEK provider. |
| Standard | [tls.stek.standard](https://caddyserver.com/docs/modules/tls.stek.standard) |  |
| Non-standard | [trojan.proxies.env\_proxy](https://caddyserver.com/docs/modules/trojan.proxies.env_proxy) | is ... |
| Non-standard | [trojan.proxies.no\_proxy](https://caddyserver.com/docs/modules/trojan.proxies.no_proxy) | is ... |
| Non-standard | [trojan.upstreams.caddy](https://caddyserver.com/docs/modules/trojan.upstreams.caddy) | is ... |
| Non-standard | [trojan.upstreams.memory](https://caddyserver.com/docs/modules/trojan.upstreams.memory) | is ... |
