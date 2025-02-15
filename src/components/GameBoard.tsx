import { Square } from "./Square";
import { GameBoardProps } from "./types";
import { GameSizeProps } from "./types";

export const GameBoard = ({ squares, handleClick, gameSize }: GameBoardProps & GameSizeProps) => {
  const boardSize = Math.sqrt(gameSize);
  return (
    <div className="board" style={{gridTemplateColumns: `repeat(${boardSize}, 1fr)`}}>
      {squares.map((_value, index) => (
        <Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)} />
      ))}
    </div>
  );
};