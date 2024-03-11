"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// scripts/postinstall.ts
var import_node_fs3 = require("fs");
var import_node_process5 = __toESM(require("process"), 1);

// src/utils.ts
var import_node_process = __toESM(require("process"), 1);
var import_node_path = __toESM(require("path"), 1);
var import_promises = require("fs/promises");
var import_node_child_process = require("child_process");
var import_consola = require("consola");
var consola = (0, import_consola.createConsola)({
  level: 3
}).withTag("reverse-proxy");
function once(fn) {
  let called = false;
  return (...args) => {
    if (called)
      return;
    called = true;
    return fn(...args);
  };
}

// src/caddy/index.ts
var import_node_os2 = require("os");
var import_node_process4 = __toESM(require("process"), 1);
var import_node_fs2 = require("fs");
var import_node_child_process3 = require("child_process");
var import_got_cjs = require("got-cjs");
var import_http_proxy_agent = require("http-proxy-agent");
var import_https_proxy_agent = require("https-proxy-agent");
var import_kill_port = __toESM(require("kill-port"), 1);

// src/host/index.ts
var import_node_process2 = __toESM(require("process"), 1);
var import_node_child_process2 = require("child_process");
var import_node_fs = require("fs");
var import_hosts_so_easy = __toESM(require("hosts-so-easy"), 1);
var Hosts = import_hosts_so_easy.default.default || import_hosts_so_easy.default;
var hostInstance = new Hosts({
  debounceTime: 50,
  hostsFile: getPathOfSystemHostsPath()
});
function getPathOfSystemHostsPath() {
  return import_node_process2.default.platform === "win32" ? `${import_node_process2.default.env.windir || "C:\\WINDOWS"}\\system32\\drivers\\etc\\hosts` : "/etc/hosts";
}

// src/caddy/constants.ts
var import_node_path2 = require("path");
var import_node_os = __toESM(require("os"), 1);
var import_node_process3 = __toESM(require("process"), 1);
var import_dotenv_flow = __toESM(require("dotenv-flow"), 1);
import_dotenv_flow.default.config({
  silent: true
});
function resolvePath(path2) {
  if (path2.startsWith("~"))
    return (0, import_node_path2.join)(import_node_os.default.homedir() || "", path2.slice(1));
  return path2;
}
var TEMP_DIR = resolvePath(import_node_process3.default.env.UHRP_CADDY_PATH || import_node_process3.default.env.TEMP || import_node_process3.default.env.TMPDIR || "/tmp");
var caddyPath = (0, import_node_path2.join)(TEMP_DIR, `caddy${import_node_process3.default.platform === "win32" ? ".exe" : ""}`);
var caddyFilePath = (0, import_node_path2.join)(TEMP_DIR, "CADDYFILE");
var supportList = [
  {
    platform: "dragonfly",
    arch: "amd64"
  },
  {
    platform: "freebsd",
    arch: "amd64"
  },
  {
    platform: "freebsd",
    arch: "arm-6"
  },
  {
    platform: "freebsd",
    arch: "arm-7"
  },
  {
    platform: "freebsd",
    arch: "arm64"
  },
  {
    platform: "linux",
    arch: "amd64"
  },
  {
    platform: "linux",
    arch: "arm-5"
  },
  {
    platform: "linux",
    arch: "arm-6"
  },
  {
    platform: "linux",
    arch: "arm-7"
  },
  {
    platform: "linux",
    arch: "arm64"
  },
  {
    platform: "linux",
    arch: "mips"
  },
  {
    platform: "linux",
    arch: "mips64"
  },
  {
    platform: "linux",
    arch: "mips64le"
  },
  {
    platform: "linux",
    arch: "mipsle"
  },
  {
    platform: "linux",
    arch: "ppc64"
  },
  {
    platform: "linux",
    arch: "ppc64le"
  },
  {
    platform: "linux",
    arch: "s390x"
  },
  {
    platform: "darwin",
    arch: "amd64"
  },
  {
    platform: "darwin",
    arch: "arm64"
  },
  {
    platform: "openbsd",
    arch: "amd64"
  },
  {
    platform: "openbsd",
    arch: "arm-6"
  },
  {
    platform: "openbsd",
    arch: "arm-7"
  },
  {
    platform: "openbsd",
    arch: "arm64"
  },
  {
    platform: "windows",
    arch: "amd64"
  },
  {
    platform: "windows",
    arch: "arm-6"
  },
  {
    platform: "windows",
    arch: "arm-7"
  },
  {
    platform: "windows",
    arch: "arm64"
  }
];

// src/caddy/utils.ts
var import_node_net = require("net");
var import_ora = __toESM(require("ora"), 1);
var spinner;
function getNumber(number) {
  if (number <= 0)
    return "0%";
  else if (number < 100)
    return `${number.toFixed(2)}%`;
  else
    return "100%";
}
function logProgress(percent) {
  if (!spinner) {
    consola.log("");
    spinner = (0, import_ora.default)({
      text: "Start Download Caddy: 0%",
      indent: 2
    });
    spinner.start();
  } else {
    spinner.text = `Download Caddy: ${getNumber(Number(percent) * 100)}`;
  }
}
function logProgressOver() {
  if (!spinner) {
    spinner = (0, import_ora.default)({
      text: "Start Download Caddy: 100%",
      indent: 2
    });
    spinner.start();
  } else {
    spinner.succeed();
    consola.log("");
  }
}

// src/caddy/index.ts
async function download() {
  if (await testCaddy())
    return caddyPath;
  return new Promise((resolve, reject) => {
    if (!(0, import_node_fs2.existsSync)(TEMP_DIR)) {
      (0, import_node_fs2.mkdirSync)(TEMP_DIR, { recursive: true });
      (0, import_node_fs2.chmodSync)(TEMP_DIR, 511);
    }
    const file = (0, import_node_fs2.createWriteStream)(caddyPath);
    let _platform = (0, import_node_os2.platform)().toString();
    _platform === "win32" && (_platform = "windows");
    let _arch = import_node_process4.default.arch.toString();
    _arch === "x64" && (_arch = "amd64");
    const support = supportList.find((item) => item.platform === _platform && item.arch === _arch);
    if (!support)
      return reject(new Error("not support"));
    const dowmloadLink = `https://caddyserver.com/api/download?os=${support.platform}&arch=${support.arch}`;
    (0, import_node_fs2.existsSync)(caddyPath) && (0, import_node_fs2.unlinkSync)(caddyPath);
    const httpProxy = import_node_process4.default.env.HTTP_PROXY || import_node_process4.default.env.http_proxy;
    const httpsProxy = import_node_process4.default.env.HTTPS_PROXY || import_node_process4.default.env.https_proxy;
    const httpAgent = httpProxy ? new import_http_proxy_agent.HttpProxyAgent(httpProxy) : void 0;
    const httpsAgent = httpsProxy ? new import_https_proxy_agent.HttpsProxyAgent(httpsProxy) : void 0;
    const chmodCaddyOnce = once(() => {
      (0, import_node_fs2.chmodSync)(caddyPath, 511);
    });
    import_got_cjs.got.stream(dowmloadLink, {
      agent: {
        http: httpAgent,
        https: httpsAgent
      }
    }).on("downloadProgress", (progress) => {
      logProgress(progress.percent);
      chmodCaddyOnce();
    }).pipe(file).on("finish", () => {
      logProgressOver();
      if (import_node_process4.default.platform === "win32")
        return resolve(caddyPath);
      (0, import_node_fs2.chmodSync)(caddyPath, 511);
      resolve(caddyPath);
    }).on("error", (err) => {
      reject(err);
    });
  });
}
function testCaddy() {
  return new Promise((resolve, reject) => {
    if (!(0, import_node_fs2.existsSync)(caddyPath))
      return resolve(false);
    (0, import_node_fs2.chmodSync)(caddyPath, 511);
    const child = import_node_process4.default.platform === "win32" ? (0, import_node_child_process3.spawn)(caddyPath, []) : (0, import_node_child_process3.spawn)("sudo", ["-E", caddyPath]);
    child.on("close", () => {
      return resolve(false);
    });
    child.on("error", (err) => {
      return reject(err);
    });
    child.stdout.on("data", (_data) => {
      return resolve(true);
    });
  });
}

// scripts/postinstall.ts
async function run() {
  try {
    if (import_node_process5.default.env.UHRP_AUTO_INSTALL_CADDY) {
      (0, import_node_fs3.existsSync)(caddyPath) && (0, import_node_fs3.unlinkSync)(caddyPath);
      await download();
    }
  } catch (e) {
    consola.error(e.code);
  }
}
run();
