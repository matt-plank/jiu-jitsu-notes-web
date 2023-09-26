import { Link } from "react-router-dom";
import { token as tokenApi } from "../api/api";
import Logo from "./logo/logo";

const SELECTED_COLOUR = "text-yellow-500";
const DEFAULT_COLOUR = "text-white";

const NavBar = ({ selected, username }) => {
  const LOGGED_IN_LINKS = [
    {
      path: "/guide",
      name: "Guide",
    },
    {
      path: "/grips",
      name: "Grips",
    },
    {
      path: "/edit",
      name: "Positions",
    },
    {
      path: "/playlists",
      name: "Playlists",
    },
    {
      path: "/positions",
      name: "Learn",
    },
  ];

  const LOGGED_OUT_LINKS = [
    {
      path: "/login",
      name: "Log In",
    },
    {
      path: "/register",
      name: "Register",
    },
  ];

  const LinkList = ({ links }) => {
    return (
      <>
        {links.map((link) => (
          <p
            className={
              selected === link.path ? SELECTED_COLOUR : DEFAULT_COLOUR
            }
          >
            <Link to={link.path}>{link.name}</Link>
          </p>
        ))}
      </>
    );
  };

  return (
    <div className="bg-gray-800 px-5 py-5 text-white flex flex-row justify-center gap-10">
      <Link to="/">
        <Logo dark className="cursor-pointer" />
      </Link>

      {tokenApi.exists() && <LinkList links={LOGGED_IN_LINKS} />}

      <div className="flex-1" />

      {tokenApi.exists() && (
        <>
          <p>{username}</p>
          <p
            className="cursor-pointer"
            onClick={() => {
              tokenApi.delete();
              window.location.href = "/login";
            }}
          >
            Log Out
          </p>
        </>
      )}

      {!tokenApi.exists() && <LinkList links={LOGGED_OUT_LINKS} />}
    </div>
  );
};

export default NavBar;
