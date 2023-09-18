import { useState } from "react";
import ActionButton from "../components/actionButton";
import MultiGripSelector from "../components/multiGripSelector";
import NavBar from "../components/navbar";
import PositionDetailsEditableTable from "../components/positionDetailsEditableTable";
import SearchableDropdown from "../components/searchableDropdown";
import TechniqueEditor from "../components/techniqueEditor";
import useAllGrips from "../hooks/useAllGrips";
import useAllPositions from "../hooks/useAllPositions";
import usePosition from "../hooks/usePosition";
import useTechniques from "../hooks/useTechniques";

const EditPositions = () => {
  const grips = useAllGrips();
  const [positions, refreshPositions] = useAllPositions();
  const [selected, setSelected] = useState(null);

  const [position, updatePosition] = usePosition(positions[selected]);
  const [techniques, setTechniqueProperty, newTechnique, saveTechnique] =
    useTechniques(positions[selected]?.techniques, positions[selected]?.id);

  const savePositionDetails = async () => {
    await updatePosition();

    techniques.forEach(async (technique, i) => {
      await saveTechnique(i);
    });

    refreshPositions();
  };

  return (
    <>
      <NavBar selected="/edit" />

      <div className="flex justify-center">
        <div className="flex flex-col mt-10 gap-5 w-[40%] pb-10">
          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <SearchableDropdown
              className="w-full bg-white"
              placeholder="Search for Position"
              options={positions}
              optionDisplayName={(option) => option.display_name}
              selected={selected}
              setSelected={setSelected}
            />
          </div>

          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl">Details</h2>

            <PositionDetailsEditableTable
              aspect={position.aspect.value}
              setAspect={position.aspect.setValue}
              name={position.name.value}
              setName={position.name.setValue}
            />
          </div>

          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl">Your Grips</h2>

            <MultiGripSelector
              grips={position.your_grips.value}
              setGrips={position.your_grips.setValue}
              allGrips={grips}
            />

            <ActionButton
              onClick={() => {
                position.your_grips.setValue((currentGrips) => {
                  return [...currentGrips, ""];
                });
              }}
            >
              Add Grip
            </ActionButton>
          </div>

          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl">Their Grips</h2>

            <MultiGripSelector
              grips={position.their_grips.value}
              setGrips={position.their_grips.setValue}
              allGrips={grips}
            />

            <ActionButton
              onClick={() => {
                position.their_grips.setValue((currentGrips) => {
                  return [...currentGrips, ""];
                });
              }}
            >
              Add Grip
            </ActionButton>
          </div>

          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl">Techniques</h2>

            {techniques?.map((technique, i) => (
              <TechniqueEditor
                position={position}
                name={technique.name}
                setName={setTechniqueProperty(i, "name")}
                positions={positions}
                toPosition={technique.to_position.id}
                setToPosition={setTechniqueProperty(i, "to_position")}
              />
            ))}

            <ActionButton onClick={newTechnique}>New Technique</ActionButton>
          </div>

          <ActionButton onClick={savePositionDetails} hotkeys="ctrl+s">
            Save Position Details
          </ActionButton>
        </div>
      </div>
    </>
  );
};

export default EditPositions;
