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

      <div className="flex flex-col mt-20 gap-5 items-center">
        <div className="w-1/3">
          <h2 className="text-2xl">Techniques</h2>
          <hr className="h-px my-4 w-full bg-gray-800 border-0" />
        </div>

        <SearchableDropdown
          value={currentPositionName}
          setValue={setCurrentPositionName}
          onChange={positionChangeHandler}
          placeholder="Enter Position"
          options={options}
          className="w-1/3"
        />

        <div className="w-1/3">
          <div className="bg-gray-100 rounded-md px-4 py-4">
            {currentPosition?.techniques.map((technique) => (
              <p>{technique}</p>
            ))}
            <hr className="h-px my-4 bg-gray-400 border-0" />
            {currentPosition?.submissions.map((technique) => (
              <p>{technique}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnPositions;
