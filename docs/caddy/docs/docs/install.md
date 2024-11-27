Title: Install - Caddy Documentation

URL Source: https://caddyserver.com/docs/install

Markdown Content:
This page describes various methods for installing Caddy on your system.

**Official:**

*   [Static binaries](https://caddyserver.com/docs/install#static-binaries)
*   [Debian, Ubuntu, Raspbian packages](https://caddyserver.com/docs/install#debian-ubuntu-raspbian)
*   [Fedora, RedHat, CentOS packages](https://caddyserver.com/docs/install#fedora-redhat-centos)
*   [Arch Linux, Manjaro, Parabola packages](https://caddyserver.com/docs/install#arch-linux-manjaro-parabola)
*   [Docker image](https://caddyserver.com/docs/install#docker)

**Community-maintained:**

*   [Gentoo](https://caddyserver.com/docs/install#gentoo)
*   [Homebrew (Mac)](https://caddyserver.com/docs/install#homebrew-mac)
*   [Chocolatey (Windows)](https://caddyserver.com/docs/install#chocolatey-windows)
*   [Scoop (Windows)](https://caddyserver.com/docs/install#scoop-windows)
*   [Webi](https://caddyserver.com/docs/install#webi)
*   [Ansible](https://caddyserver.com/docs/install#ansible)
*   [Termux](https://caddyserver.com/docs/install#termux)
*   [Nix/Nixpkgs/NixOS](https://caddyserver.com/docs/install#nixnixpkgsnixos)
*   [Unikraft](https://caddyserver.com/docs/install#unikraft)
*   [OPNsense](https://caddyserver.com/docs/install#opnsense)

Static binaries
---------------

**If installing onto a production system, we recommend using our official package for your distro if available below.**

1.  Obtain a Caddy binary:
    *   [from releases on GitHub](https://github.com/caddyserver/caddy/releases) (expand "Assets")
        *   Refer to [Verifying Asset Signatures](https://caddyserver.com/docs/signature-verification) for how to verify the asset signature
    *   [from our download page](https://caddyserver.com/download)
    *   [by building from source](https://caddyserver.com/docs/build) (either with `go` or `xcaddy`)
2.  [Install Caddy as a system service.](https://caddyserver.com/docs/running#manual-installation) This is strongly recommended, especially for production servers.

Place the binary in one of your `$PATH` (or `%PATH%` on Windows) directories so you can run `caddy` without typing the full path of the executable file. (Run `echo $PATH` to see the list of directories that qualify.)

You can upgrade static binaries by replacing them with newer versions and restarting Caddy. The [`caddy upgrade` command](https://caddyserver.com/docs/command-line#caddy-upgrade) can make this easy.

Debian, Ubuntu, Raspbian
------------------------

Installing this package automatically starts and runs Caddy as a [systemd service](https://caddyserver.com/docs/running#linux-service) named `caddy`. It also comes with an optional `caddy-api` service which is _not_ enabled by default, but should be used if you primarily configure Caddy via its API instead of config files.

After installing, please read the [service usage instructions](https://caddyserver.com/docs/running#using-the-service).

**Stable releases:**

```
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

**Testing releases** (includes betas and release candidates):

```
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/testing/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-testing-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/testing/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-testing.list
sudo apt update
sudo apt install caddy
```

[**View the Cloudsmith repos**](https://cloudsmith.io/~caddy/repos/)

If you wish to use the packaged support files (systemd services, bash completion and default configuration) with a custom Caddy build, instructions can be [found here](https://caddyserver.com/docs/build#package-support-files-for-custom-builds-for-debianubunturaspbian).

Fedora, RedHat, CentOS
----------------------

This package comes with both of Caddy's [systemd service](https://caddyserver.com/docs/running#linux-service) unit files, but does not enable them by default. Using the service is recommended. If you do, please read the [service usage instructions](https://caddyserver.com/docs/running#using-the-service).

Fedora or RHEL/CentOS 8:

```
dnf install 'dnf-command(copr)'
dnf copr enable @caddy/caddy
dnf install caddy
```

RHEL/CentOS 7:

```
yum install yum-plugin-copr
yum copr enable @caddy/caddy
yum install caddy
```

[**View the Caddy COPR**](https://copr.fedorainfracloud.org/coprs/g/caddy/caddy/)

Arch Linux, Manjaro, Parabola
-----------------------------

This package comes with heavily modified versions of both of Caddy's [systemd service](https://caddyserver.com/docs/running#linux-service) unit files, but does not enable them by default. Those modifications include a custom start/stop behavior and additional sandboxing flags which are explained in [systemd's exec documentation](https://www.freedesktop.org/software/systemd/man/systemd.exec.html#Sandboxing), which may lead to certain host directories not being available to the Caddy process.

```
pacman -Syu caddy
```

[**View Caddy in the Arch Linux repositories**](https://archlinux.org/packages/extra/x86_64/caddy/) and [**the Arch Linux Wiki**](https://wiki.archlinux.org/title/Caddy)

Docker
------

```
docker pull caddy
```

[**View on Docker Hub**](https://hub.docker.com/_/caddy)

See our [recommended Docker Compose configuration](https://caddyserver.com/docs/running#docker-compose) and usage instructions.

Gentoo
------

_Note: This is a community-maintained installation method._

```
emerge www-servers/caddy
```

[**View Gentoo Package**](https://packages.gentoo.org/packages/www-servers/caddy)

Homebrew (Mac)
--------------

_Note: This is a community-maintained installation method._

```
brew install caddy
```

[**View the Homebrew formula**](https://formulae.brew.sh/formula/caddy)

Chocolatey (Windows)
--------------------

_Note: This is a community-maintained installation method._

```
choco install caddy
```

[**View the Chocolatey package**](https://chocolatey.org/packages/caddy)

Scoop (Windows)
---------------

_Note: This is a community-maintained installation method._

```
scoop install caddy
```

[**View the Scoop manifest**](https://github.com/ScoopInstaller/Main/blob/master/bucket/caddy.json)

Webi
----

_Note: This is a community-maintained installation method._

Linux and macOS:

```
curl -sS https://webi.sh/caddy | sh
```

Windows:

```
curl.exe https://webi.ms/caddy | powershell
```

You may need to adjust the Windows firewall rules to allow non-localhost incoming connections.

[**View on Webi**](https://webinstall.dev/caddy)

Ansible
-------

_Note: This is a community-maintained installation method._

```
ansible-galaxy install nvjacobo.caddy
```

[**View the Ansible role repository**](https://github.com/nvjacobo/caddy)

Termux
------

_Note: This is a community-maintained installation method._

```
pkg install caddy
```

[**View the Termux build.sh file**](https://github.com/termux/termux-packages/blob/master/packages/caddy/build.sh)

Nix/Nixpkgs/NixOS
-----------------

_Note: This is a community-maintained installation method._

*   Package name: [`caddy`](https://search.nixos.org/packages?channel=unstable&show=caddy&query=caddy)
*   NixOS module: [`services.caddy`](https://search.nixos.org/options?channel=unstable&show=services.caddy.enable&query=services.caddy)

[**View Caddy in the Nixpkgs search**](https://search.nixos.org/packages?channel=unstable&show=caddy&query=caddy) and [**the NixOS options search**](https://search.nixos.org/options?channel=unstable&show=services.caddy.enable&query=services.caddy)

Unikraft
--------

_Note: This is a community-maintained installation method._

First install Unikraft's companion tool, [`kraft`](https://unikraft.org/docs/cli):

```
curl --proto '=https' --tlsv1.2 -sSf https://get.kraftkit.sh | sh
```

Then run Caddy with Unikraft using:

```
kraft run --rm -p 2015:2015 --plat qemu --arch x86_64 -M 256M caddy:2.7
```

To allow non-localhost incoming connections, you need to [connect the unikernel instance to a network](https://unikraft.org/docs/cli/running#connecting-a-unikernel-instance-to-a-network).

[**View the Unikraft application catalog**](https://github.com/unikraft/catalog/tree/main/examples/caddy) and [**the KraftCloud platform examples (powered by Unikraft)**](https://github.com/kraftcloud/examples/tree/main/caddy).

OPNsense
--------

_Note: This is a community-maintained installation method._

```
pkg install os-caddy
```

[**View the FreeBSD caddy-custom makefile**](https://github.com/opnsense/ports/blob/master/www/caddy-custom/Makefile) and [**the os-caddy plugin source**](https://github.com/opnsense/plugins/tree/master/www/caddy)
