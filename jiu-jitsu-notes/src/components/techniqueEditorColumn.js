import ActionButton from "./actionButton";
import TechniqueEditor from "./techniqueEditor";

const TechniqueEditorColumn = ({
  techniques,
  position,
  positions,
  setSelectedPosition,
}) => {
  return (
    <div className="p-5 bg-white shadow-sm rounded-lg flex flex-col gap-5 w-full">
      <h2 className="text-xl">Techniques</h2>

      <div className="flex flex-col gap-5">
        {techniques.techniques.map((technique, i) => (
          <TechniqueEditor
            position={position}
            name={technique.name}
            setName={techniques.setPropertyByIndex(i, "name")}
            positions={positions.positionList}
            toPosition={technique.to_position.id}
            setToPosition={techniques.setPropertyByIndex(i, "to_position")}
            setSelectedPosition={setSelectedPosition}
          />
        ))}
      </div>

      <ActionButton onClick={techniques.newEmptyTechnique}>
        New Technique
      </ActionButton>
    </div>
  );
};

export default TechniqueEditorColumn;
