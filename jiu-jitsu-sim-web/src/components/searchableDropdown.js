import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import useClickToggle from "../hooks/useClickToggle";

const SearchableDropdown = ({
  selectedItem,
  setSelectedItem,
  placeholder,
  itemOptions,
  getItemDisplayName,
  className,
}) => {
  const inputRef = useRef();
  const isOpen = useClickToggle(inputRef);

  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(selectedItem ? getItemDisplayName(selectedItem) : "");
  }, [selectedItem, getItemDisplayName]);

  const filterQueryInOption = (item) => {
    return (
      getItemDisplayName(item).toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  const deselectSelectedItem = () => {
    setSelectedItem(null);
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
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          type="text"
          className="!outline-none flex-1 pb-0.5 bg-transparent"
        />

        {selectedItem ? (
          <AiOutlineClose
            className="text-gray-400 cursor-pointer hover:text-red-400"
            onClick={deselectSelectedItem}
          />
        ) : (
          <></>
        )}
      </div>
      {isOpen ? (
        <div className="border-2 border-gray-400 rounded-sm mt-2 absolute w-full bg-white z-10">
          {itemOptions.filter(filterQueryInOption).map((item, i) => (
            <p
              onClick={() => {
                setSelectedItem(item);
                setQuery(getItemDisplayName(item));
              }}
              className="cursor-pointer hover:bg-gray-200 px-2 py-1"
              key={i}
            >
              {getItemDisplayName(item)}
            </p>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchableDropdown;
