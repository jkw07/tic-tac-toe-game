export const ResetButton = ({ handleResetClick }) => {
  return (
    <button type="button" class="btn btn-light" onClick={handleResetClick}>
      <i class="fa-solid fa-arrow-rotate-left"></i>
    </button>
  );
};
