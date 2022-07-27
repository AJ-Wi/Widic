//@ts-check
"use strict";
var translate = require("node-google-translate-skidz");
const { checkText } = require("./utility.js");

/**
 * Get the translation from the text
 * @param {string} text - the text to translate
 * @returns {Promise<string|boolean>}
 */
const translator = async (text) => {
  if (checkText(text)) return checkText(text);

  const response = await translate({
    text,
    source: "en",
    target: "es",
  });
  return response.translation;
};

module.exports = translator;
