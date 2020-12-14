type ComplexArray = (number  | undefined | ComplexArray)[]

export default class FlattenArray {
  public static flatten(_array: ComplexArray): number[] {
    const flattened: number[] = []
    for (const item of _array) {
      if (typeof item === "number") {
        flattened.push(item)
      } else if (typeof item === "object") {
        flattened.push(...this.flatten(item))
      }
    } 
    return flattened
  }
}
