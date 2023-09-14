import { useState } from "react";
import { updatePosition } from "../api/api";
import ActionButton from "../components/actionButton";
import NavBar from "../components/navbar";
import SearchableDropdown from "../components/searchableDropdown";
import useAllGrips from "../hooks/useAllGrips";
import useAllPositions from "../hooks/useAllPositions";
import usePosition from "../hooks/usePosition";

const EditPositionDetailsTable = ({ aspect, setAspect, name, setName }) => {
  return (
    <table className="border-collapse w-full">
      <tbody>
        <tr>
          <td className="border border-gray-800 p-2">Aspect</td>
          <td className="border border-gray-800 p-2">
            <input
              type="text"
              className="bg-transparent w-full !outline-none"
              placeholder="Select a Position to Edit"
              value={aspect}
              onChange={(e) => {
                setAspect(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td className="border border-gray-800 p-2">Name</td>
          <td className="border border-gray-800 p-2">
            <input
              type="text"
              className="bg-transparent w-full !outline-none"
              placeholder="Select a Position to Edit"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const GripEditor = ({ grips, setGrips, allGrips }) => {
  return (
    <>
      {grips.map((grip, i) => (
        <select
          className="border-2 border-gray-400 rounded-sm p-2 bg-white"
          value={grip}
          onChange={(e) => {
            setGrips((currentGrips) => {
              const newGrips = [...currentGrips];
              newGrips[i] = e.target.value;
              return newGrips;
            });
          }}
        >
          <option>--- None ---</option>
          {allGrips.map((gripOption) => (
            <option>{gripOption.name}</option>
          ))}
        </select>
      ))}
    </>
  );
};

const EditPositions = () => {
  const [positions, _, refreshPositions] = useAllPositions();
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

            <EditPositionDetailsTable
              aspect={position.aspect.value}
              setAspect={position.aspect.setValue}
              name={position.name.value}
              setName={position.name.setValue}
            />
          </div>

          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl">Your Grips</h2>

            <GripEditor
              grips={position.your_grips.value}
              setGrips={position.your_grips.setValue}
              allGrips={grips}
            />
          </div>

          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl">Their Grips</h2>

            <GripEditor
              grips={position.their_grips.value}
              setGrips={position.their_grips.setValue}
              allGrips={grips}
            />
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
