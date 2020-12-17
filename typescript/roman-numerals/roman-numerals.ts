export default class RomanNumerals {
  private static keys: {[s: string]: number} = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }
  
  public static roman(base10: number): string {
    let workingNumeral = base10
    let romanNumeral = ''
    for (const key of Object.keys(this.keys)) {
      while (workingNumeral >= this.keys[key]) {
        romanNumeral += key
        workingNumeral -= this.keys[key]
      }
    }
    return romanNumeral
  }
}
