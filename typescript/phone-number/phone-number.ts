export default class PhoneNumber {
  constructor(private _input: string) {}

  public number(): string | undefined {
    let sanitized = this._input.replace(/[^a-z0-9]/gi, '');
    if (sanitized.length === 11 && sanitized[0] === '1' ) {
      sanitized = sanitized.substr(1);
    }
    const re = /^[2-9]{1}[\d]{2}[2-9]{1}[\d]{6}$/;
    return sanitized.match(re) ? sanitized : undefined;
  }
}
