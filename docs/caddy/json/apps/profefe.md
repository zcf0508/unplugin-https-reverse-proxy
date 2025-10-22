Title: apps/profefe - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/profefe/

Markdown Content:
`{▾	"address": "",	"service": "",	"timeout": 0,	"parameters": {▾		"cpu_profile_rate": 0,		"block_profile_rate": 0,		"mutex_profile_fraction": 0,		"profile_types": [""]	}}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/mohammed90/caddy_profiling](https://github.com/mohammed90/caddy_profiling)**

**Custom builds:**`xcaddy build --with github.com/mohammed90/caddy_profiling/profefe`

Description[🔗](https://caddyserver.com/docs/json/apps/profefe/#docs "Direct link")
-----------------------------------------------------------------------------------

The `profefe` app collects profiling data during the life-time of the process and uploads them to the profefe server.

[🔗](https://caddyserver.com/docs/json/apps/profefe/#address)[address](https://caddyserver.com/docs/json/apps/profefe/address/)
The URL of the Profefe service. The config value may be a [placeholder](https://caddyserver.com/docs/conventions#placeholders).

[🔗](https://caddyserver.com/docs/json/apps/profefe/#service)[service](https://caddyserver.com/docs/json/apps/profefe/service/)
The service name reported to Profefe. The config value may be a [placeholder](https://caddyserver.com/docs/conventions#placeholders).

[🔗](https://caddyserver.com/docs/json/apps/profefe/#timeout)[timeout](https://caddyserver.com/docs/json/apps/profefe/timeout/)
The timeout for the upload call. Setting the value to `0` disables the timeout and the call waits indefinitely until the upload is finished.

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/json/apps/profefe/#parameters)[parameters](https://caddyserver.com/docs/json/apps/profefe/parameters/)
The profiling parameters to be reported to Profefe. The paramters cpu_profile_rate, block_profile_rate, and mutex_profile_fraction are inherited from the `profiling` app if `profefe` is configured as a child module. The `profile_types` field is inherited if not configured explicitly. If `profefe` is configured as an app, all the parameters are instated as-is.

Common profiling paramters

[🔗](https://caddyserver.com/docs/json/apps/profefe/#parameters/cpu_profile_rate)[parameters/cpu_profile_rate](https://caddyserver.com/docs/json/apps/profefe/parameters/cpu_profile_rate/)
The hertz rate for CPU profiling, as accepted by the [`SetCPUProfileRate`](https://pkg.go.dev/runtime#SetCPUProfileRate) function.

[🔗](https://caddyserver.com/docs/json/apps/profefe/#parameters/block_profile_rate)[parameters/block_profile_rate](https://caddyserver.com/docs/json/apps/profefe/parameters/block_profile_rate/)
The hertz rate for CPU profiling, as accepted by the [`SetBlockProfileRate`](https://pkg.go.dev/runtime#SetBlockProfileRate) function.

[🔗](https://caddyserver.com/docs/json/apps/profefe/#parameters/mutex_profile_fraction)[parameters/mutex_profile_fraction](https://caddyserver.com/docs/json/apps/profefe/parameters/mutex_profile_fraction/)
The the fraction of mutex contention events, as accepted by the [`SetMutexProfileFraction`](https://pkg.go.dev/runtime#SetMutexProfileFraction) function.

[🔗](https://caddyserver.com/docs/json/apps/profefe/#parameters/profile_types)[parameters/profile_types](https://caddyserver.com/docs/json/apps/profefe/parameters/profile_types/)
The enabled runtime profile types. The accepted values are: cpu, goroutine, heap, allocs, threadcreate, block, mutex.
