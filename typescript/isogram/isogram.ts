export default class Isogram {
    static isIsogram(word: string): boolean {
        const sanitized = word.toLowerCase().replace(/[^a-z]/g, '').split('');
        let usedLetters = '';
        for (const letter of sanitized) {
            if (usedLetters.includes(letter)) {
                return false;
            }
            usedLetters += letter;
        }
        return true;
    }
}
