Title: encode (Caddyfile directive) - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/directives/encode

Markdown Content:
Encodes responses using the configured encoding(s). A typical use for encoding is compression.

Syntax
------

```
encode [<matcher>] <formats...> {
	# encoding formats
	gzip [<level>]
	zstd [<level>]
	
	minimum_length <length>

	match {
		status <code...>
		header <field> [<value>]
	}
}
```

*   **<formats...\>** is the list of encoding formats to enable. If multiple encodings are enabled, the encoding is chosen based the request's Accept-Encoding header; if the client has no strong preference (q-factor), then the first supported encoding is used.
    
*   **gzip** enables Gzip compression, optionally at a specified level.
    
*   **zstd** enables Zstandard compression, optionally at a specified level (possible values = default, fastest, better, best). The default compression level is roughly equivalent to the default Zstandard mode (level 3).
    
*   **minimum\_length** the minimum number of bytes a response should have to be encoded (default: 512).
    
*   **match** is a [response matcher](https://caddyserver.com/docs/caddyfile/response-matchers). Only matching responses are encoded. The default looks like this:
    
    ```
    match {
    	header Content-Type application/atom+xml*
    	header Content-Type application/eot*
    	header Content-Type application/font*
    	header Content-Type application/geo+json*
    	header Content-Type application/graphql+json*
    	header Content-Type application/javascript*
    	header Content-Type application/json*
    	header Content-Type application/ld+json*
    	header Content-Type application/manifest+json*
    	header Content-Type application/opentype*
    	header Content-Type application/otf*
    	header Content-Type application/rss+xml*
    	header Content-Type application/truetype*
    	header Content-Type application/ttf*
    	header Content-Type application/vnd.api+json*
    	header Content-Type application/vnd.ms-fontobject*
    	header Content-Type application/wasm*
    	header Content-Type application/x-httpd-cgi*
    	header Content-Type application/x-javascript*
    	header Content-Type application/x-opentype*
    	header Content-Type application/x-otf*
    	header Content-Type application/x-perl*
    	header Content-Type application/x-protobuf*
    	header Content-Type application/x-ttf*
    	header Content-Type application/xhtml+xml*
    	header Content-Type application/xml*
    	header Content-Type font/*
    	header Content-Type image/svg+xml*
    	header Content-Type image/vnd.microsoft.icon*
    	header Content-Type image/x-icon*
    	header Content-Type multipart/bag*
    	header Content-Type multipart/mixed*
    	header Content-Type text/*
    }
    ```
    

Examples
--------

Enable Gzip compression:

```
encode gzip
```

Enable Zstandard and Gzip compression (with Zstandard implicitly preferred, since it is first):

```
encode zstd gzip
```

And in a full site, compressing static files served by [`file_server`](https://caddyserver.com/docs/caddyfile/directives/file_server):

```
example.com {
	root * /srv
	encode zstd gzip
	file_server
}
```
