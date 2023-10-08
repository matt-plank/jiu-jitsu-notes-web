import ActionButton from "./actionButton";

const TechniqueEditor = ({
  name,
  setName,
  positions,
  toPosition,
  setToPosition,
  setSelectedPosition,
}) => {
  return (
    <div className="flex gap-2 overflow-x-auto">
      <input
        type="text"
        placeholder="Enter Technique Name"
        className="min-w-40 p-2 border border-gray-200 rounded-md shadow-sm bg-white !outline-none w-full"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <select
        className="min-w-40 border border-gray-200 rounded-md shadow-sm p-2 bg-white w-full"
        value={toPosition?.toString() ?? ""}
        onChange={(e) => {
          setToPosition({
            id: parseInt(e.target.value),
          });
        }}
      >
        <option value="">--- None ---</option>
        {positions.map((position) => (
          <option value={position.id}>{position.display_name}</option>
        ))}
      </select>

      <ActionButton
        onClick={() => {
          if (!toPosition) return;

          setSelectedPosition(positions.filter((p) => p.id === toPosition)[0]);
        }}
        className="min-w-20"
      >
        Go To
      </ActionButton>
    </div>
  );
};

export default TechniqueEditor;
