import { useState } from "react";
import NavBar from "../components/navbar";
import SearchableDropdown from "../components/searchableDropdown";
import TextInput from "../components/textInput";
import useAllPositions from "../hooks/useAllPositions";
import useGuess from "../hooks/useGuess";

const LearnPositions = () => {
  const [currentPositionName, setCurrentPositionName] = useState("");
  const allPositions = useAllPositions();
  const options = allPositions.map((position) => position.display_name);

  const currentPosition = allPositions.filter(
    (position) => position.display_name === currentPositionName
  )[0];

  const techniques = currentPosition?.techniques;
  const submissions = currentPosition?.submissions;

  const [guess, setGuess, correctTechniques, correctSubmissions, clear] =
    useGuess(techniques, submissions);

  const guessChangeHandler = (e) => {
    setGuess(e.target.value);
  };

  const updatePositionName = (newName) => {
    setCurrentPositionName(newName);
    clear();
  };

  const positionChangeHandler = (e) => {
    updatePositionName(e.target.value);
  };

  return (
    <>
      <NavBar selected={0} />

      <div className="flex flex-col mt-20 gap-5 items-center">
        <div className="w-1/3">
          <h2 className="text-2xl">Learn Positions with Techniques</h2>
          <hr className="h-px my-4 w-full bg-gray-800 border-0" />
        </div>

        <SearchableDropdown
          value={currentPositionName}
          setValue={updatePositionName}
          onChange={positionChangeHandler}
          placeholder="Enter Position"
          options={options}
          className="w-1/3"
        />

        <TextInput
          placeholder="Enter Guess"
          className="w-1/3"
          value={guess}
          onChange={guessChangeHandler}
        />

        <div className="w-1/3 bg-gray-100 rounded-md p-4">
          <span className="text-gray-400">
            {correctTechniques?.length ?? 0} / {techniques?.length ?? 0}
          </span>
          {correctTechniques.map((technique) => (
            <p>{technique}</p>
          ))}
        </div>

        <div className="w-1/3 bg-gray-100 rounded-md p-4">
          <span className="text-gray-400">
            {correctSubmissions?.length ?? 0} / {submissions?.length ?? 0}
          </span>
          {correctSubmissions.map((technique) => (
            <p>{technique}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default LearnPositions;
