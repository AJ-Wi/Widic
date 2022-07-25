const getDataWord = require("../src/getDataWord.js");

describe("getDataWord", () => {
  it("should return the searched word", async () => {
    const data = await getDataWord("baseball");
    expect(data.word).toBe("baseball");
  });

  it("should return the IPA of a word", async () => {
    const data = await getDataWord("baseball");
    expect(data.IPA).toBe("ˈbās-ˌbȯl");
  });

  it("should return the definition of a word", async () => {
    const data = await getDataWord("baseball");
    expect(data.definition).toBe(
      "a game played with a bat and ball between two teams of nine players each on a field with four bases that mark the course a runner must take to score; also : the ball used in this game"
    );
  });

  it("should return the audio name of a word", async () => {
    const data = await getDataWord("baseball");
    expect(data.audio).toBe("baseba01");
  });

  it("should return error message", async () => {
    const data = await getDataWord("");
    expect(data).toBe("Please enter a word");
  });

  it("should return error message", async () => {
    const data = await getDataWord(1);
    expect(data).toBe("word must be a string");
  });

  it("should return error message", async () => {
    const data = await getDataWord("baseball baseball");
    expect(data).toBe("Please enter only one word");
  });
});
