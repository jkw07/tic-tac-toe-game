import { ResetButton } from "./ResetButton";
import { GameSizeProps } from "./types";
import { calculateWinner } from "./CalculateWinner";
import { ResetButtonProps } from "./types";

export const WinnerInfo = ({ squares, handleResetClick, handleResetGame, gameSize }: GameSizeProps & ResetButtonProps) => {
  const winner = calculateWinner(squares, gameSize);
  return (
    <>
      {winner && (
        <div className="overlay">
          <div className="winner-info">
            <p>YOU WON!</p>
            <h2>{winner} TAKES THE ROUND</h2>
            <ResetButton handleResetClick={handleResetClick} handleResetGame={handleResetGame} />
          </div>
        </div>
      )}
    </>
  );
};
