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
  const accountDetails = useAccount(tokenApi.fromStorage());

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/positions" element={<LearnPositions />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/edit" element={<EditPositions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
