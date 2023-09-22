import { useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import ActionButton from "../components/actionButton";
import MultiGripSelector from "../components/multiGripSelector";
import NavBar from "../components/navbar";
import PositionDetailsEditableTable from "../components/positionDetailsEditableTable";
import SearchableDropdown from "../components/searchableDropdown";
import TechniqueEditor from "../components/techniqueEditor";
import useAllGrips from "../hooks/useAllGrips";
import useAllPositions from "../hooks/useAllPositions";
import usePosition from "../hooks/usePosition";
import useSubmissions from "../hooks/useSubmissions";
import useTechniques from "../hooks/useTechniques";

const EditPositions = () => {
  const grips = useAllGrips();
  const positions = useAllPositions();
  const [selectedPosition, setSelectedPosition] = useState();

  const position = usePosition(selectedPosition);
  const techniques = useTechniques(
    selectedPosition?.techniques,
    selectedPosition?.id
  );
  const submissions = useSubmissions(
    selectedPosition?.submissions,
    selectedPosition?.id
  );

  useHotkeys(
    "escape",
    () => {
      setSelectedPosition();
    },
    {
      preventDefault: true,
      enableOnContentEditable: true,
      enableOnFormTags: true,
    }
  );

  const savePositionDetails = async () => {
    await position.save();

    techniques.techniques.forEach(async (_, i) => {
      await techniques.saveByIndex(i);
    });

    submissions.submissions.forEach(async (_, i) => {
      await submissions.saveByIndex(i);
    });

    await positions.refreshPositions();
  };

  const deletePosition = async () => {
    await position.remove();
    await positions.refreshPositions();

    setSelectedPosition();
  };

  useEffect(() => {
    if (!position.position.id.value) return;

    const currentPosition = positions.positionList.filter(
      (p) => p.id === position.position.id.value
    )[0];

    setSelectedPosition(currentPosition);
  }, [positions.positionList]);

  return (
    <>
      <NavBar selected="/edit" />

      <div className="flex p-5 gap-5">
        <div className="w-1/3 flex flex-col gap-5">
          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <SearchableDropdown
              selectedItem={selectedPosition}
              setSelectedItem={setSelectedPosition}
              itemOptions={positions.positionList}
              getItemDisplayName={(option) => option.display_name}
              placeholder="Search for Position"
              className="w-full bg-white"
            />
          </div>

          <div className="w-full flex gap-5">
            <ActionButton
              onClick={savePositionDetails}
              hotkeys="ctrl+s"
              className="flex-1"
            >
              Save Position Details
            </ActionButton>

            <ActionButton onClick={deletePosition} className="flex-1">
              Delete Position
            </ActionButton>
          </div>

          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl">Details</h2>

            <PositionDetailsEditableTable
              aspect={position.position.aspect.value}
              setAspect={position.position.aspect.setValue}
              name={position.position.name.value}
              setName={position.position.name.setValue}
            />
          </div>

          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl">Your Grips</h2>

            <MultiGripSelector
              grips={position.position.your_grips.value}
              setGrips={position.position.your_grips.setValue}
              allGrips={grips}
            />

            <ActionButton
              onClick={() => {
                position.position.your_grips.setValue((currentGrips) => {
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
              grips={position.position.their_grips.value}
              setGrips={position.position.their_grips.setValue}
              allGrips={grips}
            />

            <ActionButton
              onClick={() => {
                position.position.their_grips.setValue((currentGrips) => {
                  return [...currentGrips, ""];
                });
              }}
            >
              Add Grip
            </ActionButton>
          </div>
        </div>

        <div className="w-1/3">
          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl">Techniques</h2>

            {techniques.techniques.map((technique, i) => (
              <TechniqueEditor
                position={position}
                name={technique.name}
                setName={techniques.setPropertyByIndex(i, "name")}
                positions={positions.positionList}
                toPosition={technique.to_position.id}
                setToPosition={techniques.setPropertyByIndex(i, "to_position")}
              />
            ))}

            <ActionButton onClick={techniques.newEmptyTechnique}>
              New Technique
            </ActionButton>
          </div>
        </div>

        <div className="w-1/3">
          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl">Submissions</h2>

            {submissions.submissions.map((submission, i) => (
              <input
                type="text"
                placeholder="Enter Submission Name"
                className="p-2 border-2 border-gray-400 rounded-sm bg-white flex-1 w-full !outline-none"
                value={submission.name}
                onChange={(e) => {
                  submissions.setPropertyByIndex(i, "name")(e.target.value);
                }}
              />
            ))}

            <ActionButton onClick={submissions.newEmptySubmission}>
              New Technique
            </ActionButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPositions;
