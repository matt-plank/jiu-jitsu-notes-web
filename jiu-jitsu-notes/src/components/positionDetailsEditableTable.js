const PositionDetailsEditableTable = ({ aspect, setAspect, name, setName }) => {
  return (
    <table className="border-collapse w-full">
      <tbody>
        <tr>
          <td className="border border-gray-800 p-2">Aspect</td>
          <td className="border border-gray-800 p-2">
            <input
              type="text"
              className="bg-transparent w-full !outline-none"
              placeholder="Select a Position to Edit"
              value={aspect}
              onChange={(e) => {
                setAspect(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td className="border border-gray-800 p-2">Name</td>
          <td className="border border-gray-800 p-2">
            <input
              type="text"
              className="bg-transparent w-full !outline-none"
              placeholder="Select a Position to Edit"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PositionDetailsEditableTable;
