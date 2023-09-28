const GripSelector = ({ grip, setGrip, allGrips }) => {
  return (
    <select
      className="border border-gray-200 rounded-md shadow-sm px-2 py-3 bg-white"
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
