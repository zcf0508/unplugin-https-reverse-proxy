Title: Module caddy.fs.git - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/caddy.fs.git

Markdown Content:
There is more than one module named **Module caddy.fs.git**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/caddy.fs.git#docs "Direct link")
-------------------------------------------------------------------------------------

Field List
----------

`{▾	"url": "",	"ref": "",	"refresh_period": 0}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/mohammed90/caddy-git-fs](https://github.com/mohammed90/caddy-git-fs)**

**Custom builds:**`xcaddy build --with github.com/mohammed90/caddy-git-fs`

Description[🔗](https://caddyserver.com/docs/modules/caddy.fs.git#docs "Direct link")
-------------------------------------------------------------------------------------

The `git` filesystem module uses a git repository as the virtual filesystem.

Field List
----------

[🔗](https://caddyserver.com/docs/modules/caddy.fs.git#url)url
The URL of the git repository

[🔗](https://caddyserver.com/docs/modules/caddy.fs.git#ref)ref
The reference to clone the repository at. An empty value means HEAD.

[🔗](https://caddyserver.com/docs/modules/caddy.fs.git#refresh_period)refresh_period
The period between ref refreshes

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.
