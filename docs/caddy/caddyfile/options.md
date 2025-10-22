Title: Global options (Caddyfile) - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/options

Markdown Content:
The Caddyfile has a way for you to specify options that apply globally. Some options act as default values; others customize HTTP servers and don't apply to just one particular site; while yet others customize the behavior of the Caddyfile [adapter](https://caddyserver.com/docs/config-adapters).

The very top of your Caddyfile can be a **global options block**. This is a block that has no keys:

```
{
	...
}
```

There can only be one at most, and it must be the first block of the Caddyfile.

Possible options are (click on each option to jump to its documentation):

```
{
	# General Options
	debug
	http_port    <port>
	https_port   <port>
	default_bind <hosts...>
	order <dir1> first|last|[before|after <dir2>]
	storage <module_name> {
		<options...>
	}
	storage_clean_interval <duration>
	admin   off|<addr> {
		origins <origins...>
		enforce_origin
	}
	persist_config off
	log [name] {
		output  <writer_module> ...
		format  <encoder_module> ...
		level   <level>
		include <namespaces...>
		exclude <namespaces...>
	}
	grace_period   <duration>
	shutdown_delay <duration>
	metrics {
		per_host
	}

	# TLS Options
	auto_https off|disable_redirects|ignore_loaded_certs|disable_certs
	email <yours>
	default_sni <name>
	fallback_sni <name>
	local_certs
	skip_install_trust
	acme_ca <directory_url>
	acme_ca_root <pem_file>
	acme_eab {
		key_id <key_id>
		mac_key <mac_key>
	}
	acme_dns <provider> ...
	dns <provider> ...
	ech <public_names...> {
		dns <provider> ...
	}
	on_demand_tls {
		ask        <endpoint>
		permission <module>
	}
	key_type ed25519|p256|p384|rsa2048|rsa4096
	cert_issuer <name> ...
	renew_interval <duration>
	cert_lifetime  <duration>
	ocsp_interval  <duration>
	ocsp_stapling off
	preferred_chains [smallest] {
		root_common_name <common_names...>
		any_common_name  <common_names...>
	}

	# Server Options
	servers [<listener_address>] {
		name <name>
		listener_wrappers {
			<listener_wrappers...>
		}
		timeouts {
			read_body   <duration>
			read_header <duration>
			write       <duration>
			idle        <duration>
		}
		keepalive_interval <duration>
		trusted_proxies <module> ...
		client_ip_headers <headers...>
		trace
		max_header_size <size>
		enable_full_duplex
		log_credentials
		protocols [h1|h2|h2c|h3]
		strict_sni_host [on|insecure_off]
	}

	# File Systems
	filesystem <name> <module> {
		<options...>
	}

	# PKI Options
	pki {
		ca [<id>] {
			name                  <name>
			root_cn               <name>
			intermediate_cn       <name>
			intermediate_lifetime <duration>
			root {
				format <format>
				cert   <path>
				key    <path>
			}
			intermediate {
				format <format>
				cert   <path>
				key    <path>
			}
		}
	}

	# Event options
	events {
		on <event> <handler...>
	}
}
```

General Options[🔗](https://caddyserver.com/docs/caddyfile/options#general-options "Direct link")
-------------------------------------------------------------------------------------------------

##### `debug`[🔗](https://caddyserver.com/docs/caddyfile/options#debug "Direct link")

Enables debug mode, which sets the log level to `DEBUG` for the [default logger](https://caddyserver.com/docs/caddyfile/options#log). This reveals more details that can be useful when troubleshooting (and is very verbose in production). We ask that you enable this before asking for help on the [community forums](https://caddy.community/). For example, at the top of your Caddyfile, if you have no other global options:

```
{
	debug
}
```

##### `http_port`[🔗](https://caddyserver.com/docs/caddyfile/options#http-port "Direct link")

The port for the server to use for HTTP.

**For internal use only**; does not change the HTTP port for clients. This is typically used if within your internal network, you needed to port forward `80` to a different port (e.g. `8080`) before it reaches Caddy, for routing purposes.

Default: `80`

##### `https_port`[🔗](https://caddyserver.com/docs/caddyfile/options#https-port "Direct link")

The port for the server to use for HTTPS.

**For internal use only**; does not change the HTTPS port for clients. This is typically used if within your internal network, you needed to port forward `443` to a different port (e.g. `8443`) before it reaches Caddy, for routing purposes.

Default: `443`

##### `default_bind`[🔗](https://caddyserver.com/docs/caddyfile/options#default-bind "Direct link")

The default bind address(es) to be used for all sites, if the [`bind` directive](https://caddyserver.com/docs/caddyfile/directives/bind) is not used in the site. Default: empty, which binds to all interfaces.

```
{
	default_bind 10.0.0.1
}
```

##### `order`[🔗](https://caddyserver.com/docs/caddyfile/options#order "Direct link")

Assigns an order to HTTP handler directive(s). As HTTP handlers execute in a sequential chain, it is necessary for the handlers to be executed in the right order. Standard directives have [a pre-defined order](https://caddyserver.com/docs/caddyfile/directives#directive-order), but if using third-party HTTP handler modules, you'll need to define the order explicitly by either using this option or placing the directive in a [`route` block](https://caddyserver.com/docs/caddyfile/directives/route). Ordering can be described absolutely (`first` or `last`), or relatively (`before` or `after`) to another directive.

For example, to use the [`replace-response` plugin](https://github.com/caddyserver/replace-response), you'd want to make sure its directive is ordered after `encode` so that it can perform replacements before the response is encoded (because responses flow up the handler chain, not down):

```
{
	order replace after encode
}
```

##### `storage`[🔗](https://caddyserver.com/docs/caddyfile/options#storage "Direct link")

Configures Caddy's storage mechanism. The default is [`file_system`](https://caddyserver.com/docs/json/storage/file_system/). There are many other available [storage modules](https://caddyserver.com/docs/json/storage/) provided as plugins.

For example, to change the file system's storage location:

```
{
	storage file_system /path/to/custom/location
}
```

Customizing the storage module is typically needed when syncing Caddy's storage across multiple instances of Caddy to make sure they all use the same certificates and keys. See the [Automatic HTTPS section on storage](https://caddyserver.com/docs/automatic-https#storage) for more details.

##### `storage_clean_interval`[🔗](https://caddyserver.com/docs/caddyfile/options#storage-clean-interval "Direct link")

How often to scan storage units for old or expired assets and remove them. These scans exert lots of reads (and list operations) on the storage module, so choose a longer interval for large deployments. Accepts [duration values](https://caddyserver.com/docs/conventions#durations).

Storage will always be cleaned when the process first starts. Then, a new cleaning will be started this duration after the previous cleaning started if the previous cleaning finished in less than half the time of this interval (otherwise next start will be skipped).

Default: `24h`

```
{
	storage_clean_interval 7d
}
```

##### `admin`[🔗](https://caddyserver.com/docs/caddyfile/options#admin "Direct link")

Customizes the [admin API endpoint](https://caddyserver.com/docs/api). Accepts placeholders. Takes [network addresses](https://caddyserver.com/docs/conventions#network-addresses).

Default: `localhost:2019`, unless the `CADDY_ADMIN` environment variable is set.

If set to `off`, then the admin endpoint will be disabled. When disabled, **config changes will be impossible** without stopping and starting the server, since the [`caddy reload` command](https://caddyserver.com/docs/command-line#caddy-reload) uses the admin API to push the new config to the running server.

Remember to use the `--address` CLI flag with compatible [commands](https://caddyserver.com/docs/command-line) to specify the current admin endpoint, if the address of the running server was changed from the default.

Also supports these sub-options:

*   **origins** configures the list of origins that are allowed to connect to the endpoint.

A default is intelligently chosen:

    *   if the listen address is loopback (e.g. `localhost` or a loopback IP, or a unix socket) then the allowed origins are `localhost`, `::1` and `127.0.0.1`, joined with the listen address port (so `localhost:2019` is a valid origin).
    *   if the listen address is not loopback, then the allowed origin is the same as the listen address.

If the listen address host is not a wildcard interface (wildcards include: empty string, or `0.0.0.0`, or `[::]`), then `Host` header enforcement is performed. Effectively, this means that by default, the `Host` header is validated to be in `origins`, since the interface is `localhost`. But for an address like `:2020` which has a wildcard interface, `Host` header validation is not performed.

*   **enforce_origin** enables enforcement of the `Origin` request header.

This is most useful when the listen address is a wildcard interface (since `Host` is not validated), and the admin API is exposed to the public internet. It enables CORS preflight checks and ensures that the `Origin` header is validated against the `origins` list. Only use this if you're running Caddy on your development machine and need to access the admin API from a web browser.

For example, to expose the admin API on a different port, on all interfaces — ⚠️ this port **should not be exposed publicly**, otherwise anyone can control your server; consider enabling origin enforcement if you need it to be public:

```
{
	admin :2020
}
```

To turn off the admin API — ⚠️ this makes **config reloads impossible** without stopping and starting the server:

```
{
	admin off
}
```

To use a [unix socket](https://caddyserver.com/docs/conventions#network-addresses) for the admin API, allowing access control via file permissions:

```
{
	admin unix//run/caddy-admin.sock
}
```

To only allow requests having a matching `Origin` header:

```
{
	admin :2019 {
		origins localhost
		enforce_origin
	}
}
```

##### `persist_config`[🔗](https://caddyserver.com/docs/caddyfile/options#persist-config "Direct link")

Controls whether the current JSON config should be persisted to the [configuration directory](https://caddyserver.com/docs/conventions#configuration-directory), to avoid losing config changes performed via the admin API. Currently, only the `off` option is supported. By default, the config is persisted.

```
{
	persist_config off
}
```

##### `log`[🔗](https://caddyserver.com/docs/caddyfile/options#log "Direct link")

Configures named loggers.

The name can be passed to indicate a specific logger for which to customize the behavior. If no name is specified, the behavior of the `default` logger is modified. You can read more about the `default` logger and an explanation of [how logging works in Caddy](https://caddyserver.com/docs/logging).

Multiple loggers with different names can be configured by using the `log` multiple times.

This differs from the [`log` directive](https://caddyserver.com/docs/caddyfile/directives/log), which only configures HTTP request logging (also known as access logs). The `log` global option shares its configuration structure with the directive (except for `include` and `exclude`), and complete documentation can be found on the directive's page.

*   **output** configures where to write the logs.

See the [`log` directive](https://caddyserver.com/docs/caddyfile/directives/log#output-modules) for complete documentation.

*   **format** describes how to encode, or format, the logs.

See the [`log` directive](https://caddyserver.com/docs/caddyfile/directives/log#format-modules) for complete documentation.

*   **level** is the minimum entry level to log.

Default: `INFO`.

Possible values: `DEBUG`, `INFO`, `WARN`, `ERROR`, and very rarely, `PANIC`, `FATAL`.

*   **include** specifies the log names to be included in this logger.

By default, this list is empty (i.e. all logs are included).

For example, to include only logs emitted by the admin API, you would include `admin.api`.

*   **exclude** specifies the log names to be excluded from this logger.

By default, this list is empty (i.e. no logs are excluded).

For example, to exclude only HTTP access logs, you would exclude `http.log.access`.

The logger names that `include` and `exclude` accept depend on the modules used, and easiest way to discover them is from prior logs.

Here is an example logging as json all http access logs and admin logs to stdout:

```
{
	log default {
		output stdout
		format json
		include http.log.access admin.api
	}
}
```

##### `grace_period`[🔗](https://caddyserver.com/docs/caddyfile/options#grace-period "Direct link")

Defines the grace period for shutting down HTTP servers (i.e. during config changes or when Caddy is stopping).

During the grace period, no new connections are accepted, idle connections are closed, and active connections are impatiently waited upon to finish their requests. If clients do not finish their requests within the grace period, the server will be forcefully terminated to allow the reload to complete and free up resources. Accepts [duration values](https://caddyserver.com/docs/conventions#durations).

By default, the grace period is eternal, which means connections are never forcefully closed.

```
{
	grace_period 10s
}
```

##### `shutdown_delay`[🔗](https://caddyserver.com/docs/caddyfile/options#shutdown-delay "Direct link")

Defines a [duration](https://caddyserver.com/docs/conventions#durations)_before_ the [grace period](https://caddyserver.com/docs/caddyfile/options#grace_period) during which a server that is going to be stopped continues to operate normally, except the `{http.shutting_down}` placeholder evaluates to `true` and `{http.time_until_shutdown}` gives the time until the grace period begins.

This causes a delay if any server is being shut down as part of a config change, and effectively schedules the change for a later time. It is useful for announcing to health checkers of this server's impending doom and to give time for a load balancer to move it out of the rotation; for example:

```
{
	shutdown_delay 30s
}

example.com {
	handle /health-check {
		@goingDown vars {http.shutting_down} true
		respond @goingDown "Bye-bye in {http.time_until_shutdown}" 503
		respond 200
	}
	handle {
		respond "Hello, world!"
	}
}
```

TLS Options[🔗](https://caddyserver.com/docs/caddyfile/options#tls-options "Direct link")
-----------------------------------------------------------------------------------------

##### `auto_https`[🔗](https://caddyserver.com/docs/caddyfile/options#auto-https "Direct link")

Configures [Automatic HTTPS](https://caddyserver.com/docs/automatic-https), which is the feature that enables Caddy to automate certificate management and HTTP-to-HTTPS redirects for your sites.

There are a few modes to choose from:

*   `off`: Disables both certificate automation and HTTP-to-HTTPS redirects.

*   `disable_redirects`: Disable only HTTP-to-HTTPS redirects.

*   `disable_certs`: Disable only certificate automation.

*   `ignore_loaded_certs`: Automate certificates even for names which appear on manually-loaded certificates. Useful if you specified a certificate using the [`tls` directive](https://caddyserver.com/docs/caddyfile/directives/tls) which contains names (or wildcards) that you instead want to be managed automatically.

```
{
	auto_https disable_redirects
}
```

##### `email`[🔗](https://caddyserver.com/docs/caddyfile/options#email "Direct link")

Your email address. Mainly used when creating an ACME account with your CA, and is highly recommended in case there are problems with your certificates.

```
{
	email admin@example.com
}
```

##### `default_sni`[🔗](https://caddyserver.com/docs/caddyfile/options#default-sni "Direct link")

Sets a default TLS ServerName for when clients do not use SNI in their ClientHello.

```
{
	default_sni example.com
}
```

##### `fallback_sni`[🔗](https://caddyserver.com/docs/caddyfile/options#fallback-sni "Direct link")

⚠️ _Experimental_

If configured, the fallback becomes the TLS ServerName in the ClientHello if the original ServerName doesn't match any certificates in the cache.

The uses for this are very niche; typically if a client is a CDN and passes through the ServerName of the downstream handshake but can accept a certificate with the origin's hostname instead, then you would set this as your origin's hostname. Note that Caddy must be managing a certificate for this name.

```
{
	fallback_sni example.com
}
```

##### `local_certs`[🔗](https://caddyserver.com/docs/caddyfile/options#local-certs "Direct link")

Causes **all** certificates to be issued internally by default, rather than through a (public) ACME CA such as Let's Encrypt. This is useful as a quick toggle in development environments.

```
{
	local_certs
}
```

##### `skip_install_trust`[🔗](https://caddyserver.com/docs/caddyfile/options#skip-install-trust "Direct link")

Skips the attempts to install the local CA's root into the system trust store, as well as into Java and Mozilla Firefox trust stores.

```
{
	skip_install_trust
}
```

##### `acme_ca`[🔗](https://caddyserver.com/docs/caddyfile/options#acme-ca "Direct link")

Specifies the URL to the ACME CA's directory. It is strongly recommended to set this to Let's Encrypt's [staging endpoint ![Image 1](https://caddyserver.com/old/resources/images/external-link.svg)](https://letsencrypt.org/docs/staging-environment/) for testing or development. Default: ZeroSSL and Let's Encrypt's production endpoints.

Note that a globally-configured ACME CA may not apply to all sites; see the [hostname requirements](https://caddyserver.com/docs/automatic-https#hostname-requirements) for using the default ACME issuer(s).

```
{
	acme_ca https://acme-staging-v02.api.letsencrypt.org/directory
}
```

##### `acme_ca_root`[🔗](https://caddyserver.com/docs/caddyfile/options#acme-ca-root "Direct link")

Specifies a PEM file that contains a trusted root certificate for ACME CA endpoints, if not in the system trust store.

```
{
	acme_ca_root /path/to/ca/root.pem
}
```

##### `acme_eab`[🔗](https://caddyserver.com/docs/caddyfile/options#acme-eab "Direct link")

Specifies an External Account Binding to use for all ACME transactions.

For example, with mock ZeroSSL credentials:

```
{
	acme_eab {
		key_id GD-VvWydSVFuss_GhBwYQQ
		mac_key MjXU3MH-Z0WQ7piMAnVsCpD1shgMiWx6ggPWiTmydgUaj7dWWWfQfA
	}
}
```

##### `acme_dns`[🔗](https://caddyserver.com/docs/caddyfile/options#acme-dns "Direct link")

Configures the [ACME DNS challenge](https://caddyserver.com/docs/automatic-https#dns-challenge) provider to use for all ACME transactions.

Requires a custom build of Caddy with a plugin for your DNS provider.

The tokens following the name of the provider set up the provider the same as if specified in the [`tls` directive's `acme` issuer](https://caddyserver.com/docs/caddyfile/directives/tls#acme).

```
{
	acme_dns cloudflare {env.CLOUDFLARE_API_TOKEN}
}
```

##### `dns`[🔗](https://caddyserver.com/docs/caddyfile/options#dns "Direct link")

Configures a default DNS provider to use when none other is specified locally in a relevant context. For example, if the ACME DNS challenge is enabled but does not have a DNS provider configured, this global default will be used. It is also applied for publishing Encrypted ClientHello (ECH) configs.

Your Caddy binary must be compiled with the specified DNS provider module for this to work.

Example, using credentials from an environment variable:

```
{
	dns cloudflare {env.CLOUDFLARE_API_TOKEN}
}
```

(Requires Caddy 2.10 beta 1 or newer.)

##### `ech`[🔗](https://caddyserver.com/docs/caddyfile/options#ech "Direct link")

Enables Encrypted ClientHello (ECH) by using the specified public domain name(s) as the plaintext server name (SNI) in TLS handshakes. Given the right conditions, ECH can help protect the domain names of your sites on the wire during connections. Caddy will generate and publish one ECH config for each public name specified. Publication is how compatible clients (such as properly-configured modern browsers) know to use ECH to access your sites.

In order to work properly, the ECH config(s) must be published in a way that clients expect. Most browsers (with DNS-over-HTTPS or DNS-over-TLS enabled) expect ECH configs to be published to HTTPS-type DNS records. Caddy does this kind of publication automatically, but you have to specify a DNS provider either with the `dns` sub-option, or globally with the [`dns` global option](https://caddyserver.com/docs/caddyfile/options#dns), and your Caddy binary must be built with the specified DNS provider module. (Custom builds are available on our [download page](https://caddyserver.com/download).)

**Privacy notices:**

*   It is generally advisable to **maximize the size of your [_anonymity set_](https://www.ietf.org/archive/id/draft-ietf-tls-esni-23.html#name-introduction)**. As such, we typically recommend that most users configure _only one_ public domain name to protect all your sites.
*   **Your server should be authoritative for the public domain name(s) you specify** (i.e. they should point to your server) because Caddy will obtain a certificate for them. These certificates are vital to help spec-conforming clients connect reliably and safely with ECH in some cases. They are only used to faciliate a proper ECH handshake, not used for application data (your sites -- unless you define a site that is the same as your public domain name).
*   Every circumstance may be different. We recommend consulting experts to **review your threat model** if the stakes are high, as ECH is not a one-size-fits-all solution.

Example using credentials from an environment variable for publication to nameservers parked at Cloudflare:

```
{
	dns cloudflare {env.CLOUDFLARE_API_TOKEN}
	ech ech.example.net
}
```

This should cause compatible clients to load all your sites with `ech.example.net`, rather than the individual site names exposed in plaintext.

Successful publication requires that your site's domains are parked at the configured DNS provider and the records can be modified with the given credentials / provider configuration.

(Requires Caddy 2.10 beta 1 or newer.)

##### `on_demand_tls`[🔗](https://caddyserver.com/docs/caddyfile/options#on-demand-tls "Direct link")

Configures [On-Demand TLS](https://caddyserver.com/docs/automatic-https#on-demand-tls) where it is enabled, but does not enable it (to enable it, use the [`on_demand` subdirective of the `tls` directive](https://caddyserver.com/docs/caddyfile/directives/tls#syntax)). Required for use in production environments, to prevent abuse.

*   **ask** will cause Caddy to make an HTTP request to the given URL, asking whether a domain is allowed to have a certificate issued.

The request has a query string of `?domain=` containing the value of the domain name.

If the endpoint returns a `2xx` status code, Caddy will be authorized to obtain a certificate for that name. Any other status code will result in cancelling issuance of the certificate and erroring the TLS handshake.

*   **permission** allows custom modules to be used to determine whether a certificate should be issued for a particular name. The module must implement the [`caddytls.OnDemandPermission` interface](https://pkg.go.dev/github.com/caddyserver/caddy/v2/modules/caddytls#OnDemandPermission). An `http` permission module is included, which is what the `ask` option uses, and remains as a shortcut for backwards compatibility.

*   ⚠️ **interval** and **burst** rate limiting options were available, but are NOT recommended. Remove them from your config if you still have them.

```
{
	on_demand_tls {
		ask http://localhost:9123/ask
	}
}

https:// {
	tls {
		on_demand
	}
}
```

##### `key_type`[🔗](https://caddyserver.com/docs/caddyfile/options#key-type "Direct link")

Specifies the type of key to generate for TLS certificates; only change this if you have a specific need to customize it.

The possible values are: `ed25519`, `p256`, `p384`, `rsa2048`, `rsa4096`.

```
{
	key_type ed25519
}
```

##### `cert_issuer`[🔗](https://caddyserver.com/docs/caddyfile/options#cert-issuer "Direct link")

Defines the issuer (or source) of TLS certificates.

This allows configuring issuers globally, instead of per-site as you would with the [`tls` directive's `issuer` subdirective](https://caddyserver.com/docs/caddyfile/directives/tls#issuer).

May be repeated if you wish to configure more than one issuer to try. They will be tried in the order they are defined.

```
{
	cert_issuer acme {
		...
	}
	cert_issuer zerossl {
		...
	}
}
```

##### `renew_interval`[🔗](https://caddyserver.com/docs/caddyfile/options#renew-interval "Direct link")

How often to scan all loaded, managed certificates for expiration, and trigger renewal if expired.

Default: `10m`

```
{
	renew_interval 30m
}
```

##### `cert_lifetime`[🔗](https://caddyserver.com/docs/caddyfile/options#cert-lifetime "Direct link")

The validity period to ask the CA to issue a certificate for.

This value is used to compute the `notAfter` field of the ACME order; therefore the system must have a reasonably synchronized clock. NOTE: Not all CAs support this. Check with your CA's ACME documentation to see if this is allowed and what values may be used.

Default: `0` (CA chooses lifetime, usually 90 days)

⚠️ This is an experimental feature. Subject to change or removal.

```
{
	cert_lifetime 30d
}
```

##### `ocsp_interval`[🔗](https://caddyserver.com/docs/caddyfile/options#ocsp-interval "Direct link")

How often to check if [OCSP staples ![Image 2](https://caddyserver.com/old/resources/images/external-link.svg)](https://en.wikipedia.org/wiki/OCSP_stapling) need updating.

Default: `1h`

```
{
	ocsp_interval 2h
}
```

##### `ocsp_stapling`[🔗](https://caddyserver.com/docs/caddyfile/options#ocsp-stapling "Direct link")

Can be set to `off` to disable OCSP stapling. Useful in environments where responders are not reachable due to firewalls.

```
{
	ocsp_stapling off
}
```

##### `preferred_chains`[🔗](https://caddyserver.com/docs/caddyfile/options#preferred-chains "Direct link")

If your CA provides multiple certificate chains, you can use this option to specify which chain Caddy should prefer. Set one of the following options:

*   **smallest** will tell Caddy to prefer chains with the fewest amount of bytes.

*   **root_common_name** is a list of one or more common names; Caddy will choose the first chain that has a root that matches with at least one of the specified common names.

*   **any_common_name** is a list of one or more common names; Caddy will choose the first chain that has an issuer that matches with at least one of the specified common names.

Note that specifying `preferred_chains` as a global option will affect all issuers if there isn't any [overriding issuer level config](https://caddyserver.com/docs/caddyfile/directives/tls#acme).

```
{
	preferred_chains smallest
}
```

```
{
	preferred_chains {
		root_common_name "ISRG Root X2"
	}
}
```

Server Options[🔗](https://caddyserver.com/docs/caddyfile/options#server-options "Direct link")
-----------------------------------------------------------------------------------------------

Customizes [HTTP servers](https://caddyserver.com/docs/json/apps/http/servers/) with settings that potentially span multiple sites, and thus can't be rightly configured in site blocks. These options affect the listener/socket or other facilities beneath the HTTP layer.

Can be specified more than once with different `listener_address` values to configure different options per server. For example, `servers :443` will only apply to the server that is bound to the listener address `:443`. Omitting the listener address will apply the options to any remaining server.

For example, to configure different options for the servers on ports `:80` and `:443`, you would specify two `servers` blocks:

```
{
	servers :443 {
		listener_wrappers {
			http_redirect
			tls
		}
	}

	servers :80 {
		protocols h1 h2c
	}
}
```

When using `servers`, it will **only** apply to servers that **actually appear** in your Caddyfile (i.e. are produced by a site block). Remember, [Automatic HTTPS](https://caddyserver.com/docs/automatic-https) will create a server listening on port `80` (or the [`http_port` option](https://caddyserver.com/docs/caddyfile/options#http_port)), to serve HTTP->HTTPS redirects and to solve the ACME HTTP challenge; this happens at runtime, i.e. _after_ the Caddyfile adapter applies `servers`. So in other words, this means that `servers`**will not** apply to `:80` unless you explicitly declare a site block like `http://` or `:80`.

##### `name`[🔗](https://caddyserver.com/docs/caddyfile/options#name "Direct link")

A custom name to assign to this server. Usually helpful to identify a server by its name in logs and metrics. If not set, Caddy will define it dynamically using a `srvX` pattern, where `X` starts with `0` and increments based on the number of servers in the config.

Keep in mind that only servers produced by site blocks in your config will have settings applied. [Automatic HTTPS](https://caddyserver.com/docs/automatic-https) creates an `:80` server (or [`http_port`](https://caddyserver.com/docs/caddyfile/options#http_port)) at runtime, so if you want rename it, you'll need at least an empty `http://` site block.

For example:

```
{
	servers :443 {
		name https
	}
	
	servers :80 {
		name http
	}
}

example.com {
}

http:// {
}
```

##### `listener_wrappers`[🔗](https://caddyserver.com/docs/caddyfile/options#listener-wrappers "Direct link")

Allows configuring [listener wrappers](https://caddyserver.com/docs/json/apps/http/servers/listener_wrappers/), which can modify the behaviour of the socket listener. They are applied in the given order.

###### `tls`[🔗](https://caddyserver.com/docs/caddyfile/options#tls "Direct link")

The `tls` listener wrapper is a no-op listener wrapper that marks where the TLS listener should be in a chain of listener wrappers. It should only be used if another listener wrapper must be placed in front of the TLS handshake.

###### `http_redirect`[🔗](https://caddyserver.com/docs/caddyfile/options#http-redirect "Direct link")

The [`http_redirect`](https://caddyserver.com/docs/json/apps/http/servers/listener_wrappers/http_redirect/) provides HTTP->HTTPS redirects for connections that come on the TLS port as an HTTP request, by detecting using the first few bytes that it's not a TLS handshake, but instead an HTTP request. This is most useful when serving HTTPS on a non-standard port (other than `443`), since browsers will try HTTP unless the scheme is specified. It must be placed _before_ the `tls` listener wrapper. Here's an example:

```
{
	servers {
		listener_wrappers {
			http_redirect
			tls
		}
	}
}
```

###### `proxy_protocol`[🔗](https://caddyserver.com/docs/caddyfile/options#proxy-protocol "Direct link")

The [`proxy_protocol`](https://caddyserver.com/docs/json/apps/http/servers/listener_wrappers/proxy_protocol/) listener wrapper (prior to v2.7.0 it was only available via a plugin) enables [PROXY protocol](https://github.com/haproxy/haproxy/blob/master/doc/proxy-protocol.txt) parsing (popularized by HAProxy). This must be used _before_ the `tls` listener wrapper since it parses plaintext data at the start of the connection:

```
proxy_protocol {
	timeout <duration>
	allow <cidrs...>
	deny <cidrs...>
	fallback_policy <policy>
}
```

*   **timeout** specifies the maximum duration to wait for the PROXY header. Defaults to `5s`.

*   **allow** is a list of CIDR ranges of trusted sources to receive PROXY headers. Unix sockets are trusted by default and not part of this option.

*   **deny** is a list of CIDR ranges of trusted sources to reject PROXY headers from.

*   **fallback_policy** is the action to take if the PROXY header comes from an address that not in either list of allow/deny. The default fallback policy is `ignore`. Accepted values of `fallback_policy` are:

    *   `ignore`: address from PROXY header, but accept connection
    *   `use`: address from PROXY header
    *   `reject`: connection when PROXY header is sent
    *   `require`: connection to send PROXY header, reject if not present
    *   `skip`: accepts a connection without requiring the PROXY header.

For example, for an HTTPS server (needing the `tls` listener wrapper) that accepts PROXY headers from a specific range of IP addresses, and rejects PROXY headers from a different range, with a timeout of 2 seconds:

```
{
	servers {
		listener_wrappers {
			proxy_protocol {
				timeout 2s
				allow 192.168.86.1/24 192.168.86.1/24
				deny 10.0.0.0/8
				fallback_policy reject
			}
			tls
		}
	}
}
```

##### `timeouts`[🔗](https://caddyserver.com/docs/caddyfile/options#timeouts "Direct link")

*   **read_body** is a [duration value](https://caddyserver.com/docs/conventions#durations) that sets how long to allow a read from a client's upload. Setting this to a short, non-zero value can mitigate slowloris attacks, but may also affect legitimately slow clients. Defaults to no timeout.

*   **read_header** is a [duration value](https://caddyserver.com/docs/conventions#durations) that sets how long to allow a read from a client's request headers. Defaults to no timeout.

*   **write** is a [duration value](https://caddyserver.com/docs/conventions#durations) that sets how long to allow a write to a client. Note that setting this to a small value when serving large files may negatively affect legitimately slow clients. Defaults to no timeout.

*   **idle** is a [duration value](https://caddyserver.com/docs/conventions#durations) that sets the maximum time to wait for the next request when keep-alives are enabled. Defaults to 5 minutes to help avoid resource exhaustion.

```
{
	servers {
		timeouts {
			read_body   10s
			read_header 5s
			write       30s
			idle        10m
		}
	}
}
```

##### `keepalive_interval`[🔗](https://caddyserver.com/docs/caddyfile/options#keepalive-interval "Direct link")

The interval at which TCP keepalive packets are sent to keep the connection alive at the TCP layer when no other data is being transmitted. Defaults to `15s`.

```
{
	servers {
		keepalive_interval 30s
	}
}
```

##### `trusted_proxies`[🔗](https://caddyserver.com/docs/caddyfile/options#trusted-proxies "Direct link")

Allows configuring IP ranges (CIDRs) of proxy servers from which requests should be trusted. By default, no proxies are trusted.

Enabling this causes trusted requests to have the _real_ client IP parsed from HTTP headers (by default, `X-Forwarded-For`; see [`client_ip_headers`](https://caddyserver.com/docs/caddyfile/options#client-ip-headers) to configure other headers). If trusted, the client IP is added to [access logs](https://caddyserver.com/docs/caddyfile/directives/log), is available as a `{client_ip}`[placeholder](https://caddyserver.com/docs/caddyfile/concepts#placeholders), and allows the use of the [`client_ip` matcher](https://caddyserver.com/docs/caddyfile/matchers#client-ip). If the request is not from a trusted proxy, then the client IP is set to the remote IP address of the direct incoming connection. By default, the IPs in headers are parsed left-to-right. See [`trusted_proxies_strict`](https://caddyserver.com/docs/caddyfile/options#trusted-proxies-strict) to alter this behaviour.

Some matchers or handlers may use the trust status of the request to make decisions. For example, if trusted, the [`reverse_proxy`](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy#defaults) handler will proxy and augment the sensitive `X-Forwarded-*` request headers.

Currently, only the `static`[IP source module](https://caddyserver.com/docs/json/apps/http/servers/trusted_proxies/) is included with the standard distribution of Caddy, but this can be [extended](https://caddyserver.com/docs/extending-caddy) with plugins to maintain a dynamic list of IP ranges.

###### `static`[🔗](https://caddyserver.com/docs/caddyfile/options#static "Direct link")

Takes a static (unchanging) list of IP ranges (CIDRs) to trust.

As a shortcut, `private_ranges` can be used to match all private IPv4 and IPv6 ranges. It's the same as specifying all of these ranges: `192.168.0.0/16 172.16.0.0/12 10.0.0.0/8 127.0.0.1/8 fd00::/8 ::1`.

The syntax is as follows:

```
trusted_proxies static [private_ranges] <ranges...>
```

Here's a complete example, trusting an example IPv4 range and an IPv6 range:

```
{
	servers {
		trusted_proxies static 12.34.56.0/24 1200:ab00::/32
	}
}
```

##### `trusted_proxies_strict`[🔗](https://caddyserver.com/docs/caddyfile/options#trusted-proxies-strict "Direct link")

When [`trusted_proxies`](https://caddyserver.com/docs/caddyfile/options#trusted-proxies) is enabled, the IPs in the headers (configured by [`client_ip_headers`](https://caddyserver.com/docs/caddyfile/options#client-ip-headers)) are parsed from left-to-right by default. The first untrusted IP address found becomes the real client address. Since v2.8, you can opt-in to right-to-left parsing of these headers with `trusted_proxies_strict`. By default, this option is disabled for backwards compatibility.

Upstream proxies such as HAProxy, CloudFlare, AWS ALB, CloudFront, etc. will append each new connecting remote address to the right of `X-Forwarded-For`. It is recommended to enable `trusted_proxies_strict` when working with these, as the left-most IP address may be spoofed by the client.

```
{
	servers {
		trusted_proxies static private_ranges
		trusted_proxies_strict
	}
}
```

Pairing with [`trusted_proxies`](https://caddyserver.com/docs/caddyfile/options#trusted-proxies), allows configuring which headers to use to determine the client's IP address. By default, only `X-Forwarded-For` is considered. Multiple header fields can be specified, in which case the first non-empty header value is used.

```
{
	servers {
		trusted_proxies static private_ranges
		client_ip_headers X-Forwarded-For X-Real-IP
	}
}
```

##### `metrics`[🔗](https://caddyserver.com/docs/caddyfile/options#metrics "Direct link")

Enables Prometheus metrics collection; necessary before scraping metrics. Note that metrics reduce performance on really busy servers. (Our community is working on improving this. Please get involved!)

```
{
	metrics
}
```

You can add the `per_host` option to label metrics with the host name of the metric.

```
{
	metrics {
		per_host
	}
}
```

##### `trace`[🔗](https://caddyserver.com/docs/caddyfile/options#trace "Direct link")

Log each individual handler that is invoked. Requires that the log emit at `DEBUG` level ( You may do so with the [`debug` global option](https://caddyserver.com/docs/caddyfile/options#debug)).

NOTE: This may log the configuration of your HTTP handler modules; do not enable this in insecure contexts when there is sensitive data in the configuration.

⚠️ This is an experimental feature. Subject to change or removal.

```
{
	servers {
		trace
	}
}
```

The maximum size to parse from a client's HTTP request headers. If the limit is exceeded, the server will respond with HTTP status `431 Request Header Fields Too Large`. It accepts all formats supported by [go-humanize](https://github.com/dustin/go-humanize/blob/master/bytes.go). By default, the limit is `1MB`.

```
{
	servers {
		max_header_size 5MB
	}
}
```

##### `enable_full_duplex`[🔗](https://caddyserver.com/docs/caddyfile/options#enable-full-duplex "Direct link")

Enable full-duplex communication for HTTP/1 requests. Only has an effect if Caddy was built with Go 1.21 or later.

For HTTP/1 requests, the Go HTTP server by default consumes any unread portion of the request body before beginning to write the response, preventing handlers from concurrently reading from the request and writing the response. Enabling this option disables this behavior and permits handlers to continue to read from the request while concurrently writing the response.

For HTTP/2+ requests, the Go HTTP server always permits concurrent reads and responses, so this option has no effect.

Test thoroughly with your HTTP clients, as some older clients may not support full-duplex HTTP/1 which can cause them to deadlock. See [golang/go#57786](https://github.com/golang/go/issues/57786) for more info.

⚠️ This is an experimental feature. Subject to change or removal.

```
{
	servers {
		enable_full_duplex
	}
}
```

##### `log_credentials`[🔗](https://caddyserver.com/docs/caddyfile/options#log-credentials "Direct link")

By default, access logs (enabled with the [`log` directive](https://caddyserver.com/docs/caddyfile/directives/log)) with headers that contain potentially sensitive information (`Cookie`, `Set-Cookie`, `Authorization` and `Proxy-Authorization`) will be logged as `REDACTED`.

If you wish to _not_ have these headers redacted, you may enable the `log_credentials` option.

```
{
	servers {
		log_credentials
	}
}
```

##### `protocols`[🔗](https://caddyserver.com/docs/caddyfile/options#protocols "Direct link")

The space-separated list of HTTP protocols to support.

Default: `h1 h2 h3`

Accepted values are:

*   `h1` for HTTP/1.1
*   `h2` For HTTP/2
*   `h2c` for HTTP/2 over cleartext
*   `h3` for HTTP/3

Currently, enabling HTTP/2 (including H2C) necessarily implies enabling HTTP/1.1 because the Go standard library does not let us disable HTTP/1.1 when using its HTTP server. However, either HTTP/1.1 or HTTP/3 can be enabled independently.

Note that H2C ("Cleartext HTTP/2" or "H2 over TCP") and HTTP/3 are not implemented by the Go standard library, so some functionality or features may be limited. We recommend against enabling H2C unless it is absolutely necessary for your application.

```
{
	servers :80 {
		protocols h1 h2c
	}
}
```

##### `strict_sni_host`[🔗](https://caddyserver.com/docs/caddyfile/options#strict-sni-host "Direct link")

Enabling this requires that a request's `Host` header matches the value of the `ServerName` sent by the client's TLS ClientHello, a necessary safeguard when using TLS client authentication. If there's a mismatch, HTTP status `421 Misdirected Request` response is written to the client.

This option will automatically be turned on if [client authentication](https://caddyserver.com/docs/caddyfile/directives/tls#client_auth) is configured. This disallows TLS client auth bypass (domain fronting) which could otherwise be exploited by sending an unprotected SNI value during a TLS handshake, then putting a protected domain in the Host header after establishing connection. This behavior is a safe default, but you may explicitly turn it off with `insecure_off`; for example in the case of running a proxy where domain fronting is desired and access is not restricted based on hostname.

```
{
	servers {
		strict_sni_host on
	}
}
```

File Systems[🔗](https://caddyserver.com/docs/caddyfile/options#file-systems "Direct link")
-------------------------------------------------------------------------------------------

The `filesystem` global option allows declaring one or more file systems that can be used for file I/O.

This could let you connect to a remote filesystem running in the cloud, or a database with a file-like interface, or even to read from files embedded within the Caddy binary.

File systems are declared with a name to identify them. This means you can connect to more than one file system of the same type, if you need to.

By default, Caddy doesn't have any file system modules, so you'll need to build Caddy with a plugin for the file system you want to use.

#### Example[🔗](https://caddyserver.com/docs/caddyfile/options#example "Direct link")

Using an imaginary `custom` file system module, you could declare two file systems:

```
{
	filesystem foo custom {
		...
	}

	filesystem bar custom {
		...
	}
}

foo.example.com {
	fs foo
	file_server
}

foo.example.com {
	fs bar
	file_server
}
```

PKI Options[🔗](https://caddyserver.com/docs/caddyfile/options#pki-options "Direct link")
-----------------------------------------------------------------------------------------

The PKI (Public Key Infrastructure) app is the foundation for Caddy's [Local HTTPS](https://caddyserver.com/docs/automatic-https#local-https) and [ACME server](https://caddyserver.com/docs/caddyfile/directives/acme_server) features. The app defines certificate authorities (CAs) which are capable of signing certificates.

The default CA ID is `local`. If the ID is omitted when configuring the `ca`, then `local` is assumed.

##### `name`[🔗](https://caddyserver.com/docs/caddyfile/options#name-1 "Direct link")

The user-facing name of the certificate authority.

Default: `Caddy Local Authority`

```
{
	pki {
		ca local {
			name "My Local CA"
		}
	}
}
```

##### `root_cn`[🔗](https://caddyserver.com/docs/caddyfile/options#root-cn "Direct link")

The name to put in the CommonName field of the root certificate.

Default: `{pki.ca.name} - {time.now.year} ECC Root`

```
{
	pki {
		ca local {
			root_cn "My Local CA - 2024 ECC Root"
		}
	}
}
```

##### `intermediate_cn`[🔗](https://caddyserver.com/docs/caddyfile/options#intermediate-cn "Direct link")

The name to put in the CommonName field of the intermediate certificates.

Default: `{pki.ca.name} - ECC Intermediate`

```
{
	pki {
		ca local {
			intermediate_cn "My Local CA - ECC Intermediate"
		}
	}
}
```

##### `intermediate_lifetime`[🔗](https://caddyserver.com/docs/caddyfile/options#intermediate-lifetime "Direct link")

The [duration](https://caddyserver.com/docs/conventions#durations) for which intermediate certificates are valid. This value **must** be less than the lifetime of the root cert (`3600d` or 10 years).

Default: `7d`. It is _not recommended_ to change this, unless absolutely necessary.

```
{
	pki {
		ca local {
			intermediate_lifetime 30d
		}
	}
}
```

##### `root`[🔗](https://caddyserver.com/docs/caddyfile/options#root "Direct link")

A key pair (certificate and private key) to use as the root for the CA. If not specified, one will be generated and managed automatically.

*   **format** is the format in which the certificate and private key are provided. Currently, only `pem_file` is supported, which is the default, so this field is optional.
*   **cert** is the certificate. This should be the path to a PEM file, when using `pem_file` format.
*   **key** is the private key. This should be the path to a PEM file, when using `pem_file` format.

##### `intermediate`[🔗](https://caddyserver.com/docs/caddyfile/options#intermediate "Direct link")

A key pair (certificate and private key) to use as the intermediate for the CA. If not specified, one will be generated and managed automatically.

*   **format** is the format in which the certificate and private key are provided. Currently, only `pem_file` is supported, which is the default, so this field is optional.
*   **cert** is the certificate. This should be the path to a PEM file, when using `pem_file` format.
*   **key** is the private key. This should be the path to a PEM file, when using `pem_file` format.

```
{
	pki {
		ca local {
			root {
				format pem_file
				cert /path/to/root.pem
				key /path/to/root.key
			}
			intermediate {
				format pem_file
				cert /path/to/intermediate.pem
				key /path/to/intermediate.key
			}
		}
	}
}
```

Event Options[🔗](https://caddyserver.com/docs/caddyfile/options#event-options "Direct link")
---------------------------------------------------------------------------------------------

Caddy modules emit events when interesting things happen (or are about to happen).

Events typically include a metadata payload. The best way to learn about events and their payloads is from each module's documentation, but you may also see the events and their data payloads by enabling the [`debug` global option](https://caddyserver.com/docs/caddyfile/options#debug) and reading the logs.

##### `on`[🔗](https://caddyserver.com/docs/caddyfile/options#on "Direct link")

Binds an event handler to the named event. Specify the name of the event handler module, followed by its configuration.

For example, to run a command after a certificate is obtained ([third-party plugin ![Image 3](https://caddyserver.com/old/resources/images/external-link.svg)](https://github.com/mholt/caddy-events-exec) required), with a part of the event payload being passed to the script using a placeholder:

```
{
	events {
		on cert_obtained exec ./my-script.sh {event.data.certificate_path}
	}
}
```

### Events[🔗](https://caddyserver.com/docs/caddyfile/options#events "Direct link")

These standard events are emitted by Caddy:

*   [`tls` events ![Image 4](https://caddyserver.com/old/resources/images/external-link.svg)](https://github.com/caddyserver/certmagic#events)
*   [`reverse_proxy` events](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy#events)

Plugins may also emit events, so check their documentation for details.
