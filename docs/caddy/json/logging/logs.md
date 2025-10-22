Title: logging/logs - JSON Config Structure

URL Source: https://caddyserver.com/docs/json/logging/logs/

Markdown Content:
```
{
	"": {▾		"writer": {•••},		"encoder": {•••},		"level": "",		"sampling": {▾			"interval": 0,			"first": 0,			"thereafter": 0		},		"include": [""],		"exclude": [""]	}
}
```

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/json/logging/logs/#docs "Direct link")
-----------------------------------------------------------------------------------

Logs are your logs, keyed by an arbitrary name of your choosing. The default log can be customized by defining a log called "default". You can further define other logs and filter what kinds of entries they accept.

[🔗](https://caddyserver.com/docs/json/logging/logs/#writer)[writer](https://caddyserver.com/docs/json/logging/logs/writer/)
The writer defines where log entries are emitted.

[🔗](https://caddyserver.com/docs/json/logging/logs/#encoder)[encoder](https://caddyserver.com/docs/json/logging/logs/encoder/)
The encoder is how the log entries are formatted or encoded.

[🔗](https://caddyserver.com/docs/json/logging/logs/#level)[level](https://caddyserver.com/docs/json/logging/logs/level/)
Level is the minimum level to emit, and is inclusive. Possible levels: DEBUG, INFO, WARN, ERROR, PANIC, and FATAL

[🔗](https://caddyserver.com/docs/json/logging/logs/#sampling)[sampling](https://caddyserver.com/docs/json/logging/logs/sampling/)
Sampling configures log entry sampling. If enabled, only some log entries will be emitted. This is useful for improving performance on extremely high-pressure servers.

LogSampling configures log entry sampling.

[🔗](https://caddyserver.com/docs/json/logging/logs/#sampling/interval)[sampling/interval](https://caddyserver.com/docs/json/logging/logs/sampling/interval/)
The window over which to conduct sampling.

A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.

[🔗](https://caddyserver.com/docs/json/logging/logs/#sampling/first)[sampling/first](https://caddyserver.com/docs/json/logging/logs/sampling/first/)
Log this many entries within a given level and message for each interval.

[🔗](https://caddyserver.com/docs/json/logging/logs/#sampling/thereafter)[sampling/thereafter](https://caddyserver.com/docs/json/logging/logs/sampling/thereafter/)
If more entries with the same level and message are seen during the same interval, keep one in this many entries until the end of the interval.

[🔗](https://caddyserver.com/docs/json/logging/logs/#include)[include](https://caddyserver.com/docs/json/logging/logs/include/)
Include defines the names of loggers to emit in this log. For example, to include only logs emitted by the admin API, you would include "admin.api".

[🔗](https://caddyserver.com/docs/json/logging/logs/#exclude)[exclude](https://caddyserver.com/docs/json/logging/logs/exclude/)
Exclude defines the names of loggers that should be skipped by this log. For example, to exclude only HTTP access logs, you would exclude "http.log.access".
