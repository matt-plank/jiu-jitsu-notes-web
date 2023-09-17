import { useState } from "react";
import { randomTechnique } from "../api/api";

const useRandomTechnique = () => {
  const [technique, setTechnique] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchRandomTechnique = async () => {
    const newTechnique = await randomTechnique();
    setTechnique(newTechnique);
    setIsLoading(false);
  };

  return [fetchRandomTechnique, technique, isLoading];
};

export default useRandomTechnique;
