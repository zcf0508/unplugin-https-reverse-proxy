Title: apps/pocketbase - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/pocketbase/

Markdown Content:
`{▾	"listen": "",	"data_dir": "",	"origins": [""]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/mohammed90/caddy-pocketbase](https://github.com/mohammed90/caddy-pocketbase)**

**Custom builds:**`xcaddy build --with github.com/mohammed90/caddy-pocketbase`

Description[🔗](https://caddyserver.com/docs/json/apps/pocketbase/#docs "Direct link")
--------------------------------------------------------------------------------------

App is a Caddy module that provides an embedded PocketBase server.

The module provides admin API endpoints under `/pocketbase/`:

*   `POST /pocketbase/superuser` - Create a new superuser
*   `PUT /pocketbase/superuser` - Upsert a superuser
*   `PATCH /pocketbase/superuser` - Update superuser password
*   `DELETE /pocketbase/superuser` - Delete a superuser
*   `POST /pocketbase/superuser/{email}/otp` - Generate OTP for superuser

All the above endpoints require a JSON payload, except for the OTP endpoint. The JSON payload for the superuser endpoints is as follows:

```
{
    "email_address": "...",
    "password": "..."
}
```

The `DELETE` endpoint does not expect the `password` field.

Although PocketBase prints a URL in the logs to create the first superuser, the host part of the URL is not correct. You can either replace the host part with the host defined in your Caddy configuration, or use the admin API endpoint to create the first superuser.

The app can be configured in the Caddyfile through the `pocketbase` block in the global options section. Syntax:

```
pocketbase {
    data_dir <path>
    listen   <addr>
    origins  <origin...>
}
```

If the block is omitted, the default values are used.

[🔗](https://caddyserver.com/docs/json/apps/pocketbase/#listen)[listen](https://caddyserver.com/docs/json/apps/pocketbase/listen/)
The listen address of the PocketBase server. If empty, a free port on 127.0.0.1 will be used.

[🔗](https://caddyserver.com/docs/json/apps/pocketbase/#data_dir)[data_dir](https://caddyserver.com/docs/json/apps/pocketbase/data_dir/)
The data directory of PocketBase. If empty, a directory named `pb_data` in the Caddy data directory will be used. Refer to [Caddy data directory](https://caddyserver.com/docs/conventions#data-directory) for more information.

[🔗](https://caddyserver.com/docs/json/apps/pocketbase/#origins)[origins](https://caddyserver.com/docs/json/apps/pocketbase/origins/)
The allowed origins for the PocketBase server with respect to CORS. If empty, all origins are allowed.
