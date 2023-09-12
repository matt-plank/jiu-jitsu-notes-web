import { useState } from "react";
import ActionButton from "../components/actionButton";
import GuessCard from "../components/guessCard";
import NavBar from "../components/navbar";
import SearchableDropdown from "../components/searchableDropdown";
import TextInput from "../components/textInput";
import useAllPositions from "../hooks/useAllPositions";
import useGuess from "../hooks/useGuess";

const LearnPositions = () => {
  const [selectedPosition, setSelectedPosition] = useState();
  const allPositions = useAllPositions();

  const techniques = selectedPosition?.techniques;
  const submissions = selectedPosition?.submissions;

  const [guess, setGuess, correctTechniques, correctSubmissions, clear] =
    useGuess(techniques, submissions);

  const guessChangeHandler = (e) => {
    setGuess(e.target.value);
  };

  const selectRandomPosition = () => {
    const randomIndex = Math.floor(Math.random() * allPositions.length);
    const randomPosition = allPositions[randomIndex];
    setSelectedPosition(randomPosition);
  };

  return (
    <>
      <NavBar selected="/positions" />

      <div className="flex justify-center">
        <div className="flex flex-col mt-10 gap-5 w-[40%]">
          <div className="bg-gray-100 rounded-lg p-5 flex flex-col gap-5">
            <SearchableDropdown
              selected={selectedPosition}
              setSelected={setSelectedPosition}
              placeholder="Enter Position"
              options={allPositions}
              className="w-full bg-white"
            />

            <div className="flex flex-row gap-2">
              <ActionButton onClick={clear} hotkeys="[">
                Clear Guesses
              </ActionButton>
              <ActionButton onClick={selectRandomPosition} hotkeys="]">
                Select Random
              </ActionButton>
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-gray-100 rounded-lg p-5">
            <TextInput
              placeholder="Enter Guess"
              value={guess}
              onChange={guessChangeHandler}
              className="bg-white"
            />

            <GuessCard
              correctGuesses={correctTechniques}
              answers={techniques}
            />
            <GuessCard
              correctGuesses={correctSubmissions}
              answers={submissions}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnPositions;
