import { useEffect, useState } from "react";
import { grips as gripsApi } from "../api/api";

const useGripsApi = () => {
  const [grips, setGrips] = useState([]);
  const [deletedGrips, setDeletedGrips] = useState([]);

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
    for (const grip of grips) {
      if (!grip.changed) return;

      if (grip.id) {
        await gripsApi.update(grip.id, grip);
        return;
      }

      await gripsApi.create(grip);
    }

    for (const grip of deletedGrips) {
      await gripsApi.remove(grip.id);
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
  };
};

export default useGripsApi;
