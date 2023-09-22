import { useEffect, useState } from "react";
import { positions as positionsApi } from "../api/api";

const useAllPositions = () => {
  const [positionList, setPositionList] = useState([]);

  const refreshPositions = async () => {
    let positions = await positionsApi.all();
    setPositionList(positions);
  };

  useEffect(() => {
    refreshPositions();
  }, []);

  const findById = (id) => {
    return positionList.filter((position) => position.id === id)[0];
  };

  return {
    positionList,
    refreshPositions,
    findById,
  };
};

export default useAllPositions;
