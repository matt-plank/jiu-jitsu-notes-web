import { useEffect, useState } from "react";
import playlistApi from "../../api/playlists";

const usePlaylistsApi = () => {
  const [playlists, setPlaylists] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const [saved, setSaved] = useState(false);

  const refreshFromApi = async () => {
    const newPlaylists = await playlistApi.all();
    setPlaylists(newPlaylists);
  };

  useEffect(() => {
    refreshFromApi();
  }, []);

  const deleteById = (id) => {
    setPlaylists((currentPlaylists) => {
      const playlist = currentPlaylists.find((p) => p.id === id);
      const newPlaylists = currentPlaylists.filter((p) => p !== playlist);
      setDeleted((currentDeleted) => [...currentDeleted, playlist]);
      return newPlaylists;
    });
  };

  const pushNew = (name) => {
    setPlaylists((currentPlaylists) => {
      return [
        ...currentPlaylists,
        { name: name, description: "", positions: [], changed: true },
      ];
    });
  };

  const setAttributeById = (id, attribute, value) => {
    setPlaylists((currentPlaylists) => {
      const playlist = currentPlaylists.find((p) => p.id === id);
      playlist[attribute] = value;
      playlist.changed = true;
      return [...currentPlaylists];
    });
  };

  const setNameById = (id, name) => {
    setAttributeById(id, "name", name);
  };

  const setDescriptionById = (id, description) => {
    setAttributeById(id, "description", description);
  };

  const setPositionsById = (id, positions) => {
    setAttributeById(id, "positions", positions);
  };

  const saveChanges = async () => {
    setSaved(false);
    const changedPlaylists = playlists.filter((p) => p.changed);

    for (const playlist of changedPlaylists) {
      if (playlist.id) {
        await playlistApi.update(playlist.id, playlist);
      } else {
        await playlistApi.create(playlist);
      }

      setSaved(true);
    }

    for (const playlist of deleted) {
      await playlistApi.delete(playlist.id);
      setSaved(true);
    }

    setDeleted([]);
    refreshFromApi();
  };

  return {
    all: playlists,
    pushNew,
    setAttributeById,
    setNameById,
    setDescriptionById,
    setPositionsById,
    deleteById,
    saveChanges,
    saved,
  };
};

export default usePlaylistsApi;
