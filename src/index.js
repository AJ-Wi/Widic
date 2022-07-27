// @ts-check

"use strict";
const getWordsArrayData = require("./get-words-array-data");
const getWordData = require("./get-word-data");
const writeJSON = require("./write-json");
const translator = require("./translator");
const { downloadAudio } = require("./download-audio");
const msg = require("./message");

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
 * Download the audio file
 * @param {string} audio - the audio file name to download
 * @param {string} path - the path to save the audio file
 * @returns {Promise<void>}
 */
const downloadAudioFile = async (audio, path) => {
  const response = await downloadAudio(audio, path);
  if (response === true) msg.success("Done downloaded audio file");
};

/**
 * Download the audio file from array
 * @param {array} words - the audio file name to download
 * @param {string} path - the path to save the audio file
 * @returns {Promise<void>}
 */
const downloadAudioFilesFromArray = async (words, path) => {
  words.forEach((word) => {
    downloadAudioFile(word.audio, path);
  });
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
 * @property getAll() - get words object data.
 * @property getWord() - Get the data for the word
 * @property downloadAudioFile() - Download the audio file
 * @property downloadAudioFilesFromArray() - Download the audio file from array
 * @property translate() - Get the translation from the text
 * @property writeFile() - write JSON to file.
 */
const widic = {
  getAll,
  getWord,
  downloadAudioFile,
  downloadAudioFilesFromArray,
  translate,
  writeFile,
};

module.exports = widic;
