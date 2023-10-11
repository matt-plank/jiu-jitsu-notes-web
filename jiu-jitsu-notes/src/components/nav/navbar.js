import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
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

          <div className="flex gap-5">{username}</div>
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
