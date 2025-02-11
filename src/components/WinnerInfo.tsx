import { ResetButton } from "./ResetButton";

export const calculateWinner = (squares: (string | null)[]): string | null | undefined => {
  const lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

for (let i = 0; i < lines.length; i++) {
    const lineMoves=[...new Set(lines[i].map(j => squares[j]))]
    if (lineMoves.length === 1) {
      return lineMoves[0];
    }
  }
  return null;
};

type WinnerInfoProps = {
  squares: (string | null)[];
  handleResetClick: () => void;
  handleResetGame: () => void;
}

export const WinnerInfo = ({ squares, handleResetClick, handleResetGame }: WinnerInfoProps) => {
  const winner = calculateWinner(squares);
  return (
    <>
      {winner && (
        <div className="overlay">
          <div className="winner-info">
            <p>You won!</p>
            <h2>{winner} TAKES THE ROUND</h2>
            <ResetButton handleResetClick={handleResetClick} handleResetGame={handleResetGame} />
          </div>
        </div>
      )}
    </>
  );
};
