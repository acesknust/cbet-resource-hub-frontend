import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CourseFiles from "./pages/CourseFiles";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/CourseFiles" element={<CourseFiles />} />
      </Routes>
    </Router>
  );
}

export default App;
