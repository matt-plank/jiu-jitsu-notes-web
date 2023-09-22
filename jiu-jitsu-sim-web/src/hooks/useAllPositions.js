import { useEffect, useState } from "react";
import { allPositions } from "../api/api";

const useAllPositions = () => {
  const [positionList, setPositionList] = useState([]);

  const refreshPositions = async () => {
    let positions = await allPositions();
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
