const EditableTableRow = ({ title, value, onChange }) => {
  return (
    <tr>
      <td className="p-2 border border-gray-800">{title}</td>
      <td className="p-2 border border-gray-800">
        <input
          value={value}
          onChange={onChange}
          type="text"
          className="w-full !outline-none bg-transparent"
        />
      </td>
    </tr>
  );
};

export default EditableTableRow;
