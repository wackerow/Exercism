export default class Squares {
  constructor(private _N: number) {}

  get squareOfSum(): number {
    if (this._N < 0) { throw 'No negatives'}
    if (this._N <= 1) { return this._N }
    return this._N % 2 === 0 ?
      ((this._N + 1) * (this._N / 2)) ** 2 :
      (((this._N + 1) * Math.floor(this._N / 2)) + Math.ceil(this._N / 2)) ** 2;
  }

  get sumOfSquares(): number {
    let sum = 0;
    for (let i = 1; i <= this._N; i++) {
      sum += i ** 2;
    }
    return sum;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}