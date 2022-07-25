//@ts-check
"use strict";
var translate = require("node-google-translate-skidz");

/**
 * Get the translation from the text
 * @param {string} text - the text to translate
 * @returns {Promise<string>}
 */
const translator = async (text) => {
  const response = await translate({
    text,
    source: "en",
    target: "es",
  });
  return response.translation;
};

module.exports = translator;
