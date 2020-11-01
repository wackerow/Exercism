type coords = [number, number];

interface Board {
  white: coords,
  black: coords
}

export default class Queens {
  constructor(private _board: Board) {
    if (
      this.white[0] === this.black[0]
      && this.white[1] === this.black[1]
      ) {
      throw 'Queens cannot share the same space';
    }
  }

  get white(): coords {
    return [...this._board.white];
  }

  get black(): coords {
    return [...this._board.black];
  }

  public toString(): string {
    const boardArray: string[] = [];
    for (let i = 0; i < 8; i++) {
      let row = '';
      for (let j = 0; j < 8; j++) {
        if (i === this.white[0] && j === this.white[1]) {
          row += 'W';
        } else if (i === this.black[0] && j === this.black[1]) {
          row += 'B';
        } else {
          row += '_';
        }
      }
      boardArray.push(row.split('').join(' ') + '\n');
    }
    return boardArray.join('');
  }

  private nextStop(coord: coords, direction: number): coords {
    switch (direction) {
      case 0: // right
        return [coord[0], coord[1] + 1];
      case 1: // up-right
        return [coord[0] - 1, coord[1] + 1];
      case 2: // up
        return [coord[0] - 1, coord[1]];
      case 3: // up-left
        return [coord[0] - 1, coord[1] - 1];
      case 4: // left
        return [coord[0], coord[1] - 1];
      case 5: // down-left
        return [coord[0] + 1, coord[1] - 1];
      case 6: // down
        return [coord[0] + 1, coord[1]];
      case 7: // down-right
        return [coord[0] + 1, coord[1] + 1];
      default:
        throw "invalid direction"
    }
  }

  public canAttack(): boolean {   
    for (let direction = 0; direction < 8; direction++) {
      const [targetRow, targetCol] = this.black;
      let row = this.white[0];
      let col = this.white[1];
      while (row >= 0 && col >= 0 && row < 8 && col < 8) {
        if (row === targetRow && col === targetCol) {
          return true;
        }
        [row, col] = this.nextStop([row, col], direction);
      }
    }
    return false;
  }
}
