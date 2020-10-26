export class ResistorColor {
  private colors: string[];

  private colorConversion: {[i: string]: number} = {
    "black": 0,
    "brown": 1,
    "red": 2,
    "orange": 3,
    "yellow": 4,
    "green": 5,
    "blue": 6,
    "violet": 7,
    "grey": 8,
    "white": 9
  }

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw "At least two colors need to be present"
    }
    this.colors = colors;
  }
  value = (): number => {
    return this.colorConversion[this.colors[0]] * 10 + this.colorConversion[this.colors[1]]
  };
}
