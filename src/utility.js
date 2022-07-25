// @ts-check
"use strict";

/**
 * Verifies that the text value meets the conditions set
 * @param {string} text - the text to verify
 * @returns {boolean|string} - true if the text is valid, otherwise an error message
 */
const checkText = (text) => {
  if (text === undefined || text === null || text === "") return "Please enter a word";
  if (typeof text !== "string") return "word must be a string";
  let texts = text.split(" ");
  if (texts.length > 1) return "Please enter only one word";

  return false;
};

/**
 * returns the formatted ID
 * @param {string} id - the id to format
 * @returns {string} - the formatted id
 */
const checkID = (id) => {
  if (id.includes(":")) {
    return id.substring(0, id.indexOf(":"));
  }
  return id;
};

module.exports = { checkText, checkID };
