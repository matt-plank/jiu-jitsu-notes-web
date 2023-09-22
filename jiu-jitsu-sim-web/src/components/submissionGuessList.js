const SubmissionGuessList = ({ allSubmissions, guessedSubmissions }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-400">
        {guessedSubmissions.length} / {allSubmissions.length}
      </p>
      {guessedSubmissions.map((submission) => (
        <div className="flex justify-between">
          <p>{submission.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SubmissionGuessList;
