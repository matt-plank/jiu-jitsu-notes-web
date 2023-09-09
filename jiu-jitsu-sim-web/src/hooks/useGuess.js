import { useState } from "react";

const useGuess = (techniques, submissions) => {
  const [guess, setGuess] = useState("");
  const [correctTechniques, setCorrectTechniques] = useState([]);
  const [correctSubmissions, setCorrectSubmissions] = useState([]);

  const guessOnList = (guess, correct, guessed, setGuessed) => {
    if (correct.indexOf(guess) < 0) return;

    if (guessed.indexOf(guess) > -1) return;

    setGuessed((current) => {
      const newGuessed = [...current];
      newGuessed.push(guess);
      return newGuessed;
    });

    setGuess("");
  };

  const updateGuess = (newGuess) => {
    setGuess(newGuess);

    guessOnList(newGuess, techniques, correctTechniques, setCorrectTechniques);

    guessOnList(
      newGuess,
      submissions,
      correctSubmissions,
      setCorrectSubmissions
    );
  };

  const clear = () => {
    setCorrectTechniques([]);
    setCorrectSubmissions([]);
  };

  return [guess, updateGuess, correctTechniques, correctSubmissions, clear];
};

export default useGuess;
