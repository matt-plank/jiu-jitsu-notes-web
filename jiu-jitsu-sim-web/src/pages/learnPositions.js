import NavBar from "../components/navbar";
import SearchableDropdown from "../components/searchableDropdown";

const LearnPositions = () => {
  const options = ["Playing Closed Guard", "Top Mount", "Top Rear Mount"];
  return (
    <>
      <NavBar selected={0} />
      <SearchableDropdown placeholder="Enter Position" options={options} />
    </>
  );
};

export default LearnPositions;
