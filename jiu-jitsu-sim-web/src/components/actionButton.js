const ActionButton = ({ onClick, children }) => {
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
