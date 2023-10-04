import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import tokenStorage from "./api/tokenStorage";
import useAccount from "./hooks/useAccount";
import useGripsApi from "./hooks/useGripsApi";
import usePlaylistsApi from "./hooks/usePlaylistsApi";
import usePositionsApi from "./hooks/usePositionsApi";
import EditPositions from "./pages/editPositions";
import Grips from "./pages/grips";
import Guide from "./pages/guide";
import Home from "./pages/home";
import LearnPositions from "./pages/learnPositions";
import Login from "./pages/login";
import Playlists from "./pages/playlists";
import Register from "./pages/register";

function App() {
  const account = useAccount(tokenStorage.get());
  const grips = useGripsApi();
  const playlists = usePlaylistsApi();
  const positions = usePositionsApi();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home account={account} />} />
          <Route path="/guide" element={<Guide account={account} />} />
          <Route
            path="/grips"
            element={<Grips account={account} grips={grips} />}
          />
          <Route
            path="/positions"
            element={<LearnPositions account={account} playlists={playlists} />}
          />
          <Route
            path="/playlists"
            element={
              <Playlists
                account={account}
                playlists={playlists}
                positions={positions}
              />
            }
          />
          <Route
            path="/edit"
            element={<EditPositions account={account} grips={grips} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
