type ResetButtonProps = {
  handleResetClick: () => void;
  handleResetGame: () => void;
}

export const ResetButton = ({ handleResetClick, handleResetGame }: ResetButtonProps) => {
  return (
    <>
      <button type="button" className="btn btn-light" onClick={handleResetClick}>
        <i className="fa-solid fa-arrow-rotate-left"></i>
      </button>
      <button type="button" className="btn btn-light" onClick={handleResetGame}>
        <i className="fa-solid fa-house"></i>
      </button>
    </>
  );
};