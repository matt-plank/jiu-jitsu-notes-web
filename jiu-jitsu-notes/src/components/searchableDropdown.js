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
    <div className={`${className} relative inline-block rounded-lg shadow-sm`}>
      <div className="py-2 px-3 flex flex-row items-center gap-2">
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
        <div className="border border-gray-300 rounded-lg shadow-sm mt-1 absolute w-full bg-white z-10 max-h-96 overflow-y-auto">
          {itemOptions.filter(filterQueryInOption).map((item, i) => (
            <p
              onClick={() => {
                setSelectedItem(item);
                setQuery(getItemDisplayName(item));
              }}
              className="cursor-pointer hover:bg-gray-100 px-2 py-1"
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
