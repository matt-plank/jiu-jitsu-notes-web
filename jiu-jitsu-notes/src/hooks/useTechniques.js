import { useEffect, useState } from "react";
import techniquesApi from "../api/techniques";

const useTechniques = (techniqueApiResults, fromPositionId) => {
  const [techniques, setTechniques] = useState(techniqueApiResults ?? []);

  useEffect(() => {
    setTechniques(techniqueApiResults ?? []);
  }, [techniqueApiResults]);

  const setPropertyByIndex = (techniqueIndex, propertyName) => {
    return (newPropertyValue) => {
      setTechniques((currentTechniques) => {
        const newTechniques = [...currentTechniques];
        newTechniques[techniqueIndex][propertyName] = newPropertyValue;
        return newTechniques;
      });
    };
  };

  const saveByIndex = async (index) => {
    const technique = techniques[index];

    if (!technique.id && technique.name === "") return;

    if (!technique.id) {
      await techniquesApi.create(technique);
      return;
    }

    if (technique.name === "") {
      await techniquesApi.delete(technique.id);
      return;
    }

    await techniquesApi.update(technique.id, technique);
  };

  const newEmptyTechnique = () => {
    setTechniques((currentTechniques) => [
      ...currentTechniques,
      {
        name: "",
        from_position: { id: fromPositionId },
        to_position: {},
      },
    ]);
  };

  return {
    techniques,
    setPropertyByIndex,
    newEmptyTechnique,
    saveByIndex,
  };
};

export default useTechniques;
