export default class ISBN {
  constructor(private _isbn: string) {}

  public isValid(): boolean {
    const sanitized = this._isbn.replace(/-/g, '').toLowerCase().trim()
    if (!sanitized.match(/^[0-9]{9}[0-9x]{1}$/)) { return false}
    const split = sanitized.split('')
    return (
      +split[0] * 10 +
      +split[1] * 9 +
      +split[2] * 8 +
      +split[3] * 7 +
      +split[4] * 6 +
      +split[5] * 5 +
      +split[6] * 4 +
      +split[7] * 3 +
      +split[8] * 2 + 
      (split[9] === "x" ? 10 : +split[9])
    ) % 11 === 0
  }
}
