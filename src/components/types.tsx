export enum Move {
  X = "X",
  O = "O",
}

export type GameBoardProps = {
  handleClick: (index: number) => void,
};

export type GameSizeProps = {
  squares: (string | null)[];
  gameSize: number;
}

export type ResetButtonProps = {
  handleResetClick: () => void;
  handleResetGame: () => void;
}

export type StartGameProps = {
  gameSize: number;
  handleResetGame: () => void;
}

export type StatusProps = {
  whoIsNext: Move,
};