class Matrix {
    // Declare 2D arrays for both rows and columns
    // Initialize to empty arrays
    public rows: number[][] = [];
    public columns: number[][] = [];

    constructor(matrixString: string) {
        // Split passed matrix into array of strings(rows)
        const splitByLine = matrixString.split('\n');
        // Iterate over each row string
        for (let [i, row] of splitByLine.entries()) {
            // Split row string by spaces
            const splitBySpaces = row.split(' ');
            // If current row array has not yet been
            // initialized in this.rows, do it now
            if (!this.rows[i]) { this.rows.push([])};
            // Iterate over each row item string
            for (let [j, item] of splitBySpaces.entries()) {
                // If current columns array has not been
                // initialized in this.columns, do it now.
                if (!this.columns[j]) { this.columns.push([])};
                // Push item (casted as number) to both arrays
                // at correct location
                this.rows[i].push(+item);
                this.columns[j].push(+item);
            }
        }
    }
}

export default Matrix;
