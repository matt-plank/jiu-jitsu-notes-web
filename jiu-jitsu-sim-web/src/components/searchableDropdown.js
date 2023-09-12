import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import useClickToggle from "../hooks/useClickToggle";

const SearchableDropdown = ({
  selected,
  setSelected,
  placeholder,
  options,
  optionDisplayName,
  className,
}) => {
  const inputRef = useRef();
  const isOpen = useClickToggle(inputRef);

  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(selected ? optionDisplayName(options[selected]) : "");
  }, [selected, options, optionDisplayName]);

  const filterQueryInOption = (option) => {
    return (
      optionDisplayName(option)
        .toLowerCase()
        .indexOf(query?.toLowerCase() ?? "") > -1
    );
  };

  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const dropDownElement = (option, i) => {
    return (
      <p
        onClick={() => {
          setSelected(i);
          setQuery(optionDisplayName(option));
        }}
        className="cursor-pointer hover:bg-gray-200 px-2 py-1"
        key={i}
      >
        {optionDisplayName(option)}
      </p>
    );
  };

  const clear = () => {
    setSelected(null);
    setQuery("");
  };

  return (
    <div className={`${className} relative inline-block w-96`}>
      <div className="border-2 border-gray-400 rounded-sm p-1 px-2 flex flex-row items-center gap-2">
        <AiOutlineSearch className="text-gray-400" />

        <input
          placeholder={placeholder}
          ref={inputRef}
          value={query}
          onChange={queryChangeHandler}
          type="text"
          className="!outline-none flex-1 pb-0.5 bg-transparent"
        />

        {selected ? (
          <AiOutlineClose
            className="text-gray-400 cursor-pointer hover:text-red-400"
            onClick={clear}
          />
        ) : (
          <></>
        )}
      </div>
      {isOpen ? (
        <div className="border-2 border-gray-400 rounded-sm mt-2 absolute w-full bg-white z-10">
          {options.filter(filterQueryInOption).map(dropDownElement)}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchableDropdown;
