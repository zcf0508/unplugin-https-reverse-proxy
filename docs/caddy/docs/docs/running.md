Title: Keep Caddy Running - Caddy Documentation

URL Source: https://caddyserver.com/docs/running

Markdown Content:
While Caddy can be run directly with its [command line interface](https://caddyserver.com/docs/command-line), there are numerous advantages to using a service manager to keep it running, such as ensuring it starts automatically when the system reboots and to capture stdout/stderr logs.

*   [Linux Service](https://caddyserver.com/docs/running#linux-service)
    *   [Unit Files](https://caddyserver.com/docs/running#unit-files)
    *   [Manual Installation](https://caddyserver.com/docs/running#manual-installation)
    *   [Using the Service](https://caddyserver.com/docs/running#using-the-service)
    *   [Local HTTPS](https://caddyserver.com/docs/running#local-https-with-systemd)
    *   [Overrides](https://caddyserver.com/docs/running#overrides)
        *   [Environment variables](https://caddyserver.com/docs/running#environment-variables)
        *   [`run` and `reload` override](https://caddyserver.com/docs/running#run-and-reload-override)
        *   [Restart on crash](https://caddyserver.com/docs/running#restart-on-crash)
    *   [SELinux Considerations](https://caddyserver.com/docs/running#selinux-considerations)
*   [Windows service](https://caddyserver.com/docs/running#windows-service)
    *   [sc.exe](https://caddyserver.com/docs/running#scexe)
    *   [WinSW](https://caddyserver.com/docs/running#winsw)
*   [Docker Compose](https://caddyserver.com/docs/running#docker-compose)
    *   [Setup](https://caddyserver.com/docs/running#setup)
    *   [Usage](https://caddyserver.com/docs/running#usage)
    *   [Local HTTPS](https://caddyserver.com/docs/running#local-https-with-docker)

Linux Service[🔗](https://caddyserver.com/docs/running#linux-service "Direct link")
-----------------------------------------------------------------------------------

The recommended way to run Caddy on Linux distributions with systemd is with our official systemd unit files.

### Unit Files[🔗](https://caddyserver.com/docs/running#unit-files "Direct link")

We provide two different systemd unit files that you can choose between, depending on your usecase:

*   [**`caddy.service`**](https://github.com/caddyserver/dist/blob/master/init/caddy.service) if you configure Caddy with a [Caddyfile](https://caddyserver.com/docs/caddyfile). If you prefer to use a different config adapter or a JSON config file, you may [override](https://caddyserver.com/docs/running#overrides) the `ExecStart` and `ExecReload` commands.
    
*   [**`caddy-api.service`**](https://github.com/caddyserver/dist/blob/master/init/caddy-api.service) if you configure Caddy solely through its [API](https://caddyserver.com/docs/api). This service uses the [`--resume`](https://caddyserver.com/docs/command-line#caddy-run) option which will start Caddy using the `autosave.json` which is [persisted](https://caddyserver.com/docs/json/admin/config/) by default.
    

They are very similar, but differ in the `ExecStart` and `ExecReload` commands to accommodate the workflows.

If you need to switch between the services, you should disable and stop the previous one before enabling and starting the other. For example, to switch from the `caddy` service to the `caddy-api` service:

```
sudo systemctl disable --now caddy
sudo systemctl enable --now caddy-api
```

### Manual Installation[🔗](https://caddyserver.com/docs/running#manual-installation "Direct link")

Some [installation methods](https://caddyserver.com/docs/install) automatically set up Caddy to run as a service. If you chose a method that did not, you may follow these instructions to do so:

**Requirements:**

*   `caddy` binary that you [downloaded](https://caddyserver.com/download) or [built from source](https://caddyserver.com/docs/build)
*   `systemctl --version` 232 or newer
*   `sudo` privileges

Move the caddy binary into your `$PATH`, for example:

```
sudo mv caddy /usr/bin/
```

Test that it worked:

```
caddy version
```

Create a group named `caddy`:

```
sudo groupadd --system caddy
```

Create a user named `caddy` with a writeable home directory:

```
sudo useradd --system \
    --gid caddy \
    --create-home \
    --home-dir /var/lib/caddy \
    --shell /usr/sbin/nologin \
    --comment "Caddy web server" \
    caddy
```

If using a config file, be sure it is readable by the `caddy` user you just created.

Next, [choose a systemd unit file](https://caddyserver.com/docs/running#unit-files) based on your use case.

**Double-check the `ExecStart` and `ExecReload` directives.** Make sure the binary's location and command line arguments are correct for your installation! For example: if using a config file, change your `--config` path if it is different from the defaults.

The usual place to save the service file is: `/etc/systemd/system/caddy.service`

After saving your service file, you can start the service for the first time with the usual systemctl dance:

```
sudo systemctl daemon-reload
sudo systemctl enable --now caddy
```

Verify that it is running:

```
systemctl status caddy
```

Now you're ready to [use the service](https://caddyserver.com/docs/running#using-the-service)!

### Using the Service[🔗](https://caddyserver.com/docs/running#using-the-service "Direct link")

If using a Caddyfile, you can edit your configuration with `nano`, `vi`, or your preferred editor:

```
sudo nano /etc/caddy/Caddyfile
```

You can place your static site files in either `/var/www/html` or `/srv`. Make sure the `caddy` user has permission to read the files.

To verify that the service is running:

```
systemctl status caddy
```

The status command will also show the location of the currently running service file.

When running with our official service file, Caddy's output will be redirected to `journalctl`. To read your full logs and to avoid lines being truncated:

```
journalctl -u caddy --no-pager | less +G
```

If using a config file, you can gracefully reload Caddy after making any changes:

```
sudo systemctl reload caddy
```

You can stop the service with:

```
sudo systemctl stop caddy
```

The Caddy process will run as the `caddy` user, which has its `$HOME` set to `/var/lib/caddy`. This means that:

*   The default [data storage location](https://caddyserver.com/docs/conventions#data-directory) (for certificates and other state information) will be in `/var/lib/caddy/.local/share/caddy`.
*   The default [config storage location](https://caddyserver.com/docs/conventions#configuration-directory) (for the auto-saved JSON config, primarily useful for the `caddy-api` service) will be in `/var/lib/caddy/.config/caddy`.

### Local HTTPS with systemd[🔗](https://caddyserver.com/docs/running#local-https-with-systemd "Direct link")

When using Caddy for local development with HTTPS, you might use a [hostname](https://caddyserver.com/docs/caddyfile/concepts#addresses) like `localhost` or `app.localhost`. This enables [Local HTTPS](https://caddyserver.com/docs/automatic-https#local-https) using Caddy's local CA to issue certificates.

Since Caddy runs as the `caddy` user when running as a service, it won't have permission to install its root CA certificate to the system trust store. To do this, run [`sudo caddy trust`](https://caddyserver.com/docs/command-line#caddy-trust) to perform installation.

If you want other devices to connect to your server when using the [`internal` issuer](https://caddyserver.com/docs/caddyfile/directives/tls#internal), you will need to install the root CA certificate on those devices as well. You can find the root CA certificate at `/var/lib/caddy/.local/share/caddy/pki/authorities/local/root.crt`. Many web browsers now use their own trust store (ignoring the system's trust store), so you may also need to install the certificate manually there as well.

### Overrides[🔗](https://caddyserver.com/docs/running#overrides "Direct link")

The best way to override aspects of the service files is with this command:

```
sudo systemctl edit caddy
```

This will open a blank file with your default terminal text editor in which you can override or add directives to the unit definition. This is called a "drop-in" file.

#### Environment variables[🔗](https://caddyserver.com/docs/running#environment-variables "Direct link")

If you need to define environment variables for use in your config, you may do so like this:

```
[Service]
Environment="CF_API_TOKEN=super-secret-cloudflare-tokenvalue"
```

Similarly, if you prefer to maintain a separate file to maintain the environment variables (envfile), you may use the [`EnvironmentFile`](https://www.freedesktop.org/software/systemd/man/latest/systemd.exec.html#EnvironmentFile=) directive as such:

```
[Service]
EnvironmentFile=/etc/caddy/.env
```

Then your `/etc/caddy/.env` file may look like this (do not use `"` quotes around the values):

```
CF_API_TOKEN=super-secret-cloudflare-tokenvalue
```

#### `run` and `reload` override[🔗](https://caddyserver.com/docs/running#run-and-reload-override "Direct link")

If you need to change the config file from the default of the Caddyfile, to instead using a JSON file (note that `Exec*` directives [must be reset with empty strings](https://www.freedesktop.org/software/systemd/man/systemd.service.html#ExecStart=) before setting a new value):

```
[Service]
ExecStart=
ExecStart=/usr/bin/caddy run --environ --config /etc/caddy/caddy.json
ExecReload=
ExecReload=/usr/bin/caddy reload --config /etc/caddy/caddy.json
```

#### Restart on crash[🔗](https://caddyserver.com/docs/running#restart-on-crash "Direct link")

If you'd like caddy to restart itself after 5s if it ever crashes unexpectedly:

```
[Service]
# Automatically restart caddy if it crashes except if the exit code was 1
RestartPreventExitStatus=1
Restart=on-failure
RestartSec=5s
```

Then, save the file and exit the text editor, and restart the service for it to take effect:

```
sudo systemctl restart caddy
```

### SELinux Considerations[🔗](https://caddyserver.com/docs/running#selinux-considerations "Direct link")

On SELinux enabled systems you have two options:

1.  Install Caddy using the [COPR repo](https://caddyserver.com/docs/install#fedora-redhat-centos). Your systemd file and caddy binary will already be created and labelled correctly (so you may ignore this section). If you wish to use a custom build of Caddy, you'll need to label the executable as described below.
    
2.  [Download Caddy from this site](https://caddyserver.com/download) or compile it with [`xcaddy`](https://github.com/caddyserver/xcaddy). In either case, you will need to label the files yourself.
    

Systemd unit files and their executables will not be run unless labelled with `systemd_unit_file_t` and `bin_t` respectively.

The `systemd_unit_file_t` label is automatically applied to files created in `/etc/systemd/...`, so be sure to create your `caddy.service` file there, as per the [manual installation](https://caddyserver.com/docs/running#manual-installation) instructions.

To tag the `caddy` binary, you can use the following command:

```
semanage fcontext -a -t bin_t /usr/bin/caddy && restorecon -Rv /usr/bin/caddy
```

Windows service[🔗](https://caddyserver.com/docs/running#windows-service "Direct link")
---------------------------------------------------------------------------------------

There are two ways to run Caddy as a service on Windows: [sc.exe](https://caddyserver.com/docs/running#scexe) or [WinSW](https://caddyserver.com/docs/running#winsw).

### sc.exe[🔗](https://caddyserver.com/docs/running#scexe "Direct link")

To create the service, run:

```
sc.exe create caddy start= auto binPath= "YOURPATH\caddy.exe run"
```

(replace `YOURPATH` with the actual path to your `caddy.exe`)

To start:

```
sc.exe start caddy
```

To stop:

```
sc.exe stop caddy
```

### WinSW[🔗](https://caddyserver.com/docs/running#winsw "Direct link")

Install Caddy as a service on Windows with these instructions.

**Requirements:**

*   `caddy.exe` binary that you [downloaded](https://caddyserver.com/download) or [built from source](https://caddyserver.com/docs/build)
*   Any `.exe` from the latest release of the [WinSW](https://github.com/winsw/winsw/releases/latest) service wrapper (the below service config is written for v2.x releases)

Put all files into a service directory. In the following examples, we use `C:\caddy`.

Rename the `WinSW-x64.exe` file to `caddy-service.exe`.

Add a `caddy-service.xml` in the same directory:

```
<service>
  <id>caddy</id>
  <!-- Display name of the service -->
  <name>Caddy Web Server (powered by WinSW)</name>
  <!-- Service description -->
  <description>Caddy Web Server (https://caddyserver.com/)</description>
  <executable>%BASE%\caddy.exe</executable>
  <arguments>run</arguments>
  <log mode="roll-by-time">
    <pattern>yyyy-MM-dd</pattern>
  </log>
</service>
```

You can now install the service using:

```
caddy-service install
```

You might want to start the Windows Services Console to see if the service is running correctly:

```
services.msc
```

Be aware that Windows services cannot be reloaded, so you have to tell caddy directly to reload:

```
caddy reload
```

Restarting is possible via the normal Windows services commands, for example via the Task Manager's "Services" tab.

For customizing the service wrapper, see the [WinSW documentation](https://github.com/winsw/winsw/tree/master#usage)

Docker Compose[🔗](https://caddyserver.com/docs/running#docker-compose "Direct link")
-------------------------------------------------------------------------------------

The simplest way to get up and running with Docker is to use Docker Compose. See the docs on [Docker Hub](https://hub.docker.com/_/caddy) for more additional details about the official Caddy Docker image.

### Setup[🔗](https://caddyserver.com/docs/running#setup "Direct link")

First, create a file `compose.yml` (or add this service to your existing file):

```
services:
  caddy:
    image: caddy:<version>
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      - "443:443/udp"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - ./site:/srv
      - caddy_data:/data
      - caddy_config:/config

volumes:
  caddy_data:
  caddy_config:
```

Make sure to fill in the image `<version>` with the latest version number, which you can find listed on [Docker Hub](https://hub.docker.com/_/caddy) under the "Tags" section.

What this does:

*   Uses the `unless-stopped` restart policy to make sure the Caddy container is restarted automatically when your machine is rebooted.
*   Binds to ports `80` and `443` for HTTP and HTTPS respectively, plus `443/udp` for HTTP/3.
*   Bind mounts the `Caddyfile` file which is your Caddy configuration.
*   Bind mounts the `site` directory to serve your site's static files from `/srv`.
*   Named volumes for `/data` and `/config` to [persist important information](https://caddyserver.com/docs/conventions#file-locations).

Then, create a file named `Caddyfile` beside the `compose.yml`, and write your [Caddyfile](https://caddyserver.com/docs/caddyfile/concepts) config.

If you have static files to serve, you may place them in a `site/` directory beside the configs, then set the [`root`](https://caddyserver.com/docs/caddyfile/directives/root) using `root * /srv`. If you don't, then you may remove the `/srv` volume mount.

If you need a custom build of Caddy with plugins, follow the [Docker build instructions](https://caddyserver.com/docs/build#docker) to create a custom Docker image. Create the `Dockerfile` beside your `compose.yml`, then replace the `image:` line in your `compose.yml` with `build: .` instead.

### Usage[🔗](https://caddyserver.com/docs/running#usage "Direct link")

Then, you can start the container:

```
docker compose up -d
```

To reload Caddy after making changes to your Caddyfile:

```
docker compose exec -w /etc/caddy caddy caddy reload
```

To see Caddy's 1000 most recent logs, and `f`ollow to see new ones streaming in:

```
docker compose logs caddy -n=1000 -f
```

### Local HTTPS with Docker[🔗](https://caddyserver.com/docs/running#local-https-with-docker "Direct link")

When using Docker for local development with HTTPS, you might use a [hostname](https://caddyserver.com/docs/caddyfile/concepts#addresses) like `localhost` or `app.localhost`. This enables [Local HTTPS](https://caddyserver.com/docs/automatic-https#local-https) using Caddy's local CA to issue certificates. This means that HTTP clients outside the container will not trust the TLS certificate served by Caddy. To solve this, you may install Caddy's root CA cert on your host machine's trust store:

```
docker compose cp \
    caddy:/data/caddy/pki/authorities/local/root.crt \
    %TEMP%/root.crt \
  && certutil -addstore -f "ROOT" %TEMP%/root.crt
```

Many web browsers now use their own trust store (ignoring the system's trust store), so you may also need to install the certificate manually there as well, using the `root.crt` file copied from the container in the command above.

*   For Firefox, go to Preferences \> Privacy & Security \> Certificates \> View Certificates \> Authorities \> Import, and select the `root.crt` file.
    
*   For Chrome, go to Settings \> Privacy and security \> Security \> Manage certificates \> Authorities \> Import, and select the `root.crt` file.
