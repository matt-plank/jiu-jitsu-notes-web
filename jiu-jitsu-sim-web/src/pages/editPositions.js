import { useState } from "react";
import EditableTable from "../components/editableTable";
import EditableTableRow from "../components/editableTableRow";
import NavBar from "../components/navbar";
import SearchableDropdown from "../components/searchableDropdown";
import useAllPositions from "../hooks/useAllPositions";

const EditPositions = () => {
  const positions = useAllPositions();

  const [selectedPosition, setSelectedPosition] = useState();
  const [myGrips, setMyGrips] = useState([]);
  const [theirGrips, setTheirGrips] = useState([]);
  const [aspect, setAspect] = useState("");
  const [name, setName] = useState("");
  const [techniques, setTechniques] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  const updateSelectedPosition = (newSelectedPosition) => {
    setSelectedPosition(newSelectedPosition);
    setAspect(newSelectedPosition?.aspect ?? "");
    setName(newSelectedPosition?.name ?? "");
    setMyGrips(newSelectedPosition?.your_grips ?? []);
    setTheirGrips(newSelectedPosition?.their_grips ?? []);
    setTechniques(newSelectedPosition?.techniques ?? []);
    setSubmissions(newSelectedPosition?.submissions ?? []);
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
              selected={selectedPosition}
              setSelected={updateSelectedPosition}
            />
          </div>

          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl">Details</h2>

            <table className="border border-gray-800 border-collapse w-full">
              <tbody>
                <EditableTableRow
                  title="Aspect"
                  value={aspect}
                  onChange={(e) => {
                    setAspect(e.target.value);
                  }}
                />
                <EditableTableRow
                  title="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </tbody>
            </table>
          </div>

          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl">Your Grips</h2>

            <EditableTable rowValues={myGrips} setRowValues={setMyGrips} />

            <h2 className="text-xl">Their Grips</h2>

            <EditableTable
              rowValues={theirGrips}
              setRowValues={setTheirGrips}
            />
          </div>

          <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
            <h2 className="text-xl">Techniques</h2>

            <EditableTable
              rowValues={techniques}
              setRowValues={setTechniques}
            />

            <h2 className="text-xl">Submissions</h2>

            <EditableTable
              rowValues={submissions}
              setRowValues={setSubmissions}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPositions;
