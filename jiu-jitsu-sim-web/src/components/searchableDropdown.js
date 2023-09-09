import { useRef } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import useClickToggle from "../hooks/useClickToggle";

const SearchableDropdown = ({
  value,
  setValue,
  onChange,
  placeholder,
  options,
}) => {
  const inputRef = useRef();
  const isOpen = useClickToggle(inputRef);

  const filterQueryInOption = (option) => {
    return option.toLowerCase().indexOf(value.toLowerCase()) > -1;
  };

  const dropDownElement = (option) => {
    return (
      <p
        onClick={() => {
          setValue(option);
        }}
        className="cursor-pointer hover:bg-gray-200 px-2 py-1"
      >
        {option}
      </p>
    );
  };

  const clear = () => {
    setValue("");
  };

  return (
    <div className="inline-block">
      <div className="border-2 border-gray-400 rounded-sm p-1 px-2 flex flex-row items-center gap-2">
        <AiOutlineSearch className="text-gray-400" />

        <input
          placeholder={placeholder}
          ref={inputRef}
          value={value}
          onChange={onChange}
          type="text"
          className="!outline-none w-96"
        />

        <AiOutlineClose
          className="text-gray-400 cursor-pointer hover:text-red-400"
          onClick={clear}
        />
      </div>
      {isOpen ? (
        <div className="border-2 border-gray-400 rounded-sm mt-2">
          {options.filter(filterQueryInOption).map(dropDownElement)}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchableDropdown;
