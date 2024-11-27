Title: Caddyfile Concepts - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/concepts

Markdown Content:
This document will help you learn about the HTTP Caddyfile in detail.

1.  [Structure](https://caddyserver.com/docs/caddyfile/concepts#structure)
    *   [Blocks](https://caddyserver.com/docs/caddyfile/concepts#blocks)
    *   [Directives](https://caddyserver.com/docs/caddyfile/concepts#directives)
    *   [Tokens and quotes](https://caddyserver.com/docs/caddyfile/concepts#tokens-and-quotes)
2.  [Global options](https://caddyserver.com/docs/caddyfile/concepts#global-options)
3.  [Addresses](https://caddyserver.com/docs/caddyfile/concepts#addresses)
4.  [Matchers](https://caddyserver.com/docs/caddyfile/concepts#matchers)
5.  [Placeholders](https://caddyserver.com/docs/caddyfile/concepts#placeholders)
6.  [Snippets](https://caddyserver.com/docs/caddyfile/concepts#snippets)
7.  [Named Routes](https://caddyserver.com/docs/caddyfile/concepts#named-routes)
8.  [Comments](https://caddyserver.com/docs/caddyfile/concepts#comments)
9.  [Environment variables](https://caddyserver.com/docs/caddyfile/concepts#environment-variables)

Structure[🔗](https://caddyserver.com/docs/caddyfile/concepts#structure "Direct link")
--------------------------------------------------------------------------------------

The Caddyfile's structure can be described visually:

![Image 10: Caddyfile structure](https://caddyserver.com/old/resources/images/caddyfile-visual.png)

Key points:

*   An optional [**global options block**](https://caddyserver.com/docs/caddyfile/concepts#global-options) can be the very first thing in the file.
    
*   [Snippets](https://caddyserver.com/docs/caddyfile/concepts#snippets) or [named routes](https://caddyserver.com/docs/caddyfile/concepts#named-routes) may optionally appear next.
    
*   Otherwise, the first line of the Caddyfile is **always** the [address(es)](https://caddyserver.com/docs/caddyfile/concepts#addresses) of the site to serve.
    
*   All [directives](https://caddyserver.com/docs/caddyfile/concepts#directives) and [matchers](https://caddyserver.com/docs/caddyfile/concepts#matchers) **must** go in a site block. There is no global scope or inheritance across site blocks.
    
*   If there is only one site block, its curly braces `{ }` are optional.
    

A Caddyfile consists of at least one or more site blocks, which always starts with one or more [addresses](https://caddyserver.com/docs/caddyfile/concepts#addresses) for the site. Any directives appearing before the address will be confusing to the parser.

### Blocks[🔗](https://caddyserver.com/docs/caddyfile/concepts#blocks "Direct link")

Opening and closing a **block** is done with curly braces:

```
... {
	...
}
```

*   The open curly brace `{` must be at the end of its line and preceded by a space.
    
*   The close curly brace `}` must be on its own line.
    

When there is only one site block, the curly braces (and indentation) are optional. This is for convenience to quickly define a single site, for example, this:

```
localhost

reverse_proxy /api/* localhost:9001
file_server
```

is equivalent to:

```
localhost {
	reverse_proxy /api/* localhost:9001
	file_server
}
```

when you have only a single site block; it's a matter of preference.

To configure multiple sites with the same Caddyfile, you **must** use curly braces around each one to separate their configurations:

```
example1.com {
	root * /www/example.com
	file_server
}

example2.com {
	reverse_proxy localhost:9000
}
```

If a request matches multiple site blocks, the site block with the most specific matching address is chosen. Requests don't cascade into to other site blocks.

### Directives[🔗](https://caddyserver.com/docs/caddyfile/concepts#directives "Direct link")

[**Directives**](https://caddyserver.com/docs/caddyfile/directives) are functional keywords which customize how the site is served. They **must** appear within site blocks. For example, a complete file server config might look like this:

```
localhost {
	file_server
}
```

Or a reverse proxy:

```
localhost {
	reverse_proxy localhost:9000
}
```

In these examples, [`file_server`](https://caddyserver.com/docs/caddyfile/directives/file_server) and [`reverse_proxy`](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy) are directives. Directives are the first word on a line in a site block.

In the second example, `localhost:9000` is an **argument** because it appears on the same line after the directive.

Sometimes directives can open their own blocks. **Subdirectives** appear on the beginning of each line within directive blocks:

```
localhost {
	reverse_proxy localhost:9000 localhost:9001 {
		lb_policy first
	}
}
```

Here, `lb_policy` is a subdirective to [`reverse_proxy`](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy) (it sets the load balancing policy to use between backends).

**Unless otherwise documented, directives cannot be used within other directive blocks.** For example, [`basic_auth`](https://caddyserver.com/docs/caddyfile/directives/basic_auth) cannot be used within [`file_server`](https://caddyserver.com/docs/caddyfile/directives/file_server) because the file server does not know how to do authentication; but you can use directives within [`route`](https://caddyserver.com/docs/caddyfile/directives/route), [`handle`](https://caddyserver.com/docs/caddyfile/directives/handle), and [`handle_path`](https://caddyserver.com/docs/caddyfile/directives/handle_path) blocks because they are specifically designed to group directives together.

Note that when the HTTP Caddyfile is adapted, HTTP handler directives are sorted according to a specific default [directive order](https://caddyserver.com/docs/caddyfile/directives#directive-order) unless in a [`route`](https://caddyserver.com/docs/caddyfile/directives/route) block, so the order of appearance of the directives does not matter except in `route` blocks.

### Tokens and quotes[🔗](https://caddyserver.com/docs/caddyfile/concepts#tokens-and-quotes "Direct link")

The Caddyfile is lexed into tokens before being parsed. Whitespace is significant in the Caddyfile, because tokens are separated by whitespace.

Often, directives expect a certain number of arguments; if a single argument has a value with whitespace, it would be lexed as two separate tokens:

```
directive abc def
```

This could be problematic and return errors or unexpected behavior.

If `abc def` is supposed to be the value of a single argument, it needs to be quoted:

```
directive "abc def"
```

Quotes can be escaped if you need to use quotes in quoted tokens, too:

```
directive "\"abc def\""
```

To avoid escaping quotes, you can instead use backticks `` ` ``` to enclose tokens; for example:

```
directive `{"foo": "bar"}`
```

Inside quoted tokens, all other characters are treated literally, including spaces, tabs, and newlines. Multi-line tokens are thus possible:

```
directive "first line
	second line"
```

Heredocs are also supported:

```
example.com {
	respond <<HTML
		<html>
		  <head><title>Foo</title></head>
		  <body>Foo</body>
		</html>
		HTML 200
}
```

The opening heredoc marker must start with `<<`, followed by any text (uppercase letters recommended). The closing heredoc marker must be the same text (in the above example, `HTML`). The opening marker can be escaped with `\<<` to prevent heredoc parsing, if needed.

The closing marker can be indented, which causes every line of text to have that much indentation stripped (inspired by [PHP](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc)) which is nice for readability inside [blocks](https://caddyserver.com/docs/caddyfile/concepts#blocks) while giving great control of the whitespace in the token text. The trailing newline is also stripped, but can be retained by adding an extra blank line before the closing marker.

Additional tokens may follow the closing marker as arguments to the directive (such as in the example above, the status code `200`).

Global options[🔗](https://caddyserver.com/docs/caddyfile/concepts#global-options "Direct link")
------------------------------------------------------------------------------------------------

A Caddyfile may optionally start with a special block that has no keys, called a [global options block](https://caddyserver.com/docs/caddyfile/options):

```
{
	...
}
```

If present, it must be the very first block in the config.

It is used to set options that apply globally, or not to any one site in particular. Inside, only global options can be set; you cannot use regular site directives in them.

For example, to enable the `debug` global option, which is commonly used to produce verbose logs for troubleshooting:

```
{
	debug
}
```

**[Read the Global Options page](https://caddyserver.com/docs/caddyfile/options) to learn more.**

Addresses[🔗](https://caddyserver.com/docs/caddyfile/concepts#addresses "Direct link")
--------------------------------------------------------------------------------------

An address always appears at the top of the site block, and is usually the first thing in the Caddyfile.

These are examples of valid addresses:

| Address | Effect |
| --- | --- |
| `example.com` | HTTPS with managed [publicly-trusted certificate](https://caddyserver.com/docs/automatic-https#hostname-requirements) |
| `*.example.com` | HTTPS with managed [wildcard publicly-trusted certificate](https://caddyserver.com/docs/caddyfile/patterns#wildcard-certificates) |
| `localhost` | HTTPS with managed [locally-trusted certificate](https://caddyserver.com/docs/automatic-https#local-https) |
| `http://` | HTTP catch-all, affected by [`http_port`](https://caddyserver.com/docs/caddyfile/options#http-port) |
| `https://` | HTTPS catch-all, affected by [`https_port`](https://caddyserver.com/docs/caddyfile/options#http-port) |
| `http://example.com` | HTTP explicitly, with a `Host` matcher |
| `example.com:443` | HTTPS due to matching the [`https_port`](https://caddyserver.com/docs/caddyfile/options#http-port) default |
| `:443` | HTTPS catch-all due to matching the [`https_port`](https://caddyserver.com/docs/caddyfile/options#http-port) default |
| `:8080` | HTTP on non-standard port, no `Host` matcher |
| `localhost:8080` | HTTPS on non-standard port, due to having a valid domain |
| `https://example.com:443` | HTTPS, but both `https://` and `:443` are redundant |
| `127.0.0.1` | HTTPS, with a locally-trusted IP certificate |
| `http://127.0.0.1` | HTTP, with an IP address `Host` matcher (rejects `localhost`) |

From the address, Caddy can potentially infer the scheme, host and port of your site. If the address is without a port, the Caddyfile will choose the port matching the scheme if specified, or the default port of 443 will be assumed.

If you specify a hostname, only requests with a matching `Host` header will be honored. In other words, if the site address is `localhost`, then Caddy will not match requests to `127.0.0.1`.

Wildcards (`*`) may be used, but only to represent precisely one label of the hostname. For example, `*.example.com` matches `foo.example.com` but not `foo.bar.example.com`, and `*` matches `localhost` but not `example.com`. See the [wildcard certificates pattern](https://caddyserver.com/docs/caddyfile/patterns#wildcard-certificates) for a practical example.

To catch all hosts, omit the host portion of the address, for example, simply `https://`. This is useful when using [On-Demand TLS](https://caddyserver.com/docs/automatic-https#on-demand-tls), when you don't know the domains ahead of time.

If multiple sites share the same definition, you can list all of them together, separated with spaces and commas (at least one space is necessary). The following three examples are equivalent:

```
# Comma separated site addresses
localhost:8080, example.com, www.example.com {
	...
}
```

or

```
# Space separated site addresses
localhost:8080 example.com www.example.com {
	...
}
```

or

```
# Comma and new-line separated site addresses
localhost:8080,
example.com,
www.example.com {
	...
}
```

An address must be unique; you cannot specify the same address more than once.

[Placeholders](https://caddyserver.com/docs/caddyfile/concepts#placeholders) **cannot** be used in addresses, but you may use Caddyfile-style [environment variables](https://caddyserver.com/docs/caddyfile/concepts#environment-variables) in them:

```
{$DOMAIN:localhost} {
	...
}
```

By default, sites bind on all network interfaces. If you wish to override this, use the [`bind` directive](https://caddyserver.com/docs/caddyfile/directives/bind) or the [`default_bind` global option](https://caddyserver.com/docs/caddyfile/options#default-bind) to do so.

Matchers[🔗](https://caddyserver.com/docs/caddyfile/concepts#matchers "Direct link")
------------------------------------------------------------------------------------

HTTP handler [directives](https://caddyserver.com/docs/caddyfile/concepts#directives) apply to all requests by default (unless otherwise documented).

[Request matchers](https://caddyserver.com/docs/caddyfile/matchers) can be used to classify requests by a given criteria. With matchers, you can specify exactly which requests a certain directive applies to.

For directives that support matchers, the first argument after the directive is the **matcher token**. Here are some examples:

```
root *           /var/www  # matcher token: *
root /index.html /var/www  # matcher token: /index.html
root @post       /var/www  # matcher token: @post
```

Matcher tokens can be omitted entirely to match all requests; for example, `*` does not need to be given if the next argument does not look like a path matcher.

**[Read the Request Matchers page](https://caddyserver.com/docs/caddyfile/matchers) to learn more.**

Placeholders[🔗](https://caddyserver.com/docs/caddyfile/concepts#placeholders "Direct link")
--------------------------------------------------------------------------------------------

[Placeholders](https://caddyserver.com/docs/conventions#placeholders) are a simple way to inject dynamic values into your static configuration. They can be used as arguments to directives and subdirectives.

Placeholders are bounded on either side by curly braces `{ }` and contain the identifier inside, for example: `{foo.bar}`. The opening placeholder brace can be escaped `\{like.this}` to prevent replacement. Placeholder identifiers are typically namespaced with dots to avoid collisions across modules.

Which placeholders are available depends on the context. Not all placeholders are available in all parts of the config. For example, [the HTTP app sets placeholders](https://caddyserver.com/docs/json/apps/http/#docs) that are only available in areas of the config related to handling HTTP requests (i.e. in HTTP handler [directives](https://caddyserver.com/docs/caddyfile/concepts#directives) and [matchers](https://caddyserver.com/docs/caddyfile/concepts#matchers), but _not_ in [`tls` configuration](https://caddyserver.com/docs/caddyfile/directives/tls)). Some directives or matchers may set their own placeholders too which can be used by anything that follows them. Some placeholders [are globally available](https://caddyserver.com/docs/conventions#placeholders).

You can use any placeholders in the Caddyfile, but for convenience you can also use some of these equivalent shorthands which are expanded when the Caddyfile is parsed:

| Shorthand | Replaces |
| --- | --- |
| `{cookie.*}` | `{http.request.cookie.*}` |
| `{client_ip}` | `{http.vars.client_ip}` |
| `{dir}` | `{http.request.uri.path.dir}` |
| `{err.*}` | `{http.error.*}` |
| `{file_match.*}` | `{http.matchers.file.*}` |
| `{file.base}` | `{http.request.uri.path.file.base}` |
| `{file.ext}` | `{http.request.uri.path.file.ext}` |
| `{file}` | `{http.request.uri.path.file}` |
| `{header.*}` | `{http.request.header.*}` |
| `{host}` | `{http.request.host}` |
| `{hostport}` | `{http.request.hostport}` |
| `{labels.*}` | `{http.request.host.labels.*}` |
| `{method}` | `{http.request.method}` |
| `{path.*}` | `{http.request.uri.path.*}` |
| `{path}` | `{http.request.uri.path}` |
| `{port}` | `{http.request.port}` |
| `{query.*}` | `{http.request.uri.query.*}` |
| `{query}` | `{http.request.uri.query}` |
| `{re.*}` | `{http.regexp.*}` |
| `{remote_host}` | `{http.request.remote.host}` |
| `{remote_port}` | `{http.request.remote.port}` |
| `{remote}` | `{http.request.remote}` |
| `{rp.*}` | `{http.reverse_proxy.*}` |
| `{resp.*}` | `{http.intercept.*}` |
| `{scheme}` | `{http.request.scheme}` |
| `{tls_cipher}` | `{http.request.tls.cipher_suite}` |
| `{tls_client_certificate_der_base64}` | `{http.request.tls.client.certificate_der_base64}` |
| `{tls_client_certificate_pem}` | `{http.request.tls.client.certificate_pem}` |
| `{tls_client_fingerprint}` | `{http.request.tls.client.fingerprint}` |
| `{tls_client_issuer}` | `{http.request.tls.client.issuer}` |
| `{tls_client_serial}` | `{http.request.tls.client.serial}` |
| `{tls_client_subject}` | `{http.request.tls.client.subject}` |
| `{tls_version}` | `{http.request.tls.version}` |
| `{upstream_hostport}` | `{http.reverse_proxy.upstream.hostport}` |
| `{uri}` | `{http.request.uri}` |
| `{vars.*}` | `{http.vars.*}` |

Not all config fields support placeholders, but most do where you would expect it. Support for placeholders needs to have been explicitly added to those fields. Plugin authors can [read this article](https://caddyserver.com/docs/extending-caddy/placeholders) to learn how to add support for placeholders in their own modules.

Snippets[🔗](https://caddyserver.com/docs/caddyfile/concepts#snippets "Direct link")
------------------------------------------------------------------------------------

You can define special blocks called snippets by giving them a name surrounded in parentheses:

```
(logging) {
	log {
		output file /var/log/caddy.log
		format json
	}
}
```

And then you can reuse this anywhere you need, using the special [`import`](https://caddyserver.com/docs/caddyfile/directives/import) directive:

```
example.com {
	import logging
}

www.example.com {
	import logging
}
```

The [`import`](https://caddyserver.com/docs/caddyfile/directives/import) directive can also be used to include other files in its place. If the argument does not match a defined snippet, it will be tried as a file. It also supports globs to import multiple files. As a special case, it can appear anywhere within the Caddyfile (except as an argument to another directive), including outside of site blocks:

```
{
	email admin@example.com
}

import sites/*
```

You can pass arguments to an imported configuration (snippets or files) and use them like so:

```
(snippet) {
	respond "Yahaha! You found {args[0]}!"
}

a.example.com {
	import snippet "Example A"
}

b.example.com {
	import snippet "Example B"
}
```

**[Read the `import` directive page](https://caddyserver.com/docs/caddyfile/directives/import) to learn more.**

Named Routes[🔗](https://caddyserver.com/docs/caddyfile/concepts#named-routes "Direct link")
--------------------------------------------------------------------------------------------

⚠️ _Experimental_

Named routes use syntax similar to [snippets](https://caddyserver.com/docs/caddyfile/concepts#snippets); they're a special block defined outside of site blocks, prefixed with `&(` and ending in `)` with the name in between.

```
&(app-proxy) {
	reverse_proxy app-01:8080 app-02:8080 app-03:8080
}
```

And then you can reuse this named route within any site:

```
example.com {
	invoke app-proxy
}

www.example.com {
	invoke app-proxy
}
```

This is particularly useful to reduce memory usage if the same route is needed in many different sites, or if multiple different matcher conditions are needed to invoke the same route.

**[Read the `invoke` directive page](https://caddyserver.com/docs/caddyfile/directives/invoke) to learn more.**

Comments start with `#` and proceed until the end of the line:

```
# Comments can start a line
directive  # or go at the end
```

The hash character `#` for a comment cannot appear in the middle of a token (i.e. it must be preceded by a space or appear at the beginning of a line). This allows the use of hashes within URIs or other values without requiring quoting.

Environment variables[🔗](https://caddyserver.com/docs/caddyfile/concepts#environment-variables "Direct link")
--------------------------------------------------------------------------------------------------------------

If your configuration relies on environment variables, you can use them in the Caddyfile:

```
{$ENV}
```

Environment variables in this form are substituted **before Caddyfile parsing begins**, so they can expand to empty values (i.e. `""`), partial tokens, complete tokens, or even multiple tokens and lines.

For example, an environment variable `UPSTREAMS="app1:8080 app2:8080 app3:8080"` would expand to multiple [tokens](https://caddyserver.com/docs/caddyfile/concepts#tokens-and-quotes):

```
example.com {
	reverse_proxy {$UPSTREAMS}
}
```

A default value can be specified for when the environment variable is not found, by using `:` as the delimiter between the variable name and the default value:

```
{$DOMAIN:localhost} {

}
```

If you want to **defer the substitution** of an environment variable until runtime, you can use the [standard `{env.*}` placeholders](https://caddyserver.com/docs/conventions#placeholders). Note that not all config parameters support these placeholders though, since module developers need to add a line of code to perform the replacement. If it doesn't seem to work, please file an issue to request support for it.

For example, if you have the [`caddy-dns/cloudflare` plugin ![Image 11](https://caddyserver.com/old/resources/images/external-link.svg)](https://github.com/caddy-dns/cloudflare) installed and wish to configure the [DNS challenge](https://caddyserver.com/docs/automatic-https#dns-challenge), you can pass your `CLOUDFLARE_API_TOKEN` environment variable to the plugin like this:

```
{
	acme_dns cloudflare {env.CLOUDFLARE_API_TOKEN}
}
```

If you're running Caddy as a systemd service, see [these instructions](https://caddyserver.com/docs/running#overrides) for setting service overrides to define your environment variables.
