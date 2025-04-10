Title: respond (Caddyfile directive) - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/directives/respond

Markdown Content:
Writes a hard-coded/static response to the client.

If the body is non-empty, this directive sets the `Content-Type` header if it is not already set. The default value is `text/plain; utf-8` unless the body is a valid JSON object or array, in which case it is set to `application/json`. For all other types of content, set the proper Content-Type explicitly using the [`header` directive](https://caddyserver.com/docs/caddyfile/directives/header).

Syntax
------

```
respond [<matcher>] <status>|<body> [<status>] {
	body <text>
	close
}
```

*   **<status\>** is the HTTP status code to write.
    
    If `103` (Early Hints), the response will be written without a body and the handler chain will continue. (HTTP `1xx` responses are informational, not final.)
    
    Default: `200`
    
*   **<body\>** is the response body to write.
    
*   **body** is an alternate way to provide a body; convenient if it is multiple lines.
    
*   **close** will close the client's connection to the server after writing the response.
    

To clarify, the first non-matcher argument can be either a 3-digit status code or a response body string. If it is a body, the next argument can be the status code.

Examples
--------

Write an empty 200 status with an empty body to all health checks, and a simple response body to all other requests:

```
example.com {
	respond /health-check 200
	respond "Hello, world!"
}
```

Write an error response and close the connection:

```
example.com {
	respond /secret/* "Access denied" 403 {
		close
	}
}
```

Write an HTML response, using [heredoc syntax](https://caddyserver.com/docs/caddyfile/concepts#heredocs) to control whitespace, and also setting the `Content-Type` header to match the response body:

```
example.com {
	header Content-Type text/html
	respond <<HTML
		<html>
			<head><title>Foo</title></head>
			<body>Foo</body>
		</html>
		HTML 200
}
```
