#!/usr/bin/env node

"use strict";
const getFlags = require("./src/get-flags");
const config = require("./src/config");
const help = require("./src/help");
const widic = require("./src/index");
const msg = require("./src/message");
const flags = getFlags(process.argv);

if (flags.includes("-h")) {
  console.log(help);
  process.exit(0);
}
if (flags.includes("-v")) {
  console.log(`v${config.VERSION}`);
  process.exit(0);
}
if (flags.includes("-s")) {
  config.SILENT = true;
}
if (flags.includes("-w")) {
  widic.getWord(flags[flags.indexOf("-w") + 1]).then((result) => {
    const audio = result.audio;
    if (audio !== "Not found") result.audio = widic.getUrl(audio);
    if (flags.includes("-t")) {
      widic.translate(result.word).then((res) => {
        result.translate = res;
        if (!config.SILENT) console.log(result);
        const output = writeOut("-of");
        if (output.exist) {
          widic.writeFile(result, output.flag);
        }
        const outputAudio = writeOut("-oa");
        if (outputAudio.exist) {
          widic.downloadAudioFile(audio, outputAudio.flag);
        }
      });
    } else {
      if (!config.SILENT) console.log(result);
      const output = writeOut("-of");
      if (output.exist) {
        widic.writeFile(result, output.flag);
      }
      const outputAudio = writeOut("-oa");
      if (outputAudio.exist) {
        widic.downloadAudioFile(audio, outputAudio.flag);
      }
    }
  });
}

if (flags.includes("-f")) {
  const words = require(flags[flags.indexOf("-f") + 1]);
  let length = words.length;
  if (flags.includes("-l")) {
    if (flags[flags.indexOf("-l") + 1] !== undefined) {
      length = flags[flags.indexOf("-l") + 1];
    }
  }
  widic.getAll(words, length).then((result) => {
    if (flags.includes("-t")) {
      if (!config.SILENT) msg.info("Translating...");
      result.arrayData.forEach((data) => {
        let audio = data.audio;
        if (audio !== "Not found") data.audio = widic.getUrl(audio);
        widic.translate(data.word).then((res) => {
          data.translate = res;
        });
        const outputAudio = writeOut("-oa");
        if (outputAudio.exist) {
          widic.downloadAudioFile(audio, outputAudio.flag);
        }
      });
      if (!config.SILENT) msg.success("Translated!");
      const output = writeOut("-of");
      if (output.exist) {
        widic.writeFile(result.arrayData, output.flag);
      } else {
        widic.writeFile(result.arrayData);
      }
      widic.writeFile(result.errorWords, "error-words.json");
    } else {
      result.arrayData.forEach((data) => {
        let audio = data.audio;
        if (audio !== "Not found") data.audio = widic.getUrl(audio);
        const outputAudio = writeOut("-oa");
        if (outputAudio.exist) {
          widic.downloadAudioFile(audio, outputAudio.flag);
        }
      });
      const output = writeOut("-of");
      if (output.exist) {
        widic.writeFile(result.arrayData, output.flag);
      } else {
        widic.writeFile(result.arrayData);
      }
      widic.writeFile(result.errorWords, "error.json");
      if (!config.SILENT) msg.success("Done!");
    }
  });
}

const writeOut = (flag) => {
  const out = flags.indexOf(flag);
  if (out !== -1) {
    if (flags[out + 1] !== undefined) {
      if (flags[out + 1].substring(0, 1) !== "-") {
        return { exist: true, flag: flags[out + 1] };
      } else {
        return { exist: true, flag: undefined };
      }
    } else {
      return { exist: true, flag: undefined };
    }
  }
  return { exist: false, flag: undefined };
};
