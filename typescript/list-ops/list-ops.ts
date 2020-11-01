export default class List<T> {
  private _values: T[];

  constructor(values?: T[]) {
      this._values = values || [];
  }

  get values(): T[] {
    return this._values
  }

  public append(list2: List<T>): List<T> {
    this._values = [...this.values, ...list2.values];
    return this;
  }

  public concat(list2: List<any>): List<T> {
    const returnList = new List(this.values);
    for (const item of list2.values) {
      if (item.values) {
        returnList.append(new List(item.values));
      } else {
        returnList.append(new List(item));
      }
    }
    return returnList;
  }

  public filter(func: (arg0: T) => boolean): List<T> {
    const returnList: List<T> = new List<T>();
    for (let i = 0; i < this.length(); i++) {
      if (func(this.values[i])) {
        returnList.append(new List([this.values[i]]))
      }
    }
    return returnList;
  }
  
  public length(): number {
    let counter = 0; 
    for (const _ of this.values) {
      counter++
    }
    return counter;
  }
  
  public map(func: (arg0: T) => T): List<T> {
    const returnList: List<T> = new List<T>();
    for (let i = 0; i < this.length(); i++) {
      returnList.append(new List([func(this.values[i])]))
    }
    return returnList;
  }
  
  public foldl(func: (arg0: T, arg1: T) => T, start: T): T {
    let current = start;
    for (let i = 0; i < this.length(); i++) {
      current = func(current, this.values[i]);
    }
    return current;
  }
  
  public foldr(func: (arg0: T, arg1: T) => T, start: T): T {
    let current = start;
    for (let i = this.length() - 1; i >= 0; i--) {
      current = func(current, this.values[i]);
    }
    return current;
  }
  
  public reverse(): List<T> {
    const returnList: List<T> = new List<T>();
    for (let i = this.length() - 1; i >= 0; i--) {
      returnList.append(new List([this.values[i]]));
    }
    return returnList;
  }
}
