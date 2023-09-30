import ActionButton from "./actionButton";
import TechniqueEditor from "./techniqueEditor";

const EditTechniquesColumn = ({
  techniques,
  position,
  positions,
  setSelectedPosition,
}) => {
  return (
    <div className="p-5 bg-white shadow-sm rounded-lg flex flex-col gap-5">
      <h2 className="text-xl">Techniques</h2>

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

      <ActionButton onClick={techniques.newEmptyTechnique}>
        New Technique
      </ActionButton>
    </div>
  );
};

export default EditTechniquesColumn;
