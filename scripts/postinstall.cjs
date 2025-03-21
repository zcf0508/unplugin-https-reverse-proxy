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
var import_node_fs = require("fs");
var import_node_process = __toESM(require("process"), 1);
var import_unplugin_https_reverse_proxy = require("unplugin-https-reverse-proxy");
async function run() {
  try {
    if (import_node_process.default.env.UHRP_AUTO_INSTALL_CADDY) {
      (0, import_node_fs.existsSync)(import_unplugin_https_reverse_proxy.caddyPath) && (0, import_node_fs.unlinkSync)(import_unplugin_https_reverse_proxy.caddyPath);
      await (0, import_unplugin_https_reverse_proxy.download)();
    }
  } catch (e) {
    import_unplugin_https_reverse_proxy.consola.error(e.code);
  }
}
run();
