//@ts-check
"use strict";

/**
 * get flags from command line
 * @param {string[]} arg array of arguments
 * @returns {array}
 */
const getFlags = (arg) => {
  const flags = [];

  for (let i = 2; i < arg.length; i++) {
    if (arg[i] === "-v" || arg[i] === "--version") flags.push("-v");
    if (arg[i] === "-h" || arg[i] === "--help") flags.push("-h");
    if (arg[i] === "-s" || arg[i] === "--silent") flags.push("-s");
    if (arg[i] === "-w" || arg[i] === "--word") flags.push("-w");
    if (arg[i] === "-f" || arg[i] === "--file") flags.push("-f");
    if (arg[i] === "-d" || arg[i] === "--download") flags.push("-d");
    if (arg[i] === "-t" || arg[i] === "--translate") flags.push("-t");
    if (arg[i] === "-l" || arg[i] === "--length") flags.push("-l");
    if (arg[i] === "-of" || arg[i] === "--output-file") flags.push("-of");
    if (arg[i] === "-oa" || arg[i] === "--output-audio") flags.push("-oa");
    if (flags[flags.length - 1] === "-w" && arg[i].substring(0, 1) !== "-") {
      flags.push(arg[i]);
      continue;
    }
    if (flags[flags.length - 1] === "-f" && arg[i].substring(0, 1) !== "-") {
      flags.push(arg[i]);
      continue;
    }
    if (flags[flags.length - 1] === "-l" && arg[i].substring(0, 1) !== "-") {
      flags.push(arg[i]);
      continue;
    }
    if (flags[flags.length - 1] === "-of" && arg[i].substring(0, 1) !== "-") {
      flags.push(arg[i]);
      continue;
    }
    if (flags[flags.length - 1] === "-oa" && arg[i].substring(0, 1) !== "-") {
      flags.push(arg[i]);
      continue;
    }
  }
  if (flags.length === 0) {
    flags.push("-w");
    flags.push("hello");
  }
  return flags;
};

module.exports = getFlags;
