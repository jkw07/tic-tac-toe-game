import { Square } from "./Square";

type GameBoardProps = {
  handleClick: (index: number) => void,
  squares: (string | null)[],
  gameSize: number;
};

export const GameBoard = ({ squares, handleClick, gameSize }: GameBoardProps) => {
  const boardSize = Math.sqrt(gameSize);
  return (
    <div className="board" style={{gridTemplateColumns: `repeat(${boardSize}, 1fr)`, height:`${boardSize*70}px`, width:`${boardSize*70}px`}}>
      {squares.map((_value, index) => (
        <Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)} />
      ))}
    </div>
  );
};
