import { useRef, useState } from "react";
import useClickToggle from "../hooks/useClickToggle";

const SearchableDropdown = ({ placeholder, options }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef();
  const isOpen = useClickToggle(inputRef);

  const valueChangeHander = (e) => {
    setQuery(e.target.value);
  };

  const filterQueryInOption = (option) => {
    return option.toLowerCase().indexOf(query.toLowerCase()) > -1;
  };

  const dropDownElement = (option) => {
    return (
      <p
        onClick={() => {
          setQuery(option);
        }}
        className="cursor-pointer hover:bg-gray-200 px-2 py-1"
      >
        {option}
      </p>
    );
  };

  return (
    <div className="inline-block m-2">
      <div className="border-2 border-gray-400 rounded-sm p-1 px-2">
        <input
          placeholder={placeholder}
          ref={inputRef}
          value={query}
          onChange={valueChangeHander}
          type="text"
          className="!outline-none w-96"
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
