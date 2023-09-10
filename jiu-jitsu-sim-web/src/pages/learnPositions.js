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

  const selectRandomPosition = () => {
    const randomIndex = Math.floor(Math.random() * allPositions.length);
    const randomPosition = allPositions[randomIndex].display_name;
    updatePositionName(randomPosition);
  };

  return (
    <>
      <NavBar selected="/positions" />

      <div className="flex justify-center">
        <div className="flex flex-col mt-10 gap-5 w-1/3">
          <SearchableDropdown
            value={currentPositionName}
            setValue={updatePositionName}
            onChange={positionChangeHandler}
            placeholder="Enter Position"
            options={options}
            className="w-full text-xl"
          />

          <div className="flex flex-row gap-2">
            <ActionButton onClick={clear} hotkeys="[">
              Clear Guesses
            </ActionButton>
            <ActionButton onClick={selectRandomPosition} hotkeys="]">
              Select Random
            </ActionButton>
          </div>

          <hr className="h-px w-full bg-gray-800 border-0 my-5" />

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
