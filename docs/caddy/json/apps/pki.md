Title: apps/pki - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/pki/

Markdown Content:
```
{▾	"certificate_authorities": {
		"": {▾			"name": "",			"root_common_name": "",			"intermediate_common_name": "",			"intermediate_lifetime": 0,			"install_trust": false,			"root": {▾				"certificate": "",				"private_key": "",				"format": ""			},			"intermediate": {▾				"certificate": "",				"private_key": "",				"format": ""			},			"storage": {•••}		}
	}}
```

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/json/apps/pki/#docs "Direct link")
-------------------------------------------------------------------------------

PKI provides Public Key Infrastructure facilities for Caddy.

This app can define certificate authorities (CAs) which are capable of signing certificates. Other modules can be configured to use the CAs defined by this app for issuing certificates or getting key information needed for establishing trust.

[🔗](https://caddyserver.com/docs/json/apps/pki/#certificate_authorities)[certificate_authorities](https://caddyserver.com/docs/json/apps/pki/certificate_authorities/)
The certificate authorities to manage. Each CA is keyed by an ID that is used to uniquely identify it from other CAs. At runtime, the GetCA() method should be used instead to ensure the default CA is provisioned if it hadn't already been. The default CA ID is "local".

CA describes a certificate authority, which consists of root/signing certificates and various settings pertaining to the issuance of certificates and trusting them.

[🔗](https://caddyserver.com/docs/json/apps/pki/#certificate_authorities/name)[certificate_authorities/name](https://caddyserver.com/docs/json/apps/pki/certificate_authorities/name/)
The user-facing name of the certificate authority.

[🔗](https://caddyserver.com/docs/json/apps/pki/#certificate_authorities/root_common_name)[certificate_authorities/root_common_name](https://caddyserver.com/docs/json/apps/pki/certificate_authorities/root_common_name/)
The name to put in the CommonName field of the root certificate.

[🔗](https://caddyserver.com/docs/json/apps/pki/#certificate_authorities/intermediate_common_name)[certificate_authorities/intermediate_common_name](https://caddyserver.com/docs/json/apps/pki/certificate_authorities/intermediate_common_name/)
The name to put in the CommonName field of the intermediate certificates.

[🔗](https://caddyserver.com/docs/json/apps/pki/#certificate_authorities/intermediate_lifetime)[certificate_authorities/intermediate_lifetime](https://caddyserver.com/docs/json/apps/pki/certificate_authorities/intermediate_lifetime/)
The lifetime for the intermediate certificates

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/json/apps/pki/#certificate_authorities/install_trust)[certificate_authorities/install_trust](https://caddyserver.com/docs/json/apps/pki/certificate_authorities/install_trust/)
Whether Caddy will attempt to install the CA's root into the system trust store, as well as into Java and Mozilla Firefox trust stores. Default: true.

[🔗](https://caddyserver.com/docs/json/apps/pki/#certificate_authorities/root)[certificate_authorities/root](https://caddyserver.com/docs/json/apps/pki/certificate_authorities/root/)
The root certificate to use; if null, one will be generated.

KeyPair represents a public-private key pair, where the public key is also called a certificate.

[🔗](https://caddyserver.com/docs/json/apps/pki/#certificate_authorities/root/certificate)[certificate_authorities/root/certificate](https://caddyserver.com/docs/json/apps/pki/certificate_authorities/root/certificate/)
The certificate. By default, this should be the path to a PEM file unless format is something else.

[🔗](https://caddyserver.com/docs/json/apps/pki/#certificate_authorities/root/private_key)[certificate_authorities/root/private_key](https://caddyserver.com/docs/json/apps/pki/certificate_authorities/root/private_key/)
The private key. By default, this should be the path to a PEM file unless format is something else.

[🔗](https://caddyserver.com/docs/json/apps/pki/#certificate_authorities/root/format)[certificate_authorities/root/format](https://caddyserver.com/docs/json/apps/pki/certificate_authorities/root/format/)
The format in which the certificate and private key are provided. Default: pem_file

[🔗](https://caddyserver.com/docs/json/apps/pki/#certificate_authorities/intermediate)[certificate_authorities/intermediate](https://caddyserver.com/docs/json/apps/pki/certificate_authorities/intermediate/)
The intermediate (signing) certificate; if null, one will be generated.

KeyPair represents a public-private key pair, where the public key is also called a certificate.

[🔗](https://caddyserver.com/docs/json/apps/pki/#certificate_authorities/intermediate/certificate)[certificate_authorities/intermediate/certificate](https://caddyserver.com/docs/json/apps/pki/certificate_authorities/intermediate/certificate/)
The certificate. By default, this should be the path to a PEM file unless format is something else.

[🔗](https://caddyserver.com/docs/json/apps/pki/#certificate_authorities/intermediate/private_key)[certificate_authorities/intermediate/private_key](https://caddyserver.com/docs/json/apps/pki/certificate_authorities/intermediate/private_key/)
The private key. By default, this should be the path to a PEM file unless format is something else.

[🔗](https://caddyserver.com/docs/json/apps/pki/#certificate_authorities/intermediate/format)[certificate_authorities/intermediate/format](https://caddyserver.com/docs/json/apps/pki/certificate_authorities/intermediate/format/)
The format in which the certificate and private key are provided. Default: pem_file

[🔗](https://caddyserver.com/docs/json/apps/pki/#certificate_authorities/storage)[certificate_authorities/storage](https://caddyserver.com/docs/json/apps/pki/certificate_authorities/storage/)
Optionally configure a separate storage module associated with this issuer, instead of using Caddy's global/default-configured storage. This can be useful if you want to keep your signing keys in a separate location from your leaf certificates.
