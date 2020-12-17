export default class RomanNumerals {
   public static roman(base10: number): string {
    let workingNumeral = base10
    let romanNumeral = ''
    // 10^3
    while (workingNumeral >= 1000) {
      romanNumeral += 'M'
      workingNumeral -= 1000
    }
    // 10^2
    if (workingNumeral >= 900) {
      romanNumeral += 'CM'
      workingNumeral -= 900
    } else if (workingNumeral >= 500) {
      romanNumeral += 'D'
      workingNumeral -= 500
      while (workingNumeral >= 100) {
        romanNumeral += 'C'
        workingNumeral -= 100
      }
    } else if (workingNumeral >= 400) {
      romanNumeral += 'CD'
      workingNumeral -= 400      
    } else if (workingNumeral >= 100) {
      while (workingNumeral >= 100) {
        romanNumeral += 'C'
        workingNumeral -= 100
      }
    }
    // 10^1
    if (workingNumeral >= 90) {
      romanNumeral += 'XC'
      workingNumeral -= 90
    } else if (workingNumeral >= 50) {
      romanNumeral += 'L'
      workingNumeral -= 50
      while (workingNumeral >= 10) {
        romanNumeral += 'X'
        workingNumeral -= 10
      }
    } else if (workingNumeral >= 40) {
      romanNumeral += 'XL'
      workingNumeral -= 40
    } else if (workingNumeral >= 10) {
      while (workingNumeral >= 10) {
        romanNumeral += 'X'
        workingNumeral -= 10
      }
    }
    // 10^0
    if (workingNumeral >= 9) {
      romanNumeral += 'IX'
    } else if (workingNumeral >= 5) {
      romanNumeral += 'V'
      workingNumeral -= 5
      while (workingNumeral >= 1) {
        romanNumeral += 'I'
        workingNumeral -= 1
      }
    } else if (workingNumeral >= 4) {
      romanNumeral += 'IV'
    } else if (workingNumeral >= 1) {
      while (workingNumeral >= 1) {
        romanNumeral += 'I'
        workingNumeral -= 1 
      }
    }
    return romanNumeral
  }
}
