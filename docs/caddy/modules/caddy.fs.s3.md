Title: Module caddy.fs.s3 - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.fs.s3

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module caddy.fs.s3**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.fs.s3#docs "Direct link")
------------------------------------------------------------------------------------

`{▾	"bucket": "",	"region": "",	"profile": "",	"endpoint": "",	"use_path_style": false,	"force_path_style": false}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/sagikazarmark/caddy-fs-s3](https://github.com/sagikazarmark/caddy-fs-s3)**

**Custom builds:**`xcaddy build --with github.com/sagikazarmark/caddy-fs-s3`

Description[🔗](https://caddyserver.com/docs/modules/caddy.fs.s3#docs "Direct link")
------------------------------------------------------------------------------------

caddy.fs.s3 is a Caddy virtual filesystem module for AWS S3 (and compatible) object store.

[🔗](https://caddyserver.com/docs/modules/caddy.fs.s3#bucket)bucket
The name of the S3 bucket.

[🔗](https://caddyserver.com/docs/modules/caddy.fs.s3#region)region
The AWS region the bucket is hosted in.

[🔗](https://caddyserver.com/docs/modules/caddy.fs.s3#profile)profile
The AWS profile to use if mulitple profiles are specified.

[🔗](https://caddyserver.com/docs/modules/caddy.fs.s3#endpoint)endpoint
Use non-standard endpoint for S3.

[🔗](https://caddyserver.com/docs/modules/caddy.fs.s3#use_path_style)use_path_style
Set this to `true` to enable the client to use path-style addressing.

[🔗](https://caddyserver.com/docs/modules/caddy.fs.s3#force_path_style)force_path_style
DEPRECATED: please use 'use_path_style' instead. Set this to `true` to force the request to use path-style addressing.
