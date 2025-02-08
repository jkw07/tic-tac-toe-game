import React, { useState } from "react";

import { Status } from "./components/Status";
import { GameBoard } from "./components/GameBoard";
import { calculateWinner } from "./components/WinnerInfo";

export const App = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };
  const handleResetClick = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };
  return (
    <>
      <Status
        handleResetClick={handleResetClick}
        squares={squares}
        xIsNext={xIsNext}
      />
      <main>
        <GameBoard squares={squares} handleClick={handleClick} />
      </main>
    </>
  );
};
