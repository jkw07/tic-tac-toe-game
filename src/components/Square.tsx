type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
}


export const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button className={`square square-${value}`} onClick={onSquareClick}>
      {value}
    </button>
  );
};
