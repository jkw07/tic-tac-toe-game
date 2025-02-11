import { useState } from "react";

import { Status } from "./Status";
import { GameBoard } from "./GameBoard";
import { calculateWinner } from "./WinnerInfo";

enum Move {
  X = "X",
  O = "O",
}

type StartGameProps = {
    gameSize: number;
    handleResetGame: () => void;
}

export const StartGame = ({gameSize, handleResetGame}: StartGameProps) => {
  const [whoIsNext, setWhoIsNext] = useState<Move>(Move.X);
  const [squares, setSquares] = useState(Array(gameSize).fill(null));

  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (whoIsNext === Move.X) {
      nextSquares[i] = Move.X;
      setWhoIsNext(Move.O)
    } else {
      nextSquares[i] = Move.O;
      setWhoIsNext(Move.X)
    }
    setSquares(nextSquares);
  };

  const handleResetClick = () => {
    setSquares(Array(gameSize).fill(null));
    setWhoIsNext(Move.X);
  };

  return (
    <>
      <Status
        handleResetClick={handleResetClick}
        squares={squares}
        whoIsNext={whoIsNext}
        gameSize={gameSize}
        handleResetGame={handleResetGame}
      />
      <main>
        <GameBoard squares={squares} handleClick={handleClick} gameSize={gameSize}/>
      </main>
    </>
  );
};