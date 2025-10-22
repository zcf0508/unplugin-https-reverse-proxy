Title: load/http - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/admin/config/load/http/

Markdown Content:
```
{▾	"module": "http",
	"method": "",	"url": "",	"header": {
		"": [""]
	},	"timeout": 0,	"adapter": "",	"tls": {▾		"use_server_identity": false,		"client_certificate_file": "",		"client_certificate_key_file": "",		"root_ca_pem_files": [""]	}}
```

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/json/admin/config/load/http/#docs "Direct link")
---------------------------------------------------------------------------------------------

HTTPLoader can load Caddy configs over HTTP(S).

If the response is not a JSON config, a config adapter must be specified either in the loader config (`adapter`), or in the Content-Type HTTP header returned in the HTTP response from the server. The Content-Type header is read just like the admin API's `/load` endpoint. If you don't have control over the HTTP server (but can still trust its response), you can override the Content-Type header by setting the `adapter` property in this config.

[🔗](https://caddyserver.com/docs/json/admin/config/load/http/#module)[module](https://caddyserver.com/docs/json/admin/config/load/http/module/)
This property is **required** because it specifies the module name.

[🔗](https://caddyserver.com/docs/json/admin/config/load/http/#method)[method](https://caddyserver.com/docs/json/admin/config/load/http/method/)
The method for the request. Default: GET

[🔗](https://caddyserver.com/docs/json/admin/config/load/http/#url)[url](https://caddyserver.com/docs/json/admin/config/load/http/url/)
The URL of the request.

HTTP headers to add to the request.

[🔗](https://caddyserver.com/docs/json/admin/config/load/http/#timeout)[timeout](https://caddyserver.com/docs/json/admin/config/load/http/timeout/)
Maximum time allowed for a complete connection and request.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/json/admin/config/load/http/#adapter)[adapter](https://caddyserver.com/docs/json/admin/config/load/http/adapter/)
The name of the config adapter to use, if any. Only needed if the HTTP response is not a JSON config and if the server's Content-Type header is missing or incorrect.

[🔗](https://caddyserver.com/docs/json/admin/config/load/http/#tls)[tls](https://caddyserver.com/docs/json/admin/config/load/http/tls/)
There are no docs for this property.

[🔗](https://caddyserver.com/docs/json/admin/config/load/http/#tls/use_server_identity)[tls/use_server_identity](https://caddyserver.com/docs/json/admin/config/load/http/tls/use_server_identity/)
There are no docs for this property.

[🔗](https://caddyserver.com/docs/json/admin/config/load/http/#tls/client_certificate_file)[tls/client_certificate_file](https://caddyserver.com/docs/json/admin/config/load/http/tls/client_certificate_file/)
There are no docs for this property.

[🔗](https://caddyserver.com/docs/json/admin/config/load/http/#tls/client_certificate_key_file)[tls/client_certificate_key_file](https://caddyserver.com/docs/json/admin/config/load/http/tls/client_certificate_key_file/)
There are no docs for this property.

[🔗](https://caddyserver.com/docs/json/admin/config/load/http/#tls/root_ca_pem_files)[tls/root_ca_pem_files](https://caddyserver.com/docs/json/admin/config/load/http/tls/root_ca_pem_files/)
There are no docs for this property.
