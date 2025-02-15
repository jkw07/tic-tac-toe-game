import { ResetButtons } from "./ResetButtons";
import { GameSizeProps } from "./types";
import { calculateWinner } from "./CalculateWinner";
import { ResetButtonProps } from "./types";

export const EndGameInfo = ({ squares, handleResetClick, handleResetGame, gameSize }: GameSizeProps & ResetButtonProps) => {
  const winner = calculateWinner(squares, gameSize);
  const boardIsFull = gameSize === squares.filter(square => square !== null).length;
  return (
    <>
      {winner && (
        <div className="overlay">
          <div className="winner-info">
            <p>YOU WON!</p>
            <h2>{winner} TAKES THE ROUND</h2>
            <ResetButtons handleResetClick={handleResetClick} handleResetGame={handleResetGame} />
          </div>
        </div>
      )}
       {!winner && boardIsFull && (
        <div className="overlay">
          <div className="winner-info">
            <p>IT'S A DRAW!</p>
            <h2>Try again or change the board size</h2>
            <ResetButtons handleResetClick={handleResetClick} handleResetGame={handleResetGame} />
          </div>
        </div>
      )}
    </>
  );
};
