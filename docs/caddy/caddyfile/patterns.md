Title: Common Caddyfile Patterns - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/patterns

Markdown Content:
This page demonstrates a few complete and minimal Caddyfile configurations for common use cases. These can be helpful starting points for your own Caddyfile documents.

These are not drop-in solutions; you will have to customize your domain name, ports/sockets, directory paths, etc. They are intended to illustrate some of the most common configuration patterns.

*   [Static file server](https://caddyserver.com/docs/caddyfile/patterns#static-file-server)
*   [Reverse proxy](https://caddyserver.com/docs/caddyfile/patterns#reverse-proxy)
*   [PHP](https://caddyserver.com/docs/caddyfile/patterns#php)
*   [Redirect `www.` subdomain](https://caddyserver.com/docs/caddyfile/patterns#redirect-www-subdomain)
*   [Trailing slashes](https://caddyserver.com/docs/caddyfile/patterns#trailing-slashes)
*   [Wildcard certificates](https://caddyserver.com/docs/caddyfile/patterns#wildcard-certificates)
*   [Single-page apps (SPAs)](https://caddyserver.com/docs/caddyfile/patterns#single-page-apps-spas)
*   [Caddy proxying to another Caddy](https://caddyserver.com/docs/caddyfile/patterns#caddy-proxying-to-another-caddy)

Static file server[🔗](https://caddyserver.com/docs/caddyfile/patterns#static-file-server "Direct link")
--------------------------------------------------------------------------------------------------------

```
example.com {
	root * /var/www
	file_server
}
```

As usual, the first line is the site address. The [`root` directive](https://caddyserver.com/docs/caddyfile/directives/root) specifies the path to the root of the site (the `*` means to match all requests, so as to disambiguate from a [path matcher](https://caddyserver.com/docs/caddyfile/matchers#path-matchers))—change the path to your site if it isn't the current working directory. Finally, we enable the [static file server](https://caddyserver.com/docs/caddyfile/directives/file_server).

Reverse proxy[🔗](https://caddyserver.com/docs/caddyfile/patterns#reverse-proxy "Direct link")
----------------------------------------------------------------------------------------------

Proxy all requests:

```
example.com {
	reverse_proxy localhost:5000
}
```

Only proxy requests having a path starting with `/api/` and serve static files for everything else:

```
example.com {
	root * /var/www
	reverse_proxy /api/* localhost:5000
	file_server
}
```

This uses a [request matcher](https://caddyserver.com/docs/caddyfile/matchers#syntax) to match only requests that start with `/api/` and proxy them to the backend. All other requests will be served from the site [`root`](https://caddyserver.com/docs/caddyfile/directives/root) with the [static file server](https://caddyserver.com/docs/caddyfile/directives/file_server). This also depends on the fact that `reverse_proxy` is higher on the [directive order](https://caddyserver.com/docs/caddyfile/directives#directive-order) than `file_server`.

There are many more [`reverse_proxy` examples here](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy#examples).

PHP[🔗](https://caddyserver.com/docs/caddyfile/patterns#php "Direct link")
--------------------------------------------------------------------------

### PHP-FPM[🔗](https://caddyserver.com/docs/caddyfile/patterns#php-fpm "Direct link")

With a PHP FastCGI service running, something like this works for most modern PHP apps:

```
example.com {
	root * /srv/public
	encode
	php_fastcgi localhost:9000
	file_server
}
```

Customize the site root accordingly; this example assumes that your PHP app's webroot is within a `public` directory—requests for files that exist on disk will be served with [`file_server`](https://caddyserver.com/docs/caddyfile/directives/file_server), and anything else will be routed to `index.php` for handling by the PHP app.

You may sometimes use a unix socket to connect to PHP-FPM:

```
php_fastcgi unix//run/php/php8.2-fpm.sock
```

The [`php_fastcgi` directive](https://caddyserver.com/docs/caddyfile/directives/php_fastcgi) is actually just a shortcut for [several pieces of configuration](https://caddyserver.com/docs/caddyfile/directives/php_fastcgi#expanded-form).

### FrankenPHP[🔗](https://caddyserver.com/docs/caddyfile/patterns#frankenphp "Direct link")

Alternatively, you may use [FrankenPHP](https://frankenphp.dev/), which is a distribution of Caddy which calls PHP directly using CGO (Go to C bindings). This can be up to 4x faster than with PHP-FPM, and even better if you can use the worker mode.

```
{
    frankenphp
    order php_server before file_server
}

example.com {
	root * /srv/public
    encode zstd br gzip
    php_server
}
```

Redirect `www.` subdomain[🔗](https://caddyserver.com/docs/caddyfile/patterns#redirect-www-subdomain "Direct link")
-------------------------------------------------------------------------------------------------------------------

To **add** the `www.` subdomain with an HTTP redirect:

```
example.com {
	redir https://www.{host}{uri}
}

www.example.com {
}
```

To **remove** it:

```
www.example.com {
	redir https://example.com{uri}
}

example.com {
}
```

To remove it for **multiple domains** at once; this uses the `{labels.*}` placeholders which are the parts of the hostname, `0`-indexed from the right (e.g. `0`=`com`, `1`=`example-one`, `2`=`www`):

```
www.example-one.com, www.example-two.com {
	redir https://{labels.1}.{labels.0}{uri}
}

example-one.com, example-two.com {
}
```

Trailing slashes[🔗](https://caddyserver.com/docs/caddyfile/patterns#trailing-slashes "Direct link")
----------------------------------------------------------------------------------------------------

You will not usually need to configure this yourself; the [`file_server` directive](https://caddyserver.com/docs/caddyfile/directives/file_server) will automatically add or remove trailing slashes from requests by way of HTTP redirects, depending on whether the requested resource is a directory or file, respectively.

However, if you need to, you can still enforce trailing slashes with your config. There are two ways to do it: internally or externally.

### Internal enforcement[🔗](https://caddyserver.com/docs/caddyfile/patterns#internal-enforcement "Direct link")

This uses the [`rewrite`](https://caddyserver.com/docs/caddyfile/directives/rewrite) directive. Caddy will rewrite the URI internally to add or remove the trailing slash:

```
example.com {
	rewrite /add     /add/
	rewrite /remove/ /remove
}
```

Using a rewrite, requests with and without the trailing slash will be the same.

### External enforcement[🔗](https://caddyserver.com/docs/caddyfile/patterns#external-enforcement "Direct link")

This uses the [`redir`](https://caddyserver.com/docs/caddyfile/directives/redir) directive. Caddy will ask the browser to change the URI to add or remove the trailing slash:

```
example.com {
	redir /add     /add/
	redir /remove/ /remove
}
```

Using a redirect, the client will have to re-issue the request, enforcing a single acceptable URI for a resource.

Wildcard certificates[🔗](https://caddyserver.com/docs/caddyfile/patterns#wildcard-certificates "Direct link")
--------------------------------------------------------------------------------------------------------------

If you need to serve multiple subdomains with the same wildcard certificate, the best way to handle them is with a Caddyfile like this, making use of the [`handle` directive](https://caddyserver.com/docs/caddyfile/directives/handle) and [`host` matchers](https://caddyserver.com/docs/caddyfile/matchers#host):

```
*.example.com {
	tls {
		dns <provider_name> [<params...>]
	}

	@foo host foo.example.com
	handle @foo {
		respond "Foo!"
	}

	@bar host bar.example.com
	handle @bar {
		respond "Bar!"
	}

	# Fallback for otherwise unhandled domains
	handle {
		abort
	}
}
```

You must enable the [ACME DNS challenge](https://caddyserver.com/docs/automatic-https#dns-challenge) to have Caddy automatically manage wildcard certificates.

Single-page apps (SPAs)[🔗](https://caddyserver.com/docs/caddyfile/patterns#single-page-apps-spas "Direct link")
----------------------------------------------------------------------------------------------------------------

When a web page does its own routing, servers may receive lots of requests for pages that don't exist server-side, but which are renderable client-side as long as the singular index file is served instead. Web applications architected like this are known as SPAs, or single-page apps.

The main idea is to have the server "try files" to see if the requested file exists server-side, and if not, fall back to an index file where the client does the routing (usually with client-side JavaScript).

A typical SPA config usually looks something like this:

```
example.com {
	root * /srv
	encode
	try_files {path} /index.html
	file_server
}
```

If your SPA is coupled with an API or other server-side-only endpoints, you will want to use `handle` blocks to treat them exclusively:

```
example.com {
	encode

	handle /api/* {
		reverse_proxy backend:8000
	}

	handle {
		root * /srv
		try_files {path} /index.html
		file_server
	}
}
```

If your `index.html` contains references to your JS/CSS assets with hashed filenames, you may want to consider adding a `Cache-Control` header to instruct clients to _not_ cache it (so that if the assets change, browsers fetch the new ones). Since the `try_files` rewrite is used to serve your `index.html` from any path that doesn't match another file on disk, you can wrap the `try_files` with a `route` so that the `header` handler runs _after_ the rewrite (it normally would run before due to the [directive order](https://caddyserver.com/docs/caddyfile/directives#directive-order)):

```
route {
	try_files {path} /index.html
	header /index.html Cache-Control "public, max-age=0, must-revalidate"
}
```

Caddy proxying to another Caddy[🔗](https://caddyserver.com/docs/caddyfile/patterns#caddy-proxying-to-another-caddy "Direct link")
----------------------------------------------------------------------------------------------------------------------------------

If you have one Caddy instance publicly accessible (let's call it "front"), and another Caddy instance in your private network (let's call it "back") serving your actual app, you can use the [`reverse_proxy` directive](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy) to pass requests through.

Front instance:

```
foo.example.com, bar.example.com {
	reverse_proxy 10.0.0.1:80
}
```

Back instance:

```
{
	servers {
		trusted_proxies static private_ranges
	}
}

http://foo.example.com {
	reverse_proxy foo-app:8080
}

http://bar.example.com {
	reverse_proxy bar-app:9000
}
```

*   This example serves two different domains, proxying both to the same back Caddy instance, on port `80`. Your back instance is serving the two domains different ways, so it's configured with two separate site blocks.

*   On the back, [`http://`](https://caddyserver.com/docs/caddyfile/concepts#addresses) is used to accept HTTP on port `80`. The front instance terminates TLS, and the traffic between front and back are on a private network, so there's no need to re-encrypt it.

*   You may use a different port like `8080` on the back instance if you need to; just append `:8080` to each site address on the back's config, OR set the [`http_port` global option](https://caddyserver.com/docs/caddyfile/options#http_port) to `8080`.

*   On the back, the [`trusted_proxies` global option](https://caddyserver.com/docs/caddyfile/options#trusted_proxies) is used to tell Caddy to trust the front instance as a proxy. This ensures the real client IP is preserved.

*   Going further, you could have more than one back instance that you [load balance](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy#load-balancing) between. You could set up mTLS (mutual TLS) using the [`acme_server`](https://caddyserver.com/docs/caddyfile/directives/acme_server) on the front instance such that it acts like the CA for the back instance (useful if the traffic between front and back cross untrusted networks).
