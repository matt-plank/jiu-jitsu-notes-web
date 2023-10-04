import { useEffect, useState } from "react";
import { positions as positionsApi } from "../api/api";

const usePositionsApi = () => {
  const [positions, setPositions] = useState([]);

  const refreshPositions = async () => {
    const positions = await positionsApi.all();
    setPositions(positions);
  };

  useEffect(() => {
    refreshPositions();
  }, []);

  return {
    all: positions,
  };
};

export default usePositionsApi;
