import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LearnTechniques from "./pages/learnTechniques";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/techniques" element={<LearnTechniques />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
