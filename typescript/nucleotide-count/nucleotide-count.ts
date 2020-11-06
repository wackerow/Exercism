type Count = {
  A: number,
  C: number,
  T: number,
  G: number,
}

class NucleotideCount {
  static nucleotideCounts(_dna: string): Count {
    const dna = _dna.toUpperCase();
    if (this.isInvalid(dna)) { throw 'Invalid nucleotide in strand'}
    return {
      A: this.countLetter("A", dna),
      C: this.countLetter("C", dna),
      T: this.countLetter("T", dna),
      G: this.countLetter("G", dna)
    }
  }

  private static isInvalid(_word: string): boolean {
    return _word.split('').filter(
      letter => letter !== "A" && letter !== "C" && letter !== "T" && letter !== "G"
    ).length !== 0; 
  }

  private static countLetter(_letter: string, _word: string): number {
   return _word.split('').filter(letter => letter === _letter).length; 
  }
}

export default NucleotideCount
