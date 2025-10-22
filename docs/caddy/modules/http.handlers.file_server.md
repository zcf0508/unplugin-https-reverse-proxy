Title: Module http.handlers.file_server - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.file_server

Markdown Content:
http.handlers.file_server implements a handler that serves static files.

The path of the file to serve is constructed by joining the site root and the sanitized request path. Any and all files within the root and links with targets outside the site root may therefore be accessed. For example, with a site root of `/www`, requests to `/foo/bar.txt` will serve the file at `/www/foo/bar.txt`.

The request path is sanitized using the Go standard library's path.Clean() function ([https://pkg.go.dev/path#Clean](https://pkg.go.dev/path#Clean)) before being joined to the root. Request paths must be valid and well-formed.

For requests that access directories instead of regular files, Caddy will attempt to serve an index file if present. For example, a request to `/dir/` will attempt to serve `/dir/index.html` if it exists. The index file names to try are configurable. If a requested directory does not have an index file, Caddy writes a 404 response. Alternatively, file browsing can be enabled with the "browse" parameter which shows a list of files when directories are requested if no index file is present. If "browse" is enabled, Caddy may serve a JSON array of the directory listing when the `Accept` header mentions `application/json` with the following structure:

```
[{
    "name": "",
    "size": 0,
    "url": "",
    "mod_time": "",
    "mode": 0,
    "is_dir": false,
    "is_symlink": false
}]
```

with the `url` being relative to the request path and `mod_time` in the RFC 3339 format with sub-second precision. For any other value for the `Accept` header, the respective browse template is executed with `Content-Type: text/html`.

By default, this handler will canonicalize URIs so that requests to directories end with a slash, but requests to regular files do not. This is enforced with HTTP redirects automatically and can be disabled. Canonicalization redirects are not issued, however, if a URI rewrite modified the last component of the path (the filename).

This handler sets the Etag and Last-Modified headers for static files. It does not perform MIME sniffing to determine Content-Type based on contents, but does use the extension (if known); see the Go docs for details: [https://pkg.go.dev/mime#TypeByExtension](https://pkg.go.dev/mime#TypeByExtension)

The file server properly handles requests with If-Match, If-Unmodified-Since, If-Modified-Since, If-None-Match, Range, and If-Range headers. It includes the file's modification time in the Last-Modified header of the response.

[🔗](https://caddyserver.com/docs/modules/http.handlers.file_server#fs)fs
The file system implementation to use. By default, Caddy uses the local disk file system.

if a non default filesystem is used, it must be first be registered in the globals section.

[🔗](https://caddyserver.com/docs/modules/http.handlers.file_server#root)root
The path to the root of the site. Default is `{http.vars.root}` if set, or current working directory otherwise. This should be a trusted value.

Note that a site root is not a sandbox. Although the file server does sanitize the request URI to prevent directory traversal, files (including links) within the site root may be directly accessed based on the request path. Files and folders within the root should be secure and trustworthy.

[🔗](https://caddyserver.com/docs/modules/http.handlers.file_server#hide)hide
A list of files or folders to hide; the file server will pretend as if they don't exist. Accepts globular patterns like `*.ext` or `/foo/*/bar` as well as placeholders. Because site roots can be dynamic, this list uses file system paths, not request paths. To clarify, the base of relative paths is the current working directory, NOT the site root.

Entries without a path separator (`/` or `\` depending on OS) will match any file or directory of that name regardless of its path. To hide only a specific file with a name that may not be unique, always use a path separator. For example, to hide all files or folder trees named "hidden", put "hidden" in the list. To hide only ./hidden, put "./hidden" in the list.

When possible, all paths are resolved to their absolute form before comparisons are made. For maximum clarity and explictness, use complete, absolute paths; or, for greater portability, use relative paths instead.

[🔗](https://caddyserver.com/docs/modules/http.handlers.file_server#index_names)index_names
The names of files to try as index files if a folder is requested. Default: index.html, index.txt.

[🔗](https://caddyserver.com/docs/modules/http.handlers.file_server#browse)browse
Enables file listings if a directory was requested and no index file is present.

Browse configures directory browsing.

[🔗](https://caddyserver.com/docs/modules/http.handlers.file_server#browse/template_file)browse/template_file
Filename of the template to use instead of the embedded browse template.

[🔗](https://caddyserver.com/docs/modules/http.handlers.file_server#browse/reveal_symlinks)browse/reveal_symlinks
Determines whether or not targets of symlinks should be revealed.

[🔗](https://caddyserver.com/docs/modules/http.handlers.file_server#browse/sort)browse/sort
Override the default sort. It includes the following options:

*   sort_by: name(default), namedirfirst, size, time
*   order: asc(default), desc eg.:
*   `sort time desc` will sort by time in descending order
*   `sort size` will sort by size in ascending order The first option must be `sort_by` and the second option must be `order` (if exists).

[🔗](https://caddyserver.com/docs/modules/http.handlers.file_server#browse/file_limit)browse/file_limit
FileLimit limits the number of up to n DirEntry values in directory order.

[🔗](https://caddyserver.com/docs/modules/http.handlers.file_server#canonical_uris)canonical_uris
Use redirects to enforce trailing slashes for directories, or to remove trailing slash from URIs for files. Default is true.

Canonicalization will not happen if the last element of the request's path (the filename) is changed in an internal rewrite, to avoid clobbering the explicit rewrite with implicit behavior.

[🔗](https://caddyserver.com/docs/modules/http.handlers.file_server#status_code)status_code
Override the status code written when successfully serving a file. Particularly useful when explicitly serving a file as display for an error, like a 404 page. A placeholder may be used. By default, the status code will typically be 200, or 206 for partial content.

WeakString is a type that unmarshals any JSON value as a string literal, with the following exceptions:

1.   actual string values are decoded as strings; and
2.   null is decoded as empty string;

and provides methods for getting the value as various primitive types. However, using this type removes any type safety as far as deserializing JSON is concerned.

[🔗](https://caddyserver.com/docs/modules/http.handlers.file_server#pass_thru)pass_thru
If pass-thru mode is enabled and a requested file is not found, it will invoke the next handler in the chain instead of returning a 404 error. By default, this is false (disabled).

[🔗](https://caddyserver.com/docs/modules/http.handlers.file_server#precompressed)precompressed
Selection of encoders to use to check for precompressed files.

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

Fulfilled by modules in namespace: **http.precompressed**

*   [br](https://caddyserver.com/docs/modules/http.precompressed.br)
*   [gzip](https://caddyserver.com/docs/modules/http.precompressed.gzip)
*   [zstd](https://caddyserver.com/docs/modules/http.precompressed.zstd)

[🔗](https://caddyserver.com/docs/modules/http.handlers.file_server#precompressed_order)precompressed_order
If the client has no strong preference (q-factor), choose these encodings in order. If no order specified here, the first encoding from the Accept-Encoding header that both client and server support is used

[🔗](https://caddyserver.com/docs/modules/http.handlers.file_server#etag_file_extensions)etag_file_extensions
List of file extensions to try to read Etags from. If set, file Etags will be read from sidecar files with any of these suffixes, instead of generating our own Etag.
