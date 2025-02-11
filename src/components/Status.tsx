import { ResetButton } from "./ResetButton";
import { WinnerInfo } from "./WinnerInfo";
import { PickGameSize } from "./PickGameSize";

type StatusProps = {
  handleResetClick: () => void,
  squares: (string | null)[],
  whoIsNext: "X" | "O",
  gameSize: number,
};

export const Status = ({ handleResetClick, squares, whoIsNext, gameSize}: StatusProps) => {
  let status = <span>{whoIsNext} TURN</span>

  return (
    <>
    <div className="status">
          <div className="game-logo">
            <i className="fa-solid fa-x fa-2xl icon iconx"></i>
            <i className="fa-solid fa-o fa-2xl icon icono"></i>
          </div>
          <button type="button" className="btn btn-light" onClick={handleResetGame}>
            <i className="fa-solid fa-house"></i>
          </button>
        <div className="status-info">gameSize ? {status} : "Choose game size:"</div>
        <ResetButton handleResetClick={handleResetClick} />
      <WinnerInfo squares={squares} handleResetClick={handleResetClick} />
    </>
  );
};
