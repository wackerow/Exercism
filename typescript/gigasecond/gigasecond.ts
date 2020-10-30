export default class Gigasecond {
  constructor(private _start: Date) {}

  public date(): Date {
    return new Date(this._start.valueOf() + 1e12);
  }
}