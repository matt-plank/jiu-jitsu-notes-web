import { useState } from "react";
import NavBar from "../components/navbar";
import SearchableDropdown from "../components/searchableDropdown";
import useAllPositions from "../hooks/useAllPositions";

const EditPositions = () => {
  const positions = useAllPositions();
  const options = positions.map((position) => position.display_name);
  const [query, setQuery] = useState("");

  return (
    <>
      <NavBar selected="/edit" />

      <div className="flex justify-center">
        <div className="flex flex-col mt-10 gap-5 w-1/3">
          <SearchableDropdown
            className="w-full"
            placeholder="Enter Position"
            options={options}
            value={query}
            setValue={setQuery}
          />
        </div>
      </div>
    </>
  );
};

export default EditPositions;
