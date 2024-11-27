Title: Getting Started - Caddy Documentation

URL Source: https://caddyserver.com/docs/getting-started

Markdown Content:
Welcome to Caddy! This tutorial will explore the basics of using Caddy and help you get familiar with it at a high level.

**Objectives:**

*   🔲 Run the daemon
*   🔲 Try the API
*   🔲 Give Caddy a config
*   🔲 Test config
*   🔲 Make a Caddyfile
*   🔲 Use the config adapter
*   🔲 Start with an initial config
*   🔲 Compare JSON and Caddyfile
*   🔲 Compare API and config files
*   🔲 Run in the background
*   🔲 Zero-downtime config reload

**Prerequisites:**

*   Basic terminal / command line skills
*   Basic text editor skills
*   `caddy` and `curl` in your PATH

* * *

**If you [installed Caddy](https://caddyserver.com/docs/install) from a package manager, Caddy might already be running as a service. If so, please stop the service before doing this tutorial.**

Let's start by running it:

```
caddy
```

Oops; without a subcommand, the `caddy` command only displays help text. You can use this any time you forget what to do.

To start Caddy as a daemon, use the `run` subcommand:

```
caddy run
```

This blocks forever, but what is it doing? At the moment... nothing. By default, Caddy's configuration ("config") is blank. We can verify this using the [admin API](https://caddyserver.com/docs/api) in another terminal:

```
curl localhost:2019/config/
```

We can make Caddy useful by giving it a config. This can be done many ways, but we'll start by making a POST request to the [/load](https://caddyserver.com/docs/api#post-load) endpoint using `curl` in the next section.

Your first config
-----------------

To prepare our request, we need to make a config. At its core, Caddy's configuration is simply a [JSON document](https://caddyserver.com/docs/json/).

Save this to a JSON file (e.g. `caddy.json`):

```
{
	"apps": {
		"http": {
			"servers": {
				"example": {
					"listen": [":2015"],
					"routes": [
						{
							"handle": [{
								"handler": "static_response",
								"body": "Hello, world!"
							}]
						}
					]
				}
			}
		}
	}
}
```

Then upload it:

```
curl localhost:2019/load \
	-H "Content-Type: application/json" \
	-d @caddy.json
```

We can verify that Caddy applied our new config with another GET request:

```
curl localhost:2019/config/
```

Test that it works by going to [localhost:2015](http://localhost:2015/) in your browser or use `curl`:

```
curl localhost:2015
Hello, world!
```

If you see _Hello, world!_, then congrats -- it's working! It's always a good idea to make sure your config works as you expect, especially before deploying into production.

Your first Caddyfile
--------------------

That was _kind of a lot of work_ just for Hello World.

Another way to configure Caddy is with the [**Caddyfile**](https://caddyserver.com/docs/caddyfile). The same config we wrote in JSON above can be expressed simply as:

```
:2015

respond "Hello, world!"
```

Save that to a file named `Caddyfile` (no extension) in the current directory.

Stop Caddy if it is already running (Ctrl+C), then run:

```
caddy adapt
```

Or if you stored the Caddyfile somewhere else or named it something other than `Caddyfile`:

```
caddy adapt --config /path/to/Caddyfile
```

You will see JSON output! What happened here?

We just used a [_config adapter_](https://caddyserver.com/docs/config-adapters) to convert our Caddyfile to Caddy's native JSON structure.

While we could take that output and make another API request, we can skip all those steps because the `caddy` command can do it for us. If there is a file called Caddyfile in the current directory and no other config is specified, Caddy will load the Caddyfile, adapt it for us, and run it right away.

Now that there is a Caddyfile in the current folder, let's do `caddy run` again:

```
caddy run
```

Or if your Caddyfile is somewhere else:

```
caddy run --config /path/to/Caddyfile
```

(If it is called something else that doesn't start with "Caddyfile", you will need to specify `--adapter caddyfile`.)

You can now try loading your site again and you will see that it is working!

As you can see, there are several ways you can start Caddy with an initial config:

*   A file named Caddyfile in the current directory
*   The `--config` flag (optionally with the `--adapter` flag)
*   The `--resume` flag (if a config was loaded previously)

JSON vs. Caddyfile
------------------

Now you know that the Caddyfile is just converted to JSON for you.

The Caddyfile seems easier than JSON, but should you always use it? There are pros and cons to each approach. The answer depends on your requirements and use case.

| JSON | Caddyfile |
| --- | --- |
| Easy to generate | Easy to craft by hand |
| Easily programmable | Awkward to automate |
| Extremely expressive | Moderately expressive |
| Full range of Caddy functionality | Most of Caddy functionality |
| Allows config traversal | Cannot traverse within Caddyfile |
| Partial config changes | Whole config changes only |
| Can be exported | Cannot be exported |
| Compatible with all API endpoints | Compatible with some API endpoints |
| Documentation generated automatically | Documentation is hand-written |
| Ubiquitous | Niche |
| More efficient | More computational |
| Kind of boring | Kind of fun |
| **Learn more: [JSON structure](https://caddyserver.com/docs/json/)** | **Learn more: [Caddyfile docs](https://caddyserver.com/docs/caddyfile)** |

You will need to decide which is best for your use case.

It is important to note that both JSON and the Caddyfile (and [any other supported config adapter](https://caddyserver.com/docs/config-adapters)) can be used with [Caddy's API](https://caddyserver.com/docs/api). However, you get the full range of Caddy's functionality and API features if you use JSON. If using a config adapter, the only way to load or change the config with the API is the [/load endpoint](https://caddyserver.com/docs/api#post-load).

API vs. Config files
--------------------

You will also want to decide whether your workflow is API-based or CLI-based. (You _can_ use both the API and config files on the same server, but we don't recommend it: best to have one source of truth.)

| API | Config files |
| --- | --- |
| Make config changes with HTTP requests | Make config changes with shell commands |
| Easy to scale | Difficult to scale |
| Difficult to manage by hand | Easy to manage by hand |
| Really fun | Also fun |
| **Learn more: [API tutorial](https://caddyserver.com/docs/api-tutorial)** | **Learn more: [Caddyfile tutorial](https://caddyserver.com/docs/caddyfile-tutorial)** |

The choice of API or config file workflow is orthogonal to the use of config adapters: you can use JSON but store it in a file and use the command line interface; conversely, you can also use the Caddyfile with the API.

But most people will use JSON+API or Caddyfile+CLI combinations.

As you can see, Caddy is well-suited for a wide variety of use cases and deployments!

Start, stop, run
----------------

Since Caddy is a server, it runs indefinitely. That means your terminal won't unblock after you execute `caddy run` until the process is terminated (usually with Ctrl+C).

Although `caddy run` is the most common and is usually recommended (especially when making a system service!), you can alternatively use `caddy start` to start Caddy and have it run in the background:

```
caddy start
```

This will let you use your terminal again, which is convenient in some interactive headless environments.

You will then have to stop the process yourself, since Ctrl+C won't stop it for you:

```
caddy stop
```

Or use [the /stop endpoint](https://caddyserver.com/docs/api#post-stop) of the API.

Reloading config
----------------

Your server can perform zero-downtime config reloads/changes.

All [API endpoints](https://caddyserver.com/docs/api) that load or change config are graceful with zero downtime.

When using the command line, however, it may be tempting to use Ctrl+C to stop your server and then restart it again to pick up the new configuration. Don't do this: stopping and starting the server is orthogonal to config changes, and will result in downtime.

Instead, use the [`caddy reload`](https://caddyserver.com/docs/command-line#caddy-reload) command for a graceful config change:

```
caddy reload
```

This actually just uses the API under the hood. It will load and, if necessary, adapt your config file to JSON, then gracefully replace the active configuration without downtime.

If there are any errors loading the new config, Caddy rolls back to the last working config.
