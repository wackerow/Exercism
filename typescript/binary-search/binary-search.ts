export default class BinarySearch {
  private _array: number[] = [];

  constructor(array: number[]) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i-1]) {
        return;
      }
    }
    this._array = array;
  }

  get array() {
    if (this._array.length === 0) { return undefined;}
    return [...this._array];
  }

  public indexOf(target: number, iStart: number = 0, iEnd: number = this._array.length): number {
    // Recursive approach
    const indexToCheck = Math.floor((iEnd + iStart) / 2)
    // Success case
    if (this._array[indexToCheck] === target) { return indexToCheck }
    // Base case:
    if (iEnd === iStart) {return -1};

    // Continuation case:
    const [newStart, newEnd] = target > this._array[indexToCheck]
      ? [indexToCheck + 1, iEnd]
      : [iStart, indexToCheck];
    // Call recursively
    return this.indexOf(target, newStart, newEnd);
  }
}