import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { token as tokenApi } from "./api/api";
import useAccount from "./hooks/useAccount";
import EditPositions from "./pages/editPositions";
import Home from "./pages/home";
import LearnPositions from "./pages/learnPositions";
import Login from "./pages/login";
import Playlists from "./pages/playlists";
import Register from "./pages/register";

function App() {
  const account = useAccount(tokenApi.fromStorage());

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home account={account} />} />
          <Route
            path="/positions"
            element={<LearnPositions account={account} />}
          />
          <Route path="/playlists" element={<Playlists account={account} />} />
          <Route path="/edit" element={<EditPositions account={account} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
