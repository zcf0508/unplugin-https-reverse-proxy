Title: Module http.handlers.rewrite - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.rewrite

Markdown Content:
http.handlers.rewrite is a middleware which can rewrite/mutate HTTP requests.

The Method and URI properties are "setters" (the request URI will be overwritten with the given values). Other properties are "modifiers" (they modify existing values in a differentiable way). It is atypical to combine the use of setters and modifiers in a single rewrite.

To ensure consistent behavior, prefix and suffix stripping is performed in the URL-decoded (unescaped, normalized) space by default except for the specific bytes where an escape sequence is used in the prefix or suffix pattern.

For all modifiers, paths are cleaned before being modified so that multiple, consecutive slashes are collapsed into a single slash, and dot elements are resolved and removed. In the special case of a prefix, suffix, or substring containing "//" (repeated slashes), slashes will not be merged while cleaning the path so that the rewrite can be interpreted literally.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#method)method
Changes the request's HTTP verb.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#uri)uri
Changes the request's URI, which consists of path and query string. Only components of the URI that are specified will be changed. For example, a value of "/foo.html" or "foo.html" will only change the path and will preserve any existing query string. Similarly, a value of "?a=b" will only change the query string and will not affect the path. Both can also be changed: "/foo?a=b" - this sets both the path and query string at the same time.

You can also use placeholders. For example, to preserve the existing query string, you might use: "?{http.request.uri.query}&a=b". Any key-value pairs you add to the query string will not overwrite existing values (individual pairs are append-only).

To clear the query string, explicitly set an empty one: "?"

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#strip_path_prefix)strip_path_prefix
Strips the given prefix from the beginning of the URI path. The prefix should be written in normalized (unescaped) form, but if an escaping (`%xx`) is used, the path will be required to have that same escape at that position in order to match.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#strip_path_suffix)strip_path_suffix
Strips the given suffix from the end of the URI path. The suffix should be written in normalized (unescaped) form, but if an escaping (`%xx`) is used, the path will be required to have that same escape at that position in order to match.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#uri_substring)uri_substring
Performs substring replacements on the URI.

substrReplacer describes either a simple and fast substring replacement.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#uri_substring/find)uri_substring/find
A substring to find. Supports placeholders.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#uri_substring/replace)uri_substring/replace
The substring to replace with. Supports placeholders.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#uri_substring/limit)uri_substring/limit
Maximum number of replacements per string. Set to <= 0 for no limit (default).

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#path_regexp)path_regexp
Performs regular expression replacements on the URI path.

regexReplacer describes a replacement using a regular expression.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#path_regexp/find)path_regexp/find
The regular expression to find.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#path_regexp/replace)path_regexp/replace
The substring to replace with. Supports placeholders and regular expression capture groups.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#query)query
Mutates the query string of the URI.

queryOps describes the operations to perform on query keys: add, set, rename and delete.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#query/rename)query/rename
Renames a query key from Key to Val, without affecting the value.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#query/rename/key)query/rename/key
A key in the query string. Note that query string keys may appear multiple times.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#query/rename/val)query/rename/val
The value for the given operation; for add and set, this is simply the value of the query, and for rename this is the query key to rename to.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#query/set)query/set
Sets query parameters; overwrites a query key with the given value.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#query/set/key)query/set/key
A key in the query string. Note that query string keys may appear multiple times.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#query/set/val)query/set/val
The value for the given operation; for add and set, this is simply the value of the query, and for rename this is the query key to rename to.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#query/add)query/add
Adds query parameters; does not overwrite an existing query field, and only appends an additional value for that key if any already exist.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#query/add/key)query/add/key
A key in the query string. Note that query string keys may appear multiple times.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#query/add/val)query/add/val
The value for the given operation; for add and set, this is simply the value of the query, and for rename this is the query key to rename to.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#query/replace)query/replace
Replaces query parameters.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#query/replace/key)query/replace/key
The key to replace in the query string.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#query/replace/search)query/replace/search
The substring to search for.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#query/replace/search_regexp)query/replace/search_regexp
The regular expression to search with.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#query/replace/replace)query/replace/replace
The string with which to replace matches.

[🔗](https://caddyserver.com/docs/modules/http.handlers.rewrite#query/delete)query/delete
Deletes a given query key by name.
