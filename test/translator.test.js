const translator = require("../src/translator.js");

test("translator", async () => {
  const result = await translator("Hello");
  expect(result).toBe("Hola");
});
