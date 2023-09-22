import ActionButton from "./actionButton";
import MultiGripSelector from "./multiGripSelector";
import PositionDetailsEditableTable from "./positionDetailsEditableTable";
import SearchableDropdown from "./searchableDropdown";

const EditDetailsColumn = ({
  selectedPosition,
  setSelectedPosition,
  positions,
  savePositionDetails,
  deletePosition,
  position,
  grips,
}) => {
  return (
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
  );
};

export default EditDetailsColumn;
