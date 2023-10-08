import { useEffect, useState } from "react";
import positionsApi from "../../api/positions";

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
