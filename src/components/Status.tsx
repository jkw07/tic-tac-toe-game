import { ResetButton } from "./ResetButton";
import { WinnerInfo } from "./WinnerInfo";
import { GameHeader} from "./GameHeader"
import {GameLogo} from './GameLogo'
import {Move} from './types'

type StatusProps = {
  handleResetClick: () => void,
  squares: (string | null)[],
  whoIsNext: Move,
  gameSize: number,
  handleResetGame: () => void;
};

export const Status = ({ handleResetClick, squares, whoIsNext, gameSize, handleResetGame}: StatusProps) => {
  let status = <span>{whoIsNext} TURN</span>

  return (
    <>
      <div className="status">
        <GameLogo/>
        <GameHeader text={status}/>
        <ResetButton handleResetClick={handleResetClick} handleResetGame={handleResetGame}/>
        <WinnerInfo squares={squares} handleResetClick={handleResetClick} handleResetGame={handleResetGame} gameSize={gameSize}/>
      </div>
    </>
  );
};
