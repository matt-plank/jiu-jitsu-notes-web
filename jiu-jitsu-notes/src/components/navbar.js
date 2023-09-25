import { Link } from "react-router-dom";
import { token as tokenApi } from "../api/api";
import Logo from "./logo/logo";

const SELECTED_COLOUR = "text-yellow-500";
const DEFAULT_COLOUR = "text-white";

const NavBar = ({ selected }) => {
  return (
    <div className="bg-gray-800 px-5 py-5 text-white flex flex-row justify-center gap-10">
      <Link to="/">
        <Logo dark className="cursor-pointer" />
      </Link>
      {tokenApi.exists() && (
        <>
          <p
            className={selected === "/edit" ? SELECTED_COLOUR : DEFAULT_COLOUR}
          >
            <Link to="/edit">Positions</Link>
          </p>
          <p
            className={
              selected === "/playlists" ? SELECTED_COLOUR : DEFAULT_COLOUR
            }
          >
            <Link to="/playlists">Playlists</Link>
          </p>
          <p
            className={
              selected === "/positions" ? "text-yellow-500" : "text-white"
            }
          >
            <Link to="/positions">Learn</Link>
          </p>
        </>
      )}

      <div className="flex-1" />

      {!tokenApi.exists() ? (
        <p className={selected === "/login" ? SELECTED_COLOUR : DEFAULT_COLOUR}>
          <Link to="/login">Log In</Link>
        </p>
      ) : (
        <p
          className="cursor-pointer"
          onClick={() => {
            tokenApi.delete();
            window.location.href = "/login";
          }}
        >
          Log Out
        </p>
      )}
    </div>
  );
};

export default NavBar;
