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

  return {
    all: playlists,
    pushNew,
  };
};

export default usePlaylistsApi;
