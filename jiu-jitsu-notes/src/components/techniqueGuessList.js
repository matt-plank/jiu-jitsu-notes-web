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
        <div className="flex justify-between">
          <p>{technique.name}</p>
          <p
            className="text-gray-400 cursor-pointer hover:text-gray-500"
            onClick={() => {
              const position = findPositionById(technique.to_position.id);
              setSelectedPosition(position);
            }}
          >
            {technique.to_position.display_name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TechniqueGuessList;
