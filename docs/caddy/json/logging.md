Title: logging - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/logging/

Markdown Content:
```
{▾	"sink": {▾		"writer": {•••}	},	"logs": {
		"": {▾			"writer": {•••},			"encoder": {•••},			"level": "",			"sampling": {▾				"interval": 0,				"first": 0,				"thereafter": 0			},			"include": [""],			"exclude": [""]		}
	}}
```

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/json/logging/#docs "Direct link")
------------------------------------------------------------------------------

Logging facilitates logging within Caddy. The default log is called "default" and you can customize it. You can also define additional logs.

By default, all logs at INFO level and higher are written to standard error ("stderr" writer) in a human-readable format ("console" encoder if stdout is an interactive terminal, "json" encoder otherwise).

All defined logs accept all log entries by default, but you can filter by level and module/logger names. A logger's name is the same as the module's name, but a module may append to logger names for more specificity. For example, you can filter logs emitted only by HTTP handlers using the name "http.handlers", because all HTTP handler module names have that prefix.

Caddy logs (except the sink) are zero-allocation, so they are very high-performing in terms of memory and CPU time. Enabling sampling can further increase throughput on extremely high-load servers.

[🔗](https://caddyserver.com/docs/json/logging/#sink)[sink](https://caddyserver.com/docs/json/logging/sink/)
Sink is the destination for all unstructured logs emitted from Go's standard library logger. These logs are common in dependencies that are not designed specifically for use in Caddy. Because it is global and unstructured, the sink lacks most advanced features and customizations.

StandardLibLog configures the default Go standard library global logger in the log package. This is necessary because module dependencies which are not built specifically for Caddy will use the standard logger. This is also known as the "sink" logger.

[🔗](https://caddyserver.com/docs/json/logging/#sink/writer)[sink/writer](https://caddyserver.com/docs/json/logging/sink/writer/)
The module that writes out log entries for the sink.

[🔗](https://caddyserver.com/docs/json/logging/#logs)[logs](https://caddyserver.com/docs/json/logging/logs/)
Logs are your logs, keyed by an arbitrary name of your choosing. The default log can be customized by defining a log called "default". You can further define other logs and filter what kinds of entries they accept.

CustomLog represents a custom logger configuration.

By default, a log will emit all log entries. Some entries will be skipped if sampling is enabled. Further, the Include and Exclude parameters define which loggers (by name) are allowed or rejected from emitting in this log. If both Include and Exclude are populated, their values must be mutually exclusive, and longer namespaces have priority. If neither are populated, all logs are emitted.

[🔗](https://caddyserver.com/docs/json/logging/#logs/writer)[logs/writer](https://caddyserver.com/docs/json/logging/logs/writer/)
The writer defines where log entries are emitted.

[🔗](https://caddyserver.com/docs/json/logging/#logs/encoder)[logs/encoder](https://caddyserver.com/docs/json/logging/logs/encoder/)
The encoder is how the log entries are formatted or encoded.

[🔗](https://caddyserver.com/docs/json/logging/#logs/level)[logs/level](https://caddyserver.com/docs/json/logging/logs/level/)
Level is the minimum level to emit, and is inclusive. Possible levels: DEBUG, INFO, WARN, ERROR, PANIC, and FATAL

[🔗](https://caddyserver.com/docs/json/logging/#logs/sampling)[logs/sampling](https://caddyserver.com/docs/json/logging/logs/sampling/)
Sampling configures log entry sampling. If enabled, only some log entries will be emitted. This is useful for improving performance on extremely high-pressure servers.

LogSampling configures log entry sampling.

[🔗](https://caddyserver.com/docs/json/logging/#logs/sampling/interval)[logs/sampling/interval](https://caddyserver.com/docs/json/logging/logs/sampling/interval/)
The window over which to conduct sampling.

A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.

[🔗](https://caddyserver.com/docs/json/logging/#logs/sampling/first)[logs/sampling/first](https://caddyserver.com/docs/json/logging/logs/sampling/first/)
Log this many entries within a given level and message for each interval.

[🔗](https://caddyserver.com/docs/json/logging/#logs/sampling/thereafter)[logs/sampling/thereafter](https://caddyserver.com/docs/json/logging/logs/sampling/thereafter/)
If more entries with the same level and message are seen during the same interval, keep one in this many entries until the end of the interval.

[🔗](https://caddyserver.com/docs/json/logging/#logs/include)[logs/include](https://caddyserver.com/docs/json/logging/logs/include/)
Include defines the names of loggers to emit in this log. For example, to include only logs emitted by the admin API, you would include "admin.api".

[🔗](https://caddyserver.com/docs/json/logging/#logs/exclude)[logs/exclude](https://caddyserver.com/docs/json/logging/logs/exclude/)
Exclude defines the names of loggers that should be skipped by this log. For example, to exclude only HTTP access logs, you would exclude "http.log.access".
