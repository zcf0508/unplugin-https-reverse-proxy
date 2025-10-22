Title: Module ssh.signers.file - Caddy Documentation

URL Source: https://caddyserver.com/docs/modules/ssh.signers.file

Markdown Content:
All Modules
-----------

This page lists all registered Caddy modules. Modules are plugins which extend Caddy's [JSON configuration structure](https://caddyserver.com/docs/json/).

We recommend using your browser's "Find in page" feature for quick lookups.

|  | Module ID | Description |
| --- | --- | --- |

There is more than one module named **Module ssh.signers.file**. Choose one by its repository.

**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository:**

**Custom builds:**`xcaddy build --with`

Description[🔗](https://caddyserver.com/docs/modules/ssh.signers.file#docs "Direct link")
-----------------------------------------------------------------------------------------

`{▾	"file_system": {•••},	"keys": [{▾		"source": "",		"passphrase": ""	}]}`

Non-standard**This module does not come with Caddy.** It can be added by using **[xcaddy](https://caddyserver.com/docs/build#xcaddy)** or our **[download page](https://caddyserver.com/download)**. Non-standard modules may be developed by the community and are not officially endorsed or maintained by the Caddy project. The documentation is shown here only as a courtesy.

**Code repository: [https://github.com/kadeessh/kadeessh](https://github.com/kadeessh/kadeessh)**

**Custom builds:**`xcaddy build --with github.com/kadeessh/kadeessh/internal/signer`

Description[🔗](https://caddyserver.com/docs/modules/ssh.signers.file#docs "Direct link")
-----------------------------------------------------------------------------------------

ssh.signers.file is a session signer that uses pre-existing keys, which may be backed as files

[🔗](https://caddyserver.com/docs/modules/ssh.signers.file#file_system)file_system
The file system implementation to use. The default is the local disk file system. File system modules used here must implement the fs.FS interface

Fulfilled by modules in namespace: **caddy.fs**

*   [git](https://caddyserver.com/docs/modules/caddy.fs.git)Non-standard
*   [s3](https://caddyserver.com/docs/modules/caddy.fs.s3)Non-standard

[🔗](https://caddyserver.com/docs/modules/ssh.signers.file#keys)keys
The collection of `signer.Key` resources. Relative paths are appended to the path of the current working directory. The supported PEM types and algorithms are:

*   RSA PRIVATE KEY: RSA
*   PRIVATE KEY: RSA, ECDSA, ed25519
*   EC PRIVATE KEY: ECDSA
*   DSA PRIVATE KEY: DSA
*   OPENSSH PRIVATE KEY: RSA, ed25519, ECDSA

Key is a generic holder of the location and passphrase of key (abstract) files

[🔗](https://caddyserver.com/docs/modules/ssh.signers.file#keys/source)keys/source
Source is the identifying path of the key depending on the source. In the case of `file` signer, `Source` refers to the path to the file on disk in relative or absolute path forms. Other signers are free to define the semantics of the field.

[🔗](https://caddyserver.com/docs/modules/ssh.signers.file#keys/passphrase)keys/passphrase
A non-empty value means the key is protected with a passphrase
