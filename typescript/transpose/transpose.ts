export default class Transpose {
  static transpose(_input: string[]): string[] {
    const longestRow: number = _input.reduce(
      (state, row) => state.length < row.length ? row : state, ''
    ).length;
    let output: string[] = [];
    for (let i = 0; i < longestRow; i++) {
      const newRow = _input.reduce(
        (acc, row) => acc + (
          row[i]? row[i] : /^\s*$/.test(acc) ? ' ' : ''
        ), ''
      );
      output.push(newRow);
    }
    return output;
  }
}
