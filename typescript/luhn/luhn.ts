export default class Luhn {
  public static valid(_numbers: string): boolean {
    const numbers = _numbers.replace(/\s/g, '');
    if (
      numbers.length < 2 ||
      numbers.match(/[^0-9]/g)
    ) {
      return false;
    }
    const stringArray = numbers.split('');
    const numArray: number[] = [];
    for (const num of stringArray) {
      numArray.push(+num)
    }
    for (let i = 0; i < numArray.length; i++) {
      if ((i + numArray.length) % 2 === 0) {
        numArray[i] = numArray[i] * 2 > 9 ?
          numArray[i] * 2 - 9 :
          numArray[i] * 2;
      }
    }
    const checksum = numArray[numArray.length - 1];
    return (
        numArray
        .slice(0, numArray.length - 1)
        .reduce((a, b) => a + b) * 9
      ) % 10 === checksum;
  }
}
