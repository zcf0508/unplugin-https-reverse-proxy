Title: HTTPS quick-start - Caddy Documentation

URL Source: https://caddyserver.com/docs/quick-starts/https

Markdown Content:
This guide will show you how to get up and running with [fully-managed HTTPS](https://caddyserver.com/docs/automatic-https) in no time.

**Prerequisites:**

*   Basic terminal / command line skills
*   Basic understanding of DNS
*   A registered public domain name
*   External access to ports 80 and 443
*   `caddy` and `curl` in your PATH

* * *

In this tutorial, replace `example.com` with your actual domain name.

Set your domain's A/AAAA records point to your server. You can do this by logging into your DNS provider and managing your domain name.

Before continuing, verify correct records with an authoritative lookup. Replace `example.com` with your domain name, and if you are using IPv6 replace `type=A` with `type=AAAA`:

```
curl "https://cloudflare-dns.com/dns-query?name=example.com&type=A" \
  -H "accept: application/dns-json"
```

Also make sure your server is externally reachable on ports 80 and 443 from a public interface.

All we have to do is start Caddy with your domain name in the config. There are several ways to do this.

Caddyfile[🔗](https://caddyserver.com/docs/quick-starts/https#caddyfile "Direct link")
--------------------------------------------------------------------------------------

This is the most common way to get HTTPS.

Create a file called `Caddyfile` (no extension) where the first line is your domain name, for example:

```
example.com

respond "Hello, privacy!"
```

Then from the same directory, run:

```
caddy run
```

You will see Caddy provision a TLS certificate and serve your site over HTTPS. This was possible because your site's address in the Caddyfile contained a domain name.

The `file-server` command[🔗](https://caddyserver.com/docs/quick-starts/https#the-file-server-command "Direct link")
--------------------------------------------------------------------------------------------------------------------

If all you need is serving static files over HTTPS, run this command (replacing your domain name):

```
caddy file-server --domain example.com
```

You will see Caddy provision a TLS certificate and serve your site over HTTPS.

The `reverse-proxy` command[🔗](https://caddyserver.com/docs/quick-starts/https#the-reverse-proxy-command "Direct link")
------------------------------------------------------------------------------------------------------------------------

If all you need is a simple reverse proxy over HTTPS (as a TLS terminator), run this command (replacing your domain name and actual backend address):

```
caddy reverse-proxy --from example.com --to localhost:9000
```

You will see Caddy provision a TLS certificate and serve your site over HTTPS.

JSON config[🔗](https://caddyserver.com/docs/quick-starts/https#json-config "Direct link")
------------------------------------------------------------------------------------------

The general rule of thumb is that any [host matcher](https://caddyserver.com/docs/json/apps/http/servers/routes/match/host/) will trigger automatic HTTPS.

Thus, a JSON config such as the following will enable production-ready [automatic HTTPS](https://caddyserver.com/docs/automatic-https):

```
{
	"apps": {
		"http": {
			"servers": {
				"hello": {
					"listen": [":443"],
					"routes": [
						{
							"match": [{
								"host": ["example.com"]
							}],
							"handle": [{
								"handler": "static_response",
								"body": "Hello, privacy!"
							}]
						}
					]
				}
			}
		}
	}
}
```
