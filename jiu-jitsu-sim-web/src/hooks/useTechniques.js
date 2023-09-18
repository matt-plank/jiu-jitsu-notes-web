import { useEffect, useState } from "react";
import { createTechnique, updateTechnique } from "../api/api";

const useTechniques = (techniqueApiResults, fromPositionId) => {
  const [techniques, setTechniques] = useState(techniqueApiResults ?? []);

  useEffect(() => {
    setTechniques(techniqueApiResults ?? []);
  }, [techniqueApiResults]);

  const setPropertyOfTechnique = (techniqueIndex, propertyName) => {
    return (newPropertyValue) => {
      setTechniques((currentTechniques) => {
        const newTechniques = [...currentTechniques];
        newTechniques[techniqueIndex][propertyName] = newPropertyValue;
        return newTechniques;
      });
    };
  };

  const saveTechnique = async (index) => {
    const technique = techniques[index];

    if (technique.id) {
      await updateTechnique(technique.id, technique);
      return;
    }

    await createTechnique(technique);
  };

  const newTechnique = () => {
    setTechniques((currentTechniques) => [
      ...currentTechniques,
      {
        name: "",
        from_position: { id: fromPositionId },
        to_position: {},
      },
    ]);
  };

  return [techniques, setPropertyOfTechnique, newTechnique, saveTechnique];
};

export default useTechniques;
