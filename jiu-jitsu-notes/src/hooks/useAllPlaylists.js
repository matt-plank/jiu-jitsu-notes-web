import { useEffect, useState } from "react";
import { playlist } from "../api/api";

const useAllPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const playlists = await playlist.all();
      setPlaylists(playlists);
    };

    fetchPlaylists();
  }, []);

  return playlists;
};

export default useAllPlaylists;
