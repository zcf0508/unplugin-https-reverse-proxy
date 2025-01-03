Title: tracing (Caddyfile directive) - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/directives/tracing

Markdown Content:
Enables integration with OpenTelemetry tracing facilities, using [`opentelemetry-go` ![Image 8](https://caddyserver.com/old/resources/images/external-link.svg)](https://github.com/open-telemetry/opentelemetry-go) .

When enabled, it will propagate an existing trace context or initialize a new one.

It uses [gRPC](https://github.com/grpc/) as an exporter protocol and W3C [tracecontext](https://www.w3.org/TR/trace-context/) and [baggage](https://www.w3.org/TR/baggage/) as propagators.

The trace ID is added to [access logs](https://caddyserver.com/docs/caddyfile/directives/log) as the standard `traceID` field. Additionally, the `{http.vars.trace_id}` placeholder is made available, for example to add the ID to a (`request_header`)\[request\_header\] to pass it to your app.

Syntax
------

```
tracing {
	[span <span_name>]
}
```

*   **<span\_name\>** is a span name. Please see span [naming guidelines](https://github.com/open-telemetry/opentelemetry-specification/blob/v1.7.0/specification/trace/api.md).
    
    [Placeholders](https://caddyserver.com/docs/caddyfile/concepts#placeholders) may be used in span names; keep in mind that tracing happens as early as possible, so only request placeholders may be used, and not response placeholders.
    

Configuration
-------------

### Environment variables

It can be configured using the environment variables defined by the [OpenTelemetry Environment Variable Specification](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md).

For the exporter configuration details, please see [spec](https://github.com/open-telemetry/opentelemetry-specification/blob/v1.7.0/specification/protocol/exporter.md).

For example:

```
export OTEL_EXPORTER_OTLP_HEADERS="myAuthHeader=myToken,anotherHeader=value"
export OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=https://my-otlp-endpoint:55680
```

Examples
--------

Here is a **Caddyfile** example:

```
example.com {
	handle /api* {
		tracing {
			span api
		}
		request_header X-Trace-Id {http.vars.trace_id}
		reverse_proxy localhost:8081
	}

	handle {
		tracing {
			span app
		}
		reverse_proxy localhost:8080
	}
}
```
