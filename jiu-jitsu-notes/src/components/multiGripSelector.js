import GripSelector from "../components/gripSelector";

const MultiGripSelector = ({ grips, setGrips, allGrips }) => {
  return (
    <>
      {grips.map((grip, i) => (
        <GripSelector
          grip={grip}
          setGrip={(newGrip) => {
            setGrips((currentGrips) => {
              const newGrips = [...currentGrips];
              newGrips[i] = newGrip;
              return newGrips;
            });
          }}
          allGrips={allGrips}
        />
      ))}
    </>
  );
};

export default MultiGripSelector;
