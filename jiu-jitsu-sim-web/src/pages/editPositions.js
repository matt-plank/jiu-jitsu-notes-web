import NavBar from "../components/navbar";
import SearchableDropdown from "../components/searchableDropdown";
import SearchableDropdownTable from "../components/searchableDropdownTable";
import useAllGrips from "../hooks/useAllGrips";
import useAllPositions from "../hooks/useAllPositions";
import usePosition from "../hooks/usePosition";

const EditPositions = () => {
  const positions = useAllPositions();
  const grips = useAllGrips();

  const [position, setPosition, setPositionProperty] = usePosition();

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
              selected={position}
              setSelected={setPosition}
            />
          </div>

          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl">Your Grips</h2>

            <SearchableDropdownTable
              placeholder="Search for Grip"
              rowValues={position.your_grips}
              setRowValues={setPositionProperty("your_grips")}
              options={grips}
              optionDisplayName={(option) => option}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPositions;
