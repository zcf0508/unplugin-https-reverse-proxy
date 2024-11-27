Title: API - Caddy Documentation

URL Source: https://caddyserver.com/docs/api

Markdown Content:
Caddy is configured through an administration endpoint which can be accessed via HTTP using a [REST ![Image 10](https://caddyserver.com/old/resources/images/external-link.svg)](https://en.wikipedia.org/wiki/Representational_state_transfer) API. You can [configure this endpoint](https://caddyserver.com/docs/json/admin/) in your Caddy config.

**Default address: `localhost:2019`**

The default address can be changed by setting the `CADDY_ADMIN` environment variable. Some installation methods may set this to something different. The address in the Caddy config always takes precedence over the default.

The latest configuration will be saved to disk after any changes (unless [disabled](https://caddyserver.com/docs/json/admin/config/)). You can resume the last working config after a restart with [`caddy run --resume`](https://caddyserver.com/docs/command-line#caddy-run), which guarantees config durability in the event of a power cycle or similar.

To get started with the API, try our [API tutorial](https://caddyserver.com/docs/api-tutorial) or, if you only have a minute, our [API quick-start guide](https://caddyserver.com/docs/quick-starts/api).

* * *

*   **[POST /load](https://caddyserver.com/docs/api#post-load)** Sets or replaces the active configuration
    
*   **[POST /stop](https://caddyserver.com/docs/api#post-stop)** Stops the active configuration and exits the process
    
*   **[GET /config/\[path\]](https://caddyserver.com/docs/api#get-configpath)** Exports the config at the named path
    
*   **[POST /config/\[path\]](https://caddyserver.com/docs/api#post-configpath)** Sets or replaces object; appends to array
    
*   **[PUT /config/\[path\]](https://caddyserver.com/docs/api#put-configpath)** Creates new object; inserts into array
    
*   **[PATCH /config/\[path\]](https://caddyserver.com/docs/api#patch-configpath)** Replaces an existing object or array element
    
*   **[DELETE /config/\[path\]](https://caddyserver.com/docs/api#delete-configpath)** Deletes the value at the named path
    
*   **[Using `@id` in JSON](https://caddyserver.com/docs/api#using-id-in-json)** Easily traverse into the config structure
    
*   **[Concurrent config changes](https://caddyserver.com/docs/api#concurrent-config-changes)** Avoid collisions when making unsynchronized changes to config
    
*   **[POST /adapt](https://caddyserver.com/docs/api#post-adapt)** Adapts a configuration to JSON without running it
    
*   **[GET /pki/ca/<id\>](https://caddyserver.com/docs/api#get-pkicaltidgt)** Returns information about a particular [PKI app](https://caddyserver.com/docs/json/apps/pki/) CA
    
*   **[GET /pki/ca/<id\>/certificates](https://caddyserver.com/docs/api#get-pkicaltidgtcertificates)** Returns the certificate chain of a particular [PKI app](https://caddyserver.com/docs/json/apps/pki/) CA
    
*   **[GET /reverse\_proxy/upstreams](https://caddyserver.com/docs/api#get-reverse-proxyupstreams)** Returns the current status of the configured proxy upstreams
    

POST /load
----------

Sets Caddy's configuration, overriding any previous configuration. It blocks until the reload completes or fails. Configuration changes are lightweight, efficient, and incur zero downtime. If the new config fails for any reason, the old config is rolled back into place without downtime.

This endpoint supports different config formats using config adapters. The request's Content-Type header indicates the config format used in the request body. Usually, this should be `application/json` which represents Caddy's native config format. For another config format, specify the appropriate Content-Type so that the value after the forward slash / is the name of the config adapter to use. For example, when submitting a Caddyfile, use a value like `text/caddyfile`; or for JSON 5, use a value such as `application/json5`; etc.

If the new config is the same as the current one, no reload will occur. To force a reload, set `Cache-Control: must-revalidate` in the request headers.

### Examples

Set a new active configuration:

```
curl "http://localhost:2019/load" \
	-H "Content-Type: application/json" \
	-d @caddy.json
```

Note: curl's `-d` flag removes newlines, so if your config format is sensitive to line breaks (e.g. the Caddyfile), use `--data-binary` instead:

```
curl "http://localhost:2019/load" \
	-H "Content-Type: text/caddyfile" \
	--data-binary @Caddyfile
```

POST /stop
----------

Gracefully shuts down the server and exits the process. To only stop the running configuration without exiting the process, use [DELETE /config/](https://caddyserver.com/docs/api#delete-configpath).

### Example

Stop the process:

```
curl -X POST "http://localhost:2019/stop"
```

GET /config/\[path\]
--------------------

Exports Caddy's current configuration at the named path. Returns a JSON body.

### Examples

Export entire config and pretty-print it:

```
curl "http://localhost:2019/config/" | jq
{
	"apps": {
		"http": {
			"servers": {
				"myserver": {
					"listen": [
						":443"
					],
					"routes": [
						{
							"match": [
								{
									"host": [
										"example.com"
									]
								}
							],
							"handle": [
								{
									"handler": "file_server"
								}
							]
						}
					]
				}
			}
		}
	}
}
```

Export just the listener addresses:

```
curl "http://localhost:2019/config/apps/http/servers/myserver/listen"
[":443"]
```

POST /config/\[path\]
---------------------

Changes Caddy's configuration at the named path to the JSON body of the request. If the destination value is an array, POST appends; if an object, it creates or replaces.

As a special case, many items can be added to an array if:

1.  the path ends in `/...`
2.  the element of the path before `/...` refers to an array
3.  the payload is an array

In this case, the elements in the payload's array will be expanded, and each one will be appended to the destination array. In Go terms, this would have the same effect as:

```
baseSlice = append(baseSlice, newElems...)
```

### Examples

Add a listener address:

```
curl \
	-H "Content-Type: application/json" \
	-d '":8080"' \
	"http://localhost:2019/config/apps/http/servers/myserver/listen"
```

Add multiple listener addresses:

```
curl \
	-H "Content-Type: application/json" \
	-d '[":8080", ":5133"]' \
	"http://localhost:2019/config/apps/http/servers/myserver/listen/..."
```

PUT /config/\[path\]
--------------------

Changes Caddy's configuration at the named path to the JSON body of the request. If the destination value is a position (index) in an array, PUT inserts; if an object, it strictly creates a new value.

### Example

Add a listener address in the first slot:

```
curl -X PUT \
	-H "Content-Type: application/json" \
	-d '":8080"' \
	"http://localhost:2019/config/apps/http/servers/myserver/listen/0"
```

PATCH /config/\[path\]
----------------------

Changes Caddy's configuration at the named path to the JSON body of the request. PATCH strictly replaces an existing value or array element.

### Example

Replace the listener addresses:

```
curl -X PATCH \
	-H "Content-Type: application/json" \
	-d '[":8081", ":8082"]' \
	"http://localhost:2019/config/apps/http/servers/myserver/listen"
```

DELETE /config/\[path\]
-----------------------

Removes Caddy's configuration at the named path. DELETE deletes the target value.

### Examples

To unload the entire current configuration but leave the process running:

```
curl -X DELETE "http://localhost:2019/config/"
```

To stop only one of your HTTP servers:

```
curl -X DELETE "http://localhost:2019/config/apps/http/servers/myserver"
```

Using `@id` in JSON
-------------------

You can embed IDs in your JSON document for easier direct access to those parts of the JSON.

Simply add a field called `"@id"` to an object and give it a unique name. For example, if you had a reverse proxy handler that you wanted to access frequently:

```
{
	"@id": "my_proxy",
	"handler": "reverse_proxy"
}
```

To use it, simply make a request to the `/id/` API endpoint in the same way you would to the corresponding `/config/` endpoint, but without the whole path. The ID takes the request directly into that scope of the config for you.

For example, to access the upstreams of the reverse proxy without an ID, the path would be something like

```
/config/apps/http/servers/myserver/routes/1/handle/0/upstreams
```

but with an ID, the path becomes

```
/id/my_proxy/upstreams
```

which is much easier to remember and write by hand.

Concurrent config changes
-------------------------

Caddy's config API provides [ACID guarantees ![Image 11](https://caddyserver.com/old/resources/images/external-link.svg)](https://en.wikipedia.org/wiki/ACID) for individual requests, but changes that involve more than a single request are subject to collisions or data loss if not properly synchronized.

For example, two clients may `GET /config/foo` at the same time, make an edit within that scope (config path), then call `POST|PUT|PATCH|DELETE /config/foo/...` at the same time to apply their changes, resulting in a collision: either one will overwrite the other, or the second might leave the config in an unintended state since it was applied to a different version of the config than it was prepared against. This is because the changes are not aware of each other.

Caddy's API does not support transactions spanning multiple requests, and HTTP is a stateless protocol. However, you can use the `Etag` and `If-Match` headers to detect and prevent collisions for any and all changes as a kind of optimistic concurrency control. This is useful if there is any chance that you are using Caddy's `/config/...` endpoints concurrently without synchronization. All responses to `GET /config/...` requests have an HTTP header called `Etag` that contains the path and a hash of the contents in that scope (e.g. `Etag: "/config/apps/http/servers 65760b8e"`). Simply set the `If-Match` header on a mutative request to that of an Etag header from a previous `GET` request.

The basic algorithm for this is as follows:

1.  Perform a `GET` request to any scope `S` within the config. Hold onto the `Etag` header of the response.
2.  Make your desired change on the returned config.
3.  Perform a `POST|PUT|PATCH|DELETE` request within scope `S`, setting the `If-Match` request header to the stored `Etag` value.
4.  If the response is HTTP 412 (Precondition Failed), repeat from step 1, or give up after too many attempts.

This algorithm safely allows multiple, overlapping changes to Caddy's configuration without explicit synchronization. It is designed so that simultaneous changes to different parts of the config don't require a retry: only changes that overlap the same scope of the config can possibly cause a collision and thus require a retry.

POST /adapt
-----------

Adapts a configuration to Caddy JSON without loading or running it. If successful, the resulting JSON document is returned in the response body.

The Content-Type header is used to specify the configuration format in the same way that [/load](https://caddyserver.com/docs/api#post-load) works. For example, to adapt a Caddyfile, set `Content-Type: text/caddyfile`.

This endpoint will adapt any configuration format as long as the associated [config adapter](https://caddyserver.com/docs/config-adapters) is plugged in to your Caddy build.

### Examples

Adapt a Caddyfile to JSON:

```
curl "http://localhost:2019/adapt" \
	-H "Content-Type: text/caddyfile" \
	--data-binary @Caddyfile
```

GET /pki/ca/<id\>
-----------------

Returns information about a particular [PKI app](https://caddyserver.com/docs/json/apps/pki/) CA by its ID. If the requested CA ID is the default (`local`), then the CA will be provisioned if it has not already been. Other CA IDs will return an error if they have not been previously provisioned.

```
curl "http://localhost:2019/pki/ca/local" | jq
{
	"id": "local",
	"name": "Caddy Local Authority",
	"root_common_name": "Caddy Local Authority - 2022 ECC Root",
	"intermediate_common_name": "Caddy Local Authority - ECC Intermediate",
	"root_certificate": "-----BEGIN CERTIFICATE-----\nMIIB ... gRw==\n-----END CERTIFICATE-----\n",
	"intermediate_certificate": "-----BEGIN CERTIFICATE-----\nMIIB ... FzQ==\n-----END CERTIFICATE-----\n"
}
```

GET /pki/ca/<id\>/certificates
------------------------------

Returns the certificate chain of a particular [PKI app](https://caddyserver.com/docs/json/apps/pki/) CA by its ID. If the requested CA ID is the default (`local`), then the CA will be provisioned if it has not already been. Other CA IDs will return an error if they have not been previously provisioned.

This endpoint is used internally by the [`caddy trust`](https://caddyserver.com/docs/command-line#caddy-trust) command to allow installing the CA's root certificate to your system's trust store.

```
curl "http://localhost:2019/pki/ca/local/certificates"
-----BEGIN CERTIFICATE-----
MIIByDCCAW2gAwIBAgIQViS12trTXBS/nyxy7Zg9JDAKBggqhkjOPQQDAjAwMS4w
...
By75JkP6C14OfU733oElfDUMa5ctbMY53rWFzQ==
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIBpDCCAUmgAwIBAgIQTS5a+3LUKNxC6qN3ZDR8bDAKBggqhkjOPQQDAjAwMS4w
...
9M9t0FwCIQCAlUr4ZlFzHE/3K6dARYKusR1ck4A3MtucSSyar6lgRw==
-----END CERTIFICATE-----
```

GET /reverse\_proxy/upstreams
-----------------------------

Returns the current status of the configured reverse proxy upstreams (backends) as a JSON document.

```
curl "http://localhost:2019/reverse_proxy/upstreams" | jq
[
	{"address": "10.0.1.1:80", "num_requests": 4, "fails": 2},
	{"address": "10.0.1.2:80", "num_requests": 5, "fails": 4},
	{"address": "10.0.1.3:80", "num_requests": 3, "fails": 3}
]
```

Each entry in the JSON array is a configured [upstream](https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/upstreams/) stored in the global upstream pool.

*   **address** is the dial address of the upstream.
*   **num\_requests** is the amount of active requests currently being handled by the upstream.
*   **fails** the current number of failed requests remembered, as configured by passive health checks.

If your goal is to determine a backend's availability, you will need to cross-check relevant properties of the upstream against the handler configuration you are utilizing. For example, if you've enabled [passive health checks](https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/health_checks/passive/) for your proxies, then you need to also take into consideration the `fails` and `num_requests` values to determine if an upstream is considered available: check that the `fails` amount is less than your configured maximum amount of failures for your proxy (i.e. [`max_fails`](https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/health_checks/passive/max_fails/)), and that `num_requests` is less than or equal to your configured amount of maximum requests per upstream (i.e. [`unhealthy_request_count`](https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/health_checks/passive/unhealthy_request_count/) for the whole proxy, or [`max_requests`](https://caddyserver.com/docs/json/apps/http/servers/routes/handle/reverse_proxy/upstreams/max_requests/) for individual upstreams).
