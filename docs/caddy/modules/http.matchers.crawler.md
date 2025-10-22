Title: Module http.matchers.crawler - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/http.matchers.crawler

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module http.matchers.crawler**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.crawler#docs "Direct link")
----------------------------------------------------------------------------------------------

`{▾}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://git.gorbe.io/caddy/crawler.git](https://git.gorbe.io/caddy/crawler.git)**

**Custom builds:**`xcaddy build --with git.gorbe.io/caddy/crawler`

Description[🔗](https://caddyserver.com/docs/modules/http.matchers.crawler#docs "Direct link")
----------------------------------------------------------------------------------------------

http.matchers.crawler is a HTTP request matcher to detect crawlers. It allows you to detect known crawlers/spiders/bots via the `User-Agent`.

Caddyfile syntax:

```
@is-crawler crawler
abort @is-crawler
```
