const Technique = ({ onGuessChange }) => {
  const handleGuessChange = (e) => {
    const value = e.target.value;
    const correctGuess = onGuessChange(value);

    if (correctGuess) e.target.value = "";
  };

  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-5">
      <h2 className="text-2xl">Enter Technique</h2>
      <input
        type="text"
        placeholder="Technique"
        className="w-1/2 p-2 rounded-md border border-gray-800 text-lg"
        onChange={handleGuessChange}
      />
    </div>
  );
};

export default Technique;
