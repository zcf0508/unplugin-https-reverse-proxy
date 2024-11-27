Title: route (Caddyfile directive) - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/directives/route

Markdown Content:
Evaluates a group of directives literally and as a single unit.

Directives contained in a route block will not be [reordered internally](https://caddyserver.com/docs/caddyfile/directives#directive-order). Only HTTP handler directives (directives which add handlers or middleware to the chain) can be used in a route block.

This directive is a special case in that its subdirectives are also regular directives.

Syntax
------

```
route [<matcher>] {
	<directives...>
}
```

*   **<directives...\>** is a list of directives or directive blocks, one per line, just like outside of a route block; except these directives will not be reordered. Only HTTP handler directives can be used.

Utility
-------

The `route` directive is helpful in certain advanced use cases or edge cases to take absolute control over parts of the HTTP handler chain.

Because the order of HTTP middleware evaluation is significant, the Caddyfile will normally reorder directives after parsing to make the Caddyfile easier to use; you don't have to worry about what order you type things.

While the [built-in order](https://caddyserver.com/docs/caddyfile/directives#directive-order) is compatible with most sites, sometimes you need to take manual control over the order, either for the whole site or just a part of it. That's what the `route` directive is for.

To illustrate, consider the case of two terminating handlers: [`redir`](https://caddyserver.com/docs/caddyfile/directives/redir) and [`file_server`](https://caddyserver.com/docs/caddyfile/directives/file_server). Both write the response to the client and do not call the next handler in the chain, so only one of these will be executed for a certain request. So which comes first? Normally, `redir` is executed before `file_server` because usually you would want to issue a redirect only in specific cases and serve files in the general case.

However, there may be occasions where the second directive (`redir`) has a more specific matcher than the second (`file_server`). In other words, you want to redirect in the general case, and serve only a specific file.

So you might try a Caddyfile like this (but this will not work as expected!):

```
example.com {
	file_server /specific.html
	redir https://anothersite.com{uri}
}
```

The problem is that after the [directives are sorted](https://caddyserver.com/docs/caddyfile/directives#sorting-algorithm), `redir` comes before `file_server`.

But in this case the matcher for `redir` (an implicit [`*`](https://caddyserver.com/docs/caddyfile/matchers#wildcard-matchers)) is a superset of the matcher for `file_server` (`*` is a superset of `/specific.html`).

Fortunately, the solution is easy: just wrap those two directives in a `route` block, to ensure that `file_server` is executed before `redir`:

```
example.com {
	route {
		file_server /specific.html
		redir https://anothersite.com{uri}
	}
}
```

And now `file_server` will be chained in before `redir` because the order is taken literally.

Similar directives
------------------

There are other directives that can wrap HTTP handler directives, but each has its use depending on the behavior you want to convey:

*   [`handle`](https://caddyserver.com/docs/caddyfile/directives/handle) wraps other directives like `route` does, but with two distinctions: 1) handle blocks are mutually exclusive to each other, and 2) directives within a handle are [re-ordered](https://caddyserver.com/docs/caddyfile/directives#directive-order) normally.
    
*   [`handle_path`](https://caddyserver.com/docs/caddyfile/directives/handle_path) does the same as `handle`, but it strips a prefix from the request before running its handlers.
    
*   [`handle_errors`](https://caddyserver.com/docs/caddyfile/directives/handle_errors) is like `handle`, but is only invoked when Caddy encounters an error during request handling.
    

Examples
--------

Proxy requests to `/api` as-is, and rewrite all other requests based on whether they match a file on disk, otherwise `/index.html`. Then that file is served.

Since [`try_files`](https://caddyserver.com/docs/caddyfile/directives/try_files) has a higher directive order than [`reverse_proxy`](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy), then it would normally get sorted higher and run first; this would cause the API requests to all get rewritten to `/index.html` and fail to match `/api*`, so none of them would get proxied and instead would result in a `404` from [`file_server`](https://caddyserver.com/docs/caddyfile/directives/file_server). Wrapping it all in a `route` ensures that `reverse_proxy` always runs first, before the request is rewritten.

```
example.com {
	root * /srv
	route {
		reverse_proxy /api* localhost:9000

		try_files {path} /index.html
		file_server
	}
}
```
