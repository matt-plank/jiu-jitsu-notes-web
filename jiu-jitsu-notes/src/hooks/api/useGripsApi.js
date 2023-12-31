import { useEffect, useState } from "react";
import gripsApi from "../../api/grips";

const useGripsApi = () => {
  const [grips, setGrips] = useState([]);
  const [deletedGrips, setDeletedGrips] = useState([]);
  const [saved, setSaved] = useState(false);

  const refreshWithApi = async () => {
    const newGrips = await gripsApi.all();
    setGrips(newGrips);
  };

  useEffect(() => {
    refreshWithApi();
  }, []);

  const setNameByIndex = (index, newName) => {
    setGrips((currentGrips) => {
      const newGrips = [...currentGrips];
      newGrips[index].name = newName;
      newGrips[index].changed = true;
      return newGrips;
    });
  };

  const pushNew = (gripName) => {
    setGrips((currentGrips) => {
      return [...currentGrips, { name: gripName, changed: true }];
    });
  };

  const deleteById = (id) => {
    setGrips((currentGrips) => {
      const newGrips = [...currentGrips];
      const gripIndex = newGrips.findIndex((grip) => grip.id === id);
      newGrips.splice(gripIndex, 1);
      return newGrips;
    });

    setDeletedGrips((currentDeletedGrips) => {
      return [...currentDeletedGrips, { id: id }];
    });
  };

  const save = async () => {
    setSaved(false);

    for (const grip of grips) {
      if (!grip.changed) continue;

      if (grip.id) {
        await gripsApi.update(grip.id, grip);
        setSaved(true);
        continue;
      }

      await gripsApi.create(grip);

      setSaved(true);
    }

    for (const grip of deletedGrips) {
      await gripsApi.remove(grip.id);
      setSaved(true);
    }

    setDeletedGrips([]);
    await refreshWithApi();
  };

  return {
    grips,
    refreshWithApi,
    setNameByIndex,
    pushNew,
    save,
    deleteById,
    saved,
  };
};

export default useGripsApi;
