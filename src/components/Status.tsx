import { ResetButtons } from './ResetButtons';
import { EndGameInfo } from "./EndGameInfo";
import { GameHeader} from "./GameHeader"
import { StatusProps } from "./types";
import { ResetButtonProps } from "./types";
import { GameSizeProps } from "./types";

export const Status = ({ handleResetClick, squares, whoIsNext, gameSize, handleResetGame}: StatusProps & ResetButtonProps & GameSizeProps) => {
  let status = <span>{whoIsNext} TURN</span>
  let lineLength = gameSize === 9 ? 3 : 4;

  return (
    <>
      <div className="status">
        <GameHeader text={status}/>
        <ResetButtons handleResetClick={handleResetClick} handleResetGame={handleResetGame}/>
        <EndGameInfo squares={squares} handleResetClick={handleResetClick} handleResetGame={handleResetGame} gameSize={gameSize}/>
      </div>
      <p className="line-length">To win place {lineLength} marks in a row!</p>
    </>
  );
};
