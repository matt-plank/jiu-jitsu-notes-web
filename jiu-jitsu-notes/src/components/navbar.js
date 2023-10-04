import { BsFillPeopleFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { LuLogOut } from "react-icons/lu";
import { MdPlaylistPlay, MdSchool } from "react-icons/md";
import { Link } from "react-router-dom";
import tokenStorage from "../api/tokenStorage";
import Logo from "./logo/logo";

const SELECTED_COLOUR = "text-yellow-500";
const DEFAULT_COLOUR = "text-white";

const NavBar = ({ selected, username }) => {
  const LOGGED_IN_LINKS = [
    {
      path: "/guide",
      name: "Guide",
      icon: ImBooks,
    },
    {
      path: "/grips",
      name: "Grips",
      icon: FaHandshake,
    },
    {
      path: "/edit",
      name: "Positions",
      icon: BsFillPeopleFill,
    },
    {
      path: "/playlists",
      name: "Playlists",
      icon: MdPlaylistPlay,
    },
    {
      path: "/positions",
      name: "Learn",
      icon: MdSchool,
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
            <Link to={link.path} className="flex items-center gap-1">
              {link.icon ? <link.icon className="pt-1" /> : ""} {link.name}
            </Link>
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

      {tokenStorage.exists() && <LinkList links={LOGGED_IN_LINKS} />}

      <div className="flex-1" />

      {tokenStorage.exists() && (
        <>
          <p>{username}</p>
          <p
            className="cursor-pointer flex items-center gap-1"
            onClick={() => {
              tokenStorage.delete();
              window.location.href = "/login";
            }}
          >
            <LuLogOut className="pt-1" />
            Log Out
          </p>
        </>
      )}

      {!tokenStorage.exists() && <LinkList links={LOGGED_OUT_LINKS} />}
    </div>
  );
};

export default NavBar;
