import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EditPositions from "./pages/editPositions";
import Home from "./pages/home";
import LearnPositions from "./pages/learnPositions";
import Playlists from "./pages/playlists";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/positions" element={<LearnPositions />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/edit" element={<EditPositions />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
