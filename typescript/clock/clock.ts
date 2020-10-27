class Clock {
  private _hour: number;
  private _minute: number;

  constructor(hour: number, minute: number = 0) {
    // Method works for both + and - numbers
    this._minute = ((minute % 60) + 60) % 60;
    this._hour = (((hour + Math.floor(minute / 60)) % 24) + 24) % 24;
  }

  private numberToTwoDigitString(num: number) {
    if (num === 0) {
      return '00';
    }
    if (num < 10) {
      return '0' + num.toString();
    }
    return num.toString();
  }

  public toString(): string {
    return `${this.numberToTwoDigitString(this._hour)}:${this.numberToTwoDigitString(this._minute)}`;
  }

  public plus(minutes: number): Clock {
    let carry: number = 0;
    if (minutes < 0 && this._minute + (minutes % 60) < 0) {
      carry = -1;
    } else if (minutes > 0 && this._minute + (minutes % 60) > 60) {
      carry = 1;
    }
    this._minute = (((this._minute + minutes) % 60) + 60) % 60;
    minutes >= 0
      ? this._hour = (((this._hour + Math.floor(minutes / 60) + carry) % 24) + 24) % 24
      : this._hour = (((this._hour + Math.ceil(minutes / 60) + carry) % 24) + 24) % 24
    return this;
  }

  public minus(minutes: number): Clock {
    this.plus(-minutes)
    return this;
  }

  public equals(clock2: Clock): boolean {
    return clock2.toString() === this.toString();
  }
}

export default Clock;