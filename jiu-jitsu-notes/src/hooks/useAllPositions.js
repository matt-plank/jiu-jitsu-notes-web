import { useEffect, useState } from "react";
import positionsApi from "../api/positions";

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
