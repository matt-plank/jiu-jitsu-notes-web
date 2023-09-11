const GuessCard = ({ correctGuesses, answers }) => {
  const numCorrect = correctGuesses?.length;
  const total = answers?.length;

  return (
    <div className="rounded-md flex flex-col gap-3 p-4">
      <span
        className={numCorrect === total ? "text-green-500" : "text-gray-400"}
      >
        {correctGuesses?.length ?? 0} / {answers?.length ?? 0}
      </span>

      <table className="border-collapse w-full">
        {correctGuesses.map((technique) => (
          <tr>
            <td className="border border-gray-400 p-2">{technique}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default GuessCard;
