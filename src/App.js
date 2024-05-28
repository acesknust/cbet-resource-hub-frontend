import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import landingPage from "./pages/landingpage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<landingPage />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
