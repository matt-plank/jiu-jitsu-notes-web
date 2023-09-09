import { Link } from "react-router-dom";

const NavBar = ({ selected }) => {
  return (
    <div className="bg-gray-800 px-5 py-5 text-white flex flex-row justify-center gap-10">
      <p className={selected === 0 ? "text-yellow-500" : "text-white"}>
        <Link to="/positions">Learn Positions</Link>
      </p>
      <p className={selected === 1 ? "text-yellow-500" : "text-white"}>
        <Link to="/techniques">Learn Techniques</Link>
      </p>
    </div>
  );
};

export default NavBar;
