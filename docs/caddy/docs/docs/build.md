Title: Build from source - Caddy Documentation

URL Source: https://caddyserver.com/docs/build

Markdown Content:
There are multiple options for building Caddy, if you need a customized build (e.g. with plugins):

*   [Git](https://caddyserver.com/docs/build#git): Build from Git repo
*   [`xcaddy`](https://caddyserver.com/docs/build#xcaddy): Build using `xcaddy`
*   [Docker](https://caddyserver.com/docs/build#docker): Build a custom Docker image

Requirements:

*   [Go](https://golang.org/doc/install) 1.20 or newer

The [Package Support Files](https://caddyserver.com/docs/build#package-support-files-for-custom-builds-for-debianubunturaspbian) section contains instructions for users who installed Caddy using the APT command on Debian-derivative system yet need the custom build executable for their operations.

Git
---

Requirements:

*   Go installed (see above)

Clone the repository:

```
git clone "https://github.com/caddyserver/caddy.git"
```

If you don't have git, you can download the source code as a file archive [from GitHub](https://github.com/caddyserver/caddy). Each [release](https://github.com/caddyserver/caddy/releases) also has source snapshots.

Build:

```
cd caddy/cmd/caddy/
go build
```

Go programs are easy to compile for other platforms. Just set the `GOOS`, `GOARCH`, and/or `GOARM` environment variables that are different. ([See the go documentation for details.](https://golang.org/doc/install/source#environment))

For example, to compile Caddy for Windows when you're not on Windows:

```
GOOS=windows go build
```

Or similarly for Linux ARMv6 when you're not on Linux or on ARMv6:

```
GOOS=linux GOARCH=arm GOARM=6 go build
```

xcaddy
------

The [`xcaddy` command](https://github.com/caddyserver/xcaddy) is the easiest way to build Caddy with version information and/or plugins.

Requirements:

*   Go installed (see above)
*   Make sure [`xcaddy`](https://github.com/caddyserver/xcaddy/releases) is in your `PATH`

You do **not** need to download the Caddy source code (it will do that for you).

Then building Caddy (with version information) is as easy as:

```
xcaddy build
```

To build with plugins, use `--with`:

```
xcaddy build \
    --with github.com/caddyserver/nginx-adapter
	--with github.com/caddyserver/ntlm-transport@v0.1.1
```

As you can see, you can customize the versions of plugins with `@` syntax. Versions can be a tag name, commit SHA, or branch.

Cross-platform compilation with `xcaddy` works the same as with the `go` command. For example, to cross-compile for macOS:

```
GOOS=darwin xcaddy build
```

Docker
------

You can use the `:builder` image as a short-cut to building a new Caddy binary with custom modules:

```
FROM caddy:<version>-builder AS builder

RUN xcaddy build \
    --with github.com/caddyserver/nginx-adapter \
    --with github.com/hairyhenderson/caddy-teapot-module@v0.0.3-0

FROM caddy:<version>

COPY --from=builder /usr/bin/caddy /usr/bin/caddy
```

Make sure to replace `<version>` with the latest version of Caddy to start.

Note the second `FROM` instruction — this produces a much smaller image by simply overlaying the newly-built binary on top of the regular `caddy` image.

The builder uses `xcaddy` to build Caddy with the provided modules, similar to the process [outlined above](https://caddyserver.com/docs/build#xcaddy).

To use Docker Compose, see our recommended [`compose.yml`](https://caddyserver.com/docs/running#docker-compose) and usage instructions.

Package support files for custom builds for Debian/Ubuntu/Raspbian
------------------------------------------------------------------

This procedure aims to simplify running custom `caddy` binaries while keeping support files from the `caddy` package.

This procedure allows users to take advantage of the default configuration, systemd service files and bash-completion from the official package.

Requirements:

*   Install the `caddy` package according to [these instructions](https://caddyserver.com/docs/install#debian-ubuntu-raspbian)
*   Build your custom `caddy` binary (see above sections), or [download](https://caddyserver.com/download) a custom build
*   Your custom `caddy` binary should be located in the current directory

Procedure:

```
sudo dpkg-divert --divert /usr/bin/caddy.default --rename /usr/bin/caddy
sudo mv ./caddy /usr/bin/caddy.custom
sudo update-alternatives --install /usr/bin/caddy caddy /usr/bin/caddy.default 10
sudo update-alternatives --install /usr/bin/caddy caddy /usr/bin/caddy.custom 50
sudo systemctl restart caddy
```

Explanation:

*   `dpkg-divert` will move `/usr/bin/caddy` binary to `/usr/bin/caddy.default` and put a diversion in place in case any package want to install a file to this location.
    
*   `update-alternatives` will create a symlink from the desired caddy binary to `/usr/bin/caddy`
    
*   `systemctl restart caddy` will shut down the default version of the Caddy server and start the custom one.
    

You can change between the custom and default `caddy` binaries by executing the below, and following the on screen information. Then, restart the Caddy service.

```
update-alternatives --config caddy
```

To upgrade Caddy after this point, you may run [`caddy upgrade`](https://caddyserver.com/docs/command-line#caddy-upgrade). This attempts to [download](https://caddyserver.com/download) a build with the same plugins as your current build, with the latest version of Caddy, then replace the current binary with the new one.
