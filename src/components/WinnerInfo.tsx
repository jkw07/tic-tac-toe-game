import { ResetButton } from "./ResetButton";

export const calculateWinner = (squares: (string | null)[]): string | null => {
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
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

type WinnerInfoProps = {
  squares: (string | null)[];
  handleResetClick: () => void;
}

export const WinnerInfo = ({ squares, handleResetClick }: WinnerInfoProps) => {
  const winner = calculateWinner(squares);
  return (
    <>
      {winner && (
        <div className="overlay">
          <div className="winner-info">
            <p>You won!</p>
            <h2>{winner} TAKES THE ROUND</h2>
            <ResetButton handleResetClick={handleResetClick} />
          </div>
        </div>
      )}
    </>
  );
};
