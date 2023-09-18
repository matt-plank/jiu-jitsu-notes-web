import { useEffect, useState } from "react";
import { createTechnique, deleteTechnique, updateTechnique } from "../api/api";

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

    if (!technique.id && technique.name === "") return;

    if (!technique.id) {
      await createTechnique(technique);
      return;
    }

    if (technique.name === "") {
      await deleteTechnique(technique.id);
      return;
    }

    await updateTechnique(technique.id, technique);
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