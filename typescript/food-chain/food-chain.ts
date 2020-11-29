export default class FoodChain {
  private static _animals = [
    'fly',
    'spider',
    'bird',
    'cat',
    'dog',
    'goat',
    'cow',
    'horse',
  ]
  
  private static swallowedThe(swallowedIndex: number) {
    return `She swallowed the ${this._animals[swallowedIndex]} to catch the ${this._animals[swallowedIndex - 1]}.\n`
  }

  public static verse(onlyVerse: number): string {
    return this.verses(onlyVerse)
  }

  public static verses(fromVerse: number, _toVerse?: number): string {
    const toVerse = _toVerse || fromVerse
    let song = ''
    for (let i = fromVerse - 1; i < toVerse; i++) {
      let verse = `I know an old lady who swallowed a ${this._animals[i]}.\n`
      if (i + 1 < this._animals.length) {
        if (i + 1 > 1) {
          if (i + 1 > 2) {
            switch (i) {
              case 2:
                verse += `How absurd to swallow a ${this._animals[i]}!\n`
                break
              case 3:
                verse += `Imagine that, to swallow a ${this._animals[i]}!\n`
                break
              case 4:
                verse += `What a hog, to swallow a ${this._animals[i]}!\n`
                break
              case 5:
                verse += `Just opened her throat and swallowed a ${this._animals[i]}!\n`
                break
              case 6:
                verse += `I don't know how she swallowed a ${this._animals[i]}!\n`
                break
              default:
                break
            }
            if (i + 1 > 3) {
              if (i + 1 > 4) {
                if (i + 1 > 5) {
                  if (i + 1 > 6) {
                    verse += this.swallowedThe(6)
                  }
                  verse += this.swallowedThe(5)
                }
                verse += this.swallowedThe(4)
              }
              verse += this.swallowedThe(3)
            }
          }
          verse += i + 1 === 2 ?
            `It ` :
            `She swallowed the ${this._animals[2]} to catch the ${this._animals[1]} that `
          verse += `wriggled and jiggled and tickled inside her.\n`          
          verse += `She swallowed the ${this._animals[1]} to catch the ${this._animals[0]}.\n`
        }

        verse += `I don't know why she swallowed the ${this._animals[0]}. Perhaps she'll die.\n`
        verse += i + 1 < toVerse ? '\n' : ''
      } else {
        verse += `She's dead, of course!\n`
      }
      song += verse
    }
    return song
  }
}
