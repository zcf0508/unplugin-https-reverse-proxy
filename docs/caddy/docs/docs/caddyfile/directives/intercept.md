Title: intercept (Caddyfile directive) - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/directives/intercept

Markdown Content:
A generalized abstraction of the [response interception](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy#intercepting-responses) feature from the [`reverse_proxy` directive](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy). This may be used with any handler that produces responses, including those from plugins like [FrankenPHP](https://frankenphp.dev/)'s `php_server`.

This directive allows you to [match responses](https://caddyserver.com/docs/caddyfile/response-matchers), and the first matching `handle_response` route or `replace_status` will be invoked. When invoked, the original response body is held back, giving the opportunity to that route to write a different response body, with a new status code or with any necessary response header manipulations. If the route does _not_ write a new response body, then original response body is written instead.

Syntax
------

```
intercept [<matcher>] {
	@name {
		status <code...>
		header <field> [<value>]
	}

	replace_status [<matcher>] <code>

	handle_response [<matcher>] {
		<directives...>
	}
}
```

*   **@name** is the name of a [response matcher](https://caddyserver.com/docs/caddyfile/response-matchers). As long as each response matcher has a unique name, multiple matchers can be defined. A response can be matched on the status code and presence or value of a response header.
    
*   **replace\_status** simply changes the status code of response when matched by the given matcher.
    
*   **handle\_response** defines the route to execute when matched by the given matcher (or, if a matcher is omitted, all responses). The first matching block will be applied. Inside a `handle_response` block, any other [directives](https://caddyserver.com/docs/caddyfile/directives) can be used.
    

Within `handle_response` routes, the following placeholders are available to pull information from the original response:

*   `{resp.status_code}` The status code of the original response.
    
*   `{resp.header.*}` The headers from the original response.
    

Examples
--------

When using [FrankenPHP](https://frankenphp.dev/)'s `php_server`, you can use `intercept` to implement `X-Accel-Redirect` support, serving static files as requested by the PHP app:

```
localhost {
	root * /srv

	intercept {
		@accel header X-Accel-Redirect *
		handle_response @accel {
			root * /path/to/private/files
			rewrite {resp.header.X-Accel-Redirect}
			method GET
			file_server
		}
	}

	php_server
}
```
