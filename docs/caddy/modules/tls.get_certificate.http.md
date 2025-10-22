Title: Module tls.get_certificate.http - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/tls.get_certificate.http

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module tls.get_certificate.http**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.get_certificate.http#docs "Direct link")
-------------------------------------------------------------------------------------------------

`{▾	"url": ""}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/tls.get_certificate.http#docs "Direct link")
-------------------------------------------------------------------------------------------------

tls.get_certificate.http can get a certificate via HTTP(S) request.

[🔗](https://caddyserver.com/docs/modules/tls.get_certificate.http#url)url
The URL from which to download the certificate. Required.

The URL will be augmented with query string parameters taken from the TLS handshake:

*   server_name: The SNI value
*   signature_schemes: Comma-separated list of hex IDs of signatures
*   cipher_suites: Comma-separated list of hex IDs of cipher suites

To be valid, the response must be HTTP 200 with a PEM body consisting of blocks for the certificate chain and the private key.

To indicate that this manager is not managing a certificate for the described handshake, the endpoint should return HTTP 204 (No Content). Error statuses will indicate that the manager is capable of providing a certificate but was unable to.
