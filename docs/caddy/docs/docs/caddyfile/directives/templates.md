Title: templates (Caddyfile directive) - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/directives/templates

Markdown Content:
Executes the response body as a [template](https://caddyserver.com/docs/modules/http.handlers.templates) document. Templates provide functional primitives for making simple dynamic pages. Features include HTTP subrequests, HTML file includes, Markdown rendering, JSON parsing, basic data structures, randomness, time, and more.

Syntax
------

```
templates [<matcher>] {
	mime    <types...>
	between <open_delim> <close_delim>
	root    <path>
}
```

*   **mime** are the MIME types the templates middleware will act on; any responses that do not have a qualifying `Content-Type` will not be evaluated as templates.
    
    Default: `text/html text/plain`.
    
*   **between** are the opening and closing delimiters for template actions. You can change them if they interfere with the rest of your document.
    
    Default: `{{ }}`.
    
*   **root** is the site root, when using functions that access the file system.
    
    Defaults to the site root set by the [`root`](https://caddyserver.com/docs/caddyfile/directives/root) directive, or the current working directory if not set.
    

Documentation for the built-in template functions can be found in [templates module](https://caddyserver.com/docs/modules/http.handlers.templates#docs).

Examples
--------

For a complete example of a site using templates to serve markdown, take a look at the source for [this very website](https://github.com/caddyserver/website)! Specifically, take a look at the [`Caddyfile`](https://github.com/caddyserver/website/blob/master/Caddyfile) and [`src/docs/index.html`](https://github.com/caddyserver/website/blob/master/src/docs/index.html).

Enable templates for a static site:

```
example.com {
	root * /srv
	templates
	file_server
}
```

To serve a simple static response using a template, make sure to set `Content-Type`:

```
example.com {
	header Content-Type text/plain
	templates
	respond `Current year is: {{now | date "2006"}}`
}
```
