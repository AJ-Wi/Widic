const widic = require("../src/index");
const words = require("../data/words.json");
const fs = require("fs");

test("integration test", async () => {
  const data = await widic.getAll(words, 7);
  widic.writeFile(data.arrayData, "test-word-correct.json");
  widic.writeFile(data.errorWords, "test-word-error.json");
  expect(fs.existsSync("./test-word-correct.json")).toBe(true);
  expect(fs.existsSync("./test-word-error.json")).toBe(true);
  fs.rmSync("./test-word-correct.json");
  fs.rmSync("./test-word-error.json");
});
