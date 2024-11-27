Title: The Caddyfile - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile

Markdown Content:
The **Caddyfile** is a convenient Caddy configuration format for humans. It is most people's favorite way to use Caddy because it is easy to write, easy to understand, and expressive enough for most use cases.

It looks like this:

```
example.com {
	root * /var/www/wordpress
	encode gzip
	php_fastcgi unix//run/php/php-version-fpm.sock
	file_server
}
```

(That's a real, production-ready Caddyfile that serves WordPress with fully-managed HTTPS.)

The basic idea is that you first type the address of your site, then the features or functionality you need your site to have. [View more common patterns.](https://caddyserver.com/docs/caddyfile/patterns)

*   #### [Quick start guide](https://caddyserver.com/docs/quick-starts/caddyfile)
    
    A good place to begin getting familiar with the Caddyfile.
*   #### [Full Caddyfile tutorial](https://caddyserver.com/docs/caddyfile-tutorial)
    
    Learn to do a variety of common things with the Caddyfile.
*   #### [Caddyfile concepts](https://caddyserver.com/docs/caddyfile/concepts)
    
    Required reading! Structure, site addresses, matchers, placeholders, and more.
*   #### [Directives](https://caddyserver.com/docs/caddyfile/directives)
    
    Keywords at the beginning of lines that enable features for your sites.
*   #### [Request matchers](https://caddyserver.com/docs/caddyfile/matchers)
    
    Filter requests by using matchers with your directives.
*   #### [Global options](https://caddyserver.com/docs/caddyfile/options)
    
    Settings that apply to the whole server rather than individual sites.
*   #### [Common patterns](https://caddyserver.com/docs/caddyfile/patterns)
    
    Simple ways to do common things.

Note[🔗](https://caddyserver.com/docs/caddyfile#note "Direct link")
-------------------------------------------------------------------

The Caddyfile is just a [config adapter](https://caddyserver.com/docs/config-adapters) for Caddy. It is usually preferred when manually crafting configurations by hand, but is not as expressive, flexible, or programmable as Caddy's [native JSON structure](https://caddyserver.com/docs/json/). If you are automating your Caddy configurations/deployments, you may wish to use JSON with [Caddy's API](https://caddyserver.com/docs/api). (You can actually use the Caddyfile with the API too, just to a limited extent.)
