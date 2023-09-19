import { useHotkeys } from "react-hotkeys-hook";

const ActionButton = ({ onClick, children, hotkeys = "", className }) => {
  useHotkeys(hotkeys, onClick, {
    preventDefault: true,
    enableOnContentEditable: true,
    enableOnFormTags: true,
  });

  return (
    <button
      className={`px-3 py-1 bg-gray-800 rounded-lg text-white active:scale-90 duration-75 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ActionButton;
