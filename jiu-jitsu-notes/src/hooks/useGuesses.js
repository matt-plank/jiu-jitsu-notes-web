import { useEffect, useState } from "react";

const useGuesses = (guessString, setGuessString, techniques) => {
  const [guessed, setGuessed] = useState([]);

  useEffect(() => {
    if (techniques === undefined) return;

    setGuessString("");
    setGuessed([]);
  }, [techniques]);

  useEffect(() => {
    if (techniques === undefined) return;
    if (guessString === "") return;

    const technique = techniques.filter(
      (technique) => technique.name.toLowerCase() === guessString.toLowerCase()
    )[0];

    if (!technique) return;
    if (guessed.includes(technique)) return;

    setGuessed((prev) => [...prev, technique]);
    setGuessString("");
  }, [guessString, setGuessString, techniques]);

  const clearGuessed = () => {
    setGuessed([]);
  };

  const revealAll = () => {
    setGuessed(techniques);
  };

  return [guessed, clearGuessed, revealAll];
};

export default useGuesses;
