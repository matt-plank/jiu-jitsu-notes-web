import { AiOutlinePlaySquare } from "react-icons/ai";

const SelectablePlaylistCard = ({
  name,
  description,
  isSelected,
  onClick,
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
      className={`${classes} rounded-md shadow-sm p-5 cursor-pointer duration-100 flex gap-2 items-center`}
      onClick={onClick}
    >
      <AiOutlinePlaySquare className="inline-block mb-1 mr-3" />
      <input
        type="text"
        className="p-2 flex-1 rounded-md shadow-sm border border-200 !outline-none bg-transparent"
        value={name}
      />

      <input
        type="text"
        className="p-2 flex-1 rounded-md shadow-sm border border-200 !outline-none bg-transparent"
        value={description}
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
