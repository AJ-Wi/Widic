#!/usr/bin/env node

"use strict";
const getFlags = require("./src/get-flags");
const config = require("./src/config");
const help = require("./src/help");
const widic = require("./src/index");
const flags = getFlags(process.argv);

if (flags.includes("-v")) {
  console.log(`v${config.VERSION}`);
  process.exit(0);
}
if (flags.includes("-h")) {
  console.log(help);
  process.exit(0);
}
if (flags.includes("-c")) {
  console.log(config);
  process.exit(0);
}
if (flags.includes("-s")) {
  console.log("silent mode");
  config.SILENT = true;
}
if (flags.includes("-w")) {
  widic.getWord(flags[flags.indexOf("-w") + 1]).then((result) => {
    console.log(result);
  });
}
