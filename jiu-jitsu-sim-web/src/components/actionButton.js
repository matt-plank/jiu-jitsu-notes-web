import { useHotkeys } from "react-hotkeys-hook";

const ActionButton = ({ onClick, children, hotkeys }) => {
  useHotkeys(hotkeys, onClick);

  return (
    <button
      className="px-3 py-1 bg-gray-800 rounded-lg text-lg text-white active:scale-90 duration-75"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ActionButton;
