Title: apps - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/

Markdown Content:
`{•••}`

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/json/apps/#docs "Direct link")
---------------------------------------------------------------------------

AppsRaw are the apps that Caddy will load and run. The app module name is the key, and the app's config is the associated value.

ModuleMap is a map that can contain multiple modules, where the map key is the module's name. (The namespace is usually read from an associated field's struct tag.) Because the module's name is given as the key in a module map, the name does not have to be given in the json.RawMessage.

Fulfilled by modules in namespace:

*   [events](https://caddyserver.com/docs/json/apps/events/)
*   [http](https://caddyserver.com/docs/json/apps/http/)
*   [pki](https://caddyserver.com/docs/json/apps/pki/)
*   [tls](https://caddyserver.com/docs/json/apps/tls/)
*   [crowdsec](https://caddyserver.com/docs/json/apps/crowdsec/)Non-standard
*   [dns01proxy](https://caddyserver.com/docs/json/apps/dns01proxy/)Non-standard
*   [dynamic_dns](https://caddyserver.com/docs/json/apps/dynamic_dns/)Non-standard
*   [exec](https://caddyserver.com/docs/json/apps/exec/)Non-standard
*   [frankenphp](https://caddyserver.com/docs/json/apps/frankenphp/)Non-standard
*   [geoip2](https://caddyserver.com/docs/json/apps/geoip2/)Non-standard
*   [layer4](https://caddyserver.com/docs/json/apps/layer4/)Non-standard
*   [pocketbase](https://caddyserver.com/docs/json/apps/pocketbase/)Non-standard
*   [profefe](https://caddyserver.com/docs/json/apps/profefe/)Non-standard
*   [profiling](https://caddyserver.com/docs/json/apps/profiling/)Non-standard
*   [pyroscope](https://caddyserver.com/docs/json/apps/pyroscope/)Non-standard
*   [reconnect](https://caddyserver.com/docs/json/apps/reconnect/)Non-standard
*   [scion](https://caddyserver.com/docs/json/apps/scion/)Non-standard
*   [security](https://caddyserver.com/docs/json/apps/security/)Non-standard
*   [ssh](https://caddyserver.com/docs/json/apps/ssh/)Non-standard
*   [ssh](https://caddyserver.com/docs/json/apps/ssh/)Non-standard
*   [supervisor](https://caddyserver.com/docs/json/apps/supervisor/)Non-standard
