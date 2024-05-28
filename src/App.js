import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />

        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
