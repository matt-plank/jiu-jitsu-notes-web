import { Route, HashRouter as Router, Routes } from "react-router-dom";
import tokenStorage from "./api/tokenStorage";
import useAccountApi from "./hooks/api/useAccountApi";
import useGripsApi from "./hooks/api/useGripsApi";
import usePlaylistsApi from "./hooks/api/usePlaylistsApi";
import usePositionsApi from "./hooks/api/usePositionsApi";
import Grips from "./pages/grips";
import Guide from "./pages/guide";
import Home from "./pages/home";
import Learn from "./pages/learn";
import Login from "./pages/login";
import Playlists from "./pages/playlists";
import Positions from "./pages/positions";
import Register from "./pages/register";

function App() {
  const account = useAccountApi(tokenStorage.get());
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
            path="/learn"
            element={<Learn account={account} playlists={playlists} />}
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
            path="/positions"
            element={<Positions account={account} grips={grips} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
