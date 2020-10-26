class Transcriptor {
    toRna(dna: string) {
        let rna: string[] = [];
        for (let nucleotide of dna) {
            switch (nucleotide) {
                case "C":
                    rna.push("G");
                    break;
                case "G":
                    rna.push("C");
                    break;
                case "A":
                    rna.push("U");
                    break;
                case "T":
                    rna.push("A");
                    break;
                default:
                    throw "Invalid input DNA."
            }
        }
        return rna.join('');
    }
}

export default Transcriptor