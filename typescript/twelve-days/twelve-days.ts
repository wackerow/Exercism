class TwelveDays {
    private static _numbers = [
        'first',
        'second',
        'third',
        'fourth',
        'fifth',
        'sixth',
        'seventh',
        'eighth',
        'ninth',
        'tenth',
        'eleventh',
        'twelfth',
    ]

    private static _gifts = [
        'a Partridge in a Pear Tree.\n',
        'two Turtle Doves, ',
        'three French Hens, ',
        'four Calling Birds, ',
        'five Gold Rings, ',
        'six Geese-a-Laying, ',
        'seven Swans-a-Swimming, ',
        'eight Maids-a-Milking, ',
        'nine Ladies Dancing, ',
        'ten Lords-a-Leaping, ',
        'eleven Pipers Piping, ',
        'twelve Drummers Drumming, '
    ]

    public static recite(fromVerse: number, toVerse: number): string {
        let song = ''
        for (let i = fromVerse - 1; i < toVerse; i++) {
            let verse = `On the ${this._numbers[i]} day of Christmas my true love gave to me: `
            
            for (let j = i; j >= 0; j--) {
                if (i > 0) {
                    if (j > 0) {
                        verse += this._gifts[j]
                    } else {
                        verse += 'and ' + this._gifts[0]
                    }
                } else {
                    verse += this._gifts[0]
                }   
            }
            song += verse
        }
        return song
    }
}

export default TwelveDays
