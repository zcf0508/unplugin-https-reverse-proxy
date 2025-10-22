Title: Module pyroscope - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/pyroscope

Markdown Content:
The `pyroscope` app collects profiling data during the life-time of the process and uploads them to the Pyroscope server.

[🔗](https://caddyserver.com/docs/modules/pyroscope#application_name)application_name
The application name reported to Pyroscope. The config value may be a [placeholder](https://caddyserver.com/docs/conventions#placeholders).

[🔗](https://caddyserver.com/docs/modules/pyroscope#server_address)server_address
The URL of the Pyroscope service. The config value may be a [placeholder](https://caddyserver.com/docs/conventions#placeholders).

[🔗](https://caddyserver.com/docs/modules/pyroscope#auth_token)auth_token
The token for Pyroscope Cloud. The config value may be a [placeholder](https://caddyserver.com/docs/conventions#placeholders).

[🔗](https://caddyserver.com/docs/modules/pyroscope#basic_auth_user)basic_auth_user
The Basic Auth username of the Phlare server

[🔗](https://caddyserver.com/docs/modules/pyroscope#basic_auth_password)basic_auth_password
The Basic Auth of the Phlare server

[🔗](https://caddyserver.com/docs/modules/pyroscope#tenant_id)tenant_id
The tenant ID to support the case of multi-tenant Phlare server

[🔗](https://caddyserver.com/docs/modules/pyroscope#disable_gc_runs)disable_gc_runs
Disable automatic runtime.GC runs between getting the heap profiles

[🔗](https://caddyserver.com/docs/modules/pyroscope#upload_rate)upload_rate
The frequency of upload to the Phlare server

Duration can be an integer or a string. An integer is interpreted as nanoseconds. If a string, it is a Go time.Duration value such as `300ms`, `1.5h`, or `2h45m`; valid units are `ns`, `us`/`µs`, `ms`, `s`, `m`, `h`, and `d`.

[🔗](https://caddyserver.com/docs/modules/pyroscope#parameters)parameters
The profiling parameters to be reported to Pyroscope. The paramters cpu_profile_rate, block_profile_rate, and mutex_profile_fraction are inherited from the `profiling` app if `pyroscope` is configured as a child module. The `profile_types` field is inherited if not configured explicitly. If `pyroscope` is configured as an app, all the parameters are instated as-is. Note: Pyroscope agent does not support `threadcreate` profile type, hence ignored.

Common profiling paramters

[🔗](https://caddyserver.com/docs/modules/pyroscope#parameters/cpu_profile_rate)parameters/cpu_profile_rate
The hertz rate for CPU profiling, as accepted by the [`SetCPUProfileRate`](https://pkg.go.dev/runtime#SetCPUProfileRate) function.

[🔗](https://caddyserver.com/docs/modules/pyroscope#parameters/block_profile_rate)parameters/block_profile_rate
The hertz rate for CPU profiling, as accepted by the [`SetBlockProfileRate`](https://pkg.go.dev/runtime#SetBlockProfileRate) function.

[🔗](https://caddyserver.com/docs/modules/pyroscope#parameters/mutex_profile_fraction)parameters/mutex_profile_fraction
The the fraction of mutex contention events, as accepted by the [`SetMutexProfileFraction`](https://pkg.go.dev/runtime#SetMutexProfileFraction) function.

[🔗](https://caddyserver.com/docs/modules/pyroscope#parameters/profile_types)parameters/profile_types
The enabled runtime profile types. The accepted values are: cpu, goroutine, heap, allocs, threadcreate, block, mutex.
