Title: Module http.handlers.adobe_usage_tracker - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.handlers.adobe_usage_tracker

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.handlers.adobe_usage_tracker**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.adobe_usage_tracker#docs "Direct link")
----------------------------------------------------------------------------------------------------------

`{▾	"endpoint": "",	"database": "",	"policy": "",	"token": ""}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/clickonetwo/tracker](https://github.com/clickonetwo/tracker)**

**Custom builds:**`xcaddy build --with github.com/clickonetwo/tracker`

Description[🔗](https://caddyserver.com/docs/modules/http.handlers.adobe_usage_tracker#docs "Direct link")
----------------------------------------------------------------------------------------------------------

http.handlers.adobe_usage_tracker implements HTTP middleware that parses uploaded log files from Adobe desktop applications in order to collect measurements about past launches. These measurements are then uploaded to an InfluxDB (using the v1 HTTP API).

Configuration of the tracker requires four parameters:

*   the endpoint URL of the influx v1 upload api
*   the name of the influx v1 database
*   the retention policy of the influx v1 database
*   an API token authorized for writes of the database

Note: this middleware uses the v1 HTTP write API because it's fully supported by both v1 and v3 databases. When using a v3 database, you must specify a "dbrp" mapping from the database and policy names to the specific bucket you want uploads to go to. See the influx docs for details:

[https://docs.influxdata.com/influxdb/cloud-serverless/write-data/api/v1-http/](https://docs.influxdata.com/influxdb/cloud-serverless/write-data/api/v1-http/)

[🔗](https://caddyserver.com/docs/modules/http.handlers.adobe_usage_tracker#endpoint)endpoint
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.adobe_usage_tracker#database)database
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.adobe_usage_tracker#policy)policy
There are no docs for this property.

[🔗](https://caddyserver.com/docs/modules/http.handlers.adobe_usage_tracker#token)token
There are no docs for this property.
