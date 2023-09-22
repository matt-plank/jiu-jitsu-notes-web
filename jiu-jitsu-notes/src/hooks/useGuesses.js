import { useEffect, useState } from "react";

const useGuesses = (guessString, setGuessString, techniques) => {
  const [guessed, setGuessed] = useState([]);

  useEffect(() => {
    setGuessString("");
    setGuessed([]);
  }, [techniques]);

  useEffect(() => {
    const technique = techniques.filter(
      (technique) => technique.name === guessString
    )[0];

    if (!technique) return;

    setGuessed((prev) => [...prev, technique]);
    setGuessString("");
  }, [guessString, setGuessString, techniques]);

  const clearGuessed = () => {
    setGuessed([]);
  };

  return [guessed, clearGuessed];
};

export default useGuesses;
