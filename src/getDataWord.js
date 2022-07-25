// @ts-check

"use strict";
const { SCHCOOL_API_URL, SCHCOOL_API_KEY } = require("./config.js");
const { checkText, checkID } = require("./utility.js");

/**
 * Get the data from the url
 *
 * Example url
 *
 * https://www.dictionaryapi.com/api/v3/references/sd4/json/baseball?key=you_api_key
 *
 * @param {string} url - the url to get the data
 * @returns {Promise<any>}
 */
const getData = async (url = "") => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
};

/**
 * Get the data for the word from the schcool api.
 * @param {string} word - the word to get the data
 * @returns {Promise<object>}
 */
const getDataWord = async (word) => {
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
      audio = item.hwi.prs[0].audio;
      definition = item.shortdef[0];
    }
  });
  return { word, IPA, definition, audio };
};

module.exports = getDataWord;
