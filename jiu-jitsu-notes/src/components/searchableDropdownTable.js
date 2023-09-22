import SearchableDropdown from "./searchableDropdown";

const SearchableDropdownTable = ({
  placeholder,
  rowValues,
  setRowValues,
  options,
  optionDisplayName,
}) => {
  const setRowValue = (i) => {
    return (newValue) => {
      setRowValues((currentValues) => {
        const newValues = [...currentValues];
        newValues[i] = newValue;
        return newValues;
      });
    };
  };

  return (
    <table className="border-collapse w-full">
      <tbody>
        {rowValues.map((rowValue, i) => (
          <tr>
            <td className="border-gray-800 p-2">
              <SearchableDropdown
                placeholder={placeholder}
                selected={rowValue}
                setSelected={setRowValue(i)}
                options={options}
                optionDisplayName={optionDisplayName}
                className="w-full bg-white"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchableDropdownTable;
