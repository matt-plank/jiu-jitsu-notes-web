import { useState } from "react";
import NavBar from "../components/navbar";
import SearchableDropdown from "../components/searchableDropdown";
import useAllPositions from "../hooks/useAllPositions";

const LearnPositions = () => {
  const [currentPosition, setCurrentPosition] = useState("");

  const allPositions = useAllPositions();
  const options = allPositions.map((position) => position.display_name);

  const positionChangeHandler = (e) => {
    setCurrentPosition(e.target.value);
  };

  return (
    <>
      <NavBar selected={0} />
      <SearchableDropdown
        value={currentPosition}
        setValue={setCurrentPosition}
        onChange={positionChangeHandler}
        placeholder="Enter Position"
        options={options}
      />
    </>
  );
};

export default LearnPositions;
