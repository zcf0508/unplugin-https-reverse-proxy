Title: apps/crowdsec - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/crowdsec/

Markdown Content:
`{▾	"api_key": "",	"api_url": "",	"ticker_interval": "",	"enable_streaming": false,	"enable_hard_fails": false}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/hslatman/caddy-crowdsec-bouncer](https://github.com/hslatman/caddy-crowdsec-bouncer)**

**Custom builds:**`xcaddy build --with github.com/hslatman/caddy-crowdsec-bouncer/crowdsec`

Description[🔗](https://caddyserver.com/docs/json/apps/crowdsec/#docs "Direct link")
------------------------------------------------------------------------------------

CrowdSec is a Caddy App that functions as a CrowdSec bouncer. It acts as a CrowdSec API client as well as a local cache for CrowdSec decisions, which can be used by the HTTP handler and Layer4 matcher to decide if a request or connection is allowed or not.

[🔗](https://caddyserver.com/docs/json/apps/crowdsec/#api_key)[api_key](https://caddyserver.com/docs/json/apps/crowdsec/api_key/)
APIKey for the CrowdSec Local API

[🔗](https://caddyserver.com/docs/json/apps/crowdsec/#api_url)[api_url](https://caddyserver.com/docs/json/apps/crowdsec/api_url/)
APIUrl for the CrowdSec Local API. Defaults to [http://127.0.0.1:8080/](http://127.0.0.1:8080/)

[🔗](https://caddyserver.com/docs/json/apps/crowdsec/#ticker_interval)[ticker_interval](https://caddyserver.com/docs/json/apps/crowdsec/ticker_interval/)
TickerInterval is the interval the StreamBouncer uses for querying the CrowdSec Local API. Defaults to "10s".

[🔗](https://caddyserver.com/docs/json/apps/crowdsec/#enable_streaming)[enable_streaming](https://caddyserver.com/docs/json/apps/crowdsec/enable_streaming/)
EnableStreaming indicates whether the StreamBouncer should be used. If it's false, the LiveBouncer is used. The StreamBouncer keeps CrowdSec decisions in memory, resulting in quicker lookups. The LiveBouncer will perform an API call to your CrowdSec instance. Defaults to true.

[🔗](https://caddyserver.com/docs/json/apps/crowdsec/#enable_hard_fails)[enable_hard_fails](https://caddyserver.com/docs/json/apps/crowdsec/enable_hard_fails/)
EnableHardFails indicates whether calls to the CrowdSec API should result in hard failures, resulting in Caddy quitting vs. Caddy continuing operation (with a chance of not performing) validations. Defaults to false.
