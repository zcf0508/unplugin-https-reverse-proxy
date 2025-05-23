Title: rewrite (Caddyfile directive) - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/directives/rewrite

Markdown Content:
Rewrites the request URI internally.

A rewrite changes some or all of the request URI. Note that the URI does not include scheme or authority (host & port), and clients typically do not send fragments. Thus, this directive is mostly used for **path** and **query** string manipulation.

The `rewrite` directive implies the intent to accept the request, but with modifications.

It is mutually exclusive to other `rewrite` directives in the same block, so it is safe to define rewrites that would otherwise cascade into each other as only the first matching rewrite will be executed.

A [request matcher](https://caddyserver.com/docs/caddyfile/matchers) that matches a request before the `rewrite` might not match the same request after the `rewrite`. If you want your `rewrite` to share a route with other handlers, use the [`route`](https://caddyserver.com/docs/caddyfile/directives/route) or [`handle`](https://caddyserver.com/docs/caddyfile/directives/handle) directives.

Syntax
------

```
rewrite [<matcher>] <to>
```

*   **<to\>** is the URI to rewrite the request to. Only the components of the URI (path or query string) that are specified in the rewrite will be operated on. The URI path is any substring that comes before `?`. If `?` is omitted, then the whole token is considered to be the path.

Prior to v2.8.0, the `<to>` argument could be confused by the parser for a [matcher token](https://caddyserver.com/docs/caddyfile/matchers#syntax) if it began with `/`, so it was necessary to specify a wildcard matcher token (`*`).

Similar directives
------------------

There are other directives that perform rewrites, but imply a different intent or do the rewrite without a complete replacement of the URI:

*   [`uri`](https://caddyserver.com/docs/caddyfile/directives/uri) manipulates a URI (strip prefix, suffix, or substring replacement).
    
*   [`try_files`](https://caddyserver.com/docs/caddyfile/directives/try_files) rewrites the request based on the existence of files.
    

Examples
--------

Rewrite all requests to `index.html`, leaving any query string unchanged:

```
example.com {
	rewrite * /index.html
}
```

Prefixing all requests with `/api`, preserving the rest of the URI, then reverse proxying to an app:

```
api.example.com {
	rewrite * /api{uri}
	reverse_proxy localhost:8080
}
```

Replace the query string on API requests with `a=b`, leaving the path unchanged:

```
example.com {
	rewrite * ?a=b
}
```

For only requests to `/api/`, preserve the existing query string and add a key-value pair:

```
example.com {
	rewrite /api/* ?{query}&a=b
}
```

Change both the path and query string, preserving the original query string while adding the original path as the `p` parameter:

```
example.com {
	rewrite * /index.php?{query}&p={path}
}
```
