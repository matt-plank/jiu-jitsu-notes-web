const EditableTable = ({ rowValues, setRowValues }) => {
  const rowChangeHandler = (rowIndex) => {
    const onChangeFunction = (e) => {
      setRowValues((currentRowValues) => {
        const newRowValues = [...currentRowValues];
        newRowValues[rowIndex] = e.target.value;

        return newRowValues;
      });
    };

    return onChangeFunction;
  };

  const newEmptyRow = () => {
    setRowValues((currentRowValues) => {
      const newRowValues = [...currentRowValues];
      newRowValues.push("");

      return newRowValues;
    });
  };

  return (
    <table className="border border-gray-800 border-collapse">
      {rowValues.map((value, i) => (
        <tr>
          <td className="p-2 border border-gray-800">
            <input
              type="text"
              value={value}
              onChange={rowChangeHandler(i)}
              className="w-full !outline-none"
            />
          </td>
        </tr>
      ))}
      <tr>
        <td
          onClick={newEmptyRow}
          className="p-2 border-border-gray-800 flex justify-center items-center cursor-pointer hover:bg-gray-100"
        >
          +
        </td>
      </tr>
    </table>
  );
};

export default EditableTable;
