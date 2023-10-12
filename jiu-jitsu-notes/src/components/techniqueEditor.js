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
    <div className="flex flex-wrap gap-2">
      <input
        type="text"
        placeholder="Enter Technique Name"
        className="bg-white p-2 border border-gray-200 rounded-md shadow-sm flex-1"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <div className="flex-1 flex gap-2">
        <select
          className="w-full min-w-40 bg-white p-2 border border-gray-200 rounded-md shadow-sm"
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

            setSelectedPosition(
              positions.filter((p) => p.id === toPosition)[0]
            );
          }}
          className="min-w-max"
        >
          Go To
        </ActionButton>
      </div>
    </div>
  );
};

export default TechniqueEditor;
