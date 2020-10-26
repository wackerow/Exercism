export default class {
  constructor(private sentence: string) {}

  isPangram(): boolean {
    return (
      this.sentence.match(/([a-z])(?!.*\1)/gi) || []
      ).length === 26
  }
}