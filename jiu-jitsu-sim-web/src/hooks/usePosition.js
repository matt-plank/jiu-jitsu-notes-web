import { useEffect } from "react";
import { createPosition, deletePosition, updatePosition } from "../api/api";
import useStateAsDict from "./useStateAsDict";

const usePosition = (position) => {
  const positionState = {
    id: useStateAsDict(null),
    aspect: useStateAsDict(""),
    name: useStateAsDict(""),
    your_grips: useStateAsDict([]),
    their_grips: useStateAsDict([]),
  };

  useEffect(() => {
    positionState.id.setValue(position?.id ?? null);
    positionState.aspect.setValue(position?.aspect ?? "");
    positionState.name.setValue(position?.name ?? "");
    positionState.your_grips.setValue(position?.your_grips ?? []);
    positionState.their_grips.setValue(position?.their_grips ?? []);
  }, [position]);

  const create = async () => {
    let newPositionData = await createPosition({
      aspect: positionState.aspect.value,
      name: positionState.name.value,
      your_grips: positionState.your_grips.value.filter(
        (value) => value !== ""
      ),
      their_grips: positionState.their_grips.value.filter(
        (value) => value !== ""
      ),
    });

    positionState.id.setValue(newPositionData.id);
  };

  const update = async () => {
    await updatePosition(positionState.id.value, {
      id: positionState.id.value,
      aspect: positionState.aspect.value,
      name: positionState.name.value,
      your_grips: positionState.your_grips.value.filter(
        (value) => value !== ""
      ),
      their_grips: positionState.their_grips.value.filter(
        (value) => value !== ""
      ),
    });
  };

  const save = async () => {
    if (!positionState.id.value) {
      await create();
      return;
    }

    await update();
  };

  const remove = async () => {
    if (!positionState.id.value) return;

    await deletePosition(positionState.id.value);
  };

  return {
    position: positionState,
    save,
    remove,
  };
};

export default usePosition;
