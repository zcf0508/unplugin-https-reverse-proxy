Title: API Quick-start - Caddy Documentation

URL Source: https://caddyserver.com/docs/quick-starts/api

Markdown Content:
**Prerequisites:**

*   Basic terminal / command line skills
*   `caddy` and `curl` in your PATH

* * *

First start Caddy:

```
caddy start
```

Caddy is currently running idle (with a blank configuration). Give it a simple config with `curl`:

```
curl localhost:2019/load \
    -H "Content-Type: application/json" \
    -d @- << EOF
    {
        "apps": {
            "http": {
                "servers": {
                    "hello": {
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
EOF
```

Giving a POST body with [Heredoc](https://en.wikipedia.org/wiki/Here_document#Unix_shells) can be tedious, so if you prefer to use files, save the JSON to a file called `caddy.json` and then use this command instead:

```
curl localhost:2019/load \
  -H "Content-Type: application/json" \
  -d @caddy.json
```

Now load [localhost:2015](http://localhost:2015/) in your browser or use `curl`:

```
curl localhost:2015
Hello, world!
```

We can also define multiple sites on different interfaces with this JSON:

```
{
	"apps": {
		"http": {
			"servers": {
				"hello": {
					"listen": [":2015"],
					"routes": [
						{
							"handle": [{
								"handler": "static_response",
								"body": "Hello, world!"
							}]
						}
					]
				},
				"bye": {
					"listen": [":2016"],
					"routes": [
						{
							"handle": [{
								"handler": "static_response",
								"body": "Goodbye, world!"
							}]
						}
					]
				}
			}
		}
	}
}
```

Update your JSON then perform the API request again.

Try out your new "goodbye" endpoint [in your browser](http://localhost:2016/) or with `curl` to make sure it works:

```
curl localhost:2016
Goodbye, world!
```

When you are done with Caddy, make sure to stop it:

```
caddy stop
```

There's a lot more you can do with the API, including exporting configuration and making fine-grained changes to the config (as opposed to updating the whole thing). Be sure to read the [full API tutorial](https://caddyserver.com/docs/api-tutorial) to learn how!

Further reading
---------------

*   [Full API tutorial](https://caddyserver.com/docs/api-tutorial)
*   [API documentation](https://caddyserver.com/docs/api)
