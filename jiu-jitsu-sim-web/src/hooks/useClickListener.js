import { useEffect } from "react";

const useClickListener = (func) => {
  useEffect(() => {
    document.addEventListener("click", func);
    return () => document.removeEventListener("click", func);
  }, []);
};

export default useClickListener;
