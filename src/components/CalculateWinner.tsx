export const calculateWinner = (
  squares: (string | null)[],
  gameSize: number
): string | null => {
  const boardSize = Math.sqrt(gameSize);
  const winCondition = gameSize === 9 ? 3 : 4;

  // poziomo
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col <= boardSize - winCondition; col++) {
      const start = row * boardSize + col;
      if (
        squares[start] &&
        Array.from(
          { length: winCondition },
          (_, i) => squares[start + i]
        ).every((cell) => cell === squares[start])
      ) {
        return squares[start];
      }
    }
  }

  // pionowo
  for (let col = 0; col < boardSize; col++) {
    for (let row = 0; row <= boardSize - winCondition; row++) {
      const start = row * boardSize + col;
      if (
        squares[start] &&
        Array.from(
          { length: winCondition },
          (_, i) => squares[start + i * boardSize]
        ).every((cell) => cell === squares[start])
      ) {
        return squares[start];
      }
    }
  }

  //ukosnie \ lewo-gora do prawo-dol
  for (let row = 0; row <= boardSize - winCondition; row++) {
    for (let col = 0; col <= boardSize - winCondition; col++) {
      const start = row * boardSize + col;
      if (
        squares[start] &&
        Array.from(
          { length: winCondition },
          (_, i) => squares[start + i * (boardSize + 1)]
        ).every((cell) => cell === squares[start])
      ) {
        return squares[start];
      }
    }
  }

  //ukosnie / prawo-gora do lewo-dol
  for (let row = 0; row <= boardSize - winCondition; row++) {
    for (let col = winCondition - 1; col < boardSize; col++) {
      const start = row * boardSize + col;
      if (
        squares[start] &&
        Array.from(
          { length: winCondition },
          (_, i) => squares[start + i * (boardSize - 1)]
        ).every((cell) => cell === squares[start])
      ) {
        return squares[start];
      }
    }
  }
  return null;
};
