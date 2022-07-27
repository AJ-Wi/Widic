// @ts-check
"use strict";
const getWordData = require("./get-word-data.js");

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
 * @returns {Promise<array>} words array data.
 */
const getWordsArrayData = async (words, length) => {
  const arrayData = [];
  console.log("Getting words array data...");
  try {
    for (let i = 0; i < length; i++) {
      let data = await getWordData(words[i].word);
      if (data.word !== words[i].word) {
        data = await getWordData(data.word);
      }
      console.log(`processing new word data: ${i} `, data);
      arrayData.push(data);
    }
    console.log("Done getting words array data!");
    return arrayData;
  } catch (err) {
    console.log("getWordsArrayData ", err);
    return arrayData;
  }
};

module.exports = getWordsArrayData;
