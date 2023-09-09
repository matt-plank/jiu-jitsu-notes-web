import { useState } from "react";
import useClickListener from "./useClickListener";

const useClickToggle = (targetRef) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e) => {
    setIsOpen(e && e.target === targetRef.current);
  };

  useClickListener(toggle);

  return isOpen;
};

export default useClickToggle;
