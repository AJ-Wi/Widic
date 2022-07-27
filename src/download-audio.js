// @ts-check

"use strict";
const { AUDIO_API_URL, BEGINS } = require("./config.js");
const { checkText } = require("./utility.js");
const msg = require("./message.js");
const https = require("https");
const fs = require("fs");

/**
 * Download the audio file
 * @param {string} audio - the audio file name to download
 * @param {string} path - the path to save the audio file
 * @returns {Promise<boolean>}
 */
const downloadAudio = async (audio, path) => {
  msg.info(`Downloading audio file ${audio}.mp3...`);
  https
    .get(getUrl(audio), (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(`${path}${audio}.mp3`);
        response.pipe(file);
      }
    })
    .on("error", (err) => msg.error(err));
  return true;
};

/**
 * Get the url for the audio
 *
 *  https://media.merriam-webster.com/audio/prons/en/us/mp3/[subdirectory]/[base_filename].mp3
 *
 *  [subdirectory] is determined as follows:
 *
 *  if audio begins with "bix", the subdirectory should be "bix",
 *
 *  if audio begins with "gg", the subdirectory should be "gg",
 *
 *  if audio begins with a number or punctuation (eg, "_"), the subdirectory should be "number",
 *  otherwise, the subdirectory is equal to the first letter of audio.
 *
 *  Example url audio
 *
 *  https://media.merriam-webster.com/audio/prons/en/us/mp3/b/baseba01.mp3
 *
 * @param {string} audio - the audio file name
 * @returns {string}
 */
const getUrl = (audio) => {
  if (checkText(audio)) return checkText(audio).toString();

  let char = audio.search(BEGINS[0]) !== -1 ? "bix/" : null;
  char = char || audio.search(BEGINS[1]) !== -1 ? "gg/" : null;
  char = char || audio.search(BEGINS[2]) !== -1 ? "number/" : null;
  char = char || audio.charAt(0) + "/";
  return AUDIO_API_URL + char + audio + ".mp3";
};

module.exports = { downloadAudio, getUrl };
