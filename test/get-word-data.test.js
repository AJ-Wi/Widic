const getWordData = require("../src/get-word-data");

describe("getWordData", () => {
  it("should return an object literal", async () => {
    const data = await getWordData("baseball");
    expect(data).toEqual(
      expect.objectContaining({
        word: "baseball",
        IPA: "ˈbās-ˌbȯl",
        definition:
          "a game played with a bat and ball between two teams of nine players each on a field with four bases that mark the course a runner must take to score; also : the ball used in this game",
        audio: "baseba01",
      })
    );
  });

  it("should return error message", async () => {
    const data = await getWordData("");
    expect(data).toBe("Please enter a word");
  });

  it("should return error message", async () => {
    const data = await getWordData(1);
    expect(data).toBe("word must be a string");
  });

  it("should return error message", async () => {
    const data = await getWordData("baseball baseball");
    expect(data).toBe("Please enter only one word");
  });
});
