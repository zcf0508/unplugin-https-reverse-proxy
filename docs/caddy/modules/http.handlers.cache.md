Title: Module http.handlers.cache - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.cache

Markdown Content:
Module http.handlers.cache - Caddy Documentation

===============

[![Image 1: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg)](https://caddyserver.com/)

Documentation

 a [![Image 2](https://caddyserver.com/old/resources/images/zerossl-logo.svg)](https://zerossl.com/) project 

Search K

[Download](https://caddyserver.com/download)[Documentation](https://caddyserver.com/docs/)[Forum](https://caddy.community/)[GitHub](https://github.com/caddyserver/caddy)[Account](https://caddyserver.com/account/)[**Support**](https://caddyserver.com/support)[Sponsor](https://caddyserver.com/sponsor)
*   [Welcome](https://caddyserver.com/docs/)
*   [Wiki ![Image 3](https://caddyserver.com/old/resources/images/external-link.svg)](https://caddy.community/c/wiki/13)
*   Get Caddy
*   [Install](https://caddyserver.com/docs/install)
*   [Build from source](https://caddyserver.com/docs/build)
*   Tutorials
*   [Getting Started](https://caddyserver.com/docs/getting-started)
*   [Quick-starts](https://caddyserver.com/docs/quick-starts)
    *   [Using the API](https://caddyserver.com/docs/quick-starts/api)
    *   [Using a Caddyfile](https://caddyserver.com/docs/quick-starts/caddyfile)
    *   [Static files](https://caddyserver.com/docs/quick-starts/static-files)
    *   [Reverse proxy](https://caddyserver.com/docs/quick-starts/reverse-proxy)
    *   [HTTPS](https://caddyserver.com/docs/quick-starts/https)

*   [Caddy API](https://caddyserver.com/docs/api-tutorial)
*   [Caddyfile](https://caddyserver.com/docs/caddyfile-tutorial)
*   Reference
*   [Command Line](https://caddyserver.com/docs/command-line)
*   [API](https://caddyserver.com/docs/api)
*   [Caddyfile](https://caddyserver.com/docs/caddyfile)
    *   [Concepts](https://caddyserver.com/docs/caddyfile/concepts)
    *   [Global options](https://caddyserver.com/docs/caddyfile/options)
    *   [Directives](https://caddyserver.com/docs/caddyfile/directives)
    *   [Request matchers](https://caddyserver.com/docs/caddyfile/matchers)
    *   [Response matchers](https://caddyserver.com/docs/caddyfile/response-matchers)
    *   [Common patterns](https://caddyserver.com/docs/caddyfile/patterns)

*   [Modules](https://caddyserver.com/docs/modules/)
*   [JSON Config Structure](https://caddyserver.com/docs/json/)
*   [Automatic HTTPS](https://caddyserver.com/docs/automatic-https)
*   Articles
*   [Caddy Architecture](https://caddyserver.com/docs/architecture)
*   [Conventions](https://caddyserver.com/docs/conventions)
*   [Config Adapters](https://caddyserver.com/docs/config-adapters)
*   [Keep Caddy Running](https://caddyserver.com/docs/running)
*   [How Logging Works](https://caddyserver.com/docs/logging)
*   [Monitoring Caddy](https://caddyserver.com/docs/metrics)
*   [Profiling Caddy](https://caddyserver.com/docs/profiling)
*   [Verifying Asset Signatures](https://caddyserver.com/docs/signature-verification)
*   [Upgrading to Caddy 2](https://caddyserver.com/docs/v2-upgrade)
*   Developers
*   [Extending Caddy](https://caddyserver.com/docs/extending-caddy)
    *   [Caddyfile Support](https://caddyserver.com/docs/extending-caddy/caddyfile)
    *   [Config Adapters](https://caddyserver.com/docs/extending-caddy/config-adapters)
    *   [Placeholders](https://caddyserver.com/docs/extending-caddy/placeholders)

*   [Module Namespaces](https://caddyserver.com/docs/extending-caddy/namespaces)

*   [v1 Docs ![Image 4](https://caddyserver.com/old/resources/images/external-link.svg)](https://caddyserver.com/caddy-v1-docs-archive.tar.gz)

All Modules
===========

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

Module http.handlers.cache
==========================

 There is more than one module named **http.handlers.cache**. Choose one by its repository. 

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [](javascript:)**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#docs "Direct link")
--------------------------------------------------------------------------------------------

Field List
----------

▸github.com/caddyserver/cache-handler

```
{▾	"log_level": "",	"allowed_http_verbs": [""],	"headers": [""],	"badger": {▾		"url": "",		"path": "",		"configuration": 	},	"key": {▾		"disable_body": false,		"disable_host": false,		"disable_method": false,		"disable_query": false,		"hide": false,		"headers": [""]	},	"cache_keys": {
		"": {▾			"disable_body": false,			"disable_host": false,			"disable_method": false,			"disable_query": false,			"hide": false,			"headers": [""]		}
	},	"nuts": {▾		"url": "",		"path": "",		"configuration": 	},	"etcd": {▾		"url": "",		"path": "",		"configuration": 	},	"redis": {▾		"url": "",		"path": "",		"configuration": 	},	"olric": {▾		"url": "",		"path": "",		"configuration": 	},	"timeout": {▾		"backend": {▾		},		"cache": {▾		}	},	"ttl": {▾	},	"stale": {▾	},	"default_cache_control": "",	"cache_name": ""}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/caddyserver/cache-handler](https://github.com/caddyserver/cache-handler)**

**Custom builds:**`xcaddy build --with github.com/caddyserver/cache-handler`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#docs "Direct link")
--------------------------------------------------------------------------------------------

http.handlers.cache allows the user to set up an HTTP cache system, RFC-7234 compliant and supports the tag based cache purge, distributed and not-distributed storage, key generation tweaking.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#log_level)log_level
Logger level, fallback on caddy's one when not redefined.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#allowed_http_verbs)allowed_http_verbs
Allowed HTTP verbs to be cached by the system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#headers)headers
Headers to add to the cache key if they are present.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger)badger
Configure the Badger cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger/url)badger/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger/path)badger/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger/configuration)badger/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key)key
Configure the global key generation.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_body)key/disable_body
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_host)key/disable_host
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_method)key/disable_method
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_query)key/disable_query
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/hide)key/hide
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/headers)key/headers
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys)cache_keys
Override the cache key generation matching the pattern.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/disable_body)cache_keys/disable_body
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/disable_host)cache_keys/disable_host
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/disable_method)cache_keys/disable_method
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/disable_query)cache_keys/disable_query
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/hide)cache_keys/hide
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/headers)cache_keys/headers
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts)nuts
Configure the Badger cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts/url)nuts/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts/path)nuts/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts/configuration)nuts/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd)etcd
Enable the Etcd distributed cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd/url)etcd/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd/path)etcd/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd/configuration)etcd/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis)redis
Enable the Redis distributed cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis/url)redis/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis/path)redis/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis/configuration)redis/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric)olric
Enable the Olric distributed cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric/url)olric/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric/path)olric/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric/configuration)olric/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#timeout)timeout
Time to live for a key, using time.duration.

Timeout configuration to handle the cache provider and the reverse-proxy timeout.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#timeout/backend)timeout/backend
Duration is the super object to wrap the duration and be able to parse it from the configuration

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#timeout/cache)timeout/cache
Duration is the super object to wrap the duration and be able to parse it from the configuration

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#ttl)ttl
Time to live for a key, using time.duration.

Duration is the super object to wrap the duration and be able to parse it from the configuration

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#stale)stale
Time to live for a stale key, using time.duration.

Duration is the super object to wrap the duration and be able to parse it from the configuration

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#default_cache_control)default_cache_control
The default Cache-Control header value if none set by the upstream server.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_name)cache_name
The cache name to use in the Cache-Status response header.

▸github.com/caddyserver/cache-handler

```
{▾	"log_level": "",	"allowed_http_verbs": [""],	"headers": [""],	"badger": {▾		"found": false,		"url": "",		"path": "",		"configuration": 	},	"key": {▾		"disable_body": false,		"disable_host": false,		"disable_method": false,		"disable_query": false,		"disable_scheme": false,		"hash": false,		"hide": false,		"template": "",		"headers": [""]	},	"cache_keys": {
		"": {▾			"disable_body": false,			"disable_host": false,			"disable_method": false		}
	},	"nuts": {▾		"url": "",		"path": "",		"configuration": 	},	"etcd": {▾		"url": "",		"path": "",		"configuration": 	},	"redis": {▾		"url": "",		"path": "",		"configuration": 	},	"olric": {▾		"url": "",		"path": "",		"configuration": 	},	"timeout": {▾		"backend": {▾		},		"cache": {▾		}	},	"ttl": {▾	},	"stale": {▾	},	"default_cache_control": "",	"cache_name": ""}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/caddyserver/cache-handler](https://github.com/caddyserver/cache-handler)**

**Custom builds:**`xcaddy build --with github.com/caddyserver/cache-handler`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#docs "Direct link")
--------------------------------------------------------------------------------------------

http.handlers.cache allows the user to set up an HTTP cache system, RFC-7234 compliant and supports the tag based cache purge, distributed and not-distributed storage, key generation tweaking.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#log_level)log_level
Logger level, fallback on caddy's one when not redefined.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#allowed_http_verbs)allowed_http_verbs
Allowed HTTP verbs to be cached by the system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#headers)headers
Headers to add to the cache key if they are present.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger)badger
Configure the Badger cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger/found)badger/found
Found to determine if we can use that storage.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger/url)badger/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger/path)badger/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger/configuration)badger/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key)key
Configure the global key generation.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_body)key/disable_body
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_host)key/disable_host
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_method)key/disable_method
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_query)key/disable_query
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_scheme)key/disable_scheme
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/hash)key/hash
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/hide)key/hide
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/template)key/template
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/headers)key/headers
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys)cache_keys
Override the cache key generation matching the pattern.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/disable_body)cache_keys/disable_body
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/disable_host)cache_keys/disable_host
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/disable_method)cache_keys/disable_method
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts)nuts
Configure the Badger cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts/url)nuts/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts/path)nuts/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts/configuration)nuts/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd)etcd
Enable the Etcd distributed cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd/url)etcd/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd/path)etcd/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd/configuration)etcd/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis)redis
Enable the Redis distributed cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis/url)redis/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis/path)redis/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis/configuration)redis/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric)olric
Enable the Olric distributed cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric/url)olric/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric/path)olric/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric/configuration)olric/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#timeout)timeout
Time to live for a key, using time.duration.

Timeout configuration to handle the cache provider and the reverse-proxy timeout.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#timeout/backend)timeout/backend
Duration is the super object to wrap the duration and be able to parse it from the configuration

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#timeout/cache)timeout/cache
Duration is the super object to wrap the duration and be able to parse it from the configuration

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#ttl)ttl
Time to live for a key, using time.duration.

Duration is the super object to wrap the duration and be able to parse it from the configuration

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#stale)stale
Time to live for a stale key, using time.duration.

Duration is the super object to wrap the duration and be able to parse it from the configuration

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#default_cache_control)default_cache_control
The default Cache-Control header value if none set by the upstream server.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_name)cache_name
The cache name to use in the Cache-Status response header.

▸github.com/darkweak/souin

```
{▾	"log_level": "",	"allowed_http_verbs": [""],	"headers": [""],	"badger": {▾		"found": false,		"url": "",		"path": "",		"configuration": 	},	"key": {▾		"disable_body": false,		"disable_host": false,		"disable_method": false,		"disable_query": false,		"disable_scheme": false,		"hash": false,		"hide": false,		"template": "",		"headers": [""]	},	"cache_keys": [{
		{▾		}: {▾			"disable_body": false,			"disable_host": false,			"disable_method": false,			"disable_query": false,			"disable_scheme": false,			"hash": false,			"hide": false,			"template": "",			"headers": [""]		}
	}],	"nats": {▾		"found": false,		"url": "",		"path": "",		"configuration": 	},	"nuts": {▾		"found": false,		"url": "",		"path": "",		"configuration": 	},	"otter": {▾		"found": false,		"url": "",		"path": "",		"configuration": 	},	"etcd": {▾		"found": false,		"url": "",		"path": "",		"configuration": 	},	"redis": {▾		"found": false,		"url": "",		"path": "",		"configuration": 	},	"olric": {▾		"found": false,		"url": "",		"path": "",		"configuration": 	},	"timeout": {▾		"backend": {▾		},		"cache": {▾		}	},	"ttl": {▾	},	"simplefs": {▾		"found": false,		"url": "",		"path": "",		"configuration": 	},	"stale": {▾	},	"storers": [""],	"default_cache_control": "",	"cache_name": ""}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/darkweak/souin](https://github.com/darkweak/souin)**

**Custom builds:**`xcaddy build --with github.com/darkweak/souin/plugins/caddy`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#docs "Direct link")
--------------------------------------------------------------------------------------------

http.handlers.cache development repository of the cache handler, allows the user to set up an HTTP cache system, RFC-7234 compliant and supports the tag based cache purge, distributed and not-distributed storage, key generation tweaking.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#log_level)log_level
Logger level, fallback on caddy's one when not redefined.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#allowed_http_verbs)allowed_http_verbs
Allowed HTTP verbs to be cached by the system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#headers)headers
Headers to add to the cache key if they are present.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger)badger
Configure the Badger cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger/found)badger/found
Found to determine if we can use that storage.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger/url)badger/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger/path)badger/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger/configuration)badger/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key)key
Configure the global key generation.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_body)key/disable_body
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_host)key/disable_host
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_method)key/disable_method
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_query)key/disable_query
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_scheme)key/disable_scheme
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/hash)key/hash
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/hide)key/hide
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/template)key/template
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/headers)key/headers
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys)cache_keys
Override the cache key generation matching the pattern.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/disable_body)cache_keys/disable_body
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/disable_host)cache_keys/disable_host
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/disable_method)cache_keys/disable_method
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/disable_query)cache_keys/disable_query
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/disable_scheme)cache_keys/disable_scheme
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/hash)cache_keys/hash
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/hide)cache_keys/hide
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/template)cache_keys/template
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/headers)cache_keys/headers
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nats)nats
Configure the Nats cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nats/found)nats/found
Found to determine if we can use that storage.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nats/url)nats/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nats/path)nats/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nats/configuration)nats/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts)nuts
Configure the Nuts cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts/found)nuts/found
Found to determine if we can use that storage.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts/url)nuts/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts/path)nuts/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts/configuration)nuts/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#otter)otter
Configure the Otter cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#otter/found)otter/found
Found to determine if we can use that storage.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#otter/url)otter/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#otter/path)otter/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#otter/configuration)otter/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd)etcd
Enable the Etcd distributed cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd/found)etcd/found
Found to determine if we can use that storage.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd/url)etcd/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd/path)etcd/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd/configuration)etcd/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis)redis
Enable the Redis distributed cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis/found)redis/found
Found to determine if we can use that storage.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis/url)redis/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis/path)redis/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis/configuration)redis/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric)olric
Enable the Olric distributed cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric/found)olric/found
Found to determine if we can use that storage.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric/url)olric/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric/path)olric/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric/configuration)olric/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#timeout)timeout
Time to live for a key, using time.duration.

Timeout configuration to handle the cache provider and the reverse-proxy timeout.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#timeout/backend)timeout/backend
Duration is the super object to wrap the duration and be able to parse it from the configuration

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#timeout/cache)timeout/cache
Duration is the super object to wrap the duration and be able to parse it from the configuration

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#ttl)ttl
Time to live for a key, using time.duration.

Duration is the super object to wrap the duration and be able to parse it from the configuration

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#simplefs)simplefs
Configure the SimpleFS cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#simplefs/found)simplefs/found
Found to determine if we can use that storage.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#simplefs/url)simplefs/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#simplefs/path)simplefs/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#simplefs/configuration)simplefs/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#stale)stale
Time to live for a stale key, using time.duration.

Duration is the super object to wrap the duration and be able to parse it from the configuration

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#storers)storers
Storage providers chaining and order.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#default_cache_control)default_cache_control
The default Cache-Control header value if none set by the upstream server.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_name)cache_name
The cache name to use in the Cache-Status response header.

▸github.com/darkweak/souin

```
{▾	"log_level": "",	"allowed_http_verbs": [""],	"headers": [""],	"badger": {▾		"url": "",		"path": "",		"configuration": 	},	"key": {▾		"disable_body": false,		"disable_host": false,		"disable_method": false,		"hide": false,		"headers": [""]	},	"cache_keys": {
		"": {▾			"disable_body": false,			"disable_host": false,			"disable_method": false,			"hide": false,			"headers": [""]		}
	},	"nuts": {▾		"url": "",		"path": "",		"configuration": 	},	"etcd": {▾		"url": "",		"path": "",		"configuration": 	},	"redis": {▾		"url": "",		"path": "",		"configuration": 	},	"olric": {▾		"url": "",		"path": "",		"configuration": 	},	"timeout": {▾		"backend": {▾		},		"cache": {▾		}	},	"ttl": {▾	},	"stale": {▾	},	"default_cache_control": "",	"cache_name": ""}
```

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy. 

**Code repository: [https://github.com/darkweak/souin](https://github.com/darkweak/souin)**

**Custom builds:**`xcaddy build --with github.com/darkweak/souin/plugins/caddy`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#docs "Direct link")
--------------------------------------------------------------------------------------------

http.handlers.cache development repository of the cache handler, allows the user to set up an HTTP cache system, RFC-7234 compliant and supports the tag based cache purge, distributed and not-distributed storage, key generation tweaking.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#log_level)log_level
Logger level, fallback on caddy's one when not redefined.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#allowed_http_verbs)allowed_http_verbs
Allowed HTTP verbs to be cached by the system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#headers)headers
Headers to add to the cache key if they are present.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger)badger
Configure the Badger cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger/url)badger/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger/path)badger/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#badger/configuration)badger/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key)key
Configure the global key generation.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_body)key/disable_body
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_host)key/disable_host
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/disable_method)key/disable_method
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/hide)key/hide
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#key/headers)key/headers
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys)cache_keys
Override the cache key generation matching the pattern.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/disable_body)cache_keys/disable_body
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/disable_host)cache_keys/disable_host
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/disable_method)cache_keys/disable_method
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/hide)cache_keys/hide
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_keys/headers)cache_keys/headers
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts)nuts
Configure the Badger cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts/url)nuts/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts/path)nuts/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#nuts/configuration)nuts/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd)etcd
Enable the Etcd distributed cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd/url)etcd/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd/path)etcd/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#etcd/configuration)etcd/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis)redis
Enable the Redis distributed cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis/url)redis/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis/path)redis/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#redis/configuration)redis/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric)olric
Enable the Olric distributed cache storage.

CacheProvider config

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric/url)olric/url
URL to connect to the storage system.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric/path)olric/path
Path to the configuration file.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#olric/configuration)olric/configuration
Declare the cache provider directly in the Souin configuration.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#timeout)timeout
Time to live for a key, using time.duration.

Timeout configuration to handle the cache provider and the reverse-proxy timeout.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#timeout/backend)timeout/backend
Duration is the super object to wrap the duration and be able to parse it from the configuration

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#timeout/cache)timeout/cache
Duration is the super object to wrap the duration and be able to parse it from the configuration

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#ttl)ttl
Time to live for a key, using time.duration.

Duration is the super object to wrap the duration and be able to parse it from the configuration

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#stale)stale
Time to live for a stale key, using time.duration.

Duration is the super object to wrap the duration and be able to parse it from the configuration

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#default_cache_control)default_cache_control
The default Cache-Control header value if none set by the upstream server.

[🔗](https://caddyserver.com/docs/modules/http.handlers.cache#cache_name)cache_name
The cache name to use in the Cache-Status response header.

Fulfilled by modules in namespace:

This property is **required** because it specifies the module name.

![Image 5: Caddy](https://caddyserver.com/old/resources/images/caddy-logo.svg) An [open source](https://github.com/caddyserver/caddy) Go community project 

 in partnership with [Ardan Labs](https://www.ardanlabs.com/)

[Privacy-respecting analytics by Fathom](https://usefathom.com/ref/AUKNWU)

 © 2025 ZeroSSL. All rights reserved. 

 Caddy® is a registered trademark of ZeroSSL GmbH. 

![Image 6](https://cdn.usefathom.com/?h=https%3A%2F%2Fcaddyserver.com&p=%2Fdocs%2Fmodules%2Fhttp.handlers.cache&r=&sid=GVMGKAKP&qs=%7B%7D&cid=1885832)
