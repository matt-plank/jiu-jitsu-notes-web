import { useEffect, useState } from "react";
import { randomTechnique } from "./api/api";
import Card from "./components/card";
import NavBar from "./components/navbar";
import Technique from "./components/technique";

function App() {
  const [fromPosition, setFromPosition] = useState({});
  const [toPosition, setToPosition] = useState({});
  const [techniqueName, setTechniqueName] = useState();

  // Fetch the techinque (and positions) from the API
  useEffect(() => {
    const fetchRandomTechnique = async () => {
      const technique = await randomTechnique();
      console.log(technique);
      setTechniqueName(technique.name);
      setFromPosition(technique.from_position);
      setToPosition(technique.to_position);
    };

    fetchRandomTechnique();
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex flex-row gap-5 justify-around p-5">
        <Card
          title="From Position"
          aspect={fromPosition.aspect}
          position={fromPosition.name}
          yourGrips={
            fromPosition.your_grips ? fromPosition.your_grips.join(", ") : ""
          }
          theirGrips={
            fromPosition.their_grips ? fromPosition.their_grips.join(", ") : ""
          }
        />

        <Technique />

        <Card
          title="To Position"
          aspect={toPosition.aspect}
          position={toPosition.name}
          yourGrips={
            toPosition.your_grips ? toPosition.your_grips.join(", ") : ""
          }
          theirGrips={
            toPosition.their_grips ? toPosition.their_grips.join(", ") : ""
          }
        />
      </div>
    </>
  );
}

export default App;
