import { useState } from "react";
import NavBar from "../components/navbar";
import SearchableDropdown from "../components/searchableDropdown";
import useAllGrips from "../hooks/useAllGrips";
import useAllPositions from "../hooks/useAllPositions";

const EditPositions = () => {
  const positions = useAllPositions();
  const grips = useAllGrips();

  const [selected, setSelected] = useState(null);

  console.log(selected);

  return (
    <>
      <NavBar selected="/edit" />

      <div className="flex justify-center">
        <div className="flex flex-col mt-10 gap-5 w-[40%] pb-10">
          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <SearchableDropdown
              className="w-full bg-white"
              placeholder="Search for Position"
              options={positions}
              optionDisplayName={(option) => option.display_name}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPositions;
