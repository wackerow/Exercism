export default class Allergies {
  private _allergies: number;
  private _key: string[] = [
    'eggs',
    'peanuts',
    'shellfish',
    'strawberries',
    'tomatoes',
    'chocolate',
    'pollen',
    'cats',
  ];  

  constructor(allergies: number) {
    this._allergies = allergies % (2 ** this._key.length);
  }

  public allergicTo(allergy: string): boolean {
    const index = this._key.indexOf(allergy);
    return (this._allergies & (2 ** index)) !== 0
  }

  public list(): string[] {
    return this._key.filter(
      (_: string, index: number): boolean => (
        (this._allergies & (2 ** index)) !== 0
      )
    );
  }
}
