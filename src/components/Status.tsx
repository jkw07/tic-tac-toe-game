import { ResetButton } from "./ResetButton";
import { WinnerInfo } from "./WinnerInfo";
import { GameHeader} from "./GameHeader"
import {GameLogo} from './GameLogo'
import { StatusProps } from "./types";
import { ResetButtonProps } from "./types";
import { GameSizeProps } from "./types";

export const Status = ({ handleResetClick, squares, whoIsNext, gameSize, handleResetGame}: StatusProps & ResetButtonProps & GameSizeProps) => {
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
