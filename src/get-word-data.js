// @ts-check

"use strict";
const getData = require("./get-data.js");
const { SCHCOOL_API_URL, SCHCOOL_API_KEY } = require("./config.js");
const { checkText, checkID } = require("./utility.js");

/**
 * Get the data for the word from the schcool api.
 * @param {string} word - the word to get the data
 * @returns {Promise<object>}
 */
const getWordData = async (word) => {
  if (checkText(word)) return checkText(word);

  const data = await getData(SCHCOOL_API_URL + word + "?key=" + SCHCOOL_API_KEY);
  let wordID = checkID(data[0].meta.id);
  let definition = "Not found";
  let audio = "Not found";
  let IPA = "Not found";

  if (wordID !== word) {
    return { word: wordID };
  }

  data.forEach((item) => {
    let wID = checkID(item.meta.id);

    if (item.hwi.prs !== undefined && wID === word) {
      IPA = item.hwi.prs[0].mw;
      audio = item.hwi.prs[0].sound.audio;
      definition = item.shortdef[0];
    }
  });
  return { word, IPA, definition, audio };
};

module.exports = getWordData;
