export default class Grains {
  public static square(digit: number): number {
    if (digit <= 0 || digit > 64 || digit % 1 !== 0) { throw '' }
    return (2 ** (digit - 1));
  }

  public static total(): number {
    return (2 ** 64) - 1;
  }
}
