const SelectablePositionCard = ({
  position,
  isSelected,
  onSelect,
  onDeselect,
}) => {
  const classes = isSelected
    ? "bg-gray-800 text-white"
    : "bg-white hover:bg-gray-50";

  return (
    <div
      className={`${classes} duration-100 cursor-pointer rounded-md shadow-sm p-5`}
      onClick={() => {
        if (!isSelected) {
          onSelect();
          return;
        }

        onDeselect();
      }}
    >
      {position.display_name}
    </div>
  );
};

export default SelectablePositionCard;
