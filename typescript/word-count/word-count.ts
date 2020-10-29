export default class Words {
  public count(words: string): Map<string, number> {
    const sanitizedWords = words
      .toLowerCase()
      .replace(/[\n\t]/g, " ")
      .replace(/\s\s+/g, " ")
      .trim()
      .split(" ");
    let wordCount = new Map();
    for (let word of sanitizedWords) {
      const count = wordCount.get(word);
      if (count) {
        wordCount.set(word, count + 1)
      } else {
        wordCount.set(word, 1)
      }
    }
    return wordCount;
  }
}