import { useState } from "react";
import ActionButton from "../components/actionButton";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import SearchableDropdown from "../components/searchableDropdown";
import SubmissionGuessList from "../components/submissionGuessList";
import TechniqueGuessList from "../components/techniqueGuessList";
import useAllPlaylists from "../hooks/useAllPlaylists";
import useAllPositions from "../hooks/useAllPositions";
import useGuesses from "../hooks/useGuesses";
import usePositionPlaylist from "../hooks/usePositionPlaylist";

const LearnPositions = ({ account }) => {
  const [selectedPosition, setSelectedPosition] = useState();
  const positions = useAllPositions();
  const playlists = useAllPlaylists();

  const [guessString, setGuessString] = useState("");
  const [guessedTechniques, clearGuessedTechniques] = useGuesses(
    guessString,
    setGuessString,
    selectedPosition?.techniques
  );
  const [guessedSubmissions, clearGuessedSubmissions] = useGuesses(
    guessString,
    setGuessString,
    selectedPosition?.submissions
  );

  const playlist = usePositionPlaylist(setSelectedPosition);

  const selectRandomPosition = () => {
    const randomIndex = Math.floor(
      Math.random() * (positions.positionList.length - 1)
    );
    setSelectedPosition(positions.positionList[randomIndex]);
  };

  const clearAllGuesses = () => {
    clearGuessedTechniques();
    clearGuessedSubmissions();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar selected="/positions" username={account.username} />

      <div className="flex justify-center gap-10 p-10">
        <div className="flex flex-col gap-5 w-1/2">
          <SearchableDropdown
            selectedItem={selectedPosition}
            setSelectedItem={setSelectedPosition}
            itemOptions={positions.positionList}
            getItemDisplayName={(option) => option.display_name}
            placeholder="Search for Position"
            className="w-full bg-white"
          />
          <div className="flex flex-row gap-2">
            <ActionButton onClick={clearAllGuesses} hotkeys="[">
              Clear Guesses
            </ActionButton>
            <ActionButton onClick={selectRandomPosition} hotkeys="]">
              Select Random
            </ActionButton>
            <ActionButton onClick={playlist.moveToNextPosition} hotkeys="enter">
              Next on Playlist
            </ActionButton>
            <ActionButton
              onClick={() => {
                playlist.clear();
                setSelectedPosition(null);
              }}
              hotkeys="escape"
            >
              Clear Playlist
            </ActionButton>
          </div>

          <hr className="border border-gray-200" />

          <input
            type="text"
            placeholder="Enter Technique / Submission Guess"
            className="bg-white p-3 rounded-md shadow-sm my-3 !outline-none"
            value={guessString}
            onChange={(e) => {
              setGuessString(e.target.value);
            }}
          />

          <TechniqueGuessList
            allTechniques={selectedPosition?.techniques ?? []}
            guessedTechniques={guessedTechniques}
            setSelectedPosition={setSelectedPosition}
            findPositionById={positions.findById}
          />
          <SubmissionGuessList
            allSubmissions={selectedPosition?.submissions ?? []}
            guessedSubmissions={guessedSubmissions}
          />
        </div>

        <div className="flex flex-col gap-5 w-1/3">
          <div className="flex flex-col gap-5">
            {playlists.map((playlistItem) => (
              <div
                className="bg-white hover:bg-gray-50 py-3 px-5 cursor-pointer rounded-md shadow-sm"
                onClick={() => {
                  playlist.setPositions(
                    positions.positionList.filter((position) => {
                      const playlistIds = position.playlists.map(
                        (playlist) => playlist.id
                      );
                      return playlistIds.includes(playlistItem.id);
                    })
                  );
                }}
              >
                {playlistItem.name}
                <span className="text-gray-600 italic">
                  {" "}
                  - {playlistItem.description}
                </span>
                <p className="text-gray-400">
                  {playlistItem.positions
                    .map((position) => position.display_name)
                    .join(" \u2022 ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1" />

      <Footer />
    </div>
  );
};

export default LearnPositions;
