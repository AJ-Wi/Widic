// @ts-check
"use strict";
const { version } = require("../package.json");
require("dotenv").config();
module.exports = {
  SCHCOOL_API_KEY: process.env.SCHCOOL_API_KEY,
  SPANISH_API_KEY: process.env.SPANISH_API_KEY,
  SCHCOOL_API_URL: "https://www.dictionaryapi.com/api/v3/references/sd4/json/",
  SPANISH_API_URL: "https://www.dictionaryapi.com/api/v3/references/spanish/json/",
  AUDIO_API_URL: "https://media.merriam-webster.com/audio/prons/en/us/mp3/",
  BEGINS: [/\bbix/, /\bgg/, /^[#$%^&*\-_~0-9]/],
  VERSION: version,
  SILENT: false,
};
