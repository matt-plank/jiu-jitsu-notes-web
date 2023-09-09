import NavBar from "../components/navbar";
import SearchableDropdown from "../components/searchableDropdown";
import useAllPositions from "../hooks/useAllPositions";

const LearnPositions = () => {
  const allPositions = useAllPositions();
  const options = allPositions.map((position) => position.display_name);

  return (
    <>
      <NavBar selected={0} />
      <SearchableDropdown placeholder="Enter Position" options={options} />
    </>
  );
};

export default LearnPositions;
