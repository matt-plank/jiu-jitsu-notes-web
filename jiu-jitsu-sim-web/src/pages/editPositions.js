import { useState } from "react";
import { updatePosition } from "../api/api";
import ActionButton from "../components/actionButton";
import MultiGripSelector from "../components/multiGripSelector";
import NavBar from "../components/navbar";
import PositionDetailsEditableTable from "../components/positionDetailsEditableTable";
import SearchableDropdown from "../components/searchableDropdown";
import TechniqueEditor from "../components/techniqueEditor";
import useAllGrips from "../hooks/useAllGrips";
import useAllPositions from "../hooks/useAllPositions";
import usePosition from "../hooks/usePosition";

const EditPositions = () => {
  const [positions, refreshPositions] = useAllPositions();
  const [selected, setSelected] = useState(null);

  const [position, positionAsObject] = usePosition(positions[selected]);

  const grips = useAllGrips();

  const savePositionDetails = async () => {
    await updatePosition(position.id.value, positionAsObject());
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

            {position.techniques.value.map((technique, i) => (
              <TechniqueEditor
                technique={technique}
                setTechnique={(newValue) => {
                  position.techniques.setValue((currentTechniques) => {
                    const newTechniques = [...currentTechniques];
                    newTechniques[i] = newValue;
                    return newTechniques;
                  });
                }}
              />
            ))}

            <ActionButton
              onClick={() => {
                position.techniques.setValue((currentTechniques) => {
                  return [...currentTechniques, ""];
                });
              }}
            >
              New Technique
            </ActionButton>
          </div>

          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl">Submissions</h2>

            {position.submissions.value.map((submission, i) => (
              <TechniqueEditor
                technique={submission}
                setTechnique={(newValue) => {
                  position.submissions.setValue((currentSubmissions) => {
                    const newSubmissions = [...currentSubmissions];
                    newSubmissions[i] = newValue;
                    return newSubmissions;
                  });
                }}
              />
            ))}

            <ActionButton
              onClick={() => {
                position.submissions.setValue((currentSubmissions) => {
                  return [...currentSubmissions, ""];
                });
              }}
            >
              New Submission
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
