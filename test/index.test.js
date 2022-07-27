const widic = require("../src/index");
const words = require("../data/words.json");
const fs = require("fs");

test("integration test", async () => {
  const data = await widic.getAll(words, 7);
  widic.writeFile(data, "test.json");
  expect(fs.existsSync("./test.json")).toBe(true);
});
