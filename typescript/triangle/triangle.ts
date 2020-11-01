export default class Triangle {
  private _sides: number[];

  constructor(...sides: number[]) {
    this._sides = sides;
  }

  public kind(): string {
    if (
      this._sides.length < 3 ||
      this._sides[0] <= 0 ||
      this._sides[1] <= 0 ||
      this._sides[2] <= 0 ||
      this._sides[0] + this._sides[1] < this._sides[2] ||
      this._sides[1] + this._sides[2] < this._sides[0] ||
      this._sides[2] + this._sides[0] < this._sides[1]
    ) {
      throw 'Impossible triangle';
    }
    if (
      this._sides[0] === this._sides[1] &&
      this._sides[1] === this._sides[2]
    ) {
      return 'equilateral';
    }
    if (
      this._sides[0] === this._sides[1] ||
      this._sides[1] === this._sides[2] ||
      this._sides[2] === this._sides[0]
    ) {
      return 'isosceles';
    }
    return 'scalene';
  }
}
