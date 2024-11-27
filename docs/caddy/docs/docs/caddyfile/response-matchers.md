Title: Response matchers (Caddyfile) - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/response-matchers

Markdown Content:
**Response matchers** can be used to filter (or classify) responses by specific criteria.

These typically only appear as config inside of certain other directives, to make decisions on the response as it's being written out to the client.

*   [Syntax](https://caddyserver.com/docs/caddyfile/response-matchers#syntax)
*   [Matchers](https://caddyserver.com/docs/caddyfile/response-matchers#matchers)
    *   [status](https://caddyserver.com/docs/caddyfile/response-matchers#status)
    *   [header](https://caddyserver.com/docs/caddyfile/response-matchers#header)

Syntax[🔗](https://caddyserver.com/docs/caddyfile/response-matchers#syntax "Direct link")
-----------------------------------------------------------------------------------------

```
@name {
	status <code...>
	header <field> [<value>]
}
```

Matchers[🔗](https://caddyserver.com/docs/caddyfile/response-matchers#matchers "Direct link")
---------------------------------------------------------------------------------------------

### status[🔗](https://caddyserver.com/docs/caddyfile/response-matchers#status "Direct link")

```
status <code...>
```

By HTTP status code.

*   **<code...\>** is a list of HTTP status codes. Special cases are strings like `2xx` and `3xx`, which match against all status codes in the range of `200`\-`299` and `300`\-`399`, respectively.

#### Example:[🔗](https://caddyserver.com/docs/caddyfile/response-matchers#example "Direct link")

```
@success status 2xx
```

```
header <field> [<value>]
```

By response header fields.

*   `<field>` is the name of the HTTP header field to check.
    *   If prefixed with `!`, the field must not exist to match (omit value arg).
*   `<value>` is the value the field must have to match.
    *   If prefixed with `*`, it performs a fast suffix match (appears at the end).
    *   If suffixed with `*`, it performs a fast prefix match (appears at the start).
    *   If enclosed by `*`, it performs a fast substring match (appears anywhere).
    *   Otherwise, it is a fast exact match.

Different header fields within the same set are AND-ed. Multiple values per field are OR'ed.

Note that header fields may be repeated and have different values. Backend applications MUST consider that header field values are arrays, not singular values, and Caddy does not interpret meaning in such quandaries.

#### Example:[🔗](https://caddyserver.com/docs/caddyfile/response-matchers#example-1 "Direct link")

Match responses with the `Foo` header containing the value `bar`:

```
@upgrade header Foo *bar*
```

Match responses with the `Foo` header having the value `bar` OR `baz`:

```
@foo {
	header Foo bar
	header Foo baz
}
```

Match responses that do not have the `Foo` header field at all:

```
@not_foo header !Foo
```
