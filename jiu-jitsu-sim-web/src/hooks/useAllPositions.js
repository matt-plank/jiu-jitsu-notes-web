import { useEffect, useState } from "react";
import { allPositions } from "../api/api";

const useAllPositions = () => {
  const [positions, setPositions] = useState([]);

  const fetchAllPositions = async () => {
    let positions = await allPositions();
    setPositions(positions);
  };

  useEffect(() => {
    fetchAllPositions();
  }, []);

  return [positions, fetchAllPositions];
};

export default useAllPositions;
