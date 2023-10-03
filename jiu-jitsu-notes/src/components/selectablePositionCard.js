const SelectablePositionCard = ({ position, isSelected, onClick }) => {
  const classes = isSelected
    ? "bg-gray-800 text-white"
    : "bg-white hover:bg-gray-50";

  return (
    <div
      className={`${classes} duration-100 cursor-pointer rounded-md shadow-sm p-5`}
      onClick={onClick}
    >
      {position.display_name}
    </div>
  );
};

export default SelectablePositionCard;
