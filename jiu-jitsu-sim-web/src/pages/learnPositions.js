import { useState } from "react";
import ActionButton from "../components/actionButton";
import GuessCard from "../components/guessCard";
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

      <div className="flex justify-center">
        <div className="flex flex-col mt-20 gap-5 w-1/3">
          <h2 className="text-2xl">Learn Positions with Techniques</h2>

          <hr className="h-px w-full bg-gray-800 border-0" />

          <div className="flex flex-row gap-2">
            <ActionButton
              onClick={() => {
                alert("Hello");
              }}
            >
              Hello
            </ActionButton>
            <ActionButton
              onClick={() => {
                alert("How");
              }}
            >
              How
            </ActionButton>
            <ActionButton
              onClick={() => {
                alert("Are");
              }}
            >
              Are
            </ActionButton>
            <ActionButton
              onClick={() => {
                alert("You");
              }}
            >
              You
            </ActionButton>
          </div>

          <SearchableDropdown
            value={currentPositionName}
            setValue={updatePositionName}
            onChange={positionChangeHandler}
            placeholder="Enter Position"
            options={options}
            className="w-full"
          />

          <hr className="h-px w-full bg-gray-800 border-0" />

          <TextInput
            placeholder="Enter Guess"
            value={guess}
            onChange={guessChangeHandler}
          />

          <GuessCard correctGuesses={correctTechniques} answers={techniques} />
          <GuessCard
            correctGuesses={correctSubmissions}
            answers={submissions}
          />
        </div>
      </div>
    </>
  );
};

export default LearnPositions;
