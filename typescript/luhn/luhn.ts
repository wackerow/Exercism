export default class Luhn {
  public static valid(_numbers: string): boolean {
    // Sanitize and remove all spaces
    const numbers = _numbers.replace(/\s/g, '');
    // If too short, or contains anything other than numbers, return false
    if (
      numbers.length < 2 ||
      numbers.match(/[^0-9]/g)
    ) {
      return false;
    }
    // Split string into array
    const stringArray = numbers.split('');
    // Initiate new empty array of type number
    const numArray: number[] = [];
    // Iterate over each "number", convert to number type
    for (let i = 0; i < stringArray.length; i++) {
      let nextNumber: number;
      // Every other position gets doubled and reduced to single digit
      if ((i + stringArray.length) % 2 === 0) {
        nextNumber = +stringArray[i] * 2 > 9 ?
          +stringArray[i] * 2 - 9 :
          +stringArray[i] * 2;
      } else {
        // Otherwise just add integer form of number
        nextNumber = +stringArray[i];
      }
      // Push to array of numbers
      numArray.push(nextNumber);
    }
    // Checksum is last number
    const checksum = numArray[numArray.length - 1];
    // Return if Luhn logic matches checksum
    return (
        numArray
        .slice(0, numArray.length - 1)
        .reduce((a, b) => a + b) * 9
      ) % 10 === checksum;
  }
}
