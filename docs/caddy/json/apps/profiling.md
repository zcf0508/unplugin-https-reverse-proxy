Title: apps/profiling - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/apps/profiling/

Markdown Content:
`{▾	"cpu_profile_rate": 0,	"block_profile_rate": 0,	"mutex_profile_fraction": 0,	"profile_types": [""],	"profilers": [{•••}]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/mohammed90/caddy_profiling](https://github.com/mohammed90/caddy_profiling)**

**Custom builds:**`xcaddy build --with github.com/mohammed90/caddy_profiling/profiling`

Description[🔗](https://caddyserver.com/docs/json/apps/profiling/#docs "Direct link")
-------------------------------------------------------------------------------------

The `profiling` app hosts the collection of push-based profiling agents with common profiling parameters acorss the Caddy instance.

[🔗](https://caddyserver.com/docs/json/apps/profiling/#cpu_profile_rate)[cpu_profile_rate](https://caddyserver.com/docs/json/apps/profiling/cpu_profile_rate/)
The hertz rate for CPU profiling, as accepted by the [`SetCPUProfileRate`](https://pkg.go.dev/runtime#SetCPUProfileRate) function.

[🔗](https://caddyserver.com/docs/json/apps/profiling/#block_profile_rate)[block_profile_rate](https://caddyserver.com/docs/json/apps/profiling/block_profile_rate/)
The hertz rate for CPU profiling, as accepted by the [`SetBlockProfileRate`](https://pkg.go.dev/runtime#SetBlockProfileRate) function.

[🔗](https://caddyserver.com/docs/json/apps/profiling/#mutex_profile_fraction)[mutex_profile_fraction](https://caddyserver.com/docs/json/apps/profiling/mutex_profile_fraction/)
The the fraction of mutex contention events, as accepted by the [`SetMutexProfileFraction`](https://pkg.go.dev/runtime#SetMutexProfileFraction) function.

[🔗](https://caddyserver.com/docs/json/apps/profiling/#profile_types)[profile_types](https://caddyserver.com/docs/json/apps/profiling/profile_types/)
The enabled runtime profile types. The accepted values are: cpu, goroutine, heap, allocs, threadcreate, block, mutex.

[🔗](https://caddyserver.com/docs/json/apps/profiling/#profilers)[profilers](https://caddyserver.com/docs/json/apps/profiling/profilers/)
There are no docs for this property.

Fulfilled by modules in namespace: **profiling.profiler**

*   [profefe](https://caddyserver.com/docs/json/apps/profiling/profilers/profefe/)Non-standard
*   [pyroscope](https://caddyserver.com/docs/json/apps/profiling/profilers/pyroscope/)Non-standard
