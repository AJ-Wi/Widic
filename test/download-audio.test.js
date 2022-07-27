const { downloadAudio, getUrl } = require("../src/download-audio.js");
const fs = require("fs");

describe("downloadAudio", () => {
  it("should return true if the audio of a word exists", async () => {
    downloadAudio("baseba01", "./audios/").then(expect(fs.existsSync(`./audios/baseba01.mp3`)).toBe(true));
  });

  it("should return false if the audio of a word not exists", async () => {
    downloadAudio("widic", "./audios/").then(expect(fs.existsSync(`./audios/widic.mp3`)).toBe(false));
  });
});

describe("getUrl", () => {
  it("should return the url of the audio", () => {
    expect(getUrl("baseba01")).toBe("https://media.merriam-webster.com/audio/prons/en/us/mp3/b/baseba01.mp3");
  });

  it("should return an error message for empty parameter", () => {
    expect(getUrl()).toBe("Please enter a word");
  });

  it("should return an error message for non-string parameter", () => {
    expect(getUrl(1)).toBe("word must be a string");
  });

  it("should return an error message for multiple words", () => {
    expect(getUrl("baseball baseball")).toBe("Please enter only one word");
  });
});
