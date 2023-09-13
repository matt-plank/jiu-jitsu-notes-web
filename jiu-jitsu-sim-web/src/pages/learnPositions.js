import { useState } from "react";
import ActionButton from "../components/actionButton";
import GuessCard from "../components/guessCard";
import NavBar from "../components/navbar";
import SearchableDropdown from "../components/searchableDropdown";
import TextInput from "../components/textInput";
import useAllPositions from "../hooks/useAllPositions";
import useGuess from "../hooks/useGuess";

const LearnPositions = () => {
  const [selected, setSelected] = useState(null);
  const [positions, updatePositions, refreshPositions] = useAllPositions();

  const [guess, setGuess, correctTechniques, correctSubmissions, clear] =
    useGuess(
      positions[selected]?.techniques ?? [],
      positions[selected]?.submissions ?? []
    );

  const guessChangeHandler = (e) => {
    setGuess(e.target.value);
  };

  const selectRandomPosition = () => {
    const randomIndex = Math.floor(Math.random() * positions.length);
    setSelected(randomIndex);
    clear();
  };

  return (
    <>
      <NavBar selected="/positions" />

      <div className="flex justify-center">
        <div className="flex flex-col mt-10 gap-5 w-[40%]">
          <div className="bg-gray-100 rounded-lg p-5 flex flex-col gap-5">
            <SearchableDropdown
              selected={selected}
              setSelected={setSelected}
              placeholder="Enter Position"
              options={positions}
              optionDisplayName={(option) => option.display_name}
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
              answers={positions[selected]?.techniques ?? []}
            />
            <GuessCard
              correctGuesses={correctSubmissions}
              answers={positions[selected]?.submissions ?? []}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnPositions;
