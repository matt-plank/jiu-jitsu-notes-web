import { useEffect, useState } from "react";
import { grips as gripsApi } from "../api/api";

const useAllGrips = () => {
  const [grips, setGrips] = useState([]);

  useEffect(() => {
    const fetchAllGrips = async () => {
      let positions = await gripsApi.all();
      setGrips(positions);
    };

    fetchAllGrips();
  }, []);

  return grips;
};

export default useAllGrips;
