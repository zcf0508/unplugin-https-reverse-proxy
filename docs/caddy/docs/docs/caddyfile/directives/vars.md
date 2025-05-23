Title: vars (Caddyfile directive) - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/directives/vars

Markdown Content:
Sets one or more variables to a particular value, to be used later in the request handling chain.

The primary way to access variables is with placeholders, which have the form `{vars.variable_name}`, or with the [`vars`](https://caddyserver.com/docs/caddyfile/matchers#vars) and [`vars_regexp`](https://caddyserver.com/docs/caddyfile/matchers#vars_regexp) request matchers.

You may use variables with the [`templates`](https://caddyserver.com/docs/caddyfile/directives/templates) directive using the `placeholder` function, for example: `{{placeholder "http.vars.variable_name"}}`

As a special case, it's possible to override the variable named `http.auth.user.id`, which is stored in the replacer, to update the `user_id` field in [access logs](https://caddyserver.com/docs/caddyfile/directives/log).

Syntax
------

```
vars [<matcher>] [<name> <value>] {
    <name> <value>
    ...
}
```

*   **<name\>** is the variable name to set.
    
*   **<value\>** is the value of the variable.
    
    The value will be type converted if possible; `true` and `false` will be converted to boolean types, and numeric values will be converted to integer or float accordingly. To avoid this conversion and keep them as strings, you may wrap them with [quotes](https://caddyserver.com/docs/caddyfile/concepts#tokens-and-quotes).
    

Examples
--------

To set a single variable, the value being conditional based on the request path, then responding with the value:

```
example.com {
	vars /foo* isFoo "yep"
	vars isFoo "nope"

	respond {vars.isFoo}
}
```

To set multiple variables, each converted to the appropriate scalar type:

```
vars {
	# boolean
	abc true

	# integer
	def 1

	# float
	ghi 2.3

	# string
	jkl "example"
}
```
