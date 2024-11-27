Title: log (Caddyfile directive) - Caddy Documentation

URL Source: https://caddyserver.com/docs/caddyfile/directives/log

Markdown Content:
Enables and configures HTTP request logging (also known as access logs).

The `log` directive applies to the hostnames of the site block it appears in, unless overridden with the `hostnames` subdirective.

When configured, by default all requests to the site will be logged. To conditionally skip some requests from logging, use the [`log_skip` directive](https://caddyserver.com/docs/caddyfile/directives/log_skip).

To add custom fields to the log entries, use the [`log_append` directive](https://caddyserver.com/docs/caddyfile/directives/log_append).

*   [Syntax](https://caddyserver.com/docs/caddyfile/directives/log#syntax)
*   [Output modules](https://caddyserver.com/docs/caddyfile/directives/log#output-modules)
    *   [stderr](https://caddyserver.com/docs/caddyfile/directives/log#stderr)
    *   [stdout](https://caddyserver.com/docs/caddyfile/directives/log#stdout)
    *   [discard](https://caddyserver.com/docs/caddyfile/directives/log#discard)
    *   [file](https://caddyserver.com/docs/caddyfile/directives/log#file)
    *   [net](https://caddyserver.com/docs/caddyfile/directives/log#net)
*   [Format modules](https://caddyserver.com/docs/caddyfile/directives/log#format-modules)
    *   [console](https://caddyserver.com/docs/caddyfile/directives/log#console)
    *   [json](https://caddyserver.com/docs/caddyfile/directives/log#json)
    *   [filter](https://caddyserver.com/docs/caddyfile/directives/log#filter)
        *   [delete](https://caddyserver.com/docs/caddyfile/directives/log#delete)
        *   [rename](https://caddyserver.com/docs/caddyfile/directives/log#rename)
        *   [replace](https://caddyserver.com/docs/caddyfile/directives/log#replace)
        *   [ip\_mask](https://caddyserver.com/docs/caddyfile/directives/log#ip-mask)
        *   [query](https://caddyserver.com/docs/caddyfile/directives/log#query)
        *   [cookie](https://caddyserver.com/docs/caddyfile/directives/log#cookie)
        *   [regexp](https://caddyserver.com/docs/caddyfile/directives/log#regexp)
        *   [hash](https://caddyserver.com/docs/caddyfile/directives/log#hash)
    *   [append](https://caddyserver.com/docs/caddyfile/directives/log#append)
*   [Examples](https://caddyserver.com/docs/caddyfile/directives/log#examples)

By default, headers with potentially sensitive information (`Cookie`, `Set-Cookie`, `Authorization` and `Proxy-Authorization`) will be logged as `REDACTED` in access logs. This behaviour can be disabled with the [`log_credentials`](https://caddyserver.com/docs/caddyfile/options#log-credentials) global server option.

Syntax
------

```
log [<logger_name>] {
	hostnames <hostnames...>
	no_hostname
	output <writer_module> ...
	format <encoder_module> ...
	level  <level>
}
```

*   **logger\_name** is an optional override of the logger name for this site.
    
    By default, a logger name is generated automatically, e.g. `log0`, `log1`, and so on depending on the order of the sites in the Caddyfile. This is only useful if you wish to reliably refer to the output of this logger from another logger defined in global options. See [an example](https://caddyserver.com/docs/caddyfile/directives/log#multiple-outputs) below.
    
*   **hostnames** is an optional override of the hostnames that this logger applies to.
    
    By default, the logger applies to the hostnames of the site block it appears in, i.e. the site addresses. This is useful if you wish to define different loggers per subdomain in a [wildcard site block](https://caddyserver.com/docs/caddyfile/patterns#wildcard-certificates). See [an example](https://caddyserver.com/docs/caddyfile/directives/log#wildcard-logs) below.
    
*   **no\_hostname** prevents the logger from being associated with any of the site block's hostnames. By default, the logger is associated with the [site address](https://caddyserver.com/docs/caddyfile/concepts#addresses) that the `log` directive appears in.
    
    This is useful when you want to log requests to different files based on some condition, such as the request path or method, using the [`log_name` directive](https://caddyserver.com/docs/caddyfile/directives/log_name).
    
*   **output** configures where to write the logs. See [`output` modules](https://caddyserver.com/docs/caddyfile/directives/log#output-modules) below.
    
    Default: `stderr`.
    
*   **format** describes how to encode, or format, the logs. See [`format` modules](https://caddyserver.com/docs/caddyfile/directives/log#format-modules) below.
    
    Default: `console` if `stderr` is detected to be a terminal, `json` otherwise.
    
*   **level** is the minimum entry level to log. Default: `INFO`.
    
    Note that access logs currently only emit `INFO` and `ERROR` level logs.
    

### Output modules

The **output** subdirective lets you customize where logs get written.

#### stderr

Standard error (console, is the default).

```
output stderr
```

#### stdout

Standard output (console).

```
output stdout
```

#### discard

No output.

```
output discard
```

#### file

A file. By default, log files are rotated ("rolled") to prevent disk space exhaustion.

Log rolling is provided by [lumberjack ![Image 11](https://caddyserver.com/old/resources/images/external-link.svg)](https://github.com/natefinch/lumberjack)

```
output file <filename> {
	roll_disabled
	roll_size     <size>
	roll_uncompressed
	roll_local_time
	roll_keep     <num>
	roll_keep_for <days>
}
```

*   **<filename\>** is the path to the log file.
    
*   **roll\_disabled** disables log rolling. This can lead to disk space depletion, so only use this if your log files are maintained some other way.
    
*   **roll\_size** is the size at which to roll the log file. The current implementation supports megabyte resolution; fractional values are rounded up to the next whole megabyte. For example, `1.1MiB` is rounded up to `2MiB`.
    
    Default: `100MiB`
    
*   **roll\_uncompressed** turns off gzip log compression.
    
    Default: gzip compression is enabled.
    
*   **roll\_local\_time** sets the rolling to use local timestamps in filenames.
    
    Default: uses UTC time.
    
*   **roll\_keep** is how many log files to keep before deleting the oldest ones.
    
    Default: `10`
    
*   **roll\_keep\_for** is how long to keep rolled files as a [duration string](https://caddyserver.com/docs/conventions#durations). The current implementation supports day resolution; fractional values are rounded up to the next whole day. For example, `36h` (1.5 days) is rounded up to `48h` (2 days). Default: `2160h` (90 days)
    

#### net

A network socket. If the socket goes down, it will dump logs to stderr while it attempts to reconnect.

```
output net <address> {
	dial_timeout <duration>
	soft_start
}
```

*   **<address\>** is the [address](https://caddyserver.com/docs/conventions#network-addresses) to write logs to.
    
*   **dial\_timeout** is how long to wait for a successful connection to the log socket. Log emissions may be blocked for up to this long if the socket goes down.
    
*   **soft\_start** will ignore errors when connecting to the socket, allowing you to load your config even if the remote log service is down. Logs will be emitted to stderr instead.
    

### Format modules

The **format** subdirective lets you customize how logs get encoded (formatted). It appears within a `log` block.

In addition to the syntax for each individual encoder, these common properties can be set on most encoders:

```
format <encoder_module> {
	message_key     <key>
	level_key       <key>
	time_key        <key>
	name_key        <key>
	caller_key      <key>
	stacktrace_key  <key>
	line_ending     <char>
	time_format     <format>
	time_local
	duration_format <format>
	level_format    <format>
}
```

*   **message\_key** The key for the message field of the log entry. Default: `msg`
    
*   **level\_key** The key for the level field of the log entry. Default: `level`
    
*   **time\_key** The key for the time field of the log entry. Default: `ts`
    
*   **name\_key** The key for the name field of the log entry. Default: `name`
    
*   **caller\_key** The key for the caller field of the log entry.
    
*   **stacktrace\_key** The key for the stacktrace field of the log entry.
    
*   **line\_ending** The line endings to use.
    
*   **time\_format** The format for timestamps.
    
    Default: `wall_milli` if the format defaulted to `console`, `unix_seconds_float` otherwise.
    
    May be one of:
    
    *   `unix_seconds_float` Floating-point number of seconds since the Unix epoch.
    *   `unix_milli_float` Floating-point number of milliseconds since the Unix epoch.
    *   `unix_nano` Integer number of nanoseconds since the Unix epoch.
    *   `iso8601` Example: `2006-01-02T15:04:05.000Z0700`
    *   `rfc3339` Example: `2006-01-02T15:04:05Z07:00`
    *   `rfc3339_nano` Example: `2006-01-02T15:04:05.999999999Z07:00`
    *   `wall` Example: `2006/01/02 15:04:05`
    *   `wall_milli` Example: `2006/01/02 15:04:05.000`
    *   `wall_nano` Example: `2006/01/02 15:04:05.000000000`
    *   `common_log` Example: `02/Jan/2006:15:04:05 -0700`
    *   Or, any compatible time layout string; see the [Go documentation](https://pkg.go.dev/time#pkg-constants) for full details.
    
    Note that the parts of the format string are special constants for the layout; so `2006` is the year, `01` is the month, `Jan` is the month as a string, `02` is the day. Do not use the actual current date numbers in the format string.
    
*   **time\_local** Logs with the local system time rather than the default of UTC time.
    
*   **duration\_format** The format for durations.
    
    Default: `seconds`.
    
    May be one of:
    
    *   `s`, `second` or `seconds` Floating-point number of seconds elapsed.
    *   `ms`, `milli` or `millis` Floating-point number of milliseconds elapsed.
    *   `ns`, `nano` or `nanos` Integer number of nanoseconds elapsed.
    *   `string` Using Go's built-in string format, for example `1m32.05s` or `6.31ms`.
*   **level\_format** The format for levels.
    
    Default: `color` if the format defaulted to `console`, `lower` otherwise.
    
    May be one of:
    
    *   `lower` Lowercase.
    *   `upper` Uppercase.
    *   `color` Uppercase, with ANSI colors.

#### console

The console encoder formats the log entry for human readability while preserving some structure.

```
format console
```

#### json

Formats each log entry as a JSON object.

```
format json
```

#### filter

Allows per-field filtering.

```
format filter {
	fields {
		<field> <filter> ...
	}
	<field> <filter> ...
	wrap <encode_module> ...
}
```

Nested fields can be referenced by representing a layer of nesting with `>`. In other words, for an object like `{"a":{"b":0}}`, the inner field can be referenced as `a>b`.

The following fields are fundamental to the log and cannot be filtered because they are added by the underlying logging library as special cases: `ts`, `level`, `logger`, and `msg`.

Specifying `wrap` is optional; if omitted, a default is chosen depending on whether the current output module is [`stderr`](https://caddyserver.com/docs/caddyfile/directives/log#stderr) or [`stdout`](https://caddyserver.com/docs/caddyfile/directives/log#stdout), and is an interactive terminal, in which case [`console`](https://caddyserver.com/docs/caddyfile/directives/log#console) is chosen, otherwise [`json`](https://caddyserver.com/docs/caddyfile/directives/log#json) is chosen.

As a shortcut, the `fields` block can be omitted and the filters can be specified directly within the `filter` block.

These are the available filters:

##### delete

Marks a field to be skipped from being encoded.

```
<field> delete
```

##### rename

Rename the key of a log field.

```
<field> rename <key>
```

##### replace

Marks a field to be replaced with the provided string at encoding time.

```
<field> replace <replacement>
```

##### ip\_mask

Masks IP addresses in the field using a CIDR mask, i.e. the number of bits from the IP to retain, starting from the left side. If the field is an array of strings (e.g. HTTP headers), each value in the array is masked. The value may be a comma separated string of IP addresses.

There is separate configuration for IPv4 and IPv6 addresses, since they have a different total number of bits.

Most commonly, the fields to filter would be:

*   `request>remote_ip` for the directly connecting client
*   `request>client_ip` for the parsed "real client" when [`trusted_proxies`](https://caddyserver.com/docs/caddyfile/options#trusted-proxies) is configured
*   `request>headers>X-Forwarded-For` if behind a reverse proxy

```
<field> ip_mask [<ipv4> [<ipv6>]] {
	ipv4 <cidr>
	ipv6 <cidr>
}
```

##### query

Marks a field to have one or more actions performed, to manipulate the query part of a URL field. Most commonly, the field to filter would be `request>uri`.

```
<field> query {
	delete  <key>
	replace <key> <replacement>
	hash    <key>
}
```

The available actions are:

*   **delete** removes the given key from the query.
    
*   **replace** replaces the value of the given query key with **replacement**. Useful to insert a redaction placeholder; you'll see that the query key was in the URL, but the value is hidden.
    
*   **hash** replaces the value of the given query key with the first 4 bytes of the SHA-256 hash of the value, lowercase hexadecimal. Useful to obscure the value if it's sensitive, while being able to notice whether each request had a different value.
    

##### cookie

Marks a field to have one or more actions performed, to manipulate a `Cookie` HTTP header's value. Most commonly, the field to filter would be `request>headers>Cookie`.

```
<field> cookie {
	delete  <name>
	replace <name> <replacement>
	hash    <name>
}
```

The available actions are:

*   **delete** removes the given cookie by name from the header.
    
*   **replace** replaces the value of the given cookie with **replacement**. Useful to insert a redaction placeholder; you'll see that the cookie was in the header, but the value is hidden.
    
*   **hash** replaces the value of the given cookie with the first 4 bytes of the SHA-256 hash of the value, lowercase hexadecimal. Useful to obscure the value if it's sensitive, while being able to notice whether each request had a different value.
    

If many actions are defined for the same cookie name, only the first action will be applied.

##### regexp

Marks a field to have a regular expression replacement applied at encoding time. If the field is an array of strings (e.g. HTTP headers), each value in the array has replacements applied.

```
<field> regexp <pattern> <replacement>
```

The regular expression language used is RE2, included in Go. See the [RE2 syntax reference](https://github.com/google/re2/wiki/Syntax) and the [Go regexp syntax overview](https://pkg.go.dev/regexp/syntax).

In the replacement string, capture groups can be referenced with `${group}` where `group` is either the name or number of the capture group in the expression. Capture group `0` is the full regexp match, `1` is the first capture group, `2` is the second capture group, and so on.

##### hash

Marks a field to be replaced with the first 4 bytes (8 hex characters) of the SHA-256 hash of the value at encoding time. If the field is a string array (e.g. HTTP headers), each value in the array is hashed.

Useful to obscure the value if it's sensitive, while being able to notice whether each request had a different value.

```
<field> hash
```

#### append

Appends field(s) to all log entries.

```
format append {
	fields {
		<field> <value>
	}
	<field> <value>
	wrap <encode_module> ...
}
```

It is most useful for adding information about the Caddy instance that is producing the log entries, possibly via an environment variable. The field values may be global placeholders (e.g. `{env.*}`), but _not_ per-request placeholders due to logs being written outside of the HTTP request context.

Specifying `wrap` is optional; if omitted, a default is chosen depending on whether the current output module is [`stderr`](https://caddyserver.com/docs/caddyfile/directives/log#stderr) or [`stdout`](https://caddyserver.com/docs/caddyfile/directives/log#stdout), and is an interactive terminal, in which case [`console`](https://caddyserver.com/docs/caddyfile/directives/log#console) is chosen, otherwise [`json`](https://caddyserver.com/docs/caddyfile/directives/log#json) is chosen.

The `fields` block can be omitted and the fields can be specified directly within the `append` block.

Examples
--------

Enable access logging to the default logger.

In other words, by default this logs to `stderr`, but this can be changed by reconfiguring the `default` logger with the [`log` global option](https://caddyserver.com/docs/caddyfile/options#log):

```
example.com {
	log
}
```

Write logs to a file (with log rolling, which is enabled by default):

```
example.com {
	log {
		output file /var/log/access.log
	}
}
```

Customize log rolling:

```
example.com {
	log {
		output file /var/log/access.log {
			roll_size 1gb
			roll_keep 5
			roll_keep_for 720h
		}
	}
}
```

Delete the `User-Agent` request header from the logs:

```
example.com {
	log {
		format filter {
			request>headers>User-Agent delete
		}
	}
}
```

Redact multiple sensitive cookies. (Note that some sensitive headers are logged with empty values by default; see the [`log_credentials` global option](https://caddyserver.com/docs/caddyfile/options#log-credentials) to enable logging `Cookie` header values):

```
example.com {
	log {
		format filter {
			request>headers>Cookie cookie {
				replace session REDACTED
				delete secret
			}
		}
	}
}
```

Mask the remote address from the request, keeping the first 16 bits (i.e. 255.255.0.0) for IPv4 addresses, and the first 32 bits from IPv6 addresses.

Note that as of Caddy v2.7, both `remote_ip` and `client_ip` are logged, where `client_ip` is the "real IP" when [`trusted_proxies`](https://caddyserver.com/docs/caddyfile/options#trusted-proxies) is configured:

```
example.com {
	log {
		format filter {
			request>remote_ip ip_mask 16 32
			request>client_ip ip_mask 16 32
		}
	}
}
```

To append a server ID from an environment variable to all log entries, and chain it with a `filter` to delete a header:

```
example.com {
	log {
		format append {
			server_id {env.SERVER_ID}
			wrap filter {
				request>headers>Cookie delete
			}
		}
	}
}
```

To write separate log files for each subdomain in a [wildcard site block](https://caddyserver.com/docs/caddyfile/patterns#wildcard-certificates), by overriding `hostnames` for each logger. This uses a [snippet](https://caddyserver.com/docs/caddyfile/concepts#snippets) to avoid repetition:

```
(subdomain-log) {
	log {
		hostnames {args[0]}
		output file /var/log/{args[0]}.log
	}
}

*.example.com {
	import subdomain-log foo.example.com
	@foo host foo.example.com
	handle @foo {
		respond "foo"
	}

	import subdomain-log bar.example.com
	@bar host bar.example.com
	handle @bar {
		respond "bar"
	}
}
```

To write the access logs for a particular subdomain to two different files, with different formats (one with [`transform-encoder` plugin ![Image 12](https://caddyserver.com/old/resources/images/external-link.svg)](https://github.com/caddyserver/transform-encoder) and the other with [`json`](https://caddyserver.com/docs/caddyfile/directives/log#json)).

This works by overriding the logger name as `foo` in the site block, then including the access logs produced by that logger in the two loggers in global options with `include http.log.access.foo`:

```
{
	log access-formatted {
		include http.log.access.foo
		output file /var/log/access-foo.log
		format transform "{common_log}"
	}

	log access-json {
		include http.log.access.foo
		output file /var/log/access-foo.json
		format json
	}
}

foo.example.com {
	log foo
}
```
