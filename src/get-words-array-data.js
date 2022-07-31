// @ts-check
"use strict";
const { SILENT } = require("./config");
const getWordData = require("./get-word-data.js");
const msg = require("./message.js");

/**
 * get words array data.
 *
 * the words argument must be an array of objects with the following properties:
 * - word: the word to get data for.
 *
 * Example of input:
 *
 * [{word: "hello"}, {word: "baseball"}]
 *
 * @param {array} words - words array.
 * @param {number} length - length of words array or length needed.
 * @returns {Promise<object>} words object data.
 */
const getWordsArrayData = async (words, length = words.length) => {
  const arrayData = [];
  const errorWords = [];
  if (!SILENT) msg.info("Getting words array data...");
  try {
    for (let i = 0; i < length; i++) {
      let data = await getWordData(words[i].word);
      if (data instanceof String) {
        msg.error("Error getting word data: " + data);
        errorWords.push(words[i].word);
        continue;
      }
      if (!SILENT) msg.info(`processing new word data: ${i} `, words[i].word);
      arrayData.push(data);
    }
    if (!SILENT) msg.info("Done getting words array data!");
    return { arrayData, errorWords };
  } catch (err) {
    msg.error(`getWordsArrayData ${err}`);
    return { arrayData, errorWords };
  }
};

module.exports = getWordsArrayData;
