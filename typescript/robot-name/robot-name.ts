export default class {
  private letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  public name: string = "";
  private usedNames: string[] = [];

  constructor() {
    !this.name && this.resetName();
  }

  resetName(): void {
    const generateRandomName = (): string => {
      // Generate random name
      let newRandomName = "";
      for (let _ of Array(2)) {
        newRandomName += this.letters[
          Math.floor(
            Math.random() * this.letters.length
          )
        ]
      }
      for (let _ of Array(3)) {
        newRandomName += (Math.floor(
          Math.random() * 10
        )).toString()
      }

      // If already used
      if (this.usedNames.indexOf(newRandomName) >= 0) {
        // Rerun recursively until base case met (new unique name)
        return generateRandomName();
      }
      return newRandomName;   
    }

    this.name = generateRandomName();
    this.usedNames.push(this.name);
  }
}