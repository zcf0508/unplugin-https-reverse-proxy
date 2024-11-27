Title: Caddyfile Directives - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/directives

Markdown Content:
Directives are functional keywords that appear within site [blocks](https://caddyserver.com/docs/caddyfile/concepts#blocks). Sometimes, they may open blocks of their own which can contain _subdirectives_, but directives **cannot** be used within other directives unless noted. For example, you can't use `basic_auth` inside a `file_server` block, because `file_server` does not know how to do authentication. However, you _may_ use some directives within special directive blocks like `handle` and `route` because they are specifically designed to group HTTP handler directives.

*   [Syntax](https://caddyserver.com/docs/caddyfile/directives#syntax)
*   [Directive Order](https://caddyserver.com/docs/caddyfile/directives#directive-order)
*   [Sorting Algorithm](https://caddyserver.com/docs/caddyfile/directives#sorting-algorithm)

The following directives come standard with Caddy, and can be used in the HTTP Caddyfile:

| Directive | Description |
| --- | --- |
| **[abort](https://caddyserver.com/docs/caddyfile/directives/abort)** | Aborts the HTTP request |
| **[acme\_server](https://caddyserver.com/docs/caddyfile/directives/acme_server)** | An embedded ACME server |
| **[basic\_auth](https://caddyserver.com/docs/caddyfile/directives/basic_auth)** | Enforces HTTP Basic Authentication |
| **[bind](https://caddyserver.com/docs/caddyfile/directives/bind)** | Customize the server's socket address |
| **[encode](https://caddyserver.com/docs/caddyfile/directives/encode)** | Encodes (usually compresses) responses |
| **[error](https://caddyserver.com/docs/caddyfile/directives/error)** | Trigger an error |
| **[file\_server](https://caddyserver.com/docs/caddyfile/directives/file_server)** | Serve files from disk |
| **[forward\_auth](https://caddyserver.com/docs/caddyfile/directives/forward_auth)** | Delegate authentication to an external service |
| **[fs](https://caddyserver.com/docs/caddyfile/directives/fs)** | Set the file system to use for file I/O |
| **[handle](https://caddyserver.com/docs/caddyfile/directives/handle)** | A mutually-exclusive group of directives |
| **[handle\_errors](https://caddyserver.com/docs/caddyfile/directives/handle_errors)** | Defines routes for handling errors |
| **[handle\_path](https://caddyserver.com/docs/caddyfile/directives/handle_path)** | Like handle, but strips path prefix |
| **[header](https://caddyserver.com/docs/caddyfile/directives/header)** | Sets or removes response headers |
| **[import](https://caddyserver.com/docs/caddyfile/directives/import)** | Include snippets or files |
| **[intercept](https://caddyserver.com/docs/caddyfile/directives/intercept)** | Intercept responses written by other handlers |
| **[invoke](https://caddyserver.com/docs/caddyfile/directives/invoke)** | Invoke a named route |
| **[log](https://caddyserver.com/docs/caddyfile/directives/log)** | Enables access/request logging |
| **[log\_append](https://caddyserver.com/docs/caddyfile/directives/log_append)** | Append a field to the access log |
| **[log\_skip](https://caddyserver.com/docs/caddyfile/directives/log_skip)** | Skip access logging for matched requests |
| **[log\_name](https://caddyserver.com/docs/caddyfile/directives/log_name)** | Override the logger name(s) to write to |
| **[map](https://caddyserver.com/docs/caddyfile/directives/map)** | Maps an input value to one or more outputs |
| **[method](https://caddyserver.com/docs/caddyfile/directives/method)** | Change the HTTP method internally |
| **[metrics](https://caddyserver.com/docs/caddyfile/directives/metrics)** | Configures the Prometheus metrics exposition endpoint |
| **[php\_fastcgi](https://caddyserver.com/docs/caddyfile/directives/php_fastcgi)** | Serve PHP sites over FastCGI |
| **[push](https://caddyserver.com/docs/caddyfile/directives/push)** | Push content to the client using HTTP/2 server push |
| **[redir](https://caddyserver.com/docs/caddyfile/directives/redir)** | Issues an HTTP redirect to the client |
| **[request\_body](https://caddyserver.com/docs/caddyfile/directives/request_body)** | Manipulates request body |
| **[request\_header](https://caddyserver.com/docs/caddyfile/directives/request_header)** | Manipulates request headers |
| **[respond](https://caddyserver.com/docs/caddyfile/directives/respond)** | Writes a hard-coded response to the client |
| **[reverse\_proxy](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy)** | A powerful and extensible reverse proxy |
| **[rewrite](https://caddyserver.com/docs/caddyfile/directives/rewrite)** | Rewrites the request internally |
| **[root](https://caddyserver.com/docs/caddyfile/directives/root)** | Set the path to the site root |
| **[route](https://caddyserver.com/docs/caddyfile/directives/route)** | A group of directives treated literally as single unit |
| **[templates](https://caddyserver.com/docs/caddyfile/directives/templates)** | Execute templates on the response |
| **[tls](https://caddyserver.com/docs/caddyfile/directives/tls)** | Customize TLS settings |
| **[tracing](https://caddyserver.com/docs/caddyfile/directives/tracing)** | Integration with OpenTelemetry tracing |
| **[try\_files](https://caddyserver.com/docs/caddyfile/directives/try_files)** | Rewrite that depends on file existence |
| **[uri](https://caddyserver.com/docs/caddyfile/directives/uri)** | Manipulate the URI |
| **[vars](https://caddyserver.com/docs/caddyfile/directives/vars)** | Set arbitrary variables |

Syntax[🔗](https://caddyserver.com/docs/caddyfile/directives#syntax "Direct link")
----------------------------------------------------------------------------------

The syntax of each directive will look something like this:

```
directive [<matcher>] <args...> {
	subdirective [<args...>]
}
```

The `<carets>` indicate tokens to be substituted by actual values.

The`[brackets]` indicate optional parameters.

The ellipses `...` indicates a continuation, i.e. one or more parameters or lines.

Subdirectives are typically optional unless documented otherwise, even though they don't appear in `[brackets]`.

### Matchers[🔗](https://caddyserver.com/docs/caddyfile/directives#matchers "Direct link")

Most—but not all—directives accept [matcher tokens](https://caddyserver.com/docs/caddyfile/matchers#syntax), which let you filter requests. Matcher tokens are usually optional. Directives support matchers if you see this in a directive's syntax:

```
[<matcher>]
```

Because matcher tokens all work the same, the various possibilities for the matcher token will not be described on every page, to reduce duplication. Instead, refer to the [matcher documentation](https://caddyserver.com/docs/caddyfile/matchers) for a detailed explanation of the syntax.

Directive order[🔗](https://caddyserver.com/docs/caddyfile/directives#directive-order "Direct link")
----------------------------------------------------------------------------------------------------

Many directives manipulate the HTTP handler chain. The order in which those directives are evaluated matters, so a default ordering is hard-coded into Caddy.

You can override/customize this ordering by using the [`order` global option](https://caddyserver.com/docs/caddyfile/options#order) or the [`route` directive](https://caddyserver.com/docs/caddyfile/directives/route).

```
tracing

map
vars
fs
root
log_append
log_skip
log_name

header
copy_response_headers # only in reverse_proxy's handle_response block
request_body

redir

# incoming request manipulation
method
rewrite
uri
try_files

# middleware handlers; some wrap responses
basic_auth
forward_auth
request_header
encode
push
intercept
templates

# special routing & dispatching directives
invoke
handle
handle_path
route

# handlers that typically respond to requests
abort
error
copy_response # only in reverse_proxy's handle_response block
respond
metrics
reverse_proxy
php_fastcgi
file_server
acme_server
```

Sorting algorithm[🔗](https://caddyserver.com/docs/caddyfile/directives#sorting-algorithm "Direct link")
--------------------------------------------------------------------------------------------------------

For ease of use, the Caddyfile adapter sorts directives according to the following rules:

*   Differently named directives are sorted by their position in the [default order](https://caddyserver.com/docs/caddyfile/directives#directive-order). The default order can be overridden with the [`order` global option](https://caddyserver.com/docs/caddyfile/options). Directives from plugins _do not_ have an order, so the [`order`](https://caddyserver.com/docs/caddyfile/options) global option or the [`route`](https://caddyserver.com/docs/caddyfile/directives/route) directive should be used to set one.
    
*   Same-named directives are sorted according to their [matchers](https://caddyserver.com/docs/caddyfile/matchers#syntax).
    
    *   The highest priority is a directive with a single [path matcher](https://caddyserver.com/docs/caddyfile/matchers#path-matchers).
        
        Path matchers are sorted by specificity, from most specific to least specific.
        
        In general, this is performed by sorting by the length of the path matcher. There is one exception where if the path ends in a `*` and the paths of the two matchers are otherwise the same, the matcher with no `*` is considered more specific and sorted higher.
        
        For example:
        
        *   `/foobar` is more specific than `/foo`
        *   `/foo` is more specific than `/foo*`
        *   `/foo/*` is more specific than `/foo*`
    *   A directive with any other matcher is sorted next, in the order it appears in the Caddyfile.
        
        This includes path matchers with multiple values, and [named matchers](https://caddyserver.com/docs/caddyfile/matchers#named-matchers).
        
    *   A directive with no matcher (i.e. matching all requests) is sorted last.
        
*   The [`vars`](https://caddyserver.com/docs/caddyfile/directives/vars) directive has its ordering by matcher reversed, because it involves setting values which can overwrite eachother, so the most specific matcher should be evaluated last.
    
*   The contents of the [`route`](https://caddyserver.com/docs/caddyfile/directives/route) directive ignores all the above rules, and preserves the order the directives appear within.
