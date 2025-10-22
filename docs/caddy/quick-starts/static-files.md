Title: Static files quick-start - Caddy Documentation

URL Source: https://caddyserver.com/docs/quick-starts/static-files

Markdown Content:
This guide will show you how to get a production-ready static file server up and running quickly.

**Prerequisites:**

*   Basic terminal / command line skills
*   `caddy` in your PATH
*   A folder containing your website

* * *

There are two easy ways to get a quick file server up and running.

Command line[🔗](https://caddyserver.com/docs/quick-starts/static-files#command-line "Direct link")
---------------------------------------------------------------------------------------------------

In your terminal, change to the root directory of your site and run:

`caddy file-server`
If you get a permissions error, it probably means your OS does not allow you to bind to low ports -- so use a high port instead:

`caddy file-server --listen :2015`
Then open [localhost](http://localhost/) (or [localhost:2015](http://localhost:2015/)) in your browser to see your site!

If you don't have an index file but you want to display a file listing, use the `--browse` option:

`caddy file-server --browse`
You can use another folder as the site root:

`caddy file-server --root ~/mysite`
Caddyfile[🔗](https://caddyserver.com/docs/quick-starts/static-files#caddyfile "Direct link")
---------------------------------------------------------------------------------------------

In the root of your site, create a file called `Caddyfile` with these contents:

```
localhost

file_server
```

If you don't have permission to bind to low ports, replace `localhost` with `localhost:2015` (or some other high port).

Then, from the same directory, run:

`caddy run`
You can then load [localhost](https://localhost/) (or whatever the address is in your config) to see your site!

The [`file_server` directive](https://caddyserver.com/docs/caddyfile/directives/file_server) has more options for you to customize your site. Make sure to [reload](https://caddyserver.com/docs/command-line#caddy-reload) Caddy (or stop and start it again) when you change the Caddyfile!

If you don't have an index file but you want to display a file listing, use the `browse` argument:

```
localhost

file_server browse
```

You can also use another folder as the site root:

```
localhost

root * /var/www/mysite
file_server
```
