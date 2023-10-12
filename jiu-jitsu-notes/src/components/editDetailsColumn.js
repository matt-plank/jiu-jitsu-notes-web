import ActionButton from "./actionButton";
import MultiGripSelector from "./multiGripSelector";
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
    <div className="w-full md:w-1/3 flex flex-col gap-5">
      <SearchableDropdown
        selectedItem={selectedPosition}
        setSelectedItem={setSelectedPosition}
        itemOptions={positions.positionList}
        getItemDisplayName={(option) => option.display_name}
        placeholder="Search for Position"
        className="w-full bg-white"
      />

      <div className="w-full flex gap-5">
        <ActionButton
          onClick={savePositionDetails}
          hotkeys="ctrl+s"
          className="flex-1"
        >
          Save
        </ActionButton>

        <ActionButton onClick={deletePosition} className="flex-1">
          Delete
        </ActionButton>
      </div>

      <div className="p-5 bg-white rounded-lg flex flex-col gap-5 shadow-sm">
        <h2 className="text-xl">Details</h2>

        <div className="flex gap-2 w-full">
          <select
            name="aspect"
            id="aspect"
            className="bg-white p-2 border border-gray-200 rounded-md shadow-sm"
            value={position.position.aspect.value}
            onChange={(e) => {
              position.position.aspect.setValue(e.target.value);
            }}
          >
            <option value="Playing">Playing</option>
            <option value="Passing">Passing</option>
            <option value="Top">Top</option>
            <option value="Bottom">Bottom</option>
          </select>

          <input
            type="text"
            className="bg-white p-2 border border-gray-200 rounded-md shadown sm w-full"
            placeholder="Position Name"
            value={position.position.name.value}
            onChange={(e) => {
              position.position.name.setValue(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="p-5 bg-white rounded-lg flex flex-col gap-5 shadow-sm">
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

      <div className="p-5 bg-white rounded-lg flex flex-col gap-5 shadow-sm">
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
