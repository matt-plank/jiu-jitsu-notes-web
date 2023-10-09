const SelectablePlaylistCard = ({
  name,
  setName,
  description,
  setDescription,
  isSelected,
  onSelect,
  onDelete,
}) => {
  const classes = isSelected
    ? "bg-gray-800 text-white"
    : "bg-white hover:bg-gray-50";

  const buttonClasses = isSelected
    ? "bg-white text-gray-800"
    : "bg-gray-800 text-white";

  return (
    <div
      className={`${classes} rounded-md shadow-sm p-5 cursor-pointer duration-100 flex gap-2 items-center overflow-x-auto`}
    >
      <button
        onClick={onSelect}
        className={`${buttonClasses} px-3 py-2 rounded-md duration-100`}
      >
        Select
      </button>

      <input
        type="text"
        className="p-2 flex-2 rounded-md shadow-sm border border-200 !outline-none bg-transparent"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="text"
        className="p-2 flex-1 rounded-md shadow-sm border border-200 !outline-none bg-transparent"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <button
        onClick={onDelete}
        className={`${buttonClasses} px-3 py-2 rounded-md duration-100`}
      >
        Delete
      </button>
    </div>
  );
};

export default SelectablePlaylistCard;
