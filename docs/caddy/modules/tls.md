Title: Module tls - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/tls

Markdown Content:
tls provides TLS facilities including certificate loading and management, client auth, and more.

[🔗](https://caddyserver.com/docs/modules/tls#certificates)certificates
Certificates to load into memory for quick recall during TLS handshakes. Each key is the name of a certificate loader module.

The "automate" certificate loader module can be used to specify a list of subjects that need certificates to be managed automatically. The first matching automation policy will be applied to manage the certificate(s).

All loaded certificates get pooled into the same cache and may be used to complete TLS handshakes for the relevant server names (SNI). Certificates loaded manually (anything other than "automate") are not automatically managed and will have to be refreshed manually before they expire.

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

[🔗](https://caddyserver.com/docs/modules/tls#automation)automation
Configures certificate automation.

AutomationConfig governs the automated management of TLS certificates.

[🔗](https://caddyserver.com/docs/modules/tls#automation/policies)automation/policies
The list of automation policies. The first policy matching a certificate or subject name will be applied.

AutomationPolicy designates the policy for automating the management (obtaining, renewal, and revocation) of managed TLS certificates.

An AutomationPolicy value is not valid until it has been provisioned; use the `AddAutomationPolicy()` method on the TLS app to properly provision a new policy.

[🔗](https://caddyserver.com/docs/modules/tls#automation/policies/subjects)automation/policies/subjects
Which subjects (hostnames or IP addresses) this policy applies to.

This list is a filter, not a command. In other words, it is used only to filter whether this policy should apply to a subject that needs a certificate; it does NOT command the TLS app to manage a certificate for that subject. To have Caddy automate a certificate or specific subjects, use the "automate" certificate loader module of the TLS app.

[🔗](https://caddyserver.com/docs/modules/tls#automation/policies/issuers)automation/policies/issuers
The modules that may issue certificates. Default: internal if all subjects do not qualify for public certificates; otherwise acme and zerossl.

[🔗](https://caddyserver.com/docs/modules/tls#automation/policies/get_certificate)automation/policies/get_certificate
Modules that can get a custom certificate to use for any given TLS handshake at handshake-time. Custom certificates can be useful if another entity is managing certificates and Caddy need only get it and serve it. Specifying a Manager enables on-demand TLS, i.e. it has the side-effect of setting the on_demand parameter to `true`.

TODO: This is an EXPERIMENTAL feature. Subject to change or removal.

Fulfilled by modules in namespace: **tls.get_certificate**

*   [http](https://caddyserver.com/docs/modules/tls.get_certificate.http)
*   [tailscale](https://caddyserver.com/docs/modules/tls.get_certificate.tailscale)
*   [file](https://caddyserver.com/docs/modules/tls.get_certificate.file)Non-standard
*   [pfx](https://caddyserver.com/docs/modules/tls.get_certificate.pfx)Non-standard

[🔗](https://caddyserver.com/docs/modules/tls#automation/policies/must_staple)automation/policies/must_staple
If true, certificates will be requested with MustStaple. Not all CAs support this, and there are potentially serious consequences of enabling this feature without proper threat modeling.

[🔗](https://caddyserver.com/docs/modules/tls#automation/policies/renewal_window_ratio)automation/policies/renewal_window_ratio
How long before a certificate's expiration to try renewing it, as a function of its total lifetime. As a general and conservative rule, it is a good idea to renew a certificate when it has about 1/3 of its total lifetime remaining. This utilizes the majority of the certificate's lifetime while still saving time to troubleshoot problems. However, for extremely short-lived certs, you may wish to increase the ratio to ~1/2.

[🔗](https://caddyserver.com/docs/modules/tls#automation/policies/key_type)automation/policies/key_type
The type of key to generate for certificates. Supported values: `ed25519`, `p256`, `p384`, `rsa2048`, `rsa4096`.

[🔗](https://caddyserver.com/docs/modules/tls#automation/policies/storage)automation/policies/storage
Optionally configure a separate storage module associated with this manager, instead of using Caddy's global/default-configured storage.

[🔗](https://caddyserver.com/docs/modules/tls#automation/policies/on_demand)automation/policies/on_demand
If true, certificates will be managed "on demand"; that is, during TLS handshakes or when needed, as opposed to at startup or config load. This enables On-Demand TLS for this policy.

[🔗](https://caddyserver.com/docs/modules/tls#automation/policies/reuse_private_keys)automation/policies/reuse_private_keys
If true, private keys already existing in storage will be reused. Otherwise, a new key will be created for every new certificate to mitigate pinning and reduce the scope of key compromise. TEMPORARY: Key pinning is against industry best practices. This property will likely be removed in the future. Do not rely on it forever; watch the release notes.

[🔗](https://caddyserver.com/docs/modules/tls#automation/policies/disable_ocsp_stapling)automation/policies/disable_ocsp_stapling
Disables OCSP stapling. Disabling OCSP stapling puts clients at greater risk, reduces their privacy, and usually lowers client performance. It is NOT recommended to disable this unless you are able to justify the costs. EXPERIMENTAL. Subject to change.

[🔗](https://caddyserver.com/docs/modules/tls#automation/policies/ocsp_overrides)automation/policies/ocsp_overrides
Overrides the URLs of OCSP responders embedded in certificates. Each key is a OCSP server URL to override, and its value is the replacement. An empty value will disable querying of that server. EXPERIMENTAL. Subject to change.

[🔗](https://caddyserver.com/docs/modules/tls#automation/on_demand)automation/on_demand
On-Demand TLS defers certificate operations to the moment they are needed, e.g. during a TLS handshake. Useful when you don't know all the hostnames at config-time, or when you are not in control of the domain names you are managing certificates for. In 2015, Caddy became the first web server to implement this experimental technology.

Note that this field does not enable on-demand TLS; it only configures it for when it is used. To enable it, create an automation policy with `on_demand`.

OnDemandConfig configures on-demand TLS, for obtaining needed certificates at handshake-time. Because this feature can easily be abused, Caddy must ask permission to your application whether a particular domain is allowed to have a certificate issued for it.

[🔗](https://caddyserver.com/docs/modules/tls#automation/on_demand/ask)automation/on_demand/ask
Deprecated. WILL BE REMOVED SOON. Use 'permission' instead with the `http` module.

[🔗](https://caddyserver.com/docs/modules/tls#automation/on_demand/permission)automation/on_demand/permission
REQUIRED. A module that will determine whether a certificate is allowed to be loaded from storage or obtained from an issuer on demand.

Fulfilled by modules in namespace: **tls.permission**

*   [http](https://caddyserver.com/docs/modules/tls.permission.http)

[🔗](https://caddyserver.com/docs/modules/tls#automation/ocsp_interval)automation/ocsp_interval
Caddy staples OCSP (and caches the response) for all qualifying certificates by default. This setting changes how often it scans responses for freshness, and updates them if they are getting stale. Default: 1h

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/tls#automation/renew_interval)automation/renew_interval
Every so often, Caddy will scan all loaded, managed certificates for expiration. This setting changes how frequently the scan for expiring certificates is performed. Default: 10m

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/tls#automation/storage_clean_interval)automation/storage_clean_interval
How often to scan storage units for old or expired assets and remove them. These scans exert lots of reads (and list operations) on the storage module, so choose a longer interval for large deployments. Default: 24h

Storage will always be cleaned when the process first starts. Then, a new cleaning will be started this duration after the previous cleaning started if the previous cleaning finished in less than half the time of this interval (otherwise next start will be skipped).

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/tls#session_tickets)session_tickets
Configures session ticket ephemeral keys (STEKs).

SessionTicketService configures and manages TLS session tickets.

[🔗](https://caddyserver.com/docs/modules/tls#session_tickets/key_source)session_tickets/key_source
KeySource is the method by which Caddy produces or obtains TLS session ticket keys (STEKs). By default, Caddy generates them internally using a secure pseudorandom source.

[🔗](https://caddyserver.com/docs/modules/tls#session_tickets/rotation_interval)session_tickets/rotation_interval
How often Caddy rotates STEKs. Default: 12h.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/tls#session_tickets/max_keys)session_tickets/max_keys
The maximum number of keys to keep in rotation. Default: 4.

[🔗](https://caddyserver.com/docs/modules/tls#session_tickets/disable_rotation)session_tickets/disable_rotation
Disables STEK rotation.

[🔗](https://caddyserver.com/docs/modules/tls#session_tickets/disabled)session_tickets/disabled
Disables TLS session resumption by tickets.

[🔗](https://caddyserver.com/docs/modules/tls#cache)cache
Configures the in-memory certificate cache.

CertCacheOptions configures the certificate cache.

[🔗](https://caddyserver.com/docs/modules/tls#cache/capacity)cache/capacity
Maximum number of certificates to allow in the cache. If reached, certificates will be randomly evicted to make room for new ones. Default: 10,000

[🔗](https://caddyserver.com/docs/modules/tls#disable_ocsp_stapling)disable_ocsp_stapling
Disables OCSP stapling for manually-managed certificates only. To configure OCSP stapling for automated certificates, use an automation policy instead.

Disabling OCSP stapling puts clients at greater risk, reduces their privacy, and usually lowers client performance. It is NOT recommended to disable this unless you are able to justify the costs. EXPERIMENTAL. Subject to change.

[🔗](https://caddyserver.com/docs/modules/tls#disable_storage_check)disable_storage_check
Disables checks in certmagic that the configured storage is ready and able to handle writing new content to it. These checks are intended to prevent information loss (newly issued certificates), but can be expensive on the storage.

Disabling these checks should only be done when the storage can be trusted to have enough capacity and no other problems. EXPERIMENTAL. Subject to change.

[🔗](https://caddyserver.com/docs/modules/tls#disable_storage_clean)disable_storage_clean
Disables the automatic cleanup of the storage backend. This is useful when TLS is not being used to store certificates and the user wants run their server in a read-only mode.

Storage cleaning creates two files: instance.uuid and last_clean.json. The instance.uuid file is used to identify the instance of Caddy in a cluster. The last_clean.json file is used to store the last time the storage was cleaned. EXPERIMENTAL. Subject to change.
