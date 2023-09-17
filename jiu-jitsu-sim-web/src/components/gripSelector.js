const GripSelector = ({ grip, setGrip, allGrips }) => {
  return (
    <select
      className="border-2 border-gray-400 rounded-sm p-2 bg-white"
      value={grip.id}
      onChange={(e) => {
        setGrip({
          id: e.target.value,
        });
      }}
    >
      <option value="">--- None ---</option>
      {allGrips.map((gripOption) => (
        <option value={gripOption.id}>{gripOption.name}</option>
      ))}
    </select>
  );
};

export default GripSelector;
