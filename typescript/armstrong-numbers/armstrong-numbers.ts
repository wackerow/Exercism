export default class ArmstrongNumbers {
  public static isArmstrongNumber(test: number): boolean {
    const testArray: string[] = test.toString().split('')
    return testArray.reduce(
      (acc: number, value: string) => (
        acc + (+value) ** testArray.length
      ), 0
    ) === test
  }
}
