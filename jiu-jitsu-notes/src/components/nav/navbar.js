import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import tokenStorage from "../../api/tokenStorage";
import Logo from "../logo/logo";
import NavPanel from "./navPanel";

const NavBar = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  const checkScreenSize = () => {
    setSmallScreen(window.innerWidth < 1024);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggle = () => {
    setIsOpen((current) => !current);
  };

  return (
    <>
      <div className="relative">
        <div className="bg-white w-full p-5 text-gray-800 flex gap-5 items-center justify-between select-none z-20 relative">
          <div className="flex gap-8">
            <AiOutlineMenu
              className="text-2xl cursor-pointer active:scale-75 duration-75"
              onClick={toggle}
            />

            <Link to="/">
              <Logo />
            </Link>
          </div>

          <div className="flex gap-5">
            {username}

            {!smallScreen && tokenStorage.exists() && (
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
            )}

            {!smallScreen && !tokenStorage.exists() && (
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
        </div>

        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames="slide"
          unmountOnExit
        >
          <NavPanel />
        </CSSTransition>
      </div>
    </>
  );
};

export default NavBar;
