Title: Module layer4 - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/layer4

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module layer4**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/layer4#docs "Direct link")
-------------------------------------------------------------------------------

```
{▾	"servers": {
		"": {▾			"listen": [""],			"routes": [{▾				"match": [{•••}],				"handle": [{•••}]			}]		}
	}}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/mholt/caddy-l4](https://github.com/mholt/caddy-l4)**

**Custom builds:**`xcaddy build --with github.com/mholt/caddy-l4/layer4`

Description[🔗](https://caddyserver.com/docs/modules/layer4#docs "Direct link")
-------------------------------------------------------------------------------

layer4 is a Caddy app that operates closest to layer 4 of the OSI model.

[🔗](https://caddyserver.com/docs/modules/layer4#servers)servers
Server represents a Caddy layer4 server.

[🔗](https://caddyserver.com/docs/modules/layer4#servers/listen)servers/listen
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/layer4#servers/routes)servers/routes
Route represents a collection of handlers that are gated by matching and other kinds of logic.

[🔗](https://caddyserver.com/docs/modules/layer4#servers/routes/match)servers/routes/match
ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

[🔗](https://caddyserver.com/docs/modules/layer4#servers/routes/handle)servers/routes/handle
There are no docs for this property.
