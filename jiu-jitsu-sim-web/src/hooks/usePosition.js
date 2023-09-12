import { useState } from "react";

const usePosition = () => {
  const DEFAULT_POSITION = {
    id: null,
    name: "",
    aspect: "",
    your_grips: [],
    their_grips: [],
    techniques: [],
    submissions: [],
    display_name: "",
  };

  const [position, setPositionState] = useState(DEFAULT_POSITION);

  const setPosition = (newPosition) => {
    if (!newPosition) {
      setPositionState(DEFAULT_POSITION);
      return;
    }

    setPositionState(newPosition);
  };

  const setPositionProperty = (property) => {
    return (value) => {
      setPosition((currentPosition) => {
        const newPosition = { ...currentPosition };
        newPosition[property] = value;
        return newPosition;
      });
    };
  };

  return [position, setPosition, setPositionProperty];
};

export default usePosition;
