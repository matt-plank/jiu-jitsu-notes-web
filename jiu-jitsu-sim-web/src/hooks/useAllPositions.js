import { useEffect, useState } from "react";
import { allPositions } from "../api/api";

const useAllPositions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchAllPositions = async () => {
      let positions = await allPositions();
      setPositions(positions);
    };

    fetchAllPositions();
  }, []);

  return positions;
};

export default useAllPositions;
