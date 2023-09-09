import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LearnPositions from "./pages/learnPositions";
import LearnTechniques from "./pages/learnTechniques";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/techniques" element={<LearnTechniques />} />
          <Route path="/positions" element={<LearnPositions />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
