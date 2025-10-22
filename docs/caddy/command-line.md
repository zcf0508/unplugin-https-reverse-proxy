Title: Command Line - Caddy Documentation

URL Source: https://caddyserver.com/docs/command-line

Markdown Content:
Caddy has a standard unix-like command line interface. Basic usage is:

```
caddy <command> [<args...>]
```

The `<carets>` indicate parameters that get replaced by your input.

The`[brackets]` indicate optional parameters. The `(brackets)` indicate required parameters.

The ellipses `...` indicates a continuation, i.e. one or more parameters.

The `--flags` may have a single-letter shortcut like `-f`.

**Quick start: `caddy`, `caddy help`, or `man caddy` (if installed)**

* * *

*   **[caddy adapt](https://caddyserver.com/docs/command-line#caddy-adapt)** Adapts a config document to native JSON

*   **[caddy build-info](https://caddyserver.com/docs/command-line#caddy-build-info)** Prints build information

*   **[caddy completion](https://caddyserver.com/docs/command-line#caddy-completion)** Generate shell completion script

*   **[caddy environ](https://caddyserver.com/docs/command-line#caddy-environ)** Prints the environment

*   **[caddy file-server](https://caddyserver.com/docs/command-line#caddy-file-server)** A simple but production-ready file server

*   **[caddy file-server export-template](https://caddyserver.com/docs/command-line#caddy-file-server-export-template)** Auxiliary command for the file server to export the default file browser template

*   **[caddy fmt](https://caddyserver.com/docs/command-line#caddy-fmt)** Formats a Caddyfile

*   **[caddy hash-password](https://caddyserver.com/docs/command-line#caddy-hash-password)** Hashes a password and outputs base64

*   **[caddy help](https://caddyserver.com/docs/command-line#caddy-help)** View help for caddy commands

*   **[caddy list-modules](https://caddyserver.com/docs/command-line#caddy-list-modules)** Lists the installed Caddy modules

*   **[caddy manpage](https://caddyserver.com/docs/command-line#caddy-manpage)** Generate manpages

*   **[caddy reload](https://caddyserver.com/docs/command-line#caddy-reload)** Changes the config of the running Caddy process

*   **[caddy respond](https://caddyserver.com/docs/command-line#caddy-respond)** A quick-and-clean, hard-coded HTTP server for development and testing

*   **[caddy reverse-proxy](https://caddyserver.com/docs/command-line#caddy-reverse-proxy)** A simple but production-ready HTTP(S) reverse proxy

*   **[caddy run](https://caddyserver.com/docs/command-line#caddy-run)** Starts the Caddy process in the foreground

*   **[caddy start](https://caddyserver.com/docs/command-line#caddy-start)** Starts the Caddy process in the background

*   **[caddy stop](https://caddyserver.com/docs/command-line#caddy-stop)** Stops the running Caddy process

*   **[caddy storage export](https://caddyserver.com/docs/command-line#caddy-storage)** Exports the contents of the configured storage to a tarball

*   **[caddy storage import](https://caddyserver.com/docs/command-line#caddy-storage)** Imports a previously exported tarball to the configured storage

*   **[caddy trust](https://caddyserver.com/docs/command-line#caddy-trust)** Installs a certificate into local trust store(s)

*   **[caddy untrust](https://caddyserver.com/docs/command-line#caddy-untrust)** Untrusts a certificate from local trust store(s)

*   **[caddy upgrade](https://caddyserver.com/docs/command-line#caddy-upgrade)** Upgrades Caddy to the latest release

*   **[caddy add-package](https://caddyserver.com/docs/command-line#caddy-add-package)** Upgrades Caddy to the latest release, with additional plugins added

*   **[caddy remove-package](https://caddyserver.com/docs/command-line#caddy-remove-package)** Upgrades Caddy to the latest release, with some plugins removed

*   **[caddy validate](https://caddyserver.com/docs/command-line#caddy-validate)** Tests whether a config file is valid

*   **[caddy version](https://caddyserver.com/docs/command-line#caddy-version)** Prints the version

*   **[Signals](https://caddyserver.com/docs/command-line#signals)** How Caddy handles signals

*   **[Exit codes](https://caddyserver.com/docs/command-line#exit-codes)** Emitted when the Caddy process exits

Subcommands[🔗](https://caddyserver.com/docs/command-line#subcommands "Direct link")
------------------------------------------------------------------------------------

### `caddy adapt`[🔗](https://caddyserver.com/docs/command-line#caddy-adapt "Direct link")

```
caddy adapt
	[-c, --config <path>]
	[-a, --adapter <name>]
	[-p, --pretty]
	[--validate]
```

Adapts a configuration to Caddy's native JSON config structure and writes the output to stdout, along with any warnings to stderr, then exits.

`--config` is the path to the config file. If omitted, assumes `Caddyfile` in current directory if it exists; otherwise, this flag is required.

`--adapter` specifies the config adapter to use; default is `caddyfile`.

`--pretty` will format the output with indentation for human readability.

`--validate` will load and provision the adapted configuration to check for validity (but it will not actually start running the config).

Note that a config which is successfully adapted may still fail validation. For an example of this, use this Caddyfile:

```
localhost

tls cert_notexist.pem key_notexist.pem
```

Try adapting it:

`caddy adapt --config Caddyfile`
It succeeds without error. Then try:

```
caddy adapt --config Caddyfile --validate
adapt: validation: loading app modules: module name 'tls': provision tls: loading certificates: open cert_notexist.pem: no such file or directory
```

Even though that Caddyfile can be adapted to JSON without errors, the actual certificate and/or key files do not exist, so validation fails because that error arises during the provisioning phase. Thus, validation is a stronger error check than adaptation is.

#### Example[🔗](https://caddyserver.com/docs/command-line#example "Direct link")

To adapt a Caddyfile to JSON that you can easily read and tweak manually:

`caddy adapt --config /path/to/Caddyfile --pretty`
### `caddy build-info`[🔗](https://caddyserver.com/docs/command-line#caddy-build-info "Direct link")

`caddy build-info`
Prints information provided by Go about the build (main module path, package versions, module replacements).

### `caddy completion`[🔗](https://caddyserver.com/docs/command-line#caddy-completion "Direct link")

`caddy completion [bash|zsh|fish|powershell]`
Generates shell completion scripts. This allows you to get tab-complete or auto-complete (or similar, depending on your shell) when typing `caddy` commands.

To get instructions for installing this script into your specific shell, run `caddy help completion` or `caddy completion -h`.

### `caddy environ`[🔗](https://caddyserver.com/docs/command-line#caddy-environ "Direct link")

`caddy environ`
Prints the environment as seen by caddy, then exits. Can be useful when debugging init systems or process manager units like systemd.

### `caddy file-server`[🔗](https://caddyserver.com/docs/command-line#caddy-file-server "Direct link")

```
caddy file-server
	[-r, --root <path>]
	[--listen <addr>]
	[-d, --domain <example.com>]
	[-b, --browse]
	[--reveal-symlinks]
	[-t, --templates]
	[--access-log]
	[-v, --debug]
	[--no-compress]
	[-p, --precompressed]
```

Spins up a simple but production-ready static file server.

`--root` specifies the root file path. Default is the current working directory.

`--listen` accepts a listener address. Default is `:80`, unless `--domain` is used, then `:443` will be the default.

`--domain` will only serve files through that hostname, and Caddy will attempt to serve it over HTTPS, so make sure any public DNS is configured properly first if it's a public domain name. The default port will be changed to 443.

`--browse` will enable directory listings if a directory without an index file is requested.

`--reveal-symlinks` will show the target of symbolic links in directory listings, when `--browse` is enabled.

`--templates` will enable template rendering.

`--access-log` enables the request/access log.

`--debug` enables verbose logging.

`--no-compress` disables compression. By default, Zstandard and Gzip compression are enabled.

`--precompressed` specifies encoding formats to search for precompressed sidecar files. Can be repeated for multiple formats. See the [file_server directive](https://caddyserver.com/docs/caddyfile/directives/file_server#precompressed) for more information.

This command disables the admin API, making it easier to run multiple instances on a local development machine.

#### `caddy file-server export-template`[🔗](https://caddyserver.com/docs/command-line#caddy-file-server-export-template "Direct link")

`caddy file-server export-template`
Exports the default file browsing template to stdout

### `caddy fmt`[🔗](https://caddyserver.com/docs/command-line#caddy-fmt "Direct link")

```
caddy fmt [<path>]
	[-w, --overwrite]
	[-d, --diff]
```

Formats or prettifies a Caddyfile, then exits. The result is printed to stdout unless `--overwrite` is used, and will exit with code `1` if there are any differences.

`<path>` specifies the path to the Caddyfile. If `-`, the input is read from stdin. If omitted, a file named Caddyfile in the current directory is assumed instead.

`--overwrite` causes the result to be written to the input file instead of being printed to the terminal. If the input is not a regular file, this flag has no effect.

`--diff` causes the output to be compared against the input, and lines will be prefixed with `-` and `+` where they differ. Note that unchanges lines are prefixed with two spaces for alignment, and that this is not a valid patch format; it's just meant as a visual tool.

### `caddy hash-password`[🔗](https://caddyserver.com/docs/command-line#caddy-hash-password "Direct link")

```
caddy hash-password
	[-p, --plaintext <password>]
	[-a, --algorithm <name>]
```

Convenient way to hash a plaintext password. The resulting hash is written to stdout as a format usable directly in your Caddy config.

`--plaintext` is the plaintext form of the password. If omitted, interactive mode will be assumed and the user will be shown a prompt to enter the password manually.

`--algorithm` may be `bcrypt` or any installed hash algorithm. Default is `bcrypt`.

### `caddy help`[🔗](https://caddyserver.com/docs/command-line#caddy-help "Direct link")

`caddy help [<command>]`
Prints CLI help text, optionally for a specific subcommand, then exits.

### `caddy list-modules`[🔗](https://caddyserver.com/docs/command-line#caddy-list-modules "Direct link")

```
caddy list-modules
	[--packages]
	[--versions]
	[-s, --skip-standard]
```

Prints the Caddy modules that are installed, optionally with package and/or version information from their associated Go modules, then exits.

In some scripted situations, it may be redundant to print all of the standard modules as well, so you may use `--skip-standard` to omit those from the output.

NOTE: Due to [a bug in Go](https://github.com/golang/go/issues/29228), version information is only available if Caddy is built as a dependency and not as the main module. Use [xcaddy](https://caddyserver.com/docs/build#xcaddy) to make this easier.

### `caddy manpage`[🔗](https://caddyserver.com/docs/command-line#caddy-manpage "Direct link")

```
caddy manpage
	(-o, --directory <path>)
```

Generates manual/documentation pages for Caddy commands and writes them to the directory at the specified path. The output of this command can be read by the `man` command.

`--directory` (required) is the path to the directory into which to write the man pages. It will be created if it does not exist.

Once generated, the manual pages generally need to be installed. This procedure varies by platform, but on typical Linux systems, it's something like this:

```
$ caddy manpage --directory man
$ gzip -r man/
$ sudo cp man/* /usr/share/man/man8/
$ sudo mandb
```

Then you can run `man caddy` (or `man caddy-*` for subcommands) to read documentation in your terminal.

Manual pages are separate documentation from what is on our website. Our website has more comprehensive documentation that is updated often.

### `caddy reload`[🔗](https://caddyserver.com/docs/command-line#caddy-reload "Direct link")

```
caddy reload
	[-c, --config <path>]
	[-a, --adapter <name>]
	[--address <interface>]
	[-f, --force]
```

Gives the running Caddy instance a new configuration. This has the same effect as POSTing a document to the [/load endpoint](https://caddyserver.com/docs/api#post-load), but this command is convenient for simple workflows revolving around config files. Compared to the `stop`, `start`, and `run` commands, this single command is the correct, semantic way to change/reload the running configuration.

Because this command uses the API, the admin endpoint must not be disabled.

`--config` is the config file to apply. If `-`, the config is read from stdin. If not specified, it will try a file called `Caddyfile` in the current working directory and, if it exists, it will adapt it using the `caddyfile` config adapter; otherwise, it is an error if there is no config file to load.

`--adapter` specifies a config adapter to use, if any. This flag is not necessary if the `--config` filename starts with `Caddyfile` or ends with `.caddyfile` which assumes the `caddyfile` adapter. Otherwise, this flag is required if the provided config file is not in Caddy's native JSON format.

`--address` needs to be used if the admin endpoint is not listening on the default address and if it is different from the address in the provided config file.

`--force` will cause a reload to happen even if the specified config is the same as what Caddy is already running. Can be useful to force Caddy to reprovision its modules, which can have side-effects, for example: reloading manually-loaded TLS certificates.

### `caddy respond`[🔗](https://caddyserver.com/docs/command-line#caddy-respond "Direct link")

```
caddy respond
	[-s, --status <code>]
	[-H, --header "<Field>: <value>"]
	[-b, --body <content>]
	[-l, --listen <addr>]
	[-v, --debug]
	[--access-log]
	[<status|body>]
```

Starts one or more simple, hard-coded HTTP servers that are useful for development, staging, and some production use cases. It can be useful for verifying or debugging HTTP clients, scripts, or even load balancers.

`--status` is the HTTP status code to return.

`--header` adds an HTTP header; `Field: value` format is expected. This flag can be used multiple times.

`--body` specifies the response body. Alternatively, the body can be piped from stdin.

`--listen` is the listener address, which can be any [network address](https://caddyserver.com/docs/conventions#network-addresses) recognized by Caddy, and may include a port range to start multiple servers.

`--debug` enables verbose debug logging.

`--access-log` enables access/request logging.

With no options specified, this command listens on a random available port and answers HTTP requests with an empty 200 response. The listen address can be customized with the `--listen` flag and will always be printed to stdout. If the listen address includes a port range, multiple servers will be started.

If a final, unnamed argument is given, it will be treated as a status code (same as the `--status` flag) if it is a 3-digit number. Otherwise, it is used as the response body (same as the `--body` flag). The `--status` and `--body` flags will always override this argument.

A body may be given in 3 ways: a flag, a final (and unnamed) argument to the command, or piped to stdin (if flag and argument are unset). Limited [template evaluation](https://pkg.go.dev/text/template) is supported on the body, with the following variables:

| Variable | Description |
| --- | --- |
| `.N` | Server number |
| `.Port` | Listener port |
| `.Address` | Listener address |

#### Examples[🔗](https://caddyserver.com/docs/command-line#examples "Direct link")

Empty 200 response on a random port:

`caddy respond`
HTTP response with a body:

`caddy respond "Hello, world!"`
Multiple servers and templates:

```
$ caddy respond --listen :2000-2004 "I'm server {{.N}} on port {{.Port}}"

Server address: [::]:2000
Server address: [::]:2001
Server address: [::]:2002
Server address: [::]:2003
Server address: [::]:2004

$ curl 127.0.0.1:2002
I'm server 2 on port 2002
```

Pipe in a maintenance page:

```
cat maintenance.html | caddy respond \
	--listen :80 \
	--status 503 \
	--header "Content-Type: text/html"
```

### `caddy reverse-proxy`[🔗](https://caddyserver.com/docs/command-line#caddy-reverse-proxy "Direct link")

```
caddy reverse-proxy
	[-f, --from <addr>]
	(-t, --to <addr>)
	[-H, --header-up "<Field>: <value>"]
	[-d, --header-down "<Field>: <value>"]
	[-c, --change-host-header]
	[-r, --disable-redirects]
	[-i, --internal-certs]
	[-v, --debug]
	[--access-log]
	[--insecure]
```

A simple but production-ready reverse proxy. Useful for quick deployments, demos, and development.

Simply shuttles HTTP(S) traffic from the `--from` address to the `--to` address. Multiple `--to` addresses may be specified by repeating the flag. At least one `--to` address is required. The `--to` address may have a port range as a shortcut to expand to multiple upstreams.

Unless otherwise specified in the addresses, the `--from` address will be assumed to be HTTPS if a hostname is given, and the `--to` address will be assumed to be HTTP.

If the `--from` address has a host or IP, Caddy will attempt to serve the proxy over HTTPS with a certificate (unless overridden by the HTTP scheme or port).

If serving HTTPS:

*   `--disable-redirects` can be used to avoid binding to the HTTP port.

*   `--internal-certs` can be used to force issuance certs using the internal CA instead of attempting to issue a public certificate.

For proxying:

*   `--header-up` can be used to set a request header to send to the upstream.

*   `--header-down` can be used to set a response header to send back to the client.

*   `--change-host-header` sets the Host header on the request to the address of the upstream, instead of defaulting to the incoming Host header.

This is a shortcut for `--header-up "Host: {http.reverse_proxy.upstream.hostport}"`

*   `--insecure` disables TLS verification with the upstream. WARNING: THIS DISABLES SECURITY BY NOT VERIFYING THE UPSTREAM'S CERTIFICATE.

*   `--debug` enables verbose logging.

This command disables the admin API so it is easier to run multiple instances on a local development machine.

### `caddy run`[🔗](https://caddyserver.com/docs/command-line#caddy-run "Direct link")

```
caddy run
	[-c, --config <path>]
	[-a, --adapter <name>]
	[--pidfile <file>]
	[-e, --environ]
	[--envfile <file>]
	[-r, --resume]
	[-w, --watch]
```

Runs Caddy and blocks indefinitely; i.e. "daemon" mode.

`--config` specifies an initial config file to immediately load and use. If `-`, the config is read from stdin. If no config is specified, Caddy will run with a blank configuration and use default settings for the [admin API endpoints](https://caddyserver.com/docs/api), which can be used to feed it new configuration. As a special case, if the current working directory has a file called "Caddyfile" and the `caddyfile` config adapter is plugged in (default), then that file will be loaded and used to configure Caddy, even without any command line flags.

`--adapter` is the name of the config adapter to use when loading the initial config, if any. This flag is not necessary if the `--config` filename starts with `Caddyfile` or ends with `.caddyfile` which assumes the `caddyfile` adapter. Otherwise, this flag is required if the provided config file is not in Caddy's native JSON format. Any warnings will be printed to the log, but beware that any adaptation without errors will immediately be used, even if there are warnings. If you want to review the results of the adaptation first, use the [`caddy adapt`](https://caddyserver.com/docs/command-line#caddy-adapt) subcommand.

`--pidfile` writes the PID to the specified file.

`--environ` prints out the environment before starting. This is the same as the `caddy environ` command, but does not exit after printing.

`--envfile` loads environment variables from the specified file, in `KEY=VALUE` format. Comments starting with `#` are supported; keys may be prefixed with `export`; values may be double-quoted (double-quotes within can be escaped); multi-line values are supported.

`--resume` uses the last loaded configuration that was autosaved, overriding the `--config` flag (if present). Using this flag guarantees config durability through machine reboots or process restarts. It is most useful in [API](https://caddyserver.com/docs/api)-centric deployments.

`--watch` will watch the config file and automatically reload it after it changes. ⚠️ This feature is intended for use only in local development environments!

### `caddy start`[🔗](https://caddyserver.com/docs/command-line#caddy-start "Direct link")

```
caddy start
	[-c, --config <path>]
	[-a, --adapter <name>]
	[--envfile <file>]
	[--pidfile <file>]
	[-w, --watch]
```

Same as [`caddy run`](https://caddyserver.com/docs/command-line#caddy-run), but in the background. This command only blocks until the background process is running successfully (or fails to run), then returns.

Note: the flag `--config` does _not_ support `-` to read the config from stdin.

Use of this command is discouraged with system services or on Windows. On Windows, the child process will remain attached to the terminal, so closing the window will forcefully stop Caddy, which is not obvious. Consider running Caddy [as a service](https://caddyserver.com/docs/running) instead.

Once started, you can use [`caddy stop`](https://caddyserver.com/docs/command-line#caddy-stop) or the [`POST /stop`](https://caddyserver.com/docs/api#post-stop) API endpoint to exit the background process.

### `caddy stop`[🔗](https://caddyserver.com/docs/command-line#caddy-stop "Direct link")

```
caddy stop
	[--address <interface>]
	[-c, --config <path> [-a, --adapter <name>]]
```

Gracefully stops the running Caddy process (other than the process of the stop command) and causes it to exit. It uses the [`POST /stop`](https://caddyserver.com/docs/api#post-stop) endpoint of the admin API to perform a graceful shutdown.

The address of this request can be customized using the `--address` flag, or from the given `--config`, if the running instance's admin API is not using the default listen address.

If you want to stop the current configuration but do not want to exit the process, use [`caddy reload`](https://caddyserver.com/docs/command-line#caddy-reload) with a blank config, or the [`DELETE /config/`](https://caddyserver.com/docs/api#delete-configpath) endpoint.

### `caddy storage`[🔗](https://caddyserver.com/docs/command-line#caddy-storage "Direct link")

_⚠️ Experimental_

Allows export and import of the contents of Caddy's configured data storage.

This is useful when needing to transition from one [storage module](https://caddyserver.com/docs/json/storage/) to another, by exporting from your old one, updating your config, then importing into the new one.

The following command can be used to copy the storage between different modules in one shot, using old and new configs, piping the export command's output into the import command.

```
$ caddy storage export -c Caddyfile.old -o- |
  caddy storage import -c Caddyfile.new -i-
```

#### `caddy storage export`[🔗](https://caddyserver.com/docs/command-line#caddy-storage-export "Direct link")

```
caddy storage export
	-c, --config <path>
	[-o, --output <path>]
```

`--config` is the config file load. This is required, so that the correct storage module is connected to.

`--output` is the filename to write the tarball. If `-`, the output is written to stdout.

#### `caddy storage import`[🔗](https://caddyserver.com/docs/command-line#caddy-storage-import "Direct link")

```
caddy storage import
	-c, --config <path>
	-i, --input <path>
```

`--config` is the config file load. This is required, so that the correct storage module is connected to.

`--input` is the filename of the tarball to read from. If `-`, the input is read from stdin.

### `caddy trust`[🔗](https://caddyserver.com/docs/command-line#caddy-trust "Direct link")

```
caddy trust
	[--ca <id>]
	[--address <interface>]
	[-c, --config <path> [-a, --adapter <name>]]
```

Installs a root certificate for a CA managed by Caddy's [PKI app](https://caddyserver.com/docs/json/apps/pki/) into local trust stores.

Caddy will attempt to install its root certificates into the local trust stores automatically when they are first generated, but it might fail if Caddy doesn't have the appropriate permissions to write to the trust store. This command is necessary to pre-install the certificates before using them, if the server process runs as an unprivileged user (such as via systemd). You may need to run this command with `sudo` to unix systems.

By default, this command installs the root certificate for Caddy's default CA (i.e. "local"). You may specify the ID of another CA with the `--ca` flag.

This command will attempt to connect to Caddy's [admin API](https://caddyserver.com/docs/api) to fetch the root certificate, using the [`GET /pki/ca/<id>/certificates`](https://caddyserver.com/docs/api#get-pkicaltidgtcertificates) endpoint. You may explicitly specify the `--address`, or use the `--config` flag to load the admin address from your config, if the running instance's admin API is not using the default listen address.

You may also use the `caddy` binary with this command to install certificates on other machines in your network, if the admin API is made accessible to other machines -- be careful if doing this, to not expose the admin API to untrusted clients.

### `caddy untrust`[🔗](https://caddyserver.com/docs/command-line#caddy-untrust "Direct link")

```
caddy untrust
	[-p, --cert <path>]
	[--ca <id>]
	[--address <interface>]
	[-c, --config <path> [-a, --adapter <name>]]
```

Untrusts a root certificate from the local trust store(s).

This command uninstalls trust; it does not necessarily delete the root certificate from trust stores entirely. Thus, repeatedly trusting and untrusting new certificates can fill up trust databases.

This command does not delete or modify certificate files from Caddy's configured storage.

This command can be used in one of two ways:

*   By specifying a direct path to the root certificate to untrust with the `--cert` flag.
*   By fetching the root certificate from the [admin API](https://caddyserver.com/docs/api) using the [`GET /pki/ca/<id>/certificates`](https://caddyserver.com/docs/api#get-pkicaidcertificates) endpoint. This is the default behaviour if no flags are given.

If the admin API is used, then the CA ID defaults to "local". You may specify the ID of another CA with the `--ca` flag. You may explicitly specify the `--address`, or use the `--config` flag to load the admin address from your config, if the running instance's admin API is not using the default listen address.

### `caddy upgrade`[🔗](https://caddyserver.com/docs/command-line#caddy-upgrade "Direct link")

_⚠️ Experimental_

```
caddy upgrade
	[-k, --keep-backup]
```

Replaces the current Caddy binary with the latest version from [our download page](https://caddyserver.com/download) with the same modules installed, including all third-party plugins that are registered on the Caddy website.

Upgrades do not interrupt running servers; currently, the command only replaces the binary on disk. This might change in the future if we can figure out a good way to do it.

The upgrade process is fault tolerant; the current binary is backed up first (copied beside the current one) and automatically restored if anything goes wrong. If you wish to keep the backup after the upgrade process is complete, you may use the `--keep-backup` option.

This command may require elevated privileges if your user does not have permission to write to the executable file.

### `caddy add-package`[🔗](https://caddyserver.com/docs/command-line#caddy-add-package "Direct link")

_⚠️ Experimental_

```
caddy add-package <packages...>
	[-k, --keep-backup]
```

Similarly to `caddy upgrade`, replaces the current Caddy binary with the latest version with the same modules installed, _plus_ the packages listed as arguments included in the new binary. Find the list of packages you can install from [our download page](https://caddyserver.com/download). Each argument should be the full package name.

For example:

`caddy add-package github.com/caddy-dns/cloudflare`
### `caddy remove-package`[🔗](https://caddyserver.com/docs/command-line#caddy-remove-package "Direct link")

_⚠️ Experimental_

```
caddy remove-package <packages...>
	[-k, --keep-backup]
```

Similarly to `caddy upgrade`, replaces the current Caddy binary with the latest version with the same modules installed, but _without_ the packages listed as arguments, if they existed in the current binary. Run `caddy list-modules --packages` to see the list of package names of non-standard modules included in the current binary.

### `caddy validate`[🔗](https://caddyserver.com/docs/command-line#caddy-validate "Direct link")

```
caddy validate
	[-c, --config <path>]
	[-a, --adapter <name>]
	[--envfile <file>]
```

Validates a configuration file, then exits. This command deserializes the config, then loads and provisions all of its modules as if to start the config, but the config is not actually started. This exposes errors in a configuration that arise during loading or provisioning phases and is a stronger error check than merely serializing a config as JSON.

`--config` is the config file to validate. If `-`, the config is read from stdin. Default is the `Caddyfile` in the current directory, if any.

`--adapter` is the name of the config adapter to use. This flag is not necessary if the `--config` filename starts with `Caddyfile` or ends with `.caddyfile` which assumes the `caddyfile` adapter. Otherwise, this flag is required if the provided config file is not in Caddy's native JSON format.

`--envfile` loads environment variables from the specified file, in `KEY=VALUE` format. Comments starting with `#` are supported; keys may be prefixed with `export`; values may be double-quoted (double-quotes within can be escaped); multi-line values are supported.

### `caddy version`[🔗](https://caddyserver.com/docs/command-line#caddy-version "Direct link")

`caddy version`
Prints the version and exits.

Signals[🔗](https://caddyserver.com/docs/command-line#signals "Direct link")
----------------------------------------------------------------------------

Caddy traps certain signals and ignores others. Signals can initiate specific process behavior.

| Signal | Behavior |
| --- | --- |
| `SIGINT` | Graceful exit. Send signal again to force exit immediately. |
| `SIGQUIT` | Quits Caddy immediately, but still cleans up locks in storage because it is important. |
| `SIGTERM` | Graceful exit. |
| `SIGUSR1` | Ignored. For config updates, use the `caddy reload` command or [the API](https://caddyserver.com/docs/api). |
| `SIGUSR2` | Ignored. |
| `SIGHUP` | Ignored. |

A graceful exit means that new connections are no longer accepted, and existing connections will be drained before the socket is closed. A grace period may apply (and is configurable). Once the grace period is up, connections will be forcefully terminated. Locks in storage and other resources that individual modules need to release are cleaned up during a graceful shutdown.

Exit codes[🔗](https://caddyserver.com/docs/command-line#exit-codes "Direct link")
----------------------------------------------------------------------------------

Caddy returns a code when the process exits:

| Code | Meaning |
| --- | --- |
| `0` | Normal exit. |
| `1` | Failed startup. **Do not automatically restart the process; it will likely error again unless changes are made.** |
| `2` | Forced quit. Caddy was forced to exit without cleaning up resources. |
| `3` | Failed quit. Caddy exited with some errors during cleanup. |

In bash, you can get the exit code of the last command with `echo $?`.
