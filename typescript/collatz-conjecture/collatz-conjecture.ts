class CollatzConjecture {
    static steps(start: number): number {
        if (start <= 0 || start % 1 !== 0) {throw 'Only positive numbers are allowed'}
        let count = 0;
        let current = start;
        while (current > 1) {
            current = current % 2 === 0 ? current / 2 : (3 * current) + 1;
            count++;
        }
        return count;
    }
}

export default CollatzConjecture