const checkText = (text) => {
  if (text === undefined || text === null || text === "")
    return "Please enter a word";
  if (typeof text !== "string") return "word must be a string";
  let texts = text.split(" ");
  if (texts.length > 1) return "Please enter only one word";

  return false;
};

module.exports = checkText;
