Title: apps/reconnect - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/reconnect/

Markdown Content:
`{▾}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/anapaya/caddy-reconnect](https://github.com/anapaya/caddy-reconnect)**

**Custom builds:**`xcaddy build --with github.com/anapaya/caddy-reconnect`

Description[🔗](https://caddyserver.com/docs/json/apps/reconnect/#docs "Direct link")
-------------------------------------------------------------------------------------

reconnect is a module that provides an additional "reconnect" network type that can be used to reconnect to a [network address](https://caddyserver.com/docs/conventions#network-addresses) if the initial connection fails. Caddy will bind to the address as soon as it is available. Until that point, the listener will block in the Accept() loop. This is useful if you want to configure Caddy to bind on an address that is potentially not available at startup time.

You can configure the following networks:

*   reconnect+tcp
*   reconnect+tcp4
*   reconnect+tcp6
*   reconnect+udp
*   reconnect+udp4
*   reconnect+udp6

These are equivalent to the standard networks, except that they will block until the address is available.

For example, to start Caddy as an http server on 192.168.1.2:443, even if that address is not available at startup time, you can add the following listener to the [apps.http.servers.{srv}.listen](https://caddyserver.com/docs/json/apps/http/servers/listen/) list:

`"listen": ["reconnect+tcp/192.168.1.2:443"]`
Note: This module has only been tested with Linux. Other operating systems might not work as intended.
