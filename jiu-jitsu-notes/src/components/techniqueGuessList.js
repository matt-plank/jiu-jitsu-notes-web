const TechniqueGuessList = ({
  allTechniques,
  guessedTechniques,
  setSelectedPosition,
  findPositionById,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-400">
        {guessedTechniques.length} / {allTechniques.length}
      </p>
      {guessedTechniques.map((technique) => (
        <div
          className="flex justify-between px-2 py-1 cursor-pointer hover:bg-gray-200"
          onClick={() => {
            const position = findPositionById(technique.to_position.id);
            setSelectedPosition(position);
          }}
        >
          <p>{technique.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechniqueGuessList;
