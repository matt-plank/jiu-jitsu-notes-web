import { useState } from "react";
import ActionButton from "../components/actionButton";
import NavBar from "../components/navbar";
import SearchableDropdown from "../components/searchableDropdown";
import SubmissionGuessList from "../components/submissionGuessList";
import TechniqueGuessList from "../components/techniqueGuessList";
import TextInput from "../components/textInput";
import useAllPlaylists from "../hooks/useAllPlaylists";
import useAllPositions from "../hooks/useAllPositions";
import useGuesses from "../hooks/useGuesses";
import usePositionPlaylist from "../hooks/usePositionPlaylist";

const LearnPositions = () => {
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
    <>
      <NavBar selected="/positions" />

      <div className="flex justify-center gap-10">
        <div className="flex flex-col mt-10 gap-5 w-[40%]">
          <div className="bg-gray-100 rounded-lg p-5 flex flex-col gap-5">
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
              <ActionButton
                onClick={playlist.moveToNextPosition}
                hotkeys="enter"
              >
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
          </div>

          <div className="flex flex-col gap-5 bg-gray-100 rounded-lg p-5">
            <TextInput
              placeholder="Enter Technique / Submission Guess"
              value={guessString}
              onChange={(e) => {
                setGuessString(e.target.value);
              }}
              className="bg-white"
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
        </div>

        <div className="flex flex-col mt-10 gap-5 w-[40%]">
          <div className="flex flex-col gap-5">
            <h1 className="text-xl">Position Playlists</h1>

            {playlists.map((playlistItem) => (
              <div
                className="bg-gray-100 hover:bg-gray-200 py-3 px-5 cursor-pointer rounded-md"
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
    </>
  );
};

export default LearnPositions;
