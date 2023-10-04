import { useEffect, useState } from "react";
import { playlist as playlistApi } from "../api/api";

const usePlaylistsApi = () => {
  const [playlists, setPlaylists] = useState([]);
  const [deleted, setDeleted] = useState([]);

  const refreshFromApi = async () => {
    const newPlaylists = await playlistApi.all();
    setPlaylists(newPlaylists);
  };

  useEffect(() => {
    refreshFromApi();
  }, []);

  const pushNew = (name) => {
    setPlaylists((currentPlaylists) => {
      return [
        ...currentPlaylists,
        { name: name, description: "", changed: true },
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

  return {
    all: playlists,
    pushNew,
    setAttributeById,
    setNameById,
    setDescriptionById,
  };
};

export default usePlaylistsApi;
