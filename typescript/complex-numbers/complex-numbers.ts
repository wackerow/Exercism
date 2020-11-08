export default class ComplexNumber {
  constructor(private _real: number, private _imag: number) {}

  get real(): number {
    return this._real;
  }

  get imag(): number {
    return this._imag;
  }
  
  get abs(): number {
    return Math.sqrt(this.real**2 + this.imag**2);
  }

  get conj(): ComplexNumber {
    return new ComplexNumber(
      this.real,
      this.imag !== 0 ? -this.imag : 0
    );
  }

  get exp(): ComplexNumber {
    return new ComplexNumber(
      Math.E**this.real * Math.cos(this.imag),
      Math.E**this.real * Math.sin(this.imag)
    );
  }

  public add(that: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real + that.real,
      this.imag + that.imag
    );
  }

  public sub(that: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real - that.real,
      this.imag - that.imag
    );
  }

  public mul(that: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real * that.real - this.imag * that.imag,
      this.imag * that.real + this.real * that.imag
    );
  }

  public div(that: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      (this.real * that.real + this.imag * that.imag)/(that.real**2 + that.imag**2),
      (this.imag * that.real - this.real * that.imag)/(that.real**2 + that.imag**2)
    );
  }
}
