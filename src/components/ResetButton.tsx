type ResetButtonProps = {
  handleResetClick: () => void;
}

export const ResetButton = ({ handleResetClick }: ResetButtonProps) => {
  return (
    <button type="button" className="btn btn-light" onClick={handleResetClick}>
      <i className="fa-solid fa-arrow-rotate-left"></i>
    </button>
  );
};