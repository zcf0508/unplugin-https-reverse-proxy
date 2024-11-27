Title: Placeholder Support - Caddy Documentation

URL Source: https://caddyserver.com/docs/extending-caddy/placeholders

Markdown Content:
Placeholders[🔗](https://caddyserver.com/docs/extending-caddy/placeholders#placeholders "Direct link")
------------------------------------------------------------------------------------------------------

In Caddy, placeholders are processed by each individual plugin as needed; they do not automatically work everywhere.

This means that if you wish for your plugin to support placeholders, you must explicitly add support for them.

If you are not yet familiar with placeholders, start by [reading here](https://caddyserver.com/docs/conventions#placeholders)!

Placeholders Overview[🔗](https://caddyserver.com/docs/extending-caddy/placeholders#placeholders-overview "Direct link")
------------------------------------------------------------------------------------------------------------------------

[Placeholders](https://caddyserver.com/docs/conventions#placeholders) are a string in the format `{foo.bar}` used as dynamic configuration values, which is later evaluated at runtime.

Caddyfile [environment variables substitutions](https://caddyserver.com/docs/caddyfile/concepts#environment-variables) which start with a dollar sign like `{$FOO}` are evaluated at Caddyfile-parse time, and do not need to be handled by your plugin. These are _not_ placeholders, despite sharing the same `{ }` syntax.

It is therefore important to understand that `{env.HOST}` (a [global placeholder](https://caddyserver.com/docs/conventions#placeholders)) is inherently different from `{$HOST}` (a Caddyfile env-var substitution).

As an example, see the following Caddyfile:

```
:8080 {
	respond {$HOST} 200
}

:8081 {
	respond {env.HOST} 200
}
```

When you adapt this Caddyfile to JSON with `HOST=example caddy adapt` you will get:

```
{
  "apps": {
    "http": {
      "servers": {
        "srv0": {
          "listen": [":8080"],
          "routes": [
            {
              "handle": [
                {
                  "body": "example",
                  "handler": "static_response",
                  "status_code": 200
                }
              ]
            }
          ]
        },
        "srv1": {
          "listen": [":8081"],
          "routes": [
            {
              "handle": [
                {
                  "body": "{env.HOST}",
                  "handler": "static_response",
                  "status_code": 200
                }
              ]
            }
          ]
        }
      }
    }
  }
}
```

In particular, look at the `"body"` field in both `srv0` and `srv1`.

Since `srv0` used `{$HOST}` (Caddyfile env-var substitution), the value became `example`, as it was processed during Caddyfile parse time when producing the JSON config.

Since `srv1` used `{env.HOST}` (a global placeholder), it remains untouched when adapting to JSON.

This does mean that users writing JSON config (not using Caddyfile) cannot use the `{$ENV}` syntax. For that reason, it's important that plugin authors implement support for replacing placeholders when the config is provisioned. This is explained below.

Implementing placeholder support[🔗](https://caddyserver.com/docs/extending-caddy/placeholders#implementing-placeholder-support "Direct link")
----------------------------------------------------------------------------------------------------------------------------------------------

You should not process placeholders in [`UnmarshalCaddyfile()`](https://caddyserver.com/docs/extending-caddy/caddyfile). Instead, placeholders should be replaced later, either in the [`Provision()`](https://caddyserver.com/docs/extending-caddy#provisioning) step, or during your module's execution (e.g. `ServeHTTP()` for HTTP handlers, `Match()` for matchers, etc.), using a `caddy.Replacer`.

### Examples[🔗](https://caddyserver.com/docs/extending-caddy/placeholders#examples "Direct link")

Here, we are using a newly constructed replacer to process placeholders. It has access to [global placeholders](https://caddyserver.com/docs/conventions#placeholders) such as `{env.HOST}`, but _not_ HTTP placeholders such as `{http.request.uri}` because provisoning happens when the config is loaded, and not during a request.

```
func (g *Gizmo) Provision(ctx caddy.Context) error {
	repl := caddy.NewReplacer()
	g.Name = repl.ReplaceAll(g.Name,"")
	return nil
}
```

Here, we fetch the replacer from the request context `r.Context()` during `ServeHTTP`. This replacer has access to both global placeholders _and_ per-request HTTP placeholders such as `{http.request.uri}`.

```
func (g *Gizmo) ServeHTTP(w http.ResponseWriter, r *http.Request, next caddyhttp.Handler) error {
	repl := r.Context().Value(caddy.ReplacerCtxKey).(*caddy.Replacer)
	_, err := w.Write([]byte(repl.ReplaceAll(g.Name,"")))
	if err != nil {
		return err
	}
	return next.ServeHTTP(w, r)
}
```
