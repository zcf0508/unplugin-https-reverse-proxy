Title: Module http.matchers.conneg - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.matchers.conneg

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.matchers.conneg**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.conneg#docs "Direct link")
---------------------------------------------------------------------------------------------

`{▾	"match_types": [""],	"match_languages": [""],	"match_charsets": [""],	"match_encodings": [""],	"force_type_query_string": "",	"force_language_query_string": "",	"force_charset_query_string": "",	"force_encoding_query_string": "",	"var_type": "",	"var_language": "",	"var_charset": "",	"var_encoding": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/mpilhlt/caddy-conneg](https://github.com/mpilhlt/caddy-conneg)**

**Custom builds:**`xcaddy build --with github.com/mpilhlt/caddy-conneg`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.conneg#docs "Direct link")
---------------------------------------------------------------------------------------------

http.matchers.conneg matches requests by comparing results of a content negotiation process to a (list of) value(s).

Lists of media types, languages, charsets, and encodings to match the request against can be given - and at least one of them MUST be specified.

OPTIONAL parameters are strings for identifying URL query string parameter keys that allow requests to override/skip the connection negotiation process and force a media type, a language, a charset or an encoding.

Some shorthand values for query string parameters translating to full media types (languages, encodings, etc.) are hardcoded in a variable called `aliases`: They presently cover `htm` and `html` for `text/html`, `rdf` for `application/rdf+xml`, `tei` and `xml` for `application/tei+xml`, and `pdf` for `application/pdf`. For instance, if `force_type_query_string` is set to `format`, a request uri ending in `foo.com?format=tei` will result in content type `application/tei+xml` and then succeed or not based on whether that content type is listed in `match_types`.

COMPATIBILITY NOTE: This module is still experimental and is not subject to Caddy's compatibility guarantee.

[🔗](https://caddyserver.com/docs/modules/http.matchers.conneg#match_types)match_types
List of content/mime types to match against ([IETF RFC 7231, section 5.3.2](https://datatracker.ietf.org/doc/html/rfc7231#section-5.3.2)). Default: Empty list

[🔗](https://caddyserver.com/docs/modules/http.matchers.conneg#match_languages)match_languages
List of language codes to match against ([IETF RFC 7231, section 5.3.5](https://datatracker.ietf.org/doc/html/rfc7231#section-5.3.5)). Default: Empty list

[🔗](https://caddyserver.com/docs/modules/http.matchers.conneg#match_charsets)match_charsets
List of character sets to match against ([IETF RFC 7231, section 5.3.3](https://datatracker.ietf.org/doc/html/rfc7231#section-5.3.3)). Default: Empty list

[🔗](https://caddyserver.com/docs/modules/http.matchers.conneg#match_encodings)match_encodings
List of encodings to match against ([IETF RFC 7231, section 5.3.4](https://datatracker.ietf.org/doc/html/rfc7231#section-5.3.4)). Default: Empty list

[🔗](https://caddyserver.com/docs/modules/http.matchers.conneg#force_type_query_string)force_type_query_string
Query string parameter key to override content negotiation. Default: ""

[🔗](https://caddyserver.com/docs/modules/http.matchers.conneg#force_language_query_string)force_language_query_string
Query string parameter key to override language negotiation. Default: ""

[🔗](https://caddyserver.com/docs/modules/http.matchers.conneg#force_charset_query_string)force_charset_query_string
Query string parameter key to override charset negotiation. Default: ""

[🔗](https://caddyserver.com/docs/modules/http.matchers.conneg#force_encoding_query_string)force_encoding_query_string
Query string parameter key to override encoding negotiation. Default: ""

[🔗](https://caddyserver.com/docs/modules/http.matchers.conneg#var_type)var_type
Variable name (will be prefixed with `conneg_`) to hold result of content negotiation. Default: ""

[🔗](https://caddyserver.com/docs/modules/http.matchers.conneg#var_language)var_language
Variable name (will be prefixed with `conneg_`) to hold result of language negotiation. Default: ""

[🔗](https://caddyserver.com/docs/modules/http.matchers.conneg#var_charset)var_charset
Variable name (will be prefixed with `conneg_`) to hold result of charset negotiation. Default: ""

[🔗](https://caddyserver.com/docs/modules/http.matchers.conneg#var_encoding)var_encoding
Variable name (will be prefixed with `conneg_`) to hold result of encoding negotiation. Default: ""
