Title: apps/geoip2 - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/geoip2/

Markdown Content:
`{▾	"accountId": 0,	"databaseDirectory": "",	"licenseKey": "",	"lockFile": "",	"editionID": "",	"updateUrl": "",	"updateFrequency": 0}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/zhangjiayin/caddy-geoip2](https://github.com/zhangjiayin/caddy-geoip2)**

**Custom builds:**`xcaddy build --with github.com/zhangjiayin/caddy-geoip2`

Description[🔗](https://caddyserver.com/docs/json/apps/geoip2/#docs "Direct link")
----------------------------------------------------------------------------------

geoip2 is global caddy app with http.handlers.geoip2 it update geoip2 data automatically by the params

[🔗](https://caddyserver.com/docs/json/apps/geoip2/#accountId)[accountId](https://caddyserver.com/docs/json/apps/geoip2/accountId/)
Your MaxMind account ID. This was formerly known as UserId.

[🔗](https://caddyserver.com/docs/json/apps/geoip2/#databaseDirectory)[databaseDirectory](https://caddyserver.com/docs/json/apps/geoip2/databaseDirectory/)
The directory to store the database files. Defaults to DATADIR

[🔗](https://caddyserver.com/docs/json/apps/geoip2/#licenseKey)[licenseKey](https://caddyserver.com/docs/json/apps/geoip2/licenseKey/)
Your case-sensitive MaxMind license key.

[🔗](https://caddyserver.com/docs/json/apps/geoip2/#lockFile)[lockFile](https://caddyserver.com/docs/json/apps/geoip2/lockFile/)
The lock file to use. This ensures only one geoipupdate process can run at a time. Note: Once created, this lockfile is not removed from the filesystem.

[🔗](https://caddyserver.com/docs/json/apps/geoip2/#editionID)[editionID](https://caddyserver.com/docs/json/apps/geoip2/editionID/)
Enter the edition IDs of the databases you would like to update. Should be GeoLite2-City

[🔗](https://caddyserver.com/docs/json/apps/geoip2/#updateUrl)[updateUrl](https://caddyserver.com/docs/json/apps/geoip2/updateUrl/)
update url to use. Defaults to [https://updates.maxmind.com](https://updates.maxmind.com/)

[🔗](https://caddyserver.com/docs/json/apps/geoip2/#updateFrequency)[updateFrequency](https://caddyserver.com/docs/json/apps/geoip2/updateFrequency/)
The Frequency in seconds to run update. Default to 0, only update On Start
