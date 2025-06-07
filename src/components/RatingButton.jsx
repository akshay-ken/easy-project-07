export function RatingButton({ number, onClick, isSelected }) {
  return (
    <>
      <button
        type="button"
        onClick={() => onClick(number)}
        className={isSelected == number ? "bg-White" : "bg-Grey950/50"}
      >
        {number}
      </button>
    </>
  );
}
