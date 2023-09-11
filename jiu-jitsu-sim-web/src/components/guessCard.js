const GuessCard = ({ correctGuesses, answers }) => {
  const numCorrect = correctGuesses?.length;
  const total = answers?.length;

  return (
    <div
      className={`rounded-md p-4 ${
        numCorrect === total ? "border-2 border-green-500" : ""
      }`}
    >
      <span className="text-gray-400">
        {correctGuesses?.length ?? 0} / {answers?.length ?? 0}
      </span>
      {correctGuesses.map((technique) => (
        <p>{technique}</p>
      ))}
    </div>
  );
};

export default GuessCard;
