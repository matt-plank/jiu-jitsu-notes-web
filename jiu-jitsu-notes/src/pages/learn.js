import { useState } from "react";
import { AiOutlinePlaySquare } from "react-icons/ai";
import ActionButton from "../components/actionButton";
import Footer from "../components/footer";
import NavBar from "../components/nav/navbar";
import SearchableDropdown from "../components/searchableDropdown";
import SubmissionGuessList from "../components/submissionGuessList";
import TechniqueGuessList from "../components/techniqueGuessList";
import useAllPositions from "../hooks/useAllPositions";
import useGuesses from "../hooks/useGuesses";
import usePositionPlaylist from "../hooks/usePositionPlaylist";

const Learn = ({ account, playlists }) => {
  const [selectedPosition, setSelectedPosition] = useState();
  const positions = useAllPositions();

  const [guessString, setGuessString] = useState("");
  const [guessedTechniques, clearGuessedTechniques, revealTechniques] =
    useGuesses(guessString, setGuessString, selectedPosition?.techniques);
  const [guessedSubmissions, clearGuessedSubmissions, revealSubmissions] =
    useGuesses(guessString, setGuessString, selectedPosition?.submissions);

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

  const revealAll = () => {
    revealTechniques();
    revealSubmissions();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar username={account.username} />

      <div className="flex justify-center gap-5 p-5 flex-wrap">
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <SearchableDropdown
            selectedItem={selectedPosition}
            setSelectedItem={setSelectedPosition}
            itemOptions={positions.positionList}
            getItemDisplayName={(option) => option.display_name}
            placeholder="Search for Position"
            className="w-full bg-white"
          />

          <div className="flex flex-row gap-2 overflow-x-auto">
            <ActionButton
              onClick={clearAllGuesses}
              hotkeys="["
              className="min-w-max"
            >
              Clear Guesses
            </ActionButton>
            <ActionButton
              onClick={selectRandomPosition}
              hotkeys="]"
              className="min-w-max"
            >
              Select Random
            </ActionButton>
            <ActionButton
              onClick={playlist.moveToNextPosition}
              hotkeys="enter"
              className="min-w-max"
            >
              Next on Playlist
            </ActionButton>
            <ActionButton
              onClick={() => {
                playlist.clear();
                setSelectedPosition(null);
              }}
              hotkeys="escape"
              className="min-w-max"
            >
              Clear Playlist
            </ActionButton>
            <ActionButton onClick={revealAll} hotkeys="=" className="min-w-max">
              Reveal All
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

        <div className="flex flex-col gap-5 w-full md:w-1/3">
          <div className="flex flex-col gap-2">
            {playlists.all.map((playlistItem) => (
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
                <AiOutlinePlaySquare className="inline-block mb-1 mr-3" />
                {playlistItem.name}
                <span className="text-gray-600 italic">
                  {" "}
                  - {playlistItem.description}
                </span>
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

export default Learn;
