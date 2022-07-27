//@ts-check
"use strict";

/**
 * get flags from command line
 * @param {string[]} arg array of arguments
 * @returns {array}
 */
const getFlags = (arg) => {
  const flags = [];
  let flagTemp = "";

  for (let i = 2; i < arg.length; i++) {
    if (arg[i] === "-v" || arg[i] === "--version") flags.push("-v");
    if (arg[i] === "-h" || arg[i] === "--help") flags.push("-h");
    if (arg[i] === "-s" || arg[i] === "--silent") flags.push("-s");
    if (arg[i] === "-c" || arg[i] === "--config") flags.push("-c");
    if (arg[i] === "-w" || arg[i] === "--word") flags.push("-w");
    if (flags[flags.length - 1] === "-w" && arg[i].substring(0, 1) !== "-") flags.push(arg[i]);
  }
  return flags;
};

module.exports = getFlags;
