import ActionButton from "./actionButton";

const TechniqueEditor = ({ technique, setTechnique }) => {
  return (
    <div className="flex flex-row gap-2">
      <input
        type="text"
        placeholder="Enter Technique Name"
        className="p-2 border-2 border-gray-400 rounded-sm bg-white flex-1 w-full !outline-none"
        value={technique}
        onChange={(e) => {
          setTechnique(e.target.value);
        }}
      />

      <ActionButton>Edit Technique</ActionButton>
    </div>
  );
};

export default TechniqueEditor;
