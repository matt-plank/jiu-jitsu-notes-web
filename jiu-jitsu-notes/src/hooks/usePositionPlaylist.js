import { useState } from "react";

const usePositionPlaylist = (setSelectedPosition) => {
  const [positionsList, setPositionsList] = useState([]);
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  const hasPositions = positionsList.length > 0;

  const currentPosition = () => {
    return positionsList[currentPositionIndex];
  };

  const moveToNextPosition = () => {
    if (currentPositionIndex + 1 >= positionsList.length) {
      setCurrentPositionIndex(0);
      setSelectedPosition(positionsList[0]);
      return;
    }

    setCurrentPositionIndex(currentPositionIndex + 1);
    setSelectedPosition(positionsList[currentPositionIndex + 1]);
  };

  const clear = () => {
    setPositionsList([]);
    setCurrentPositionIndex(0);
  };

  const setPositions = (positions) => {
    setPositionsList(positions);
    setSelectedPosition(positions[0]);
  };

  return {
    setPositions,
    currentPosition,
    moveToNextPosition,
    hasPositions,
    clear,
  };
};

export default usePositionPlaylist;
