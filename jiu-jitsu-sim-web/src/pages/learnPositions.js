import { useState } from "react";
import NavBar from "../components/navbar";
import SearchableDropdown from "../components/searchableDropdown";
import useAllPositions from "../hooks/useAllPositions";

const LearnPositions = () => {
  const [currentPositionName, setCurrentPositionName] = useState("");

  const allPositions = useAllPositions();
  const options = allPositions.map((position) => position.display_name);

  const positionChangeHandler = (e) => {
    setCurrentPositionName(e.target.value);
  };

  const currentPosition = allPositions.filter(
    (position) => position.display_name === currentPositionName
  )[0];

  return (
    <>
      <NavBar selected={0} />

      <div className="flex flex-row w-full justify-around h-96 items-center">
        <SearchableDropdown
          value={currentPositionName}
          setValue={setCurrentPositionName}
          onChange={positionChangeHandler}
          placeholder="Enter Position"
          options={options}
        />

        <div className="w-1/3">
          <h2 className="text-2xl">Techniques</h2>
          <hr className="h-px my-4 bg-gray-800 border-0" />
          <div className="bg-gray-200 rounded-md px-4 py-2">
            <p>{currentPosition?.techniques ?? "None"}</p>
            <hr className="h-px my-4 bg-gray-400 border-0" />
            <p>{currentPosition?.submissions ?? "None"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnPositions;
