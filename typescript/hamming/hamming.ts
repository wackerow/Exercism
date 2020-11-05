export default class Hamming {
  public compute(a: string, b: string): number {
    if (a.length !== b.length) { throw 'DNA strands must be of equal length.'}
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { counter++ }
    }
    return counter;
  }
}
