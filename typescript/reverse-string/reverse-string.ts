export default class ReverseString {
    static reverse(s: string): string {
        return s.split('').reverse().join('');
    }
}
