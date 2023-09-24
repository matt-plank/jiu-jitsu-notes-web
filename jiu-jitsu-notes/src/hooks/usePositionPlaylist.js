import { useState } from "react";

const usePositionPlaylist = (positions, setSelectedPosition) => {
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  const hasPositions = positions.length > 0;

  const nextPosition = () => {
    if (currentPositionIndex + 1 >= positions.length) {
      setCurrentPositionIndex(0);
      setSelectedPosition(positions[0]);
      return;
    }

    setCurrentPositionIndex(currentPositionIndex + 1);
    setSelectedPosition(positions[currentPositionIndex + 1]);
  };

  return {
    nextPosition,
    hasPositions,
  };
};

export default usePositionPlaylist;
