// @ts-check
"use strict";

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
  return "getData " + response.statusText;
};

module.exports = getData;
