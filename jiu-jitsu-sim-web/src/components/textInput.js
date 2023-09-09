const TextInput = ({ value, onChange, placeholder, className }) => {
  return (
    <div
      className={`${className} border-2 border-gray-400 rounded-sm p-1 px-2 flex flex-row items-center gap-2`}
    >
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="text"
        className="!outline-none flex-1"
      />
    </div>
  );
};

export default TextInput;
