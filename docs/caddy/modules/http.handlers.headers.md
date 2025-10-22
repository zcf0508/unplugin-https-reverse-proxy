Title: Module http.handlers.headers - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.headers

Markdown Content:
http.handlers.headers is a middleware which modifies request and response headers.

Changes to headers are applied immediately, except for the response headers when Deferred is true or when Required is set. In those cases, the changes are applied when the headers are written to the response. Note that deferred changes do not take effect if an error occurs later in the middleware chain.

Properties in this module accept placeholders.

Response header operations can be conditioned upon response status code and/or other header values.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#request)request
HeaderOps defines manipulations for HTTP headers.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#request/add)request/add
Adds HTTP headers; does not replace any existing header fields.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#request/set)request/set
Sets HTTP headers; replaces existing header fields.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#request/delete)request/delete
Names of HTTP header fields to delete. Basic wildcards are supported:

*   Start with `*` for all field names with the given suffix;
*   End with `*` for all field names with the given prefix;
*   Start and end with `*` for all field names containing a substring.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#request/replace)request/replace
Performs in-situ substring replacements of HTTP headers. Keys are the field names on which to perform the associated replacements. If the field name is `*`, the replacements are performed on all header fields.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#request/replace/search)request/replace/search
The substring to search for.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#request/replace/search_regexp)request/replace/search_regexp
The regular expression to search with.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#request/replace/replace)request/replace/replace
The string with which to replace matches.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#response)response
RespHeaderOps defines manipulations for response headers.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#response/add)response/add
Adds HTTP headers; does not replace any existing header fields.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#response/set)response/set
Sets HTTP headers; replaces existing header fields.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#response/delete)response/delete
Names of HTTP header fields to delete. Basic wildcards are supported:

*   Start with `*` for all field names with the given suffix;
*   End with `*` for all field names with the given prefix;
*   Start and end with `*` for all field names containing a substring.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#response/replace)response/replace
Performs in-situ substring replacements of HTTP headers. Keys are the field names on which to perform the associated replacements. If the field name is `*`, the replacements are performed on all header fields.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#response/replace/search)response/replace/search
The substring to search for.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#response/replace/search_regexp)response/replace/search_regexp
The regular expression to search with.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#response/replace/replace)response/replace/replace
The string with which to replace matches.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#response/require)response/require
If set, header operations will be deferred until they are written out and only performed if the response matches these criteria.

ResponseMatcher is a type which can determine if an HTTP response matches some criteria.

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#response/require/status_code)response/require/status_code
If set, one of these status codes would be required. A one-digit status can be used to represent all codes in that class (e.g. 3 for all 3xx codes).

If set, each header specified must be one of the specified values, with the same logic used by the [request header matcher](https://caddyserver.com/docs/json/apps/http/servers/routes/match/header/).

[🔗](https://caddyserver.com/docs/modules/http.handlers.headers#response/deferred)response/deferred
If true, header operations will be deferred until they are written out. Superseded if Require is set. Usually you will need to set this to true if any fields are being deleted.
