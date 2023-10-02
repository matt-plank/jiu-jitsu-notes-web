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

  return {
    all: playlists,
  };
};

export default usePlaylistsApi;
