import { ResetButton } from "./ResetButton";
import { WinnerInfo } from "./WinnerInfo";

type StatusProps = {
  handleResetClick: () => void,
  squares: (string | null)[],
  xIsNext: Boolean,
};

export const Status = ({ handleResetClick, squares, xIsNext }: StatusProps) => {
  const xIcon = <i className="fa-solid fa-x"></i>;
  const oIcon = <i className="fa-solid fa-o"></i>;
  let status = xIsNext ? (
    <>
      {xIcon} <span> TURN</span>
    </>
  ) : (
    <>
      {oIcon} <span> TURN</span>
    </>
  );
  return (
    <>
      <div className="status">
        <div className="game-logo">
          <i
            className="fa-solid fa-x fa-2xl icon"
            style={{ color: "#63E6BE" }}
          ></i>
          <i
            className="fa-solid fa-o fa-2xl icon"
            style={{ color: "#FFD43B" }}
          ></i>
        </div>
        <div className="status-info">{status}</div>
        <ResetButton handleResetClick={handleResetClick} />
      </div>
      <WinnerInfo squares={squares} handleResetClick={handleResetClick} />
    </>
  );
};
