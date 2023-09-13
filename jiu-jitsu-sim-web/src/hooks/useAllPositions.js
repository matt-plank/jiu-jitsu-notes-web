import { useEffect, useState } from "react";
import { allPositions } from "../api/api";

const useAllPositions = () => {
  const [positions, setPositions] = useState([]);

  const fetchAllPositions = async () => {
    let positions = await allPositions();
    setPositions(positions);
  };

  const updatePosition = (index, data) => {
    setPositions((currentPositions) => {
      const newPositions = [...currentPositions];
      newPositions[index] = { ...newPositions[index], ...data };

      return newPositions;
    });
  };

  useEffect(() => {
    fetchAllPositions();
  }, []);

  return [positions, updatePosition, fetchAllPositions];
};

export default useAllPositions;
