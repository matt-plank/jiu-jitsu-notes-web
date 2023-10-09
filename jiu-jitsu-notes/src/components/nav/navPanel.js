import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { LuLogOut } from "react-icons/lu";
import { MdPlaylistPlay, MdSchool } from "react-icons/md";
import { Link } from "react-router-dom";
import tokenStorage from "../../api/tokenStorage";

const NavPanel = () => {
  return (
    <div className="w-full max-w-lg bg-gray-700 p-5 text-white flex flex-col gap-3 absolute z-10">
      {tokenStorage.exists() && (
        <>
          <Link to="/" className="flex items-center gap-3">
            <AiFillHome className="mt-1" />
            Home
          </Link>
          <Link to="/guide" className="flex items-center gap-3">
            <ImBooks className="mt-1" />
            Guide
          </Link>

          <hr className="my-2 border border-gray-400 w-full" />

          <Link to="/grips" className="flex items-center gap-3">
            <FaHandshake className="mt-1" />
            Grips
          </Link>
          <Link to="/positions" className="flex items-center gap-3">
            <BsFillPeopleFill className="mt-1" />
            Positions
          </Link>
          <Link to="/playlists" className="flex items-center gap-3">
            <MdPlaylistPlay className="mt-1" />
            Playlists
          </Link>
          <Link to="/learn" className="flex items-center gap-3">
            <MdSchool className="mt-1" />
            Learn
          </Link>

          <hr className="my-2 border border-gray-400 w-full" />

          <p
            className="cursor-pointer flex items-center gap-1"
            onClick={() => {
              tokenStorage.delete();
              window.location.href = "/#/login";
            }}
          >
            <LuLogOut className="pt-1" />
            Log Out
          </p>
        </>
      )}

      {!tokenStorage.exists() && (
        <>
          <Link to="/login" className="flex items-center gap-3">
            <LuLogOut className="mt-1" />
            Log In
          </Link>
          <Link to="/register" className="flex items-center gap-3">
            <LuLogOut className="mt-1" />
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default NavPanel;
