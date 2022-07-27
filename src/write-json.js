// @ts-check
"use strict";
const fs = require("fs");
const msg = require("./message.js");

/**
 * Writes the JSON to a file
 * @param {object} data - the data to write
 * @param {string} file - the file to write to
 * @returns {void} - writes the data to the file
 */
const writeJSON = (data, file) => {
  try {
    fs.writeFileSync(file, JSON.stringify(data));
  } catch (err) {
    msg.error("writeJSON ", err);
  }
};

module.exports = writeJSON;
