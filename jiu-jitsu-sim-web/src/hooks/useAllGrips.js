import { useEffect, useState } from "react";
import { allGrips } from "../api/api";

const useAllGrips = () => {
  const [grips, setGrips] = useState([]);

  useEffect(() => {
    const fetchAllGrips = async () => {
      let positions = await allGrips();
      setGrips(positions);
    };

    fetchAllGrips();
  }, []);

  return grips;
};

export default useAllGrips;
