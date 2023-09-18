import { useEffect } from "react";
import { updatePosition } from "../api/api";
import useStateAsDict from "./useStateAsDict";

const usePosition = (position) => {
  const positionState = {
    id: useStateAsDict(null),
    aspect: useStateAsDict(""),
    name: useStateAsDict(""),
    your_grips: useStateAsDict([]),
    their_grips: useStateAsDict([]),
    techniques: useStateAsDict([]),
    submissions: useStateAsDict([]),
  };

  useEffect(() => {
    positionState.id.setValue(position?.id ?? null);
  }, [position?.id]);

  useEffect(() => {
    positionState.aspect.setValue(position?.aspect ?? "");
  }, [position?.aspect]);

  useEffect(() => {
    positionState.name.setValue(position?.name ?? "");
  }, [position?.name]);

  useEffect(() => {
    positionState.your_grips.setValue(position?.your_grips ?? []);
  }, [position?.your_grips]);

  useEffect(() => {
    positionState.their_grips.setValue(position?.their_grips ?? []);
  }, [position?.their_grips]);

  useEffect(() => {
    positionState.techniques.setValue(position?.techniques ?? []);
  }, [position?.techniques]);

  useEffect(() => {
    positionState.submissions.setValue(position?.submissions ?? []);
  }, [position?.submissions]);

  const asObject = () => {
    return {
      id: positionState.id.value,
      aspect: positionState.aspect.value,
      name: positionState.name.value,
      your_grips: positionState.your_grips.value.filter(
        (value) => value !== ""
      ),
      their_grips: positionState.their_grips.value.filter(
        (value) => value !== ""
      ),
      techniques: positionState.techniques.value,
      submissions: positionState.submissions.value,
    };
  };

  const update = async () => {
    await updatePosition(positionState.id.value, asObject());
  };

  return [positionState, update];
};

export default usePosition;
