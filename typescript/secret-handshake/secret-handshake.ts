export default class {
  constructor(private _secret: number) {}

  public commands(): string[] {
    const steps: string[] = [];
    this._secret % 2 === 1 && steps.push('wink');
    (this._secret >> 1) % 2 === 1 && steps.push('double blink');
    (this._secret >> 2) % 2 === 1 && steps.push('close your eyes');
    (this._secret >> 3) % 2 === 1 && steps.push('jump');
    return (this._secret >> 4) % 2 === 1 ? steps.reverse() : steps;
  }
}