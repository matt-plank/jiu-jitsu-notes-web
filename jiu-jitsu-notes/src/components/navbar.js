import { Link } from "react-router-dom";

const SELECTED_COLOUR = "text-yellow-500";
const DEFAULT_COLOUR = "text-white";

const NavBar = ({ selected }) => {
  return (
    <div className="bg-gray-800 px-5 py-5 text-white flex flex-row justify-center gap-10">
      <p className={selected === "/" ? SELECTED_COLOUR : DEFAULT_COLOUR}>
        <Link to="/">Home</Link>
      </p>
      <p className={selected === "/edit" ? SELECTED_COLOUR : DEFAULT_COLOUR}>
        <Link to="/edit">Edit Positions</Link>
      </p>
      <p
        className={selected === "/positions" ? "text-yellow-500" : "text-white"}
      >
        <Link to="/positions">Learn Positions</Link>
      </p>
    </div>
  );
};

export default NavBar;
