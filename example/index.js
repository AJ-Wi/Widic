// @ts-check
"use strict";
const widic = require("../src/index");
const words = require("../data/basic.json");

const getAllWords = async (words, length) => {
  const wordsArrayData = await widic.getAll(words, length);
  return wordsArrayData;
};

getAllWords(words, words.length)
  .then((wordsArrayData) => {
    let newArray = [];
    wordsArrayData.arrayData.forEach((data) => {
      newArray.push({ word: data.word, audio: `[sound:${data.audio}.mp3]`, translation: "", IPA: data.IPA });
    });
    widic.writeFile(newArray, "wordsWithIPA.json");
    widic.writeFile(wordsArrayData.errorWords, "errorWords.json");
    widic.downloadAudioFilesFromArray(wordsArrayData.arrayData, "../audio/");
  })
  .catch((err) => {
    console.log(err);
  });
