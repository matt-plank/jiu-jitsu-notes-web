import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { token as tokenApi } from "./api/api";
import useAccount from "./hooks/useAccount";
import useGripsApi from "./hooks/useGripsApi";
import usePlaylistsApi from "./hooks/usePlaylistsApi";
import EditPositions from "./pages/editPositions";
import Grips from "./pages/grips";
import Guide from "./pages/guide";
import Home from "./pages/home";
import LearnPositions from "./pages/learnPositions";
import Login from "./pages/login";
import Playlists from "./pages/playlists";
import Register from "./pages/register";

function App() {
  const account = useAccount(tokenApi.fromStorage());
  const grips = useGripsApi();
  const playlists = usePlaylistsApi();

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
          <Route path="/playlists" element={<Playlists account={account} />} />
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
