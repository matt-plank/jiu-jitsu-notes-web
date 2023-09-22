const TechniqueEditor = ({
  name,
  setName,
  positions,
  toPosition,
  setToPosition,
}) => {
  return (
    <div className="flex flex-row gap-2">
      <input
        type="text"
        placeholder="Enter Technique Name"
        className="p-2 border-2 border-gray-400 rounded-sm bg-white !outline-none"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <select
        className="border-2 border-gray-400 rounded-sm p-2 bg-white w-full"
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
    </div>
  );
};

export default TechniqueEditor;
