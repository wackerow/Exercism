export default class PerfectNumbers {
  static classify(num: number): string {
    if (num < 1 || num % 1 !== 0) { throw 'Classification is only possible for natural numbers.'}
    let aliquotSum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        aliquotSum += i;
      }
    }
    if (aliquotSum - num === 0) { return 'perfect' }
    return aliquotSum - num < 0 ? 'deficient' : 'abundant';
  }
}
