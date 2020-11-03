export default class DiffieHellman {
  private _p: number;
  private _g: number;

  private isPrime(num: number): boolean {
    if (num < 2) { return false }
    for (let i = 2; i < num; i++ ) {
      if (num % i === 0) { return false}
    }
    return true;
  }

  constructor(p: number, g: number) {
    if (this.isPrime(p) && this.isPrime(g)) {
      [this._p, this._g] = [p, g];
    } else {
      throw ('Inputs must be prime')
    }
  }

  public getPublicKeyFromPrivateKey(privateKeyA: number): number {
    if (privateKeyA <= 1 || privateKeyA >= this._p) {throw 'Invalid private key'}
    return (this._g ** privateKeyA) % this._p;
  }

  public getSharedSecret(privateKeyA: number, publicKeyB: number): number {
    if (privateKeyA <= 1 || privateKeyA >= this._p) {throw 'Invalid private key'}
    return  (publicKeyB ** privateKeyA) % this._p;
  }
}
