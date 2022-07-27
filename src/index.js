// @ts-check

"use strict";
const getWordsArrayData = require("./get-words-array-data");
const getWordData = require("./get-word-data");
const writeJSON = require("./write-json");
const translator = require("./translator");

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
const getAll = async (words, length) => {
  const wordsArrayData = await getWordsArrayData(words, length);
  return wordsArrayData;
};

/**
 * Get the data for the word
 * @param {string} word - the word to get the data
 * @returns {Promise<object>}
 */
const getWord = async (word) => {
  const wordData = await getWordData(word);
  return wordData;
};

/**
 * Get the translation from the text
 * @param {string} text - the text to translate
 * @returns {Promise<string|boolean>}
 */
const translate = async (text) => {
  const response = await translator(text);
  return response;
};

/**
 * Writes JSON to file
 * @param {object} data - the data to write
 * @param {string} file - the file to write to
 * @returns {void} - writes the data to the file
 */
const writeFile = (data, file) => {
  writeJSON(data, file);
};

/**
 * Get word data from Merriam-Webster's schcool API
 * @property getAll() - get words array data.
 * @property getWord() - Get the data for the word
 * @property translate() - Get the translation from the text
 * @property writeFile() - write JSON to file.
 */
const widic = {
  getAll,
  getWord,
  translate,
  writeFile,
};

module.exports = widic;
