import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import ActionButton from "../components/actionButton";
import Footer from "../components/footer";
import NavBar from "../components/nav/navbar";
import SelectablePlaylistCard from "../components/selectablePlaylistCard";
import SelectablePositionCard from "../components/selectablePositionCard";

const Playlists = ({ account, playlists, positions }) => {
  const [playlistQuery, setPlaylistQuery] = useState("");
  const [positionQuery, setPositionQuery] = useState("");
  const [selectedPlaylist, setSelectedPlaylist] = useState();

  useHotkeys("escape", () => {
    setSelectedPlaylist();
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar username={account.username} />

      <div className="flex flex-wrap gap-5 p-5 justify-center">
        <div className="w-full max-w-4xl flex flex-col gap-5">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Filter playlists"
              className="bg-white flex-1 rounded-md shadow-sm p-3 !outline-none"
              value={playlistQuery}
              onChange={(e) => setPlaylistQuery(e.target.value)}
            />

            <ActionButton
              onClick={() => {
                playlists.pushNew(playlistQuery);
              }}
            >
              New
            </ActionButton>

            <ActionButton
              onClick={async () => {
                playlists.saveChanges();
                setSelectedPlaylist();
              }}
              hotkeys="ctrl+s"
            >
              Save
            </ActionButton>
          </div>

          <hr className="border border-gray-200" />

          <div className="flex flex-col gap-2">
            {playlists.all
              .filter((playlist) =>
                playlist.name
                  .toLowerCase()
                  .includes(playlistQuery.toLowerCase())
              )
              .map((playlist) => (
                <SelectablePlaylistCard
                  name={playlist.name}
                  setName={(name) => {
                    playlists.setNameById(playlist.id, name);
                  }}
                  description={playlist.description}
                  setDescription={(description) => {
                    playlists.setDescriptionById(playlist.id, description);
                  }}
                  isSelected={playlist === selectedPlaylist}
                  onSelect={() => {
                    setSelectedPlaylist(playlist);
                  }}
                  onDelete={() => {
                    playlists.deleteById(playlist.id);
                    setSelectedPlaylist();
                  }}
                />
              ))}
          </div>
        </div>

        <div className="w-full max-w-xl flex flex-col gap-5">
          <input
            type="text"
            placeholder="Filter positions"
            className="bg-white rounded-md shadow-sm p-3 !outline-none"
            value={positionQuery}
            onChange={(e) => setPositionQuery(e.target.value)}
          />

          <hr className="border border-gray-200" />

          <div className="flex flex-col gap-2">
            {positions.all
              .filter((position) =>
                position.display_name
                  .toLowerCase()
                  .includes(positionQuery.toLowerCase())
              )
              .map((position) => (
                <SelectablePositionCard
                  position={position}
                  isSelected={
                    selectedPlaylist &&
                    selectedPlaylist.positions
                      .map((p) => p.id)
                      .includes(position.id)
                  }
                  onSelect={() => {
                    if (!selectedPlaylist) return;

                    playlists.setPositionsById(selectedPlaylist.id, [
                      ...selectedPlaylist.positions,
                      position,
                    ]);
                  }}
                  onDeselect={() => {
                    if (!selectedPlaylist) return;

                    playlists.setPositionsById(
                      selectedPlaylist.id,
                      selectedPlaylist.positions.filter(
                        (p) => p.id !== position.id
                      )
                    );
                  }}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="flex-1" />
      <Footer />
    </div>
  );
};

export default Playlists;
