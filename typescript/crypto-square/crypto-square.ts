export default class Crypto {
  constructor(private _input: string) {}

  public normalizePlaintext(): string {
    return this._input.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  get r(): number {
    return Math.floor(Math.sqrt(this.normalizePlaintext().length));
  }

  get c(): number {
    return this.r ** 2 === this.normalizePlaintext().length ?
      this.r :
      this.r + 1;
  }
  
  public size = (): number => Math.max(this.r, this.c)

  public plaintextSegments(): string[] {
    const segments: string[] = [];
    for (let i = 0; i < this.normalizePlaintext().length; i = i + this.c ) {
      segments.push(this.normalizePlaintext().substr(i, this.c))
    }
    return segments;
  }

  public ciphertext(): string {
    const segments = this.plaintextSegments();
    let cipher = '';
    for (let c = 0; c <= this.c; c++) {
      for (let r = 0; r <= this.r; r++) {
        if (segments[r][c]) {
          cipher += segments[r][c];
        }
      }
    }
    return cipher;
  }
}
