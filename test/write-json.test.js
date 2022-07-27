const writeJSON = require("../src/write-json");
const fs = require("fs");

test("writeJSON", () => {
  const data = {
    word: "hello",
  };
  writeJSON(data, "test.json");
  expect(fs.existsSync("./test.json")).toBe(true);
  fs.rmSync("./test.json");
});
