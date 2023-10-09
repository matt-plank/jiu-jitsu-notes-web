import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import NavPanel from "./navPanel";

const NavBar = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((current) => !current);
  };

  return (
    <>
      <div className="relative">
        <div className="w-full bg-gray-800 p-5 text-white flex gap-5 items-center justify-between select-none z-20 relative">
          <AiOutlineMenu
            className="text-2xl cursor-pointer active:scale-75 duration-75"
            onClick={toggle}
          />

          {username}
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
