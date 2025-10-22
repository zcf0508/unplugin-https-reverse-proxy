Title: API Tutorial - Caddy Documentation

URL Source: https://caddyserver.com/docs/api-tutorial

Markdown Content:
This tutorial will show you how to use Caddy's [admin API](https://caddyserver.com/docs/api), which makes it possible to automate in a programmable fashion.

**Objectives:**

*   🔲 Run the daemon
*   🔲 Give Caddy a config
*   🔲 Test config
*   🔲 Replace active config
*   🔲 Traverse config
*   🔲 Use `@id` tags

**Prerequisites:**

*   Basic terminal / command line skills
*   Basic JSON experience
*   `caddy` and `curl` in your PATH

* * *

To start the Caddy daemon, use the `run` subcommand:

`caddy run`
This blocks forever, but what is it doing? At the moment... nothing. By default, Caddy's configuration ("config") is blank. We can verify this using the [admin API](https://caddyserver.com/docs/api) in another terminal:

`curl localhost:2019/config/`
We can make Caddy useful by giving it a config. One way to do this is by making a POST request to the [/load](https://caddyserver.com/docs/api#post-load) endpoint. Just like any HTTP request, there are many ways to do this, but in this tutorial we'll use `curl`.

Your first config
-----------------

To prepare our request, we need to make a config. Caddy's configuration is simply a [JSON document](https://caddyserver.com/docs/json/) (or [anything that converts to JSON](https://caddyserver.com/docs/config-adapters)).

Save this to a JSON file:

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

`curl localhost:2019/config/`
Test that it works by going to [localhost:2015](http://localhost:2015/) in your browser or using `curl`:

```
curl localhost:2015
Hello, world!
```

If you see _Hello, world!_, then congrats -- it's working! It's always a good idea to make sure your config works as you expect, especially before deploying into production.

Let's change our welcome message from "Hello world!" to something a little more motivational: "I can do hard things." Make this change in your config file, so that the handler object now looks like this:

```
{
	"handler": "static_response",
	"body": "I can do hard things."
}
```

Save the config file, then update Caddy's active configuration by running the same POST request again:

```
curl localhost:2019/load \
	-H "Content-Type: application/json" \
	-d @caddy.json
```

For good measure, verify that the config was updated:

`curl localhost:2019/config/`
Test it by refreshing the page in your browser (or running `curl` again), and you will see an inspirational message!

Config traversal
----------------

Instead of uploading the entire config file for a small change, let's use a powerful feature of Caddy's API to make the change without ever touching our config file.

Using the request URI's path, we can traverse into the config structure and update only the message string (be sure to scroll right if clipped):

```
curl \
	localhost:2019/config/apps/http/servers/example/routes/0/handle/0/body \
	-H "Content-Type: application/json" \
	-d '"Work smarter, not harder."'
```

You can verify that it worked with a similar GET request, for example:

`curl localhost:2019/config/apps/http/servers/example/routes`
You should see:

```
[{"handle":[{"body":"Work smarter, not harder.","handler":"static_response"}]}]
```

**Important note:** This should be obvious, but once you use the API to make a change that is not in your original config file, your config file becomes obsolete. There are a few ways to handle this:

*   Use the `--resume` of the [caddy run](https://caddyserver.com/docs/command-line#caddy-run) command to use the last active config.
*   Don't mix the use of config files with changes via the API; have one source of truth.
*   [Export Caddy's new configuration](https://caddyserver.com/docs/api#get-configpath) with a subsequent GET request (less recommended than the first two options).

Using `@id` in JSON
-------------------

Config traversal is certainly useful, but the paths are little long, don't you think?

We can give our handler object an [`@id` tag](https://caddyserver.com/docs/api#using-id-in-json) to make it easier to access:

```
curl \
	localhost:2019/config/apps/http/servers/example/routes/0/handle/0/@id \
	-H "Content-Type: application/json" \
	-d '"msg"'
```

This adds a property to our handler object: `"@id": "msg"`, so it now looks like this:

```
{
	"@id": "msg",
	"body": "Work smarter, not harder.",
	"handler": "static_response"
}
```

We can then access it directly:

`curl localhost:2019/id/msg`
And now we can change the message with a shorter path:

```
curl \
	localhost:2019/id/msg/body \
	-H "Content-Type: application/json" \
	-d '"Some shortcuts are good."'
```

And check it again:

`curl localhost:2019/id/msg/body`
