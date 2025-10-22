Title: Module http.handlers.replace_response - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.replace_response

Markdown Content:
There is more than one module named **Module http.handlers.replace_response**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.replace_response#docs "Direct link")
-------------------------------------------------------------------------------------------------------

`{▾	"replacements": [{▾		"search": "",		"search_regexp": "",		"replace": ""	}],	"stream": false}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/caddyserver/replace-response](https://github.com/caddyserver/replace-response)**

**Custom builds:**`xcaddy build --with github.com/caddyserver/replace-response`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.replace_response#docs "Direct link")
-------------------------------------------------------------------------------------------------------

http.handlers.replace_response manipulates response bodies by performing substring or regex replacements.

[🔗](https://caddyserver.com/docs/modules/http.handlers.replace_response#replacements)replacements
The list of replacements to make on the response body.

Replacement is either a substring or regular expression replacement to perform; precisely one must be specified, not both.

[🔗](https://caddyserver.com/docs/modules/http.handlers.replace_response#replacements/search)replacements/search
A substring to search for. Mutually exclusive with search_regexp.

[🔗](https://caddyserver.com/docs/modules/http.handlers.replace_response#replacements/search_regexp)replacements/search_regexp
A regular expression to search for. Mutually exclusive with search.

[🔗](https://caddyserver.com/docs/modules/http.handlers.replace_response#replacements/replace)replacements/replace
The replacement string/value. Required.

[🔗](https://caddyserver.com/docs/modules/http.handlers.replace_response#stream)stream
If true, perform replacements in a streaming fashion. This is more memory-efficient but can remove the Content-Length header since knowing the correct length is impossible without buffering, and getting it wrong can break HTTP/2 streams.
