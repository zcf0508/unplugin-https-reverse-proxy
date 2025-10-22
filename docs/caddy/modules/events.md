Title: Module events - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/events

Markdown Content:
events implements a global eventing system within Caddy. Modules can emit and subscribe to events, providing hooks into deep parts of the code base that aren't otherwise accessible. Events provide information about what and when things are happening, and this facility allows handlers to take action when events occur, add information to the event's metadata, and even control program flow in some cases.

Events are propagated in a DOM-like fashion. An event emitted from module `a.b.c` (the "origin") will first invoke handlers listening to `a.b.c`, then `a.b`, then `a`, then those listening regardless of origin. If a handler returns the special error Aborted, then propagation immediately stops and the event is marked as aborted. Emitters may optionally choose to adjust program flow based on an abort.

Modules can subscribe to events by origin and/or name. A handler is invoked only if it is subscribed to the event by name and origin. Subscriptions should be registered during the provisioning phase, before apps are started.

Event handlers are fired synchronously as part of the regular flow of the program. This allows event handlers to control the flow of the program if the origin permits it and also allows handlers to convey new information back into the origin module before it continues. In essence, event handlers are similar to HTTP middleware handlers.

Event bindings/subscribers are unordered; i.e. event handlers are invoked in an arbitrary order. Event handlers should not rely on the logic of other handlers to succeed.

The entirety of this app module is EXPERIMENTAL and subject to change. Pay attention to release notes.

[🔗](https://caddyserver.com/docs/modules/events#subscriptions)subscriptions
Subscriptions bind handlers to one or more events either globally or scoped to specific modules or module namespaces.

Subscription represents binding of one or more handlers to one or more events.

[🔗](https://caddyserver.com/docs/modules/events#subscriptions/events)subscriptions/events
The name(s) of the event(s) to bind to. Default: all events.

[🔗](https://caddyserver.com/docs/modules/events#subscriptions/modules)subscriptions/modules
The ID or namespace of the module(s) from which events originate to listen to for events. Default: all modules.

Events propagate up, so events emitted by module "a.b.c" will also trigger the event for "a.b" and "a". Thus, to receive all events from "a.b.c" and "a.b.d", for example, one can subscribe to either "a.b" or all of "a" entirely.

ModuleID is a string that uniquely identifies a Caddy module. A module ID is lightly structured. It consists of dot-separated labels which form a simple hierarchy from left to right. The last label is the module name, and the labels before that constitute the namespace (or scope).

Thus, a module ID has the form: .

An ID with no dot has the empty namespace, which is appropriate for app modules (these are "top-level" modules that Caddy core loads and runs).

Module IDs should be lowercase and use underscores (_) instead of spaces.

Examples of valid IDs:

*   http
*   http.handlers.file_server
*   caddy.logging.encoders.json

[🔗](https://caddyserver.com/docs/modules/events#subscriptions/handlers)subscriptions/handlers
The event handler modules. These implement the actual behavior to invoke when an event occurs. At least one handler is required.

Fulfilled by modules in namespace: **events.handlers**

*   [exec](https://caddyserver.com/docs/modules/events.handlers.exec)Non-standard
*   [nats](https://caddyserver.com/docs/modules/events.handlers.nats)Non-standard
*   [store_cert](https://caddyserver.com/docs/modules/events.handlers.store_cert)Non-standard
