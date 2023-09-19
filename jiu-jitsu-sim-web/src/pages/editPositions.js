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
  const [selectedPosition, setSelectedPosition] = useState();

  const [position, savePosition] = usePosition(selectedPosition);
  const techniques = useTechniques(
    selectedPosition?.techniques,
    selectedPosition?.id
  );

  const savePositionDetails = async () => {
    await savePosition();

    techniques.techniques.forEach(async (_, i) => {
      await techniques.saveByIndex(i);
    });

    await refreshPositions();
  };

  return (
    <>
      <NavBar selected="/edit" />

      <div className="flex justify-center">
        <div className="flex flex-col mt-10 gap-5 w-[40%] pb-10">
          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <SearchableDropdown
              selectedItem={selectedPosition}
              setSelectedItem={setSelectedPosition}
              itemOptions={positions}
              getItemDisplayName={(option) => option.display_name}
              placeholder="Search for Position"
              className="w-full bg-white"
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

            {techniques.techniques.map((technique, i) => (
              <TechniqueEditor
                position={position}
                name={technique.name}
                setName={techniques.setPropertyByIndex(i, "name")}
                positions={positions}
                toPosition={technique.to_position.id}
                setToPosition={techniques.setPropertyByIndex(i, "to_position")}
              />
            ))}

            <ActionButton onClick={techniques.newEmptyTechnique}>
              New Technique
            </ActionButton>
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
