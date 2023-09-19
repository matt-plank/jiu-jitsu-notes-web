import { useState } from "react";

const useGuesses = (techniques, submissions) => {
  const [guessString, setGuessString] = useState("");
  const [guessedTechniqueNames, setGuessedTechniqueNames] = useState([]);
  const [guessedSubmissionNames, setGuessedSubmissionNames] = useState([]);

  const makeGuessOnList = (guess, correct, guessed, setGuessed) => {
    if (correct.indexOf(guess) < 0) return;

    if (guessed.indexOf(guess) > -1) return;

    setGuessed((current) => {
      const newGuessed = [...current];
      newGuessed.push(guess);
      return newGuessed;
    });

    setGuessString("");
  };

  const updateGuessString = (newGuessString) => {
    setGuessString(newGuessString);

    makeGuessOnList(
      newGuessString,
      techniques,
      guessedTechniqueNames,
      setGuessedTechniqueNames
    );

    makeGuessOnList(
      newGuessString,
      submissions,
      guessedSubmissionNames,
      setGuessedSubmissionNames
    );
  };

  const clearPreviousGuesses = () => {
    setGuessedTechniqueNames([]);
    setGuessedSubmissionNames([]);
  };

  return {
    guessString,
    setGuessString: updateGuessString,
    guessedTechniqueNames,
    guessedSubmissionNames,
    clearPreviousGuesses,
  };
};

export default useGuesses;
