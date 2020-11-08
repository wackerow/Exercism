export default class Acronym {
  public static parse(phrase: string): string {
    let acronym = '';
    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i] === ":") { break }
      if (
        phrase[i].match(/[A-Z]/) ||
        (phrase[i-1] && (
          phrase[i-1] === ' ' ||
          phrase[i-1] === '-'
        ))
      ) {
        acronym += phrase[i].toUpperCase();
      }
    }
    return acronym;
  }
}
