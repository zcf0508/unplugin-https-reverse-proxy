Title: Module http.reverse_proxy.transport.fastcgi - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.reverse_proxy.transport.fastcgi

Markdown Content:
http.reverse_proxy.transport.fastcgi facilitates FastCGI communication.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.fastcgi#root)root
Use this directory as the fastcgi root directory. Defaults to the root directory of the parent virtual host.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.fastcgi#split_path)split_path
The path in the URL will be split into two, with the first piece ending with the value of SplitPath. The first piece will be assumed as the actual resource (CGI script) name, and the second piece will be set to PATH_INFO for the CGI script to use.

Future enhancements should be careful to avoid CVE-2019-11043, which can be mitigated with use of a try_files-like behavior that 404s if the fastcgi path info is not found.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.fastcgi#resolve_root_symlink)resolve_root_symlink
Path declared as root directory will be resolved to its absolute value after the evaluation of any symbolic links. Due to the nature of PHP opcache, root directory path is cached: when using a symlinked directory as root this could generate errors when symlink is changed without php-fpm being restarted; enabling this directive will set $_SERVER['DOCUMENT_ROOT'] to the real directory path.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.fastcgi#env)env
Extra environment variables.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.fastcgi#dial_timeout)dial_timeout
The duration used to set a deadline when connecting to an upstream. Default: `3s`.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.fastcgi#read_timeout)read_timeout
The duration used to set a deadline when reading from the FastCGI server.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.fastcgi#write_timeout)write_timeout
The duration used to set a deadline when sending to the FastCGI server.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/http.reverse_proxy.transport.fastcgi#capture_stderr)capture_stderr
Capture and log any messages sent by the upstream on stderr. Logs at WARN level by default. If the response has a 4xx or 5xx status ERROR level will be used instead.
