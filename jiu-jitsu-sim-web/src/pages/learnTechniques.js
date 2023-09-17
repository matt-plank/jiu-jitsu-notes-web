import { useEffect } from "react";
import Card from "../components/card";
import NavBar from "../components/navbar";
import Technique from "../components/technique";
import useRandomTechnique from "../hooks/useRandomTechnique";

const LearnTechniques = () => {
  const [newTechnique, technique, isLoading] = useRandomTechnique();

  useEffect(() => {
    newTechnique();
  }, []);

  const guessChangeHandler = (guessValue) => {
    if (guessValue !== technique.name) return false;

    newTechnique();

    return true;
  };

  return (
    <>
      <NavBar selected="/techniques" />
      <div className="flex flex-row gap-5 justify-around p-5">
        {isLoading ? (
          <></>
        ) : (
          <>
            <Card
              title="From Position"
              aspect={technique.from_position.aspect}
              position={technique.from_position.name}
              yourGrips={technique.from_position.your_grips?.join(", ") ?? ""}
              theirGrips={technique.from_position.their_grips?.join(", ") ?? ""}
            />

            <Technique onGuessChange={guessChangeHandler} />

            <Card
              title="To Position"
              aspect={technique.to_position.aspect}
              position={technique.to_position.name}
              yourGrips={technique.to_position.your_grips?.join(", ") ?? ""}
              theirGrips={technique.to_position.their_grips?.join(", ") ?? ""}
            />
          </>
        )}
      </div>
    </>
  );
};

export default LearnTechniques;
