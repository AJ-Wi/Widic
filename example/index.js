// @ts-check
"use strict";
const widic = require("../src/index");
const words = require("../data/words.json");

const getAllWords = async (words, length) => {
  const wordsArrayData = await widic.getAll(words, length);
  return wordsArrayData;
};

getAllWords(words, words.length)
  .then((wordsArrayData) => {
    widic.writeFile(wordsArrayData.arrayData, "wordsWithIPA.json");
    widic.writeFile(wordsArrayData.errorWords, "errorWords.json");
  })
  .catch((err) => {
    console.log(err);
  });
