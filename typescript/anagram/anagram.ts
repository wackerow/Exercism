export default class Anagram {
  private _anagram: string;
  private _sortedAnagram: string;

  constructor(private anagram: string) {
    this._anagram = anagram.toLowerCase();
    this._sortedAnagram =this._anagram.split('').sort().join('');
  }

  public matches(...args: string[]): string[] {
    const matches: string[] = [];
    for (let word of args) {
      let sortedWord = word.toLowerCase().split('').sort().join('');
      if (
        sortedWord === this._sortedAnagram &&
        word.toLowerCase() !== this._anagram
      ) {
        matches.push(word);
      }
    }
    return matches;
  } 
}
