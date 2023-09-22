import ActionButton from "./actionButton";

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
          <ActionButton
            onClick={() => {
              const position = findPositionById(technique.to_position.id);
              setSelectedPosition(position);
            }}
          >
            Go To
          </ActionButton>
        </div>
      ))}
    </div>
  );
};

export default TechniqueGuessList;
