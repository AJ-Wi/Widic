// @ts-check

"use strict";
const { SCHCOOL_API_URL, SCHCOOL_API_KEY } = require("./config.js");
const checkText = require("./utility.js");

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
  return response.json();
};

/**
 * Get the data for the word from the schcool api.
 * @param {string} word - the word to get the data
 * @returns {Promise<object>}
 */
const getDataWord = async (word) => {
  const check = checkText(word);
  if (check) return check;

  const data = await getData(SCHCOOL_API_URL + word + "?key=" + SCHCOOL_API_KEY);
  let IPA = data[0].hwi.prs[0].mw;
  let audio = data[0].hwi.prs[0].sound.audio;
  let definition = data[0].shortdef[0];
  return { word, IPA, definition, audio };
};

module.exports = getDataWord;
