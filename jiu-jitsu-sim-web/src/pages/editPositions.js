import { useState } from "react";
import EditableTable from "../components/editableTable";
import EditableTableRow from "../components/editableTableRow";
import NavBar from "../components/navbar";
import SearchableDropdown from "../components/searchableDropdown";
import useAllPositions from "../hooks/useAllPositions";

const EditPositions = () => {
  const positions = useAllPositions();
  const options = positions.map((position) => position.display_name);

  const [query, setQuery] = useState("");
  const [myGrips, setMyGrips] = useState([]);
  const [theirGrips, setTheirGrips] = useState([]);
  const [aspect, setAspect] = useState("");
  const [name, setName] = useState("");
  const [techniques, setTechniques] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  const querySetter = (newQuery) => {
    const newSelectedPosition = positions.filter(
      (position) => position.display_name === newQuery
    )[0];

    setQuery(newQuery);
    setAspect(newSelectedPosition?.aspect ?? "");
    setName(newSelectedPosition?.name ?? "");
    setMyGrips(newSelectedPosition?.your_grips ?? []);
    setTheirGrips(newSelectedPosition?.their_grips ?? []);
    setTechniques(newSelectedPosition?.techniques ?? []);
    setSubmissions(newSelectedPosition?.submissions ?? []);
  };

  const queryChangeHandler = (e) => {
    const newQuery = e.target.value;
    querySetter(newQuery);
  };

  return (
    <>
      <NavBar selected="/edit" />

      <div className="flex justify-center">
        <div className="flex flex-col mt-10 gap-5 w-1/3 pb-10">
          <SearchableDropdown
            className="w-full"
            placeholder="Enter Position"
            options={options}
            value={query}
            setValue={querySetter}
            onChange={queryChangeHandler}
          />

          <h2 className="text-xl">Details</h2>

          <table className="border border-gray-800 border-collapse">
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
          </table>

          <h2 className="text-xl">Your Grips</h2>

          <EditableTable rowValues={myGrips} setRowValues={setMyGrips} />

          <h2 className="text-xl">Their Grips</h2>

          <EditableTable rowValues={theirGrips} setRowValues={setTheirGrips} />

          <h2 className="text-xl">Techniques</h2>

          <EditableTable rowValues={techniques} setRowValues={setTechniques} />

          <h2 className="text-xl">Submissions</h2>

          <EditableTable
            rowValues={submissions}
            setRowValues={setSubmissions}
          />
        </div>
      </div>
    </>
  );
};

export default EditPositions;
