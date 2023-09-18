import { useState } from "react";

const useStateAsDict = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  return {
    value: value,
    setValue: setValue,
  };
};

export default useStateAsDict;
