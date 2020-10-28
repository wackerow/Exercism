class ProteinTranslation {
  private static _codons: {[s: string]: string} = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UGU': 'Cysteine',
    'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP',
    'UAG': 'STOP',
    'UGA': 'STOP'
  }

  static proteins(rna: string): string[] {
    let aminoAcids: string[] = [];
    for (let i = 0; i < rna.length - 2; i += 3) {
      const codon = rna.substr(i, 3);
      if (this._codons[codon] === 'STOP') { return aminoAcids; }
      aminoAcids.push(this._codons[codon]);
    }
    return aminoAcids;
  }
}

export default ProteinTranslation
