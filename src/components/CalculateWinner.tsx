export const calculateWinner = (squares: (string | null)[], gameSize: number): string | null => {
  const boardSize = Math.sqrt(gameSize);
  let lines: number[][] = [];

  //poziome
  for (let row = 0; row < boardSize; row++) {
    let rowLine = [];
    for (let col = 0; col < boardSize; col++) {
      rowLine.push(row * boardSize + col);
    }
    lines.push(rowLine);
  }

  //pionowe
  for (let col = 0; col < boardSize; col++) {
    let colLine = [];
    for (let row = 0; row < boardSize; row++) {
      colLine.push(row * boardSize + col);
    }
    lines.push(colLine);
  }

  //przekątna
  let firstDiagonal = [];
  let secondDiagonal = [];
  for (let i = 0; i < boardSize; i++) {
    firstDiagonal.push(i * boardSize + i);
    secondDiagonal.push(i * boardSize + (boardSize - 1 - i));
  }
  lines.push(firstDiagonal);
  lines.push(secondDiagonal);

  for (let i = 0; i < lines.length; i++) {
    const lineMoves = [...new Set(lines[i].map(j => squares[j]))];
    if (lineMoves.length === 1) {
      return lineMoves[0];
    }
  }

  return null;
};